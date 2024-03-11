---
title: Formating Columns with Bold Report Designer | Bold Reports
description: This describes steps on how to rename and exclude the columns of dataset table in query designer with Bold Report Designer
keywords: format columns,dataset table, report-designer, ssrs filters, ssrs, reporting
---

# Formatting Columns

When designing the data in query designer, the columns in the data table can be organized based on your dataset design requirements.

Refer [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/) section for better understanding with the following sections.

The below image showcases the initial view of query designer.

![Query Designer initial state](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/query-designer-initial-view.png)

## Rename a column

The column names in data table can be renamed in query designer after retrieving the data from data source.

> The column rename action will not affect the actual data in the data source.

Follow the below steps to rename a column in data table.

1. Drag a table or view from the left pane and drop it into the center pane labeled with `Drag and Drop tables here` like below.
   ![Drag and drop table into design area](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/drag-and-drop-a-table.png)
2. Execute the query and the data will display in preview grid as follows.
   ![Data preview before rename action](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/preview-grid-data-before-rename-action.png '#width=450px')
3. Double-click on the column name in the table to rename the respective column.
   ![Enable the column edit mode](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/double-click-on-column-name.png '#width=200px')
4. The edit mode will be enabled like below.
   ![Column name edit mode](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/column-name-edit-mode.png '#width=200px')
5. Now, modify the column name and press enter key to commit the modification done.
   ![Modify the column name](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/after-renaming-action.png '#width=200px')
6. Execute the query, the renamed column will display in preview grid as follows.
   ![Data preview after rename action](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/preview-grid-data-after-rename-action.png '#width=450px')

## Exclude columns

To remove or avoid the unwanted columns from the query design after retrieving the data from data source, the `Exclude` option can be used.

> Excluding the columns from data table will not affect the actual data in the data source.

Follow the below steps to exclude and include a column in data table.

1. Exclude the column that you requisite, by clicking the icon at left corner of the respective column name.
   ![Exclude icon](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/exclude-icon.png '#width=200px')
2. The excluded column will be represented in table design like below.
   ![Exclude action representation](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/exclude-action-denotion.png '#width=200px')
3. Now, execute the query and notice that `SalesOrderID` column will be removed in the data preview.
   ![Data preview after column exclude action](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/preview-data-after-exclude-action.png '#width=450px')

You can also exclude all the columns in a single click, by clicking  on the icon at the table header.

![Exclude all columns](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/exclude-all-columns.png '#width=200px')

Clicking on the same icon again will include all the columns.

![Include all columns](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/select-all-columns.png '#width=200px')

> Minimum of one column must be in enabled state to create dataset.