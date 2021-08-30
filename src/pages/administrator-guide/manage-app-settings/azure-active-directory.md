---
title: Configure Azure Active Directory | Bold Reports On-Premise
description: Configure Azure Active Directory to import users and groups and synchronize their details after importing into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Azure Active Directory Settings

You should configure the Azure Active Directory settings to import users and groups from the Azure Active Directory and synchronize their details after importing into the Bold Reports On-Premise. To configure the [Azure Active Directory](https://azure.microsoft.com/en-us/services/active-directory/) with the Bold Reports On-Premise, follow these steps:

Click the settings option in the Report Server left-side panel and navigate to USER DIRECTORY tab, and then select **Azure Active Directory** as shown in the following image.
![Azure Active Directory Settings](/static/assets/on-premise/images/settings/azure-active-directory-settings.png)

The tenant name, client ID, and client secret code are required to configure the Bold Reports On-Premise with Azure Active Directory.

    * Tenant name: Default domain name of your Active Directory.
    * Client ID: Client ID of the Report Server application created in your Azure Active Directory.
    * Client secret code: Secure key of the Report Server application, which is created in your Azure Active Directory.