---
title: Connect Amazon RDS Data to RDL Reports | Bold Reports
description: Connect the Bold Reports Web Report Designer to an Amazon RDS database such as MySQL, SQL Server, or Oracle, run a query, and use the data in RDL reports.
---

# Connect to Amazon RDS data source

To connect Bold Reports<sup>®</sup> to an Amazon RDS data source, open the **Data** configuration panel in the Web Report Designer and create an Amazon RDS data source.

## How do I create an Amazon RDS data source?

To create an Amazon RDS data source in the Bold Reports<sup>®</sup> Web Report Designer, open the **Data** configuration panel and choose the Amazon RDS connection type.

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=415px')
2. In the `DATA` configuration panel, click the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=350px')
3. In the connection type panel, choose the `Amazon RDS` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-rds-data-source/connection-types.png '#width=350px')

### How do I configure the basic options?

When you create a new data source in the Web Report Designer, the `NEW DATASOURCE` panel shows the basic options.

1. Specify the data source name without special characters in the **Name** field.
2. Select a database engine you want to use with the given Amazon RDS Server from the Database Engine drop-down.
3. Enter a valid Amazon RDS server or host name in the **Server Name** field.
4. Enter a valid Amazon RDS username in the **UserName** text box.
5. Enter a valid Amazon RDS password in the **Password** text box.
6. Select a database that you want to query in the listed database associated with the given Amazon RDS server in the database drop-down.
   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/amazon-rds-data-source/basic-options.png '#width=350px')
7. Click `Connect` to open the query design pane.
8. Enter the required query and execute it. The corresponding values appear in a grid for preview.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-rds-data-source/execute-schema.png '#width=550px')

9. Click `Finish` to save the data source with a relevant name and continue designing the report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-rds-data-source/data-list.png '#width=350px')

#### Amazon RDS supported database engine in Bold Reports<sup>®</sup>

Bold Reports<sup>®</sup> supports the following Amazon RDS database engines:

* MySQL
* MariaDB
* Amazon Aurora MySQL
* PostgreSQL
* Amazon Aurora PostgreSQL
* SQL Server
* Oracle

The following image shows the **Database Engine** drop-down.

![Database Engine](/static/assets/on-premise/images/report-designer/manage-data/amazon-rds-data-source/database-engine.png '#width=300px')

## Frequently asked questions

### Which Amazon RDS database engines does Bold Reports<sup>®</sup> support?

Bold Reports<sup>®</sup> supports MySQL, MariaDB, Amazon Aurora MySQL, PostgreSQL, Amazon Aurora PostgreSQL, SQL Server, and Oracle for Amazon RDS.

### How do I save the Amazon RDS data source?

After you execute the query and preview the values, click `Finish` to save the data source with a relevant name.

## See Also

* [Connect to MySQL data source](./../../data-connectors/mysql-data-source/)
* [Connect to MariaDB data source](./../../data-connectors/mariadb-data-source/)
* [Connect to PostgreSQL data source](./../../data-connectors/postgresql-data-source/)
* [Connect to SQL Server data source](./../../data-connectors/sql-data-source/)
* [Connect to Oracle data source](./../../data-connectors/oracle-data-source/)
