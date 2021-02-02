---
title: Design simple RDL report using Web Report Designer
description: This section describes how to design, preview and download RDL reports using the Bold Report Designer.
keywords: reportdesigner, rdl report, design, bold reports, reports
---

# Report Creation

This section describes simple steps to design a report using Web Report Designer.

![Report designer initial view](/static/assets/on-premise/images/report-designer/report-creation/report-designer-initial-view.png)

## Create Data

1. To add a data, click on the **Data** icon in the `Data Configuration` panel. It opens the `Data` panel.
![Data panel icon](/static/assets/on-premise/images/report-designer/report-creation/data-icon-configuration-panel.png)
2. Click on `New Data` button in the data panel.
![New data button](/static/assets/on-premise/images/report-designer/report-creation/new-data-button-data-panel.png)
3. Choose `SQL` type to connect data.
![Data source types panel](/static/assets/on-premise/images/report-designer/report-creation/datasource-types-panel.png)
4. In the new data source panel,
    * In **Name** field, specify the data source name without special characters.
    * In **Server Name** field, you need to select existing server in the local network from the drop-down list or specify the specific remote server name like `myserver.domain.com`.
    * In **Authentication Type** field, choose **Windows** or **SQL Server** authentication.
    * If you have chosen **SQL Server** authentication, specify the **username** and **password** of the server.
    * In **Database** field, choose or enter a existing valid database e.g. AdventureWorks.
![Data source fields panel](/static/assets/on-premise/images/report-designer/report-creation/datasource-fields-panel.png)
5. Click the `Connect` button. Now the following view will be displayed.
![Query designer initial view](/static/assets/on-premise/images/report-designer/report-creation/query-designer-full-view.png)

> Here, an **AdventureWorks** database is used for demonstration.

### Edit dataset name

You can edit the name of the `Data` in the **Name** field that is available in toolbar pane.

![Dataset name field](/static/assets/on-premise/images/report-designer/report-creation/edit-dataset-name.png)

### Drag and drop table in query designer

The left pane holds the **tables**, **views**, and **procedures** associated with the connected database. Drag your preferred table or view from the left pane and drop into the center pane labeled with `Drag and Drop table here` like below:

![Drag and drop query table to design area](/static/assets/on-premise/images/report-designer/report-creation/drag-drop-table-in-query-designer.png)

Now, the table will be dropped in the design area like below.

![Query designer with query table](/static/assets/on-premise/images/report-designer/report-creation/drag-drop-table-in-query-designer-output.png)

### Execute query

1. You can execute and visualize the data by using `Run` option in tools pane.
![Run query icon](/static/assets/on-premise/images/report-designer/report-creation/run-query-in-querydesigner.png)
2. Now, the data will be retrieved based on the specified query.
![Execute query output](/static/assets/on-premise/images/report-designer/report-creation/execute-query-output.png)

### Save Data

1. Click on the `Finish` button in the tools pane.
![Finish data button](/static/assets/on-premise/images/report-designer/report-creation/finish-data-connection.png)
2. Your dataset should now be listed in the `Data` panel like below.
![Data list view](/static/assets/on-premise/images/report-designer/report-creation/data-list-view.png)
3. Expand the icon to view the data fields.
![Data fields list](/static/assets/on-premise/images/report-designer/report-creation/data-fields-list.png)

## Add table report item

The left pane in the design view consists of basic items, data region, data visualization, and sub reports  to design an interactive report.

> Here, the `Table` report item is used for demonstration.

1. Select the `Table` item under `Data Regions` in the item panel, then drag and drop it to the design area.
![Table report item](/static/assets/on-premise/images/report-designer/report-creation/drag-drop-table-item.png)
2. The above action will render the `Table` with two rows and three columns in the design area.
![Table initial view](/static/assets/on-premise/images/report-designer/report-creation/table-initial-view.png)

### Assign data

> This step is applicable only for the report items that belongs to `data visualization` and `data region` category.

Assign the dataset to the `Dataset` property of the table.
![Assign dataset to the table](/static/assets/on-premise/images/report-designer/report-creation/assign-dataset-to-table.png)

### Add column header

1. Select the first cell in the table, and enter the column header text as `ProductID` to the `Content` property of table.
![Enter text in table cell](/static/assets/on-premise/images/report-designer/report-creation/enter-text-in-table-cell.png)
2. Similarly, you can add required column header text to other cells in the table.
![Assign column text output](/static/assets/on-premise/images/report-designer/report-creation/assign-column-text-output.png)

### Assign data fields in table cell

1. Select the table cell and click on the `Data assign` menu icon to open data assign menu.
![Open data assign menu](/static/assets/on-premise/images/report-designer/report-creation/open-data-assign-menu.png)
2. Assign the `ProductID` field in the table cell.
![Assign fields to table cell](/static/assets/on-premise/images/report-designer/report-creation/assign-fields-to-table-cell.png)
3. Similarly, you can assign the required data fields to the table cell.
![Output of assign fields procedure](/static/assets/on-premise/images/report-designer/report-creation/assign-fields-to-table-cell-output.png)
4. Assign `expression` to the table cell.
![Assign expression to table cell](/static/assets/on-premise/images/report-designer/report-creation/add-expression-to-table-cell.png)
5. In the expression dialog, add the following expression `=Fields!OrderQty.Value*Round(Fields!UnitPrice.Value,2)` and click OK.
![Assign expression to table cell](/static/assets/on-premise/images/report-designer/report-creation/unit-price-expression.png)
6. Now, the table will look like below,
![Assign expression to table cell](/static/assets/on-premise/images/report-designer/report-creation/expression-output-in-table-cell.png)

### Resize the column

To improve the report readability, we can resize the table row height and column width.

1. Place the mouse pointer in the respective column border.
![Resize the table column](/static/assets/on-premise/images/report-designer/report-creation/resize-the-table-column.png)
2. Drag the column gripper horizontally, to adjust the column width.
![Adjust column width of the table](/static/assets/on-premise/images/report-designer/report-creation/adjust-column-width-output.png)

### Resize the row

1. Place the mouse pointer in the respective row border.
![Resize the table row](/static/assets/on-premise/images/report-designer/report-creation/resize-the-table-row.png)
2. Drag the row gripper vertically, to adjust the row height.
![Adjust row height of the table](/static/assets/on-premise/images/report-designer/report-creation/adjust-row-height-output.png)

### Customize the appearance

Open the `PROPERTIES` pane. This pane holds some general settings and some specific to the report item. Configure the desired settings to the table for better report design and to improve report readability.

![Customize table cell properties](/static/assets/on-premise/images/report-designer/report-creation/customize-table-cell-properties.png)

### Add total

1. Select the second row, first cell and Right click -> **Add Total**
![Add total menu](/static/assets/on-premise/images/report-designer/report-creation/add-total-menu.png)
2. Now, select the third row, first four columns and Right click -> **Merge cells**
![Merge cells in table](/static/assets/on-premise/images/report-designer/report-creation/merge-cells-in-table.png)
3. Modify the cell content as `Total` and align the content to `Right` side.
![Modify the cell content](/static/assets/on-premise/images/report-designer/report-creation/modify-total-cell-content.png)
4. Select the third row, last cell and open the `Data Assign` menu. Then, click on `Add Expression`.
![Add expression menu](/static/assets/on-premise/images/report-designer/report-creation/add-expression-menu.png)
5. In the expression dialog, add the following expression `=Sum(Fields!OrderQty.Value*Round(Fields!UnitPrice.Value,2))` and click OK.
![Provide valid expression](/static/assets/on-premise/images/report-designer/report-creation/round-of-the-line-total.png)

Now, the table design will look like below.

![Final design view](/static/assets/on-premise/images/report-designer/report-creation/final-design-view.png)

## Save report

Once you are done with the report designing, to save a report refer **How to save report** section.

## Preview report

1. To see the report preview, click on the **Preview** button in the report header.
![Preview icon in design view](/static/assets/on-premise/images/report-designer/report-creation/preview-icon.png)
2. Now, the report preview can be visualized like below.
![Table report preview](/static/assets/on-premise/images/report-designer/report-creation/report-preview-page-1.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/design-rdl-report-in-web-report-designer.rdl)

## See also

[Design a Basic Chart Report](./../report-items/chart/)

[Create an Embedded DataSource](./../manage-data/datasource/create-an-embedded-data-source/)

[Create an Embedded DataSet](./../manage-data/dataset/create-an-embedded-dataset/)

[Link a Shared DataSource into a Report](./../manage-data/datasource/link-a-shared-data-source/)

[Link a Shared DataSet into a Report](./../manage-data/dataset/link-a-shared-dataset/)

[Create a Duplicate Copy of DataSource in a Report](./../manage-data/datasource/duplicate-a-data-source/)

[Create a Duplicate Copy of DataSet in a Report](./../manage-data/dataset/duplicate-a-dataset/)

[Add a Report Parameter to a Report](./../report-parameters/add/)

[Embed an Image in a Report](./../image-manager/add-image/)