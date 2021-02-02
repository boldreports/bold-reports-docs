---
title: Define available values for a report parameter
description: Define available values for a report parameter to specify a list of available values to display to the user
keywords: report-parameter, add parameter, report-designer, ssrs report parameters, drop-down list parameters
---

# Define available values for a parameter

An available values can be specified for a report parameter to allow the user to select only valid values on report preview action. The available values defined for the parameter will be listed in the drop-down list when previewing the report.

Refer [Create Parameter](./../../report-parameters/add/#create-parameter) section for better understanding with the following steps.![Create new parameter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/create-new-parameter.png)

Click on `Assign Value >>` to open parameter assign dialog.
![Parameter assign values dialog](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/parameter-assign-values-dialog.png)

## Manual values

Follow the below steps to add available values for the parameter.

1. Select `Specify` option under `Available Value` tab.
![Parameter assign values dialog](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/available-value-specify-value.png)
2. Click on the **Add** icon. Now, a list in which you can type values and labels appears.
![Available value add field](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/available-value-add-field.png)
3. Enter the value in the **Value** text box, and optionally, the label in the **Label** text box.
   > If you do not provide the label, the value is used.

   ![Create available values list](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/create-available-values-list.png)
4. Click `OK` and `Save` the parameter.
![Save report parameter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/save-report-parameter.png)

On report preview, the available values defined for the parameter will be listed in the drop-down list like below.

![Available values list](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/drop-down-values-list-specify-option.png)

## Query values

1. Select `Query Value` option under `Available Value` tab.
![Available value query value option](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/available-value-query-value-option.png)
2. In **Dataset** drop-down, choose the name of the dataset. Datasets can be defined using the data view.
3. In **Value field**, choose the name of the field that provides parameter values.
   > Note: These fields are retrieved from the list of column or field names in the dataset.
4. In **Label field**, choose the name of the field that provides the parameter names. If there is no separate field for names, choose the same field similar to **Value field**.
5. Click `OK`.
![Available values query value fields](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/available-values-query-value-fields.png)
6. Save the parameter.

On report preview, the `ProductID` parameter will list the values of `ProductID` field from query data.
![Query value drop down output](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/query-value-drop-down-output.png)

## Remove available values

To remove the available values defined for the parameter follow the below steps:

1. Refer [Edit Parameter](./../../report-parameters/edit/) section and open parameter properties.
2. Click on `Assign Value >>` to open parameter assign dialog.
3. Under the `Available Values` tab, choose the `None` option.
![Remove available values](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/remove-available-values.png)
4. Click `OK` and save the parameter.

## Filter a table data based on report parameter

Using the `ProductID` parameter, we can filter the `ProductID` field values at runtime like below.

1. Select the table report item to enable grouping panel in the designer.
![Open table data assign menu](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/enable-grouping-panel.png)
2. Now, click on the `(Details)` member field in the grouping panel to open the tablix member properties.
![Open tablix member properties](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/tablix-member-properties.png)
3. In `Tablix Member` properties, click on `Set Filters...` button.
![Open filter dialog](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/tablix-member-set-filters.png)
4. Refer [Set filters](./../../compose-report/filter-data/) section to create new filter expression.
![Create filter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/create-product-id-filter.png)
5. Choose the `Equal` operator and assign the `ProductID` parameter in the **Value** field. Save the filter.
![Save filter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/save-filter-equation.png)
6. Preview the report, now the following view will be displayed.
![Textbox parameter type](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/drop-down-list-parameter-using-specify-option.png)
7. The manually created values will be listed in the drop-down. Choose any value from the drop-down list.
![Textbox parameter type](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/drop-down-values-list-specify-option.png)
8. Click on `View Report`.
![Filter product id values](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/preview-of-parameters-using-specify-option.png)