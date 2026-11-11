---
layout: post
title: Synchronize Users from an Existing Database | Bold Reports
description: Synchronize users imported from an existing database in Bold Reports so first name, last name, email address, and contact number match that database.
platform: report-platform
documentation: ug
---

# Synchronize imported database users in Bold Reports<sup>®</sup>

Bold Reports<sup>®</sup> synchronizes the details of users imported from an existing database with that database.

## What do I need before synchronizing database users?

Bold Reports<sup>®</sup> needs configured database settings and imported database users before you synchronize.

> **Note:** Before synchronizing the Existing Database users, follow the provided steps:
> 1. Configure [Database Settings](./../../../../manage-app-settings/database-settings/).
> 2. Import users from the existing database into Bold Reports<sup>®</sup> by referring to the [Import Users from Database Guide](./../../../../manage-users/users/import-users/import-users-from-database/).

You can navigate to the user synchronization page from the users page, as shown in the image below:

![Select Database Synchronization](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/select-database-synchronize.png)

## Synchronize Users

Bold Reports<sup>®</sup> lists the imported database users that are already present. Follow these steps to synchronize them:

1. Review the imported users, as shown in the image below.

    ![Imported user list from Existing Database](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/Imported-db-users-list.png)

    > **Note:** Only users imported from the configured database within this organization are listed here.

2. Select the users you want to synchronize.
3. Click `Synchronize` at the top.

    ![Synchronize button](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/synchronize-button-of-dbusers.png)

### Synchronization procedure

Bold Reports<sup>®</sup> applies the following changes from the existing database during synchronization:

* Bold Reports<sup>®</sup> synchronizes the user details, such as first name, last name, email address, and contact number, with the existing database.

* Bold Reports<sup>®</sup> deletes the user if the user has been deleted from the existing database.

After synchronization completes, the success message box displays the number of modified, deleted, and duplicated users, as shown in the image below.
    ![Synchronization confirmation window](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/Synchronization-Confirmation-window-of-importdb.png)

## What happens to duplicate users?

Bold Reports<sup>®</sup> marks existing database users who have the same email address as Bold Reports<sup>®</sup> users (already present) as duplicate users. Duplicate users are not allowed to synchronize with the imported existing database users.

![Display Duplicated users](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-existing-database-users/display-duplicate-message-of-importdb.png)

## Frequently asked questions

### Which user details are synchronized from the database?

Bold Reports<sup>®</sup> synchronizes first name, last name, email address, and contact number with the existing database.

### Which users appear on the synchronization page?

Bold Reports<sup>®</sup> lists only users imported from the configured database within the organization.

## See also

* [Import users from a database](./../../import-users/import-users-from-database/)
* [Database settings](./../../../../manage-app-settings/database-settings/)
* [Database synchronization schedule](./../../../../manage-app-settings/synchronization-schedule/database-synchronization-schedule/)
