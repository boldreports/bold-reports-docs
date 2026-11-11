---
layout: post
title: Embed Web Report Designer with Report Server | Bold Reports
description: Learn how to integrate the Bold Reports Web Report Designer into your application using built-in APIs, tokens, service URLs, and server settings.
control: report-platform
documentation: ug
---

# Integrate the Bold Reports<sup>®</sup> Web Report Designer

Bold Reports<sup>®</sup> Report Server provides a built-in RESTful API to integrate the Web Report Designer into other applications. To do this, set the `serviceAuthorizationToken`, `reportServerUrl`, and `serviceUrl` properties for the Web Report Designer.

## Which Web Report Designer properties do I set?

The Bold Reports<sup>®</sup> Web Report Designer needs three properties to connect to Report Server. The following table lists each property and its value.

<table>
<tr>
<th>
Report Designer Property
</th>
<th>
Value
</th>
</tr>
<tr>
<td>
serviceAuthorizationToken
</td>
<td>
Pass the user's access token. You can obtain this access token using the Bold Reports<sup>®</sup> Server <a href="../../../rest-api-reference/v1.0/server-api-reference/#operation/Authentication" target="_blank">Authentication API</a>

</td>
</tr>
<tr>
<td>
reportServerUrl
</td>
<td>
URL of the Bold Reports<sup>®</sup> On-Premises Edition server.

`https://cloud.boldreports.com/reporting/api/site/site1`
</td>
</tr>
<tr>
<td>
serviceUrl
</td>
<td>
Built-in service URL of the Bold Reports<sup>®</sup> On-Premises Edition.

`https://cloud.boldreports.com/reporting/reportservice/api/Designer`
</td>
</tr>
</table>

## Where can I find platform-specific integration steps?

Bold Reports<sup>®</sup> Embedded Reporting Tools document server integration for each platform. Use the following guides:

  [Angular](https://help.boldreports.com/embedded-reporting/angular-reporting/report-designer/server-integration/)

  [ASP.NET Core](https://help.boldreports.com/embedded-reporting/aspnet-core-reporting/report-designer/server-integration/)

  [ASP.NET MVC](https://help.boldreports.com/embedded-reporting/aspnet-mvc-reporting/report-designer/server-integration/)

  [ASP.NET Web Forms](https://help.boldreports.com/embedded-reporting/aspnet-web-forms-reporting/report-designer/server-integration/)

  [Javascript](https://help.boldreports.com/embedded-reporting/javascript-reporting/report-designer/server-integration/)

## See also

* [View Report Server reports in the Report Viewer](./../view-report-through-report-viewer/)
* [Generate an authentication token for Report Server](./../../how-to/generate-authentication-token-for-bold-reports-server/)
