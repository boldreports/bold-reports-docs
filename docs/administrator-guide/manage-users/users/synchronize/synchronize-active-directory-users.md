---
layout: post
title: Synchronize Active Directory User | Syncfusion Report Server
description: Explains synchronizing the Active Directory users with the updated user properties in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Synchronize Active Directory users

This section explains how to synchronize the imported Active Directory users details with the Active Directory.

> Before synchronizing the Active Directory users, follow the given steps:
> 1. Configure the [Active Directory Settings](./../../../../manage-app-settings/active-directory/).
> 2. [Import Active Directory Users](./../../import-users/import-active-directory-users/) to the Bold Reports On-Premise.

Navigate to the user synchronization page from users page by clicking `Active Directory Synchronization` button as shown in the following image.
![Active Directory Synchronization button selection](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-active-directory-users/active-directory-synchronize-option.png)

## Synchronize users

Already imported Active Directory Users are displayed in a grid as shown in the following image.
![Active Directory imported users list grid](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-active-directory-users/imported-user-list.png)

Choose the users you want to synchronize and click `Synchronize` at the top.
![Active Directory synchronize button](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-active-directory-users/synchronize-button.png)

### Synchronization procedure

* The user details such as username, first name, last name, email address, and contact number are synchronized with the Active Directory Server.
* Report Server will delete the user if the user has deleted from the Active Directory Server.
* After synchronization completes, the number of users modified, deleted, and duplicated will be shown in the success message box.
![Active Directory synchronization confirmation window](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-active-directory-users/synchronize-completed.png)

## Duplicate users

The users who has the same username or email address as that of the Report Server users(who are already present) will be marked as duplicate users. It will not be allowed to synchronize into Active Directory.
![Displays duplicated users in synchronization](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-active-directory-users/duplicate-users.png)