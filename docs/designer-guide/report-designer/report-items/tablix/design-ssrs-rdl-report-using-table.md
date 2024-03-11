---
title: Design ssrs rdl report using table | Web Report Designer
description: Design ssrs rdl report using table, to display a list of records in the table format in Web Report Designer.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Design ssrs rdl report using table

The following steps guides you to design ssrs rdl report using table.

## Add a table to the report

1. The table report item is listed in the item panel under the `Data Regions` category.
   ![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix/item-panel-view.png '#width=195px')
2. Drag and drop the table report item into the design area from the item panel.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/tablix/drag-and-drop-table.png '#width=355px')
3. Respective table properties will be listed in the properties panel.
   ![Tablix item with properties view](/static/assets/on-premise/images/report-designer/report-items/tablix/table-item-with-properties-view.png '#width=600px')

## Initial design

Once you drop the table item, the `Table` renders with two rows and three columns in the design area.

![Tablix renders with fixed number of row and colums](/static/assets/on-premise/images/report-designer/report-items/tablix/table-basic-view.png '#width=285px')

> Each cell in the table is nothing but a simple textbox. The cell in a list contains a rectangle. You can replace a default report item with a different report item.

## Assign data fields

There are a few different ways to assign the fields into a table:

* Drag and drop data fields from the `DATA` panel.
* Select the field from the data assign menu provided in each cell.
* Go to the textbox’s properties and assign field in `Content` property.

### Drag and drop data fields

1. Open the `DATA` panel and expand the required dataset.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/data-list-view.png '#width=385px')
2. Drag a field from the list and drop into a required cell.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/drag-and-drop-field-into-cell.png '#width=385px')

### Assign fields using data assign menu

1. Select the table cell and click on the `Data assign` menu icon to open data assign menu.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/data-assign-menu-icon.png '#width=355px')
2. Click on the required data field name in the menu.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/open-data-assign-menu.png '#width=355px')

   > The fields of the dataset which is assigned to `Dataset` property of table will be listed in the menu.
3. Now, the respective field will be assigned to the respective cell like below.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-field-in-table-cell-output.png '#width=315px')

### Textbox properties

1. Select a cell in the table, now the respective textbox properties will be listed in the properties panel.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/selected-cell-properties.png '#width=600px')
2. In the `Content` property, type the value or set the data field using the expression editor.
   > Refer [Set expression](./../../../compose-report/properties-panel/#set-expression) section to open expression menu and to set expression.
3. Here, the `=Fields!Sales.Value` expression is entered in the content property field to assign `Sales` data field into the respective cell.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/enter-field-value-in-content-property.png '#width=355px')
4. Now, the `Sales` field will be denoted in the respective cell like below.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-field-in-content-property-output.png '#width=355px')

## Set header text

You can provide the header text for each column of the table in two ways:

### Using data assign menu

1. Select the table cell and click on the `Data assign` menu icon to open data assign menu.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/open-add-text-menu.png '#width=345px')
2. Click on `Add Text` option in the menu. Now, an `Add Text` dialog will be opened like below.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/add-text-dialog.png '#width=355px')
3. Enter the header text in the textarea and click on the `Add` button.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/enter-text-in-add-text-dialog.png '#width=355px')
4. Now, the text will be displayed in the respective cell like below.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/enter-text-in-add-text-dialog-output.png '#width=355px')

### Set text in content property

1. Select a cell in the table, now the respective textbox properties will be listed in the properties panel.
2. In the `Content` property, type the header text in the content property textbox and press `Enter`.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/enter-text-in-content-field.png '#width=355px')
3. Now, the text will be displayed in the respective cell like below.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/enter-text-in-content-property-output.png '#width=355px')

## Resize the column

To improve the report readability, we can resize the table row height and column width.

1. Place the mouse pointer in the respective column border.
   ![Resize the table column](/static/assets/on-premise/images/report-designer/report-items/tablix/resize-column.png '#width=355px')
2. Drag the column gripper horizontally, to adjust the column width.
   ![Adjust column width of the table](/static/assets/on-premise/images/report-designer/report-items/tablix/resize-column-ouput.png '#width=355px')

## Resize the row

1. Place the mouse pointer in the respective row border.
   ![Resize the table row](/static/assets/on-premise/images/report-designer/report-items/tablix/resize-row.png '#width=355px')
2. Drag the row gripper vertically, to adjust the row height.
   ![Adjust row height of the table](/static/assets/on-premise/images/report-designer/report-items/tablix/resize-row-ouput.png '#width=355px')

## Final design

A simple table design will look like below.

![Adjust row height of the table](/static/assets/on-premise/images/report-designer/report-items/tablix/simple-table-design.png '#width=355px')

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/design-ssrs-rdl-report-using-table.rdl).