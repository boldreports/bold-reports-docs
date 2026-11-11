---
title: Manage Dataset Parameters in RDL Reports | {{site.productName}}
description: Create, edit, delete, and reorder dataset parameters in the {{site.productName}} Web Report Designer and link query parameters to report parameters in RDL reports.
keywords: calculated fields, calculated fields ssrs, report-designer, ssrs calculated fields, ssrs, reporting
---

# Manage dataset parameters in {{site.productNameTM}}

The Parameters option in the {{site.productNameTM}} Web Report Designer creates, edits, and deletes dataset parameters. These include query parameters that link to report parameters.

## How do I open the dataset parameters dialog?

You open the dataset `Parameters` dialog from the `DATA` panel of the {{site.productNameTM}} Web Report Designer.

1. Select the data in the `DATA` panel to which you want to add, edit, or delete parameters.

   ![Dataset panel](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/dataset-list.png '#width=355px')

   > Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section to create data in the report designer.

2. Click the highlighted icon shown in the previous image. The context menu opens with a list of options.

   ![Dataset panel](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/context-menu.png '#width=355px')

3. Click the `Parameters...` option in the menu to open the `Parameters` dialog.

   ![Parameters dialog](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/report-parameters-dialog.png '#width=355px')

## How are query parameters created?

The Web Report Designer creates a `Report Parameter` automatically when you add a query variable with the `@` symbol in the query while creating a dataset.

![Define parameter in query](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/add-query-parameter.png '#width=410px')

The new `Report Parameter` is listed in the parameters panel and in the dataset parameters dialog.

![Report parameter](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/parameter-panel-list.png '#width=355px')

When you open the `Parameters` dialog, it lists the available parameters in the query, as shown below.

![Report parameter](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/edit-parameters.png '#width=355px')

If you import a shared dataset into the report, the parameters dialog lists the available parameters in the shared dataset. You can modify the values for the parameters within the report scope. The change does not affect the actual query in the shared dataset.

## How do I create a parameter?

You create a dataset parameter with the `ADD` button in the Web Report Designer `Parameters` dialog.

1. To create a new parameter, click the `ADD` button.
   ![Add parameter](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/report-parameters-dialog.png '#width=355px')
2. **Parameter Name**: In the **Parameter Name** text box, provide the name for the parameter. The parameter name must be unique within the dataset.
3. **Value**: In the **Value** field, provide the value for the parameter. The **Value** of a parameter can be a static value or an expression, but it cannot refer to any report items or fields.
   ![Create parameter](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/create-parameter.png '#width=355px')

   > The parameters which you create here will act as a `User Defined` parameter in the report, neither creates a query parameter nor affects existing query parameter.

## How do I edit a parameter?

You edit a dataset parameter value in the Web Report Designer `Parameters` dialog, which lists the available parameters in the query.

![Report parameter](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/edit-parameters.png '#width=355px')

Edit the `Value` for the parameter and click `OK`. By default, **Value** contains an expression that refers to a report parameter.

> You cannot edit the `Name` of the existing query parameter in the dataset using parameters dialog.

## How do I delete a parameter?

You delete a dataset parameter in the Web Report Designer by clicking the **Delete** icon in the right corner of its row.

![Remove parameters](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/delete-a-parameter.png '#width=355px')

> If you delete a parameter from the dataset, it will not be automatically removed from `Report Parameter`. You need to remove it manually if needed.

## How do I reorder parameters?

{{site.productNameTM}} retrieves results from the database based on the order of the parameters in the query when it executes a query or processes the report. You can change that order in the `Parameters` dialog.

The following image shows the parameter list before reordering the parameters.

![Before reordering the parameter](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/before-reordering.png '#width=355px')

To change the order of the dataset parameters after creating them, follow these steps:

1. Click and hold the icon in the left corner of the **Parameter Name** field.
   ![Gripper icon to drag fields](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/gripper-icon-to-perform-drag-action.png '#width=410px')
2. Drag the dataset parameter field to a higher or lower position in the list.
   ![Drag parameter field](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/drag-start-action.png '#width=355px')
3. Drop the dataset parameter field in the desired position.
   ![Drag action demo](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/drag-action-demo.png '#width=355px')

The following image shows the parameter list after reordering the parameters.

![After reorder action](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/after-reorder-action.png '#width=355px')

## Frequently asked questions

### Does deleting a dataset parameter remove the report parameter?

No. If you delete a parameter from the dataset, {{site.productNameTM}} does not remove it from `Report Parameter` automatically. You need to remove it manually if needed.

### Can a dataset parameter value refer to report items or fields?

No. The **Value** of a parameter can be a static value or an expression, but it cannot refer to any report items or fields.

## See also

* [Create an embedded dataset](./../create-an-embedded-dataset/)
* [Dataset fields](./../dataset-fields/)
* [Link a shared dataset](https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/manage-data/dataset/link-a-shared-dataset/)
