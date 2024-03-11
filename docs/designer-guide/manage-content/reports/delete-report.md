---
layout: post
title: Delete report in the Report Server | Syncfusion
description: Explains about how to delete the report individually or delete multiple reports from the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Delete report from Report Server

This section explains how to delete reports individually or delete multiple reports from the Bold Reports On-Premise. Reports can also be deleted from the Report Server when they are no longer required.

Click the `Actions` button in the Reports grid context menu and click `Delete` to delete the Report.
![Delete Report](/static/assets/on-premise/images/manage-content/manage-reports/delete-report.png)

> Reports cannot be deleted when they are scheduled by an user.

## Delete All Sample Reports

All Sample Reports can be deleted in a simpler way by deleting the Sample Category `Sample Reports`, `Sample Reports (Web Designer)`.

Click the `Actions` icon in the context menu and click `Delete` to delete all sample reports as well as the sample category.
![Delete All Sample Reports](/static/assets/on-premise/images/manage-content/manage-reports/delete-all-sample-reports.png)

> If the sample category has any modified sample report, or scheduled report, or newly added report, those reports will be skipped and the category will not be deleted.

## REST API Reference

The following table illustrates the list of available APIs related to delete reports in Bold Reports On-Premise.

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
         <a href="https://help.boldreports.com/cloud-reporting/rest-api-reference/v1.0/#operation/Items_DeleteItem">DeleteReport</a>
      </td>
      <td>
         DELETE
      </td>
      <td>
          /api/site/{tenant-name}/v1.0/items/{id}
      </td>
      <td>
         Deletes the specified report from the server. Report item ID should be passed in path parameter.
      </td>
   </tr>
</table>
