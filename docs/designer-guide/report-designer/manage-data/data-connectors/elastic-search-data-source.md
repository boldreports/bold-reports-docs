---
title: Connect Elasticsearch Data to RDL Reports | Bold Reports
description: Connect the Bold Reports Web Report Designer to an Elastic Search server with Elasticsearch SQL or Open Distro and feed data to RDL reports with a query.
---

# Connect to Elastic Search data source

To connect Bold Reports<sup>®</sup> to Elastic Search, open the **Data** configuration panel in the Web Report Designer and create an Elastic Search data source. You can then add tables in design view or write a custom query.

## How do I create an Elastic Search data source?

To create an Elastic Search data source in the Bold Reports<sup>®</sup> Web Report Designer, open the **Data** configuration panel and choose the Elastic Search connection type.

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=410px')
2. In the `DATA` configuration panel, click the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=355px')
3. In the connection type panel, choose the `Elastic Search` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/connection-types.png '#width=355px')

### How do I configure the basic options?

When you create a new data source in the Web Report Designer, the `NEW DATASOURCE` panel shows the basic options.

1. Specify the data source name without special characters in the **Name** field.

2. Choose a connection type. Two Connection types are available in the Elastic Search connector:
   * Elasticsearch SQL
   * Open Distro

3. Enter a valid Elastic Search server or host name in the **Server Name** field.

4. Enter the **Port** in which the server is running in the port text box.

5. If the Elastic Search server uses **Elasticsearch SQL** as the Connection type, select an Authentication type from the available options. The configuration of the Elastic Search server determines the Authentication type.
   * None
   * Basic HTTP Authentication

6. If the Elastic Search server uses **Basic HTTP Authentication** as the Authentication type, enter a valid Elastic Search username in the **Username** text box and a valid Elastic Search password in the **Password** text box.
   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/authentication-type.png '#width=355px')

7. Select a database that you want to query in the listed database associated with the given Elastic Search server in the database combo-box.
   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/basic-options.png '#width=355px')

After you connect the data source, the data design view page opens. The page lists the schemas and tables from the Elastic Search server in a `treeview` section.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/execute-schema.png)

Drag and drop the required table from the tree view list.

![Tree View List](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/tree-view-list.png)

> Multiple joins are not supported for the Elastic Search data source in Bold Reports<sup>®</sup>.

Click `Finish` to save the data source with a relevant name and continue designing the report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/data-list.png '#width=355px')

## How do I connect through a custom query?

The Bold Reports<sup>®</sup> Web Report Designer lets you define the data source of certain data connections with a manually written query instead of dragged tables. The custom query applies to connection types such as Elasticsearch SQL and Open Distro connections.

After the connect action, the query design view opens.

### How do I switch to code view?

The Bold Reports<sup>®</sup> query design view opens in design view by default. To switch to code view, enable the slider option in the tools pane, as highlighted in the following image.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/code-switcher.png '#width=355px')

The query editor pane then switches to code view, as shown in the following image.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/query-mode.png)

### How do I write and execute a query?

In the Bold Reports<sup>®</sup> `Query Editor` pane, you can write your own query to access table schema information and retrieve data from your database.

1. Write your query in the `Query Editor` pane.
2. Click the `Execute` option in the tools pane. The data for your query appears at the bottom of the `Query Editor`.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/enter-query.png)

If you disable the Code Slider in the tools pane to switch back to design view, an alert message asks you to confirm removing your query. Proceeding with this action resets the code view query.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/switcher-alert.png)

Click `Yes` to discard the query and go to design view, or click `No` to keep it. Save the data source by clicking the `Finish` button.

### How do I view the query for tables added in design view?

The Bold Reports<sup>®</sup> `Query Editor` pane shows the query for a data source you already created in design view.

For example, drag the `kibana_sample_data_flights` table in design view.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/design-view.png)

Then, enable the `Code Switcher` to view the query. The query reflects the changes made in the table.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/elastic-search-data-source/design-to-query.png)

## Frequently asked questions

### Which connection types does the Elastic Search connector support?

The Elastic Search connector supports the Elasticsearch SQL and Open Distro connection types.

### Which authentication types are available for Elasticsearch SQL?

You can choose None or Basic HTTP Authentication, based on the configuration of the Elastic Search server.

### Does the Elastic Search data source support multiple joins?

No. Multiple joins are not supported for the Elastic Search data source in Bold Reports<sup>®</sup>.

## See also

* [Formatting Columns](./../../../transforming-data/formatting-columns/)
* [Query Filter](./../../../transforming-data/query-filter/)
* [Dataset Parameter](./../../../transforming-data/link-a-query-parameter-with-a-report-parameter/)
* [Query Parameter](./../../../transforming-data/define-query-parameters/)
* [Query Expression](./../../../transforming-data/configure-expression-columns/)
