---
title: Connect to SSAS Data Source | Bold Reports Designer
description: Learn how to connect Microsoft SQL Server Analysis Services (SSAS) with Bold Reports Designer and create data source for widget configuration.
---

# Connect to Microsoft SQL Server Analysis Services(SSAS) data source

The Bold Reports allows you to connect with Microsoft SQL Server Analysis Services (SSAS) database.

## How to create Microsoft SQL Server Analysis Services(SSAS) data source

To configure the Microsoft SQL Server Analysis Services(SSAS) data source, follow these steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=415px')
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=350px')
3. In the connection type panel, choose the `Microsoft SQL Analysis Services` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/connection-types.png '#width=350px')

## Connection properties

After clicking the data source, the `NEW DATASOURCE` configuration panel opens.

Specify the data source name without special characters, in **Name** field.
![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/ssas-properties.png '#width=350px')

In **Server Name** field, you need to select existing server in the local network from the drop-down list or specify the specific remote server name like `myserver.domain.com`.

In [Authentication Type](./../../../manage-data/data-connectors/ssas-data-source/#authentication-types-for-basic-connection) field, choose **Windows** or **SQL Server** authentication.

Choose or enter an existing valid database. e.g. AdventureWorks.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/basic-options.png '#width=350px')

Click on the `Connect` to proceed with query design pane. Now, enter the required query and execute. Its corresponding values will be shown in grid for preview.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/execute-schema.png '#width=415px')

> Only query mode is supported for Microsoft SQL Server Analysis Services data source.

Click `Finish` to save the data source with a relevant name to proceed with designing report.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/data-list.png '#width=355px')

### Authentication types for basic connection

You can set authentication type, either as **Windows** or **SQL server**.

If your data source supports authentication directly through **Windows Credentials**(Integrated Security), choose **Windows** under **Authentication Type**.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/basic-authentication.png '#width=385px')

If your data source requires username and password to authenticate. Choose **SQL server** under **Authentication Type** and input the username and password for server name mentioned in *Server Name* field.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/server-authentication.png '#width=350px')

Enable the Save password option to embed the credentials within the report when saving it in Report Server.

> On report download action, the credentials will be not be saved with report data.

## Create Microsoft SQL Server Analysis Services(SSAS) data source with advanced options

To connect the Microsoft SQL Server Analysis Services database with advanced options, click on the `Advanced Options` in `New Data` panel.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/advanced-options.png '#width=350px')

Now, the panel is switched to advanced options. In advanced options, you can build your own connection string.

Set the connection string and authentication type as required and click on `Connect`.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/advanced-connection.png '#width=350px')

Now, enter the required query and execute. Its corresponding values will be shown in grid for preview.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/execute-schema.png '#width=600px')

> Only query mode is supported for Microsoft SQL Server Analysis Services data source.

Click `Finish` to save the data source with a relevant name to proceed with designing report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/data-list.png '#width=350px')

> Click on `Basic Options` to switch back to the basic connection settings.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/switch-basic-options.png '#width=350px')

### Authentication types for advanced connection

You can use windows integrated security, SQL server credentials, prompted credentials, or use no credentials.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/advanced-authentication.png '#width=355px')

**Windows** - If your data source supports authentication directly through windows credentials(Integrated Security), choose **Windows** under **Authentication Type**.

**SQL Server** - A user name and password must be supplied to access the Microsoft SQL Server Analysis Services(SSAS) database, the credentials might be for a database login. The credentials are passed to the data source for authentication.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/advanced-sql-server.png '#width=355px')

Enable the Save password option to embed the credentials within the report when saving it in Report Server.

> On report download action, the credentials will be not be saved with report data.

**Prompt** - When you configure a data source connection to use prompted credentials, each user who access the report must enter a user name and password on preview action to retrieve the data.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/prompt.png '#width=355px')

**None** - Choose the authentication type as `None`, when the authentication details or any other arguments required to connect with the data source are provided in connection string.
