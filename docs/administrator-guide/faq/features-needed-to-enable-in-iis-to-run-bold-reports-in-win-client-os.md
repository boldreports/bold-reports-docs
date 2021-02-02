---
layout: post
title: Features needed to be enabled in IIS to run Bold Reports
description: Learn what are the features needed to be enabled in IIS to run the Bold Reports Application in Windows Client OS.
platform: report-platform
documentation: ug
---

# What are the features need to be enabled in IIS to run the Bold Reports Application in Windows Client OS

Bold Reports On-Premise Edition can be hosted in an IIS express and IIS. To run the Bold Reports in IIS, enable the IIS along with IIS features and roles.

## Steps to enable the IIS and features that are needed to run the Bold Report Server in Windows Client OS

1. Open `Control Panel` and click `Programs and Features > Turn Windows features on or off`.  

2. Enable `Internet Information Services`.

   ![Control Panel](/static/assets/on-premise/images/faq/windows-features.png)  

3. Expand the `.NET Framework 4.5 Advanced Services` and enable the ASP.NET 4.5 feature.

   > You should use Microsoft .NET Framework 4.5 or higher version. Learn more [here](./../../getting-started/#prerequisites).  

   ![Roles and Features](/static/assets/on-premise/images/faq/ms-framework.png)

4. Expand the `Internet Information Services` feature and verify that the required IIS component listed [here](./../features-needed-to-enable-in-iis-to-run-bold-reports-in-win-client-os/#required-web-server-components) are selected. Click `OK`.

   ![Roles and Features](/static/assets/on-premise/images/faq/iis-features-client.png)

## Required web server components

The following listed IIS components satisfy the minimum requirements to run the Bold Reports. If other IIS components are enabled, they do not need to be removed.

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
            <br>- ISAPI Filters</td>
    </tr>
    <tr>
        <td>Web Management Tools</td>
        <td>IIS Management Console</td>
    </tr>
  </tbody>
</table>