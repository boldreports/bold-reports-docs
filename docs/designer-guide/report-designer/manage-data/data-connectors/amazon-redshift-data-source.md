---
title: Connect to Amazon Redshift Data Source | Bold Reports
description: Learn how to connect to Amazon Redshift Data Source and feed data to your RDL reports using Bold Reports Designer.
---

# Connect to Amazon Redshift data source

The Bold Reports allows you to connect with Amazon Redshift database in reports.

## How to create Amazon Redshift data source

To configure the Amazon Redshift data source, follow these steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=415px')
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=350px')
3. In the connection type panel, choose the `Amazon Redshift` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-redshift-data-source/connection-types.png '#width=350px')

### Create Amazon Redshift data source with basic options

When you create a new data, the `NEW DATASOURCE` panel will show up with basic options.

1. Specify the data source name without special characters in the **Name** field.
2. Enter a valid Amazon Redshift server or host name in the **Server Name** field.
3. Enter a valid Amazon Redshift username in the **UserName** text box.
4. Enter a valid Amazon Redshift password in the **Password** text box.
5. Select a database that you want to query in the listed database associated with the given Amazon Redshift server in the database drop-down.
   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/amazon-redshift-data-source/basic-options.png '#width=350px')

Click on the `Connect` to proceed with query design pane. Now, enter the required query and execute. Its corresponding values will be shown in grid for preview.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-redshift-data-source/execute-schema.png)

Click `Finish` to save the data source with a relevant name to proceed with designing report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/amazon-redshift-data-source/data-list.png '#width=350px')

## See Also

[PostgreSQL](./../../data-connectors/postgresql-data-source/)