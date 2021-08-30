---
layout: post
title: AD-Synchronization-Schedule | Report Server | Syncfusion
description: Scheduling the synchronization of users and groups from Active-Directory with the users and groups in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Active Directory Synchronization Schedule

This section explains how to schedule the synchronization of users and groups from Active Directory with the users and groups in the Bold Reports On-Premise.

> Before scheduling the synchronization of Active Directory users and groups, follow the given steps:
> 1. Configure the [Active Directory Settings](./../../active-directory/), before scheduling the synchronization of Active Directory users and groups.
> 2. To synchronize the Active Directory users, you should import users from the Active Directory to the Bold Reports On-Premise by using the [Import Active Directory Users](./../../../manage-users/users/import-users/import-active-directory-users/)
> 3. To synchronize the Active Directory groups, you should import groups from the Active Directory to the Bold Reports On-Premise by using the [Import Active Directory Groups](./../../../manage-users/groups/import-groups/import-active-directory-groups/)

![Active Directory Synchronization Schedule](/static/assets/on-premise/images/settings/active-directory-schedule-synchronization.png)

Users and groups from Active Directory can be synchronized on schedule to get the latest details of them into the Report Server.

Please find more details on the synchronization of users and groups from Active Directory with Report Server in the below links.

[Synchronize Active Directory Users](./../../../manage-users/users/synchronize/synchronize-active-directory-users/)

[Synchronize Active Directory Groups](./../../../manage-users/groups/synchronize/synchronize-active-directory-groups/)

## Email Notifications

Once a scheduled recurrence of synchronization is completed, the users in the `System Administrator` group will be notified through email about the synchronization status.

## Enable/Disable Synchronization schedule

Synchronization schedule can be enabled or disabled anytime from the top check box.
