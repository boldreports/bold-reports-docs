---
layout: post
title: Upgrade Bold Reports in staging and production
description: Describes how to upgrade Bold Reports On-Premise Edition latest version in staging and move to production environment.
platform: report-platform
documentation: ug
---

# How to upgrade Bold Reports On-Premise Edition new version on production server

This section explains how to upgrade Bold Reports On-Premise Edition in staging and to production environment.

## Steps to upgrade Bold Reports On-Premise Edition in staging machine

* Install Bold latest Bold Reports On-Premise build by following the [Installation link](../../installation/).

* If Bold Reports On-Premise Edition is configured using the new domain on older version, then after the upgrade installation completed, update that domain URL on configuration files by following these steps:

1. Go to the deployed location.
   >By default, Bold Reports will be deployed on C:\Bold Reports.

2. Update the **`InternalAppReportUrl`** value in config file from the following location.

   **`{Deployed Location}`**\IDP\UMS\Configuration\boldreports\Config.xml
   ![IDP Config File](/static/assets/on-premise/images/getting-started/idp-config.png)

3. Update the **`InternalAppDataServiceUrl`** and **`InternalAppIdpUrl`** values in the config file from the following location.

   **`{Deployed Location}`**\Report Server\Configuration\Config.xml
   ![RS Config File](/static/assets/on-premise/images/getting-started/rs-config.png)

* After the previous steps completed, restart the Bold Reports On-Premise Edition site and test all features in Bold Reports On-Premise and confirm it.

## Steps to upgrade Bold Reports On-Premise Edition in production machine

* Take IDP `App_Data` folder and Report Server `App_Data` folder backup from the Bold Reports site hosted location on production machine.

   Example: In production machine, Bold Reports site is hosted on the location `D:\BoldReports`, then take a backup of `App_Data` folder from IDP location as well as Report Server folder location respectively as follows.

   `D:\Bold Reports\IDP\App_Data`

   `D:\Bold Reports\Report Server\App_Data`

* Except `Utilities` folder, zip all files from deployed location on staging machine and copy that zip file.

   **`{deployed location}`**\Bold Reports
   > By default, Bold Reports will be deployed on the following location in staging machine.
`C:\Bold Reports`

* Paste the copied zip file in any location on production machine and extract that zip file. Except `App_Data` folder, move the extracted files to the Bold Reports site hosted location.

   Example: `D:\Bold Reports`

* Start the Bold Reports site from IIS.

   > After upgrading, if you face any problems while browsing Bold Reports site, then move the backup of IDP `App_Data` folder and Report Server `App_Data` folder to the Bold Reports site hosted location.
   >Example: Bold Report site is hosted on the location `D:\Bold Reports` then move the backup (IDP and Report Server) App_Data folder to the following location, respectively.
   >* `D:\Bold Reports\IDP\App_Data`
   >* `D:\Bold Reports\Report Server\App_Data`
