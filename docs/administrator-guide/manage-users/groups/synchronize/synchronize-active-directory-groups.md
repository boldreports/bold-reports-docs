---
layout: post
title: Synchronize AD groups in BoldReportsOn-Premise.
description: Learn how to synchronize the Active Directory groups with the updated group properties in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Synchronize Active Directory Group

This section explains the process of synchronizing the imported Active Directory groups and their users with the Active Directory.

> Before synchronizing the Active Directory groups, follow these steps:
> * Configure the [Active Directory Settings](./../../../../manage-app-settings/active-directory/).
> * [Import Active Directory Groups](./../../import-groups/import-active-directory-groups/) into Bold Reports On-Premise.

You can navigate to the group synchronization page from the groups page.
![Active Directory synchronization button selection](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-active-directory-groups/active-directory-synchronization.png)

## Synchronize groups

Bold Reports Server will display a list of Active Directory groups that have already been imported.
![Active Directory imported group list](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-active-directory-groups/active-direcory-group-list.png)

Select the groups you wish to synchronize, and click on `Synchronize` located at the top right corner.
![Active Directory group synchronize button](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-active-directory-groups/synchronize-button.png)

### Synchronization procedure

* The group details, such as name and description, are synchronized with the Active Directory Server.
* The Bold Report Server will delete the group if it has been deleted from the Active Directory Server.
* The Bold Reports Server will remove a user from the server group if the user has been deleted from the Active Directory Server group. Additionally, if a new user is added to the Active Directory group, the Bold Reports Server will add the user to the server group. If the new user is not already present in the Bold Reports Server, a new user account will be created and added to the group.

* After synchronization completes, the success message box will display the number of groups modified, deleted, and duplicated.
![Synchronization confirmation window](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-active-directory-groups/group-synchronization-success.png)

## Duplicate groups

Active Directory groups with the same group name as those of the Bold Reports Server groups (which are already present) will be identified as duplicate groups and will not be allowed to synchronize with Active Directory.

![Displays duplicated groups in synchronization](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-active-directory-groups/highlight-duplicate-group.png)