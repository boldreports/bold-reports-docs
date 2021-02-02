---
layout: post
title: Import Azure AD Groups in BoldReportsOn-Premise
description: Describes step-by-step procedure to import groups from Azure Active Directory into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Azure Active Directory Group Import

This section explain on how to search and import groups from Azure Active Directory into the Bold Reports On-Premise.

> Azure Active Directory connection has to be configured in the [Azure Active Directory Settings](./../../../../manage-app-settings/azure-active-directory/) in the `General` page for importing groups.

Users belonging to the `System Administrator` group only can import Azure Active Directory groups into the Bold Reports On-Premise.

## Search Groups

Initially, any Active Directory groups cannot be displayed until searching for the group.

You can search the Azure Active Directory groups with any one of the below properties and choose them to import into Bold Reports On-Premise.

* Group name

A maximum of 1000 groups will be searched and pulled from Azure Active Directory in a single request.

Bold Reports On-Premise will list the search results of the groups in the grid as shown in the below figure.

![Import groups from Azure Active Directory Server](/static/assets/on-premise/images/manage-users-and-groups/groups/import-from-azure-active-directory/Searched-azure-groups-list.png)

## Import Groups

To import the Azure Active Directory groups into the Bold Reports On-Premise, you have to choose the groups from the list and click on the `Import groups` button at the top right corner.

Bold Reports On-Premise will import the chosen groups and a confirmation message will be displayed as shown in the below figure.

![Success message after imported the Azure Active Directory groups](/static/assets/on-premise/images/manage-users-and-groups/groups/import-from-azure-active-directory/Azure-Active-Directory-group-import-success-window.png)

The success message box explains the users who all are get imported/not imported into the Bold Reports On-Premise.

## Duplicate Groups

Azure Active Directory groups who has the same group name as that of the Bold Reports On-Premise groups(which are already present) will be marked as duplicate groups and will not be allowed to import into Bold Reports On-Premise.

![Duplicated Azure Active Directory Groups](/static/assets/on-premise/images/manage-users-and-groups/groups/import-from-azure-active-directory/Azure-Active-Directory-Duplicate-group.png)