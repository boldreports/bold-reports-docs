---
layout: post
title: Migration steps for BoldReportsOn-PremiseEdition
description: Explains how to migrate the Bold Reports On-Premise Edition to the latest version and the changes involved to run the utility.
platform: report-platform
documentation: ug
---

# Migrate Bold Reports On-Premise

This section explains how to migrate your resources from `v4.1 (Syncfusion Reports Server)` or `v1.2 (Bold Reports Single Tenant)` to `v2.1 (Bold Reports Multi Tenant)`.

## Prerequisites

* Take backup of the database and resources files from the below folder location.

<table>
<tr>
<th>
Product
</th>
<th>
Location
</th>
<th>
Back Up Example
</th>
</tr>
<tr>
<td>
Syncfusion Report Server
</td>
<td>

`C:\Syncfusion\Report Server\ReportServer.Web\App_Data`

`C:\Syncfusion\UMS\UMS.Web\App_Data`
</td>
<td>

`C:\backup_syncfusion\Report Server\App_Data`

`C:\backup_syncfusion\UMS\App_Data`
</td>
</tr>
<tr>
<td>
Bold Report Server (Single Tenant)
</td>
<td>

`C:\Bold Reports\Report Server\ReportServer.Web\App_Data`

`C:\Bold Reports\UMS\UMS.Web\App_Data`
</td>
<td>

`C:\backup_boldreports\Report Server\App_Data`

`C:\backup_boldreports\UMS\App_Data`
</td>
</tr>
</table>

> For an Azure App Service, you have to take a backup of `App_Data` folder by using the FTP application and place the backup folder in the machine which you installed the `bold reports v2.1`.

* After taken the backup, uninstall the current Syncfusion / Bold Report Server.

* Install the latest Bold Reports Server as fresh installation by following this [link](./../../../../installation-and-deployment/)

* Configure the application using SQL Database by following this [link](./../../../../application-startup/) and while configuring the admin details you must use the admin email-id of Syncfusion Reports Server / Bold Reports Server (Single Tenant).

* Once configuration is done, you can migrate your old data to this application.

## Steps to run the data migration utility

1. Download the migration tool from this [link](https://www.syncfusion.com/downloads/support/directtrac/general/ze/migration_util-1263808578).
2. Extract the file and edit the `Syncfusion.Server.DataMigration.exe.config` file.
3. You need to update the values of below listed keys in the config file.

    * `<add key="ReportsBackUpConfigPath" value=""/>`
    * `<add key="IDPDecryptionKey" value=""/>`
    * `<add key="BoldReportsIDPPath" value="C:\Bold Reports\IDP"/>`
![data-migration-config](/static/assets/on-premise/images/data-migration/migration-config.png)

4. Copy the `Configuration` path in your Report Server back up folder and paste it to the value of `ReportsBackUpConfigPath` key. For example, `<add key="ReportsBackUpConfigPath" value="C:\backup_boldreports\Report Server\App_Data\Configuration"/>`.

5. Go to the installation location `C:\Bold Reports\IDP\` and copy the `decryptionkey` value from `web.config` file. Then paste it to the value of `IDPDecryptionKey` key in `Syncfusion.Server.DataMigration.exe.config`. For example, `<add key="IDPDecryptionKey" value="3A95B056D5C4D775D30A157938528D135F0FED0CD51334C7"/>`
![idp-decryption-key](/static/assets/on-premise/images/data-migration/Idp-decryption-key.png)

6. By default the Bold Reports installation will be deployed under `C:\Bold Reports\IDP` and the same will be updated in `Syncfusion.Server.DataMigration.exe.config` file. If the Bold Reports deployed in some other location means then you must update the IDP path location in the value of `BoldReportsIDPPath` key. For example, `<add key="BoldReportsIDPPath" value="C:\Bold Reports\IDP"/>`
![idp-location](/static/assets/on-premise/images/data-migration/idp-location.png)

7. Run the tool `Syncfusion.Server.DataMigration.exe` from the extracted location.
![data-migration-tool](/static/assets/on-premise/images/data-migration/migration-exe.png)

> * The migration tool can migrate your resources like Reports, Data Sets, Data Sources, Schedules, Users, Groups and Permissions.
> * Also, the utility will not migrate the following items like User's without email address, Admin Settings and Profile Pictures.
> * If you need any further assistance please contact Syncfusion Support.