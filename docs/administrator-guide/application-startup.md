---
layout: post
title: Application Startup for the Bold Reports Enterprise Edition
description: Learn how to set up the  Bold Reports Enterprise by configuring storage options and registering a new user.
platform: report-platform
documentation: ug
---

# Application Startup

This topic describes how to startup the  Bold Reports Enterprise Application.

Application startup screen helps you to configure storage options and admin account setup.

Application startup holds the storage options configuration for below application,
1. Bold Reports Sites - Manages user identities and sites
2. Bold Reports Server- Manages reports, data sources, dataset, schedules and the user permissions.
Click `Proceed to Setup`.
![Proceed to Setup](/static/assets/on-premise/images/getting-started/proceed-to-setup.png)

## Database Configuration for Bold Reports Sites

This configuration stores the user identities and sites details in SQL Server Database or PostgreSQL.

You can connect to the existing SQL Server instance with the below options.

* Create new database.
* Use an existing database.

![SQL Server](/static/assets/on-premise/images/getting-started/application-startup-step1.png)

You can also connect to the existing PostgreSQL Server instance with the below options.

* Create new database.
* Use an existing database.

![PostgreSQL Server](/static/assets/on-premise/images/getting-started/application-startup-postgreSQL-server.png)

> The credentials that is given to connect to the SQL Server or PostgreSQL Server instance must have permissions to
> * Create Database
> * Create Table
> * Insert
> * Update Table
> * Alter Table
> * Select
> * Drop Table
> * Drop Database

## Storage Type

User can select the preferred storage type File Storage or Blob Storage to store the resource in BoldReports Sites

![Storage Type](/static/assets/on-premise/images/getting-started/storage-type.png)

## Blob Storage

User can select the Blob Storage by giving Azure Blob Credential in the required field

![Blob Storage](/static/assets/on-premise/images/getting-started/select-storage-type-blobstorage.png)

## New User - System Administrator

New user should be created to access the Bold Reports Sites and Reports with the details mentioned in the below image.

![Admin User Registration](/static/assets/on-premise/images/getting-started/application-startup-admin.png)

While creating this new user account, a new group `System Administrator` is also created.

By default, `System Administrator` group have permission to do the below

* Create Reports
* Create Data Sources
* Create Dataset
* Create Schedules
* Create Users
* Create Groups
* Manage Permissions for users and groups

The new user account created is assigned to this group by default.
![Bold Reports Server](/static/assets/on-premise/images/getting-started/starting-bold-reports-server.png)

## Site Configuration for Bold Reports Sites

User can select the preferred Site Name and Site Identifier for the initial site.

![Site Name](/static/assets/on-premise/images/getting-started/site-name.png)

## Database Configuration for Bold Reports Server

This configuration stores the reports, users and their access permissions in SQL Server Database or PostgreSQL Server Database.

You can connect to the existing SQL Server instance with the below options.

* Create new database.
* Use an existing database.

  ![SQL Server Site](/static/assets/on-premise/images/getting-started/application-startup-site-registration.png)

You can connect to the existing PostgreSQL Server instance with the below options.

* Create new database.
* Use an existing database.

![PostgreSQL Server Site](/static/assets/on-premise/images/getting-started/application-startup-site-registration-postgreSQL-server.png)

> The credentials that is given to connect to the SQL Server instance must have permissions to
> * Create Database
> * Create Table
> * Insert
> * Update Table
> * Alter Table
> * Select
> * Drop Table
> * Drop Database

## Storage Type

User can select the preferred storage type File Storage or Blob Storage to store the report,datasource and dataset in BoldReports Server.

![Storage Type](/static/assets/on-premise/images/getting-started/site-storage-type.png)

Once the process completed, you can able to
* Manage sites – where you can manage permissions for the sites you have created.
* Go to Reports - where you can create, edit, update the reports and so on.

![Launch Bold Reports Reports](/static/assets/on-premise/images/getting-started/launch-application.png)

## Report Server Database

Bold Reports Report Server stores the following information only to the server database:

* Information of reports
* Information of shared data sources
* Information of shared datasets
* Categories
* Schedules definitions
* Permissions settings associated for report, data source, data set, categories, and schedules
* Report Server configurations

> The reports, dataset, and data source, which are added to the Bold Reports Report Server will be maintained in some location based on storage type you have chosen while configuring the Bold Reports Server application. You can refer more details from this [link](./../faq/where-does-the-data-resides-in-bold-reports/).