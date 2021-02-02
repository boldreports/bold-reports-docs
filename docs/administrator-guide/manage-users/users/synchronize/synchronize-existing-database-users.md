---
layout: post
title: Synchronize Imported Users From the Existing Database
description: Learn how to synchronize the Imported users from the existing database with the updated user properties in the Bold Reports.
platform: report-platform
documentation: ug
---

# Synchronization of Imported Users From the Existing Database

This section explains how to synchronize the imported existing database users details with the Existing database.

You can navigate to the user synchronization page from users page as shown in the below figure.

![Imported Database Users Synchronization Link](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/user-synchronisation-navigation-button-for-importdb.png)

## Synchronize Users

Bold Reports will list the Imported Database users that are already imported as shown in the below figure.

![Imported user list from Existing Database](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/Imported-db-users-list.png)

> Only users imported from the database configured in this organization are listed here.

Choose the users you want to synchronize and click on `Synchronize` at the top.

![Synchronize button](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/synchronize-button-of-dbusers.png)

### Synchronization procedure

* Bold Reports will synchronize the user details - first name, last name, email address, contact number with the Existing Database.

* Bold Reports will delete the user if the user has deleted from the Existing Database.

After synchronization completes, the number of users modified, deleted, duplicated will be shown in the success message box as shown in the below figure.

![Synchronization confirmation window](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/Synchronization-Confirmation-window-of-importdb.png)

## Duplicate Users

 Existing Database users who has the same email address as that of the Bold Reports users(who are already present) will be marked as duplicate users and will not be allowed to synchronize with the imported existing database users.

![Display Duplicated users](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/display-duplicate-message-of-importdb.png)