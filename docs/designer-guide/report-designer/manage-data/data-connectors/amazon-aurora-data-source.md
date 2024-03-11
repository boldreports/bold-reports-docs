---
title: Connect to Amazon Aurora Data Source | Bold Reports Designer
description: Learn how to connect to Amazon Aurora Data Source and feed data to your RDL reports using Bold Reports Designer.
---

# Connect to Amazon Aurora data source

The Bold Reports Designer supports connecting multiple database through Amazon Aurora using SQL Query.

## How to create Amazon Aurora data source

To configure the Amazon Aurora data source, follow these steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=410px')
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=350px')
3. In the connection type panel, choose the `Amazon Aurora` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-aurora-data-source/connection-types.png '#width=350px')

### Create Amazon Aurora data source with basic options

When you create a new data, the `NEW DATASOURCE` panel will show up with basic options.

1. Specify the data source name without special characters in the **Name** field.
2. Select a database engine you want to use with the given Amazon Aurora Server from the Database Engine drop-down.
3. Enter a valid Amazon Aurora server or host name in the **Server Name** field.
4. Enter a valid Amazon Aurora username in the **UserName** text box.
5. Enter a valid Amazon Aurora password in the **Password** text box.
6. Select a database that you want to query in the listed database associated with the given Amazon Aurora server in the database drop-down.

   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/amazon-aurora-data-source/basic-options.png '#width=350px')

Click on the `Connect` to proceed with query design pane. Now, enter the required query and execute. Its corresponding values will be shown in grid for preview.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-aurora-data-source/execute-schema.png '#width=425px')

Click `Finish` to save the data source with a relevant name to proceed with designing report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-aurora-data-source/data-list.png '#width=350px')

#### Amazon Aurora supported database engine in Bold Reports

* MySQL
* PostgreSQL

![Database Engine](/static/assets/on-premise/images/report-designer/manage-data/amazon-aurora-data-source/database-engine.png '#width=415px')

## See Also

[MySQL](./../../data-connectors/mysql-data-source/)

[PostgreSQL](./../../data-connectors/postgresql-data-source/)
