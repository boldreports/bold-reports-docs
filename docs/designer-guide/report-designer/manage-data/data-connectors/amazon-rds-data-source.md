---
title: Connect to Amazon RDS Data Source | Bold Reports Designer
description: Learn how to connect to Amazon RDS Data Source and feed data to your RDL reports using Bold Reports Designer.
---

# Connect to Amazon RDS data source

The Bold Reports allows you to connect with Amazon RDS data source in reports.

## How to create Amazon RDS data source

To configure the Amazon RDS data source, follow these steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=415px')
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=350px')
3. In the connection type panel, choose the `Amazon RDS` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-rds-data-source/connection-types.png '#width=350px')

### Create Amazon RDS data source with basic options

When you create a new data, the `NEW DATASOURCE` panel will show up with basic options.

1. Specify the data source name without special characters in the **Name** field.
2. Select a database engine you want to use with the given Amazon RDS Server from the Database Engine drop-down.
3. Enter a valid Amazon RDS server or host name in the **Server Name** field.
4. Enter a valid Amazon RDS username in the **UserName** text box.
5. Enter a valid Amazon RDS password in the **Password** text box.
6. Select a database that you want to query in the listed database associated with the given Amazon RDS server in the database drop-down.
   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/amazon-rds-data-source/basic-options.png '#width=350px')

Click on the `Connect` to proceed with query design pane. Now, enter the required query and execute. Its corresponding values will be shown in grid for preview.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-rds-data-source/execute-schema.png '#width=550px')

Click `Finish` to save the data source with a relevant name to proceed with designing report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-rds-data-source/data-list.png '#width=350px')

#### Amazon RDS supported database engine in Bold Reports

* MySQL
* MariaDB
* Amazon Aurora MySQL
* PostgreSQL
* Amazon Aurora PostgreSQL
* SQL Server
* Oracle

![Database Engine](/static/assets/on-premise/images/report-designer/manage-data/amazon-rds-data-source/database-engine.png '#width=300px')

## See Also

[MySQL](./../../data-connectors/mysql-data-source/)

[MariaDB](./../../data-connectors/mariadb-data-source/)

[PostgreSQL](./../../data-connectors/postgresql-data-source/)

[SQL Server](./../../data-connectors/sql-data-source/)

[Oracle](./../../data-connectors/oracle-data-source/)