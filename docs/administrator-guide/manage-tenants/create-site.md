---
layout: post
title: Creating a new site in Bold Reports On-Premise Edition
description: Learn how to create a new site and maintain multiple site in Bold Reports On-Premise Edition on multi-tenant application.
platform: report-platform
documentation: ug
---

# Creating a New Site

This section briefly explains the steps involved in creating a new site in Bold Reports On-premise multi-tenant application.

## Site Creation

You can create another site in Bold Reports On-premise application by clicking on `Create Site` button in site management module.

![Create Site](/static/assets/on-premise/images/tenant-management/create-site/create-site-button.png)

This step holds the site details such as name and identifier. The site identifier should be unique and it is part of your site URL.

![Site Registration](/static/assets/on-premise/images/tenant-management/create-site/site-creation.png)

## Select Database

This step stores the reports, users and their access permissions in SQL Server Database or PostgreSQL Server Database. You can connect to the existing SQL Server instance with the below options.

* By creating new `Bold Reports Site` database.  
![Select Database](/static/assets/on-premise/images/tenant-management/create-site/select-database.png)
* By choosing one of the database from `Select a Database` drop down for creating Bold Reports Server tables in that database.  
![Select Database ExistingDb](/static/assets/on-premise/images/tenant-management/create-site/select-database-existing.png)

You can also connect to the existing PostgreSQL Server instance with the below options.
* By creating new `Bold Reports Site` database.
![Select Database](/static/assets/on-premise/images/tenant-management/create-site/select-postgresql-database.png)
* By choosing one of the database from `Select a Database` drop down for creating Bold Reports Server tables in that database.  
![Select Database ExistingDb](/static/assets/on-premise/images/tenant-management/create-site/select-postgre-database-existing.png)

N> The credentials that is given to connect to the SQL Server or PostgreSQL Server instance must have permissions to
* Create Database
* Create Table
* Insert
* Update Table
* Alter Table
* Select
* Drop Table
* Drop Database  

## Select Storage

User can select the preferred storage type File Storage or Blob Storage to store the report,datasource and dataset in BoldReports Server

![SQL Server DataStore](/static/assets/on-premise/images/tenant-management/create-site/select-storage-type.png)

## Blob Storage

User can select the Blob Storage by giving Azure Blob Credential in the required field

![Blob Storage](/static/assets/on-premise/images/tenant-management/create-site/create-storage-type-blobstorage.png)

## Select Administrator

This step used to select the user to provide complete control over the site.

The selected users have the following permissions,
* Create Reports
* Create Data Sources
* Create Schedules
* Create Datasets
* Create Users
* Create Groups
* Manage Permissions for users and groups

After selecting the user, proceed with `Create and launch site`.

![Select Administrator](/static/assets/on-premise/images/tenant-management/create-site/select-administrator.png)