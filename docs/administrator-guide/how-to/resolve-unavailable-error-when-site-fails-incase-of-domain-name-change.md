---
title: Resolve unavailable error incase of domain name change
description: This documentation explains how to resolve unavailable error when site fails incase of domain name change on Bold Reports.
keywords: report-platform, reporting
---

# How to resolve unavailable error when deploying on Bold Reports site

If Bold Reports Enterprise Reporting site fails to launch, you have to change the Bold Reports URL in `Config.xml` file of Bold Reports Enterprise Reporting.

The following steps to change the Bold Reports URL:

1. Go to the deployed location and update the new binding values in the following configuration files.

   >By default, Bold Reports will be deployed on C:\Bold Reports.
  
   * Update the **`InternalAppReportUrl`** value in config file from the following location.
    **`{Deployed Location}`**IDP\App_Data\Configuration\Config.xml
   ![IDP Config File](/static/assets/on-premise/images/getting-started/idp-config.png)
   * Update the **`InternalAppDataServiceUrl`**, and **`InternalAppIdpUrl`** values in the config file from the following location.
   **`{Deployed Location}`**\Report Server\Configuration\Config.xml
   * If file exists in below location, change the **`InternalAppDataServiceUrl`**, and **`InternalAppIdpUrl`** values in the config file.
    **`{Deployed Location}`**\Report Server\App_Data\Configuration\Config.xml
   ![RS Config File](/static/assets/on-premise/images/getting-started/rs-config.png)
2. Restart the site in IIS and browse the site.

3. Delete the site by clicking the "Delete" option from site listing page.
![Delete option in site](/static/assets/on-premise/images/how-to/delete-option-in-site.png)

4. Create a new site by following this [link](../../manage-tenants/create-site/).
