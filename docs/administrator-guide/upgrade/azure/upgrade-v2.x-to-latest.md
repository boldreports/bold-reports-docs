---
layout: post
title: Upgrade Bold Reports Azure App Service to latest version
description: This documentation explains about how to upgrade the Bold Reports Azure App Service from 2.4.19 to latest.
platform: report-platform
documentation: ug
---

# Upgrade Bold Reports Enterprise Reporting version from 2.4.19 to latest

Follow these below steps to upgrade the Bold Reports Azure App service version from 2.4.19 to latest.

1. Login to [Azure Portal](https://portal.azure.com) and select the Bold Reports Azure App Service in Microsoft Azure Services.

2. In the **Overview** section, click **Stop**.

    ![Stop Bold Reports Azure App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/stopappservice.png)

3. Choose **Deployment Center** in the left panel of the Bold Reports Azure App service.

    ![Deployment center](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-deployment-center.png)

4. To upgrade v3.1.42, you need to migrate the v2.4.19 or v2.4.10 UMS blob resources to a new blob structure. For that, click **Sync** in the deployment center blade.

     ![Deployment center utility sync](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/sync-migration-utility.png)

     ![Deployment center utility redeployment](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/redeployment-confirmation-utility.png)

5. Check the deployment status in logs. Once, the deployment is completed successfully, the logs will show a **success** status.

     ![Deployment center utility success](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/utility-files-success.png)

6. After successful deployment, navigate to **WebJobs** in the left panel of the Bold Reports Azure App service.

     ![Webjobs options](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/webjobs-option.png)

7. In the **WebJobs**, the migration utility will be available. Click ‘Run’ and wait to complete the migration.

     ![Webjobs run](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/migration-webjob-run.png)

     ![Webjobs success](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/migration-utility-completed-status.png)

8. To ensure migration success, go to the blob container is used in the Bold Reports Azure App service and check whether the following **boldservices** Blob is created or not.

     ![Blob migration confirmation](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/migration-confirmation.png)

9. After the migration is completed, choose **Advanced Tools** in the left panel of the Bold Reports Azure App service and click **Go**. It will open **KUDU console**.

     ![Kudu Console options](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/kudu-console-tool.png)

10. In **KUDU console**, click **Debug Console** and choose **PowerShell**.

     ![Kudu Console poweshell options](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/powershell-option.png)

11. In PowerShell, navigate to the path `C:\home\site\repository\.git`.

     ![Kudu Console repository path](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/powershell-repository-path.png)

12. Run the git command `git remote rm origin`.

     ![Git command](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/remove-origin-command.png)

13. After running the command, go to the deployment center, click **Disconnect**. Now, the deployment option will open.

    ![Choose Source](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-disconnect-existing.png)

14. Select the **External Git** in the source option.

    ![External Repository](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-select-external.png)

15. Now, in the **External Git**, fill out the following information.

    **Repository** - [URL](https://github.com/boldreports/bold-reports-azure.git)

    **Branch** - v3.1.42

    **Repository Type** - Public

    ![Deployment option for External repository](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-choose-repo-and-branch.png)

16. Next, click the **Save** option. The **Successfully set up deployment** notification will be shown in the notification blade.

    ![Finish Deployment](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-review-and-finish.png)

    ![Success notification of Deployment option](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/azure-setup-success.png)

17. After completing the deployment setup, click **Sync** in the deployment center blade.

    ![Sync Repository](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-sync.png)

    ![Deployment confirmation](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/redeployment-confirmation-upgrade.png)

18. Synchronization progress is shown in the deployment options blade.

    ![Synchronization Status](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-sync-request-status.png)

19. Please wait until synchronization is completed.

    ![Synchronization Success](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/arm-upgrade-sync-request-success.png)

20. Once the synchronization is completed, **Save** the below configuration settings.
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
    * Change the below value in General Settings.
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
    * Change Physical Path in Path Mappings
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

21. Then, click **Start** in the **Overview** section to start the Bold Reports Azure App service.

    ![Start Bold Reports Azure App Service](/static/assets/on-premise/images/installation-and-deployment/upgrade/azure-app-service/azure-start-app-service.png)