(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{588:function(t,e,s){"use strict";s.r(e);var a=s(26),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"forward-ports-with-a-reverse-ssh-tunnel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#forward-ports-with-a-reverse-ssh-tunnel"}},[t._v("#")]),t._v(" Forward ports with a reverse SSH tunnel")]),t._v(" "),s("h2",{attrs:{id:"advantages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advantages"}},[t._v("#")]),t._v(" Advantages:")]),t._v(" "),s("ul",[s("li",[t._v("no port forwarding needed on the LAN of the host")]),t._v(" "),s("li",[t._v("encrypted connection")]),t._v(" "),s("li",[t._v("hides the IP of the host")])]),t._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements:")]),t._v(" "),s("ul",[s("li",[t._v("a Virtual Private Server (VPS) - eg. a minimal package on Lunanode for ~3.5$/month")]),t._v(" "),s("li",[t._v("root access on the VPS - only root can forward ports under no. 1000")]),t._v(" "),s("li",[t._v("ssh access to the host computer (where the ports will be forwarded from)")])]),t._v(" "),s("h2",{attrs:{id:"on-the-host-computer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-the-host-computer"}},[t._v("#")]),t._v(" On the host computer")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Check for an ssh public key:\n"),s("code",[t._v("$ cat ./.ssh/*.pub")])])]),t._v(" "),s("li",[s("p",[t._v("if there is none generate one (keep pressing ENTER):\n"),s("code",[t._v("$ ssh-keygen -t rsa -b 4096")])])]),t._v(" "),s("li",[s("p",[t._v("copy the ssh public key over to the VPS (fill in the VPS_IP_ADDRESS).\nWill be prompted for the root password of the VPS.\n"),s("code",[t._v("$ cat ~/.ssh/id_rsa.pub | ssh root@VPS_IP_ADDRESS 'cat >> ~/.ssh/authorized_keys && chmod -R 700 ~/.ssh/'")])])])]),t._v(" "),s("h2",{attrs:{id:"working-on-the-vps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-on-the-vps"}},[t._v("#")]),t._v(" Working on the VPS")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("login as root or run:\n"),s("code",[t._v("sudo su -")])])]),t._v(" "),s("li",[s("p",[t._v("edit the sshd config:\n"),s("code",[t._v("sudo nano /etc/ssh/sshd_config")])])]),t._v(" "),s("li",[s("p",[t._v("make sure these entries are active (uncommented, meaning there is no "),s("code",[t._v("#")]),t._v(" at the beggining of the line).\nCan just paste these on the end of the file:")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("RSAAuthentication yes\nPubkeyAuthentication yes\nGatewayPorts yes\nAllowTcpForwarding yes\nClientAliveInterval 60\n")])])]),s("p",[t._v("CTRL+O, ENTER to save, CTRL+X to exit.")]),t._v(" "),s("ul",[s("li",[t._v("restart the sshd service (WARNING: you can lose access at this point if the config is wrong):\n"),s("code",[t._v("sudo systemctl restart sshd")])])]),t._v(" "),s("h2",{attrs:{id:"back-to-the-host-computer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#back-to-the-host-computer"}},[t._v("#")]),t._v(" Back to the host computer")]),t._v(" "),s("h3",{attrs:{id:"set-up-a-systemd-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-a-systemd-service"}},[t._v("#")]),t._v(" Set up a systemd service")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("create the service file:\n"),s("code",[t._v("sudo nano /etc/systemd/system/autossh-tunnel.service")])])]),t._v(" "),s("li",[s("p",[t._v("Paste the following and fill in the VPS_IP_ADDRESS.\nAdd or remove ports as required.")])])]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[Unit]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Description")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("AutoSSH tunnel service")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("After")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("network.target")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[Service]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("root")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Group")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("root")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Environment")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v('"AUTOSSH_GATETIME=0"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v('/usr/bin/autossh -C -M 0 -v -N -o "ServerAliveInterval=60" -R 9735:localhost:9735 -R 443:localhost:443 -R 80:localhost:80 -R root@VPS_IP_ADDRESS')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("StandardOutput")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("journal")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[Install]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WantedBy")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("multi-user.target")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("Enable and start the service:\n"),s("code",[t._v("$ sudo systemctl enable autossh-tunnel")]),t._v(" "),s("code",[t._v("$ sudo systemctl start autossh-tunnel")])])]),t._v(" "),s("li",[s("p",[t._v("The port forwarding with a reverse ssh-tunnel is now complete.\nYou should be able access the ports/services of the host computer through the IP of the VPS.")])])]),t._v(" "),s("h2",{attrs:{id:"monitoring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[t._v("#")]),t._v(" Monitoring")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Check if there are any errors on the host computer:\n"),s("code",[t._v("$ sudo journalctl -f -n 20 -u autossh-tunnel")])])]),t._v(" "),s("li",[s("p",[t._v("To check if tunnel is active on the VPS:\n"),s("code",[t._v("$ netstat -tulpn")])])])]),t._v(" "),s("h2",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),s("p",[t._v("https://github.com/rootzoll/raspiblitz/blob/master/FAQ.md#how-to-setup-port-forwarding-with-a-ssh-tunnel")]),t._v(" "),s("p",[t._v("https://stadicus.github.io/RaspiBolt/raspibolt_21_security.html#login-with-ssh-keys")])])}),[],!1,null,null,null);e.default=n.exports}}]);