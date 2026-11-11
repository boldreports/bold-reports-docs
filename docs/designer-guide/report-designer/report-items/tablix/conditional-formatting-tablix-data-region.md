---
title: Apply Conditional Formatting to a Tablix | {{site.productName}}
description: Apply conditional formatting to a tablix data region in {{site.productName}} Web Report Designer to highlight table rows based on a report parameter value at run time.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Apply conditional formatting to a tablix in {{site.productNameTM}}

In the {{site.productNameTM}} Web Report Designer, conditional formatting enhances the visual appearance of the tablix data region in the report design. The following steps show how to configure conditional formatting in a basic tablix report design.

## How do I create the dataset?

To bind data to the tablix data region in the {{site.productNameTM}} Web Report Designer, create a dataset in your report. The following query fetches customer details from the `Customers` table in the `NorthWind` database:

```sql
Select CustomerID, CompanyName, Address, City, PostalCode, Country From Customers
```

![Open group menu](/static/images/report-designer/report-items/tablix-conditional-formatting/dataset-list-view.png '#width=385px')

## How do I create the parameter?

To apply conditional formatting based on a report parameter in the {{site.productNameTM}} Web Report Designer, create a parameter in your report. Refer to the [Create Parameter](./../../../report-parameters/add/#create-parameter) and [Define Available Value](./../../../report-parameters/define-available-values-for-parameter/#query-values) sections to create and assign a value to the parameter. In this example, you create the `FormattingRow` parameter and assign the `Country` data field as its query value. The following images show these steps.

### New parameter creation

The following image shows the new `FormattingRow` parameter being created.

![Open group menu](/static/images/report-designer/report-items/tablix-conditional-formatting/parameter-creation-panel.png '#width=385px')

### Assign value

The following image shows the `Country` data field assigned as the query value of the parameter.

![Open group menu](/static/images/report-designer/report-items/tablix-conditional-formatting/assign-available-value.png '#width=410px')

### Parameter list view

The following image shows the parameter in the parameter list.

![Open group menu](/static/images/report-designer/report-items/tablix-conditional-formatting/parameter-list-view.png '#width=385px')

## How do I add the table data region?

You design a simple table in the {{site.productNameTM}} Web Report Designer that contains the following fields from the dataset:

* CustomerID
* CompanyName
* City
* PostalCode
* Country

![Open group menu](/static/images/report-designer/report-items/tablix-conditional-formatting/initial-design.png '#width=410px')

> Refer to the [Simple Table Design](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/) section to create the above table design.

## How do I format the table header?

You improve the tablix design in the {{site.productNameTM}} Web Report Designer by applying a background color and font style to the table header with the following steps:

1. Select the first row of the table and click the `Properties` icon in the configuration panel.
   ![Open group menu](/static/images/report-designer/report-items/tablix-conditional-formatting/set-cell-properties.png '#width=410px')
2. Set the font color, font style and background properties for the header row.
   ![Open group menu](/static/images/report-designer/report-items/tablix-conditional-formatting/set-cell-properties-output.png '#width=410px')

> Refer to the [Properties Panel](./../../../compose-report/properties-panel/) section to set or edit values in the properties panel.

## How do I apply conditional formatting?

You apply conditional formatting in the {{site.productNameTM}} Web Report Designer by setting an expression on the `BackgroundColor` property. To highlight the table rows that have the `Country` value selected in the parameter drop-down at run time, follow these steps:

1. Select the `Details` Row group in the tablix. The common properties for the selected cells are listed in the properties panel.
   ![Open group menu](/static/images/report-designer/report-items/tablix-conditional-formatting/select-details-group.png '#width=410px')
2. In the properties panel, select the `BackgroundColor` property and then click the square icon in the right corner of the property.
   ![Open group menu](/static/images/report-designer/report-items/tablix-conditional-formatting/open-expression-menu-in-background-color-property.png '#width=385px')
3. Click the `Expression` menu to open the expression builder. Set the conditional expression `=IIf(Fields!Country.Value=Parameters!FormattingRow.Value,"#e2f2bf","Transparent")` in the text area and click the `OK` button.
   ![Open group menu](/static/images/report-designer/report-items/tablix-conditional-formatting/set-condition-for-background-property.png '#width=385px')

## What does the report preview show?

The {{site.productNameTM}} report preview highlights the rows that contain the selected country name. Select the country in the parameter drop-down and click the `View Report` button.

![Open group menu](/static/images/report-designer/report-items/tablix-conditional-formatting/conditional-fomatting-output.png '#width=550px')

> Download the [conditional formatting report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/conditional-formatting-tablix-data-region.rdl).

## Frequently asked questions

### Which property highlights the matching rows?

The `BackgroundColor` property of the `Details` row group uses the expression `=IIf(Fields!Country.Value=Parameters!FormattingRow.Value,"#e2f2bf","Transparent")`.

### Which database does the sample use?

The sample query fetches customer details from the `Customers` table in the `NorthWind` database.

## See also

* [Design an SSRS RDL report using a table](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/)
* [Properties panel](./../../../compose-report/properties-panel/)
* [Add filters to a tablix data region](./../../../report-items/tablix/add-filters-to-tablix-data-region/)
