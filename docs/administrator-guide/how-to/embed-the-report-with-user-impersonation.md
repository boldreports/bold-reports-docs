---
title: Get the embed report with user impersonation in Bold Reports
description: This documentation explains how to get the embed the report with user impersonation for another application.
keywords: report-platform
---

# How to embed the report with user impersonation

This section explains how to retrieve the report of a particular user with user impersonation through the admin authentication token of the BoldReports server.

Please find below flowchart for how to embed report with user impersonation.

![User-impersonation-image](/static/assets/on-premise/images/how-to/user-impersonation-image.png)

Please follow the below steps to embed report with user impersonation in your existing application

1. To get the embed report with user impersonation, you need to integrate Bold Reports Viewer with your application by referring to  [this](../../../developer-guide/embed-in-application/view-report-through-report-viewer/) documentation.
2. Once the viewer has been integrated, get the authentication token for the admin user of the Bold Report Server. You can embed reports with user impersonation by using the admin authentication token and user details as parameters. Please refer [Report Parameter](https://help.boldreports.com/embedded-reporting/javascript-reporting/report-viewer/report-parameters/#set-parameter-at-client) documentation for the same.
3. The Bold reports server handled the request and returned the report for respective user.

   **For example,** If you want to get the report of a user whose employee ID is 1234, then you need to get the token of the admin user and then pass the employee ID of the user as a parameter in the API request. The bold reports server will handle the request and return the respective user's report.

   **Please find the below image for your reference**
![User-impersonation](/static/assets/on-premise/images/how-to/user-impersonation.png)
