---
layout: post
title: Migrate from single to multiple tenant in blob storage.
description: This documentation explains about how to migrate from one Sycfusion server single tenant to Bold reports multiple server in blob storage.
platform: embedded-reporting-tools
documentation: ug
---

# How to migrate from one syncfusion single tenant server to Bold reports multiple tenant server in azure blob storage

1. Create IDP folder and Report Server folder in your local machine as shown in the following screenshot.

   ![Azure Blob folder](/static/assets/on-premise/images/how-to/blob-folder.png)

2. Create the following sub-folders structure like **/App_Data/Configuration/** under **IDP** folder.

3. Go to your storage account, which is created at the deployment time of Bold Reports (multi tenant)and in container section navigate to following location. **boldreportscontainer/boldservices/app_data/configuration**

   ![Azure Blob location](/static/assets/on-premise/images/how-to/blob-location.png)

4. Download the **config.xml** and **privatekeys.dat** files to the folder **IDP/App_Data/Configuration**

   ![Azure Blob download option](/static/assets/on-premise/images/how-to/blob-download.png)

5. Create the following sub-folders structure like **/App_Data/Configuration/** under Report Server folder in your local machine.

6. Go to the storage account of previous Syncfusion Report Server (Single-Tenant) and in container section navigate to the following location. **syncfusionrscontainer/Syncfusion/Report Server/Configuration/**

   ![Configure file](/static/assets/on-premise/images/how-to/blob-configure.png)

7. Download the **config.xml** file to the folder **Report Server/App_Data/Configuration**

   ![Configure download option](/static/assets/on-premise/images/how-to/blob-config-download.png)

8. Run the data migration utility.

## Steps to run the data migration utility

1. Download the shared Migration Utility zip folder from [Utility](https://www.syncfusion.com/downloads/support/common/5100/ze/Migration_Utility_4f292a75.zip).

2. Extract the folder and edit the **Syncfusion.Server.DataMigration.exe.config** file.

3. Update the values of below listed keys in the config file.

   ``` html
   <add key = “ReportsBackUpConfigPath” value=””/>
   <add key = ”BoldReportsIDPPath” value=”D:\migration\IDP”/>
   ```

   ![Add key file](/static/assets/on-premise/images/how-to/blob-add-key.png)

4. Copy the Configuration path from your Report Server back up folder and paste it to the value of **ReportsBackUpConfigPath** key.

   For example,

   ``` html
   <add key="ReportsBackUpConfigPath" value=" D:\migration\Report Server\App_Data\Configuration" />
   ```

5. Copy the IDP folder path from your back up folder and paste it to the value of **BoldReportsIDPPath** key.

   For example,

   ``` html
   <add key=" BoldReportsIDPPath" value="D:\migration\IDP" />
   ```

6. Run the tool **Syncfusion.Server.DataMigration.exe** from the extracted location.

   ![Blob Utility](/static/assets/on-premise/images/how-to/blob-utility.png)

> **Note:**
> * The migration tool can migrate your resources like Reports, Data Sets, Data Sources, Schedules, Users, Groups and Permissions.<br>
>
> * Also, the utility will not migrate the following items like Admin Settings and Profile Pictures.<br>
>
> * The utility will not migrate the password of the user. So we need to set the password manually. In ums page set password for the user manually as shown in the screenshot below.<br>
> ![Blob password](/static/assets/on-premise/images/how-to/blob-password.png)