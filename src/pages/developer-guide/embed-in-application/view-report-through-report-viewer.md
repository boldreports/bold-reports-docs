---
layout: post
title: Bold Report Server reports | Bold Reports | Syncfusion
description: Explains about rendering Bold Reports Server deployed RDL reports using the Bold Reporting Tools Report Viewer with the help of embedded Report Service.
control: report-platform
documentation: ug
---

# Report Server report using the Bold Reporting Tools Report Viewer

Bold Report Server provides build-in Restful API to embed Report Server reports using the Bold Reporting Tools Report Viewer. For this, set the `serviceAuthorizationToken`,`reportServiceUrl` and `reportPath` property for Report Viewer.

   `serviceAuthorizationToken` - Pass the access token of the user. Get access token using the Bold Reports Server  <a href="../../../rest-api-reference/v1.0/#operation/Authentication" target="_blank">Authentication API</a>.

   `reportServiceUrl` -  Bold Reports On-Premise built-in service URL.

   `reportPath` -  Path of report, which is added on server.**{/category name}/{report name}**

   > You can also load the report using the Guid instead of report location. Set the Guid of the report in `reportPath` as like as `reportPath: ‘91f24bf1-e537-4488-b19f-b37f77481d00’`. You can use Bold Report Server  <a href="../../../rest-api-reference/v1.0/#operation/Items_GetItems" target="_blank">Get Items API</a> and find the Guid of the report.

You can get more details of embedding with Bold Reporting Tools respective platforms as follows.

  [Angular](https://help.boldreports.com/angular/report-viewer/reportserver-report/)

  [ASP.NET Core](https://help.boldreports.com/aspnet-core/report-viewer/reportserver-report/)

  [ASP.NET MVC](https://help.boldreports.com/aspnet-mvc/report-viewer/reportserver-report/)

  [ASP.NET Web Forms](https://help.boldreports.com/aspnet-web-forms/report-viewer/reportserver-report/)

  [Javascript](https://help.boldreports.com/javascript/report-viewer/reportserver-report/)

  [React](https://help.boldreports.com/embedded-reporting/react-reporting/report-viewer/reportserver-report/)

  [UWP](https://help.boldreports.com/uwp/report-viewer/reportserver-report/)

  [WPF](https://help.boldreports.com/wpf/report-viewer/reportserver-report/)