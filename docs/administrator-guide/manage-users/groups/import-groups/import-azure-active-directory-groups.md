---
layout: post
title: Import Azure AD Groups in BoldReportsOn-Premise
description: Describes step-by-step procedure to import groups from Azure Active Directory into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Azure Active Directory Group Import

This section explains how to search and import groups from Azure Active Directory into the Bold Reports On-Premise.

> **Note:** Azure Active Directory connection must be configured in the [Azure Active Directory Settings](./../../../../manage-app-settings/azure-active-directory/) for importing groups.

Only users belonging to the `System Administrator` group can import Azure Active Directory groups into the Bold Reports On-Premise.

## Search Groups

Initially, Active Directory groups will not be displayed until a search for the group is performed.

You can search the Azure Active Directory groups using the property `Group name` and choose them to import into Bold Reports.

A maximum of 1000 groups will be searched and retrieved from Azure Active Directory in a single request.

Bold Reports On-Premise will list the search results of the groups in the grid, as shown in the image below.

![Import groups from Azure Active Directory Server](/static/assets/on-premise/images/manage-users-and-groups/groups/import-from-azure-active-directory/Searched-azure-groups-list.png)

## Import Groups

To import Azure Active Directory groups into Bold Reports On-Premise, you need to select the groups from the list and click the `Import groups` button located at the top right corner.

![Import groups from Azure Active Directory](/static/assets/on-premise/images/manage-users-and-groups/groups/import-from-azure-active-directory/import-groups-from-azure.png)

Bold Reports On-Premise will import the selected groups, and a confirmation message will be displayed, as shown in the image below.

![Success message after imported the Azure Active Directory groups](/static/assets/on-premise/images/manage-users-and-groups/groups/import-from-azure-active-directory/Azure-Active-Directory-group-import-success-window.png)

The success message box provides information on which users have been successfully imported and which ones were not imported into Bold Reports On-Premise.

## Duplicate Groups

Azure Active Directory groups with the same group name as those already present in Bold Reports On-Premise will be identified as duplicate groups and will not be permitted for import.

![Duplicated Azure Active Directory Groups](/static/assets/on-premise/images/manage-users-and-groups/groups/import-from-azure-active-directory/Azure-Active-Directory-Duplicate-group.png)