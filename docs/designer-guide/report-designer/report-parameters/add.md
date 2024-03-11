---
title: Add report parameter | Bold Report Designer | Bold Reports
description: Add report parameter to the report in Bold Report Designer, to filter report data for one or more values.
keywords: report-parameter, add parameter, report-designer, ssrs report parameters
---

# Add report parameter to the report

Report parameters can be used to filter the report data or associate related reports together. This section guides you to add a report parameter into the report with Bold Report Designer.

## Create parameter

1. To add a parameter, click on the `Parameter` icon in the `Data Configuration` panel. It opens the `PARAMETERS` panel.
   ![Parameter icon](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/parameter-icon.png '#width=250px')
2. Next, click on the `NEW PARAMETER` button in the `PARAMETERS` panel.
   ![Parameters pane](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/parameters-pane.png '#width=350px')
3. Now, the following wizard will be displayed.
   ![Parameter configuration panel](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/parameter-configuration-panel.png '#width=350px')

   * In **Name** field, type the name for the parameter or use the default name. By default, manually-created parameters name are similar to `ReportParameter1`.
   * In **Prompt** field, type the text that appears next to the parameter when the user previews the report.
   * In **Data type** field, select the data type for the parameter value. The supported data types are `Boolean`,  `DateTime`, `Integer`, `Float` and `Text`.
   * Select **Allow blank value**, if parameter value needs to be set as an empty string or a blank value.
     > Note: If you specify valid values for a parameter, and you want a blank value to be one of the valid values, you must include it as one of the values that you specify. Selecting this option does not automatically include a blank value for available values.

   * Select **Allow null value**, if the value of the parameter needs to be set as null.
     > Note: If you specify valid values for a parameter, and you want null to be one of the valid values, you must include null as one of the values that you specify. Selecting this option does not automatically include the null value for available values.

   * Select **Allow multiple values**, if the value for the parameter should be multiple values. Null values are not allowed.
   * Set the `visibility` option.
     1. Select **Visible** to display the report parameter at the top of the report while running the report. This option allows you to select parameter values at run time.
     2. Select **Hidden** to hide the report parameter in the published report. The report parameter values can still be set on a report URL, in a subscription definition, or on the Report Server.
     3. Select **Internal** to hide the report parameter. In the published report, the report parameter can only be viewed in the report definition.
        ![Create new parameter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/create-new-parameter.png '#width=350px')
4. Click on `Save` button. Now, the parameter will be listed under the `PARAMETERS` pane like below.
   ![Product id parameter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/product-id-parameter.png '#width=350px')

## Filter a table data based on report parameter

Using the `ProductID` parameter, we can filter the `ProductID` field values at runtime like below.

1. Select the table report item to enable grouping panel in the designer.
   ![Open table data assign menu](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/enable-grouping-panel.png '#width=400px')
2. Now, click on the `(Details)` member field in the grouping panel to open the tablix member properties.
   ![Open tablix member properties](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/tablix-member-properties.png)
3. In `Tablix Member` properties, click on `Set Filters...` button.
   ![Open filter dialog](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/tablix-member-set-filters.png '#width=350px')
4. Refer [Set filters](./../../compose-report/filter-data/) section to create new filter expression.
   ![Create filter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/create-product-id-filter.png '#width=400px')
5. Choose the `Equal` operator and assign the `ProductID` parameter in the **Value** field. Save the filter.
   ![Save filter](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/save-filter-equation.png '#width=400px')
6. Preview the report, now the following view will be displayed.
   ![Textbox parameter type](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/textbox-parameter-type.png '#width=350px')
7. Enter the valid `ProductID` in the textbox and click on `View Report`.
   ![Filter product id values](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/filter-product-id-values.png '#width=400px')

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/report-parameters/filter-table-data-based-on-report-parameter.rdl).