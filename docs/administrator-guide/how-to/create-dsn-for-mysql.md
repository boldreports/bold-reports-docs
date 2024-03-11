---
layout: post
title: How to create DSN for MySQL | Report Server | Syncfusion
description: Describes how to create the ODBC Data Source Name for MySQL database to connect with the Bold Reports Enterprise Edition.
platform: report-platform
documentation: ug
---

# How to create DSN for MySQL

This topic describes how to create DSN for MySQL that can be used to connect MySQL database from Bold Reports Enterprise Edition.

An ODBC Data Source Name (DSN) stores information for establishing a connection to a database on a remote database server. A system DSN provides access to multiple users, rather than only the user who created it.

## Download and Install MySQL ODBC Driver

Download and install the `32-bit Connector/ODBC driver` from the [Downloads section of the MySQL website](http://dev.mysql.com/downloads/connector/odbc/).

> **Note:** Bold Reports is a `32-bit` application, so it will not support `64-bit ODBC` connector.

## Create DSN

After installing MySQL ODBC driver follow the below steps to create DSN for MySQL database.

### Open ODBC Data Source Administration Tool

Open `Control Panel` and select `System and Security`.

 ![Control Panel Home](/static/assets/on-premise/images/how-to/control-panel-home.png)

Select `Administrative Tools` from the list of options.

 ![Select Administrative Tools](/static/assets/on-premise/images/how-to/select-administrative-tools.png)

Select `ODBC Data Sources (32-bit)` from the list of options.

 ![Select ODBC Tool](/static/assets/on-premise/images/how-to/select-odbc-tool.png)

### Create DSN with MySQL ODBC Driver

In the `ODBC Datasource Administration (32-bit)` Tool navigate to `System DSN` and click on `Add` to add a new DSN.

![Add new DSN](/static/assets/on-premise/images/how-to/add-new-dsn.png)

Select MySQL ODBC Driver from the list of drivers and then click on `Finish`.

![Select ODBC Driver](/static/assets/on-premise/images/how-to/select-driver.png)

The `MySQL Connector/ODBC Configuration` tool will be opened and fill the requested details in the tool.

 ![MySQL Connector/ODBC Configuration](/static/assets/on-premise/images/how-to/mysql-connection-details.png)

* Data Source Name – Name of the DSN that will be used to connect MySQL database from Bold Reports Enterprise Edition.
* Description – Description of the DSN(Optional)
* TCP/IP Server – Server that holds MySQL Database.
* Port - Port number provided for MySQL Database.
* User – Username that used to connect MySQL.
* Password - Password of the corresponding user.

The created DSN will be listed in the `ODBC Data Source Administration (32-bit)` tool.

![DSN list](/static/assets/on-premise/images/how-to/dsn-list.png)
