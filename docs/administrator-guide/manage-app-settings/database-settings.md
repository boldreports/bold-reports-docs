---
layout: post
title: Configure database settings | Report Server | Syncfusion
description: Configure database settings to import users and groups and synchronize their details after importing into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Database settings

You should configure the database settings in the Bold Reports Server to import users and groups from an existing database.

## Configure database connection details

1. To configure the database connection details, click on the **Settings** option in the left-side panel of the Reports Server.
2. Navigate to the **User Directories** tab, then select **Database** as shown in the following image.
    ![Database connection configuration page](/static/assets/on-premise/images/settings/database-settings-page.png)

Users can be imported from the following types of databases:
* SQL Server
* PostgreSQL

To select the type of database from which users are to be imported, click on the **Database type** dropdown.
    ![Select database Type](/static/assets/on-premise/images/settings/select-database-type.png)

### SQL Server database

1. For the SQL Server Database, provide the following connection details: Server name, Authentication type, Username, Password, and Database name.
2. Click **Test Connection** to validate the connection details.
![Configuring SQL Server database connection](/static/assets/on-premise/images/settings/connect-to-sqlserver-database.png)

### PostgreSQL database

1. For the PostgreSQL Database, provide the following connection details: Server name, Port, Username, Password, and Database name.
2. Click **Test Connection** to validate the connection details.
![Configuring PostgreSQL database connection](/static/assets/on-premise/images/settings/connect-to-postgresql-database.png)

## Map database columns

1. Once the connection details are filled out, click **Next** to retrieve the schema of the provided database connection.
    ![Select Next option from database page](/static/assets/on-premise/images/settings/next-click.png)

2. After establishing the database connection, the data page will be displayed as follows.
    ![Database mapping column](/static/assets/on-premise/images/settings/select-columns-page.png)

3. Select the matched columns from the database schema for the Username, First name, Email address, Last name (optional), and `IsActive` (Optional) fields.
    ![Mapping database column with user fields](/static/assets/on-premise/images/settings/map-columns.png)

4. If the columns are selected from different tables, the following scenarios will occur:
    * If the tables have a single relationship, the join will be made with the particular relationship.
    * If the tables have multiple relationships, the relationship can be selected from the list of relationships, and then click **Apply**.
        ![Select table relationship](/static/assets/on-premise/images/settings/select-relation.png)

    * If there is no relationship between tables, form a join with the selected tables,  and then click **Apply**.
        ![Form table relationship](/static/assets/on-premise/images/settings/form-relation.png)

5. After selecting all columns, click on **Save** to save the database details. Based on these saved details, the system will retrieve users from the configured database.
    ![Saving database details](/static/assets/on-premise/images/settings/save-database-details.png)

    > Use the **Back** button on the settings page to edit the database details before mapping and saving the database configuration.

6. After the changes are completed, the success message will be displayed as shown in the image.
    ![Database configuration success message](/static/assets/on-premise/images/settings/database-details-saved.png)

    > **Note:** After configuring the database details, to import users from the existing database, it's necessary to change the account activation type from **automatic** to **email**.
    > ![Change Account Settings](/static/assets/on-premise/images/settings/change-account-activation.png)