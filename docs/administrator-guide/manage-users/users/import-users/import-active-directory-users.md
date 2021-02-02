---
layout: post
title: Import Active Directory Users | Report Server | Syncfusion
description: Describes the step-by-step procedure to import users from the Active Directory into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Import Active Directory users

Users belonging to the System Administrator group can import Active Directory users to the Report Sever.

> Active Directory connection must be configured in the [Active Directory Settings](./../../../../manage-app-settings/active-directory/) for importing users.

This section explains how to search and import users from Active Directory into the Bold Reports On-Premise.

## Search users

Initially, any Active Directory user cannot be displayed until searching for users.

1. Search the Active Directory users with anyone of the following properties:
    * User name
    * First name
    * Last name
    * Email address
    * Display name

2. The Report Server lists the search results in grid as shown in the following image.
    ![Search Active Directory users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-active-directory/search-user.png)
    > The search result will be based on "starts with" query.

3. Choose the users to import into the Report Server.
    > A maximum of 1000 users will be searched and pulled from Active Directory in a single request.

## Import users

To import the Active Directory users into the Report Server, choose the users from the list and click **Import and Activate** at the top-right corner. After importing the Active Directory users, a confirmation message will be displayed as shown in the following image.
![Success message after imported the Active Directory users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-active-directory/user-imported.png)

## Duplicate users

Users who has the same username or email address as that of the Report Server users(who are already present) will be marked as duplicate users. It will not be allowed to import into the Report Server.
![Duplicated Active Directory users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-active-directory/duplicated-users.png)

## Modify Active Directory connection

To modify Active Directory configuration settings, click **Modify** as shown in the following image.
![Modify Active Directory configuration](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-active-directory/modify-configuration.png)
