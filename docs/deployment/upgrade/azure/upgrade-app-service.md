---
layout: post
title: Upgrade App Service from v2.x to v2.4.19 | Bold Reports
description: Upgrade a Bold Reports Azure App Service from v2.x to v2.4.19 in the Azure portal by reconnecting the Deployment Center to the Bold Reports GitHub repository.
platform: report-platform
documentation: ug
---

# Upgrade Bold Reports<sup>®</sup> Azure App Service version from v2.x to v2.4.19

You can upgrade a Bold Reports<sup>®</sup> Azure App Service from v2.x to v2.4.19 in the Azure portal by reconnecting its Deployment Center to the Bold Reports<sup>®</sup> GitHub repository and syncing. Data migration is not required.

## What do I need before upgrading?

Bold Reports<sup>®</sup> Azure App Service upgrades need access rights to edit the Bold Reports<sup>®</sup> Azure App Service.

* Bold Reports<sup>®</sup> releases several major versions in a year. Each version includes new features, bug fixes and other improvements.

* You can review the features and enhancements in the [Release Notes](https://www.boldreports.com/resources/release-history/embedded-reporting/2-3/).

* To upgrade the Bold Reports<sup>®</sup> Azure App Service, you must have access rights to edit the Bold Reports<sup>®</sup> Azure App Service.

## How do I upgrade from v2.x to v2.4.19?

You upgrade the Bold Reports<sup>®</sup> Azure App Service from v2.x to v2.4.19 by following these steps:

1. Log in to the [Azure portal](https://portal.azure.com/).
2. Select `App Services` in Microsoft Azure Services.
   ![App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/app-services.png)
3. Select `Bold Reports Azure App Service`.
4. In the `Overview` section, click the `Stop` button.
   ![Stop App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/stop-app-service.png)
5. Select `Deployment center` in the left panel of the Bold Reports<sup>®</sup> App Service.
   ![Deployment center](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/deployment-center.png)
6. In the deployment center, click `Disconnect`. The deployment panel opens.
   ![Disconnect](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/disconnect-option.png)
7. Select `External` in the source control tab and click `Continue`.
   ![External](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/external.png)
8. Select `App Service build service` and click `Continue`.
   ![App Service build service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/app-service-build-service.png)
9. Fill in the following details in the `Configure` tab and click `Continue`:
    * Repository - `https://github.com/boldreports/bold-reports-azure.git`
    * Branch - `v{release-version}`
    * Repository Type - `Git`
    * Private Repository - `No`
   ![Configure tab](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/configure-tab.png)
10. Click the `Finish` option. The "Successfully set up deployment" notification is shown in the notifications.
   ![Finish Upgrade](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/finish-upgrade.png)
   ![Set Up Success](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/setup-success.png)
11. Select the `Sync` button on the deployment center page.
    ![Sync option](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/sync-option.png)
12. A synchronization request submitted notification is shown, and the synchronization progress is shown on the deployment center page.
    ![Synchronization Request Submitted](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/synchronization-request-submitted.png)
13. Wait until synchronization is completed.
14. Select `App Service Editor` in the left panel of the Bold Reports<sup>®</sup> Azure App Service, then click `Go`.
    ![App Service Editor](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/app-service-editor.png)
15. Copy your Web App URL, and then update the xml node `InternalAppReportUrl` in the config.xml file under `wwwroot/IDP/UMS/Configuration/boldreports/config.xml`.

   The URL must be, **`InternalAppReportUrl`- `{web App URL}/reporting`**
    ![IDP Config](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/idp-config.png)
16. Copy your Web App URL, and then update the xml nodes `InternalAppDataServiceUrl` and `InternalAppIdpUrl` in the config.xml file under `wwwroot/Report Server/Configuration/config.xml`.

   The URL must be, **`InternalAppDataServiceUrl` – `{web App URL}/reporting/reportservice`**

   **`InternalAppIdpUrl` – `{web App URL}/`**
    ![Report Server Config](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/report-server-config.png)
17. Start the Bold Reports<sup>®</sup> Azure App Service by clicking the `Start` button in the Overview section.
    ![Start App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/start-app-service.png)
18. The Bold Reports<sup>®</sup> upgrade process is complete. Launch Bold Reports<sup>®</sup> by clicking the `browse` option or by typing the Bold Reports<sup>®</sup> URL in the browser.
    ![Browse option](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/browse-option.png)

> Data Migration is not required to upgrade Bold Reports<sup>®</sup> Azure App Service from v2.x to a later version.

## Frequently asked questions

### Do I need data migration to upgrade from v2.x?

No. Data migration is not required to upgrade Bold Reports<sup>®</sup> Azure App Service from v2.x to a later version.

### Which repository does the Deployment Center use?

The Bold Reports<sup>®</sup> Deployment Center uses the `https://github.com/boldreports/bold-reports-azure.git` repository with the branch `v{release-version}`.

## See also

* [Create and upgrade Bold Reports<sup>®</sup> Azure App Service](./../)
* [Upgrade from v2.4.19 to the latest version](./../upgrade-v2.x-to-latest/)
* [Upgrade Bold Reports<sup>®</sup> Azure App Service from v1.x](./../upgrade-v1.x/)
