---
title: Connect Amazon Aurora Data to RDL Reports | {{site.productName}}
description: Connect the {{site.productName}} Web Report Designer to an Amazon Aurora MySQL or PostgreSQL database, run a SQL query, and use the data in your RDL reports.
---

# Connect to Amazon Aurora data source

The {{site.productNameTM}} Designer supports connecting multiple database through Amazon Aurora using SQL Query. You can use the MySQL or PostgreSQL database engine and feed the query results to your reports.

## How do I create an Amazon Aurora data source?

To create an Amazon Aurora data source in the {{site.productNameTM}} Designer, open the **Data** configuration panel and choose the Amazon Aurora connection type.

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=410px')
2. In the `DATA` configuration panel, click the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=350px')
3. In the connection type panel, choose the `Amazon Aurora` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-aurora-data-source/connection-types.png '#width=350px')

### How do I configure the basic options?

When you create a new data source in the {{site.productNameTM}} Designer, the `NEW DATASOURCE` panel shows the basic options.

1. Specify the data source name without special characters in the **Name** field.
2. Select a database engine you want to use with the given Amazon Aurora Server from the Database Engine drop-down.
3. Enter a valid Amazon Aurora server or host name in the **Server Name** field.
4. Enter a valid Amazon Aurora username in the **UserName** text box.
5. Enter a valid Amazon Aurora password in the **Password** text box.
6. Select a database that you want to query in the listed database associated with the given Amazon Aurora server in the database drop-down.

   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/amazon-aurora-data-source/basic-options.png '#width=350px')

7. Click `Connect` to open the query design pane.
8. Enter the required query and execute it. The corresponding values appear in a grid for preview.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-aurora-data-source/execute-schema.png '#width=425px')

9. Click `Finish` to save the data source with a relevant name and continue designing the report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-aurora-data-source/data-list.png '#width=350px')

#### Amazon Aurora supported database engine in {{site.productNameTM}}

{{site.productNameTM}} supports the following Amazon Aurora database engines:

* MySQL
* PostgreSQL

The following image shows the **Database Engine** drop-down.

![Database Engine](/static/assets/on-premise/images/report-designer/manage-data/amazon-aurora-data-source/database-engine.png '#width=415px')

## Frequently asked questions

### Which database engines can I use with Amazon Aurora in {{site.productNameTM}}?

{{site.productNameTM}} supports the MySQL and PostgreSQL database engines for Amazon Aurora.

### How do I preview Amazon Aurora data before saving the data source?

Click `Connect`, enter the required query, and execute it. The corresponding values appear in a grid for preview.

## See Also

* [Connect to MySQL data source](./../../data-connectors/mysql-data-source/)
* [Connect to PostgreSQL data source](./../../data-connectors/postgresql-data-source/)
* [Connect to Amazon RDS data source](./../../data-connectors/amazon-rds-data-source/)
