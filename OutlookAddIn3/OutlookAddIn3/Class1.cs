
using System.Collections.Generic;

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
