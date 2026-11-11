---
layout: post
title: Enable IIS Roles on Windows Server OS | Bold Reports
description: Enable IIS roles, web server components, and .NET Framework features on Windows Server OS with Server Manager to host Bold Reports On-Premises Edition in IIS.
platform: report-platform
documentation: ug
---

# What features need to be enabled in IIS to run the Bold Reports<sup>®</sup> Application on Windows Server OS?

The Bold Reports<sup>®</sup> On-Premises Edition can be hosted in both IIS Express and IIS. To run Bold Reports<sup>®</sup> in IIS, enable IIS along with the required IIS features and roles.

> NOTE: A pre-installed Bold Reports<sup>®</sup> Enterprise Edition and IIS configured Azure VM is available in the [Bold Reports<sup>®</sup> Enterprise listing on Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syncfusion.bold-reports-enterprise-multi-tenant).

## How do I enable IIS for Bold Reports<sup>®</sup> Report Server on Windows Server OS?

You enable IIS and its features for the Bold Reports<sup>®</sup> Server with the **Add Roles and Features** wizard in Server Manager. Follow these steps:

1. Open `Server Manager` and click `Manage > Add Roles and Features`. Click Next.

2. Select `Role-based or feature-based installation` and click `Next`.

3. Choose `Select a server from the server pool`, select the server in the Server Pool section, and then click `Next`.

4. On `Server Roles`, enable the `Web Server (IIS)` in the Roles section.  

5. On `Features`, enable the following .NET Framework features and click `Next`.

   > **Note:** You should use Microsoft .NET Framework 4.5 or higher version. Learn more in the [Windows prerequisites](./../../../deployment/getting-started/#prerequisites-for-windows).

   ![Roles and Features](/static/assets/on-premise/images/faq/roles-features.png)

6. On the `Web Server Role (IIS)` dialog box, click Next.

7. On the `Select role services` dialog box, verify that the [required web server components](./../features-needed-to-enable-in-iis-to-run-bold-reports-in-win-server-os/#required-web-server-components) are enabled. Then, click `Next`.

   ![Roles Services](/static/assets/on-premise/images/faq/role-services.png)

8. Verify that your settings are correct and click `Install`.

9. When the installation completes, click `Close` to exit the wizard.  

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

## Frequently asked questions

### Is there a pre-configured Azure VM for Bold Reports<sup>®</sup>?

Yes. A pre-installed Bold Reports<sup>®</sup> Enterprise Edition and IIS configured Azure VM is available on Azure Marketplace.

### Do I need to remove other IIS components?

No. If other IIS components are enabled, you do not need to remove them to run Bold Reports<sup>®</sup>.

## See also

* [Features needed in IIS on Windows Client OS](./../features-needed-to-enable-in-iis-to-run-bold-reports-in-win-client-os/)
* [How to restart the Bold Reports<sup>®</sup> application](./../how-to-restart-the-bold-reports-enterprise-application/)
* [How to resolve login failed for user in Windows authentication mode](./../how-to-resolve-login-failed-for-user-in-windows-authentication-mode/)
