(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{555:function(e,t,r){"use strict";r.r(t);var a=r(26),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"electrumx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#electrumx"}},[e._v("#")]),e._v(" ElectrumX")]),e._v(" "),r("p",[e._v("This document explains how to connect Electrum Wallet to an ElectrumX Server.")]),e._v(" "),r("p",[r("strong",[e._v("Note:")]),e._v(" the "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker version of BTCPay Server"),r("OutboundLink")],1),e._v(" (since Nov 7th 2019, version 1.0.3.137) supports full integration with "),r("a",{attrs:{href:"https://electrumx.readthedocs.io/en/latest/features.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElectrumX"),r("OutboundLink")],1),e._v(" is the most widely implemented software used for Electrum public servers that your local Electrum wallet relies upon to get all the details of, or broadcast transactions to the bitcoin blockchain.  Skip to Section 2 below, to read more on what this all means, and how to set it up on your BTCPay stack.")]),e._v(" "),r("h2",{attrs:{id:"how-to-integrate-electrumx-into-your-btcpay-server-and-connect-your-electrum-wallet-to-it-for-your-complete-privacy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-integrate-electrumx-into-your-btcpay-server-and-connect-your-electrum-wallet-to-it-for-your-complete-privacy"}},[e._v("#")]),e._v(" How to integrate ElectrumX into your BTCPay Server and connect your Electrum Wallet to it for your complete privacy")]),e._v(" "),r("h3",{attrs:{id:"only-available-in-btcpay-docker-version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#only-available-in-btcpay-docker-version"}},[e._v("#")]),e._v(" (only available in BTCPay docker version)")]),e._v(" "),r("p",[e._v("Before we proceed, it is important to understand how your Electrum wallet on your PC/Mac functions so well/fast, without having its own bitcoin full node.  In actual fact, Electrum Wallet relies on a community effort to maintain a bunch of servers all around the world with a bitcoin full node that do this job for you! They are called Electrum Servers, and you can be a part of that community to make that network even stronger, lets see how.")]),e._v(" "),r("p",[e._v("When you click the little traffic light at the bottom of your Electrum Wallet here:")]),e._v(" "),r("figure",[r("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68437133-5636c500-01c0-11ea-822c-6e72bd6d60ea.png",alt:"ElectrumWalletMainScreenLight"}})]),e._v(" "),r("p",[e._v('You will see this screen with a list of all the available Electrum servers that your wallet can connect to, normally with "Select Server Automatically" already checked:')]),e._v(" "),r("figure",[r("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68437521-8a5eb580-01c1-11ea-9ece-0666353a6742.png",alt:"ElectrumWalletServerList"}})]),e._v(" "),r("p",[e._v('While using Electrum Wallet with "Select Server Automatically" on is the easiest, every transaction that you make/browse/broadcast in your Electrum Wallet will be done via someone else\'s server - this is a privacy risk, that will be mitigated by setting up and using your own ElectrumX Server.')]),e._v(" "),r("h2",{attrs:{id:"section-21-enable-your-own-electrumx-server-fully-integrated-with-your-btcpay-servers-full-bitcoin-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#section-21-enable-your-own-electrumx-server-fully-integrated-with-your-btcpay-servers-full-bitcoin-node"}},[e._v("#")]),e._v(" Section 2.1 Enable Your Own ElectrumX Server (fully integrated with your BTCPay Server's full bitcoin node)")]),e._v(" "),r("h3",{attrs:{id:"prerequisites-mandatory"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites-mandatory"}},[e._v("#")]),e._v(" Prerequisites (mandatory):")]),e._v(" "),r("ol",[r("li",[e._v("Docker only: Only the "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker version of BTCPay Server"),r("OutboundLink")],1),e._v(" is supported.")]),e._v(" "),r("li",[e._v("Unpruned BTCPay node: Make sure your BTCPay implementation is NOT "),r("RouterLink",{attrs:{to:"/FAQ/FAQ-Synchronization/#can-i-skip-the-synchronization"}},[e._v("pruned")]),e._v(" (i.e. you have synched and stored from genesis block. Check that you do NOT use the opt-save-storage "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/README.md#generated-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[e._v("Environment Variable"),r("OutboundLink")],1),e._v(")")],1),e._v(" "),r("li",[e._v("Drive space: At least 400GB of drive space on the device where your docker volumes are stored is required (as at the writing of this documentation on 9th Nov 2019, the total hard drive space used is 333GB - with full node and ElectrumX enabled - and of course this will grow further over time).")]),e._v(" "),r("li",[e._v("Additional Fragments: You are familiar with how to use BTCPay's "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/README.md#environment-variables",target:"_blank",rel:"noopener noreferrer"}},[e._v("Additional Fragment"),r("OutboundLink")],1),e._v(" feature as part of your environment variable setup.")]),e._v(" "),r("li",[e._v("Server architecture: The (official) "),r("a",{attrs:{href:"https://github.com/lukechilds/docker-electrumx",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElectrumX docker"),r("OutboundLink")],1),e._v(" used here is only tested on a BTCPay Server running on x86_64 architecture. So far it is tested extensively on Ubuntu 18.04 and Debian Buster. Unless it is overhauled and tested well on Raspberry Pi (and other architectures) it likely will not work.")]),e._v(" "),r("li",[e._v("Basic Linux command line knowledge: is assumed.")])]),e._v(" "),r("h3",{attrs:{id:"how-will-enabling-electrumx-server-affect-an-existing-btcpay-implementation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-will-enabling-electrumx-server-affect-an-existing-btcpay-implementation"}},[e._v("#")]),e._v(" How will enabling ElectrumX Server affect an existing BTCPay implementation?:")]),e._v(" "),r("p",[e._v("Fundamentally, setting up ElectrumX in BTCPay server is simple, and will not affect the rest of your implementation. The only pre-requisites are as above. The "),r("a",{attrs:{href:"https://github.com/lukechilds/docker-electrumx",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElectrumX official docker release"),r("OutboundLink")],1),e._v(" is enabled in BTCPay by activating the "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/README.md#generated-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[e._v("additional fragment"),r("OutboundLink")],1),e._v(" called "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/docker-compose-generator/docker-fragments/opt-add-electrumx.yml",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("opt-add-electumx")]),r("OutboundLink")],1),e._v(". This fragment will not only enable and start the ElectrumX server, it will also enable "),r("code",[e._v("txindex=1")]),e._v(" in your bitcoin full node.  "),r("code",[e._v("txindex=1")]),e._v(" (Transaction Index=ON) is a bitcoin core feature required for ElectrumX to be able to serve your Electrum Wallet detailed transaction data for any transaction, directly from the blockchain, without getting it from any third party server.")]),e._v(" "),r("p",[e._v("If you have been running your BTCPay Server for a while but haven't had "),r("code",[e._v("txindex=1")]),e._v(" set until now, then it might take a few hours to build the index, this is no issue and it should not involve downtime of more than a few hours - better to set this to run overnight though when nobody will be using your node. Note: If you want to rebuild the index from scratch, launch bitcoind once with the "),r("code",[e._v("reindex=1")]),e._v(" option (warning: this reindex option may take a VERY long time, and is not enabled out of the box as you likely dont need it, and hence is not in scope of this document).")]),e._v(" "),r("h3",{attrs:{id:"steps-to-enable-electrumx-server-in-btcpay"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-enable-electrumx-server-in-btcpay"}},[e._v("#")]),e._v(" Steps to enable ElectrumX Server in BTCPay:")]),e._v(" "),r("p",[e._v('Here are all the steps to enable ElectrumX Server in your BTCPay node (read carefully as you may need to adjust for your specific setup, especially if you use other custom or conflicting "fragments" (pruning, less-memory etc.  To reiterate, you should NOT proceed further here if you run a pruned BTCPay node.')]),e._v(" "),r("ol",[r("li",[r("p",[e._v("ElectrumX Server is accessible for Electrum Wallets via TCP port 50002.  You need to open this port up fully at least to be available within your own network to any PC or Android device running Electrum Wallet, and turn on port forwarding (you can also port forward 50002 from your Internet/WAN, to enable other Electrum Wallet users from the Internet to query your server).")])]),e._v(" "),r("li",[r("p",[e._v("Enable the Docker Additional Fragment on your BTCPay node by running the following commands (this is assuming a brand new BTCPay installation with LND and ElectrumX, please tweak accordingly using the "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/README.md#generated-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant documentation"),r("OutboundLink")],1),e._v(":")])]),e._v(" "),r("li",[r("p",[e._v("Follow the "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker#full-installation-for-technical-users",target:"_blank",rel:"noopener noreferrer"}},[e._v("normal setup and install of BTCPay Server"),r("OutboundLink")],1),e._v(", then after this command "),r("code",[e._v("cd btcpayserver-docker")]),e._v(", follow the below instructions instead of those in the link.  If you already have a BTCPay Server running, then just follow from the next step.")])]),e._v(" "),r("li",[r("p",[e._v("Set your environment variables:")])])]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAY_HOST")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"YOURHOST.com"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("NBITCOIN_NETWORK")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mainnet"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_CRYPTO1")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"btc"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_REVERSEPROXY")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nginx"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_LIGHTNING")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"lnd"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LIGHTNING_ALIAS")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MY_LN"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LETSENCRYPT_EMAIL")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"you@example.com"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"opt-add-electrumx;opt-more-memory"')]),e._v("\n")])])]),r("p",[e._v("You can run all of that as one command after you tweak it to your needs.  The main part for our purposes in this guide of course is "),r("code",[e._v('BTCPAYGEN_ADDITIONAL_FRAGMENTS="opt-add-electrumx"')]),e._v(".  Note: "),r("code",[e._v("opt-more-memory")]),e._v(" can be removed if you like, but I really recommend it if your system has more than 1GB of RAM/memory that you can assign to BTCPay server, it will speed synching your node and the general performance of ElectrumX up drastically.")]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[r("p",[e._v("Set up or reconfigure BTCPay Server with ElectrumX:")]),e._v(" "),r("p",[r("code",[e._v("cd ~/BTCPayServer/btcpayserver-docker && . ./btcpay-setup.sh -i")])]),e._v(" "),r("p",[e._v('This will setup (or re-setup) your server with everything needed including ElectrumX, and it all should "just work".  But, it will trigger at least a couple of hours of syncing the '),r("code",[e._v("txindex")]),e._v(", and if it is a new server, could be a couple of days depending on your hardware.")])]),e._v(" "),r("li",[r("p",[e._v("WAIT for your node to fully sync:\nYou can check the status of bitcoin core sync by going to your domain for BTCPay server, and it will show you on the front page.  Or, you can check from the command line as well, using these commands:")]),e._v(" "),r("p",[r("code",[e._v("docker logs btcpayserver_bitcoind")]),e._v(" - this will show you the bitcoin core blockchain sync status (and ALL other info about your node, including any errors)")]),e._v(" "),r("p",[r("code",[e._v("docker logs generated_electrumx_1")]),e._v(" - this will show you the ElectrumX sync status.  Note: ElectrumX will NOT start syncing until bitcoin full node has finished syncing, you will see errors until that is finished and these can be ignored.")])])]),e._v(" "),r("p",[e._v("Once all syncing for both bitcoin and ElectrumX has finished you can proceed to the next step.  (Note: Electrum wallets will not connect to an Electrum server that has not finished synching)")]),e._v(" "),r("h2",{attrs:{id:"section-22-connect-your-electrum-wallet-desktop-or-android-to-your-electrumx-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#section-22-connect-your-electrum-wallet-desktop-or-android-to-your-electrumx-server"}},[e._v("#")]),e._v(" Section 2.2 Connect your Electrum Wallet (Desktop or Android) to your ElectrumX Server")]),e._v(" "),r("h3",{attrs:{id:"connect-to-electrumx-from-electrum-wallet-on-your-macpclinux-machine"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-electrumx-from-electrum-wallet-on-your-macpclinux-machine"}},[e._v("#")]),e._v(" Connect to ElectrumX from Electrum Wallet on your Mac/PC/Linux Machine:")]),e._v(" "),r("p",[e._v('Read all of this first before proceeding.  You may wish to do just the "Protip" below instead of the manual steps in the Electrum Wallet GUI.')]),e._v(" "),r("p",[e._v("Open Electrum Wallet.  When you click the traffic light at the bottom of your Electrum Wallet:")]),e._v(" "),r("figure",[r("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68437133-5636c500-01c0-11ea-822c-6e72bd6d60ea.png",alt:"ElectrumWalletMainScreenLight"}})]),e._v(" "),r("p",[e._v("You will see this screen with a list of all the available Electrum servers that your wallet can connect to, normally with "),r("code",[e._v("Select Server Automatically")]),e._v(" already checked:")]),e._v(" "),r("figure",[r("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68437521-8a5eb580-01c1-11ea-9ece-0666353a6742.png",alt:"ElectrumWalletServerList"}})]),e._v(" "),r("p",[e._v("Now is the time to UNCHECK that "),r("code",[e._v("Select Server Automatically")]),e._v(" setting, which will enable you to enter the IP address or domain or hostname of your ElectrumX Server.  In the case below, the ElectrumX server is on the local network at "),r("code",[e._v("192.168.1.3")]),e._v(" so we enter that manually (leave port as 50002) and press "),r("code",[e._v("close")]),e._v(".")]),e._v(" "),r("figure",[r("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68496320-4e276580-0252-11ea-8caf-facc8a246d70.png",alt:"EnterElectrumXServerIP"}})]),e._v(" "),r("p",[e._v("If all of the above worked well, and your node is healthy, you will get a green traffic light down the bottom right of the wallet interface as pictured here - that means success!:")]),e._v(" "),r("figure",[r("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68437133-5636c500-01c0-11ea-822c-6e72bd6d60ea.png",alt:"ElectrumWalletMainScreenLight"}})]),e._v(" "),r("h4",{attrs:{id:"protip-optionally-perform-the-above-steps-directly-in-electrum-wallet-config-file-before-even-opening-the-wallet-gui"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#protip-optionally-perform-the-above-steps-directly-in-electrum-wallet-config-file-before-even-opening-the-wallet-gui"}},[e._v("#")]),e._v(" Protip - optionally perform the above steps directly in Electrum Wallet config file before even opening the wallet GUI:")]),e._v(" "),r("p",[e._v("If you prefer to avoid connecting to other servers from the outset when you open Electrum Wallet, do the following before you open Electrum Wallet GUI.")]),e._v(" "),r("p",[e._v("In the Electrum Wallet folder ("),r("a",{attrs:{href:"https://electrum.readthedocs.io/en/latest/faq.html#where-is-my-wallet-file-located",target:"_blank",rel:"noopener noreferrer"}},[e._v("see here"),r("OutboundLink")],1),e._v(" if you don't know where that is), open and edit the "),r("code",[e._v("config")]),e._v(" file like this:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Find line: "),r("code",[e._v('"auto_connect": true,')]),e._v(" and switch it to: "),r("code",[e._v('"auto_connect": false,')]),e._v(" - this will prevent your Electrum Wallet from auto-connecting to other 3rd party Electrum Servers at launch time (to obtain block headers and transaction information).")])]),e._v(" "),r("li",[r("p",[e._v("Find line: "),r("code",[e._v('"oneserver": false,')]),e._v(" and switch it to: "),r("code",[e._v('"oneserver": true,')]),e._v(" - ensures that all data is obtained from just one server.")])]),e._v(" "),r("li",[r("p",[e._v("Find or add line: "),r("code",[e._v('"server": "SOMEIPADDRESS:50002:s",')]),e._v("and switch it to your own ElectrumX Server's IP address, in the example above this would be: "),r("code",[e._v('"server": "192.168.1.3:50002:s",')]),e._v("- hard code your IP address as the default upon opening the Wallet.")])])]),e._v(" "),r("p",[e._v("These 3 steps optional but recommended for full privacy by locking down Electrum Wallet to one single connection with your private server ("),r("a",{attrs:{href:"https://github.com/chris-belcher/electrum-personal-server#how-to",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reference"),r("OutboundLink")],1),e._v(").")]),e._v(" "),r("h3",{attrs:{id:"reflection-on-what-has-been-achieved"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reflection-on-what-has-been-achieved"}},[e._v("#")]),e._v(" Reflection on what has been achieved:")]),e._v(" "),r("p",[e._v("You are now running your very own private ElectrumX Server.  All Electrum Wallet related data transfer happens directly between your ElectrumX Server and the bitcoin blockchain, without going over any other 3rd party servers.  You have attained full bitcoin transaction privacy (at least from the perspective of your blockchain queries and transactions, payment/receive addresses etc - nobody except you and the blockchain can see what you are doing).")]),e._v(" "),r("h3",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting:")]),e._v(" "),r("p",[e._v("So there is one thing you may encounter, where even after you did everything correctly, you still get a red traffic light (which means not connected to any server) in the steps above.  Any other troubleshooting tips that people encounter can be added, I would suggest to make a PR to this document directly.")]),e._v(" "),r("ul",[r("li",[e._v("If you get a red traffic light, shutdown Electrum Wallet completely, then go to your Electrum Wallet folder ("),r("a",{attrs:{href:"https://electrum.readthedocs.io/en/latest/faq.html#where-is-my-wallet-file-located",target:"_blank",rel:"noopener noreferrer"}},[e._v("see here"),r("OutboundLink")],1),e._v(" if you don't know where that is).")])]),e._v(" "),r("p",[e._v("Inside the Electrum Wallet folder (in this case below, it is what it looks like on a Mac) locate the "),r("code",[e._v("certs")]),e._v(" directory and delete the certificate for the server you are trying to connect to, in this case "),r("code",[e._v("192.168.1.3")]),e._v(", by dragging it to the Trash.")]),e._v(" "),r("figure",[r("img",{attrs:{src:"https://user-images.githubusercontent.com/1388507/68497330-9a73a500-0254-11ea-9349-71bdb3bd9511.png",alt:"Certs"}})]),e._v(" "),r("p",[e._v("Start up Electrum Wallet again, and connect to your ElectrumX server.  If it is fully synched, it will now likely show a green traffic light, and you are good to go.")])])}),[],!1,null,null,null);t.default=o.exports}}]);