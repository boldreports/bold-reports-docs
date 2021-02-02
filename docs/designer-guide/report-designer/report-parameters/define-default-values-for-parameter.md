---
title: Create drop-down list report parameter Bold Reports
description: Create drop-down list report parameter to the report in Bold Report Designer, to dynamically filter the values using the drop-down list.
keywords: report-parameter, add parameter, report-designer, ssrs report parameters, drop-down list parameters
---

# Define default values for a parameter

A list of default values can be specified for a report parameter. If the parameters in the report have default value, the report runs automatically on report preview action.

Refer [Create Parameter](./../../report-parameters/add/#create-parameter) section for better understanding with the following steps.![Create new parameter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/create-new-parameter.png)

Click on `Assign Value >>` to open parameter assign dialog.
![Parameter assign values dialog](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/parameter-assign-values-dialog.png)

By default, the parameter dialog will be launched with `Available Value` tab. To switch over to `Default Value` tab, click the **Default Value** which has below options.
![Default value option](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-value-option.png)

## Manual values

1. Select `Specify` option under `Default Value` tab.
![Default specify option](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-specify-option.png)
2. Click on the **Add** icon. Now, a list in which you can type values appears.
![Default tab add value](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-tab-add-value.png)
3. Enter the value in the **Value** text box and click `OK`
![Default tab enter valid value](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-tab-enter-valid-value.png)
4. Save the parameter.

On report preview, the report automatically runs and displays all the records whose **ProductID** is **712**.

![Default manual values output](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-manual-values-output.png)

## Query values

1. Select **Query Value** option under **Default Value** tab.
![Default tab query value](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-tab-query-value.png)
2. In **Dataset** drop-down, choose the name of the dataset. Datasets can be defined using the data view.
3. In **Value field**, choose the name of the field that provides parameter values.
   > Note: These fields are retrieved from the list of column or field names in the dataset.
4. Click **OK**.
![Default value assign data](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-value-assign-data.png)
5. Save the parameter.

On report preview, the report automatically runs and displays the first record of **ProductID** data field.
![Default tab query value output](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-tab-query-value-output.png)

## Remove default values

To remove the default values defined for the parameter follow the below steps:

1. Refer [Edit Parameter](./../../report-parameters/edit/) section and open parameter properties.
2. Click on `Assign Value >>` to open parameter assign dialog.
3. Under the `Default Values` tab, choose the `None` option.
![Remove default values](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/remove-default-values.png)
4. Click `OK`and save the parameter.
