using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Outlook = Microsoft.Office.Interop.Outlook;
using System.Windows.Forms;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using System.Runtime.InteropServices;

namespace OutlookAddIn3
{
    public partial class ThisAddIn
    {
        public Outlook.Application OutlookApplication;
        public Outlook.Inspectors OutlookInspectors;
        public Outlook.Inspector OutlookInspector;
        public Outlook.MailItem OutlookMailItem;
        private Outlook.Application application;
        private const string rulesUrl = "http://localhost:3000/rules";
        private const string reportUrl = "http://localhost:3000/report";
        private const string dataUrl = "http://localhost:3000/data";
        private Rules rules;
        private readonly object syncLock = new object();
        private const string TO = "http://schemas.microsoft.com/mapi/proptag/0x0E04001E";
        private const string CC = "http://schemas.microsoft.com/mapi/proptag/0x0E03001E";
        private const string SUBJECT = "Subject";        



        private void ThisAddIn_Startup(object sender, System.EventArgs e)
        {
            OutlookInspectors = this.Application.Inspectors;
            OutlookApplication = this.Application.Application;
            OutlookInspectors.NewInspector +=
            new Microsoft.Office.Interop.Outlook.InspectorsEvents_NewInspectorEventHandler(OutlookInspectors_NewInspector);
            OutlookInspectors.NewInspector += new Microsoft.Office.Interop.Outlook.InspectorsEvents_NewInspectorEventHandler(OutlookInspectors_NewInspector);
            OutlookApplication.ItemSend += new Microsoft.Office.Interop.Outlook.ApplicationEvents_11_ItemSendEventHandler(OutlookApplication_ItemSend);
            searchSentMailUsingTable();
        }       

        private async void postHistory(Messages list)
        {
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            foreach(MessagePage page in list.items)
            {
                string postBody = JsonConvert.SerializeObject(page);
                HttpResponseMessage response = await client.PostAsync(dataUrl,
                    new StringContent(postBody, Encoding.UTF8, "application/json"));  // Blocking call!
                HttpContent content = response.Content;
                String result = await content.ReadAsStringAsync();
            }
        }

        private void searchSentMailUsingTable() {
            Outlook.NameSpace nameSpace = null;
            Outlook.Folder sentFolder = null;
            Outlook.Table sentTable = null;            
            Messages messages = new Messages(System.Security.Principal.WindowsIdentity.GetCurrent().Name);            
            try
            {
                nameSpace = OutlookApplication.GetNamespace("MAPI");
                sentFolder = nameSpace.GetDefaultFolder(
                    Outlook.OlDefaultFolders.olFolderSentMail) as Outlook.Folder;
                if (sentFolder != null)
                {
                    sentTable = sentFolder.GetTable();                    
                    sentTable.Columns.Add(TO);
                    sentTable.Columns.Add(CC);
                    while (!sentTable.EndOfTable)
                    {                        
                        Outlook.Row row = sentTable.GetNextRow();
                        messages.Add(new Message(row[TO], row[CC]));
                        Marshal.ReleaseComObject(row);
                    }
                    Marshal.ReleaseComObject(sentTable);
                }                    
            }
            finally
            {
                if (sentFolder != null) Marshal.ReleaseComObject(sentFolder);
                if (nameSpace != null) Marshal.ReleaseComObject(nameSpace);
            }
            if (messages.items.Count() > 0)
            {
                postHistory(messages);
            }
        }
        
        private async void reportIT(string from, string msg)
        {
            HttpClient client = new HttpClient();
            HttpContent content = new FormUrlEncodedContent(new[]
            {
                new KeyValuePair<string, string>("message", "from: "+from+", message: "+msg)
            });

            HttpResponseMessage response = await client.PostAsync(reportUrl, content);

        }

       
        void OutlookApplication_ItemSend(object Item, ref bool Cancel)
        {
            String msg = null;
            lock (syncLock)
            {
                msg = validateRules(OutlookMailItem.To, OutlookMailItem.CC);
            }
            if (msg != null)
            {
                reportIT(System.Security.Principal.WindowsIdentity.GetCurrent().Name, msg);
                MessageBox.Show("Company rules don't allow sending this message:\r\n" + msg 
                    + "\r\nPlease try again after issues resolved or contact your IT department");
                Cancel = true;
            }
        }

        private async void loadRules()
        {
            var timer = new System.Threading.Timer(async (e) =>
            {
                HttpClient client = new HttpClient();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                // List data response.
                HttpResponseMessage response = await client.GetAsync(rulesUrl);  // Blocking call!
                HttpContent content = response.Content;
                String result = await content.ReadAsStringAsync();
                lock (syncLock)
                {
                    rules = JsonConvert.DeserializeObject<Rules>(result);
                }
            }, null, 0, 60000);
        }

        private String validateRules(string to, string cc)
        {
            cc = cc == null ? "" : cc;
            foreach (Rule rule in rules.rules)
            {
                foreach(string addr in rule.emails)
                {
                    if (to.Contains(addr) || cc.Contains(addr))
                    {
                        foreach (string otherAddr in rule.disallowedEmails)
                        {
                            if (to.Contains(otherAddr) || cc.Contains(otherAddr))
                            {
                                return "mutually exclusive recepients: " + addr + " <-> " + otherAddr;
                            }
                        }
                    }
                }
            }
            return null;
        }

        void OutlookInspectors_NewInspector(Microsoft.Office.Interop.Outlook.Inspector Inspector)
        {
            OutlookInspector = (Outlook.Inspector)Inspector;
            if (Inspector.CurrentItem is Outlook.MailItem)
            {
                OutlookMailItem = (Outlook.MailItem)Inspector.CurrentItem;
            }

        }


        private void ThisAddIn_Shutdown(object sender, System.EventArgs e)
        {
            // Note: Outlook no longer raises this event. If you have code that 
            //    must run when Outlook shuts down, see http://go.microsoft.com/fwlink/?LinkId=506785
        }

        #region VSTO generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InternalStartup()
        {
            this.Startup += new System.EventHandler(ThisAddIn_Startup);
            this.Shutdown += new System.EventHandler(ThisAddIn_Shutdown);
        }

        #endregion
    }
}
