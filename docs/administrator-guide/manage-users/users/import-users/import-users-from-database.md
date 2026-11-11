---
layout: post
title: Import Users from an Existing Database | Bold Reports
description: Import users from an existing database into Bold Reports On-Premises Edition from the User Management page after you set up the connection in Database Settings.
platform: report-platform
documentation: ug
---

# Import users from a database into Bold Reports<sup>®</sup>

You can import users from an existing database into Bold Reports<sup>®</sup> On-Premises Edition from the User Management page.

## What do I need before importing database users?

Bold Reports<sup>®</sup> On-Premises Edition needs a configured database connection and a System Administrator account before you import users.

> **NOTE:** To import users from the existing database, you must configure the database connection in the [Database Settings](./../../../../manage-app-settings/database-settings/) within the User Directories tab.

Only users belonging to the `System Administrator` group can import users from the database into Bold Reports<sup>®</sup> On-Premises Edition.

## How do I list database users?

You list database users in Bold Reports<sup>®</sup> On-Premises Edition from the User Management page. Follow these steps:

1. Click `New User` on the User Management page.
2. Select `Import from Database`.

    ![Add New Users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-database/add-new-users.png)

The link redirects to the import page, which appears as follows:

![Import Users from Database - Home](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-database/import-users-home.png)

## How do I select and import users?

After you select columns, Bold Reports<sup>®</sup> displays the data retrieved from the database in the grid. Follow these steps:

1. Choose the users to be imported.
2. Click `Import Users` to proceed with the import.
    ![Import Selected Users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-database/import-users-grid-selection-new.png)

Bold Reports<sup>®</sup> imports the selected users and displays a confirmation message, as shown in the following image.
    ![Success message after imported the Database users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-database/Database-User-imported-new.png)

## How do I modify the existing database connection?

You modify the Bold Reports<sup>®</sup> database configuration settings by clicking the `Modify` button:
    ![Modify Database Configuration](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-database/Modify-Database-settings-Configuration.png)

## Frequently asked questions

### Where do I configure the database connection for user import?

You configure it in the Bold Reports<sup>®</sup> [Database Settings](./../../../../manage-app-settings/database-settings/) within the User Directories tab.

### Who can import users from a database?

Only users belonging to the `System Administrator` group can import users from the database into Bold Reports<sup>®</sup> On-Premises Edition.

## See also

* [Synchronize existing database users](./../../synchronize/synchronize-existing-database-users/)
* [Account activation](./../../../account-activation/)
* [Import users from CSV](./../import-users-from-csv/)
