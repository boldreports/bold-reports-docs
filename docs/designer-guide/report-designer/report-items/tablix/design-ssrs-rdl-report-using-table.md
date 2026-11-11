---
title: Design an SSRS RDL Report Using a Table | {{site.productName}}
description: Design an SSRS RDL report with a table in {{site.productName}} Web Report Designer. Add a table, assign data fields, set expressions and header text, and resize rows.
keywords: ejReportDesigner, reportdesigner, table, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Design an SSRS RDL report using a table in {{site.productNameTM}}

To design an SSRS RDL report that lists records in a table format, add a table report item in the {{site.productNameTM}} Web Report Designer and assign data fields. You can then set expressions and header text and resize rows and columns.

## Add a table to the report

You add a table in the {{site.productNameTM}} Web Report Designer by dragging it from the `Data Regions` category of the item panel.

1. Find the table report item in the item panel under the `Data Regions` category.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/item-panel-view.png '#width=195px')
2. Drag and drop the table report item into the design area from the item panel.
   ![Drag and drop tablix report item into design area](/static/images/report-designer/report-items/tablix/drag-and-drop-table.png '#width=355px')
3. Review the table properties, which are listed in the properties panel.
   ![Tablix item with properties view](/static/images/report-designer/report-items/tablix/table-item-with-properties-view.png '#width=600px')

## What does the initial table design look like?

A new `Table` in the {{site.productNameTM}} Web Report Designer renders with two rows and three columns in the design area after you drop it.

![Tablix renders with fixed number of row and colums](/static/images/report-designer/report-items/tablix/table-basic-view.png '#width=285px')

> Each cell in the table is a simple textbox. The cell in a list contains a rectangle. You can replace a default report item with a different report item.

## How do I assign data fields to the table?

You assign fields to a table in the {{site.productNameTM}} Web Report Designer in a few different ways:

* Drag and drop data fields from the `DATA` panel.
* Select the field from the data assign menu provided in each cell.
* Set expression using Multi-Text Run Editor Dialog.

### How do I drag and drop data fields?

You drag fields into table cells from the `DATA` panel of the Web Report Designer.

1. Open the `DATA` panel and expand the required dataset.
   ![Data category](/static/images/report-designer/report-items/tablix/data-list-view.png '#width=355px')
2. Drag a field from the list and drop it into the required cell.
   ![Data category](/static/images/report-designer/report-items/tablix/drag-and-drop-field-into-cell.png '#width=355px')

### How do I assign fields using the data assign menu?

You assign a field from the data assign menu that each table cell provides in the Web Report Designer.

1. Select the table cell and click the `Data assign` menu icon to open the data assign menu.
   ![Data assign menu](/static/images/report-designer/report-items/tablix/data-assign-menu-icon.png '#width=355px')
2. Click the required data field name in the menu.
   ![Data assign menu](/static/images/report-designer/report-items/tablix/open-data-assign-menu.png '#width=355px')

   > The fields of the dataset assigned to the `Dataset` property of the table are listed in the menu.
3. Check that the field is assigned to the respective cell, as shown in the following image.
   ![Data assign menu](/static/images/report-designer/report-items/tablix/assign-field-in-table-cell-output.png '#width=355px')

### Set expression using data assign menu

You set an expression in a table cell with the `Add Expression` option of the Web Report Designer data assign menu.

1. Select the table cell and click the `Data assign` menu icon to open the data assign menu.
   ![Open Data assign menu](/static/images/report-designer/report-items/tablix/open-add-expression-menu.png '#width=345px')
2. Click the `Add Expression` option from the menu. The `Expression Editor` dialog opens.
   ![Expression Editor](/static/images/report-designer/report-items/tablix/empty-expression-editor.png '#width=615px')
3. Set the Expression in the Expression editor and click `OK`.
   ![Expression Editor](/static/images/report-designer/report-items/tablix/sales-expression-editor.png '#width=615px')
4. Click `OK` to assign the added expression to the respective tablix cell.
   ![Tablix](/static/images/report-designer/report-items/tablix/assign-field-in-text-editor-output.png '#width=355px')

### Set header text using data assign menu

You set header text in a table cell with the `Add Text` option of the Web Report Designer data assign menu.

1. Select the table cell and click the `Data assign` menu icon to open the data assign menu.
   ![Open Data assign menu](/static/images/report-designer/report-items/tablix/open-add-text-menu.png '#width=345px')
2. Click the `Add Text` option in the menu. The `Multi-Text Run Editor Dialog` opens, as shown in the following image.
   ![Multi-Text Run editor dialog](/static/images/report-designer/report-items/tablix/text-editor-dialog/text-editor-dialog.png '#width=615px')
3. Enter the desired header text in the text editor area and click the `Save` button.
   ![Multi-Text Run editor dialog](/static/images/report-designer/report-items/tablix/text-editor-dialog/enter-text-in-text-editor-dialog.png '#width=615px')
4. Check that the text is displayed in the respective cell, as shown in the following image.
   ![Tablix](/static/images/report-designer/report-items/tablix/enter-text-in-text-editor-dialog-output.png '#width=355px')

## How do I resize a column?

You resize a table column in the {{site.productNameTM}} Web Report Designer by dragging the column gripper. Resizing the table row height and column width improves report readability.

1. Place the mouse pointer on the respective column border.
   ![Resize the table column](/static/images/report-designer/report-items/tablix/resize-column.png '#width=355px')
2. Drag the column gripper horizontally to adjust the column width.
   ![Adjust column width of the table](/static/images/report-designer/report-items/tablix/resize-column-ouput.png '#width=355px')

## How do I resize a row?

You resize a table row in the {{site.productNameTM}} Web Report Designer by dragging the row gripper.

1. Place the mouse pointer on the respective row border.
   ![Resize the table row](/static/images/report-designer/report-items/tablix/resize-row.png '#width=355px')
2. Drag the row gripper vertically to adjust the row height.
   ![Adjust row height of the table](/static/images/report-designer/report-items/tablix/resize-row-ouput.png '#width=355px')

## What does the final design look like?

A simple table design in the {{site.productNameTM}} Web Report Designer looks like the following image.

![Adjust row height of the table](/static/images/report-designer/report-items/tablix/simple-table-design.png '#width=355px')

> Download the [table report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/design-ssrs-rdl-report-using-table.rdl).

## Frequently asked questions

### How many rows and columns does a new table have?

A new `Table` renders with two rows and three columns in the design area.

### What report item does each table cell contain?

Each cell in the table is a simple textbox, which you can replace with a different report item.

## See also

* [Assign data to a tablix data region](./../../../report-items/tablix/assign-data-to-tablix-data-region/)
* [Tablix cell properties](./../../../report-items/tablix/cell-properties/)
* [Resize a tablix data region](./../../../report-items/tablix/resize-tablix-data-region/)
