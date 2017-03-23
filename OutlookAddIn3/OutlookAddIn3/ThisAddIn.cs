using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;
using Outlook = Microsoft.Office.Interop.Outlook;
using System.Windows.Forms;
using Office = Microsoft.Office.Core;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using System.Runtime.InteropServices;
using System.Reflection;

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
        private const string historyUrl = "http://localhost:3000/history";
        private Rules rules;
        private readonly object syncLock = new object();
        private const string TO = "http://schemas.microsoft.com/mapi/proptag/0x0E04001E";
        private const string CC = "http://schemas.microsoft.com/mapi/proptag/0x0E03001E";
        // taken from msdn.microsoft.com/en-us/library/ms526356(v=exchg.10).aspx
        private const string SUBJECT = "Subject";        



        private void ThisAddIn_Startup(object sender, System.EventArgs e)
        {
            OutlookInspectors = this.Application.Inspectors;
            OutlookApplication = this.Application.Application;
            OutlookInspectors.NewInspector +=
            new Microsoft.Office.Interop.Outlook.InspectorsEvents_NewInspectorEventHandler(OutlookInspectors_NewInspector);
            OutlookInspectors.NewInspector += new Microsoft.Office.Interop.Outlook.InspectorsEvents_NewInspectorEventHandler(OutlookInspectors_NewInspector);
            OutlookApplication.ItemSend += new Microsoft.Office.Interop.Outlook.ApplicationEvents_11_ItemSendEventHandler(OutlookApplication_ItemSend);
            // loadRules();
            //searchSentMail();
            searchSentMailUsingTable();
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

        private async void postHistory(List<String> list)
        {            
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            string postBody = JsonConvert.SerializeObject(list);
            HttpResponseMessage response = await client.PostAsync(historyUrl, 
                new StringContent(postBody, Encoding.UTF8, "application/json"));  // Blocking call!
            HttpContent content = response.Content;
            String result = await content.ReadAsStringAsync();           
        }

        private void searchSentMailUsingTable() {
            Outlook.NameSpace nameSpace = null;
            Outlook.Folder inboxFolder = null;
            Outlook.Table inboxTable = null;
            string items = string.Empty;
            int counter = 0;

            try
            {
                nameSpace = OutlookApplication.GetNamespace("MAPI");
                inboxFolder = nameSpace.GetDefaultFolder(
                    Outlook.OlDefaultFolders.olFolderSentMail) as Outlook.Folder;
                if (inboxFolder != null)
                {
                    inboxTable = inboxFolder.GetTable();                    
                    inboxTable.Columns.Add(TO);
                    inboxTable.Columns.Add(CC);
                    while (!inboxTable.EndOfTable)
                    {
                        counter++;
                        if (counter < 50)
                        {
                            Outlook.Row row = inboxTable.GetNextRow();
                            items += "TO: " + row[TO] + "\nCC: " + row[CC] + "\nSUBJECT: " + row[SUBJECT] + "\n";
                            Marshal.ReleaseComObject(row);
                        }
                    }
                    Marshal.ReleaseComObject(inboxTable);
                    MessageBox.Show("total items: "+counter+"\n"+items);
                }
            }
            finally
            {
                if (inboxFolder != null) Marshal.ReleaseComObject(inboxFolder);
                if (nameSpace != null) Marshal.ReleaseComObject(nameSpace);
            }
        }

        Outlook.Application oApp;
        Outlook._NameSpace oNS;
        Outlook.MAPIFolder oFolder;
        Outlook._Explorer oExp;

        public Outlook.MAPIFolder mailsFromThisFolder { get; private set; }

        private void test()
        {
            oApp = OutlookApplication;
            oNS = (Outlook._NameSpace)oApp.GetNamespace("MAPI");
            oFolder = oNS.GetDefaultFolder(Outlook.OlDefaultFolders.olFolderInbox);
            oExp = oFolder.GetExplorer(false);
            oNS.Logon(Missing.Value, Missing.Value, false, true);

            Outlook.MAPIFolder mailsFromThisFolder;

            Outlook.MAPIFolder mainFolder = oNS.GetDefaultFolder(Outlook.OlDefaultFolders.olFolderInbox);

            foreach (Outlook.MAPIFolder folder in mainFolder.Folders)
            {
                GetFolders(folder);
            }
        }

public void GetFolders(Outlook.MAPIFolder folder)
        {
            if (folder.Folders.Count == 0)
            {
                if (folder.Name == "Folder Name")
                {
                    Console.WriteLine(folder.FullFolderPath);
                    mailsFromThisFolder = folder;
                }
            }
            else
            {
                foreach (Outlook.MAPIFolder subFolder in folder.Folders)
                {
                    GetFolders(subFolder);
                }
            }
        

        Outlook.Items items = mailsFromThisFolder.Items;
foreach (Outlook.MailItem mail in items)
{
    //do someting
}

        }

    private void searchSentMail()
        {
            List<String> list = new List<string>();
            list.Add(System.Security.Principal.WindowsIdentity.GetCurrent().Name);
            Outlook.NameSpace nameSpace = null;
            Outlook.Folder outboxFolder = null;
            Outlook.Folder inboxFolder = null;
            Outlook.Items outboxItems = null;           

            try
            {
                nameSpace = OutlookApplication.GetNamespace("MAPI");
                outboxFolder = nameSpace.GetDefaultFolder(
                    Outlook.OlDefaultFolders.olFolderSentMail) as Outlook.Folder;

                inboxFolder = nameSpace.GetDefaultFolder(
                    Outlook.OlDefaultFolders.olFolderOutbox) as Outlook.Folder;
                if (outboxFolder != null)
                {
                    outboxItems = outboxFolder.Items;
                    for (int i = 1; i <= outboxItems.Count; i++)
                    {
                        Outlook.MailItem mail = outboxItems[i] as Outlook.MailItem;
                        if (mail != null)
                        {
                            list.Add(mail.To);                            
                            Marshal.ReleaseComObject(mail);
                        }
                    }
                    postHistory(list);
                }
            }
            finally
            {
                if (outboxItems != null) Marshal.ReleaseComObject(outboxItems);
                if (outboxFolder != null) Marshal.ReleaseComObject(outboxFolder);
                if (nameSpace != null) Marshal.ReleaseComObject(nameSpace);
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
