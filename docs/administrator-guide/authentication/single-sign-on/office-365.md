---
layout: post
title: Office 365 authentication in Bold Reports | Bold Reports
description: Office 365 authentication settings to let your users use their Office 365 credentials to login into the Bold Reports On-Premise Edition.
platform: Report-platform
documentation: ug
---

# Office 365 for authentication

Bold Reports On-Premise supports importing Azure Active Directory users, enabling them to utilize Single Sign-On (federated identity) within the Bold Reports On-Premise using their credentials. Reports can be shared or emailed with Office 365 users and groups. Office 365 utilizes Azure Active Directory, a cloud-based user authentication service, for managing users. As a result, the Report Server seamlessly enables the importation of Office 365 users and groups, allowing them to sign in effortlessly.

The Bold Reports Server supports the following functionalities from Azure Active Directory:

* [Set up Azure Active Directory](./../../../manage-app-settings/azure-active-directory/) settings with Bold Reports On-Premise.

* [Import users](./../../../manage-users/users/import-users/import-azure-active-directory-users/) from Azure Active Directory.

* [Import groups](./../../../manage-users/groups/import-groups/import-azure-active-directory-groups/) from Active Directory.

* [Synchronize user details](./../../../manage-users/users/synchronize/synchronize-azure-active-directory-users/) with Azure Active Directory.

* [Synchronize group details and its users](./../../../manage-users/groups/synchronize/synchronize-azure-active-directory-groups/) with Azure Active Directory.

* [Schedule the synchronization of users and groups](./../../../manage-app-settings/synchronization-schedule/azure-active-directory-synchronization-schedule/) between Bold Reports On-Premise and Azure Active Directory.