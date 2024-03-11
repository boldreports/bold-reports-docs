---
layout: post
title: Deploy Bold Reports server as a sub-application
description: Describes how to Deploy BoldReports server as subapplication in windows Environment with the Bold Reports Enterprise Edition.
platform: report-platform
documentation: ug
---

# Deploy Bold Reports server as a sub-application in Windows Environment

Please follow the below steps to deploy bold reports as sub-applications in the Windows environment.

1. Install the Bold Reports application, by default it is deployed in **C:\ Boldservices** Location. Then take a backup of boldservices.
<br>`Location - C:\BoldServices-Copy`</br>

2. Open IIS server, right-click `Application Pools` and click `Add Application Pool`.
   ![Add Application Pool](/static/assets/on-premise/images/how-to/subapplication-in-windows/add-application-pool.png)

3. Provide the name as **SubApp_IDPWeb** and click `OK`.
   ![Sub App ID](/static/assets/on-premise/images/how-to/subapplication-in-windows/sub-app-id.png)
   > You can provide your convenient name to the application pool. But make sure to provide IDPWeb to differentiate other bold reports applications.

4. Right-click the newly created application pool and then select `Advanced Settings`.
   ![Advanced Settings](/static/assets/on-premise/images/how-to/subapplication-in-windows/advanced-settings.png)

5. Click `Enable 32-Bit Applications` property under the general category and mark it as true.
   ![Enable 32-Bit Applications](/static/assets/on-premise/images/how-to/subapplication-in-windows/enable-applications.png)

6. Click `Start Mode` property under the general category and select `AlwaysRunning` option.
   ![Start Mode](/static/assets/on-premise/images/how-to/subapplication-in-windows/start-mode.png)

7. Click the identity property menu button under the process model category.
   ![Identity Property](/static/assets/on-premise/images/how-to/subapplication-in-windows/identity-property.png)

8. Select **LocalSystem** under Built-in account type and click `ok`.
   ![Local System](/static/assets/on-premise/images/how-to/subapplication-in-windows/local-system.png)

9. Click the `Idle Time-out(minutes)` property menu button under the process model category and set it as `zero` and then click `ok`.
     ![Idle Time-out(minutes)](/static/assets/on-premise/images/how-to/subapplication-in-windows/idle-time-out.png)

10. We have several applications on the bold report server. So, we should create application pools for each one. We have already created an application pool for IDP-Web in step 2. We should repeat steps 2 to 9 to add application pools for the below applications. Please find the below table:

    | Application name | Application Pool Name |
    | ---------------- | --------------------- |
    | IDP - Web | SubApp_IDPWeb (We have created at step 2) |
    | IDP - API | SubApp_IDPApi |
    | IDP - UMS | SubApp_IDPUMS |
    | IDP - Windows Authentication | SubApp_IDPWinAuth |
    | Reports - Web | SubApp_ReportsWeb |
    | Reports – Api | SubApp_ReportsApi |
    | Reports - Reportservice | SubApp_ReportsDesigner |
    | Reports – Jobs | SubApp_ReportsJobs |
    > You can provide your convenient name to the application pool. But make sure to differentiate between each application pool.

11. Right-click your application (main application) in IIS, and select **Add Application** as shown in the below image.
   ![Add Application](/static/assets/on-premise/images/how-to/subapplication-in-windows/add-main-application.png)

12. Please fill the Alias name, Application pool, and Physical path and click `Ok`.
    ![Alias Name](/static/assets/on-premise/images/how-to/subapplication-in-windows/alias-name.png)
    * Alias name - Please provide the name `bold` for the bold reports application, which will act as a sub-application. You can provide the name as per your convenience.
    > The alias name provided in this step will be used in the URL.
    * Application pool - Select the application pool `SubApp_IDPWeb` which you have created in step 2.
    * Physical path - Click Browse and go to your backup location (C:\BoldServices-Copy), then select the web folder under the IDP folder.
    > Alias name should be in lowercase.

13. Right-click the Bold Reports sub-application name and select `Add Application`.
    ![Add Sub Application](/static/assets/on-premise/images/how-to/subapplication-in-windows/add-sub-application.png)

14. Provide the alias name, application pool and physical path, and click `OK`.
    * Alias name - Please provide the name as `api`.
    * Application pool - Select the application pool `SubApp_IDPApi` that you have created in step 5.
    * Physical path - Click Browse, go to the backup location, and choose the api folder under idp.
    `(C:\BoldServices - Copy\idp\api)`
    ![Sub App Alias Name](/static/assets/on-premise/images/how-to/subapplication-in-windows/sub-app-alias-name.png)

15. We must add the below applications as sub-applications with the mentioned alias name, application pool and physical path.

    <table>
     <tr>
     <th>Application</th>
     <th>Alias Name</th>
     <th>Application Pool</th>
     <th>Physical path</th>
     <th>Example</th>
     </tr>
     <tr>
     <td>{your application}</td>
     <td>bold <br> (Did at step 10)</td>
     <td>SubApp_IDPWeb</td>
     <td>{Deployed location}\idp\web</td>
     <td>C:\BoldServices - Copy\idp\web</td>
     </tr>
     <tr>
     <td rowspan="4">{your application}\bold\</td>
     <td>api <br> (Did at step 12) </br></td>
     <td>SubApp_IDPApi</td>
     <td>{Deployed location}\idp\api</td>
     <td>C:\BoldServices - Copy\idp\api</td>
     </tr>
     <tr>
     <td>ums</td>
     <td>SubApp_IDPUMS</td>
     <td>{Deployed location}\idp\ums</td>
     <td>C:\BoldServices - Copy\idp\ums</td>
     </tr>
     <tr>
     <td>windowsauthentication</td>
     <td>SubApp_IDPWinAuth</td>
     <td>{Deployed location}\idp\winauth</td>
     <td>C:\BoldServices - Copy\idp\windowsauthentication</td>
     </tr>
     <tr>
     <td>reporting</td>
     <td>SubApp_ReportsWeb</td>
     <td>{Deployed location}\reporting\web</td>
     <td>C:\BoldServices - Copy\reporting\web</td>
     </tr>
     <tr>
     <td rowspan="3">{your application}\bold\reporting\</td>
     <td>api</td>
     <td>SubApp_ReportsApi</td>
     <td>{Deployed location}\reporting\api</td>
     <td>C:\BoldServices - Copy\reporting\api</td>
     </tr>
     <tr>
     <td>jobs</td>
     <td>SubApp_ReportsJobs</td>
     <td>{Deployed location}\reporting\jobs</td>
     <td>C:\BoldServices - Copy\reporting\jobs</td>
     </tr>
     <tr>
     <td>reportservice</td>
     <td>SubApp_ReportsDesigner</td>
     <td>{Deployed location}\reporting\reportservice</td>
     <td>C:\BoldServices - Copy\reporting\reportservice</td>
     </tr>
    </table>

    > You must provide an alias name in the above table for api, ums, windowsauthentication, reporting, api, jobs, and reportservice.

16. Ensure the **Bold Reports** application has the sub-applications, as shown in below image.
    ![Bold Reports Application](/static/assets/on-premise/images/how-to/subapplication-in-windows/boldreports-application.png)

17. To run the bold reports as sub application, we must update the **config.xml** and **product.json** files under `{DeployedLocation}\app_data\configuration\config.xml`.
    Eg. `C:BoldServices-Copy\app_data\configuration\config.xml`

18. Update the URL with sub-app for **Idp**, **Reports**, and **ReportsService** nodes in the config.xml file.
    ![Config.xml File](/static/assets/on-premise/images/how-to/subapplication-in-windows/config-xml-file.png)

19. Update the URL with sub-app for **Idp**, **Reports**, and **ReportsService** keys in the product.json file.
    ![Product.json File](/static/assets/on-premise/images/how-to/subapplication-in-windows/product-json-file.png)

20. Now restart and run the application from IIS.