---
layout: post
title: Upgrade steps for Bold Reports Enterprise Edition
description:  Explains how to upgrade the Bold Reports Enterprise Edition version from 2.x to the latest versions.
platform: report-platform
documentation: ug
---

# Upgrading the Bold Reports server to the latest version

This section explains how to upgrade the Bold Reports Server from any version to the latest version.

Bold Reports releases several major versions in a year. Each version includes new features, bug fixes, and other improvements.

The Bold Reports Enterprise Edition can be manually upgraded to the latest version at any time, and there are no automatic updates for the Bold Reports Server. Before upgrading, you can refer the features and enhancements in the [Release Notes](https://www.boldreports.com/release-history/2-2#2-2-28).

> **NOTE:** Upgrading to the latest version does not require a license key. On the other hand, our services will retrieve the license in the backend after upgrading to the latest version.

## Upgrading guidelines

Bold Reports recommends that you follow the guidelines below when upgrading the Bold Reports Server from an older version to the latest version.

* Save all the open settings and the unsaved items.
* Ensure no one is currently working with reports.
* Inform users about the maintenance time.
* For databases, make sure you have a valid network connection to the database while upgrading to the new version.

## Backup the existing data

Before upgrading Bold Reports to the latest version, make sure to take a backup of all the files and folders from the below location.
<table>
    <tr>
      <td>
       Bold ID
      </td>
      <td>
      {Deployed Location}\BoldServices\idp
      </td>
    </tr>
    <tr>
      <td>
       Bold Reports
      </td>
      <td>
       {Deployed Location}\BoldServices\app_data
      </td>
    </tr>
    </table>

> **Note:** By default, Bold Reports will be deployed in "C:\BoldServices\"

## Proceeding with the upgrade

Bold Reports updates the database schema of your current version to the latest version. The upgrade process will retain all the resources and settings from the previous deployment.

You can download the latest version of the Bold Reports Enterprise Edition under your account [here](https://www.boldreports.com/account/downloads).

### Steps to upgrade Bold Reports Enterprise Reporting

Run the Bold Reports Enterprise Installer.

![upgrade installation](/static/assets/on-premise/images/getting-started/upgrade-install-setup.png)

You can check the license agreement for Bold Reports Enterprise Edition by clicking the `License Terms and Conditions` and proceeding by clicking the `Next` button.

Then, the upgrading prompt will be shown; click `Yes` button to proceed with the installation.

![Upgrade Installation Prompt](/static/assets/on-premise/images/getting-started/upgrade-prompt.png)

### Hosting type

Then, click Next to upgrade the Bold Reports Enterprise using the existing server hosting type, location, and port number.

![Installation IIS](/static/assets/on-premise/images/getting-started/installation-iis.png)

### Chromium Packages

Chromium packages are necessary to achieve `image and PDF export` functionalities in reports,schedules from Bold Reports. Without these packages, the image and PDF export options in reports and schedules will no longer be available.

![Installation chromium packages](/static/assets/on-premise/images/getting-started/installation-chromium-packages.png)

> **NOTE:** Refer to the documentation to deploy [chromium packages](./../../../faq/how-to-install-chromium-packages/) manually in Bold Reports.
> Open the config.xml file at the location `{deployment_location}\app_data\reporting\configuration\config.xml`, add the node as shown below, and then save the file.<br>
> `<Exporting UsePuppeteer="true" PuppeteerPath="" />`<br>
> ![Puppeteer Config file](/static/assets/on-premise/images/getting-started/upgrade-adding-puppeteer.png)

### Client libraries

Bold Reports Enterprise Edition uses client libraries such as Oracle, PostgreSQL, MySQL,Snowflake, and MongoDB to connect with their respective SQL database variants. Check the license of each library to give consent for installation. The selected client libraries alone will be shipped with the product.

![client libraries](/static/assets/on-premise/images/getting-started/installation-client-libraries.png)

Read and accept the license to install the selected client libraries, and then click `Install`.

After the installation process is completed, you can launch the application by clicking Launch Application.

![Installation LaunchApplication](/static/assets/on-premise/images/getting-started/upgrade-launch-app.png)