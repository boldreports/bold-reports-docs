---
title: Create Calculated Fields in RDL Datasets | Bold Reports
description: Create calculated and query fields, set expressions, delete fields, and rename dataset fields in the Bold Reports Web Report Designer for your RDL reports.
keywords: calculated fields, calculated fields ssrs, report-designer, ssrs calculated fields, ssrs, reporting
---

# Create and edit dataset fields in Bold Reports<sup>®</sup>

The Fields option in the Bold Reports<sup>®</sup> Web Report Designer creates a new field when the required information is not directly available in the retrieved dataset. You can also change the column names of the existing fields in the dataset.

Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section to create data in the report designer first.

## How do I create a calculated field?

You create a calculated field from the `Fields` dialog of a dataset in the Bold Reports<sup>®</sup> Web Report Designer.

1. Select the data in the `DATA` panel to which you want to add fields.
   ![Data item menu icon](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/data-item-menu-icon.png '#width=385px')
2. Click the highlighted icon shown in the previous image. The context menu opens with a list of options.
   ![Data context menu](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/context-menu.png '#width=385px')
3. Click the `Fields...` option in the menu. The `Fields` dialog lists the available fields in the selected dataset.
   ![Open field dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/fields-dialog.png '#width=385px')
4. To create a new calculated field, click the `Add` button and choose `Calculated Field` in the menu.
   ![Add calculated field](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/type-of-fields-in-menu.png '#width=385px')
5. In the `Field Name` text box, type a unique name for the field.
   ![Calculated field name](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/calculated-field-name.png '#width=385px')
6. In the `Field Source` text box, enter the static value directly or set an [Expression](./../../../compose-report/filter-data/#set-expression) for the field. In this example, the `=Month(Fields!OrderYear.Value)` expression is assigned to the `OrderMonth` field.
   ![Set value for calculated fields](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/set-value-for-calculated-field.png '#width=385px')
7. Click the `OK` button. The newly added field is listed under the respective dataset.
   ![Field updated under dataset](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/add-field-list-view.png '#width=385px')

> The expression for a calculated field cannot contain aggregates and the field name must be unique in the dataset.

### How do I set an expression?

You set an expression for a calculated field from the square icon next to the field in the Web Report Designer `Fields` dialog. Follow steps 1 to 5 to create the calculated field first.

1. To edit or create an expression for the calculated field, click the square icon and select `Expression`.
   ![expression-icon-shown](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/expression-menu.png '#width=385px')
2. The `Expression Builder` opens.
   ![open-expression-dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/expression-builder.png '#width=385px')
   > To learn more about handling expressions in the report designer, refer to the [Expressions](./../../../compose-report/expressions/) section.
3. Provide the required expression and click the `OK` button.
   ![open-expression-dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/set-expression.png '#width=385px')
4. Check the icon color. The icon appears in `Black color` when the expression is applied to the dataset field.
   ![set-expression](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/set-expression-indication.png '#width=385px')

### How do I reset an expression?

You reset a calculated field expression from the same square icon in the Web Report Designer `Fields` dialog.

1. To reset an expression, click the square icon and select `Reset`.
   ![Select filter reset expression](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/reset-expression.png '#width=385px')
2. Check the icon color. The icon appears in `White color` after the reset action.
   ![After reset expression](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/reset-expression-indication.png '#width=385px')

## How do I create a query field?

You create a query field from the `Fields` dialog of a dataset in the Bold Reports<sup>®</sup> Web Report Designer. A query field takes its source from an existing field on the dataset.

1. Select the data in the `DATA` panel to which you want to add fields.
   ![Data item menu icon](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/data-item-menu-icon.png '#width=385px')
2. Click the highlighted icon shown in the previous image. The context menu opens with a list of options.
   ![Data context menu](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/context-menu.png '#width=385px')
3. Click the `Fields...` option in the menu. The `Fields` dialog lists the available fields in the selected dataset.
   ![Open field dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/fields-dialog.png '#width=385px')
4. To create a new query field, click the `Add` button and choose `Query Field` in the menu.
   ![Add query field](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/add-query-field.png '#width=385px')
5. In the `Field Name` text box, type a unique name for the field.
   ![query field name](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/query-field-name.png '#width=385px')
6. In the `Field Source` text box, enter the name of an existing field on the dataset.
   ![query field name](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/query-field-source.png '#width=385px')
7. Click the `OK` button. The newly added field is listed under the respective dataset.
   ![query field name](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/add-query-field-list-view.png '#width=385px')

## How do I delete a field?

You delete a dataset field in the Web Report Designer by clicking the **Delete** icon in the right corner of its row in the `Fields` dialog.

![Remove fields](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/delete-a-field.png '#width=385px')

## How do I change a field name?

You rename an existing dataset field in the `Fields` dialog of the Web Report Designer. When you open the dialog, it lists the available fields in the respective dataset.

![Field dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/fields-dialog.png '#width=385px')

To change an existing field name, modify the name in the first text box of the respective row and click the `OK` button.

![Field dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/change-column-name.png '#width=385px')

The field name is then updated in the dataset collection and in the list view.

![Field dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/change-column-name-list-view.png '#width=385px')

## Frequently asked questions

### Can a calculated field expression contain aggregates?

No. In the Bold Reports<sup>®</sup> Web Report Designer, the expression for a calculated field cannot contain aggregates, and the field name must be unique in the dataset.

### What is the difference between a calculated field and a query field?

A calculated field uses a static value or an expression as its source. A query field uses the name of an existing field on the dataset as its source.

## See also

* [Create an embedded dataset](./../create-an-embedded-dataset/)
* [Dataset parameters](./../dataset-parameters/)
* [Add a filter to a dataset](./../add-a-filter-to-a-dataset/)
