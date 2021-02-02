---
layout: post
title: Configure database settings | Report Server | Syncfusion
description: Configure database settings to import users and groups and synchronize their details after importing into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Database settings

You should configure the database settings in the Report Server to import users and groups from an existing database.

## Configure database connection details

1. To configure the database connection details, click the settings option in the Report Server left-side panel.
2. Navigate to the User Directory tab and select **Database** as shown in the following image.
![Database connection configuration page](/static/assets/on-premise/images/settings/database-settings-page.png)
3. You can import users from the following types of databases:
    * SQL Server
    * MySQL
    * Oracle
    * PostgreSQL
4. Click **database type** drop-down to change the database type.
![Select database Type](/static/assets/on-premise/images/settings/select-database-type.png)

### SQL Server database

1. Fill the SQL connection details such as server name, authentication type, username, password, and database name.
2. Click **Test Connection** to validate the connection details.
![Configuring SQL Server database connection](/static/assets/on-premise/images/settings/connect-to-sqlserver-database.png)

### MySQL database

1. Fill the MySQL connection details such as DSN, username, password, and database name.
2. Click **Test Connection** to validate the connection details.
![Configuring MySQL database connection](/static/assets/on-premise/images/settings/connect-to-mysql-database.png)

### Oracle database

1. Fill the Oracle connection details such as DSN, Admin username, Admin password, database name, and database password.
2. Click **Test Connection** to validate the connection details.
![Configuring Oracle database connection](/static/assets/on-premise/images/settings/connect-to-oracle-database.png)

### PostgreSQL database

1. Fill the PostgreSQL connection details such as server name, port, username, password, and database name.
2. Click **Test Connection** to validate the connection details.
![Configuring PostgreSQL database connection](/static/assets/on-premise/images/settings/connect-to-postgresql-database.png)

## Map database columns

1. After the connection details are filled, click **Next** to get schema of the provided database connection.
![Select Next option from database page](/static/assets/on-premise/images/settings/next-click.png)
2. The data page will be as follows, after the database has been connected.
![Database mapping column](/static/assets/on-premise/images/settings/select-columns-page.png)
3. Select the matched columns from the database schema for username, first name, email address, last name (optional), and `IsActive` (Optional) fields.
![Mapping database column with user fields](/static/assets/on-premise/images/settings/map-columns.png)

4. If the columns are selected from different tables, the following scenarios will happen:
    * If the tables have single relationship - The join will be made with the particular relationship.
    * If the tables have multiple relationships - The relationship can be selected from the list of relationships and then click **Apply**.
    ![Select table relationship](/static/assets/on-premise/images/settings/select-relation.png)
    * If there is no relationship between tables - Form Join with the selected tables and then click **Apply**.
    ![Form table relationship](/static/assets/on-premise/images/settings/form-relation.png)

5. After selecting all the columns, click **Save** to save the database details. Based on this saved details, it will pull the users from the configured database.
![Saving database details](/static/assets/on-premise/images/settings/save-database-details.png)

6. After the changes are completed, the success message will be displayed as shown in the image.
![Database configuration success message](/static/assets/on-premise/images/settings/database-details-saved.png)

7. Use the Back button in the settings page to edit the database details before mapping and saving the database configuration.