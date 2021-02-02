---
layout: post
title: Synchronize AD groups in BoldReportsOn-Premise.
description: Learn how to synchronize the Active Directory groups with the updated group properties in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Synchronize Active Directory Group

This section explains how to synchronize the imported Active Directory groups and its users with the Active Directory.

> Before synchronizing the Active Directory groups, follow the given steps:
> * Configure the [Active Directory Settings](./../../../../manage-app-settings/active-directory/).
> * [Import Active Directory Groups](./../../import-groups/import-active-directory-groups/) to the Bold Reports On-Premise.

Navigate to the user synchronization page from users page by clicking the `Active Directory Synchronization` button as shown in the following image.
![Active Directory synchronization button selection](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-active-directory-groups/active-directory-synchronization.png)

## Synchronize groups

Already imported Active Directory groups are displayed in a grid as shown in the following image.
![Active Directory imported group list](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-active-directory-groups/active-direcory-group-list.png)

Choose the groups you want to synchronize and click `Synchronize` at the top.
![Active Directory group synchronize button](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-active-directory-groups/synchronize-button.png)

### Synchronization procedure

* The group details such as name and description are synchronized with the Active Directory Server.
* Report Server will delete the group if the group has deleted from the Active Directory Server.
* Deletes the user from Report Server group, if the user has been deleted from Active Directory Server group. Adds the user into Report Server, if a new user is added into the Active Directory group. If the new user is not present in the Report Server, then a new user account will be created and added into the group.
* After synchronization completes, the number of groups modified, deleted, and duplicated will be shown in the success message box.
![Synchronization confirmation window](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-active-directory-groups/group-synchronization-success.png)

## Duplicate groups

Groups with same group name as that of the Report Server groups(which is are already present) will be marked as duplicate group. It will not be allowed to synchronize into Active Directory.
![Displays duplicated groups in synchronization](/static/assets/on-premise/images/manage-users-and-groups/groups/synchronize-active-directory-groups/highlight-duplicate-group.png)