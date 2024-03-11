---
title: Connect to ODBC Data Source | Bold Reports Designer
description: Learn how to connect to ODBC data source and feed data to your RDL reports using Bold Reports Designer. 
---

# Connect to ODBC data source

Bold Reports allows to connect data source by using ODBC Driver or DSN names.

## Choose ODBC data source

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=410px')
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=385px')
3. In the connection type panel, choose the `ODBC` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/odbc-data-source/connection-types.png '#width=385px')

## Connection properties

After clicking the data source, the `NEW DATASOURCE` configuration panel opens. Follow the below steps to create ODBC data source:

Specify the data source name without special characters, in **Name** field.
![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/odbc-data-source/odbc-properties.png '#width=355px')

Then enter the valid connection string and authentication type to connect with specified data source.

### Connection string

Connection strings are the text representation of connection properties for a data provider. You can connect to the ODBC data source using either system DSN name or driver name.

To connect using System DSN, specify connection string like below example,

```js
DSN=myDsn;Uid=myUsername;Pwd=;

```

![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/odbc-data-source/dsn-connection.png '#width=385px')

To connect using the driver connection type, specify connection string like below examples,

```js
Driver=`{any odbc driver's name}`;OdbcKey1=someValue;OdbcKey2=someValue;

```

![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/odbc-data-source/basic-connection.png '#width=385px')

Click on the `Connect` to proceed with query design pane. Now, enter the required query and execute. Its corresponding values will be shown in grid for preview.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/odbc-data-source/execute-schema.png)

> Only query mode is supported for ODBC data source.

Click `Finish` to save the data source with a relevant name to proceed with designing report.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/odbc-data-source/data-list.png '#width=355px')

### Authentication types

You can set database credentials, prompted credentials, or use no credentials.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/odbc-data-source/authentication.png '#width=385px')

**Authentication** - A user name and password must be supplied to access the database, the credentials might be for a database login. The credentials are passed to the data source for authentication.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/odbc-data-source/authentication-type.png '#width=385px')

Enable the Save password option to embed the credentials within the report when saving it in Report Server.

> On report download action, the credentials will be not be saved with report data.

**Prompt** - When you configure a data source connection to use prompted credentials, each user who access the report must enter a user name and password on preview action to retrieve the data.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/prompt.png '#width=385px')

**None** - Choose the authentication type as `None`, when the authentication details or any other arguments required to connect with the data source are provided in connection string.