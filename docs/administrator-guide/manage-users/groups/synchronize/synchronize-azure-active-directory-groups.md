---
layout: post
title: Synchronize Microsoft Entra ID Groups | Bold Reports
description: Synchronize imported Microsoft Entra ID (formerly Azure AD) groups and their users in Bold Reports On-Premises Edition to keep names and members up to date.
platform: report-platform
documentation: ug
---

# Synchronize Microsoft Entra ID groups in Bold Reports<sup>®</sup>

Bold Reports<sup>®</sup> On-Premises Edition synchronizes imported Microsoft Entra ID (formerly Azure Active Directory) groups and their users with Microsoft Entra ID.

## What do I need before synchronizing groups?

Bold Reports<sup>®</sup> On-Premises Edition needs a configured Microsoft Entra ID connection and imported groups before you synchronize.

> *Note:* Before synchronizing the Microsoft Entra ID groups, follow these steps:
> 1. Configure the [Microsoft Entra ID settings](./../../../../manage-app-settings/azure-active-directory/).
> 2. Import groups from Microsoft Entra ID to Bold Reports<sup>®</sup> On-Premises Edition. For steps, see [Microsoft Entra ID group import](./../../import-groups/import-azure-active-directory-groups/).

You can navigate to the group synchronization page from the groups page, as shown in the image below.

![Azure Active Directory Synchronization Link](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/Azure-Group-Synchronization-navigation.png)

## Synchronize Groups

Bold Reports<sup>®</sup> On-Premises Edition displays the Microsoft Entra ID groups that have already been imported, as shown in the image below.

![Azure Active Directory Imported group list](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/Azure-Active-Direcory-Group-list.png)

To synchronize groups, follow these steps:

1. Select the groups you want to synchronize.
2. Click the `Synchronize` button at the top right corner.

![Azure Active Directory Group Synchronize button](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/Azure-Group-Synchronize-button.png)

### Synchronization procedure

Bold Reports<sup>®</sup> On-Premises Edition applies the following changes from Microsoft Entra ID during synchronization:

* Bold Reports<sup>®</sup> On-Premises Edition updates the group's name and description from Microsoft Entra ID.

* Bold Reports<sup>®</sup> On-Premises Edition deletes groups that have been deleted from Microsoft Entra ID.

* Bold Reports<sup>®</sup> adds or deletes users in the Bold Reports<sup>®</sup> group when they are added to or deleted from the Microsoft Entra ID group. If a new user is not present in Bold Reports<sup>®</sup>, a new user account is created and added to the group.

After synchronization completes, the success message box displays the number of groups modified, deleted, and duplicated, as shown in the image below.

![Synchronization confirmation window](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/Synchronize-azure-group-success-window.png)

## What happens to duplicate groups?

Microsoft Entra ID groups with the same group name as groups already in Bold Reports<sup>®</sup> On-Premises Edition are marked as duplicates. They cannot be synchronized with Microsoft Entra ID.

![Display Duplicated groups](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-azure-active-directory-groups/highlight-duplicate-azure-group.png)

## Frequently asked questions

### What does synchronization update for a Microsoft Entra ID group?

Bold Reports<sup>®</sup> On-Premises Edition updates the group's name and description and adds or deletes group members to match Microsoft Entra ID.

### What happens to a group deleted from Microsoft Entra ID?

Bold Reports<sup>®</sup> On-Premises Edition deletes groups that have been deleted from Microsoft Entra ID.

## See also

* [Import Microsoft Entra ID groups](./../../import-groups/import-azure-active-directory-groups/)
* [Synchronize Microsoft Entra ID users](./../../../users/synchronize/synchronize-azure-active-directory-users/)
* [Microsoft Entra ID synchronization schedule](./../../../../manage-app-settings/synchronization-schedule/azure-active-directory-synchronization-schedule/)
