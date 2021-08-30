---
title: Connect to Azure SQL Data Warehouse | Bold Reports Designer
description: Learn how to connect to Azure SQL data warehouse and feed data to your RDL reports using Bold Reports Designer.
---

# Connect to Azure SQL Data Warehouse data source

The Bold Reports allows you to connect with Azure SQL Data Warehouse database to visualize and analyze the data in reports.

## How to create Azure SQL Data Warehouse data source

To configure the Azure SQL Data Warehouse data source, follow these steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png)
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png)
3. In the connection type panel, choose the `Azure SQL Data Warehouse` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/azure-sql-data-source/connection-types.png)

### Create Azure SQL Data Warehouse data source with basic options

When you create a new data, the `NEW DATASOURCE` panel will show up with basic options,

1. Specify the data source name without special characters, in **Name** field.
2. Enter a valid Azure SQL Data Warehouse server or host name in the **Server Name** field.
3. Enter a valid Azure SQL Data Warehouse username in the **UserName** text box.
4. Enter a valid Azure SQL Data Warehouse password in the **Password** text box.
5. Select a database that you want to query in the listed database associated with the given Azure SQL Data Warehouse server in the database combo box.
6. Click on the `Connect` to connect the Bold Reports with Azure SQL Data Warehouse server database.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/azure-sql-data-source/basic-options.png)
7. Drag and drop the table from the table schema in the query design view page.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/query-designer.png)
8. Click `Finish` to save the data source with a relevant name to proceed with designing report.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-list.png)

Enable the Save password option to embed the credentials within the report when saving it in Report Server.

![Save password](/static/assets/on-premise/images/report-designer/manage-data/azure-sql-data-source/save-password.png)

> On report download action, the credentials will be not be saved with report data.

### Create Azure SQL Data Warehouse data source with advanced options

To connect the Azure SQL Data Warehouse database with advanced options, click on the `Advanced Options` in `New Data` panel.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/azure-sql-data-source/advanced-options.png)

Now, the panel is switched to advanced options. In advanced options, you can build your own connection string.

Set the connection string and authentication type as required and click on `Connect`.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/azure-sql-data-source/advanced-connection.png)

Drag and drop the table from the table schema in the query design view page.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/query-designer.png)

Click `Finish` to save the data source with a relevant name to proceed with designing report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-list.png)

> Click on `Basic Options` to switch back to the basic connection settings.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/azure-sql-data-source/switch-basic-options.png)

#### Connection string

Connection strings are the text representation of connection properties for a data provider.

If the database is located in the Azure SQL Server Database Engine and installed on your local computer. Specify connection string like below example,

```js
Data source=<InstanceName>; initial catalog=AdventureWorks; Encrypt=True;TrustServerCertificate=True;

```

If database is located in any other server domain, specify connection string with or without credentials like below examples,

```js
Data Source=myserver.domain.com;Initial Catalog=AdventureWorks;Encrypt=True;TrustServerCertificate=True;

```

```js
Data Source=myserver.domain.com;Initial Catalog=AdventureWorks;user id=sa;password=sa@123;Encrypt=True;TrustServerCertificate=True;

```

#### Authentication types for advanced connection

You can use Azure SQL server credentials, prompted credentials, or use no credentials.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/azure-sql-data-source/advanced-authentication.png)

**SQL Server** - A user name and password must be supplied to access the Azure SQL Server database, the credentials might be for a database login. The credentials are passed to the data source for authentication.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/advanced-sql-server.png)

Enable the Save password option to embed the credentials within the report when saving it in Report Server.

> On report download action, the credentials will be not be saved with report data.

**Prompt** - When you configure a data source connection to use prompted credentials, each user who access the report must enter a user name and password on preview action to retrieve the data.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/prompt.png)

**None** - Choose the authentication type as `None`, when the authentication details or any other arguments required to connect with the data source are provided in connection string.

## Connecting through custom SQL query

You can connect to data source of certain data connections through the custom SQL query. This feature allows you to define the data source with manually written queries instead of manually dragged tables for data connection type such as Microsoft SQL connections.

Connect to the Azure SQL Server database with [Basic Options](./../../../manage-data/data-connectors/azure-sql-data-warehouse/#create-azure-sql-data-warehouse-data-source-with-basic-options) or [Advanced Options](./../../../manage-data/data-connectors/azure-sql-data-warehouse/#create-azure-sql-data-warehouse-data-source-with-advanced-options). After connect action, you will get into the query design view.

### Switch to code view

By default, the query design view opens with design view. Switch to the code view by enabling the slider option in the tools pane in query design view as shown (highlighted) in the following image.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/code-switcher.png)

This will switch the query editor pane as like below,

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/query-mode.png)

### Write query and execute

In the `Query Editor` pane, you can write your own query which helps you to access table schema information and perform all the operations with respect to retrieving data from your database.

After writing your query, click the `Execute` option in the tools pane. You can also view the data for your query in bottom of the `Query Editor`.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/enter-query.png)

If you tried to switch back design view by disabling the Code Slider in tools pane, you will be prompted with an alert message to remove your query for confirmation as proceeding with this action, will reset the code view query.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/switcher-alert.png)

Clicking `Yes` will discard the query and take you to design view, otherwise click `No`. Save the data source by clicking the `Finish` button.

### Code view for tables in design view

You can view the query in `Query Editor` pane for already created data source in design view.

For example, I have dragged the `SalesOrderDetail` table in design view and applied filters too.

Then, I tried to enable the `Code Switcher` to view the query, this query shows the applied filters and whatever changes that made in the table.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/design-to-query.png)

## See also

[Formatting Columns](./../../../transforming-data/formatting-columns/)

[Join Tables](./../../../transforming-data/join-table/)

[Query Filter](./../../../transforming-data/query-filter/)

[Dataset Parameter](./../../../transforming-data/link-a-query-parameter-with-a-report-parameter/)

[Query Parameter](./../../../transforming-data/define-query-parameters/)

[Query Expression](./../../../transforming-data/configure-expression-columns/)