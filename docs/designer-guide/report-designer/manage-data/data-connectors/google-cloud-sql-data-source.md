---
title: Connect to Google Cloud SQL Data Source | Bold Reports
description: Learn how to connect to Google Cloud SQL Data Source and feed data to your RDL reports using Bold Reports Designer.
---

# Connect to Google Cloud SQL data source

The Bold Reports allows you to connect with Google Cloud SQL database to visualize and analyze the data in reports.

## How to create Google Cloud SQL data source

To configure the Google Cloud SQL data source, follow these steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=410px')
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=350px')
3. In the connection type panel, choose the `Google Cloud SQL` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/connection-types.png '#width=350px')

### Create Google Cloud SQL data source with basic options

When you create a new data, the `NEW DATASOURCE` panel will show up with basic options.

1. Specify the data source name without special characters in the **Name** field.
2. Select a database engine you want to use with the given Google Cloud SQL Server from the Database Engine drop-down.
3. Enter a valid Google Cloud SQL server or host name in the **Server Name** field.
4. Enter a valid Google Cloud SQL username in the **UserName** text box.
5. Enter a valid Google Cloud SQL password in the **Password** text box.
6. Select a database that you want to query in the listed database associated with the given Google Cloud SQL server in the database drop-down.
   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/basic-options.png '#width=385px')

Click on the `Connect` to proceed with query design pane. Now, enter the required query and execute. Its corresponding values will be shown in grid for preview.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/execute-schema.png)

Click `Finish` to save the data source with a relevant name to proceed with designing report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/data-list.png '#width=355px')

#### Google Cloud SQL supported database engine in Bold Reports

* MySQL
* PostgreSQL

![Database Engine](/static/assets/on-premise/images/report-designer/manage-data/google-cloud-sql-data-source/database-engine.png '#width=355px')

## See Also

[MySQL](./../../data-connectors/mysql-data-source/)

[PostgreSQL](./../../data-connectors/postgresql-data-source/)