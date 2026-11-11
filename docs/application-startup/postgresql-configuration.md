---
layout: post
title: Configure PostgreSQL as the Startup Database | Bold Reports
description: Set up a PostgreSQL database at Bold Reports Enterprise startup to store user identities, reports, and access permissions for Bold ID and the Report Server.
platform: report-platform
documentation: ug
---

# Configure PostgreSQL for Bold Reports<sup>®</sup> application startup

Bold Reports<sup>®</sup> supports PostgreSQL databases for storing user identities and report details.

## PostgreSQL Database Configuration for Bold Reports<sup>®</sup> Server Sites

The Bold Reports<sup>®</sup> PostgreSQL configuration stores the reports, users, and their access permissions in a PostgreSQL Server database.

To connect to the PostgreSQL Server instance, follow these steps:

1. Select the server type as `PostgreSQL` and provide the server details.

2. Choose how to connect to the PostgreSQL Server:

    * Create new database.
    * Use an existing database.

3. Provide the database name and proceed further.

![PostgreSQL Server](/static/assets/on-premise/images/getting-started/application-startup-site-registration-postgreSQL-server.jpeg)

> **Important:** The Bold Reports<sup>®</sup> server will accept all the connections that use Transport Layer Security (TLS 1.2/1.3) encryption and AES Cryptography (128 bits). While configuring the Bold Reports<sup>®</sup> Server, choose the `Enable SSL` option to support encrypted data transfer.

## Which configuration mode should I use?

Bold Reports<sup>®</sup> lets you select simple or advanced mode for the PostgreSQL configuration.

### Simple mode

Bold Reports<sup>®</sup> Simple mode configures a single database for Bold ID and Bold Reports<sup>®</sup>.

The configuration stores the user identities, sites details, reports, users and their access permissions in a single database.

The sites will be deployed to the local file system by default in **Simple mode**

![Simple Mode](/static/assets/on-premise/images/getting-started/postgresql-simple-mode-site-registration.jpeg)

### Advanced mode

Bold Reports<sup>®</sup> Advanced mode configures individual databases for Bold ID and Bold Reports<sup>®</sup>. You can choose between the local file system and Azure Blob Storage for Bold ID and Bold Reports<sup>®</sup>.

`Bold ID` database stores user identities and sites details.

`Bold Reports` database stores reports, users, and their access permissions.

![Advanced Mode](/static/assets/on-premise/images/getting-started/postgresql-advanced-mode-site-registration.jpeg)

## Frequently asked questions

### Does Bold Reports<sup>®</sup> support encrypted PostgreSQL connections?

Yes. Choose the `Enable SSL` option while configuring the Bold Reports<sup>®</sup> Server to support encrypted data transfer.

### What is the difference between Simple and Advanced mode?

Bold Reports<sup>®</sup> Simple mode uses a single database for Bold ID and Bold Reports<sup>®</sup>. Advanced mode uses individual databases and lets you choose the local file system or Azure Blob Storage.

## See also

* [**Storage Configuration**](../../application-startup/#storage-configuration)
* [SQL Server configuration](../../application-startup/sql-configuration/)
* [MySQL configuration](../../application-startup/mysql-configuration/)
