---
title: Create or link a dataset parameters in query designer
description: Create new dataset parameters or link a dataset parameter with a report parameter on dataset create/edit action in Bold Report Designer
---

# Create or link dataset parameters

A dataset parameters are created based on the query parameters provided in the dataset query and also, an equivalent report parameters are created for each query variable. The linking between a dataset parameter and a report parameter will take place automatically. But, if a report parameter is renamed then we need to perform the link action manually.

Refer [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/) section for better understanding with the following sections. The below image showcases the initial view of query designer.
![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/query-designer-initial-view.png)

## Open parameters dialog

Drag and drop a table into design area. Now, click on the **Parameter** icon in the query designer toolbar.

![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/query-parameter-icon.png)

Now, the `Parameters` dialog will be launched.

![Parameter dialog](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/query-parameter-dialog.png '#width=400px')

## Create a new dataset parameter

1. To add a new dataset parameter, click on the `Add` icon.
   ![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/add-parameter.png '#width=400px')
2. **Parameter Name**: In the **Parameter Name** text box, provide the name for the parameter.
3. **Value**: In **Value** field, provide the value in the `=Parameters!SalesOrderID.Value` format.
4. Click `OK` to save the dataset parameter.
   ![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/provide-values-in-fields.png '#width=400px')

Repeat the above steps to create multiple dataset parameters.
![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/multiple-parameters.png '#width=400px')

Once you save the dataset, an equivalent report parameters will be created under the `PARAMETERS` panel like below.
![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/report-parameters-list.png '#width=400px')

> The report parameter name is created using the value provided in **Value** field. If the value field is left empty when creating the dataset parameter then the report parameter name is created using the value provided in **Parameter Name** field.

### Set Expression

The **Value** field in dataset parameter can contain an expression that evaluates to a value, to pass to the query parameter.

1. To set expression, click on the square icon and select `Expression`.
   ![Expression icon ](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/expression-icon-value-field.png '#width=400px')
2. It will launch the expression dialog like below.
   ![Expression dialog](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/expression-dialog.png '#width=450px')
3. Refer [Expression](./../../compose-report/expressions/) section to know more about the handling expressions in Report Designer. Here, the `SalesOrderID` field is assigned as expression for `SalesOrderID` parameter.
   ![Assign data field as expression](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/aasign-data-fields.png '#width=450px')
4. The icon will be indicated in `Black color`, if the expression is applied to the value field.
   ![Expression indication](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/expression-set-indication.png '#width=400px')

### Reset Expression

1. To reset the applied expression in **Value** field, click on the square icon and select `Reset`.
   ![Select reset expression](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/reset-expression-option.png '#width=400px')
2. The icon will be indicated in `White color`, after reset action.
   ![After reset expression](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/expression-reset-indication.png '#width=400px')

## Reorder parameters

When executing a query, the result will be retrieved from database based on the order of the parameter in the query.

The below snap depicts the parameter list before reordering the parameters.

![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/before-reordering-parameters.png '#width=400px')

To change the order of the dataset parameters after creating it, follow the below steps.

1. Click and hold the icon in the left corner of **Parameter Name** field.
   ![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/gripper-icon-to-perform-drag-action.png '#width=400px')
2. Then drag and move the dataset parameter field to higher or lower position in the list.
   ![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/drag-start-action.png '#width=400px')
3. Drop the dataset parameter field in desired position.
   ![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/drag-action-demo.png '#width=400px')

The below snap depicts the parameter list after reordering the parameters.

![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/after-reorder-action.png '#width=400px')

## Remove parameter

Click on the `Delete` icon in the right corner to remove the dataset parameter from the list.

![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/delete-query-parameter.png)

## Link parameters manually

The following procedure is applicable for below scenario's:

* To link a query variable with an existing report parameter.

* To relink a report parameter with query parameter, if the report parameter is renamed.

### Create query and report parameters

Refer [Create report parameter](./../../report-parameters/add/) section and create the required report parameters in your report.
Refer [Create query parameter](./../../transforming-data/define-query-parameters/) section and create the required query parameters.

### Steps to link parameters

The following steps guides to link a query parameter with a report parameter.

1. Open the dataset `Parameters` dialog, the available query parameters in the dataset query will be automatically listed in the dialog.
   ![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/parameter-list-on-open-action.png '#width=400px')
2. In the list find the parameter name to which you want to link a report parameter.
3. **Value** Field: The available report parameters in the report will be listed in the **Value** field drop-down. Choose a report parameter to which you want to link the respective query parameter.
   ![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/value-field-drop-down.png '#width=400px')
4. Click on the `OK` button to save the parameter linking state.

In the below snap, `SalesOrderID` report parameter is linked with a `SalesOrderID` query parameter.
![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/create-or-link-dataset-parameters/link-paramter-name.png '#width=400px')