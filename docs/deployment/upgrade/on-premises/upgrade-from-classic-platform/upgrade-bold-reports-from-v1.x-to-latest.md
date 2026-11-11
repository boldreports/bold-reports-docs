---
layout: post
title: Upgrade On-Premises Edition from v1.x to v2.x | Bold Reports
description: Upgrade Bold Reports On-Premises Edition from v1.x to v2.x. Back up the App_Data folders, reinstall the Report Server, and run the data migration utility.
platform: report-platform
documentation: ug
---

# Upgrade Bold Reports<sup>®</sup> On-Premises Edition version from 1.x to latest

To upgrade the Bold Reports<sup>®</sup> Report Server from any version to 2.x, back up your database files, reinstall the Report Server, and migrate your data.

## How often does Bold Reports<sup>®</sup> release new versions?

Bold Reports<sup>®</sup> releases several major versions in a year. Each version includes new features, bug fixes and other improvements.

You can upgrade the Bold Reports<sup>®</sup> Report Server to version 2.x manually at any time. Report Server has no automatic updates. Before you upgrade, review the features and enhancements in the [Bold Reports<sup>®</sup> Release Notes](https://www.boldreports.com/resources/release-history/embedded-reporting/2-2/#2-2-28).

## Steps to upgrade Bold Reports<sup>®</sup> On-Premises Edition

Upgrade Bold Reports<sup>®</sup> On-Premises Edition from 1.x by backing up, reinstalling, configuring, and then migrating your data.

1. Before you install Bold Reports<sup>®</sup> version 2.x or higher, back up the database files from the following locations:

    `C:\Bold Reports\Report Server\ReportServer.Web\App_Data`
    `C:\Bold Reports\UMS\UMS.Web\App_Data`

2. Uninstall the current Bold Reports<sup>®</sup> Report Server.

3. Install the Bold Reports<sup>®</sup> Report Server by following the [Bold Reports<sup>®</sup> installation and deployment guide](./../../../../../deployment/).

4. Configure the application with SQL Database by following [Application startup](./../../../../../application-startup/).

5. After the configuration is done, migrate your old data to this application by following the [data migration guide](./../data-migration/).

## Frequently asked questions

### Does Bold Reports<sup>®</sup> Report Server update automatically?

No. Report Server has no automatic updates, so you upgrade it to version 2.x manually.

### What should I back up before I upgrade from 1.x?

Back up the database files in the Report Server and UMS `App_Data` folders before you install version 2.x or higher.

## See also

* [Migrate Bold Reports<sup>®</sup> On-Premises Edition data](./../data-migration/)
* [Upgrade from the classic platform](./../)
* [Upgrade Bold Reports<sup>®</sup> On-Premises Edition to the latest version](./../../upgrade-bold-reports-to-latest-version/)
