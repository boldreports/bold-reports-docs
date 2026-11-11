---
title: Create an Embedded Dataset in RDL Reports | Bold Reports
description: Create an embedded dataset in the Bold Reports Web Report Designer by connecting to a data source, designing a query, and saving it for your report items.
keywords: create data, dataset, report-designer, connect to data, ssrs, reporting
---

# Create an embedded dataset

An embedded dataset in the Bold Reports<sup>®</sup> Web Report Designer holds the query data that feeds your report. You create it by designing a query from the `Data` configuration panel.

## Design query data

You design query data in the Bold Reports<sup>®</sup> Web Report Designer by connecting to a data source and dragging tables into the query designer.

1. Click the `Data` icon in the configuration panel to launch the `Data` configuration.

   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/dataset/data-icon-configuration-panel.png '#width=285px')

2. Click the `New Data` button in the `Data` panel.

   ![New data button](/static/assets/on-premise/images/report-designer/manage-data/dataset/new-data-button.png '#width=385px')

3. In the connection type panel, click the data source type that you want to connect. This example uses the `SQL` connection type.

   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/dataset/connection-types-panel.png '#width=385px')

4. In the new data source configuration panel, fill in the server name and related details.

   ![New data source connection panel](/static/assets/on-premise/images/report-designer/manage-data/dataset/new-data-source-connection-panel.png '#width=385px')

5. Click the `Connect` button. The following view is displayed.

   ![Query designer full view](/static/assets/on-premise/images/report-designer/manage-data/dataset/query-designer-full-view.png '#width=410px')

6. Edit the name of the `Data` in the **Name** field in the toolbar pane, if needed.

   ![Edit dataset name](/static/assets/on-premise/images/report-designer/manage-data/dataset/edit-dataset-name.png '#width=410px')

7. Drag the tables and views of the connected database from the left pane. Drop them into the center pane labeled `Drag and Drop tables here`, as shown below.

   ![Drag and drop query table to design area](/static/assets/on-premise/images/report-designer/manage-data/dataset/drag-drop-table-in-query-designer.png '#width=385px')

   After you drop the item into the center pane, it displays as shown below.

   ![Query designer with query table](/static/assets/on-premise/images/report-designer/manage-data/dataset/drag-drop-table-in-query-designer-output.png '#width=600px')

8. To search for a table or view in the data collection, use the `Search` field in the left pane of the query designer.

   ![Query designer table search pane](/static/assets/on-premise/images/report-designer/manage-data/dataset/query-designer-table-search-pane.png '#width=255px')

## How do I save the data?

You save the embedded dataset from the tools pane of the Web Report Designer query designer.

1. Click the `Finish` button in the tools pane.
   ![Finish data button](/static/assets/on-premise/images/report-designer/manage-data/dataset/finish-data-connection.png '#width=415px')
2. Check that your dataset is now listed in the `Data` panel, as shown below.
   ![Data list view](/static/assets/on-premise/images/report-designer/manage-data/dataset/data-list-view.png '#width=415px')
3. Expand the icon to view the data fields.
   ![Data fields list](/static/assets/on-premise/images/report-designer/manage-data/dataset/data-fields-list.png '#width=415px')

## Frequently asked questions

### How do I find a table in a large database?

Use the `Search` field in the left pane of the Bold Reports<sup>®</sup> Web Report Designer query designer to search for a table or view.

### Can I rename the dataset?

Yes. Edit the name of the `Data` in the **Name** field in the toolbar pane of the query designer.

## See also

* [Add a filter to a dataset](./../add-a-filter-to-a-dataset/)
* [Dataset fields](./../dataset-fields/)
* [Modify an embedded dataset](./../modify-an-embedded-dataset/)
