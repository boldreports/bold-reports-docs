---
title: Create dataset parameters | Bold Reports | Report Designer
description: Create or edit dataset parameters in existing dataset with Bold Report Designer to filter data at runtime.
keywords: calculated fields, calculated fields ssrs, report-designer, ssrs calculated fields, ssrs, reporting
---

# Parameters

Parameters option can be used to create a new user defined parameter, edit values of existing parameters and delete parameters including query parameters that link to report parameters.

## Open dataset parameters dialog

Select a data in the `DATA` panel to which you want to add, edit or delete parameters.

![Dataset panel](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/dataset-list.png#width=540px)

> Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create a data in report designer.

Click on the above highlighted icon, the context menu will open with list of options.

![Dataset panel](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/context-menu.png#width=540px)

Then, click on the `Parameters...` option in the menu to open `Parameters` dialog.

![Parameters dialog](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/report-parameters-dialog.png#width=540px)

When you add a query variable to parameterize a dataset using the `@` symbol in the query when creating a dataset,

![Define parameter in query](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/add-query-parameter.png#width=540px)

A `Report Parameter` will be created automatically and it will be listed in the parameters panel and dataset parameters dialog.

![Report parameter](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/parameter-panel-list.png#width=540px)

Open `Parameters` dialog, the available parameters in the query will be listed in the parameters dialog like below,

![Report parameter](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/edit-parameters.png#width=540px)

If you import a shared dataset into the report, the list of available parameters in the shared dataset will be listed in the parameters dialog. You can modify the values for the parameters within the report scope, it does not affect the actual query in the shared dataset.

## Create parameter

1. To create a new parameter, click on the `ADD` button.
![Add parameter](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/report-parameters-dialog.png#width=540px)
2. **Parameter Name** : In the **Parameter Name** text box, provide the name for the parameter. The parameter name must be unique within the dataset.
3. **Value** : In **Value** field, provide the value for the parameter. The **Value** of a parameter can be a static value or an expression, but it cannot refer to any report items or fields.
![Create parameter](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/create-parameter.png#width=540px)

> The parameters which you create here will act as a `User Defined` parameter in the report, neither creates a query parameter nor affects existing query parameter.

## Edit parameter

Open `Parameters` dialog, the available parameters in the query will be listed in the parameters dialog like below,

![Report parameter](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/edit-parameters.png#width=540px)

You can edit the `Value` for parameter and click `OK`. By default, **Value** contains an expression that refers to a report parameter.

> You cannot edit the `Name` of the existing query parameter in the dataset using parameters dialog.

## Delete parameter

Click on the **Delete** icon in the right corner to remove the required parameters from the dataset.

![Remove parameters](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/delete-a-parameter.png#width=540px)

> If you delete a parameter from the dataset, it will not be automatically removed from `Report Parameter`. You need to remove it manually if needed.

## Reorder parameters

When executing a query or processing the report, the result will be retrieved from database based on the order of the parameter in the query.

The below snap depicts the parameter list before reordering the parameters.

![Before reordering the parameter](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/before-reordering.png#width=540px)

To change the order of the dataset parameters after creating it, follow the below steps.

1. Click and hold the icon in the left corner of **Parameter Name** field.
 ![Gripper icon to drag fields](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/gripper-icon-to-perform-drag-action.png#width=540px)
2. Then drag and move the dataset parameter field to higher or lower position in the list.
![Drag parameter field](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/drag-start-action.png#width=540px)
3. Drop the dataset parameter field in desired position.
![Drag action demo](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/drag-action-demo.png#width=540px)

The below snap depicts the parameter list after reordering the parameters.

![After reorder action](/static/assets/on-premise/images/report-designer/manage-data/dataset-parameters/after-reorder-action.png#width=540px)