---
title: Filter RDL Report Data in Web Report Designer | {{site.productName}}
description: Add filters in the {{site.productName}} Web Report Designer to limit the data shown in an RDL report or data region by passing a specific dataset field value.
keywords: ejReportDesigner, reportdesigner, filters, opertors
---

# Filter data in {{site.productNameTM}} Web Report Designer

Filters in {{site.productNameTM}} Web Report Designer limit the data in a report by passing a specific dataset field value. You can use filters to limit the data in data regions.

![open-filter-dialog](/static/images/report-designer/compose-report/filter-data/filters-dialog.png '#width=400px')

## Add filters

You add filters in the Web Report Designer filter dialog by choosing a field, an operator, and a value.

1. Click the **Add** icon to add a filter.

   ![add-field-filters](/static/images/report-designer/compose-report/filter-data/filters-add.png '#width=400px')

2. The first drop-down list shows the dataset fields. Choose the necessary field from the drop-down list, or set an [Expression](./../../compose-report/filter-data/#set-expression).
   ![add-expression](/static/images/report-designer/compose-report/filter-data/expression-field.png '#width=200px')

3. Choose an **Operator** type from the second drop-down list.

   ![operators-in- filters](/static/images/report-designer/compose-report/filter-data/operators.png '#width=125px')

   To filter a specific range of data, use the **Between** operator.

   ![operator-between](/static/images/report-designer/compose-report/filter-data/between-operator.png '#width=400px')

4. In the **Value** field, enter the value directly or set an [Expression](./../../compose-report/filter-data/#set-expression).
5. To add multiple filters, repeat steps 1 to 4.

   ![add-with-multiple-filter](/static/images/report-designer/compose-report/filter-data/multiple-filters.png '#width=400px')

6. Click **OK**.

## Set Expression

You set a filter expression in the Web Report Designer from the square icon next to the field. First, follow steps 1 to 4 of [Add filters](./../../compose-report/filter-data/#add-filters).

1. To edit or create an expression, click the square icon and select `Expression`.

   ![expression-icon-shown](/static/images/report-designer/compose-report/filter-data/expression-icon.png '#width=400px')

2. The `Expression` dialog opens. To learn more, see the [Expression](./../../compose-report/expressions/) section.

   ![open-expression-dialog](/static/images/report-designer/compose-report/filter-data/expression-dialog.png '#width=400px')

3. The icon turns `Black color` when the expression is applied to the dataset field.

   ![set-expression](/static/images/report-designer/compose-report/filter-data/expression-set-black.png)

## How do I reset an expression?

You reset a filter expression in the Web Report Designer from the same square icon.

1. Click the square icon and select `Reset`.
   ![Select filter reset expression](/static/images/report-designer/compose-report/filter-data/expression-icon-reset.png '#width=400px')

2. The icon turns `White color` after the reset action.
   ![After reset expression](/static/images/report-designer/compose-report/filter-data/after-reset-expression.png)

## How do I reorder filters?

The Web Report Designer lets you change the order of filters by dragging them. Click and hold the icon in the left corner, and then drag the filter to a higher or lower position.

![reorder fields in sort](/static/images/report-designer/compose-report/filter-data/reorder-before.png '#width=400px')

The following image shows the position of the dragged filter:

![after reorder fields in sort](/static/images/report-designer/compose-report/filter-data/after-reorder.png)

## Remove Filters

You remove a filter in the Web Report Designer by clicking the **Delete** icon in the right corner of the respective filter.

![delete-filter](/static/images/report-designer/compose-report/filter-data/delete-a-filter.png)

## Frequently asked questions

### How do I filter a range of values?

Use the **Between** operator in the second drop-down list to filter a specific range of data.

### How do I know an expression is applied to a filter?

The square icon turns `Black color` when an expression is applied, and `White color` after you reset it.

## See also

* [Group data](./../group-data/)
* [Sort data](./../sort-data/)
* [Expression Builder](./../expressions/)
