---
title: Simple steps to filter data using web report designer
description: This section describes about how to to limit the data in a report or data region after retrieving from database with Bold Report Designer
keywords: ejReportDesigner, reportdesigner, filters, opertors
---

# Filters

Filters are used to filter the dataset field by passing the specific dataset field value to limit the data in a report. It can be used to filter the data in a data regions.

![open-filter-dialog](/static/assets/on-premise/images/report-designer/compose-report/filter-data/filters-dialog.png '#width=400px')

## Add filters

1. To add a filter, Click on the **Add** icon.

   ![add-field-filters](/static/assets/on-premise/images/report-designer/compose-report/filter-data/filters-add.png '#width=400px')

2. Dataset fields are listed in the first drop-down list, choose the necessary field from the drop-down list or set an [Expression](./../../compose-report/filter-data/#set-expression).
   ![add-expression](/static/assets/on-premise/images/report-designer/compose-report/filter-data/expression-field.png '#width=200px')

3. **Operator** types are listed in the second drop-down list.

   ![operators-in- filters](/static/assets/on-premise/images/report-designer/compose-report/filter-data/operators.png '#width=125px')

   To filter specific range of data use **Between** operator.

   ![operator-between](/static/assets/on-premise/images/report-designer/compose-report/filter-data/between-operator.png '#width=400px')

4. In the **Value**, enter the  value directly or set an [Expression](./../../compose-report/filter-data/#set-expression).
5. To add multiple filters, follow steps 1 - 4.

   ![add-with-multiple-filter](/static/assets/on-premise/images/report-designer/compose-report/filter-data/multiple-filters.png '#width=400px')

6. Click **OK**.

## Set Expression

Follow steps 1 - 4, to add filters.

1. To edit/create an expression, click on the square icon and select `Expression`.

   ![expression-icon-shown](/static/assets/on-premise/images/report-designer/compose-report/filter-data/expression-icon.png '#width=400px')

2. `Expression` dialog will be open as shown below, Refer [Expression](./../../compose-report/expressions/) section for better understanding with the following sections.

   ![open-expression-dialog](/static/assets/on-premise/images/report-designer/compose-report/filter-data/expression-dialog.png '#width=400px')

3. The icon will be indicated in `Black color`, if the expression is applied to the dataset field.

   ![set-expression](/static/assets/on-premise/images/report-designer/compose-report/filter-data/expression-set-black.png)

## Reset Expression

1. To reset an expression, click on the square icon and select `Reset`.
   ![Select filter reset expression](/static/assets/on-premise/images/report-designer/compose-report/filter-data/expression-icon-reset.png '#width=400px')

2. The icon will be indicated in `White color`, after reset action.
   ![After reset expression](/static/assets/on-premise/images/report-designer/compose-report/filter-data/after-reset-expression.png)

## Reordering

To change the order of an filter, click and hold the icon in the left corner, and then drag filters to higher or lower position.
![reorder fields in sort](/static/assets/on-premise/images/report-designer/compose-report/filter-data/reorder-before.png '#width=400px')

The position of dragged sort expression is shown as below:
![after reorder fields in sort](/static/assets/on-premise/images/report-designer/compose-report/filter-data/after-reorder.png)

## Remove Filters

Click **Delete** icon in the right corner to remove the respective filters.

![delete-filter](/static/assets/on-premise/images/report-designer/compose-report/filter-data/delete-a-filter.png)