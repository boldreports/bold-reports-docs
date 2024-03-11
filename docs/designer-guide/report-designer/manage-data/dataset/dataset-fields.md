---
title: Create dataset fields | Bold Reports | Report Designer
description: Create dataset fields in existing dataset with Bold Report Designer to create new values that do not exist in the data source.
keywords: calculated fields, calculated fields ssrs, report-designer, ssrs calculated fields, ssrs, reporting
---

# Fields

Fields options can be used to create a new field when a required information is not directly available in the retrieved dataset. It will also allows you to change the column names of the existing fields in the dataset.

Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create a data in report designer.

## Create calculated field

1. Select a data in the `DATA` panel to which you want to add fields.
   ![Data item menu icon](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/data-item-menu-icon.png '#width=385px')
2. Click on the above highlighted icon, the context menu will open with list of options.
   ![Data context menu](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/context-menu.png '#width=385px')
3. Then, click on the `Fields...` option in the menu. Now, the available fields in the selected dataset will be listed in the `Fields` dialog as shown below.
   ![Open field dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/fields-dialog.png '#width=385px')
4. To create a new calculated field, click on the `Add` button and choose `Calculated Field` in the menu.
   ![Add calculated field](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/type-of-fields-in-menu.png '#width=385px')
5. In the `Field Name` text box, type the unique name for the field.
   ![Calculated field name](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/calculated-field-name.png '#width=385px')
6. In the `Field Source` text box, enter the static value directly or set an [Expression](./../../../compose-report/filter-data/#set-expression) for the field. Here, `=Month(Fields!OrderYear.Value)` expression is assigned to the `OrderMonth` field.
   ![Set value for calculated fields](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/set-value-for-calculated-field.png '#width=385px')
7. Now, click on the `OK` button and the newly added field will be listed under the respective dataset.
   ![Field updated under dataset](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/add-field-list-view.png '#width=385px')

> The expression for a calculated field cannot contain aggregates and the field name must be unique in the dataset.

### Set expression

Follow steps 1 - 5, to create calculated field.

1. To edit/create an expression of the calculated field, click on the square icon and select `Expression`.
   ![expression-icon-shown](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/expression-menu.png '#width=385px')
2. `Expression Builder` will be open as shown below.
   ![open-expression-dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/expression-builder.png '#width=385px')
   > To learn more about handling expressions in report designer refer [Expressions](./../../../compose-report/expressions/) section.
3. Provide the required expression and click on `OK` button.
   ![open-expression-dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/set-expression.png '#width=385px')
4. The icon will be indicated in `Black color`, if the expression is applied to the dataset field.
   ![set-expression](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/set-expression-indication.png '#width=385px')

### Reset Expression

1. To reset an expression, click on the square icon and select `Reset`.
   ![Select filter reset expression](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/reset-expression.png '#width=385px')
2. The icon will be indicated in `White color`, after reset action.
   ![After reset expression](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/reset-expression-indication.png '#width=385px')

## Create query field

1. Select a data in the `DATA` panel to which you want to add fields.
   ![Data item menu icon](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/data-item-menu-icon.png '#width=385px')
2. Click on the above highlighted icon, the context menu will open with list of options.
   ![Data context menu](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/context-menu.png '#width=385px')
3. Then, click on the `Fields...` option in the menu. Now, the available fields in the selected dataset will be listed in the `Fields` dialog as shown below.
   ![Open field dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/fields-dialog.png '#width=385px')
4. To create a new query field, click on the `Add` button and choose `Query Field` in the menu.
   ![Add query field](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/add-query-field.png '#width=385px')
5. In the `Field Name` text box, type the unique name for the field.
   ![query field name](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/query-field-name.png '#width=385px')
6. In the `Field Source` text box, enter the name of an existing field on the data set.
   ![query field name](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/query-field-source.png '#width=385px')
7. Now, click on the `OK` button and the newly added field will be listed under the respective dataset.
   ![query field name](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/add-query-field-list-view.png '#width=385px')

## Delete field

Click on the **Delete** icon in the right corner to remove the required fields from the dataset.

![Remove fields](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/delete-a-field.png '#width=385px')

## Change field name

When you open the fields dialog, the available fields in the respective dataset will be listed in the `Fields` dialog as shown below.

![Field dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/fields-dialog.png '#width=385px')

To change the existing field name, modify the name in first textbox of the respective row and click on the `OK` button.

![Field dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/change-column-name.png '#width=385px')

Now, the respective field name will be updated in the dataset collection and in the list view.

![Field dialog](/static/assets/on-premise/images/report-designer/manage-data/add-dataset-field/change-column-name-list-view.png '#width=385px')
