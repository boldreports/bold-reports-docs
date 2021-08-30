---
layout: post
title: Manage permissions for Bold Reports On-Premise
description: Set access modes, entities, scopes and manage permissions for the users and groups in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Manage Permissions

Permissions can be managed only by the users belonging to the `System administrator` group. Permissions can be directly added to both users and groups and can be classified in the `Access Mode – Entity – Scope` structure.

This section explains the access modes, entities, scopes, and how to manage the permissions for users and groups.

## Access modes

* Read: Provides read permission for the chosen entity.
* Read and Write: Provides read and write permission for the chosen entity.
* Read, Write, and Delete: Provides read, write, and delete permission for the chosen entity.
* Read and Download: Provides read and download permission for the chosen entity.
* Read, Write, and Download: Provides read, write, and download permission for the chosen entity.
* Read, Write, Delete, and Download: Provides read, write, delete, and download permission for the chosen entity.
* Create: Provides permission to create the chosen entity.

## Entity

* All Reports: Provides permission to access all the reports with the chosen access mode.
* Reports in Category: Provides permission to access reports in a specific category with chosen access mode.
* Specific Report: Provides permission to access a specific report with the chosen access mode.
* All Data Sources: Provides permission to access all data sources with the chosen access mode.
* Specific Data Source: Provides permission to access a specific data source with the chosen access mode.
* Specific File: Provides permission to access a specific file with the chosen access mode.
* All Categories: Provides permission to access all categories with the chosen access mode.
* Specific Category: Provides permission to access a specific category with the chosen access mode.
* All Schedules: Provides permission to access all schedules with the chosen access mode.
* Specific Schedule: Provides permission to access a specific schedule with the chosen access mode.

## Scope

Choose scopes for the following entities only, other entities do not require scopes.

* Reports in Category: A specific category has to be chosen to provide access to the reports in that category.
* Specific Report: A specific report has to be chosen to provide access to it.
* Specific Data Source: A specific data source has to be chosen to provide access to it.
* Specific Category: A specific category has to be chosen to provide access to it.
* Specific Schedule: A specific schedule has to be chosen to provide access to it.

> `Create` access only have the following scopes:
> * All Reports
> * Reports in Category
> * All Data Sources
> * All Datasets
> * All Schedules and All Categories

## Manage users permissions

`Manage Permissions` page for the users can be accessed from any one of the following places.

1. Click on the `Manage Permission` icon for the respective users in the users grid on the user management page.
![Manage Permissions context menu for users](/static/assets/on-premise/images/manage-permissions/manage-permission-icon-user.png)
2. On the top right corner of the user profile edit page.
![Manage Permissions option on edit user page](/static/assets/on-premise/images/manage-permissions/edit-user.png)
3. Here, you will find both the permissions assigned directly to the user and the permissions that the user got inherited from the groups assigned with.
![List user permissions details](/static/assets/on-premise/images/manage-permissions/list-user-permissions.png)
4. Click **Add** in the Add Permission dialog box to add permissions to users as shown in the following image.
![Add permission to user](/static/assets/on-premise/images/manage-permissions/add-permission-to-user.png)

N>By clicking on the check box `Add another`, you can add multiple permission to the groups.

### Steps to add permission to users

1. Select the access mode.
2. Select the entity.
3. Select the scope if the access mode is not `Create` or if the entity is specific item type.
4. Click **Add** to add the framed permission to users.

## Manage group permissions

`Manage Permissions` page for the group can be accessed from any one of the following places.

1. Click on the `Manage Permission` icon for the respective group in the groups grid on the group management page.
![Manage Permissions context menu for group](/static/assets/on-premise/images/manage-permissions/manage-permission-icon-group.png)
2. On the top right corner of the group edit page.
![Manage Permissions option on edit group page](/static/assets/on-premise/images/manage-permissions/edit-group.png)

3. Here, you will find the permissions assigned directly to the group. Refer to the following screenshot for `Manage Permissions` in the user page.
![List user permissions details](/static/assets/on-premise/images/manage-permissions/list-group-permissions.png)

4. Click **Add** in the Add Permission dialog box to add permissions to the group as shown in the following image.
![Add permission to group](/static/assets/on-premise/images/manage-permissions/add-permission-to-group.png)

N>By clicking on the check box `Add another`, you can add multiple permission to the groups.

### Steps to add permission to the group

1. Select the access mode.
2. Select the entity.
3. Select the scope if the access mode is not `Create` or if the entity is specific item type.
4. Click **Add** to add framed permission to the group.