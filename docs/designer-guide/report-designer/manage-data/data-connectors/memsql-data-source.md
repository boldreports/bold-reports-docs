---
title: Connect a MemSQL Data Source to RDL Reports | {{site.productName}}
description: Connect the {{site.productName}} Web Report Designer to a MemSQL database with basic options, a connection string, or an SSH tunnel and use SQL queries in RDL reports.
---

# Connect to MemSQL data source

The {{site.productNameTM}} Designer supports connecting MemSQL database using SQL Query. You can connect with basic options, advanced options, or through a secure SSH tunnel.

## How do I choose the MemSQL data source?

To choose the MemSQL data source in the {{site.productNameTM}} Designer, open the **Data** configuration panel and select the MemSQL connection type.

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=410px')
2. In the `DATA` configuration panel, click the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=355px')
3. In the connection type panel, choose the `MemSQL` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/memsql-data-source/connection-types.png '#width=355px')

### How do I create a MemSQL data source with basic options?

When you create a new data source in the {{site.productNameTM}} Designer, the `NEW DATASOURCE` panel shows the basic options.

1. Specify the data source name without special characters in the **Name** field.
2. In the **Server Name** field, specify the remote server name, like `myserver.domain.com`.
3. In the **Port** field, specify the Port number. The default port number is `3306`.
4. Specify the username of your MemSQL server in the **Username** field.
5. Specify the password of your MemSQL server in the **Password** field.
6. Enable the Save password option to embed the credentials within the report when saving it in {{site.productNameTM}} Report Server.
7. Choose or enter an existing valid database, e.g. Northwind.
   ![Basic Option](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/basic-connection.png '#width=355px')
8. Click `Connect` to open the query design pane. Enter the required query and execute it. The corresponding values appear in a grid for preview.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/execute-schema.png '#width=600px')
   > Only query mode is supported for MemSQL data source.
9. Click `Finish` to save the data source with a relevant name and continue designing the report.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/data-list.png '#width=355px')

### How do I connect to MemSQL through an SSH tunnel?

{{site.productNameTM}} lets you connect to a MemSQL data source using a secure SSH tunnel. The SSH tunnel provides a more secure method for connecting, especially when you access remote databases over untrusted or insecure networks.

![Enable-SSH](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/enable-ssh-mysql.png '#width=385px')

> Refer to [Configuring SSH tunnel for data connectors](./../../connection-settings/configuring-ssh-tunnel/) for more details.

### How do I create a MemSQL data source with advanced options?

The {{site.productNameTM}} advanced options let you build your own connection string for MemSQL.

1. Click `Advanced Options` in the `New Data` panel.

   ![Advance Connection](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/advanced-connection.png '#width=355px')

2. The panel switches to advanced options. Set the connection string and input the username and password of the MemSQL server.

   ![Advance Connection](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/advanced-panel.png '#width=355px')

3. Click `Connect` to open the query design pane. Enter the required query and execute it. The corresponding values appear in a grid for preview.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/execute-schema.png '#width=600px')

   > Only query mode is supported for MemSQL data source.

4. Click `Finish` to save the data source with a relevant name and continue designing the report.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/data-list.png '#width=355px')

> Click `Basic Options` to switch back to the basic connection settings.
![Switch Basic Option](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/switch-basic-options.png '#width=355px')

### Authentication types for advanced connection

{{site.productNameTM}} advanced MemSQL connections support database credentials, prompted credentials, or no credentials.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/authentication.png '#width=355px')

**Authentication** - A user name and password must be supplied to access the database, the credentials might be for a database login. The credentials are passed to the data source for authentication.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/authentication-type.png '#width=355px')

Enable the **Save Password** option to embed the credentials within the report when saving it in Report Server.

> On report download action, the credentials will be not be saved with report data.

**Prompt** - When you configure a data source connection to use prompted credentials, each user who accesses the report must enter a user name and password on preview action to retrieve the data.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/prompt.png '#width=355px')

**None** - Choose the authentication type as `None` when the authentication details or any other arguments required to connect with the data source are provided in the connection string.

## Frequently asked questions

### What is the default MemSQL port?

The default port number is `3306`.

### Does the MemSQL data source support design view?

No. Only query mode is supported for the MemSQL data source.

### Can I connect to MemSQL through an SSH tunnel?

Yes. {{site.productNameTM}} supports connecting to a MemSQL data source through a secure SSH tunnel.

## See also

* [Connect to MySQL data source](./../../data-connectors/mysql-data-source/)
* [Connect to MariaDB data source](./../../data-connectors/mariadb-data-source/)
* [Configuring SSH tunnel for data connectors](./../../connection-settings/configuring-ssh-tunnel/)
