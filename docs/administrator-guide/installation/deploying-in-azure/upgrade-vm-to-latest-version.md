---
layout: post
title: Stay Current, Update Bold Reports to the  new Edition
description: Upgrade to the latest Bold Reports for enhanced analytics and performance. Leverage advanced features today for a superior data experience character count
platform: bold-reports
documentation: ug
---

# Upgrade to the latest version of Bold Reports Enterprise Edition

To upgrade your Bold Reports Server VM to the latest source from older versions, follow these steps:

1. Connect to the Bold Reports Server VM using a Remote Desktop Connection (RDP) by clicking on `Connect` in the virtual machine window. A Remote Desktop Protocol (`.rdp`) file will be downloaded from the Azure portal.
  ![self-vm-connect](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-connect.png)
  ![self-vm-connect](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-connect2.png)

2. Open the downloaded .rdp file and click on `Connect` when prompted with the unknown publisher warning.
  ![self-vm-connect-unknown-publisher](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-connect-unknown-publisher.png)

3. Enter the credentials provided when deploying the VM and click `OK`.
  ![self-vm-credentials](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-credentials.png)

4. After a successful connection, the identity verification window will be displayed, as shown below. Click `Yes`to accept the certificate problems and connect to the virtual machine.
  ![self-vm-connect-verfication](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-connect-verification.png)

5. Once connected to the virtual machine, follow the provided [steps](../../../upgrade/on-premises/upgrade-bold-reports-to-latest-version/) to upgrade the Bold Reports Server to the latest version.