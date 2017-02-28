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
        private Rules rules;
        private readonly object syncLock = new object();

        private void ThisAddIn_Startup(object sender, System.EventArgs e)
        {
            OutlookInspectors = this.Application.Inspectors;
            OutlookApplication = this.Application.Application;
            OutlookInspectors.NewInspector +=
            new Microsoft.Office.Interop.Outlook.InspectorsEvents_NewInspectorEventHandler(OutlookInspectors_NewInspector);
            OutlookInspectors.NewInspector += new Microsoft.Office.Interop.Outlook.InspectorsEvents_NewInspectorEventHandler(OutlookInspectors_NewInspector);
            OutlookApplication.ItemSend += new Microsoft.Office.Interop.Outlook.ApplicationEvents_11_ItemSendEventHandler(OutlookApplication_ItemSend);
            loadRules();
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
                foreach(string addr in rule.accounts)
                {
                    if (to.Contains(addr) || cc.Contains(addr))
                    {
                        foreach (string otherAddr in rule.partners)
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
