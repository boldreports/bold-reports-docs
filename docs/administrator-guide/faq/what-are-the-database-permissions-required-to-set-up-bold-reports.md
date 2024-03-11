---
title: Permissions needed to create and use the database
description: Find the list of database permissions a user needs to be granted in a database server to create and access for user detail or data store for Bold Reports Report Server.
keywords: report-platform 
---

# What are the database permissions required to set up Bold Reports

The server requires certain permissions to be assigned to your username to create a database. To learn which permissions need to be assigned to allow Bold Reports to connect and use the database, refer this documentation.

The credentials given to connect to the server instance must have the following permissions:

* **Create Table**: permission to create tables required for the applications.
* **Insert**: permission to add new records to the tables.
* **Update**: permission to update existing records in the tables.
* **Alter**: permission to change the database schema with upgrades.
* **Select**: permission to read the records from the tables.
* **Drop Table**: permission to change the database schema during upgrades and to remove tables from the database while deleting the site.
* **Drop Database**: permission to drop the database while deleting the site.

## See Also

[SQL Server](./../../application-startup/sql-configuration/)

[PostgreSQL](./../../application-startup/postgresql-configuration/)

[MySQL](./../../application-startup/mysql-configuration/)