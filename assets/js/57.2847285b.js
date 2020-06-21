(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{565:function(e,t,a){"use strict";a.r(t);var r=a(26),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"btcpay-server-wallet-faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-wallet-faq"}},[e._v("#")]),e._v(" BTCPay Server Wallet FAQ")]),e._v(" "),a("p",[e._v("This document contains frequently asked questions related to BTCPay Server's "),a("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("internal wallet")]),e._v(".")],1),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#what-is-btcpay-server-wallet"}},[e._v("What is BTCPay Server wallet?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#how-to-set-up-my-wallet-with-btcpay-server"}},[e._v("How to set up my wallet with BTCPay Server?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#can-i-use-a-hardware-wallet-with-btcpay-server"}},[e._v("Can I use a hardware wallet with BTCPay Server?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#do-i-have-to-use-btcpay-server-wallet"}},[e._v("Do I have to use BTCPay Server wallet?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#missing-payments-in-my-software-or-hardware-wallet"}},[e._v("Missing payments in wallet?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#what-is-a-derivation-scheme"}},[e._v("What is a derivation scheme?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#i-dont-see-lightning-network-payments-in-btcpay-wallet"}},[e._v("I don't see Lightning network payments in BTCPay wallet?")])])]),e._v(" "),a("h2",{attrs:{id:"what-is-btcpay-server-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-btcpay-server-wallet"}},[e._v("#")]),e._v(" What is BTCPay Server wallet?")]),e._v(" "),a("p",[e._v("BTCPay Server has an internal wallet which you can use to view incoming and outgoing associated Bitcoin transactions and spend your funds.")]),e._v(" "),a("p",[e._v("It works like any other wallet, but has enhanced privacy features (non-custodial, no third-parties, verified with a dedicated full node, etc.) by default and also solves certain UX problems you may encounter when [using an existing wallet] with BTCPay Server.")]),e._v(" "),a("p",[e._v("For more information on how to use the built-in wallet "),a("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("check this page")]),e._v(". To use the internal wallet, you first need to "),a("RouterLink",{attrs:{to:"/WalletSetup/"}},[e._v("set up the wallet")]),e._v(" with your BTCPay store.")],1),e._v(" "),a("h2",{attrs:{id:"how-to-set-up-my-wallet-with-btcpay-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-up-my-wallet-with-btcpay-server"}},[e._v("#")]),e._v(" How to set up my wallet with BTCPay Server?")]),e._v(" "),a("p",[e._v("Check our in-depth documentation on "),a("RouterLink",{attrs:{to:"/WalletSetup/"}},[e._v("how to set up a wallet")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"can-i-use-a-hardware-wallet-with-btcpay-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-use-a-hardware-wallet-with-btcpay-server"}},[e._v("#")]),e._v(" Can I use a hardware wallet with BTCPay Server?")]),e._v(" "),a("p",[e._v("The internal wallet has a "),a("RouterLink",{attrs:{to:"/Vault/"}},[e._v("built in hardware wallet integration")]),e._v(". You can use a supported hardware wallet with the "),a("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("BTCPay wallet")]),e._v(".")],1),e._v(" "),a("p",[e._v("This  means that you're using a hardware wallet without leaking information to third-party apps or servers unlike the default software for the devices, since the wallet relies on the full node in your BTCPay.")]),e._v(" "),a("h2",{attrs:{id:"do-i-have-to-use-btcpay-server-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-i-have-to-use-btcpay-server-wallet"}},[e._v("#")]),e._v(" Do I have to use BTCPay Server wallet?")]),e._v(" "),a("p",[e._v("By default BTCPay Server only requires an extended public key. To receive payments to your BTCPay store, you need to provide an extended public key (xpub) which you can generate in an external (existing) wallet. You do not have to use the built in wallet at all, you can manage funds in your "),a("RouterLink",{attrs:{to:"/WalletSetup/#use-an-existing-wallet"}},[e._v("existing wallet")]),e._v(".")],1),e._v(" "),a("p",[e._v("However, it's recommended to use the built in wallet for funds management. The built in wallet not only improves your privacy by default, but also solves user-experience issues like "),a("a",{attrs:{href:"#missing-payments-in-my-software-or-hardware-wallet"}},[e._v("gap-limit")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"missing-payments-in-my-software-or-hardware-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#missing-payments-in-my-software-or-hardware-wallet"}},[e._v("#")]),e._v(" Missing payments in my software or hardware wallet")]),e._v(" "),a("p",[e._v("If you're using an "),a("RouterLink",{attrs:{to:"/WalletSetup/#use-an-existing-wallet"}},[e._v("existing software or a hardware wallet")]),e._v(" with your BTCPay Server, you may experience a discrepancy between balance in your BTCPay wallet and the external wallet's web, destkop or mobile app. This discrepancy is usually related to a "),a("strong",[e._v("gap-limit")]),e._v(" issue.")],1),e._v(" "),a("h3",{attrs:{id:"the-gap-limit-problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-gap-limit-problem"}},[e._v("#")]),e._v(" The gap limit problem")]),e._v(" "),a("p",[e._v("The majority of third party wallets are "),a("a",{attrs:{href:"https://en.bitcoin.it/wiki/Lightweight_node",target:"_blank",rel:"noopener noreferrer"}},[e._v("light wallets"),a("OutboundLink")],1),e._v(", which share a node between many users. To prevent performance issues, both light and full node reliant wallets limit the amount (typically 20) of addresses without balance that they track on the blockchain. BTCPay Server generates a new address for every invoice.")]),e._v(" "),a("p",[e._v("With above in mind, after BTCPay Server generates 20 consecutive unpaid invoices, the external wallet stops fetching the transactions, assuming no new transactions occurred. Once 21st, 22nd, etc invoices are paid, your external wallet won't show them.")]),e._v(" "),a("p",[e._v("On the other hand, internally, BTCPay Server wallet tracks any address it generates itself along with a much greater gap limit. It does not rely on a third-party and is able to always show a correct balance.")]),e._v(" "),a("h3",{attrs:{id:"the-gap-limit-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-gap-limit-solution"}},[e._v("#")]),e._v(" The gap limit solution")]),e._v(" "),a("p",[e._v("It's not easy to solve the gap limit problem. You have two options:")]),e._v(" "),a("ol",[a("li",[e._v("Increase the gap limit in your existing (external) wallet")]),e._v(" "),a("li",[e._v("Use internal BTCPay Server wallet")])]),e._v(" "),a("h4",{attrs:{id:"1-increasing-the-gap-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#1-increasing-the-gap-limit"}},[e._v("#")]),e._v(" 1. Increasing the gap limit")]),e._v(" "),a("p",[e._v("If your "),a("RouterLink",{attrs:{to:"/WalletSetup/#use-an-existing-wallet"}},[e._v("external/existing wallet")]),e._v(" allows gap-limit configuration, the easy fix is to increase it. However, majority of wallets do not allow this.")],1),e._v(" "),a("p",[e._v("The only wallets that allow gap-limit configuration, that we're aware of are "),a("RouterLink",{attrs:{to:"/ElectrumWallet/"}},[e._v("Electrum")]),e._v(" and "),a("RouterLink",{attrs:{to:"/WasabiWallet/"}},[e._v("Wasabi")])],1),e._v(" "),a("p",[e._v("Unfortunately, with any other wallet you're likely to encounter a problem.")]),e._v(" "),a("p",[e._v("If you'd like to use an "),a("RouterLink",{attrs:{to:"/WalletSetup/#use-an-existing-wallet"}},[e._v("external wallet")]),e._v(" to manage the funds, we recommend that you recover your existing wallet into one of following wallets and increase the gap limit:")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ElectrumWallet/#configuring-the-gap-limit-in-electrum"}},[e._v("Increasing the gap limit in Electrum")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/WasabiWallet/#configuring-the-gap-limit-in-wasabi"}},[e._v("Increasing the gap limit in Wasabi")])],1)]),e._v(" "),a("p",[e._v("After you've increased the gap limit, the balance in your external wallet and BTCPay wallet should match. If they don't, you may have set up your derivation scheme incorrectly.")]),e._v(" "),a("h4",{attrs:{id:"2-use-the-internal-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#2-use-the-internal-wallet"}},[e._v("#")]),e._v(" 2. Use the internal wallet")]),e._v(" "),a("p",[e._v("For best user-experience and privacy, we recommend that you consider dropping external wallets and start using the "),a("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("BTCPay Server's internal wallet")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"what-is-a-derivation-scheme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-derivation-scheme"}},[e._v("#")]),e._v(" What is a derivation scheme?")]),e._v(" "),a("p",[e._v("No matter "),a("RouterLink",{attrs:{to:"/WalletSetup/"}},[e._v("how you set up your wallet")]),e._v(", BTCPay Server uses a "),a("code",[e._v("derivation scheme")]),e._v(" to represent the destination of the funds received by your invoices. The destination of those funds will be your wallet, located by the xpubkey that you provide.")],1),e._v(" "),a("p",[e._v("Using different derivation schemes with your xpub, you can also choose to create various receiving address types, shown in your store invoices.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Address Type")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Example")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("P2WPKH")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("xpub...")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("P2SH-P2WPKH")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("xpub...-[p2sh]")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("P2PKH")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("xpub...-[legacy]")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("Multi-sig P2WSH")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2-of-xpub1...-xpub2...")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("Multi-sig P2SH-P2WSH")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2-of-xpub1...-xpub2...-[p2sh]")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("Multi-sig P2SH")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2-of-xpub1...-xpub2...-[legacy]")])])])]),e._v(" "),a("h2",{attrs:{id:"i-dont-see-lightning-network-payments-in-btcpay-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-dont-see-lightning-network-payments-in-btcpay-wallet"}},[e._v("#")]),e._v(" I don't see Lightning network payments in BTCPay wallet?")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/LightningNetwork/"}},[e._v("Lightning Network")]),e._v(" and the BTCPay Server "),a("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("wallet")]),e._v(" are different concepts. The internal BTCPay Server wallet only shows on-chain payments.")],1),e._v(" "),a("p",[e._v("In the future they may become unified but for the time being, to manage your Lightning Network funds, use Ride the Lightning, ThunderHub, an externally connected Lightning wallet (Zeus, Zap, Spark, etc), or the Command Line Interface (CLI).")])])}),[],!1,null,null,null);t.default=i.exports}}]);