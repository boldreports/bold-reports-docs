---
layout: post
title: Upgrade App Service from v3.x to v5.4.30 | Bold Reports
description: Upgrade the Bold Reports Azure App Service from version 3.x to 5.4.30 by syncing the External Git deployment and updating the .NET version and path mappings.
platform: report-platform
documentation: ug
---

# Upgrade Bold Reports<sup>®</sup> Enterprise Reporting version from 3.x to v5.4.30

You can upgrade the Bold Reports<sup>®</sup> Azure App Service from version 3.x to version 5.4.30 by syncing its Deployment Center with the Bold Reports<sup>®</sup> Azure Git repository.

## What changes between Bold Reports<sup>®</sup> versions?

* Bold Reports<sup>®</sup> releases several major versions in a year. Each version includes new features, bug fixes, and other improvements.

* You can review the features and enhancements in the [Release Notes](https://www.boldreports.com/resources/release-history/embedded-reporting/5-1/).

## What do I need before upgrading?

* To upgrade the Bold Reports<sup>®</sup> Azure App Service to version 5.4.30, you must have access rights to edit the Report Server App Service.

## How do I upgrade from version 3.x to version 5.4.30?

Follow these steps to upgrade the Bold Reports<sup>®</sup> Azure App service from version 3.x to version 5.4.30:

1. Log in to the [Azure portal](https://portal.azure.com/).
2. Select `App Services` in Microsoft Azure Services.
   ![App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/app-services.png)
3. Select `Bold Reports Azure App Service`.
4. In the `Overview` section, click the `Stop` button.
   ![Stop App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/upgrade-stop-app-service.png)
5. Select `Deployment Center` in the left panel of the Bold Reports<sup>®</sup> App Service.
   ![Deployment center](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/upgrade-deployment-center.png)
6. In the Deployment Center, click `Disconnect`. The deployment panel opens.
   ![Disconnect](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/upgrade-disconnect-option.png)
7. Choose the `External Git`.
   ![External](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/upgrade-external.png)
8. Fill in the following details in the `Settings` tab and click `Save`:
    * Repository: `https://github.com/boldreports/bold-reports-azure.git`
    * Branch: `v{release-version}`
    * Repository Type: `Public`
   ![Configure tab](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/upgrade-configure-tab.png)
9. Azure displays the `Successfully set up deployment` notification.
   ![Finish Upgrade](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/upgrade-finish-upgrade.png)
   ![Set Up Success](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/upgrade-setup-success.png)
10. Select the `Sync` button on the deployment center page.
    ![Sync option](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/upgrade-sync-option.png)
11. The notification shows that the synchronization request was submitted, and the deployment center page shows the synchronization progress.
    ![Synchronization Request Submitted](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/upgrade-synchronization-request-submitted.png)
12. Wait until synchronization is completed.
13. >**Breaking Changes:** This step is applicable only for upgrading Azure App Service from version 3.x to version 5.4.30. Otherwise, skip this step.
      * In the `Configuration` section, change the following value in `General Settings`.
         <table>
         <tr>
          <th>Settings</th>
          <th>Value</th>
         </tr>
         <tr>
          <td>.NET version</td>
          <td>.NET 6 (LTS)</td>
         </tr>
         </table>

         ![General Settings](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/dot-net-version-in-general-settings.png)
      * Add the following Physical Path in `Path Mappings` and `Save` the settings.
         <table>
         <tr>
          <th>Virtual Path</th>
          <th>Physical Path</th>
         </tr>
         <tr>
          <td>/reporting/viewer</td>
          <td>site\wwwroot\reporting\viewer</td>
         </tr>
         </table>

         ![Path Mappings](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/viewer-service-in-path-mappings.png)
14. Start the Bold Reports<sup>®</sup> Azure App Service by clicking the `Start` button in the Overview section.
    ![Start App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/upgrade-start-app-service.png)
15. The Bold Reports<sup>®</sup> upgrade is now complete. Launch Bold Reports<sup>®</sup> by clicking the `Browse` option, or type the Bold Reports<sup>®</sup> URL in the browser.
    ![Browse option](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/upgrade-browse-option.png)

## Frequently asked questions

### Which .NET version does version 5.4.30 need on Azure App Service?

When you upgrade from version 3.x to version 5.4.30, set the .NET version to .NET 6 (LTS) in `General Settings`.

### Which path mapping do I add during the upgrade?

Add the virtual path `/reporting/viewer` with the physical path `site\wwwroot\reporting\viewer` in `Path Mappings`, and then save the settings.

## See also

* [Upgrade to a newer version](./../upgrade-to-latest/)
* [Install Client Libraries](./../../client-libraries/)
* [Deploying Bold Reports<sup>®</sup> in Azure App Service](./../../)
