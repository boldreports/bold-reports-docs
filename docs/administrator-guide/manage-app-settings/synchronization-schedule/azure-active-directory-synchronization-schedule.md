---
layout: post
title: AzureAD Synchronization Schedule | Bold Reports On-Premise 
description: Scheduling the synchronization of users and groups from Azure Active Directory with the users and groups in the Bold Reports On-Premise.
platform: Report-platform
documentation: ug
---

# Azure Active Directory Synchronization Schedule

This section explains how to schedule the synchronization of users and groups from Azure Active Directory with the users and groups in the Bold Reports On-Premise.

> Before you schedule synchronization of Azure Active Directory users and groups, please follow the below steps,
> 1. Configure [Azure Active Directory Settings](./../../azure-active-directory/)
> 2. To synchronize Azure Active Directory users, you should import users from the Azure Active Directory to Bold Reports On-Premise by referring the following link [Import Azure Active Directory Users](./../../../manage-users/users/import-users/import-azure-active-directory-users/).
> 3. To synchronize Azure Active Directory groups, you should import groups from the Azure Active Directory to Bold Reports On-Premise by referring the following link [Import Azure Active Directory Groups](./../../../manage-users/groups/import-groups/import-azure-active-directory-groups/).

![Active Directory Synchronization Schedule](/static/assets/on-premise/images/settings/azure-active-directory-schedule-synchronization.png)

Users and groups from Azure Active Directory can be synchronized on schedule to get the latest details of them into the Report Server.

Please find more details on the synchronization of users and groups from Azure Active Directory with Report Server in the below links.

[Synchronize Azure Active Directory Users](./../../../manage-users/users/synchronize/synchronize-azure-active-directory-users/)

[Synchronize Azure Active Directory Groups](./../../../manage-users/groups/synchronize/synchronize-azure-active-directory-groups/)

## Email Notifications

Once a scheduled recurrence of synchronization is completed, the users in the `System Administrator` group will be notified through email about the synchronization status.

## Enable/Disable Synchronization schedule

Synchronization schedule can be enabled or disabled anytime from the top check box.
