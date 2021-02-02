---
title: Import Azure Active Directory Users in BoldReportsOn-Premise
description: Describes the step-by-step procedure to import users from the Azure Active Directory into the Bold Reports On-Premise.
platform: report-plaftorm
documentation: ug
---

# Azure Active Directory User Import

This section explains how to search and import users from Azure Active Directory into the Bold Reports On-Premise.

> Azure Active Directory connection has to be configured in the [Azure Active Directory Settings](./../../../../manage-app-settings/azure-active-directory/) in the `General` page for importing users.

Users belonging to the `System Administrator` group only can import Azure Active Directory users into the Bold Reports.

## Search Users

Initially, any Active Directory users cannot be displayed until searching for the user.

You can search the Azure Active Directory users with any one of the below properties and choose them to import into the Bold Reports.

* Email Address
* Full name

A maximum of 1000 users will be searched and pulled from Azure Active Directory in a single request.

Bold Reports will list the search results of the users in the grid as shown in the below figure.

> The search result will be based on "starts with" query.

![Import Users from Azure Active Directory Server](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/Search-Azure-Active-Directory-User.png)

## Import Users

To import the Azure Active Directory users into the Bold Reports, you have to choose the users from the list and click on the `Import and Activate` button at the top right corner.

Bold Reports will import the chosen users and a confirmation message will be displayed as shown in the below figure.

![Success message after imported the Azure Active Directory users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/Azure-Active-Directory-User-imported.png)

## Duplicate Users

Azure Active Directory users who has the same  email address as that of the Bold Reports users(who are already present) will be marked as duplicate users and will not be allowed to import into Bold Reports.  

![Duplicated Azure Active Directory Users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/Duplicated-Azure-Active-Directory-Users.png)

## Modify Azure Active Directory Connection

To modify Azure Active Directory configuration settings, click on the `Modify` link as below

![Modify Azure Active Directory Configuration](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/Modify-Azure-Active-Directory-Configuration.png)