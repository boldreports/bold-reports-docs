---
title: Assign data to tablix data region | Web Report Designer
description: This section explains steps to assign dataset to the tablix data region to display data from the dataset in the tablix data region in Web Report Designer.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Assign data to tablix data region

The table, matrix and list report items can display data from a single dataset. You can also assign conditional expressions to filter or sort the dataset columns.

## Assign dataset

There are two ways to assign the dataset to the tablix:

* Assign dataset from data assign menu
* Assign dataset in `Dataset` property of tablix

### Assign data from data assign menu

1. Select any cell in the tablix data region. Click on the `Data assign` menu icon to open data assign menu. If the report has no dataset, then the data assign menu will have following options.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/data-assign-menu-without-dataset.png '#width=285px')

   > Click on the `Add Datasource` option in the menu and add dataset using the steps provided in [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section.
2. By default, the menu displays the fields of the first dataset in the report.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/open-menu-to-choose-dataset.png '#width=355px')
3. The available datasets in the report will be listed in the first dropdown. To assign different dataset, choose desired dataset in the dropdown.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/dataset-drop-down-view-in-menu.png '#width=355px')
4. Now, the fields of selected dataset will be listed in the data assign menu like below.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-desired-dataset-using-dropdown-in-menu.png '#width=355px')

### Assign data from properties panel

1. Select the tablix report item in design area, now the respective tablix properties will be listed in the properties panel.
   ![Tablix item with properties view](/static/assets/on-premise/images/report-designer/report-items/tablix/table-item-with-properties-view.png '#width=410px')
2. The available datasets in the report will be listed in the `Dataset` property dropdown. You can choose the desired dataset from the drop-down.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-dataset-in-properties-panel.png '#width=315px')
3. Now, the fields of selected dataset will be listed in the data assign menu like below.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/fields-listed-in-data-assign-menu.png '#width=355px')

## Assign fields to tablix cell

There are a few different ways to assign the fields into a tablix cell:

* Drag and drop data fields from the `DATA` panel.
* Select the field from the data assign menu provided in each cell.
* Go to the textbox’s properties and assign field in `Content` property.

### Drag and drop data fields

1. Open the `DATA` panel and expand the required dataset.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/data-list-view.png '#width=385px')
2. Drag a field from the list and drop into a required cell.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/drag-and-drop-field-into-cell.png '#width=385px')

### Assign fields using data assign menu

1. Select the tablix cell and click on the `Data assign` menu icon to open data assign menu.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/data-assign-menu-icon.png '#width=315px')
2. Click on the required data field name in the menu.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/open-data-assign-menu.png '#width=355px')

   > The fields of the dataset which is assigned to `Dataset` property of tablix will be listed in the menu.
3. Now, the respective field will be assigned to the respective cell like below.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-field-in-table-cell-output.png '#width=285px')

### Textbox properties

1. Select a cell in the tablix, now the respective textbox properties will be listed in the properties panel.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/selected-cell-properties.png '#width=425px')
2. In the `Content` property, type the value or set the data field using the expression editor.
   > Refer [Set expression](./../../../compose-report/properties-panel/#set-expression) section to open expression menu and to set expression.
3. Here, the `=Fields!Sales.Value` expression is entered in the content property field to assign `Sales` data field into the respective cell.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/enter-field-value-in-content-property.png '#width=315px')
4. Now, the `Sales` field will be denoted in the respective cell like below.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-field-in-content-property-output.png '#width=315px')

## Assign or edit expression into table cell

There are two ways to assign or edit the expression into a tablix cell:

* Set expression using the `Add Expression` and edit expression using the `Edit Expression` option in data assign menu
* Set or edit expression in `Content` property of a cell in properties panel

### Set expression using data assign menu

1. Select a table cell and click on the `Data assign` menu icon to open data assign menu.
   ![Add Expression option in data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/add-expression-option-data-assign-menu.png '#width=355px')
2. Click the `Add Expression` option in the data assign menu. Now, the `Expression` builder will be launched like below.
   ![Add Expression option in data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/expression-builder-for-add-expression-menu.png '#width=425px')

   > To learn more about handling expressions in report designer refer [Expressions](./../../../compose-report/expressions/) section.
3. You can specify dataset fields, parameters or any other built-in functions and click on the `OK` button.
4. The label denoted in the table cell varies based on the assigned values in table cell. The following snap depicts the label text variations.
   ![Label text variation](/static/assets/on-premise/images/report-designer/report-items/tablix/text-representation-in-cell.png '#width=385px')

### Set expression in properties panel

1. Select a cell in the tablix, now the respective textbox properties will be listed in the properties panel.
2. Click on the square icon in the right corner of the `Content` property.
   ![Label text variation](/static/assets/on-premise/images/report-designer/report-items/tablix/open-expression-menu-for-content-property.png '#width=355px')
3. Click on the `Expression` option in the menu. Now, the `Expression` builder will be launched like below.
   ![Add Expression option in data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/expression-builder-for-add-expression-menu.png '#width=425px')
4. You can specify dataset fields, parameters or any other built-in functions and click on the `OK` button.
5. The label denoted in the table cell varies based on the assigned values in table cell. The following snap depicts the label text variation.
   ![Label text variation](/static/assets/on-premise/images/report-designer/report-items/tablix/text-representation-in-cell.png '#width=355px')

### Edit expression using data assign menu

1. Select a table cell in which you need to edit the expression and click on the `Data assign` menu icon to open data assign menu.
   ![Edit expression option in data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/edit-expression-option-in-data-assign-menu.png '#width=355px')
2. Click the `Edit Expression` option in the data assign menu. Now, the `Expression` builder will be launched like below.
   ![Label text variation](/static/assets/on-premise/images/report-designer/report-items/tablix/edit-expression-in-expression-builder.png '#width=415px')
3. Modify the expression as required and click on the `OK` button.

### Edit expression in properties panel

1. Select a table cell, now the respective textbox properties will be listed in the properties panel.
2. Click on the square icon in the right corner of the `Content` property.
   ![Edit expression in properties panel](/static/assets/on-premise/images/report-designer/report-items/tablix/edit-expression-option-in-properties-panel.png '#width=315px')
3. Click on the `Expression` option in the menu. Now, the `Expression` builder will be launched like below.
   ![Label text variation](/static/assets/on-premise/images/report-designer/report-items/tablix/edit-expression-in-expression-builder.png '#width=385px')
4. Modify the expression as required and click on the `OK` button. Now, the expression will be updated for respective cell.