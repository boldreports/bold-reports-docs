---
title: Database Permissions Needed for Report Server | Bold Reports
description: Find the database permissions, such as Create Table, Insert, Update, Alter, and Select, that Bold Reports Report Server needs to create and use its database.
keywords: report-platform 
---

# What are the database permissions required to set up Bold Reports<sup>®</sup>?

Bold Reports<sup>®</sup> needs certain permissions assigned to your database username to create and use a database. The following list shows which permissions let Bold Reports<sup>®</sup> connect to and use the database.

## Which permissions does the database user need?

The credentials that Bold Reports<sup>®</sup> uses to connect to the server instance must have the following permissions:

* **Create Table**: permission to create tables required for the applications.
* **Insert**: permission to add new records to the tables.
* **Update**: permission to update existing records in the tables.
* **Alter**: permission to change the database schema with upgrades.
* **Select**: permission to read the records from the tables.
* **Drop Table**: permission to change the database schema during upgrades and to remove tables from the database while deleting the site.
* **Drop Database**: permission to drop the database while deleting the site.

## Frequently asked questions

### Why does Bold Reports<sup>®</sup> need the Drop Database permission?

Bold Reports<sup>®</sup> uses the Drop Database permission to drop the database while deleting the site.

### Why does Bold Reports<sup>®</sup> need the Alter permission?

Bold Reports<sup>®</sup> uses the Alter permission to change the database schema with upgrades.

## See Also

* [SQL Server](./../../../application-startup/sql-configuration/)

* [PostgreSQL](./../../../application-startup/postgresql-configuration/)

* [MySQL](./../../../application-startup/mysql-configuration/)
