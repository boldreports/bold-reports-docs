---
layout: post
title: View Report Server Reports in Report Viewer | Bold Reports
description: Render Bold Reports Report Server RDL reports in your app with the Bold Reporting Tools Report Viewer by setting the token, server URL, service URL, and path.
control: report-platform
documentation: ug
---

# Report Server report using the Bold Reporting Tools Report Viewer

Bold Reports<sup>®</sup> Server provides a built-in RESTful API to embed Report Server reports using the Bold Reporting Tools Report Viewer. To do this, set the `serviceAuthorizationToken`, `serverurl`, `reportServiceUrl`, and `reportPath` properties for the Report Viewer.

## Which Report Viewer properties do I set?

The Bold Reports<sup>®</sup> Report Viewer needs four properties to render a Report Server report. The following table lists each property and its value.

<table>
<tr>
<th>
Report Viewer Property
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
Pass the user's access token. You can obtain this access token using the Bold Reports<sup>®</sup> Server <a href="../../../rest-api-reference/v1.0/server-api-reference/#operation/Authentication" target="_blank">Authentication API</a>.

bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1
YmhhLnN1a3VtYXJhbkBzeW5jZnVzaW9uLmNvbSIsIm5hbWVpZCI6IjEiLCJ1
bmlxdWVfbmFtZSI6ImM0NWFiZmE0LTBlNjAtNGI4Yy04NWM4LWMxNTBiOGJh
MjlkNyIsIklQIjoiOjoxIiwiaXNzdWVkX2RhdGUiOiIxNjMxNzEyOTYzIiwi
bmJmIjoxNjMxNzEyOTYzLCJleHAiOjE2MzIzMTc3NjMsImlhdCI6MTYzMTcx
Mjk2MywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MTc3OC9yZXBvcnRpbmcv
c2l0ZS9zaXRlOTEiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUxNzc4L3Jl
cG9ydGluZy9zaXRlL3NpdGU5MSJ9.d24190nn6i2UNz_8hX1mI0JZTNO9zPX
1HYSlGClkUyw
</td>
</tr>
<tr>
<td>
serverurl
</td>
<td>
URL of the Bold Reports<sup>®</sup> On-Premises Edition server.

`https://example.com/reporting/api/site/site1`
</td>
</tr>
<tr>
<td>
reportServiceUrl
</td>
<td>
Built-in service URL of the Bold Reports<sup>®</sup> On-Premises Edition.

`https://example.com/reporting/reportservice/api/Viewer`
</td>
</tr>
<tr>
<td>
reportPath
</td>
<td>
Path of the report that has been added to the server.

{/category name}/{report name}
</td>
</tr>
</table>

## Can I load a report by its Guid?

Yes. The Bold Reports<sup>®</sup> Report Viewer can load a report by its Guid instead of its location.

   > You can also load the report using the Guid instead of report location. Set the Guid of the report in `reportPath` as follows: `reportPath: ‘91f24bf1-e537-4488-b19f-b37f77481d00’`. You can use the Bold Reports<sup>®</sup> Server's <a href="../../../rest-api-reference/v1.0/server-api-reference/#operation/Items_GetItems" target="_blank">Get Items API</a> to find the Guid of the report.

## Where can I find platform-specific steps?

Bold Reports<sup>®</sup> Embedded Reporting Tools document Report Server report viewing for each platform. Use the following guides:

  [Angular](https://help.boldreports.com/embedded-reporting/angular-reporting/report-viewer/reportserver-report/)

  [ASP.NET Core](https://help.boldreports.com/embedded-reporting/aspnet-core-reporting/report-viewer/reportserver-report/)

  [ASP.NET MVC](https://help.boldreports.com/embedded-reporting/aspnet-mvc-reporting/report-viewer/reportserver-report/)

  [ASP.NET Web Forms](https://help.boldreports.com/embedded-reporting/aspnet-web-forms-reporting/report-viewer/reportserver-report/)

  [Javascript](https://help.boldreports.com/embedded-reporting/javascript-reporting/report-viewer/reportserver-report/)

  [React](https://help.boldreports.com/embedded-reporting/react-reporting/report-viewer/reportserver-report/)

  [UWP](https://help.boldreports.com/embedded-reporting/uwp-reporting/report-viewer/reportserver-report/)

  [WPF](https://help.boldreports.com/embedded-reporting/wpf-reporting/report-viewer/reportserver-report/)

## See also

* [Integrate the Web Report Designer](./../integrating-report-designer/)
* [Get the embed code of a report](./../iframe/embed-code-of-report/)
