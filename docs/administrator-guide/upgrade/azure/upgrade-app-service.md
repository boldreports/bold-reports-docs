---
layout: post
title: Upgrade Bold Reports Azure App Service in Microsoft Azure
description: This documentation explains about how to upgrade the Bold Reports Azure App Service in the Microsoft Azure.
platform: report-platform
documentation: ug
---

# Upgrade Bold Reports Azure App Service version from v2.x to v2.4.19

* Bold Reports releases several major versions in a year. Each version includes new features, bug fixes and other improvements.

* You can refer the features and enhancements from the [Release Notes](https://www.boldreports.com/release-history/2-3).

* To upgrade the Bold Reports Azure App Service to latest version you must have access rights to edit the Bold Reports Server App Service.

Follow below steps to upgrade Bold Reports Azure App Service version from v2.x to v2.4.19 .

1. Login to [Azure portal](https://portal.azure.com/).
2. Select `App Services` in Microsoft Azure Services.
   ![App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/app-services.png)
3. Select `Bold Reports Azure App Service`.
4. In the `Overview` section, Click the `Stop` button.
   ![Stop App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/stop-app-service.png)
5. Select `Deployment center` in the left panel of the Bold Reports App Service.
   ![Deployment center](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/deployment-center.png)
6. Once the deployment center is clicked, click the `Disconnect`. Now the deployment panel will open.
   ![Disconnect](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/disconnect-option.png)
7. Select the `External` in the source control tab and click the `Continue`.
   ![External](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/external.png)
8. Select the `App Service build service` and click the `Continue`.
   ![App Service build service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/app-service-build-service.png)
9. Now, fill the below details in the `Configure` tab and click the `Continue`.
    * Repository - `https://github.com/boldreports/bold-reports-azure.git`
    * Branch - `v{release-version}`
    * Repository Type - `Git`
    * Private Repository - `No`
   ![Configure tab](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/configure-tab.png)
10. Next click on `Finish` option. The “Successfully set up deployment” notification will be shown in the notification.
   ![Finish Upgrade](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/finish-upgrade.png)
   ![Set Up Success](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/setup-success.png)
11. Select the `Sync` button in the deployment center page.
    ![Sync option](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/sync-option.png)
12. Synchronization request submitted notification will be shown in the notification and synchronization progress is shown in the deployment center page.
    ![Synchronization Request Submitted](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/synchronization-request-submitted.png)
13. Please wait until synchronization is completed.
14. Select `App Service Editor` in the left panel of the Bold Reports Azure App Service, then click `Go`.
    ![App Service Editor](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/app-service-editor.png)
15. Copy your Web App URL, and then update the following xml node `InternalAppReportUrl` in the config.xml file under `wwwroot/IDP/UMS/Configuration/boldreports/config.xml`.

   The URL must be, **`InternalAppReportUrl`- `{web App URL}/reporting`**
    ![IDP Config](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/idp-config.png)
16. Copy your Web App URL, and then update the following xml node `InternalAppDataServiceUrl` and `InternalAppIdpUrl` in the config.xml file under `wwwroot/Report Server/Configuration/config.xml`.

   The URL must be, **`InternalAppDataServiceUrl` – `{web App URL}/reporting/reportservice`**

   **`InternalAppIdpUrl` – `{web App URL}/`**
    ![Report Server Config](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/report-server-config.png)
17. Start the Bold Reports Azure App Service by clicking `Start` button from Overview section.
    ![Start App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/start-app-service.png)
18. Now, we have completed the Bold Reports upgrade process. Launch the Bold Reports by clicking the `browse` option or type in the Bold Reports URL in the browser.
    ![Browse option](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/browse-option.png)

> Data Migration is not required for upgrading Bold Reports Azure App Service from v2.x to latest version