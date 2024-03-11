---
layout: post
title: Synchronize Azure AD groups in BoldReportsOn-Premise
description: Learn how to synchronize the Azure Active Directory groups with the updated group properties in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Azure Active Directory Group Synchronization

This section explains the process of synchronizing the imported Azure Active Directory group and its users with the Azure Active Directory.

> *Note:* Before synchronizing the Azure Active Directory groups, follow these steps:
> 1. Configure the [Azure Active Directory Settings](./../../../../manage-app-settings/azure-active-directory/)
> 2. Import groups from Azure Active Directory to Bold Reports On-Premise by referring to the following link [Active Directory Group Import](./../../import-groups/import-azure-active-directory-groups/).

You can navigate to the group synchronization page from the groups page, as shown in the image below.

![Azure Active Directory Synchronization Link](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/Azure-Group-Synchronization-navigation.png)

## Synchronize Groups

Bold Reports On-Premise will display the Azure Active Directory groups that have already been imported, as shown in the image below.

![Azure Active Directory Imported group list](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/Azure-Active-Direcory-Group-list.png)

Select the groups you wish to synchronize, then click on the `Synchronize` button located at the top right corner.

![Azure Active Directory Group Synchronize button](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/Azure-Group-Synchronize-button.png)

### Synchronization procedure

* Bold Reports On-Premise will update the group's name and description from the Azure Active Directory Server.

* Bold Reports On-Premise will delete the groups if they have been deleted from the Azure Active Directory Server.

* Bold Reports will add or delete users from the Bold Reports group if they have been added or deleted from the Azure Active Directory Server group, respectively. If a new user is not present in Bold Reports, a new user account will be created and added to the group.

After synchronization completes, the success message box will display the number of groups modified, deleted, and duplicated, as shown in the image below.

![Synchronization confirmation window](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/Synchronize-azure-group-success-window.png)

## Duplicate Groups

Azure Active Directory groups with the same group name as those already present in Bold Reports On-Premise will be identified as duplicate groups and will not be allowed to synchronize with Azure Active Directory.

![Display Duplicated groups](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/highlight-duplicate-azure-group.png)