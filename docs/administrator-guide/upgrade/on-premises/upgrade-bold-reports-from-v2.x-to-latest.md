---
layout: post
title: Upgrade steps for Bold Reports Enterprise Edition
description:  Explains how to upgrade the Bold Reports Enterprise Edition version from 2.x to the latest versions.
platform: report-platform
documentation: ug
---

# Upgrade Bold Reports Enterprise Reporting version from 2.x to latest

This section explains how to upgrade Bold Reports Server from 2.x to latest.

Bold Reports releases several major versions in a year. Each version includes new features, bug fixes and other improvements.

Bold Report Server can be upgraded to latest version at any time manually, and there are automatic updates for Report Server. Before upgrading, you can refer the features and enhancements from the [Release Notes](https://www.boldreports.com/release-history/2-2#2-2-28).

## Upgrading guidelines

Bold Reports recommends you to follow below guidelines while upgrading the Bold Reports Server from an older version to latest version.

* Save all the open settings and the unsaved items.
* Ensure no one is currently working with reports.
* Inform about the maintenance time to the users.
* For databases, make sure you have a valid network connection to the database while upgrading to the new version.

## Backup the existing data

Before upgrading the Bold Reports to latest version, make sure to take the backup of all the files and folders from below location.
<table>
    <tr>
      <td>
       Bold IDP
      </td>
      <td>
      {Deployed Location}\IDP\App_Data
      </td>
    </tr>
    <tr>
      <td>
       Bold Reports
      </td>
      <td>
       {Deployed Location}\Report Server\App_Data
      </td>
    </tr>
    </table>

By default, Bold Reports will be deployed in "C:\Bold Reports\"

## Proceeding with upgrade

Bold Reports updates the database schema of your current version to the latest version. The upgrade process will retain all the resources and settings from the previous deployment.

You can download the latest version of the Bold Reports Enterprise Reporting Edition under your account [here](https://www.boldreports.com/account/downloads).

### Steps to upgrade Bold Reports Enterprise Reporting

Run the Bold Reports Enterprise Reporting Installer and sign-in with your registered e-mail address to unlock the setup.

![installation with registered e-mail](/static/assets/on-premise/images/getting-started/upgrade-install-setup.png)

You can check the License Agreement of Bold Reports Enterprise Reporting Edition by clicking the `License Terms and Conditions` and click on `Next` button.

Then, upgrading prompt will be shown, click `Yes` button to proceed the installation.

![Upgrade Installation Prompt](/static/assets/on-premise/images/getting-started/upgrade-prompt.png)

Click `Install` to continue upgrading the Bold Reports Enterprise Reporting using the existing server hosting type, location, and the port number.

The installer will automatically detect the existing hosting details and show in any one of the following web hosting types:

1. IIS Express
2. IIS

![Installation Location, IIS Port Changes and Site Name](/static/assets/on-premise/images/getting-started/upgrade-web-server-type.png)

After installation process is completed, you can launch the application by clicking Launch Application.

![Installation LaunchApplication](/static/assets/on-premise/images/getting-started/upgrade-launch-app.png)

> Data Migration is not required for upgrading Bold Reports Server from v2.x to latest version.