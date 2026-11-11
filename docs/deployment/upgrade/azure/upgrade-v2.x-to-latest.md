---
layout: post
title: Upgrade App Service from v2.4.19 to Latest | Bold Reports
description: Upgrade a Bold Reports Azure App Service from v2.4.19 to a later version in the Azure portal, migrate blob resources, sync, and update app settings.
platform: report-platform
documentation: ug
---

# Upgrade Bold Reports<sup>®</sup> Enterprise Reporting version from 2.4.19 to latest

You can upgrade the Bold Reports<sup>®</sup> Azure App Service from version 2.4.19 to a later version in the Azure portal. You migrate the UMS blob resources, reconnect the deployment to the Bold Reports<sup>®</sup> GitHub repository, sync, and update the application settings.

## How do I upgrade from v2.4.19 to the latest version?

You upgrade the Bold Reports<sup>®</sup> Azure App Service from version 2.4.19 by following these steps:

1. Log in to the [Azure Portal](https://portal.azure.com) and select the Bold Reports<sup>®</sup> Azure App Service in Microsoft Azure Services.

2. In the **Overview** section, click **Stop**.

    ![Stop Bold Reports<sup>®</sup> Azure App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/stopappservice.png)

3. Choose **Deployment Center** in the left panel of the Bold Reports<sup>®</sup> Azure App service.

    ![Deployment center](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-deployment-center.png)

4. To upgrade to v3.1.42, migrate the v2.4.19 or v2.4.10 UMS blob resources to a new blob structure. To do this, click **Sync** in the deployment center blade.

     ![Deployment center utility sync](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/sync-migration-utility.png)

     ![Deployment center utility redeployment](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/redeployment-confirmation-utility.png)

5. Check the deployment status in the logs. When the deployment completes successfully, the logs show a **success** status.

     ![Deployment center utility success](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/utility-files-success.png)

6. After successful deployment, navigate to **WebJobs** in the left panel of the Bold Reports<sup>®</sup> Azure App service.

     ![Webjobs options](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/webjobs-option.png)

7. In **WebJobs**, the migration utility is available. Click **Run** and wait for the migration to complete.

     ![Webjobs run](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/migration-webjob-run.png)

     ![Webjobs success](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/migration-utility-completed-status.png)

8. To confirm the migration succeeded, go to the blob container used by the Bold Reports<sup>®</sup> Azure App service and check whether the **boldservices** Blob is created.

     ![Blob migration confirmation](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/migration-confirmation.png)

9. After the migration is completed, choose **Advanced Tools** in the left panel of the Bold Reports<sup>®</sup> Azure App service and click **Go**. The **KUDU console** opens.

     ![Kudu Console options](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/kudu-console-tool.png)

10. In the **KUDU console**, click **Debug Console** and choose **PowerShell**.

     ![Kudu Console poweshell options](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/powershell-option.png)

11. In PowerShell, navigate to the path `C:\home\site\repository\.git`.

     ![Kudu Console repository path](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/powershell-repository-path.png)

12. Run the git command `git remote rm origin`.

     ![Git command](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/remove-origin-command.png)

13. After running the command, go to the deployment center and click **Disconnect**. The deployment option opens.

    ![Choose Source](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-disconnect-existing.png)

14. Select **External Git** in the source option.

    ![External Repository](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-select-external.png)

15. In **External Git**, fill out the following information:

    **Repository** - [Bold Reports<sup>®</sup> Azure repository URL](https://github.com/boldreports/bold-reports-azure.git)

    **Branch** - v3.1.42

    **Repository Type** - Public

    ![Deployment option for External repository](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-choose-repo-and-branch.png)

16. Click the **Save** option. The **Successfully set up deployment** notification is shown in the notification blade.

    ![Finish Deployment](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-review-and-finish.png)

    ![Success notification of Deployment option](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/azure-setup-success.png)

17. After completing the deployment setup, click **Sync** in the deployment center blade.

    ![Sync Repository](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-sync.png)

    ![Deployment confirmation](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/redeployment-confirmation-upgrade.png)

18. The synchronization progress is shown in the deployment options blade.

    ![Synchronization Status](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-sync-request-status.png)

19. Wait until synchronization is completed.

    ![Synchronization Success](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-sync-request-success.png)

20. After the synchronization is completed, **Save** the following configuration settings.
    * Add the following application settings key.
        <table>
        <tr>
         <th>Key</th>
         <th>Value</th>
        </tr>

        <tr>
        <td>WEBSITE_LOAD_USER_PROFILE</td>
        <td>1</td>
        </tr>
        </table>

    ![Application Settings](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/application-settings.png)
    * Change the following value in General Settings.
        <table>
        <tr>
         <th>Settings</th>
         <th>Value</th>
        </tr>

        <tr>
        <td>.NET version</td>
        <td>.NET 6</td>
        </tr>
        </table>

    ![General Settings](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/general-settings.png)
    * Change the Physical Path in Path Mappings.
        <table>
        <tr>
         <th>Virtual Path </th>
         <th>Physical Path (v2.4.19, v2.4.10)</th>
         <th>Physical Path (v3.1.42)</th>
        </tr>

        <tr>
        <td>/</td>
        <td>site\wwwroot\IDP</td>
        <td>site\wwwroot\idp\web</td>
        </tr>

        <tr>
        <td>/api</td>
        <td>site\wwwroot\IDP\api</td>
        <td>site\wwwroot\idp\api</td>
        </tr>

        <tr>
        <td>/reporting</td>
        <td>site\wwwroot\Report Server</td>
        <td>site\wwwroot\reporting\web</td>
        </tr>

        <tr>
        <td>/reporting/api</td>
        <td>site\wwwroot\Report Server\api</td>
        <td>site\wwwroot\reporting\api</td>
        </tr>

        <tr>
        <td>/reporting/jobs</td>
        <td>site\wwwroot\Report Server\jobs</td>
        <td>site\wwwroot\reporting\jobs</td>
        </tr>

        <tr>
        <td>/reporting/reportservice</td>
        <td>site\wwwroot\Report Server\reportservice</td>
        <td>site\wwwroot\reporting\reportservice</td>
        </tr>

        <tr>
        <td>/ums</td>
        <td>Site\wwwroot\IDP\ums</td>
        <td>site\wwwroot\idp\ums</td>
        </tr>
        </table>

    ![Path Mappings](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/path-mappings.png)

21. Click **Start** in the **Overview** section to start the Bold Reports<sup>®</sup> Azure App service.

    ![Start Bold Reports<sup>®</sup> Azure App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/azure-start-app-service.png)

## Frequently asked questions

### Which .NET version does the upgraded App Service use?

After the Bold Reports<sup>®</sup> upgrade, set the .NET version in General Settings to .NET 6.

### How do I confirm the blob migration succeeded?

Check whether the **boldservices** Blob is created in the blob container used by the Bold Reports<sup>®</sup> Azure App service.

## See also

* [Create and upgrade Bold Reports<sup>®</sup> Azure App Service](./../)
* [Upgrade Bold Reports<sup>®</sup> Azure App Service from v2.x](./../upgrade-app-service/)
