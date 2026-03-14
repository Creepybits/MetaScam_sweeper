# MetaScam Sweeper
A lightweight, open-source browser extension designed to detect and warn users about the common "MetaProtect" PDF phishing scam circulating on Facebook Messenger.  
## Why this exists  
Meta has been slow to stop the surge of phishing attempts that leverage fake "official" administrative messages. These scams use psychological pressure—threatening account deletion—to trick users into downloading malicious PDFs.  

**MetaScam Sweeper** acts as a client-side watchdog. It monitors your Messenger chats for the specific structural signatures of these scams, regardless of the language your Facebook interface uses. It is designed to be a silent, zero-cost, and private layer of security.  

## Features  
* **Language-Agnostic**: Does not rely on text patterns, but on the underlying DOM structure of Facebook's interface.
* **Zero Server-Side Logic**: All analysis happens locally in your browser. Your private chat data is never sent to a server.
* **Native Feel**: Injects a clean, authoritative warning directly into the chat window before you fall for the bait.



## How to Install (Developer Mode)  
1. **Download**: Click the green "<> Code" button on this repository and select "Download ZIP".
2. **Extract**: Unzip the folder to a location on your computer.
3. **Open Extensions**: In Chrome or Edge, navigate to chrome://extensions/ (or edge://extensions/).
4. **Enable Dev Mode**: Toggle the "Developer mode" switch in the top-right corner.
5. **Load**: Click "Load unpacked" and select the folder you just extracted.

## Disclaimer  
This project is a community-driven security initiative. It is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc. Use it as a supplementary layer of security—always exercise caution when receiving unsolicited messages or unexpected file attachments.



