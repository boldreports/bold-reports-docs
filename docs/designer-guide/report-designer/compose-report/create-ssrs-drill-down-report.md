---
title: Create SSRS drilldown report | Web Report Designer
description: Drill down reports in SSRS means allowing users to show or hide column data by providing expand & collapse symbols on a text box or providing interactivity to user.
keywords: ejReportDesigner, reportdesigner, line, reportitem, border
---

# Create SSRS drilldown report

Drilldown action can be used to create an interactive report which allows user to expand or collapse report items, rows and columns associated with a group in a table or matrix.

## Create data

To present data in the table, create a dataset and bind data to the table data region. In this designing section, the following dataset query is used for dataset creation.

```sql
SELECT PC.Name AS ProdCat, PS.Name AS SubCat, DATEPART(yy, SOH.OrderDate) AS OrderYear, 'Q' + DATENAME(qq, SOH.OrderDate) AS OrderQtr,SUM(SOD.UnitPrice * SOD.OrderQty) AS Sales
FROM Production.ProductSubcategory PS INNER JOIN
Sales.SalesOrderHeader SOH INNER JOIN
Sales.SalesOrderDetail SOD ON SOH.SalesOrderID = SOD.SalesOrderID INNER JOIN
Production.Product P ON SOD.ProductID = P.ProductID ON PS.ProductSubcategoryID = P.ProductSubcategoryID INNER JOIN
Production.ProductCategory PC ON PS.ProductCategoryID = PC.ProductCategoryID
WHERE (SOH.OrderDate BETWEEN '1/1/2002' AND '12/31/2003')
GROUP BY DATEPART(yy, SOH.OrderDate), PC.Name, PS.Name, 'Q' + DATENAME(qq, SOH.OrderDate), PS.ProductSubcategoryID
```

> Refer [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `AdventuresWorks` database is used here.

## Add drilldown action to a table group

Design a [simple table report](./../../report-items/tablix/insert-or-delete-a-row-group-ssrs/#insert-a-row-group) with a parent group and child group as shown below.![Table design](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-down-report/table-final-design.png)

Select `SubCat` field in the grouping panel, now the group properties will be loaded in the properties panel.

![Group properties](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-down-report/open-group-properties.png)

In `Visiblity` property, set the visibility of `SubCat` group  to show or hide the group when first time you preview a report.

![Visibility property](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-down-report/visibility-property.png)

* Enable the checkbox to display the group.
* Disable the checkbox to hide the group.
* To determine the visibility state at run time, set expression for visibility property.

### Show group on initial display

Set the visibility for `SubCat` group as `true` in the report so that sub-category group values will be in expanded state on preview.

![Initial visible state](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-down-report/initial-visible-state.png)

In `Toggle` property drop-down list, available textbox report items in the report will be listed. Choose the `ProdCat` field textbox to expand or collapse the `SubCat` based on product categories.

![Select group to toggle](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-down-report/select-group-to-toggle.png)

> The text box that you use for the toggle must be in a containing scope that controls the item that you want to show or hide.

To differentiate the values, apply background color and font styles for parent and child group.

![Improve table appearance](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-down-report/improve-table-appearance.png)

Now, click on the `Preview` button to see the report preview. Here, `>` symbol before each product category is the drill down action.

![SSRS Drill down report](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-down-report/preview-for-drill-down-with-group.png)

**Initial Toggle state**:

In the report preview notice the drilldown action symbol, the group values are in expanded state but shows collapsed symbol instead of expand symbol. So to maintain the symbol state `Initial Toggle State` property can be used.

In the `ProdCat` textbox properties change the `Initial Toggle State` as `false`.

![Initial toggle state](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-down-report/initial-toggle-state.png)

Now, click on the `Preview` button and notice the drilldown symbol is in expanded state.

![Initial toggle state](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-down-report/drill-down-action-indicator.png)

### Hide group on initial display

To hide the `SubCat` group values when you preview the report, set the visibility for `SubCat` group as `false`.

![Hide group visibility on preview](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-down-report/disable-initial-visible-state.png)

Then, set the `Initial Toggle State` as `True` in the `ProdCat` textbox properties.

![Hide group visibility on preview](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-down-report/toggle-drill-down-indicator.png)

Now, click on the `Preview` button to see the report preview. Notice the sub-category group values are in collapsed state and the drilldown action symbol also is in collapsed state.

![Hide group visibility on preview](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-down-report/preview-for-drill-down-with-group-hidden.png)

To see the sub-category product and their sales value, expand the group by clicking on the `>` symbol.

![Hide group visibility on preview](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-down-report/preview-for-drill-down-with-single-group.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/compose-report/create-ssrs-drill-down-report.rdl)