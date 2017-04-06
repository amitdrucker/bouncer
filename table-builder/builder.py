import json

from exchangelib import DELEGATE, Account, Credentials

credentials = Credentials(
    username='OLYMPUS\\druker',
    password=''
)
account = Account(
    primary_smtp_address='a.druker@f5.com',
    credentials=credentials,
    autodiscover=True,
    access_type=DELEGATE
)

data = {}
# this should somehow be taken from the exchange server alongside with the email address
allCredentials = []
for cred in allCredentials:
    account = Account(
        primary_smtp_address=cred[0],
        credentials=cred[1],
        autodiscover=True,
        access_type=DELEGATE
    )
    # this should be the same name as in what we send from outlook
    userName = 'aaa'
    allAccountMails = account.sent.all().order_by('-datetime_received')
    current = {}
    data[userName] = current
    for item in allAccountMails:
        addresses = []
        addresses += item.to_recipients + item.cc_recipients
        for addr in addresses:
            if addr not in current:
                current[addr] = set()
            for otherAddr in addresses:
                current[addr].add(otherAddr)
open('data.json', 'w').write(json.dumps(data))
