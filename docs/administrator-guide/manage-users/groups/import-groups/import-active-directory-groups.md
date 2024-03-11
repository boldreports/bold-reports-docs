---
layout: post
title: Import Active Directory Groups | Report Server | Syncfusion
description: Describes the step-by-step procedure to import groups from the Active Directory into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Import Active Directory Groups

Users belonging to the System Administrator group can import Active Directory groups into the Bold Reports application.

> **Note:** The Active Directory connection must be configured in the [Active Directory Settings](./../../../../manage-app-settings/active-directory/) for importing groups.

This section explains how to search for and import groups from Active Directory into the Bold Reports On-Premise.

## Search groups

You have the option to search for Active Directory groups based on any of the following properties and then select them for import into the Bold Reports application.

* Group name
* Group description

A maximum of 1000 groups will be searched and retrieved from Active Directory in a single request.

The Bold Reports Server will search for groups within the specified distinguished name provided on the Active Directory settings page and display the search results in the grid.
    ![Search Active Directory groups](/static/assets/on-premise/images/manage-users-and-groups/groups/import-from-active-directory/searched-groups.png)

> **Note:** The search results will be based on a `starts with` query.

## Import groups

To import the Active Directory groups into the Report Server, select the groups from the list and click **Import Groups** at the top-right corner. After importing the Active Directory groups, a confirmation message will be displayed, as shown in the following image.
![Success message after imported the Active Directory groups](/static/assets/on-premise/images/manage-users-and-groups/groups/import-from-active-directory/group-import-success.png)

The success message box provides details on the users that were successfully imported into the Bold Reports application and those that were not.

## Duplicate groups

Groups that have the same name as those already present in the Report Server will be identified as duplicate groups and cannot be imported.
![Duplicated Active Directory groups](/static/assets/on-premise/images/manage-users-and-groups/groups/import-from-active-directory/duplicated-groups.png)