---
layout: post
title: Install Bold Reports over Bold BI in Azure App Services.
description: This documentation explains about how to install the Bold Reports application when Bold BI application exists in Azure.
platform: report-platform
documentation: ug
---

# How to install Bold Reports Server over Bold BI in Azure App Services

Follow the below steps to install Bold Reports server over Bold BI in azure app services.

1. Login to [Azure Portal](https://portal.azure.com).

2. Select the Bold BI Azure App Service.

    ![App Service](/static/assets/on-premise/images/how-to/azure-combination-deployment/app-services.png)

3. In the **Overview** section, click **Stop**.

    ![Stop Bold Reports Azure App Service](/static/assets/on-premise/images/how-to/azure-combination-deployment/stop-option.png)

4. Click `Get Publish Profile option` to download a file.

    ![Get Publish Profile Option](/static/assets/on-premise/images/how-to/azure-combination-deployment/get-publish-option.png)

5. Edit a PublishSettings file in notepad and then note down the following values of Publish URL, Username and Password.

    ![Download Get Publish Profile File](/static/assets/on-premise/images/how-to/azure-combination-deployment/get-publish-profile-file.png)

6. Download  [file zilla](https://download.filezilla-project.org/client/FileZilla_3.57.0_win64_sponsored2-setup.exe) and enter details of Publish URL, Username and Password and click Quickconnect.

    ![Enter the Details](/static/assets/on-premise/images/how-to/azure-combination-deployment/file-zilla.png)

7. Download and extract the Bold Report Server Azure packages [v3.3.23](https://github.com/boldreports/bold-reports-azure/tree/v3.3.23).

    ![Github v3.3.23](/static/assets/on-premise/images/how-to/azure-combination-deployment/github.png)

8. Enter the extracted packages file path in the local site.

    ![Download File Zip Location](/static/assets/on-premise/images/how-to/azure-combination-deployment/local-site.png)

9. Drag and drop the reporting folder from local site to remote site.

    ![Drag Reporting Folder](/static/assets/on-premise/images/how-to/azure-combination-deployment/move-reporting-folder.png)

10. For combination deployment, IDP application is common for both Bold BI and Bold Reports. So we have to find the latest version of IDP when we going to replace the IDP folder.

11. Open the Version.xml file in both download location and Azure deployed location.
    <table>
    <tr>
    <th>Azure deployed location</th>
    <td>/site/wwwroot//idp/ums/configuration/onpremise/boldid/mssql/versioned_scripts/versions.xml</td>
    </tr>

    <tr>
    <th>Download location</th>
    <td>{Extracted_location}/ bold-reports-azure-3.3.23/idp/ums/configuration/onpremise/boldid/mssql/versioned_scripts/versions.xml</td>
    </tr>
    </table>

    ![Version.xml](/static/assets/on-premise/images/how-to/azure-combination-deployment/bold-reports-version-xml.png)

12. Compare the version.xml files and find the latest version of IDP between Azure deployed location and extracted location.

13. If IDP version in Azure deployed location is higher, we need to skip step 14 and then continue from step 15.

14. If IDP version in extracted location is higher, we need to move IDP folder from extracted location to Azure deployed location.

    ![Move IDP Folder](/static/assets/on-premise/images/how-to/azure-combination-deployment/idp-move-folder.png)

15. Search and select the `App Service Editor`.

    ![Search App Service Editor](/static/assets/on-premise/images/how-to/azure-combination-deployment/search-option.png)

16. Click Go option.

    ![Go Option](/static/assets/on-premise/images/how-to/azure-combination-deployment/go-to.png)

17. Check and confirm whether the reporting folder is moved to the Azure deployment location.

    ![Check App Service Editor](/static/assets/on-premise/images/how-to/azure-combination-deployment/app-service-editor.png)

18. Go to the following path wwwroot/app_data/Configuration/product.json .
     * Add object for boldreports as mentioned in screenshot.
     * Then need to update the latest IDP version which you found at step 12.
     * Set `IsCommonLogin`property to be **true** for Bold BI and Bold Reports.
     * The IDP version of Bold BI or Bold Reports should be same.

    ![Go To Path](/static/assets/on-premise/images/how-to/azure-combination-deployment/product-json.png)

19. Go to Bold BI Storage account.

    ![Storage Account](/static/assets/on-premise/images/how-to/azure-combination-deployment/select-storage-account.png)

20. Click `Containers` option and select boldbicontainer.

    ![Select Containers](/static/assets/on-premise/images/how-to/azure-combination-deployment/boldbi-container-option.png)

21. Go to the following path boldbicontainer/boldservices/app_data/configuration and select Config.xml file.

    ![Boldbicontainer Path](/static/assets/on-premise/images/how-to/azure-combination-deployment/configuration-xml-file.png)

22. Click Edit option and include the Bold Reports product details in xml format.
     * Update latest IDP version of both Bold BI and Bold Reports.
     * Then set `IsCommonLogin` property to be **true** for both Bold BI and Bold Reports and click the save option.

    ![Edit Configuration File](/static/assets/on-premise/images/how-to/azure-combination-deployment/edit-configuration-file.png)

23. Go to Bold BI Azure App Service, select `Configuration` and then click `Application Settings`.

    ![Configuration Settings](/static/assets/on-premise/images/how-to/azure-combination-deployment/configuration-file.png)

24. Check and confirm whether the WEBSITE_LOAD_USER_PROFILE key value is included in `Application Settings`. If not include the key values as mentioned below.
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

    ![Add Key and Value](/static/assets/on-premise/images/how-to/azure-combination-deployment/add-configuration-settings.png)

25. Click `General Settings` and select .NET Version to **.NET 6**.

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

    ![General Settings Option](/static/assets/on-premise/images/how-to/azure-combination-deployment/general-settings.png)

26. Go to `Path Mappings` and select `New Virtual Application` then add virtual path and physical path in the screenshot.
    <table>
    <tr>
    <th>Virtual Path </th>
    <th>Physical Path </th>
    </tr>

    <tr>
    <td>/reporting</td>
    <td>site\wwwroot\reporting\web</td>
    </tr>

    <tr>
    <td>/reporting/api</td>
    <td>site\wwwroot\reporting\api</td>
    </tr>

    <tr>
    <td>/reporting/jobs</td>
    <td>site\wwwroot\reporting\jobs</td>
    </tr>

    <tr>
    <td>/reporting/reportservice</td>
    <td>site\wwwroot\reporting\reportservice</td>
    </tr>
    </table>

    ![Path Mapping Option](/static/assets/on-premise/images/how-to/azure-combination-deployment/path-mapping.png)

27. Start the Bold BI Azure App Service by clicking `Start` button from Overview section.

    ![Start Option](/static/assets/on-premise/images/how-to/azure-combination-deployment/start-option.png)

28. Login into Bold ID application.

    ![Login Application](/static/assets/on-premise/images/how-to/azure-combination-deployment/login-page.png)

29. Go to `Manage Sites`.

    ![Manage Sites](/static/assets/on-premise/images/how-to/azure-combination-deployment/startup-page.png)

30. Click `Settings` option in IDP application.

    ![UMS Settings](/static/assets/on-premise/images/how-to/azure-combination-deployment/ums-settings-option.png)

31. Go to `Manage License` section and click `Login to activate account` under `Enterprise Reporting` option.

    ![Activate Manage License Option](/static/assets/on-premise/images/how-to/azure-combination-deployment/manage-license.png)

32. Once the account has been activated, go to site page and create a site.

    ![Create Site](/static/assets/on-premise/images/how-to/azure-combination-deployment/create-site-option.png)

33. Now, create a site for Bold Reports.

    ![Site Creation](/static/assets/on-premise/images/how-to/azure-combination-deployment/site-creation.png)

34. Enter the database credentials and click next.

    ![Select Database](/static/assets/on-premise/images/how-to/azure-combination-deployment/select-database.png)
    >**Note**: If you need to use already existing database, select existing database option.

35. Provide your Azure blob storage details, if you don't have custom blob storage means you can enable the `use the same blob used for tenant registration` check box and this will restores the default storage account details.

    ![Select Storage](/static/assets/on-premise/images/how-to/azure-combination-deployment/storage-details.png)

36. Select administrator and click create and launch site.

    ![Select Administration](/static/assets/on-premise/images/how-to/azure-combination-deployment/administation.png)

37. Now site will be created and Bold Report Server will be launched.  

    ![Select Administration](/static/assets/on-premise/images/how-to/azure-combination-deployment/main-page.png)