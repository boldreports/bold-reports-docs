---
layout: post
title: Install Report Server over Bold BI in Azure | Bold Reports
description: Install the Bold Reports Report Server in an Azure App Service that already hosts Bold BI, share the IDP application, and enable common login for both apps.
platform: report-platform
documentation: ug
---

# How to install Bold Reports<sup>®</sup> Report Server over Bold BI in Azure App Services

You can install the Bold Reports<sup>®</sup> Report Server in the Azure App Service that already hosts Bold BI. Both products then share one IDP application and use common login. Follow the steps in the sections below in order.

## How do I upload the Report Server files to the Bold BI App Service?

You upload the Bold Reports<sup>®</sup> Report Server Azure packages to the Bold BI App Service over FTP with FileZilla.

1. Log in to the [Azure Portal](https://portal.azure.com).

2. Select the Bold BI Azure App Service.

    ![App Service](/static/assets/on-premise/images/how-to/azure-combination-deployment/app-services.png)

3. In the **Overview** section, click **Stop**.

    ![Stop Bold Reports<sup>®</sup> Azure App Service](/static/assets/on-premise/images/how-to/azure-combination-deployment/stop-option.png)

4. Click `Get Publish Profile option` to download a file.

    ![Get Publish Profile Option](/static/assets/on-premise/images/how-to/azure-combination-deployment/get-publish-option.png)

5. Open the PublishSettings file in Notepad. Note down the Publish URL, Username, and Password values.

    ![Download Get Publish Profile File](/static/assets/on-premise/images/how-to/azure-combination-deployment/get-publish-profile-file.png)

6. Download [FileZilla](https://download.filezilla-project.org/client/FileZilla_3.57.0_win64_sponsored2-setup.exe). Enter the Publish URL, Username, and Password, and click **Quickconnect**.

    ![Enter the Details](/static/assets/on-premise/images/how-to/azure-combination-deployment/file-zilla.png)

7. Download and extract the Report Server Azure packages [v3.3.23](https://github.com/boldreports/bold-reports-azure/tree/v3.3.23).

    ![Github v3.3.23](/static/assets/on-premise/images/how-to/azure-combination-deployment/github.png)

8. Enter the extracted packages file path in the local site.

    ![Download File Zip Location](/static/assets/on-premise/images/how-to/azure-combination-deployment/local-site.png)

9. Drag and drop the reporting folder from the local site to the remote site.

    ![Drag Reporting Folder](/static/assets/on-premise/images/how-to/azure-combination-deployment/move-reporting-folder.png)

## How do I choose the IDP version for a combination deployment?

In a combination deployment, Bold BI and Bold Reports<sup>®</sup> share a common IDP application. Find the higher IDP version before you replace the IDP folder.

1. Find the higher IDP version before you replace the IDP folder, because the IDP application is common for both Bold BI and Bold Reports<sup>®</sup>.

2. Open the Version.xml file in both the download location and the Azure deployed location.
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

3. Compare the version.xml files and find the higher IDP version between the Azure deployed location and the extracted location.

4. If the IDP version in the Azure deployed location is higher, skip step 14 and continue from step 15.

5. If the IDP version in the extracted location is higher, move the IDP folder from the extracted location to the Azure deployed location.

    ![Move IDP Folder](/static/assets/on-premise/images/how-to/azure-combination-deployment/idp-move-folder.png)

## How do I enable common login for Bold BI and Bold Reports<sup>®</sup>?

You enable common login by updating the IDP version and the `IsCommonLogin` property in the Bold Reports<sup>®</sup> product.json file and the Bold BI Config.xml file.

1. Search and select the `App Service Editor`.

    ![Search App Service Editor](/static/assets/on-premise/images/how-to/azure-combination-deployment/search-option.png)

2. Click the **Go** option.

    ![Go Option](/static/assets/on-premise/images/how-to/azure-combination-deployment/go-to.png)

3. Confirm that the reporting folder moved to the Azure deployment location.

    ![Check App Service Editor](/static/assets/on-premise/images/how-to/azure-combination-deployment/app-service-editor.png)

4. Go to the path wwwroot/app_data/Configuration/product.json.
     * Add an object for boldreports as shown in the screenshot.
     * Update the IDP version with the higher version you found in step 12.
     * Set the `IsCommonLogin`property to **true** for Bold BI and Bold Reports<sup>®</sup>.
     * The IDP version of Bold BI and Bold Reports<sup>®</sup> must be the same.

    ![Go To Path](/static/assets/on-premise/images/how-to/azure-combination-deployment/product-json.png)

5. Go to the Bold BI Storage account.

    ![Storage Account](/static/assets/on-premise/images/how-to/azure-combination-deployment/select-storage-account.png)

6. Click the `Containers` option and select boldbicontainer.

    ![Select Containers](/static/assets/on-premise/images/how-to/azure-combination-deployment/boldbi-container-option.png)

7. Go to the path boldbicontainer/boldservices/app_data/configuration and select the Config.xml file.

    ![Boldbicontainer Path](/static/assets/on-premise/images/how-to/azure-combination-deployment/configuration-xml-file.png)

8. Click the **Edit** option and add the Bold Reports<sup>®</sup> product details in XML format.
     * Update the IDP version of both Bold BI and Bold Reports<sup>®</sup> to the higher version you found in step 12.
     * Set the `IsCommonLogin` property to **true** for both Bold BI and Bold Reports<sup>®</sup>, and click the save option.

    ![Edit Configuration File](/static/assets/on-premise/images/how-to/azure-combination-deployment/edit-configuration-file.png)

## How do I configure the Azure App Service settings?

You configure the Bold BI Azure App Service with an application setting, the .NET version, and virtual applications for the Bold Reports<sup>®</sup> Report Server.

1. Go to the Bold BI Azure App Service, select `Configuration`, and click `Application Settings`.

    ![Configuration Settings](/static/assets/on-premise/images/how-to/azure-combination-deployment/configuration-file.png)

2. Confirm that the WEBSITE_LOAD_USER_PROFILE key is included in `Application Settings`. If it is missing, add the key and value below:
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

3. Click `General Settings` and set the .NET Version to **.NET 6**.

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

4. Go to `Path Mappings` and select `New Virtual Application`. Add the virtual paths and physical paths in the following table:
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

5. Start the Bold BI Azure App Service by clicking the `Start` button in the Overview section.

    ![Start Option](/static/assets/on-premise/images/how-to/azure-combination-deployment/start-option.png)

## How do I activate the license and create a Report Server site?

You activate Enterprise Reporting in the Bold ID application and then create a Bold Reports<sup>®</sup> site to launch the Report Server.

1. Log in to the Bold ID application.

    ![Login Application](/static/assets/on-premise/images/how-to/azure-combination-deployment/login-page.png)

2. Go to `Manage Sites`.

    ![Manage Sites](/static/assets/on-premise/images/how-to/azure-combination-deployment/startup-page.png)

3. Click the `Settings` option in the IDP application.

    ![UMS Settings](/static/assets/on-premise/images/how-to/azure-combination-deployment/ums-settings-option.png)

4. Go to the `Manage License` section and click `Login to activate account` under the `Enterprise Reporting` option.

    ![Activate Manage License Option](/static/assets/on-premise/images/how-to/azure-combination-deployment/manage-license.png)

5. After the account is activated, go to the site page and create a site.

    ![Create Site](/static/assets/on-premise/images/how-to/azure-combination-deployment/create-site-option.png)

6. Create a site for Bold Reports<sup>®</sup>.

    ![Site Creation](/static/assets/on-premise/images/how-to/azure-combination-deployment/site-creation.png)

7. Enter the database credentials and click **Next**.

    ![Select Database](/static/assets/on-premise/images/how-to/azure-combination-deployment/select-database.png)
    >**Note**: If you need to use an existing database, select the existing database option.

8. Provide your Azure blob storage details. If you do not have custom blob storage, enable the `use the same blob used for tenant registration` check box to restore the default storage account details.

    ![Select Storage](/static/assets/on-premise/images/how-to/azure-combination-deployment/storage-details.png)

9. Select the administrator and click create and launch site.

    ![Select Administration](/static/assets/on-premise/images/how-to/azure-combination-deployment/administation.png)

10. The site is created and the Report Server launches.

    ![Select Administration](/static/assets/on-premise/images/how-to/azure-combination-deployment/main-page.png)

## Frequently asked questions

### Can Bold BI and Bold Reports<sup>®</sup> use different IDP versions?

No. In a combination deployment, the IDP version of Bold BI and Bold Reports<sup>®</sup> must be the same, so you use the higher IDP version for both.

### Which .NET version does the App Service need?

Set the .NET version of the Bold BI Azure App Service to .NET 6 in `General Settings`.

## See also

* [Apply patches to support common login with Bold BI](./../apply-patches-to-bold-reports-to-support-common-login-with-latest-bi/)
* [Apply patches to the Bold Reports<sup>®</sup> Azure App Service](./../apply-patches-to-bold-reports-azure-app-service/)
* [Create a Bold Reports<sup>®</sup> Azure App Service with the ARM template](./../create-a-bold-reports-azure-app-service-using-the-arm-template-up-to-v2.x/)
