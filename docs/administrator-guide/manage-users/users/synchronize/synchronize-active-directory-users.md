---
layout: post
title: Synchronize Active Directory User | Syncfusion Report Server
description: Explains synchronizing the Active Directory users with the updated user properties in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Synchronize Active Directory users

This section explains how to synchronize the details of imported Active Directory users with the Active Directory.

> Before synchronizing the Active Directory users, follow the provided steps:
> 1. Configure the [Active Directory Settings](./../../../../manage-app-settings/active-directory/).
> 2. [Import Active Directory Users](./../../import-users/import-active-directory-users/) into Bold Reports On-Premise.

You can navigate to the user synchronization page from the users page.
![Active Directory Synchronization button selection](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-active-directory-users/active-directory-synchronize-option.png)

## Synchronize users

* Bold Reports Server will list the Active Directory users that have already been imported.
    ![Active Directory imported users list grid](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-active-directory-users/imported-user-list.png)

* Select the users you want to synchronize and click `Synchronize` at the top right corner.
    ![Active Directory synchronize button](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-active-directory-users/synchronize-button.png)

### Synchronization procedure

* The user details, including username, first name, last name, email address, and contact number, are synchronized with the Active Directory Server.
* The Report Server will delete a user if the user have been deleted from the Active Directory Server.
* After synchronization is complete, the number of modified, deleted, and duplicated users will be displayed in the success message box.
    ![Active Directory synchronization confirmation window](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-active-directory-users/synchronize-completed.png)

## Duplicate users

Users with the same username or email address as existing Report Server users, who are already present, will be marked as duplicate users and will not be synchronized into Active Directory.
    ![Displays duplicated users in synchronization](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-active-directory-users/duplicate-users.png)