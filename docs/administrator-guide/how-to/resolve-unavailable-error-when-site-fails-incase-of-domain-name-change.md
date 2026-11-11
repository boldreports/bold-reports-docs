---
title: Fix Site Unavailable Error on Domain Change | Bold Reports
description: Resolve the unavailable error when a Bold Reports site fails after a domain name change by updating the Config.xml URLs and creating the site again in IIS.
keywords: report-platform, reporting
---

# Resolve the unavailable error in Bold Reports<sup>®</sup> sites up to version 2.x after a domain change

If a Bold Reports<sup>®</sup> Enterprise Reporting site fails to launch, change the Bold Reports<sup>®</sup> URL in the `Config.xml` file of Bold Reports<sup>®</sup> Enterprise Reporting. This fix applies to sites deployed on versions up to 2.x.

## How do I change the Bold Reports<sup>®</sup> URL?

To fix the unavailable error, update the Bold Reports<sup>®</sup> URL values in the configuration files and then create the site again.

1. Go to the deployed location and update the new binding values in the following configuration files:

   >By default, Bold Reports<sup>®</sup> will be deployed on C:\Bold Reports<sup>®</sup>.
  
   * Update the **`InternalAppReportUrl`** value in the config file at the following location:
    **`{Deployed Location}`**IDP\App_Data\Configuration\Config.xml
   ![IDP Config File](/static/assets/on-premise/images/getting-started/idp-config.png)
   * Update the **`InternalAppDataServiceUrl`** and **`InternalAppIdpUrl`** values in the config file at the following location:
   **`{Deployed Location}`**\Report Server\Configuration\Config.xml
   * If a file exists at the following location, change the **`InternalAppDataServiceUrl`** and **`InternalAppIdpUrl`** values in that config file too.
    **`{Deployed Location}`**\Report Server\App_Data\Configuration\Config.xml
   ![RS Config File](/static/assets/on-premise/images/getting-started/rs-config.png)
2. Restart the site in IIS and browse the site.

3. Delete the site by clicking the **Delete** option on the site listing page.
![Delete option in site](/static/assets/on-premise/images/how-to/delete-option-in-site.png)

4. Create a new site by following the [create a site](../../manage-sites/create-site/) steps.

## Frequently asked questions

### Where is Bold Reports<sup>®</sup> deployed by default?

By default, Bold Reports<sup>®</sup> is deployed on C:\Bold Reports<sup>®</sup>.

### Which values do I update in the Report Server Config.xml?

Update the **`InternalAppDataServiceUrl`** and **`InternalAppIdpUrl`** values. In the IDP Config.xml, update **`InternalAppReportUrl`**.

## See also

* [Create a site](../../manage-sites/create-site/)
* [Map a domain name to a Bold Reports<sup>®</sup> site before startup](../map-a-domain-name-to-bold-reports-site-before-startup/)
* [Change the binding in Bold Reports<sup>®</sup>](../how-to-change-the-binding-in-the-bold-reports/)
