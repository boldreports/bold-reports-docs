---
layout: post
title: Select All Parameter Values by Default in RDL | {{site.productName}}
description: Select all available values in a parameter list by default in {{site.productName}} Web Report Designer by using the same dataset query for available and default values.
platform: report-platform
documentation: ug
---

# How to select all the available values in the parameter list as default in the report

To select all available values by default in {{site.productNameTM}} Report Designer, use the same dataset query for the parameter's available values and default values. First, review the [Create Parameter](./../../report-parameters/add/#create-parameter) section, and then follow these steps.

![Create new parameter](/static/images/report-designer/how-to/set-all-values-in-multi-value-parameters-as-default/new-parameter.png '#width=400px')

## How do I set the available values?

You set the available values for a {{site.productNameTM}} parameter in the parameter assign dialog.

1. Click `Assign Value >>` to open the parameter assign dialog.

   ![Parameter assign values dialog](/static/images/report-designer/report-parameters/add-report-parameter/parameter-assign-values-dialog.png '#width=400px')

2. The parameter dialog opens on the `Available Value` tab by default. Follow the [Available Values](./../../report-parameters/define-available-values-for-parameter/#query-values) section and choose the dataset values you need in the dropdowns.

   ![Available Value](/static/images/report-designer/how-to/set-all-values-in-multi-value-parameters-as-default/available-values.png '#width=400px')

## How do I set all values as default?

You set all values as default in {{site.productNameTM}} by choosing **Query Value** on the `Default Value` tab with the same dataset and value field.

1. Switch to the `Default Value` tab, which has the following options.

   ![Default value option](/static/images/report-designer/report-parameters/add-report-parameter/default-value-option.png '#width=400px')

2. Select the **Query Value** option under the **Default Value** tab.

   ![Default tab query value](/static/images/report-designer/report-parameters/add-report-parameter/default-tab-query-value.png '#width=400px')

3. Choose the dataset and the value field. They must be the same as the **Available Value** dataset and value field query value.

   ![default value](/static/images/report-designer/how-to/set-all-values-in-multi-value-parameters-as-default/set-default-values.png)

4. Save the parameter and preview the report. By default, the report renders with all available values in the parameter list.

   ![output image](/static/images/report-designer/how-to/set-all-values-in-multi-value-parameters-as-default/parameter-default-values-output.png '#width=600px')

## Frequently asked questions

### Why are not all values selected by default?

The **Default Value** dataset and value field must be the same as the **Available Value** dataset and value field.

## See also

* [Add a report parameter](./../../report-parameters/add/)
* [Get distinct values in parameter drop down](./../../how-to/get-distinct-values-in-ssrs-parameter-drop-down/)
* [Report Designer how-to guides](./../../how-to/)
