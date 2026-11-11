---
title: Rename, Exclude, and Search Dataset Columns | Bold Reports
description: Rename, exclude, and include data table columns in the Bold Reports Web Report Designer query designer to organize a dataset for your report design.
keywords: format columns,dataset table, report-designer, ssrs filters, ssrs, reporting
---

# Formatting columns in the query designer

In the Bold Reports<sup>®</sup> Web Report Designer query designer, you can rename, exclude, and include data table columns to match your dataset design.

Prefer watching over reading? Watch this video on formatting columns:

`youtube: https://www.youtube.com/watch?v=HSpWBV56Z0k`

## What do I need before I format columns?

You format columns in the Web Report Designer query designer while you create a dataset. To follow the steps below, first read the [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/) section.

The following image shows the initial view of the query designer.

![Query Designer initial state](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/query-designer-initial-view.png)

## How do I rename a column?

You can rename data table columns in the Web Report Designer query designer after you retrieve the data from the data source.

> The column rename action will not affect the actual data in the data source.

Follow these steps to rename a column in the data table:

1. Drag a table or view from the left pane and drop it into the center pane labeled `Drag and Drop tables here`, as in the following image.
   ![Drag and drop table into design area](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/drag-and-drop-a-table.png)
2. Execute the query. The data displays in the preview grid as follows.
   ![Data preview before rename action](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/preview-grid-data-before-rename-action.png '#width=450px')
3. Double-click the column name in the table to rename that column.
   ![Enable the column edit mode](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/double-click-on-column-name.png '#width=200px')
4. Edit mode is enabled, as in the following image.
   ![Column name edit mode](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/column-name-edit-mode.png '#width=200px')
5. Modify the column name and press the Enter key to commit the change.
   ![Modify the column name](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/after-renaming-action.png '#width=200px')
6. Execute the query. The renamed column displays in the preview grid as follows.
   ![Data preview after rename action](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/preview-grid-data-after-rename-action.png '#width=450px')

## How do I exclude columns?

The `Exclude` option in the Web Report Designer query designer removes unwanted columns from the query design after you retrieve the data from the data source.

> Excluding the columns from data table will not affect the actual data in the data source.

Follow these steps to exclude and include a column in the data table:

1. Exclude the column you want by clicking the icon at the left corner of its column name.
   ![Exclude icon](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/exclude-icon.png '#width=200px')
2. The table design marks the excluded column, as in the following image.
   ![Exclude action representation](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/exclude-action-denotion.png '#width=200px')
3. Execute the query. The `SalesOrderID` column is removed from the data preview.
   ![Data preview after column exclude action](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/preview-data-after-exclude-action.png '#width=450px')

You can also exclude all the columns in a single click by clicking the icon in the table header.

![Exclude all columns](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/exclude-all-columns.png '#width=200px')

Clicking the same icon again includes all the columns.

![Include all columns](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/select-all-columns.png '#width=200px')

> Minimum of one column must be in enabled state to create dataset.

## How do I search columns?

The column search option in the Web Report Designer query designer lets you locate fields by name quickly, especially in large tables.

* The search bar is enabled for tables with more than 14 columns.
   ![Table search enabled](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/search-enabled-table.png '#width=200px')
* Enter a field name to list the matching fields.
   ![Search column field](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/search-column-field.png '#width=200px')
* Click the clear icon to reset the search.  
   ![Table search clear](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/clear-search.png '#width=200px')
* After you click the clear icon, all the table fields are restored.
   ![Display all columns](/static/assets/on-premise/images/report-designer/transforming-data/formatting-columns/display-all-column-fields.png '#width=200px')

## Frequently asked questions

### Does renaming or excluding a column change my source data?

No. Renaming or excluding columns in the query designer does not affect the actual data in the data source.

### When does the column search bar appear?

The search bar is enabled for tables with more than 14 columns.

### Can I exclude every column?

No. At least one column must be in the enabled state to create a dataset.

## See also

* [Configure expression columns](./../../transforming-data/configure-expression-columns/)
* [Query filter](./../../transforming-data/query-filter/)
* [Join tables](./../../transforming-data/join-table/)
