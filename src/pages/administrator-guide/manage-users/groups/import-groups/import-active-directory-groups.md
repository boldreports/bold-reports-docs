---
layout: post
title: Import Active Directory Groups | Report Server | Syncfusion
description: Describes the step-by-step procedure to import groups from the Active Directory into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Import Active Directory Groups

The users belonging to the System Administrator group can import Active Directory groups to the Report Server.

> Active Directory connection must be configured in the [Active Directory Settings](./../../../../manage-app-settings/active-directory/) for importing groups.

This section explains how to search and import groups from the Active Directory into the Bold Reports On-Premise.

## Search groups

Initially, any Active Directory group cannot be displayed until searching for the group.

1. Search the Active Directory groups with any one of the following properties:
    * Group name
    * Group description
The Report Server lists the search results in grid as shown in the following image.
    ![Search Active Directory groups](/static/assets/on-premise/images/manage-users-and-groups/groups/import-from-active-directory/searched-groups.png)
    > The search result will be based on "starts with" query.

2. Choose the groups to import into the Report Server.
    > A maximum of 1000 groups will be searched and pulled from Active Directory in a single request.

## Import groups

To import the Active Directory groups into the Report Server, choose the groups from the list and click **Import Groups** at the top-right corner. After importing the Active Directory groups, a confirmation message will be displayed as shown in the following image.
![Success message after imported the Active Directory groups](/static/assets/on-premise/images/manage-users-and-groups/groups/import-from-active-directory/group-import-success.png)

## Duplicate groups

Groups that has the same name as that of the Report Server groups (that are already present) will be marked as duplicate groups. It will not be allowed to import into the Report Server.
![Duplicated Active Directory groups](/static/assets/on-premise/images/manage-users-and-groups/groups/import-from-active-directory/duplicated-groups.png)