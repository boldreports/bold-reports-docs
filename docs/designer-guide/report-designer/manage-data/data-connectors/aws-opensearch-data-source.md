---
title: Connect to AWS Open Search Data Source | Bold Reports
description: Learn how to connect to AWS Open Search and feed data to your RDL reports using Bold Reports Designer.
---

# Connect to AWS Open Search

The Bold Reports allows you to connect with AWS Open Search in reports.

## How to create AWS Open Search

To configure the AWS Open Search, follow these steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=415px')
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=350px')
3. In the connection type panel, choose the `Elastic Search` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/aws-opensearch-data-source/connection-types.png '#width=350px')

### Create AWS Open Search with basic options

When you create a new data, the `NEW DATASOURCE` panel will show up with basic options.

1. Specify the data source name without special characters in the **Name** field.
2. There are two Connection types available in the Elastic Search connector:
   * Elasticsearch SQL
   * Open Distro
3. To connect to an Amazon Web Service hosted Open Search instance, please use connection type as Open Distro.
4. Enter a valid Open Search server or host name in the **Server Name** field.
5. Enter the **Port** in which the server is running in the port text box.
6. Enter a valid username in the **Username** text box.
7. Enter a valid password in the **Password** text box.
   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/aws-opensearch-data-source/basic-options.png '#width=360px')

After connecting the data source, the data design view page will be opened. On this page, the list of schemas and tables from the AWS Open Search server will be shown in a `treeview` section.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/aws-opensearch-data-source/execute-schema.png)

Now, you can drag and drop the required table from the tree view list.

![Tree View List](/static/assets/on-premise/images/report-designer/manage-data/aws-opensearch-data-source/tree-view-list.png)

> Multiple joins are not supported for the AWS Open Search data source in Bold Reports.

Click `Finish` to save the data source with a relevant name to proceed with designing report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/aws-opensearch-data-source/data-list.png '#width=360px')

## Connecting through custom query

You can connect to data source of certain data connections through the custom query. This feature allows you to define the data source with manually written queries instead of manually dragged tables for data connection type such as Elasticsearch SQL and Open Distro connections.

After connect action, you will get into the query design view.

### Switch to code view

By default, the query design view opens with design view. Switch to the code view by enabling the slider option in the tools pane in query design view as shown (highlighted) in the following image.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/code-switcher.png '#width=550px')

This will switch the query editor pane as like below,

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/aws-opensearch-data-source/query-mode.png '#width=415px')

### Write query and execute

In the `Query Editor` pane, you can write your own query which helps you to access table schema information and perform all the operations with respect to retrieving data from your database.

After writing your query, click the `Execute` option in the tools pane. You can also view the data for your query in bottom of the `Query Editor`.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/aws-opensearch-data-source/enter-query.png)

If you tried to switch back design view by disabling the Code Slider in tools pane, you will be prompted with an alert message to remove your query for confirmation as proceeding with this action, will reset the code view query.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/aws-opensearch-data-source/switcher-alert.png '#width=650px')

Clicking `Yes` will discard the query and take you to design view, otherwise click `No`. Save the data source by clicking the `Finish` button.

### Code view for tables in design view

You can view the query in `Query Editor` pane for already created a data source in design view.

For example, I have dragged the `kibana_sample_data_flights` table in design view.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/aws-opensearch-data-source/design-view.png)

Then, I tried to enable the `Code Switcher` to view the query, this query shows whatever changes that made in the table.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/aws-opensearch-data-source/design-to-query.png)

## See also

[Formatting Columns](./../../../transforming-data/formatting-columns/)

[Query Filter](./../../../transforming-data/query-filter/)

[Dataset Parameter](./../../../transforming-data/link-a-query-parameter-with-a-report-parameter/)

[Query Parameter](./../../../transforming-data/define-query-parameters/)

[Query Expression](./../../../transforming-data/configure-expression-columns/)