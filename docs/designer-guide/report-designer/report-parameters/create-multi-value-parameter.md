---
title: Create a Multi-Value Parameter in RDL Reports | Bold Reports
description: Create a multi-value report parameter in the Bold Reports Web Report Designer to filter RDL report data by more than one value using query-based values.
keywords: multi value report parameter, report parameter, report-designer, parameters
---

# Create a multi-value report parameter in the Bold Reports<sup>®</sup> Web Report Designer

In the Bold Reports<sup>®</sup> Web Report Designer, a multi-value parameter dynamically filters the report data based on more than one value. Follow the steps in this guide to create a multi-value report parameter and use it to filter a table.

## How do I create a multi-value parameter?

You create a Bold Reports<sup>®</sup> multi-value parameter by enabling **Allow multiple values** when you create a parameter. For background, see the [Create Parameter](./../../report-parameters/add/#create-parameter) section.

The following image shows the parameter configuration panel.

![Create new parameter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/create-new-parameter.png '#width=350px')

1. Select **Allow multiple values** to create a multi-value parameter.
   > A multi-value parameter cannot include `null` values.

   ![Create new parameter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/enable-allow-multiple-values-option.png '#width=350px')
2. Click `Assign Value >>` to open the parameter assign dialog.
   ![Parameter assign values dialog](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/parameter-assign-values-dialog.png '#width=400px')
3. Select the `Query Value` option under the `Available Value` tab.
   ![Available value query value option](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/available-value-query-value-option.png '#width=400px')
4. Select the dataset and fields in the dropdown list and click `OK`.
   ![Available values query value fields](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/available-values-query-value-fields.png '#width=400px')
5. Save the parameter.

## How do I filter table data based on a multi-value parameter?

A Bold Reports<sup>®</sup> multi-value parameter filters table data at run time with the `In` operator. In this example, the `ProductID` parameter filters the `ProductID` field values.

1. Select the table report item in the design area.
   ![Select the table report item](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/select-table-report-item.png '#width=350px')
2. Click the `Properties` icon in the configuration panel to open the table properties.
   ![Open table properties](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/properties-icon-to-open-table-properties.png '#width=250px')
3. In the `Table` properties, click the `Set Filters...` button.
   ![Table set filters button](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/table-set-filters-button.png '#width=350px')
   See the [Set filters](./../../compose-report/filter-data/) section to create a new filter expression.
4. Choose the `In` operator and assign the `ProductID` parameter in the **Value** field. Save the filter.
   ![Open expression menu in filter dialog](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/add-filter-condition.png '#width=400px')
5. Click the `Preview` button in the report header. Select the values you need in the dropdown list.
   ![Select multiple values to filter the records](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/select-multiple-value-in-parameter.png '#width=250px')
6. Click the `View Report` button.
   ![Multi value parameter preview](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/multi-value-parameter-preview-output.png '#width=500px')

> Download this report design from the [create multi-value parameter RDL sample](https://github.com/boldreports/resources/tree/master/docs/report-designer/report-parameters/create-multi-value-parameter.rdl).

## Frequently asked questions

### Can a multi-value parameter include null values?

No. A Bold Reports<sup>®</sup> multi-value parameter cannot include `null` values.

### Which filter operator do I use with a multi-value parameter?

Choose the `In` operator and assign the parameter in the **Value** field of the filter.

## See also

* [Add a report parameter](./../../report-parameters/add/)
* [Create a cascading parameter](./../../report-parameters/create-cascading-parameter/)
* [Define available values for a parameter](./../../report-parameters/define-available-values-for-parameter/)
