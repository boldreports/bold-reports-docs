---
layout: post
title: Set up to install Bold Report on Windows for on-premise.
description: Learn how to install Bold Reports Enterprise Edition and how to host the Bold Reports Enterprise in IIS or IIS Express in your machine. 
platform: report-platform
documentation: ug
---

# Installation and Deployment

This section explains how to install and deploy the Bold Reports Enterprise.

## Unlock the setup

This topic explains the steps required to install Bold Reports Enterprise.

Run the Bold Reports Enterprise Installer.

![Set up](/static/assets/on-premise/images/installation/setup.png)

You can check the license agreement for Bold Reports Enterprise Edition by clicking on the `License Terms and Conditions`.

## Hosting type

You have been provided with the Bold Reports Enterprise Edition for hosting in the IIS web-server type.

## IIS

You need to provide the port number, location, and site name to host Bold Reports Enterprise in the IIS.

![IIS](/static/assets/on-premise/images/installation/iis.png)

We can deploy the bold reports application as the main application or subapplication.

If you want to configure the Bold Reports application as the main application, please select `No` in the `Would you like to configure Bold Reports - Enterprise Reporting as a sub application` block and provide the Port Number and Site Name.

![Mainapplication_select](/static/assets/on-premise/images/installation/mainapplication_select.png)

If you want to configure the Bold Reports application as a sub-application, please select `Yes` in `Would you like to configure Bold Reports - Enterprise Reporting as a sub application block` and follow the below steps.

![Subapplication_select](/static/assets/on-premise/images/installation/subapplication_select.png)

1. Select your desired main\root application name from the `Site Name` drop-down option.

2. Select your required domain name from the `Domain Name` drop-down option for your respective main/root application

3. Provide a sub-application name in the `Sub Application Name` field to host the Bold Reports Enterprise Reporting as a sub-application
    ![Subapplication_select](/static/assets/on-premise/images/installation/subapplication_details.png)

Once you have provided all the details to host the application in IIS and click `Next` to proceed further.

## Chromium Packages

> **IMPORTANT:** Chromium packages are necessary to enable image and PDF export functionalities in reports and schedules from Bold Reports. Without these packages, the image and PDF export options will be disabled.

![Chromium](/static/assets/on-premise/images/installation/chromium.png)

> **NOTE**: If you encounter problems with your internet connection or have no connection, unselect the option to download Chromium Packages and continue with the installation. Refer to the provided guide for instructions on [manually installing the Chromium Packages](../../../faq/how-to-install-chromium-packages/).

### Client libraries

> **IMPORTANT**: Bold Reports Enterprise Edition uses client libraries such as Oracle, PostgreSQL, MySQL, Snowflake, and MongoDB to connect with their respective SQL database variants. Check license of each library to give consent for installation. The selected client libraries alone will be shipped with the product.

![Client](/static/assets/on-premise/images/installation/client.png)

Read and accept the license to ship the selected client libraries, and then click `Install`.

After the installation process is completed, you can launch the application by clicking `Launch Application`.

![Launch](/static/assets/on-premise/images/installation/launch.png)

If you did not install the client libraries during this installation, then after installing the Bold Reports setup, you can install them using the ClientLibrary.msi setup. The following steps are needed to install the client libraries.

1. Go to the location C:\Program Files (x86)\Bold Reports\Enterprise Reporting\Client Library. And double-click the setup file named ClientLibrary.msi.

    ![Location](/static/assets/on-premise/images/installation/location.png)
2. Now, the client library dialog will open. Then, you can choose and install the required client libraries.
    ![install](/static/assets/on-premise/images/installation/install.png)

## How to change the binding in the Bold Reports Enterprise Reporting

Please follow the below steps to change the application binding information

1. Add new bindings to Bold Reports Enterprise Reporting edition on IIS as shown in the image below.**`Example: example.com`**
    ![IIS Binding](/static/assets/on-premise/images/getting-started/add-binding.png)
    `Don’t remove existing bindings.`

2. Go to the site settings page of the UMS application using the old binding below and update the new binding information as shown in the image below.**`http://localhost:{port-no}/ums/administration`**
    ![IDP Base URL](/static/assets/on-premise/images/getting-started/idp-base-url.png)

3. Then navigate to the site listing page of the UMS application and click `Edit` on the deployed site, as shown in image below.**`http://localhost:{port-no}/ums/sites`**  
    ![RS Base URL](/static/assets/on-premise/images/getting-started/ums-url-edit.png)

4. Update the new binding information as shown in image below.![RS Base URL](/static/assets/on-premise/images/getting-started/ums-base-url.png)
5. Now, you can browse the Bold Reports site using the new binding.
6. Repeat steps 3 and 4 to change custom domain for deployed sites.
> * To configure the Bold Reports Enterprise Reporting Edition by using newly added bindings in IIS, refer to this [link](../../../how-to/map-a-domain-name-to-bold-reports-site-before-startup/)

## See Also

* [**Application Startup**](../../../application-startup/)