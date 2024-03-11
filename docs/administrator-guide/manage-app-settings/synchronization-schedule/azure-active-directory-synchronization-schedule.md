---
layout: post
title: AzureAD Synchronization Schedule | Bold Reports On-Premise 
description: Scheduling the synchronization of users and groups from Azure Active Directory with the users and groups in the Bold Reports On-Premise.
platform: Report-platform
documentation: ug
---

# Azure Active Directory Synchronization Schedule

This section explains how to schedule the synchronization of users and groups from Azure Active Directory with the users and groups in Bold Reports On-Premise.

> **Note:** Before you set up the synchronization schedule for Azure Active Directory users and groups, follow the given steps:
> 1. Configure [Azure Active Directory Settings](./../../azure-active-directory/)
> 2. To synchronize Azure Active Directory users, import users from Azure Active Directory to Bold Reports On-Premise by referring to the following link: [Import Azure Active Directory Users](./../../../manage-users/users/import-users/import-azure-active-directory-users/).
> 3. To synchronize Azure Active Directory groups, import groups from Azure Active Directory to Bold Reports On-Premise by referring to the following link: [Import Azure Active Directory Groups](./../../../manage-users/groups/import-groups/import-azure-active-directory-groups/).

![Click Azure Active Directory Synchronization Schedule](/static/assets/on-premise/images/settings/click-azuread-schedule-synchronization.png)

![Active Directory Synchronization Schedule](/static/assets/on-premise/images/settings/azure-active-directory-schedule-synchronization.png)

* Users and groups from Azure Active Directory can be synchronized according to a schedule, ensuring that their latest details are updated in Bold Reports.

* Please find more details on synchronizing users and groups from Azure Active Directory with the Report Server in the links provided below:
    * [Synchronize Azure Active Directory Users](./../../../manage-users/users/synchronize/synchronize-azure-active-directory-users/)
    * [Synchronize Azure Active Directory Groups](./../../../manage-users/groups/synchronize/synchronize-azure-active-directory-groups/)

## Email Notifications

After a scheduled synchronization recurrence is completed, users in the **System Administrator** group will receive email notifications regarding the synchronization status.

## Enable/Disable Synchronization schedule

The synchronization schedule can be enabled or disabled at any time using the checkbox at the top.
