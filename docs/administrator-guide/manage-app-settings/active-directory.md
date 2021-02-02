---
layout: post
title: Configure Active Directory | Report Server | Syncfusion
description: Configure Active Directory to import users and groups and synchronize their details after importing into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Configure Active Directory settings

You should configure the Active Directory settings to import users and groups from the Windows Active Directory and synchronize their details after importing into the Bold Reports On-Premise. To configure [Active Directory](https://msdn.microsoft.com/en-us/library/windows/desktop/aa746492) with the Bold Reports On-Premise, follow these steps:

1. Click the setting option in the Report Server left-side panel and navigate to the AUTHENTICATION tab, and then select **Windows Active Directory** as shown in the following image.
![Active Directory Settings](/static/assets/on-premise/images/settings/windows-active-directory-settings.png)

2. Set the following Active Directory details of your Windows Active Directory.

    * **Username and Password**: Username and password of the user present in the Active Directory domain.
    * **LDAP URL**: IP or DNS name of the Windows Server, where you have Active Domain Services enabled. For example, `LDAP://192.168.1.1`.
    * **Distinguished Name**: FQDN of the Active Directory. Follow the given procedure to find out the distinguished name of your Active Directory:
        1. Go to Run(Win + R) and type `sysdm.cpl` in a machine, which is connected to the Active Directory or in the Windows Server, where you have Active Directory Domain Services enabled.
        ![Execute sysdm.cpl command](/static/assets/on-premise/images/settings/run-sysdm-command.png)
        2. The `System Properties` dialog will be opened, and you can find the distinguished name labeled as `Domain`.
        ![Distinguished Name - Domain](/static/assets/on-premise/images/settings/view-active-directory-user-domain.png)
    > For example, if your Domain is `www.example.com`, then you have to type as `dc=www,dc=example,dc=com`.

    * **Enable SSL**: Enable this check box, if your Windows Server needs SSL connection to connect to the Active Directory.
    * **Port Number**: Default port for non SSL connections is 389 and for SSL connections is 636.

3. Click **Test Connection** to validate the connection with given details and click **Save**.