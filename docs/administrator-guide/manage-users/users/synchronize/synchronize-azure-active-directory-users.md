---
layout: post
title: Synchronize Azure AD users in BoldReportsOn-Premise
description: Learn how to synchronize the Azure Active Directory users with the updated user properties in the Bold Reports.
platform: report-platform
documentation: ug
---

# Azure Active Directory User Synchronization

This section explains how to synchronize the imported Azure Active Directory users details with the Azure Active Directory.

> Before synchronizing the Azure Active Directory users, follow the given steps:
1. Configure [Azure Active Directory Settings](./../../../../manage-app-settings/azure-active-directory/).
2. Import users from the Azure Active Directory to the Bold Reports by referring the following link [Active Directory User Import](./../../import-users/import-azure-active-directory-users/).

You can navigate to the user synchronization page from users page as shown in the below figure.

![Azure Active Directory Synchronization Link](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-azure-active-directory-users/azure-user-synchronisation-navigation-button.png)

## Synchronize Users

Bold Reports will list the Azure Active Directory users that are already imported as shown in the below figure.

![Azure Active Directory Imported user list](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-azure-active-directory-users/imported-azure-user-list.png)

> Only users imported from the Azure AD configured in this organization are listed here.

Choose the users you want to synchronize and click on `Synchronize` at the top.

![Synchronize button](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-azure-active-directory-users/Azure-Synchronize-button.png)

### Synchronization procedure

* Bold Reports will synchronize the user details - username, first name, last name, email address, contact number with the Azure Active Directory Server.

* Bold Reports will delete the user if the user has deleted from the Azure Active Directory Server.

After synchronization completes, the number of users modified, deleted, duplicated will be shown in the success message box as shown in the below figure.

![Synchronization confirmation window](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-azure-active-directory-users/Azure-Synchronization-Confirmation-window.png)

## Duplicate Users

Azure Active Directory users who has the same email address as that of the Bold Reports users(who are already present) will be marked as duplicate users and will not be allowed to synchronize into Active Directory.

![Display Duplicated users](/static/assets/on-premise/images/manage-users-and-groups/users/synchronize-azure-active-directory-users/display-azure-duplicate-message.png)