---
title: Connect AWS OpenSearch Data to RDL Reports | {{site.productName}}
description: Connect the {{site.productName}} Web Report Designer to AWS Open Search with the Open Distro connection type and feed data to RDL reports with design view or a query.
---

# Connect to AWS Open Search

To connect {{site.productNameTM}} to AWS Open Search, open the **Data** configuration panel in the Web Report Designer and create an AWS Open Search data source. You can then add tables in design view or write a custom query.

## How do I create an AWS Open Search data source?

To create an AWS Open Search data source in the {{site.productNameTM}} Web Report Designer, open the **Data** configuration panel and choose the Elastic Search connection type.

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=415px')
2. In the `DATA` configuration panel, click the `NEW DATA` button.
   ![Data icon configuration panel](/static/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=350px')
3. In the connection type panel, choose the `Elastic Search` data source type.
   ![Connection types panel](/static/images/report-designer/manage-data/aws-opensearch-data-source/connection-types.png '#width=350px')

### How do I configure the basic options?

When you create a new data source in the Web Report Designer, the `NEW DATASOURCE` panel shows the basic options.

1. Specify the data source name without special characters in the **Name** field.
2. Choose a connection type. Two Connection types are available in the Elastic Search connector:
   * Elasticsearch SQL
   * Open Distro
3. To connect to an Amazon Web Service hosted Open Search instance, use Open Distro as the connection type.
4. Enter a valid Open Search server or host name in the **Server Name** field.
5. Enter the **Port** in which the server is running in the port text box.
6. Enter a valid username in the **Username** text box.
7. Enter a valid password in the **Password** text box.
   ![Web datasource properties](/static/images/report-designer/manage-data/aws-opensearch-data-source/basic-options.png '#width=360px')

After you connect the data source, the data design view page opens. The page lists the schemas and tables from the AWS Open Search server in a `treeview` section.

![New connection panel](/static/images/report-designer/manage-data/aws-opensearch-data-source/execute-schema.png)

Drag and drop the required table from the tree view list.

![Tree View List](/static/images/report-designer/manage-data/aws-opensearch-data-source/tree-view-list.png)

> Multiple joins are not supported for the AWS Open Search data source in {{site.productNameTM}}.

Click `Finish` to save the data source with a relevant name and continue designing the report.

![New connection panel](/static/images/report-designer/manage-data/aws-opensearch-data-source/data-list.png '#width=360px')

## How do I connect through a custom query?

The {{site.productNameTM}} Web Report Designer lets you define the data source of certain data connections with a manually written query instead of dragged tables. The custom query applies to connection types such as Elasticsearch SQL and Open Distro connections.

After the connect action, the query design view opens.

### How do I switch to code view?

The {{site.productNameTM}} query design view opens in design view by default. To switch to code view, enable the slider option in the tools pane, as highlighted in the following image.

![New connection panel](/static/images/report-designer/manage-data/data-connectors/code-switcher.png '#width=550px')

The query editor pane then switches to code view, as shown in the following image.

![New connection panel](/static/images/report-designer/manage-data/aws-opensearch-data-source/query-mode.png '#width=415px')

### How do I write and execute a query?

In the {{site.productNameTM}} `Query Editor` pane, you can write your own query to access table schema information and retrieve data from your database.

1. Write your query in the `Query Editor` pane.
2. Click the `Execute` option in the tools pane. The data for your query appears at the bottom of the `Query Editor`.

![New connection panel](/static/images/report-designer/manage-data/aws-opensearch-data-source/enter-query.png)

If you disable the Code Slider in the tools pane to switch back to design view, an alert message asks you to confirm removing your query. Proceeding with this action resets the code view query.

![New connection panel](/static/images/report-designer/manage-data/aws-opensearch-data-source/switcher-alert.png '#width=650px')

Click `Yes` to discard the query and go to design view, or click `No` to keep it. Save the data source by clicking the `Finish` button.

### How do I view the query for tables added in design view?

The {{site.productNameTM}} `Query Editor` pane shows the query for a data source you already created in design view.

For example, drag the `kibana_sample_data_flights` table in design view.

![New connection panel](/static/images/report-designer/manage-data/aws-opensearch-data-source/design-view.png)

Then, enable the `Code Switcher` to view the query. The query reflects the changes made in the table.

![New connection panel](/static/images/report-designer/manage-data/aws-opensearch-data-source/design-to-query.png)

## Frequently asked questions

### Which connection type should I use for AWS Open Search?

Use the Open Distro connection type to connect to an Amazon Web Service hosted Open Search instance.

### Does the AWS Open Search data source support multiple joins?

No. Multiple joins are not supported for the AWS Open Search data source in {{site.productNameTM}}.

### What happens to my query if I switch back to design view?

An alert asks you to confirm removing your query. Clicking `Yes` discards the query and resets the code view query.

## See also

* [Formatting Columns](./../../../transforming-data/formatting-columns/)
* [Query Filter](./../../../transforming-data/query-filter/)
* [Dataset Parameter](./../../../transforming-data/link-a-query-parameter-with-a-report-parameter/)
* [Query Parameter](./../../../transforming-data/define-query-parameters/)
* [Query Expression](./../../../transforming-data/configure-expression-columns/)
