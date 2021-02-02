---
layout: post
title: Update report in the Report Server | Syncfusion
description: Explains about how to update report using API or through update option from context menu in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Update report in the Report Server

This section explains about how to update report using API or through update option from context menu in the Bold Reports On-Premise.

## Steps to update a Report

Reports can be updated to move the Report to a different category. Name, description and the Report file(`.rdl`) can be changed for the Report in the update Report dialog box.

1. Click on the `Update` option in the context menu of the Report to be updated to open the update Report dialog box.
    ![Update option in context menu](/static/assets/on-premise/images/manage-content/manage-reports/update-context-report.png)

2. Click on the `Update` button in the `Update Report` dialog box after making changes to the Category, Name, Description or to the Report file(`.rdl`). Comments can also be added if there is a change in the Report file(`.rdl`) to maintain as `Version Comments`.
    ![Update Report](/static/assets/on-premise/images/manage-content/manage-reports/update-report.png)

    > If the report uses shared data sources, then the data sources also should to be selected.

## REST API Reference

The following table illustrates the list of available APIs related to update reports in Bold Reports On-Premise.

<table>
  <tr>
    <th>
      Action
    </th>
    <th>
      HTTP Method
    </th>
    <th>
      Endpoint
    </th>
    <th>
      Description
    </th>
    </tr>
    <tr>
      <td>
        <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_UpdateReport">UpdateReport</a>
      </td>
      <td>
        PUT
      </td>
      <td>
        /api/site/{tenant-name}/v1.0/reports
      </td>
      <td>
        Update report to the server. Report details must be passed as input.
    </td>
  </tr>
</table>
