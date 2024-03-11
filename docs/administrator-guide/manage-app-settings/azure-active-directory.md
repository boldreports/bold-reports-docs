---
title: Configure Azure Active Directory | Bold Reports On-Premise
description: Configure Azure Active Directory to import users and groups and synchronize their details after importing into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Azure Active Directory Settings

This section explains what [Azure Active Directory](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) details are needed and how to configure Azure Active Directory with Bold Reports to import users and groups from the Azure Active Directory.

## Steps to register the Bold Reports application in Azure Active Directory to import users and groups

You may consult the [documentation](https://help.boldreports.com/enterprise-reporting/administrator-guide/how-to/set-up-azure-active-directory/#steps-to-register-bold-reports-on-premise-application-in-azure-active-directory) for guidance on registering the Bold Reports application in Azure Active Directory to facilitate the importation of users and groups.

## Configure Azure Active Directory details in Bold Reports to import users and groups

To configure Bold Reports with your Azure Active Directory, you will need the following Azure Active Directory details:

1. Click the **settings** option in the left-side panel of the Report Server, then navigate to the **User Directories** tab, and select **Azure Active Directory**, as shown in the following image.
    ![Azure Active Directory Settings](/static/assets/on-premise/images/settings/azure-active-directory-settings.png)

2. The tenant name, client ID, and client secret code are required to configure Bold Reports On-Premise with Azure Active Directory.

    * **Tenant name:** It is the default domain name of your Active Directory. Navigate to the `Azure Active Directory` you've created and copy the domain name from there.
        ![Tenant Name](/static/assets/on-premise/images/settings/tenant-name.png)

    * **Client ID:** It is the Client ID of the Bold Reports application in your Azure Active Directory. Navigate to the registered application, then copy the `Application ID` from the `Overview` section, and paste it here.
        ![Client ID](/static/assets/on-premise/images/settings/app-id.png)

    * **Client secret code:** It is the secure key of the Bold Reports application you created in your Azure Active Directory. Navigate to `Certificates & secrets`, locate the keys saved for the application, and then select the `value`.
        ![Client Secret](/static/assets/on-premise/images/settings/keys.png)

3. Click **Test Connection** to validate the connection with the given details, and then click **Save**.
        ![Save Azure Active Details](/static/assets/on-premise/images/settings/save-azure-active.png)