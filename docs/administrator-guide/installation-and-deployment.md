---
layout: post
title: Installation and Deployment of BoldReports On-Premise
description: Learn how to install and deploy Bold Reports Enterprise Edition and how to host the Bold Reports Enterprise in IIS or IIS Express in your machine. 
platform: report-platform
documentation: ug
---

# Installation and Deployment

This section explains on how to install and deploy the Bold Reports Enterprise Reporting Edition.

## Installation

This topic details the steps required to install the Bold Reports Enterprise Reporting.

To learn about the system requirements needed to deploy the Bold Reports Enterprise Reporting in your business environment, see [System Requirements](./../getting-started/#prerequisites).

Run the Bold Reports Enterprise Reporting Installer and sign-in with your registered e-mail address to unlock the setup.

![installation with registered e-mail](/static/assets/on-premise/images/getting-started/installation-sign-in.png)

You can check the License Agreement of Bold Reports Enterprise Reporting Edition by clicking on the `License Terms and Conditions`.

After you read the license agreement, click on Next to choose your portal license. This step is skipped if you have only one portal license

![portal selection](/static/assets/on-premise/images/getting-started/portal-plans-selection.png)

After you selected the portal license, click on Next to select the installation server type, location and the port number to host the Bold Reports Enterprise Reporting.

We have provided the Bold Reports Enterprise Reporting Edition to be hosted into the following two web server types

1. IIS Express
2. IIS

### IIS Express

![Installation Location and IIS Express](/static/assets/on-premise/images/getting-started/installation-IISExpress.png)

### IIS

Need to provide the Port number and Site Name to host the Bold Reports Enterprise Reporting into the IIS.

![Installation Location, IIS Port Changes and Site Name](/static/assets/on-premise/images/getting-started/installation-IIS.png)

After installation process is completed, you can launch the application by clicking on Launch Application.

![Installation LaunchApplication](/static/assets/on-premise/images/getting-started/installation-launchapplication.png)

#### Bold BI with Bold Reports Enterprise Reporting Edition Installation

If Bold BI already installed in your machine and your installing Bold Reports Enterprise Reporting Edition, it will ask confirmation for Common Login.

![Installation LaunchApplication](/static/assets/on-premise/images/getting-started/common-login.png)

Click on `yes`, it will have common login for `BoldBI` and `BoldReportsEnterprise Reporting Edition` products. In IIS, it will deploy as Single site.
![Installation LaunchApplication](/static/assets/on-premise/images/getting-started/common-login-in-IIS.png)

Click on `No`, it will not have common login for `BoldBI` and `BoldReportsEnterprise Reporting Edition` products. In IIS, it will deploy two sites `BoldBIOnPremiseEdition` and `BoldReportsEnterprise Reporting Edition`.

>Bold Reports Azure App Service can be deployed in Azure by following the [link](./../create-app-service/).

## How to change the binding in the Bold Reports Enterprise Reporting

Please follow below steps to change the application binding information

1. Add new binding to Bold Reports Enterprise Reporting edition on IIS as shown in the image below.
 **`Example: 192.168.1.3`**
![IIS Binding](/static/assets/on-premise/images/getting-started/add-binding.png)  
    >Don’t remove existing bindings.

2. Update the new binding values in below configuration files in deployed location.
I>By default, Bold Reports will be deployed on `C:\Bold Reports`
   * Update the **`InternalAppReportUrl`** value in config file in below location  
**`{Deployed Location}`**\IDP\App_Data\Configuration\config.xml  
![IDP Config File](/static/assets/on-premise/images/getting-started/idp-config.png)
   * Update the **`InternalAppDataServiceUrl`**, and **`InternalAppIdpUrl`** values in the config file in below location  
**`{Deployed Location}`**\Report Server\App_Data\Configuration\Config.xml  
![RS Config File](/static/assets/on-premise/images/getting-started/rs-config.png)
3. Restart the site in IIS and browse the site with old binding URL.
4. Now navigate to the site settings page of the UMS application using below old binding and update the new binding information as shown in image below.
**`http://localhost:{port-no}/ums/administration`**  
![IDP Base URL](/static/assets/on-premise/images/getting-started/idp-base-url.png)
5. Now navigate to the site setting of your report server application using below old binding and update the new binding information as shown in image below.  
**`http://localhost:{port-no}/reporting/en-us/site/site1/administration`**  
![RS Base URL](/static/assets/on-premise/images/getting-started/rs-base-url.png)

6. Now Bold Reports site can be browsed using the new binding.

> * To Configure the Bold Reports Enterprise Reporting Edition by using newly added bindings in IIS, refer this [link](./../how-to/map-a-domain-name-to-bold-reports-site-before-startup/)
> * Bold Reports Enterprise Reporting Edition configuration completed by using newly added bindings in IIS but unable to launch `BoldReportsEnterprise Reporting` site, refer this [link](./../how-to/resolve-unavailable-error-when-site-fails-incase-of-domain-name-change/) to solve the problem and configure BoldReports site.

## See Also

* [**Application Startup**](./../application-startup/)