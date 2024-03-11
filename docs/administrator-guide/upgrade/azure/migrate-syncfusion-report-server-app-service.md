---
layout: post
title: Upgrade steps for Syncfusion Report Server Azure app service
description: Explains how to upgrade the Syncfusion Report Server Azure App Service version from 1.x to the latest versions in Azure.
platform: report-platform
documentation: ug
---

# Migrate Syncfusion Report Platform Report Server Azure App Service

This section explains how to upgrade the Syncfusion Report Server Azure App Service to Bold Reports.

> You should have Syncfusion Report Server Azure App Service in version 4.x

## Create a Bold Reports Azure App Service

* Create the Bold Reports Report Server Azure App Service by following this [link](./../../../installation/azure-app-service/using-arm-template/) and also configure the application using the database by following this [link](./../../../installation/azure-app-service/using-arm-template/#configure-a-new-bold-reports).

## File storage resources for migration

1. Create the folder `IDP` and `Report Server` in your local machine as shown in the following screenshot.
![Report Server Config](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/folder-in-local-machine.png)

2. Connect your Syncfusion Report Server Web App by FileZilla, and then by dragging you can move the App_Data folder to `Report Server` folder, which you have created.

   ![Report Server App_Data](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/report-server-app-data.png)

3. Create the following sub-folders structure like `/App_Data/Configuration/` under `IDP` folder.

4. Go to your storage account, which is created at the deployment time of Bold Reports and in container section navigate to the following location.
`boldreportscontainer/tenantmanagement/tenant management server/configuration`

5. Download the config.xml file to the folder `IDP/App_Data/Configuration`.
![Download Config](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/download-config.png)

6. Connect your `Bold Reports (Multi-tenant)` Azure app by FileZilla, and then drag the `Privatekeys.dat` file to the local machine under the folder `IDP/App_Data/Configuration/`.
![Key file](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/key-file.png)

7. Run the [data migration utility](./../../on-premises/upgrade-from-classic-platform/data-migration/#steps-to-run-the-data-migration-utility).

## Azure Blob Storage resources for migration

1. Create the folder `IDP` and `Report Server` in your local machine as shown in the following screenshot.
![Report Server Config](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/folder-in-local-machine.png)

2. Create the following sub-folders structure like `/App_Data/Configuration/` under `IDP` folder.

3. Go to your storage account, which is created at the deployment time of Bold Reports and in container section navigate to following location.
`boldreportscontainer/tenantmanagement/tenant management server/configuration`

4. Download the config.xml file to the folder `IDP/App_Data/Configuration`.
![Download Config](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/download-config.png)

5. Connect your `Bold Reports (Multi-tenant)` Azure app by FileZilla, and then drag the `Privatekeys.dat` file to the local machine under folder `IDP/App_Data/Configuration/`.
![Key file](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/key-file.png)

6. Create the following sub-folders structure like `/App_Data/Configuration/` under `Report Server` folder in your local machine.

7. Go to the storage account of previous Report Server (Single-Tenant) and in container section navigate to the following location.
`boldreportsrscontainer/Bold Reports/Report Server/Configuration/`

8. Download the config.xml file to the folder `Report Server/App_Data/Configuration`.
![Download Config](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/download-config-file.png)

9. Run the [data migration utility](./../../on-premises/upgrade-from-classic-platform/data-migration/#steps-to-run-the-data-migration-utility).

## Data migration with migration utility

1. Download the migration tool from this [link](https://www.syncfusion.com/downloads/support/directtrac/general/ze/migration_util-1263808578).

2. Extract the file and open the `Syncfusion.Server.DataMigration.exe.config` file. You need to update the values to the following listed keys in the config file:

    `<add key="ReportsBackUpConfigPath" value=""/>`

    `<add key="BoldReportsIDPPath" value=""/>`

3. Copy the `IDP` path and paste it to the value of `BoldReportsIDPPath` key.
For example, `<add key="BoldReportsIDPPath" value="D:\migration\IDP"/>`

4. Copy the `Configuration` path of the Report Server and paste it to the value of `ReportsBackUpConfigPath` key.
For example, `<add key="ReportsBackUpConfigPath" value="D:\migration\Report Server\App_Data\Configuration"/>`
![Key file](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/app-settings-key.png)

5. Run the tool `Syncfusion.Server.DataMigration.exe` from the extracted location.
![DataMigration Exe](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/data-migration-exe.png)

> The migration tool will migrate the users, groups, permissions, reports, data sources, datasets, and schedules. The user without email address is skipped, because for the Bold Reports Report Server email is mandatory.