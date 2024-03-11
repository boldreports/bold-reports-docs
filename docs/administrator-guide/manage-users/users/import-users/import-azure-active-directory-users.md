---
title: Import Azure Active Directory Users in BoldReportsOn-Premise
description: Describes the step-by-step procedure to import users from the Azure Active Directory into the Bold Reports On-Premise.
platform: report-plaftorm
documentation: ug
---

# Azure Active Directory User Import

This section explains how to search for and import users from Azure Active Directory into Bold Reports On-Premise.

> **Note:** To import users, the Azure Active Directory connection must be configured in the [Azure Active Directory Settings](./../../../../manage-app-settings/azure-active-directory/).

Only users belonging to the `System Administrator` group only can import Azure Active Directory users into the Bold Reports.

## Search Users

Active Directory users cannot be displayed initially until a user search is performed.

You can search for Azure Active Directory users using any of the properties below and select them for import into Bold Reports.

* Full name
* Username
* Email Address

A maximum of 1000 users will be searched and pulled from Azure Active Directory in a single request.

Bold Reports will list the search results of the users in the grid, as shown in the image below.

> Note: The search result will be based on a "starts with" query.

![Import Users from Azure Active Directory Server](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/Search-Azure-Active-Directory-User.png)

## Import Users

* To import Azure Active Directory users into Bold Reports, you need to select the users from the list and click on the `Import` button located at the top right corner.

    ![Select Azure Users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/select-users.png)

* Bold Reports will import the selected users, and a confirmation message will be displayed, as shown in the image below.

    ![Success message after imported the Azure Active Directory users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/Azure-Active-Directory-User-imported.png)

## Duplicate Users

Azure Active Directory users who have the same email address as Bold Reports users (already present) will be marked as duplicate users and will not be allowed to be imported into Bold Reports.

![Duplicated Azure Active Directory](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/Duplicated-Azure-Active-Directory-Users.png)

## Modify the Azure Active Directory Connection

To modify Azure Active Directory configuration settings, click on the `Modify` button as shown below.

![Modify Azure Active Directory Configuration](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/Modify-Azure-Active-Directory-Configuration.png)