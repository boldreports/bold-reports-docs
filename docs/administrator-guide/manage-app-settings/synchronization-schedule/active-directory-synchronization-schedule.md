---
layout: post
title: AD-Synchronization-Schedule | Report Server | Syncfusion
description: Scheduling the synchronization of users and groups from Active-Directory with the users and groups in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Active Directory Synchronization Schedule

This section explains how to schedule the synchronization of users and groups from Active Directory with the users and groups in the Bold Reports On-Premise.

> **Note:** Before configuring the Active Directory Synchronization Schedule for users and groups, follow the given steps
> 1. Configure the [Active Directory Settings](./../../active-directory/).
> 2. To synchronize Active Directory users, import them from Active Directory to Bold Reports On-Premise using the [Import Active Directory Users.](./../../../manage-users/users/import-users/import-active-directory-users/)
> 3. For synchronizing the Active Directory groups, import the groups from Active Directory to Bold Reports On-Premise using the [Import Active Directory Groups.](./../../../manage-users/groups/import-groups/import-active-directory-groups/)

![Click Active Directory Synchronization Schedule](/static/assets/on-premise/images/settings/click-windows-ad.png)
![Active Directory Synchronization Schedule](/static/assets/on-premise/images/settings/active-directory-schedule-synchronization.png)

* Users and groups from Active Directory can be synchronized on a schedule to ensure that their latest details are imported into the Report Server.

* Active Directory synchronization facilitates synchronization for the following entities:
    1. Users
    2. Groups

* During synchronization, users will be added to or removed from the Bold Reports Server depending on their presence in the specified distinguished name within Active Directory.

* Please find more details on the synchronization of users and groups from Active Directory with the Bold Report Server at the following links:
    * [Synchronize Active Directory Users](./../../../manage-users/users/synchronize/synchronize-active-directory-users/)
    * [Synchronize Active Directory Groups](./../../../manage-users/groups/synchronize/synchronize-active-directory-groups/)

## Email Notifications

After the scheduled synchronization recurrence is completed, members of the **System Administrator** group will be notified via email about the synchronization status.

## Enable/Disable Synchronization schedule

The synchronization schedule can be enabled or disabled at any time using the checkbox at the top.
