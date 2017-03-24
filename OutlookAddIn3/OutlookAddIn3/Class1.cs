
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Windows.Forms;

public class Rule
{
    public List<string> emails { get; set; }
    public List<string> allowedEmails { get; set; }
    public List<string> disallowedEmails { get; set; }
}

public class Rules
{
    public List<Rule> rules { get; set; }    
}

public class Message
{
    public Message(string to, string cc)
    {
        this.to = to;
        this.cc = cc;
    }
    public string to;
    public string cc;
}

public class Messages
{
    private const int page = 100;
    public List<MessagePage> items = new List<MessagePage>();
    public string sender;
    public Messages(string sender)
    {
        this.sender = sender;
    }

    public void Add(Message msg)
    {
        if (items.Count == 0 || items[items.Count - 1].list.Count >= page)
        {            
            items.Add(new MessagePage(this.sender));
        }
        items[items.Count - 1].list.Add(msg);
    }
}

public class MessagePage
{
    public List<Message> list = new List<Message>();
    public string sender;
    public MessagePage(string sender)
    {
        this.sender = sender;
    }
}