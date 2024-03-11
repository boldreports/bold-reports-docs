---
layout: post
title: Import users from Database in the BoldReportsOn-Premise.
description: Describes the step-by-step procedure to import users from an existing database into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# User Import from a Database

This section explains how to import users from a database into Bold Reports On-Premise.

> **NOTE:** To import users from the existing database, you must configure the database connection in the [Database Settings](./../../../../manage-app-settings/database-settings/) within the User Directories tab.

Only users belonging to the `System Administrator` group can import users from the database into Bold Reports On-Premise.

## Listing Database Users

* To add new users to Bold Reports On-Premise, click on `New User`, and then select `Import from Database` from the User Management page.

    ![Add New Users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-database/add-new-users.png)

* The link will redirect to another page that will appear as follows:

    ![Import Users from Database - Home](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-database/import-users-home.png)

## Select Users and Import

* After selecting columns, the data retrieved from the database will be displayed in the grid. Choose the users to be imported and click on `Import Users` to proceed with the import.
    ![Import Selected Users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-database/import-users-grid-selection-new.png)

* Bold Reports will import the selected users, and a confirmation message will be displayed as shown in the below image.
    ![Success message after imported the Database users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-database/Database-User-imported-new.png)

## Modify Existing Database Connection

To modify existing database configuration settings, click on the `Modify` button as shown below:
    ![Modify Database Configuration](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-database/Modify-Database-settings-Configuration.png)