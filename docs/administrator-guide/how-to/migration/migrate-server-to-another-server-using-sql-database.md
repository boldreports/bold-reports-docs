---
title: Migrate server to another server using Sql database
description: Migrating one bold reports server to another bold reports server using Sql database in virtual machine.
keywords: report-platform 
---

# How to migrate one sever to another server using Sql database

We can migrate Bold Reports Server data from one server to another server without any data loss. It involves a few manual steps, as below.

1. Before proceeding with the migration, Install the same version of Bold Reports build on your target machine.

2. After installation, do not launch or start the application.

3. We need to make some configuration changes in the files to migrate data from Server-1 to Server-2. So please Stop **BoldReports_EnterpriseReporting** application in IIS manager.

4. Application data will be stored in the **app\_data** folder, and this will make the Bold Reports a stateful application. So, we need to copy the **app\_data** folder under **Deployed location:\BoldService** from Server-1 and paste that folder in the same location on Server-2.
   ![app-data](/static/assets/on-premise/images/how-to/app-data.png)

Please follow the below steps to change the configurations on the target server,

## Backup Database

You need to a take backup of all the database used in Bold Reports Applications. Please follow the steps below to backup databases,

1. Open SSMS and connect to the SQL Server in server-1.

2. Expand Databases and select the required database.

3. Right click on the database -> Tasks -> Backup.
   ![backup](/static/assets/on-premise/images/how-to/backup-sql.png)

4. In Back Up Database window, select the Backup Type as Full and under Destination, select Back up to as Disk.
   ![disk](/static/assets/on-premise/images/how-to/disk-sql.png)

5. Select the **Remove** button to remove the default destination location.

6. Click on **Add** button to select the destination and name for the database backup file.

7. Select the required folder for the backup file and enter the file name and it should be same as database name with a .bak extension.

8. Click **OK** to end the backup process.

## Restore SQL Database Using SSMS

Copy all the backup database files with .bak extension from server-1 to server-2. Follow the below steps to restore your SQL backup databases.

1. Open SSMS and connect to your database in server-2.

2. Select the Databases and right click -> Restore Database.
   ![restore](/static/assets/on-premise/images/how-to/restore-sql.png)

3. In the Restore Database window, select Device under the Source section and click the Browse button.
   ![device](/static/assets/on-premise/images/how-to/device-sql.png)

4. Now the Select Backup Device window will open. Select the Backup media type as **File** and click **Add**.
   ![file-name](/static/assets/on-premise/images/how-to/backup-file-sql.png)

5. Select the backup file which you want to restore and click **OK**.
   ![extension](/static/assets/on-premise/images/how-to/bak-sql.png)

6. The .bak file will be listed in the Select Backup Device window. Click **OK**.

## Update database connection string in Bold Reports

1. We need to update the database connection string in the **config.xml** file under **C:\BoldServices\app_data\configuration**.

2. To change the database connection string, Download the utility from [Utility](https://www.syncfusion.com/downloads/support/directtrac/general/ze/adminutils-1865244183)

3. Extract the zip file.

4. Create new folder **app_data\configuration** in the utility as like in below screenshot.

5. Copy the **config.xml** and **privatekeys.dat** files from **C:\BoldServices\app_data\configuration** and paste it under **adminutils-1865244183\app_data\configuration**
   ![configuration](/static/assets/on-premise/images/how-to/utility-config-sql.png)

6. Navigate to the utility directory in command prompt and run the following command

   **Syncfusion.Server.Commands.Utility.exe dbconfig -servername "localhost" -databasename "BoldReportsMasterDatabase" -u "Admin" -p "Admin@12345" -iswindowsauthentication false -sslenabled false**

   **Command details**

   Servername – Server hostname/IP

   Database name -  database name (IDP)

   u – server username

   p – server password

   iswindowsauthentication – Is windows authentication required (this is optional)

   sslenabled – Is encrypted connection required (this is optional)

7. Once it ran successfully, copy the config.xml and privatekeys.dat files from **adminutils-1865244183\app_data\configuration** from the utility folder and then replace it in **Deployed location:\BoldServices\app_data\configuration** in the server-2.

8. Check and update Ip address or localhost port in the config.xml file and product.json under **BoldServices\app_data\configuration** in Server-2. If you are using DNS leave as it is since it will be already available when copying the files from server-1 to server-2.
   ![config](/static/assets/on-premise/images/how-to/config-sql.png)

9. Make sure to bind your DNS in IIS in server-2 which you have used it in server-1, if not used please ignore this step.

10. Start the BoldReports_EnterpriseReporting application in IIS manager.

11. Go to site listing page of UMS application.

12. Go to settings and change the site url with your domain name like below
    ![url](/static/assets/on-premise/images/how-to/update-url-site.png)

13. Now your reports sites will launch with your existing data.