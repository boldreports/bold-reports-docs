---
layout: post
title: Import Active Directory Users | Report Server | Syncfusion
description: Describes the step-by-step procedure to import users from the Active Directory into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Import Active Directory users

This section explains how to search for and import users from Active Directory into Bold Reports On-Premise.

> **Note:** The Active Directory connection must be configured within the [Active Directory Settings](./../../../../manage-app-settings/active-directory/) inorder to import users.

Users belonging to the `System Administrator` group can import Active Directory users to the Report Sever.

## Search users

You can search for Active Directory users using any of the properties listed below and choose them to import into the Bold Reports application.

* User name
* First name
* Last name
* Email address
* Display name

A maximum of 1000 users will be searched and retrieved from Active Directory in a single request.

The Bold Reports application will search for users within the specified distinguished name provided in the Active Directory settings page and display the search results in a grid.
    ![Search Active Directory users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-active-directory/search-user.png)
> The search result will be based on a "starts with" query.

## Import users

To import Active Directory users into the Bold Reports, select the users from the list and click **Import** at the top-right corner. Once the import process is complete, a confirmation message will be displayed, as shown in the following image.
![Success message after imported the Active Directory users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-active-directory/user-imported.png)

## Duplicate users

Users with the same username or email address as existing Bold Reports users will be flagged as duplicate users and cannot be imported into Bold Reports.

![Duplicated users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-active-directory/duplicated-users.png)

## Modify the Active Directory connection

To modify Active Directory configuration settings, click on **Modify** as shown in the following image.
![Modify Active Directory configuration](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-active-directory/modify-configuration.png)
