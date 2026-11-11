---
layout: post
title: Reset a User Password with the Admin Utility | Bold Reports
description: Reset the password of any Bold Reports Report Server user with the admin utility command line on Windows, Linux, or Azure App Service, using email or username.
platform: Report-platform
documentation: ug
---

# Reset a Bold Reports<sup>®</sup> User Password

You can reset the current password of any Bold Reports<sup>®</sup> user with the admin utility, using their email address or username. Follow the steps for your platform:

* [Windows](#windows)
* [Linux](#linux)
* [Azure App Service](#azure-app-service)

## Windows

To reset a Bold Reports<sup>®</sup> user password on Windows, run the admin utility `reset` command from the command prompt.

1. Open the command prompt and change the directory to the Admin Utility location.

   ```sh
   cd C:\BoldServices\utilities\adminutils
   ```

   The following screenshot shows the command prompt in the admin utility location.

   ![command](/static/assets/on-premise/images/tenant-management/admin-utility/cmdforutils-1.png)

2. Run the following command to reset the password:

   ```sh
   Syncfusion.Server.Commands.Utility.exe reset -u 'user email or username here' -p 'new password here'
   ```

   ![reset-command](/static/assets/on-premise/images/tenant-management/admin-utility/resetcmd-1.png)

3. After the password resets successfully, the user can log in with the updated password.

## Linux

To reset a Bold Reports<sup>®</sup> user password on Linux, run the admin utility `reset` command through `dotnet`.

1. Change the directory to the admin utility location.

   ```sh
   cd /var/www/bold-services/application/utilities/adminutils/
   ```

   ![admin-utility](/static/assets/on-premise/images/tenant-management/admin-utility/admin-utility-linux.png)

2. Run the following command to reset the password:

   ```sh
   ../../../dotnet/dotnet Syncfusion.Server.Commands.Utility.dll reset -u 'user email or username here' -p 'new password here'
   ```

   ![linux-reset-password](/static/assets/on-premise/images/tenant-management/admin-utility/linux-reset-password.png)

3. After the password resets successfully, the user can log in with the updated password.

## Azure App Service

To reset a Bold Reports<sup>®</sup> user password on Azure App Service, you update the `config.xml` and `privatekeys.dat` files with the Password Reset Utility and upload them to the storage account.

**Follow these steps to update the user password**:

1. Stop the created Azure App Service.

   ![Stop Azure App](/static/assets/on-premise/images/tenant-management/admin-utility/stop-azure-app.png)

2. Navigate to your storage account, which was created during the deployment of Bold Reports<sup>®</sup> in the Azure App Service, and go to the container section.

   ![Storage Account](/static/assets/on-premise/images/tenant-management/admin-utility/storage-account.png)
   ![Storage Container](/static/assets/on-premise/images/tenant-management/admin-utility/storage-container.png)

3. Go to the location: **boldreportscontainer/boldservices/app_data/configuration**.

   ![Navigation Location](/static/assets/on-premise/images/tenant-management/admin-utility/navigate-location.png)

4. Download the **config.xml** and **privatekey.dat** files from the specified location.

   ![Download Config File](/static/assets/on-premise/images/tenant-management/admin-utility/download-config.png)

5. To reset the user password, download the [Password Reset Utility](https://www.syncfusion.com/downloads/support/directtrac/general/ze/adminutils-1865244183).

6. Unzip the downloaded file to extract its contents.

7. Under the extracted **adminutils** folder, create a new folder named **app_data\configuration**, as the following screenshot shows.

   ![Creating folder structure](/static/assets/on-premise/images/tenant-management/admin-utility/creating-folder.png)

8. Copy the `config.xml` and `privatekeys.dat` files downloaded in step 4, and paste them into the **adminutils-1865244183\app_data\configuration** folder.

   ![Inluding files](/static/assets/on-premise/images/tenant-management/admin-utility/paste-config-private.png)

9. Open Windows PowerShell in Administrator mode and navigate to the utility directory as follows:

   ![Utility Directory](/static/assets/on-premise/images/tenant-management/admin-utility/utility-directory.png)

10. Reset the password by running the command below:

```sh
./Syncfusion.Server.Commands.Utility.exe  reset -u <username> -p <new password>
```

   **Command details:**

   username - provide your username or email address of the user.</br>
   new password - provide new password which you want to reset.
   ![Reset Command](/static/assets/on-premise/images/tenant-management/admin-utility/execute-command-reset.png)
11. After successful execution, the password is updated in the `config.xml` and `privatekeys.dat` files located in the **adminutils-1865244183\app_data\configuration** directory.</br>
12. Upload the `config.xml` and `privatekeys.dat` files to the **storage account** associated with the Azure App Service. Navigate to your storage account, and go to the following location: **boldreportscontainer/boldservices/app_data/configuration**.
![Navigation Location](/static/assets/on-premise/images/tenant-management/admin-utility/navigate-location.png)
13. Before proceeding, make a `backup` of the current **config.xml** and **privatekeys.dat** files, then delete them.
![Delete Config File](/static/assets/on-premise/images/tenant-management/admin-utility/delete-config-file.png)
14. Click `Upload` and select the **config.xml** file from the location: `adminutils-1865244183\app_data\configuration` to upload it. Next, upload the **privatekeys.dat** file.
![Upload Config File](/static/assets/on-premise/images/tenant-management/admin-utility/upload-files.png)
![Upload Config File](/static/assets/on-premise/images/tenant-management/admin-utility/click-upload.png)
15. Start the Azure app service.
![Start Azure App](/static/assets/on-premise/images/tenant-management/admin-utility/start-azure-app.png)
You can now access the application by using its URL.

## Frequently asked questions

### Can I reset a password using the user's email address?

Yes. The Bold Reports<sup>®</sup> admin utility `reset` command accepts the user's email address or username with the `-u` option.

### Which files change when I reset a password on Azure App Service?

The utility updates the `config.xml` and `privatekeys.dat` files. You then upload them to the **boldreportscontainer/boldservices/app_data/configuration** location in your storage account.

## See also

* [Admin utility overview](../)
* [Reset two-factor authentication](../reset-two-factor-authentication/)
* [Reset the application database](../reset-application-database/)
