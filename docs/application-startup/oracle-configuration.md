---
layout: post
title: Configure Oracle as the Startup Database | Bold Reports
description: Configure an Oracle database at Bold Reports Enterprise startup to store user identities, reports, and access permissions for Bold ID and the Report Server.
platform: report-platform
documentation: ug
---

# Configure Oracle for Bold Reports<sup>®</sup> application startup

Bold Reports<sup>®</sup> supports Oracle databases for storing user identities and report details.

## Oracle Database Configuration for Bold Reports<sup>®</sup> Server Sites

The Bold Reports<sup>®</sup> Oracle configuration stores the reports, users, and their access permissions in an Oracle Server database. Follow these steps:

1. Select the server type as `Oracle` and provide the server details.

2. Set the database name to be the same as the username.
    ![Orcale Server](/static/assets/on-premise/images/getting-started/select-oracle-db.png)

### Simple mode

Bold Reports<sup>®</sup> Simple mode configures a single database for Bold ID and Bold Reports<sup>®</sup>.

The configuration stores the user identities, sites details, reports, users and their access permissions in a single database.

The sites will be deployed to the local file system by default in **Simple mode**.

![Oracle Simple Mode](/static/assets/on-premise/images/getting-started/oracle-simple-mode.png)

## Frequently asked questions

### What database name should I use for Oracle?

Set the Oracle database name to be the same as the username when you configure Bold Reports<sup>®</sup>.

### Where are sites deployed in Simple mode?

In Bold Reports<sup>®</sup> Simple mode, the sites are deployed to the local file system by default.

## See also

* [**Storage Configuration**](../../application-startup/#storage-configuration)
* [SQL Server configuration](../../application-startup/sql-configuration/)
* [PostgreSQL configuration](../../application-startup/postgresql-configuration/)
