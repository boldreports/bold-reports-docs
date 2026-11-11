---
title: Group RDL Report Data in Web Report Designer | {{site.productName}}
description: Group data in data regions in the {{site.productName}} Web Report Designer by a field value or expression value to organize RDL report data into readable sections.
keywords: ejReportDesigner, reportdesigner, grouping
---

# Group data in {{site.productNameTM}} Web Report Designer

Grouping in {{site.productNameTM}} Web Report Designer organizes data in data regions by a field value or expression value.

![open-group-dialog](/static/assets/on-premise/images/report-designer/compose-report/group-data/group-dialog.png '#width=300px')

## How do I add grouping?

You add a group expression in the Web Report Designer group dialog by choosing a dataset field or setting an expression.

1. Click the **Add** icon to add a group expression.

   ![choose-group-fields](/static/assets/on-premise/images/report-designer/compose-report/group-data/group-to-choose-fields.png '#width=300px')

2. The drop-down lists the dataset fields of the dataset assigned to the data region. Choose a field, or click the square icon to set an [Expression](./../../compose-report/group-data/#set-expression).

    ![open-expression](/static/assets/on-premise/images/report-designer/compose-report/sort-data/expression-field.png '#width=200px')

3. Click OK.
4. To add multiple group expressions, repeat steps 1 to 3.

    ![addfield multiple group](/static/assets/on-premise/images/report-designer/compose-report/group-data/multiple-sort.png '#width=300px')

## Set Expression

You set a group expression in the Web Report Designer from the square icon next to the field. First, follow steps 1 to 3 to add a group expression.

1. To edit or create an expression, click the square icon and select `Expression`.

    ![expression-icon](/static/assets/on-premise/images/report-designer/compose-report/group-data/group-expression-icon.png '#width=300px')

2. The `Expression` dialog opens. To learn more, see the [Expression](./../../compose-report/expressions/) section.

    ![open-expression](/static/assets/on-premise/images/report-designer/compose-report/group-data/expression-dialog.png '#width=400px')

3. The icon turns `Black color` when the expression is applied to the dataset field.
   ![set-expression](/static/assets/on-premise/images/report-designer/compose-report/group-data/expression-set-black.png)

## How do I reset an expression?

You reset a group expression in the Web Report Designer from the same square icon.

1. Click the square icon and select `Reset`.
   ![Select reset expression](/static/assets/on-premise/images/report-designer/compose-report/group-data/group-reset.png '#width=300px')

2. The icon turns `White color` after the reset action.
   ![After reset expression](/static/assets/on-premise/images/report-designer/compose-report/group-data/after-reset-expression.png)

## How do I reorder group expressions?

The Web Report Designer lets you change the order of group expressions by dragging them. Click and hold the icon in the left corner, and then drag the group expression to a higher or lower position.

![reorder fields in group](/static/assets/on-premise/images/report-designer/compose-report/group-data/reorder-before.png '#width=300px')

The following image shows the position of the dragged group expression:

![after reorder fields in group](/static/assets/on-premise/images/report-designer/compose-report/group-data/after-reorder.png '#width=300px')

## How do I remove grouping?

You remove a group expression in the Web Report Designer by clicking the **Delete** icon in the right corner of the respective group expression.

![delete-fields-grouping](/static/assets/on-premise/images/report-designer/compose-report/group-data/expression-set-black.png)

## Frequently asked questions

### Can I group by more than one field?

Yes. Repeat the add steps to add multiple group expressions.

### What can I group data by?

You can group data in data regions by a field value or an expression value.

## See also

* [Filter data](./../filter-data/)
* [Sort data](./../sort-data/)
* [Expression Builder](./../expressions/)
