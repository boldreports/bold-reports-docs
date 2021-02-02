---
layout: post
title: Upgrade steps for Bold Reports On Premise Edition
description: Explains how to upgrade the Bold Reports On-Premise Edition version from 1.x to the latest versions.
platform: report-platform
documentation: ug
---

# Upgrade Bold Reports On-Premise version from 1.x to latest

This section explains how to upgrade Bold Reports Server from any version to 2.x version.

Bold Reports releases several major versions in a year. Each version includes new features, bug fixes and other improvements.

Bold Report Server can be upgraded to version 2.x at any time manually, and there are no automatic updates for Report Server. Before upgrading, you can refer the features and enhancements from the [Release Notes](https://www.boldreports.com/release-history/2-2#2-2-28).

## Steps to upgrade Bold Reports On-Premise

* Before installing the Bold Reports version 2.x or higher, make sure to take Backup of the database files from the below location.

`C:\Bold Reports\Report Server\ReportServer.Web\App_Data`
`C:\Bold Reports\UMS\UMS.Web\App_Data`

* Once done, uninstall the current Bold Report Server.

* Install the latest Bold Report Server by following this [link](./../../../../installation-and-deployment/) and configure the application using SQL Database by following this [link](./../../../../application-startup/).

* Once configuration is done, you can migrate your old data to this application by following the [document](./../data-migration/).