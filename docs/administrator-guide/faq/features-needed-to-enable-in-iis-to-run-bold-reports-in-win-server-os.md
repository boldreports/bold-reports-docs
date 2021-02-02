---
layout: post
title: Features to be enabled in IIS to run Bold Reports
description: Learn what are the features need to be enabled in IIS to run Bold Reports Application in Windows Server OS.
platform: report-platform
documentation: ug
---

# What are the features need to be enabled in IIS to run Bold Reports Application in Windows Server OS

Bold Reports On-Premise Edition can be hosted in an IIS express and IIS. To run the Bold Reports in IIS, enable the IIS along with IIS features and roles.

## Steps to enable the IIS and features that are needed to run the Bold Reports Server in Windows Server OS

1. Open `Server Manager` and click `Manage > Add Roles and Features`. Click Next.

2. Select `Role-based or feature-based installation` and click `Next`.

3. Choose `Select a server from the server pool` and select the server in the Server Pool section, and then click `Next`.

4. On `Server Roles`, enable the `Web Server (IIS)` in the Roles section.  

5. On `Features`, enable the following .NET Framework features and click `Next`.

   > You should use Microsoft .NET Framework 4.5 or higher version. Learn more [here](./../../getting-started/#prerequisites).

   ![Roles and Features](/static/assets/on-premise/images/faq/roles-features.png)

6. On the `Web Server Role (IIS)` dialog box, click Next.

7. On the `Select role services` dialog box and verify that the required web server component listed [here](./../features-needed-to-enable-in-iis-to-run-bold-reports-in-win-server-os/#required-web-server-components) are enabled. Click `Next`.

   ![Roles Services](/static/assets/on-premise/images/faq/role-services.png)

8. Verify that your settings are correct and click `Install`.

9. When the installation completes, click `Close` to exit the wizard.  

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
        <td rowspan="5">Web Server</td>
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
            <br>- .NET Extensibility 4.6
            <br>- Application Initialization
            <br>- ASP.NET 4.6
            <br>- ISAPI Extensions  
            <br>- ISAPI Filters</td>
    </tr>
    <tr>
        <td>Management Tools</td>
        <td>IIS Management Console</td>
    </tr>
  </tbody>
</table>