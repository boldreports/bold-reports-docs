---
title: Create an embedded dataset | Bold Report Designer
description: Create an embedded dataset connection to feed data to the report and to visualize the data using report items in Bold Report Designer
keywords: create data, dataset, report-designer, connect to data, ssrs, reporting
---

# Create an embedded dataset

This section guides you to create an embedded dataset in Bold Report Designer.

## Design query data

1. Click the `Data` icon in the configuration panel to launch a `Data` configuration.

   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/dataset/data-icon-configuration-panel.png '#width=285px')

2. Click on the `New Data` button in `Data` panel.

   ![New data button](/static/assets/on-premise/images/report-designer/manage-data/dataset/new-data-button.png '#width=385px')

3. In the connection type panel, click the data source type that you want to connect. Here, `SQL` connection type is used to demonstrate.

   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/dataset/connection-types-panel.png '#width=385px')

4. In the new data source configuration panel, fill the server name and related details.

   ![New data source connection panel](/static/assets/on-premise/images/report-designer/manage-data/dataset/new-data-source-connection-panel.png '#width=385px')

5. Click on the `Connect` button, now the following view will be displayed.

   ![Query designer full view](/static/assets/on-premise/images/report-designer/manage-data/dataset/query-designer-full-view.png '#width=410px')

6. You can edit the name of the `Data` in the **Name** field that is available in toolbar pane.

   ![Edit dataset name](/static/assets/on-premise/images/report-designer/manage-data/dataset/edit-dataset-name.png '#width=410px')

7. You can drag the tables and views associated with the connected database from left pane. Dragged table or view from the left pane can be dropped into the center pane labeled with `Drag and Drop tables here` like below.

   ![Drag and drop query table to design area](/static/assets/on-premise/images/report-designer/manage-data/dataset/drag-drop-table-in-query-designer.png '#width=385px')

   After you drop the item into the center pane, it displays like below:

   ![Query designer with query table](/static/assets/on-premise/images/report-designer/manage-data/dataset/drag-drop-table-in-query-designer-output.png '#width=600px')

8. To search the table or view from the data collection, you can use the `Search` field in the left pane of the query designer.

   ![Query designer table search pane](/static/assets/on-premise/images/report-designer/manage-data/dataset/query-designer-table-search-pane.png '#width=255px')

## Save Data

1. Click on the `Finish` button in the tools pane.
   ![Finish data button](/static/assets/on-premise/images/report-designer/manage-data/dataset/finish-data-connection.png '#width=415px')
2. Your dataset should now be listed in the `Data` panel like below.
   ![Data list view](/static/assets/on-premise/images/report-designer/manage-data/dataset/data-list-view.png '#width=415px')
3. Expand the icon to view the data fields.
   ![Data fields list](/static/assets/on-premise/images/report-designer/manage-data/dataset/data-fields-list.png '#width=415px')