---
title: Connect to OLEDB Data Source | Bold Reports Designer
description: Learn how to connect to OLEDB data source and feed data to your RDL reports using Bold Reports Designer.
---

# Connect to OLEDB data source

Using the `OLEDB` connection type, you can connect an OLEDB database.

## Choose OLEDB data source

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png)
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png)
3. In the connection type panel, choose the `OLEDB` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/oledb-data-source/connection-types.png)

## Connection properties

After clicking the data source, the `NEW DATASOURCE` configuration panel opens. Follow the below steps to create OLEDB data source:

Specify the data source name without special characters, in **Name** field.
![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/oledb-data-source/oledb-properties.png)

Then enter the valid connection string and authentication type to connect with specified data source.

![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/oledb-data-source/basic-connection.png)

Click on the `Connect` to proceed with query design pane. Now, enter the required query and execute. Its corresponding values will be shown in grid for preview.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/oledb-data-source/execute-schema.png)

> Only query mode is supported for OLEDB data source.

Click `Finish` to save the data source with a relevant name to proceed with designing report.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/oledb-data-source/data-list.png)

### Authentication types

You can set database credentials, prompted credentials, or use no credentials.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/oledb-data-source/authentication.png)

**Authentication** - A user name and password must be supplied to access the database, the credentials might be for a database login. The credentials are passed to the data source for authentication.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/oledb-data-source/authentication-type.png)

Enable the Save password option to embed the credentials within the report when saving it in Report Server.

> On report download action, the credentials will be not be saved with report data.

**Prompt** - When you configure a data source connection to use prompted credentials, each user who access the report must enter a user name and password on preview action to retrieve the data.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/prompt.png)

**None** - Choose the authentication type as `None`, when the authentication details or any other arguments required to connect with the data source are provided in connection string.