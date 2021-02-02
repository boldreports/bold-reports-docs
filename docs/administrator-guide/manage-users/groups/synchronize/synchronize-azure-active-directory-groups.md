---
layout: post
title: Synchronize Azure AD groups in BoldReportsOn-Premise
description: Learn how to synchronize the Azure Active Directory groups with the updated group properties in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Azure Active Directory Group Synchronization

This section explains how to synchronize the imported Azure Active Directory group and its users with the Azure Active Directory.

> Before synchronizing the Azure Active Directory groups, follow the given steps:
1. Configure [Azure Active Directory Settings](./../../../../manage-app-settings/azure-active-directory/)
2. Import groups from the Azure Active Directory to the Bold Reports On-Premise by referring the following link [Active Directory Group Import](./../../import-groups/import-azure-active-directory-groups/).

You can navigate to the group synchronization page from groups page as shown in the below figure.

![Azure Active Directory Synchronization Link](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/Azure-Group-Synchronization-navigation.png)

## Synchronize Groups

Bold Reports On-Premise will list the Azure Active Directory groups that are already imported as shown in the below figure.

![Azure Active Directory Imported group list](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/Azure-Active-Direcory-Group-list.png)

Choose the groups you want to synchronize and click on `Synchronize` at the top.

![Azure Active Directory Group Synchronize button](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/Azure-Group-Synchronize-button.png)

### Synchronization procedure

* Bold Reports On-Premise will update the group's name and description from the Azure Active Directory Server.

* Bold Reports On-Premise will delete the groups if the group has been deleted from the Azure Active Directory Server.

* Bold Reports On-Premise will delete the user from Bold Reports On-Premise group, if the user has been deleted from Azure Active Directory Server group. Bold Reports On-Premise will add the user into Bold Reports On-Premise, if a new user is added into the Azure Active Directory group. If the new user is not present in the Bold Reports On-Premise, then a new user account will be created in the Bold Reports On-Premise and will be added into the group.

After synchronization completes, the number of groups modified, deleted, duplicated will be shown in the success message box as shown in the below figure.

![Synchronization confirmation window](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/Synchronize-azure-group-success-window.png)

## Duplicate Groups

Azure Active Directory groups who has the same group name as that of the Bold Reports  On-Premise groups(which are already present) will be marked as duplicate groups and will not be allowed to synchronize with Azure Active Directory.

![Display Duplicated groups](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/highlight-duplicate-azure-group.png)