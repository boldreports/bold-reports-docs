---
layout: post
title: Configure Database Settings for User Import | Bold Reports
description: Configure database settings in the Bold Reports Report Server to import users from an existing SQL Server or PostgreSQL database and map columns to user fields.
platform: report-platform
documentation: ug
---

# Database settings in Bold Reports<sup>®</sup> Report Server

Database settings in the Bold Reports<sup>®</sup> Report Server let you import users and groups from an existing database.

## How do I configure the database connection details?

To configure the database connection details in the Bold Reports<sup>®</sup> Report Server, open the **User Directories** tab and select **Database**.

1. Click the **Settings** option in the left-side panel of the Report Server.
2. Navigate to the **User Directories** tab, then select **Database** as shown in the following image.
    ![Database connection configuration page](/static/assets/on-premise/images/settings/database-settings-page.png)

## Which databases can I import users from?

The Bold Reports<sup>®</sup> Report Server can import users from the following types of databases:
* SQL Server
* PostgreSQL

To select the type of database to import users from, click the **Database type** dropdown.
    ![Select database Type](/static/assets/on-premise/images/settings/select-database-type.png)

### SQL Server database

To connect the Report Server to a SQL Server database, enter the connection details and test the connection.

1. Provide the following connection details: Server name, Authentication type, Username, Password, and Database name.
2. Click **Test Connection** to validate the connection details.
![Configuring SQL Server database connection](/static/assets/on-premise/images/settings/connect-to-sqlserver-database.png)

### PostgreSQL database

To connect the Report Server to a PostgreSQL database, enter the connection details and test the connection.

1. Provide the following connection details: Server name, Port, Username, Password, and Database name.
2. Click **Test Connection** to validate the connection details.
![Configuring PostgreSQL database connection](/static/assets/on-premise/images/settings/connect-to-postgresql-database.png)

## How do I map database columns to user fields?

To map database columns in the Bold Reports<sup>®</sup> Report Server, retrieve the database schema and select the column that matches each user field.

1. After you fill in the connection details, click **Next** to retrieve the schema of the database connection.
    ![Select Next option from database page](/static/assets/on-premise/images/settings/next-click.png)

2. After the database connection is established, the data page is displayed as follows.
    ![Database mapping column](/static/assets/on-premise/images/settings/select-columns-page.png)

3. Select the matching columns from the database schema for the Username, First name, Email address, Last name (optional), and `IsActive` (Optional) fields.
    ![Mapping database column with user fields](/static/assets/on-premise/images/settings/map-columns.png)

4. If you select columns from different tables, the following scenarios occur:
    * If the tables have a single relationship, the join is made with that relationship.
    * If the tables have multiple relationships, select the relationship from the list of relationships, and then click **Apply**.
        ![Select table relationship](/static/assets/on-premise/images/settings/select-relation.png)

    * If there is no relationship between tables, form a join with the selected tables, and then click **Apply**.
        ![Form table relationship](/static/assets/on-premise/images/settings/form-relation.png)

5. After you select all columns, click **Save** to save the database details. The system retrieves users from the configured database based on these saved details.
    ![Saving database details](/static/assets/on-premise/images/settings/save-database-details.png)

    > Use the **Back** button on the settings page to edit the database details before mapping and saving the database configuration.

6. After the changes are complete, the success message is displayed as shown in the image.
    ![Database configuration success message](/static/assets/on-premise/images/settings/database-details-saved.png)

    > **Note:** After configuring the database details, to import users from the existing database, it's necessary to change the account activation type from **automatic** to **email**.
    > ![Change Account Settings](/static/assets/on-premise/images/settings/change-account-activation.png)

## Frequently asked questions

### Which user fields are required when I map columns?

Username, First name, and Email address are required. Last name and `IsActive` are optional.

### What must I change before importing users from the database?

Change the account activation type from **automatic** to **email** to import users from the existing database.

## See also

* [Database synchronization schedule](../synchronization-schedule/database-synchronization-schedule/)
* [Windows Active Directory settings](../active-directory/)
* [Microsoft Entra ID settings](../azure-active-directory/)
