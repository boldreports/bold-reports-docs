---
title: Connect to PostgreSQL Data Source | Bold Reports Designer
description: Learn how to connect to PostgreSQL data source and feed data to your RDL reports using Bold Reports Designer.
---

# Connect to PostgreSQL data source

The Bold Reports allows you to connect with PostgreSQL data source to visualize and analyze the data in reports.

## How to create PostgreSQL data source

To configure the PostgreSQL data source, follow these steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png)
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png)
3. In the connection type panel, choose the `PostgreSQL` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/postgresql-data-source/connection-types.png)

### Create PostgreSQL data source with basic options

When you create a new data, the `NEW DATASOURCE` panel will show up with basic options,

1. Specify the data source name without special characters, in **Name** field.

2. In **Server Name** field, you need to specify the remote server name like `myserver.domain.com`.

3. In **Port** field, you need to specify the Port number. Here, the default port number is `5432`.

4. Specify the username of your PostgreSQL server in **Username** field.

5. Specify the password of your PostgreSQL server in **Password** field.

6. Enable the Save password option to embed the credentials within the report when saving it in Report Server.

7. Choose or enter an existing valid database. e.g. Northwind.
![Basic Option](/static/assets/on-premise/images/report-designer/manage-data/postgresql-data-source/basic-options.png)

8. Click on the `Connect` to connect the Bold Reports with PostgreSQL database.

9. Drag and drop the table from the table schema in the query design view page.
![Query Designer](/static/assets/on-premise/images/report-designer/manage-data/postgresql-data-source/query-designer.png)

10. Click `Finish` to save the data source with a relevant name to proceed with designing report.
![Data List](/static/assets/on-premise/images/report-designer/manage-data/postgresql-data-source/data-list.png)

### Create PostgreSQL data source with advanced options

To connect the PostgreSQL database with advanced options, click on the `Advanced Options` in `New Data` panel.

![Advance Option](/static/assets/on-premise/images/report-designer/manage-data/postgresql-data-source/advanced-options.png)

Now, the panel is switched to advanced options. In advanced options, you can build your own connection string.

Set the connection string and input the username and password of PostgreSQL server.

![Advance Connection](/static/assets/on-premise/images/report-designer/manage-data/postgresql-data-source/advanced-connection.png)

Drag and drop the table from the table schema in the query design view page.

![Query Designer](/static/assets/on-premise/images/report-designer/manage-data/postgresql-data-source/query-designer.png)

Click `Finish` to save the data source with a relevant name to proceed with designing report.

![Data List](/static/assets/on-premise/images/report-designer/manage-data/postgresql-data-source/data-list.png)

> Click on `Basic Options` to switch back to the basic connection settings.
![Switch Basic Option](/static/assets/on-premise/images/report-designer/manage-data/postgresql-data-source/switch-basic-options.png)

#### Connection string

Connection strings are the text representation of connection properties for a data provider.

If the database is on your local computer. Specify connection string like the below.

```bash

Host=localhost;Port=5432;Database=Northwind;User ID=postgres;Password=1234

```

If database is located in any other server domain, specify connection string like the below.

```bash

Host=myserver.domain.com;Port=5432;Database=Northwind;User ID=postgres;Password=1234;

```

#### Authentication types for advanced connection

You can use PostgreSQL server credentials, prompted credentials, or no credentials.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/postgresql-data-source/advanced-authentication.png)

**PostgreSQL Server** - A user name and password must be supplied to access the PostgreSQL Server database, the credentials might be for a database login. The credentials are passed to the data source for authentication.

![Server](/static/assets/on-premise/images/report-designer/manage-data/postgresql-data-source/server.png)

Enable the Save password option to embed the credentials within the report when saving it in Report Server.

> On report download action, the credentials will be not be saved with report data.

**Prompt** - When you configure a data source connection to use prompted credentials, each user who access the report must enter a user name and password on preview action to retrieve the data.

![Prompt](/static/assets/on-premise/images/report-designer/manage-data/postgresql-data-source/prompt.png)

**None** - Choose the authentication type as `None`, when the authentication details or any other arguments required to connect with the data source are provided in connection string.
