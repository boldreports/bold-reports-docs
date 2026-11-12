---
title: Set Available Values for a Report Parameter | {{site.productName}}
description: Define available values for a report parameter in the {{site.productName}} Web Report Designer so users pick only valid values from a drop-down list at preview.
keywords: report-parameter, add parameter, report-designer, ssrs report parameters, drop-down list parameters
---

# Define available values for a parameter

In the {{site.productNameTM}} Web Report Designer, you can specify available values for a report parameter so users select only valid values when they preview the report. The available values you define for the parameter appear in the drop-down list when you preview the report.

## How do I open the parameter assign dialog?

The Web Report Designer sets available values in the parameter assign dialog. To follow the steps below, first read the [Create Parameter](./../../report-parameters/add/#create-parameter) section.

The following image shows the new parameter panel.

![Create new parameter](/static/images/report-designer/report-parameters/add-report-parameter/create-new-parameter.png '#width=350px')

Click `Assign Value >>` to open the parameter assign dialog.

![Parameter assign values dialog](/static/images/report-designer/report-parameters/add-report-parameter/parameter-assign-values-dialog.png '#width=400px')

## Manual values

Manual values in the Web Report Designer are values and labels you type yourself. Follow these steps to add available values for the parameter:

1. Select the `Specify` option under the `Available Value` tab.
   ![Parameter assign values dialog](/static/images/report-designer/report-parameters/add-report-parameter/available-value-specify-value.png '#width=450px')
2. Click the **Add** icon. A list appears in which you can type values and labels.
   ![Available value add field](/static/images/report-designer/report-parameters/add-report-parameter/available-value-add-field.png '#width=450px')
3. Enter the value in the **Value** text box. Optionally, enter the label in the **Label** text box.
   > If you do not provide the label, the value is used.

   ![Create available values list](/static/images/report-designer/report-parameters/add-report-parameter/create-available-values-list.png '#width=450px')
4. Click `OK` and `Save` the parameter.
   ![Save report parameter](/static/images/report-designer/report-parameters/add-report-parameter/save-report-parameter.png '#width=350px')

On report preview, the drop-down list shows the available values defined for the parameter, as in the following image.

![Available values list](/static/images/report-designer/report-parameters/add-report-parameter/drop-down-values-list-specify-option.png '#width=250px')

## Query values

Query values in the Web Report Designer fill the parameter drop-down from a dataset field. Follow these steps to use them:

1. Select the `Query Value` option under the `Available Value` tab.
   ![Available value query value option](/static/images/report-designer/report-parameters/add-report-parameter/available-value-query-value-option.png '#width=400px')
2. In the **Dataset** drop-down, choose the name of the dataset. You can define datasets using the data view.
3. In **Value field**, choose the name of the field that provides parameter values.
   > Note: These fields are retrieved from the list of column or field names in the dataset.
4. In **Label field**, choose the name of the field that provides the parameter names. If there is no separate field for names, choose the same field as in **Value field**.
5. Click `OK`.
   ![Available values query value fields](/static/images/report-designer/report-parameters/add-report-parameter/available-values-query-value-fields.png '#width=400px')
6. Save the parameter.

On report preview, the `ProductID` parameter lists the values of the `ProductID` field from the query data.

![Query value drop down output](/static/images/report-designer/report-parameters/add-report-parameter/query-value-drop-down-output.png '#width=250px')

## How do I remove available values?

To remove the available values from a parameter in the Web Report Designer, set the `Available Values` tab to `None`. Follow these steps:

1. Read the [Edit Parameter](./../../report-parameters/edit/) section and open the parameter properties.
2. Click `Assign Value >>` to open the parameter assign dialog.
3. Under the `Available Values` tab, choose the `None` option.
   ![Remove available values](/static/images/report-designer/report-parameters/add-report-parameter/remove-available-values.png '#width=400px')
4. Click `OK` and save the parameter.

## How do I filter table data based on a report parameter?

In the Web Report Designer, you can use the `ProductID` parameter to filter the `ProductID` field values at runtime. Follow these steps:

1. Select the table report item to enable the grouping panel in the designer.
   ![Open table data assign menu](/static/images/report-designer/report-parameters/add-report-parameter/enable-grouping-panel.png '#width=400px')
2. Click the `(Details)` member field in the grouping panel to open the tablix member properties.
   ![Open tablix member properties](/static/images/report-designer/report-parameters/add-report-parameter/tablix-member-properties.png)
3. In the `Tablix Member` properties, click the `Set Filters...` button.
   ![Open filter dialog](/static/images/report-designer/report-parameters/add-report-parameter/tablix-member-set-filters.png '#width=350px')
4. Read the [Set filters](./../../compose-report/filter-data/) section to create a new filter expression.
   ![Create filter](/static/images/report-designer/report-parameters/add-report-parameter/create-product-id-filter.png '#width=400px')
5. Choose the `Equal` operator and assign the `ProductID` parameter in the **Value** field. Save the filter.
   ![Save filter](/static/images/report-designer/report-parameters/add-report-parameter/save-filter-equation.png '#width=400px')
6. Preview the report. The following view appears.
   ![Textbox parameter type](/static/images/report-designer/report-parameters/add-report-parameter/drop-down-list-parameter-using-specify-option.png '#width=450px')
7. The drop-down lists the manually created values. Choose any value from the drop-down list.
   ![Textbox parameter type](/static/images/report-designer/report-parameters/add-report-parameter/drop-down-values-list-specify-option.png '#width=250px')
8. Click `View Report`.
   ![Filter product id values](/static/images/report-designer/report-parameters/add-report-parameter/preview-of-parameters-using-specify-option.png '#width=450px')

## Frequently asked questions

### What happens if I do not provide a label for an available value?

If you do not provide the label, the Web Report Designer uses the value as the label.

### Where do query-based available values come from?

Query values come from a dataset you choose. The value and label fields are retrieved from the list of column or field names in that dataset.

## See also

* [Define default values for a parameter](./../../report-parameters/define-default-values-for-parameter/)
* [Edit a report parameter](./../../report-parameters/edit/)
* [Create a report parameter](./../../report-parameters/add/)
