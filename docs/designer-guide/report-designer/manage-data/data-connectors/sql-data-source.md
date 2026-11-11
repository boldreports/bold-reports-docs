---
title: Connect SQL Server Data Source to RDL Reports | Bold Reports
description: Connect the Bold Reports Web Report Designer to Microsoft SQL Server with basic or advanced options, stored procedures, or custom SQL queries for RDL reports.
---

# Connect to SQL data source

The Microsoft SQL Server data source in the Bold Reports<sup>®</sup> Web Report Designer lets you visualize and analyze SQL Server data in your reports.

**Supported Server Versions**: Microsoft SQL Server (2012, 2014, 2016, 2017, 2019, and 2022).

## How do I create a Microsoft SQL Server data source?

You create a Microsoft SQL Server data source from the **Data** panel of the Bold Reports<sup>®</sup> Web Report Designer. Follow these steps:

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=410px')

2. In the `DATA` configuration panel, click the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=355px')

3. In the connection type panel, choose the `SQL` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/connection-types.png '#width=355px')

### Create Microsoft SQL Server data source with basic options

When you create new data, the Web Report Designer shows the `NEW DATASOURCE` panel with basic options.

1. Specify the data source name without special characters in the **Name** field.
2. In the **Server Name** field, select an existing server in the local network from the drop-down list, or specify a remote server name like `myserver.domain.com`.
3. In the [Authentication Type](./../../../manage-data/data-connectors/sql-data-source/#authentication-types-for-basic-connection) field, choose **Windows** or **SQL Server** authentication.
4. Choose or enter an existing valid database, for example, AdventureWorks.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/basic-options.png '#width=385px')
5. Configure the `Encrypt` and `Trust Server Certificate` options based on your SQL Server configuration.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/enable-encryption.png '#width=385px')
6. Click `Connect` to connect Bold Reports<sup>®</sup> with the Microsoft SQL Server database.
7. Drag the table from the table schema to the query design view.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/query-designer.png '#width=650px')
8. Click `Finish` to save the data source with a relevant name and continue designing the report.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-list.png '#width=325px')

#### Authentication types for basic connection

The basic connection of the SQL Server data source in Bold Reports<sup>®</sup> supports two authentication types: **Windows** or **SQL server**.

If your data source supports authentication directly through **Windows Credentials** (Integrated Security), choose **Windows** under **Authentication Type**.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/basic-authentication.png '#width=355px')

If your data source requires a username and password to authenticate, choose **SQL server** under **Authentication Type**. Then, input the username and password for the server named in the *Server Name* field.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/server-authentication.png '#width=385px')

Enable the Save password option to embed the credentials within the report when saving it in Bold Reports<sup>®</sup> Report Server.

> On report download action, the credentials will be not be saved with report data.

#### How do I connect to Microsoft SQL Server through an SSH tunnel?

The Bold Reports<sup>®</sup> Web Report Designer can connect to a Microsoft SQL data source using a secure SSH tunnel. This option provides a more secure method for connecting, especially when you access remote databases over untrusted or insecure networks.

![Enable-SSH](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/enable-ssh-sql.png '#width=385px')

> Refer to [Configuring SSH tunnel for data connectors](./../../connection-settings/configuring-ssh-tunnel/) for more details.

### Create Microsoft SQL Server data source with advanced options

The advanced options of the SQL Server data source in the Web Report Designer let you build your own connection string. To use them, click `Advanced Options` in the `New Data` panel.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/advanced-options.png '#width=355px')

1. Set the connection string and authentication type as required, and click `Connect`.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/advanced-connection.png '#width=355px')

2. Drag the table from the table schema to the query design view.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/query-designer.png '#width=650px')

3. Click `Finish` to save the data source with a relevant name and continue designing the report.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-list.png '#width=325px')

> Click `Basic Options` to switch back to the basic connection settings.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/switch-basic-options.png '#width=325px')

#### Connection string

A connection string is the text representation of connection properties for a data provider. You enter it in the advanced options of the SQL Server data source.

If the database is in the SQL Server Database Engine installed on your local computer, specify the connection string as in the following example:

```js
Data source=<InstanceName>; initial catalog=AdventureWorks

```

If the database is in any other server domain, specify the connection string with or without credentials, as in the following examples:

```js
Data Source=myserver.domain.com;Initial Catalog=AdventureWorks

```

```js
Data Source=myserver.domain.com;Initial Catalog=AdventureWorks;user id=sa;password=sa@123

```

#### Authentication types for advanced connection

The advanced connection of the SQL Server data source supports Windows integrated security, SQL Server credentials, prompted credentials, or no credentials.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/advanced-authentication.png '#width=355px')

**Windows** - If your data source supports authentication directly through Windows credentials (Integrated Security), choose **Windows** under **Authentication Type**.

**SQL Server** - You must supply a user name and password to access the SQL Server database. The credentials might be for a database login. The credentials are passed to the data source for authentication.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/advanced-sql-server.png '#width=355px')

Enable the Save password option to embed the credentials within the report when saving it in Report Server.

> On report download action, the credentials will be not be saved with report data.

**Prompt** - When you configure a data source connection to use prompted credentials, each user who accesses the report must enter a user name and password on preview to retrieve the data.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/prompt.png '#width=355px')

**None** - Choose the authentication type `None` when the connection string already provides the authentication details or any other arguments required to connect with the data source.

## How do I connect to a stored procedure in SQL Server?

Bold Reports<sup>®</sup> supports stored procedures defined in the SQL Server database through the Microsoft SQL connection.

> NOTE: Bold Reports<sup>®</sup> supports stored procedure only for Microsoft SQL Server.

1. Connect to the SQL Server database with [Basic Options](./../../../manage-data/data-connectors/sql-data-source/#create-microsoft-sql-server-data-source-with-basic-options) or [Advanced Options](./../../../manage-data/data-connectors/sql-data-source/#create-microsoft-sql-server-data-source-with-advanced-options).
2. After you connect, the query design view opens. The left pane tree view displays the available stored procedures. Expand a procedure to display its available parameters.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/stored-procedure.png '#width=250px')

3. Drag the table from the left panel of the query design page, enter the parameter values required for the selected stored procedure, and click the `OK` button.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/stored-parameters.png '#width=325px')

4. Review the preview grid. When you click `OK`, the data of the selected stored procedure, based on the supplied parameters, is extracted and displayed there.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/stored-procedure-data.png '#width=650px')

5. Save the data source by clicking the `Finish` button.

## How do I connect through a custom SQL query?

The Bold Reports<sup>®</sup> Web Report Designer lets you connect to the data source of certain data connections through a custom SQL query. Use this feature to define the data source with manually written queries instead of manually dragged tables. It applies to connection types such as Microsoft SQL connections.

Connect to the SQL Server database with [Basic Options](./../../../manage-data/data-connectors/sql-data-source/#create-microsoft-sql-server-data-source-with-basic-options) or [Advanced Options](./../../../manage-data/data-connectors/sql-data-source/#create-microsoft-sql-server-data-source-with-advanced-options). After you connect, the query design view opens.

### How do I switch to code view?

The query design view in the Web Report Designer opens in design view by default. To switch to code view, enable the slider option in the tools pane of the query design view, as highlighted in the following image.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/code-switcher.png '#width=410px')

The query editor pane then appears, as shown below.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/query-mode.png '#width=410px')

### How do I write and execute a query?

The `Query Editor` pane in the Web Report Designer lets you write your own query. The query can access table schema information and perform all the operations for retrieving data from your database.

After you write your query, click the `Execute` option in the tools pane. The data for your query appears at the bottom of the `Query Editor`.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/enter-query.png '#width=410px')

If you disable the Code Slider in the tools pane to switch back to design view, an alert message asks you to confirm removing your query. Proceeding with this action resets the code view query.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/switcher-alert.png '#width=410px')

Click `Yes` to discard the query and go to design view, or click `No` to keep it. Save the data source by clicking the `Finish` button.

### Can I view the query for tables built in design view?

Yes. The `Query Editor` pane in the Web Report Designer shows the query for a data source already created in design view.

For example, drag the `SalesOrderDetail` table in design view and apply filters.

Then, enable the `Code Switcher` to view the query. The query shows the applied filters and any other changes made to the table.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/design-to-query.png '#width=650px')

## Frequently asked questions

### Which SQL Server versions does Bold Reports<sup>®</sup> support?

The Bold Reports<sup>®</sup> SQL data source supports Microsoft SQL Server 2012, 2014, 2016, 2017, 2019, and 2022.

### Can I use stored procedures with other data sources?

No. Bold Reports<sup>®</sup> supports stored procedures only for Microsoft SQL Server.

### Are saved credentials included when I download a report?

No. On report download, the credentials are not saved with the report data.

## See also

[Formatting Columns](./../../../transforming-data/formatting-columns/)

[Join Tables](./../../../transforming-data/join-table/)

[Query Filter](./../../../transforming-data/query-filter/)

[Dataset Parameter](./../../../transforming-data/link-a-query-parameter-with-a-report-parameter/)

[Query Parameter](./../../../transforming-data/define-query-parameters/)

[Query Expression](./../../../transforming-data/configure-expression-columns/)
