---
title: Conditional Formatting in Tablix Data Region | Bold Reports
description: This section describes steps to format the data in tablix data region to enhance its visual appearance in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Conditional Formatting

Conditional formatting can be used to enhance the visual appearance of the tablix data region in the report design. In this section, basic report design to configure conditional formatting in a tablix data region is explained step by step.

## Create dataset

To bind data to the tablix data region, create a dataset in your report. In this section, the following query is used to fetch customer details data from `Customers` table in `NorthWind` database.

```sql
Select CustomerID, CompanyName, Address, City, PostalCode, Country From Customers
```

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-conditional-formatting/dataset-list-view.png)

## Create parameter

To apply conditional formatting based on report parameter, create a parameter in your report. Refer [Create Parameter](./../../../report-parameters/add/#create-parameter) and [Define Available Value](./../../../report-parameters/define-available-values-for-parameter/#query-values) section to create and assign value to the parameter. In this section, the `FormattingRow` parameter is created and assigned `Country` data field as query value. Refer the below snaps for better understanding.

### New parameter creation

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-conditional-formatting/parameter-creation-panel.png)

### Assign value

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-conditional-formatting/assign-available-value.png)

### Parameter list view

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-conditional-formatting/parameter-list-view.png)

## Add table data region

Design a simple table that contains following data from the fields in the dataset:

* CustomerID
* CompanyName
* City
* PostalCode
* Country

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-conditional-formatting/initial-design.png)

> Refer [Simple Table Design](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/) section to create above table design.

## Formatting table

To improve the tablix design apply background color, font style to the table header by following the below steps:

1. Select the first row of table and click on the `Properties` icon in the configuration panel.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-conditional-formatting/set-cell-properties.png)
2. Set font color, font style and background properties for header row as shown below.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-conditional-formatting/set-cell-properties-output.png)

> Refer [Properties Panel](./../../../compose-report/properties-panel/) section to set or edit values in properties panel.

## Apply conditional formatting

To highlight the table rows which has the `Country` value selected in parameter drop-down at runtime, follow the below steps:

1. Select the `Details` Row group in the tablix. Now, the common properties for selected cells will be listed in the properties panel.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-conditional-formatting/select-details-group.png)
2. In the properties panel select `BackgroundColor` property and then click on the square icon in the right corner of the respective property.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-conditional-formatting/open-expression-menu-in-background-color-property.png)
3. Click on `Expression` menu to open the expression builder. Set the following conditional expression in the text area, `=IIf(Fields!Country.Value=Parameters!FormattingRow.Value,"#e2f2bf","Transparent")` and click on the `OK` button.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-conditional-formatting/set-condition-for-background-property.png)

## Preview report

On report preview, select the country in the parameter drop-down and click on the `View Report` button. Now, based on the selected country the rows which contains the selected country name will be highlighted as shown below.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-conditional-formatting/conditional-fomatting-output.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/conditional-formatting-tablix-data-region.rdl).