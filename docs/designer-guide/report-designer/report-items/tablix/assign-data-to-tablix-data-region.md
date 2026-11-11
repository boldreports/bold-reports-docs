---
title: Assign Data and Expressions to a Tablix | {{site.productName}}
description: Assign a dataset, fields, and expressions to a tablix data region in {{site.productName}} Web Report Designer via the data assign menu, DATA panel, or properties panel.
keywords: ejReportDesigner, reportdesigner, table, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Assign data to a tablix data region in {{site.productNameTM}}

In the {{site.productNameTM}} Web Report Designer, the table, matrix, and list report items can display data from a single dataset. You can also assign conditional expressions to filter or sort the dataset columns.

## How do I assign a dataset to a tablix?

You assign a dataset to a tablix in the {{site.productNameTM}} Web Report Designer in one of two ways:

* Assign dataset from data assign menu.
* Assign dataset in `Dataset` property of tablix.

### How do I assign a dataset from the data assign menu?

You assign a dataset from the data assign menu of any tablix cell in the Web Report Designer.

1. Select any cell in the tablix data region, then click the `Data Assign` menu icon to open the data assign menu. If the report does not have a dataset, the data assign menu has the following options.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/data-assign-menu-without-dataset.png '#width=285px')

   > Click the `Add Datasource` option in the menu and add a dataset using the steps provided in the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section.
2. Review the fields. By default, the menu displays the fields of the first dataset in the report.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/open-menu-to-choose-dataset.png '#width=285px')
3. Choose the desired dataset in the first dropdown, which lists the available datasets in the report, to assign a different dataset.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/dataset-drop-down-view-in-menu.png '#width=285px')
4. Check that the fields of the selected dataset are listed in the data assign menu, as shown in the following image.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-desired-dataset-using-dropdown-in-menu.png '#width=285px')

### Assign dataset from properties panel

You assign a dataset from the `Dataset` property of the tablix in the Web Report Designer properties panel.

1. Select the tablix report item in the design area. The tablix properties are listed in the properties panel.
   ![Tablix item with properties view](/static/assets/on-premise/images/report-designer/report-items/tablix/table-item-with-properties-view.png '#width=615px')
2. Choose the desired dataset from the `Dataset` property drop-down, which lists the available datasets in the report.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-dataset-in-properties-panel.png '#width=285px')
3. Check that the fields of the selected dataset are listed in the data assign menu, as shown in the following image.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/fields-listed-in-data-assign-menu.png '#width=285px')

## How do I assign fields to a tablix cell?

You assign fields to a tablix cell in the {{site.productNameTM}} Web Report Designer in a few different ways:

* Drag and drop data fields from the `DATA` panel.
* Select the field from the data assign menu provided in each cell.

### How do I drag and drop data fields?

You drag fields into tablix cells from the `DATA` panel of the Web Report Designer.

1. Open the `DATA` panel and expand the required dataset.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/data-list-view.png '#width=385px')
2. Drag a field from the list and drop it into the required cell.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/drag-and-drop-field-into-cell.png '#width=385px')

### Assign fields using data assign menu

You assign a field from the data assign menu that each tablix cell provides in the Web Report Designer.

1. Select the tablix cell and click the `Data assign` menu icon to open the data assign menu.
   ![Data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/data-assign-menu-icon.png '#width=315px')
2. Click the required data field name in the menu.
   ![Data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/open-data-assign-menu.png '#width=355px')

   > The fields of the dataset assigned to the `Dataset` property of the tablix are listed in the menu.
3. Check that the field is assigned to the respective cell, as shown in the following image.
   ![Data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-field-in-table-cell-output.png '#width=285px')

## Assign or edit expression into table cell

You assign or edit an expression in a tablix cell in the {{site.productNameTM}} Web Report Designer in two ways:

* Set expression using the `Add Expression` and modify them using the `Edit Expression` option in the Data Assign menu.
* Set or edit expression using Multi-Text Run Editor Dialog.

### How do I set an expression using the data assign menu?

The Data Assign Menu is recommended when you want to quickly assign a single TextRun expression to a tablix cell. It provides a direct way to open the Expression Editor.

1. Select a tablix cell and click the `Data Assign` menu icon to open the Data Assign menu.
   ![Add Expression option in data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/add-expression-option-data-assign-menu.png '#width=355px')
2. Click the `Add Expression` option in the data assign menu. The `Expression` builder opens, as shown in the following image.
   ![Add Expression option in data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/empty-expression-editor.png '#width=615px')

   > To learn more about working with expressions in the Web Report Designer, refer to the [Expressions](./../../../compose-report/expressions/) section.
3. Set the Expression in the Expression editor.
   ![Expression Editor](/static/assets/on-premise/images/report-designer/report-items/tablix/sales-expression-editor.png '#width=615px')
4. Click `OK` to assign the added expression to the respective tablix cell.
   ![Tablix Item](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-field-in-text-editor-output.png '#width=315px')

### Set expression using Multi-Text Run Editor Dialog

The Multi‑Text Run Editor Dialog is ideal when you need to manage multiple TextRuns within the same tablix cell. In this dialog, you can combine static text and expressions for complex formatting or mixed content.

1. Select the tablix cell and click the `Text Editor` icon to open the Multi-Text Run Editor Dialog.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-icon.png '#width=315px')
2. Review the `Multi-Text Run Editor` Dialog that opens, which lets you add and manage expressions within the cell.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/text-editor-dialog.png '#width=615px')
3. Right-click within the editor area to open the context menu.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/context-menu-in-text-editor.png '#width=615px')
4. From the context menu, click the `Expression` option to open the `Expression Editor`.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/empty-expression-editor.png '#width=615px')
5. Set the Expression in the Expression editor and click `OK`.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sales-expression-editor.png '#width=615px')
6. Check that the `[Sales]` expression appears in the `Multi-Text Run Editor` Dialog.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/sales-text-editor.png '#width=615px')
7. Click `Save` to assign the added expression to the respective tablix cell.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-field-in-text-editor-output.png '#width=315px')

You can specify dataset fields, parameters, or built-in functions in the `Expression Editor`, then click `OK`.
The label shown in the table cell varies based on the values assigned to the table cell. The following image shows the label text variations.
![Label text variation](/static/assets/on-premise/images/report-designer/report-items/tablix/text-representation-in-cell.png '#width=385px')

### Edit expression using data assign menu

You edit a single expression in a tablix cell with the `Edit Expression` option of the Web Report Designer data assign menu.

1. Select the table cell whose expression you want to edit and click the `Data assign` menu icon to open the data assign menu.
   ![Edit expression option in data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/edit-expression-option-in-data-assign-menu.png '#width=355px')
2. Click the `Edit Expression` option in the data assign menu. The `Expression` builder opens, as shown in the following image.
   ![Expression Editor](/static/assets/on-premise/images/report-designer/report-items/tablix/sales-expression-editor.png '#width=615px')
3. Modify the expression as required and click the `OK` button.

### Edit expression using Multi-Text Run Editor Dialog

You edit an existing expression in the Multi-Text Run Editor Dialog of the Web Report Designer through its context menu.

1. Select the tablix cell and click the `Text Editor` icon to open the Multi-Text Run Editor Dialog.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-icon-in-sales-tablix-cell.png '#width=315px')
2. Review the `Multi-Text Run Editor` dialog that appears, which lets you modify the existing Expression.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/sales-text-editor.png '#width=615px')
3. Right-click within the expression context to edit the Expression.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/context-menu-in-sales-text-editor.png '#width=615px')
4. From the context menu, click the `Expression` option to open the `Expression Editor`.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sales-expression-editor.png '#width=615px')
5. Update the Expression in the `Expression editor` and click `OK`.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sum-sales-expression-editor.png '#width=615px')
6. Check that the `[Sum(Sales)]` expression is updated in the Multi-Text Run Editor dialog.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/sum-sales-text-editor.png '#width=615px')
7. Click `Save` to assign the modified expression to the respective tablix cell.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sum-of-sales-in-tablix-cell.png '#width=315px')

## Tablix Cell Editors

Each tablix cell in the {{site.productNameTM}} Web Report Designer provides flexible editing options to manage text and expressions. These options simplify report design with quick access to text entry or expression assignment.

1. **Text Editor icon**: Opens the Multi-Text Run Editor dialog.
2. **Data Assign Menu icon**: Opens a menu with options to add text or expression.

![Tablix cell icons](/static/assets/on-premise/images/report-designer/report-items/tablix/tablix-cell-icons.png '#width=385px')

### Text Editor Icon

The Text Editor icon in a tablix cell works as follows:

1. Opens the `Multi-Text Run Editor` dialog to enter static text or expressions.
2. Right-click inside the editor and select Expression from the context menu to open the Expression Editor.
3. Supports adding a single TextRun or multiple TextRuns.

### Data Assign Menu Icon

The Data Assign Menu provides the following options:
1. **Add Text**: Opens the `Multi-TextRun Editor` dialog to enter static text or expressions.
2. **Add Expression**: Opens the `Expression Editor` directly. This option allows adding only a single TextRun, enabling faster report creation.

The options shown in the `Data Assign Menu` depend on the current state of the tablix cell:

| Cell State                                    | Menu Options Displayed     |
|-----------------------------------------------|----------------------------|
| Empty cell (no TextRuns)                      | Add Expression, Add Text   |
| Single TextRun (static text)                  | Add Expression, Edit Text  |
| Single TextRun (expression)                   | Edit Expression, Edit Text |
| Multiple TextRuns                             | Edit Text                  |

### What happens when I double-click a tablix cell?

Double-clicking a tablix cell in the Web Report Designer provides a shortcut to open the appropriate editor:

| Cell State                                    | Double-Click Action        |
|-----------------------------------------------|----------------------------|
| Empty cell (no TextRuns)                      | Opens Multi TextRun Editor |
| Single TextRun (static text)                  | Opens Multi TextRun Editor |
| Single TextRun (expression)                   | Opens Expression Editor    |
| Multiple TextRuns                             | Opens Multi TextRun Editor |

## Frequently asked questions

### How many datasets can a tablix display?

The table, matrix, and list report items can display data from a single dataset.

### When should I use the Multi-Text Run Editor Dialog?

Use the Multi-Text Run Editor Dialog when you need to manage multiple TextRuns within the same tablix cell or combine static text and expressions.

## See also

* [Design an SSRS RDL report using a table](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/)
* [Design a table with multiple text runs](./../../../report-items/tablix/design-ssrs-rdl-report-using-table-with-multi-text-run/)
* [Expressions](./../../../compose-report/expressions/)
