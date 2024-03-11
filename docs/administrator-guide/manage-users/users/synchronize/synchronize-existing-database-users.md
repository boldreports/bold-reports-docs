---
layout: post
title: Synchronize Imported Users From the Existing Database
description: Learn how to synchronize the Imported users from the existing database with the updated user properties in the Bold Reports.
platform: report-platform
documentation: ug
---

# Synchronization of Imported Users from the Existing Database

This section explains how to synchronize the details of the imported existing database users with the existing database.

> **Note:** Before synchronizing the Existing Database users, follow the provided steps:
> 1. Configure [Database Settings](./../../../../manage-app-settings/database-settings/).
> 2. Import users from the existing database into Bold Reports by referring to the following [link](./../../../../manage-users/users/import-users/import-users-from-database/).

You can navigate to the user synchronization page from users page, as shown in the image below:

![Imported Database Users Synchronization Link](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/user-synchronisation-navigation-button-for-importdb.png)

## Synchronize Users

* Bold Reports will list the imported database users that are already present, as shown in the image below.

    ![Imported user list from Existing Database](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/Imported-db-users-list.png)

    > **Note:** Only users imported from the configured database within this organization are listed here.

* Select the users you want to synchronize and click on `Synchronize` at the top.

    ![Synchronize button](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/synchronize-button-of-dbusers.png)

### Synchronization procedure

* Bold Reports will synchronize the user details, such as first name, last name, email address,and contact number, with the existing database.

* Bold Reports will delete the user if they have been deleted from the existing database.

After synchronization completes, the number of modified, deleted, and duplicated users will be displayed in the success message box, as shown in the image below.
    ![Synchronization confirmation window](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/Synchronization-Confirmation-window-of-importdb.png)

## Duplicate Users

 Existing Database users who have the same email address as Bold Reports users(already present) will be marked as duplicate users and will not be allowed to synchronize with the imported existing database users.

![Display Duplicated users](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/display-duplicate-message-of-importdb.png)