---
title: Import Users from Microsoft Entra ID | Bold Reports
description: Search Microsoft Entra ID (formerly Azure AD) users by full name, username, or email and import them into Bold Reports On-Premises Edition as an administrator.
platform: report-plaftorm
documentation: ug
---

# Import Microsoft Entra ID users into Bold Reports<sup>®</sup>

You can search for users in Microsoft Entra ID (formerly Azure Active Directory) and import them into Bold Reports<sup>®</sup> On-Premises Edition.

## What do I need before importing users?

Bold Reports<sup>®</sup> On-Premises Edition needs a configured Microsoft Entra ID connection and a System Administrator account before you import users.

> **Note:** To import users, configure the Microsoft Entra ID connection in the [Microsoft Entra ID settings](./../../../../manage-app-settings/azure-active-directory/).

Only users in the `System Administrator` group can import Microsoft Entra ID users into Bold Reports<sup>®</sup>.

## How do I search for Microsoft Entra ID users?

Bold Reports<sup>®</sup> does not display Active Directory users until you perform a user search.

You can search for Microsoft Entra ID users using any of the properties below and select them for import into Bold Reports<sup>®</sup>.

* Full name
* Username
* Email Address

A maximum of 1000 users are searched and pulled from Microsoft Entra ID in a single request.

Bold Reports<sup>®</sup> lists the search results of the users in the grid, as shown in the image below.

> Note: The search result will be based on a "starts with" query.

![Import Users from Azure Active Directory Server](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/Search-Azure-Active-Directory-User.png)

## How do I import the selected users?

You import Microsoft Entra ID users into Bold Reports<sup>®</sup> from the search results grid. Follow these steps:

1. Select the users from the list.
2. Click the `Import` button at the top right corner.

    ![Select Azure Users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/select-users.png)

Bold Reports<sup>®</sup> imports the selected users and displays a confirmation message, as shown in the image below.

![Success message after imported the Azure Active Directory users](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/Azure-Active-Directory-User-imported.png)

## What happens to duplicate users?

Microsoft Entra ID users who have the same email address as existing Bold Reports<sup>®</sup> users are marked as duplicates. They cannot be imported into Bold Reports<sup>®</sup>.

![Duplicated Azure Active Directory](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/Duplicated-Azure-Active-Directory-Users.png)

## How do I modify the Microsoft Entra ID connection?

You modify the Bold Reports<sup>®</sup> Microsoft Entra ID configuration settings by clicking the `Modify` button, as shown below.

![Modify Azure Active Directory Configuration](/static/assets/on-premise/images/manage-users-and-groups/users/import-from-azure-active-directory/Modify-Azure-Active-Directory-Configuration.png)

## Frequently asked questions

### Which properties can I search Microsoft Entra ID users by?

Bold Reports<sup>®</sup> lets you search Microsoft Entra ID users by full name, username, or email address.

### How many users can I retrieve in one search?

Bold Reports<sup>®</sup> searches and pulls a maximum of 1000 users from Microsoft Entra ID in a single request.

## See also

* [Synchronize Microsoft Entra ID users](./../../synchronize/synchronize-azure-active-directory-users/)
* [Import Microsoft Entra ID groups](./../../../groups/import-groups/import-azure-active-directory-groups/)
* [Microsoft Entra ID settings](./../../../../manage-app-settings/azure-active-directory/)
