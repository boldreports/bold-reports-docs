---
layout: post
title: Enable IIS Features on Windows Client OS | Bold Reports
description: Enable IIS, the required web server components, and .NET Framework features on Windows Client OS to host Bold Reports On-Premises Edition Report Server in IIS.
platform: report-platform
documentation: ug
---

# What features need to be enabled in IIS to run the Bold Reports<sup>®</sup> Application on Windows Client OS?

The Bold Reports<sup>®</sup> On-Premises Edition can be hosted on both IIS Express and IIS. To run Bold Reports<sup>®</sup> on IIS, make sure that IIS is enabled and configured with the necessary features and roles.

## How do I enable IIS for Bold Reports<sup>®</sup> Report Server on Windows Client OS?

You enable IIS and its features for the Bold Reports<sup>®</sup> Report Server from **Turn Windows features on or off** in the Control Panel. Follow these steps:

1. Open `Control Panel` and click `Programs and Features > Turn Windows features on or off`.  

2. Enable `Internet Information Services`.

   ![Control Panel](/static/assets/on-premise/images/faq/windows-features.png)  

3. Expand the `.NET Framework 4.8 Advanced Services` and enable the ASP.NET 4.8 feature.

   > **Note:** You should use Microsoft .NET Framework 4.5 or higher version. Learn more in the [Windows prerequisites](./../../../deployment/getting-started/#prerequisites-for-windows).  

   ![Roles and Features](/static/assets/on-premise/images/faq/ms-framework.png)

4. Expand the `Internet Information Services` feature and make sure that all the [required web server components](./../features-needed-to-enable-in-iis-to-run-bold-reports-in-win-client-os/#required-web-server-components) are selected. Then, click `OK`.

   ![IIS Features Components](/static/assets/on-premise/images/faq/iis-features-client.png)
   ![Enable IIS Components](/static/assets/on-premise/images/faq/enable-iis-components.png)

## Required web server components

The following IIS components satisfy the minimum requirements to run Bold Reports<sup>®</sup>. If other IIS components are enabled, you do not need to remove them.

<table>
  <thead>
    <tr>
      <th scope="col" bgcolor="#416187">Section</th>
      <th scope="col" bgcolor="#416187">IIS Components</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td rowspan="5">World Wide Web Services</td>
        <td>Common HTTP Features
            <br>- Default Document  
            <br>- Directory Browsing
            <br>- HTTP Errors
            <br>- Static Content  
        </td>
    </tr>
    <tr>
        <td>Health and Diagnostics
            <br>- HTTP Logging
        </td>
    </tr>
    <tr>
        <td>Performance Features
            <br>- Static Content Compression</td>
    </tr>
    <tr>
        <td>Security
            <br>- Request Filtering
            <br>- Windows Authentication</td>
    </tr>
    <tr>
        <td>Application Development  
            <br>- .NET Extensibility 4.8
            <br>- Application Initialization
            <br>- ASP.NET 4.8
            <br>- ISAPI Extensions  
            <br>- ISAPI Filters
            <br>- WebSocket Protocol</td>
    </tr>
    <tr>
        <td>Web Management Tools</td>
        <td>IIS Management Console</td>
    </tr>
  </tbody>
</table>

## Frequently asked questions

### Can Bold Reports<sup>®</sup> run on IIS Express?

Yes. The Bold Reports<sup>®</sup> On-Premises Edition can be hosted on both IIS Express and IIS.

### Do I need to remove other IIS components?

No. If other IIS components are enabled, you do not need to remove them to run Bold Reports<sup>®</sup>.

### See Also

* [What are the features needed to be enabled in IIS to run Bold Reports<sup>®</sup> Application on the Windows Server OS?](../../faq/features-needed-to-enable-in-iis-to-run-bold-reports-in-win-server-os/)
* [How to restart the Bold Reports<sup>®</sup> application](./../how-to-restart-the-bold-reports-enterprise-application/)
