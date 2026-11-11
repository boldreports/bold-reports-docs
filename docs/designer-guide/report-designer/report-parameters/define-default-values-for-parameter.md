---
title: Define Default Values for a Report Parameter | Bold Reports
description: Define default values for a report parameter in the Bold Reports Web Report Designer so the report runs automatically when you preview it with those values.
keywords: report-parameter, add parameter, report-designer, ssrs report parameters, drop-down list parameters
---

# Define default values for a parameter

In the Bold Reports<sup>®</sup> Web Report Designer, you can specify a list of default values for a report parameter. If the parameters in the report have default values, the report runs automatically when you preview it.

## How do I open the Default Value tab?

The Web Report Designer sets default values in the parameter assign dialog. To follow the steps below, first read the [Create Parameter](./../../report-parameters/add/#create-parameter) section.

The following image shows the new parameter panel.

![Create new parameter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/create-new-parameter.png '#width=350px')

Click `Assign Value >>` to open the parameter assign dialog.

![Parameter assign values dialog](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/parameter-assign-values-dialog.png '#width=400px')

By default, the parameter dialog opens on the `Available Value` tab. To switch to the `Default Value` tab, click **Default Value**. The following image shows its options.

![Default value option](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-value-option.png '#width=400px')

## Manual values

Manual default values in the Web Report Designer are values you type yourself. Follow these steps:

1. Select the `Specify` option under the `Default Value` tab.
   ![Default specify option](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-specify-option.png '#width=400px')
2. Click the **Add** icon. A list appears in which you can type values.
   ![Default tab add value](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-tab-add-value.png '#width=400px')
3. Enter the value in the **Value** text box and click `OK`.
   ![Default tab enter valid value](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-tab-enter-valid-value.png '#width=400px')
4. Save the parameter.

On report preview, the report runs automatically and displays all the records whose **ProductID** is **712**.

![Default manual values output](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-manual-values-output.png '#width=450px')

## Query values

Query default values in the Web Report Designer come from a dataset field. Follow these steps:

1. Select the **Query Value** option under the **Default Value** tab.
   ![Default tab query value](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-tab-query-value.png '#width=400px')
2. In the **Dataset** drop-down, choose the name of the dataset. You can define datasets using the data view.
3. In **Value field**, choose the name of the field that provides parameter values.
   > Note: These fields are retrieved from the list of column or field names in the dataset.
4. Click **OK**.
   ![Default value assign data](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-value-assign-data.png '#width=400px')
5. Save the parameter.

On report preview, the report runs automatically and displays the first record of the **ProductID** data field.
   ![Default tab query value output](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-tab-query-value-output.png '#width=450px')

## How do I remove default values?

To remove the default values from a parameter in the Web Report Designer, set the `Default Values` tab to `None`. Follow these steps:

1. Read the [Edit Parameter](./../../report-parameters/edit/) section and open the parameter properties.
2. Click `Assign Value >>` to open the parameter assign dialog.
3. Under the `Default Values` tab, choose the `None` option.
   ![Remove default values](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/remove-default-values.png '#width=400px')
4. Click `OK` and save the parameter.

## Frequently asked questions

### Why does my report run automatically on preview?

If the parameters in the report have default values, the Web Report Designer runs the report automatically when you preview it.

### Which value does a query default value use?

With the **Query Value** option, the report runs on preview and displays the first record of the chosen data field.

## See also

* [Define available values for a parameter](./../../report-parameters/define-available-values-for-parameter/)
* [Edit a report parameter](./../../report-parameters/edit/)
* [Create a report parameter](./../../report-parameters/add/)
