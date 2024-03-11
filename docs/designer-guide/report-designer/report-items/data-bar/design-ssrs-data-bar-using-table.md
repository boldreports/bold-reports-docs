---
title: Design ssrs data bar report using table | Report Designer
description: Design ssrs data bar report using table, to display trends and changes in data over time with Web Report Designer.
keywords: ejReportDesigner, reportdesigner, table, data bar, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Design ssrs data bar report using table

This section describes the steps to design `Data bar` report using SSRS table report item.

## Create dataset

The following dataset query is used for this `Data bar` report.

```sql
SELECT PC.Name AS ProdCat, PS.Name AS SubCat, DATEPART(yy, SOH.OrderDate) AS OrderYear, 'Q' + DATENAME(qq, SOH.OrderDate) AS OrderQtr,SUM(SOD.UnitPrice * SOD.OrderQty) AS Sales
FROM Production.ProductSubcategory PS INNER JOIN
Sales.SalesOrderHeader SOH INNER JOIN
Sales.SalesOrderDetail SOD ON SOH.SalesOrderID = SOD.SalesOrderID INNER JOIN
Production.Product P ON SOD.ProductID = P.ProductID ON PS.ProductSubcategoryID = P.ProductSubcategoryID INNER JOIN
Production.ProductCategory PC ON PS.ProductCategoryID = PC.ProductCategoryID
GROUP BY DATEPART(yy, SOH.OrderDate), PC.Name, PS.Name, 'Q' + DATENAME(qq, SOH.OrderDate), PS.ProductSubcategoryID
```

> Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `AdventuresWorks` database is used here.

## Add data bar report item

1. Drag and drop table report item to the design area.
   ![Data bar item in item panel](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/add-table.png '#width=295px')
2. Assign [dataset](./../../../report-items/tablix/assign-data-to-tablix-data-region/#assign-data-from-properties-panel) to the table.
   ![Assign dataset to table](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/assign-data.png '#width=355px')
3. Design a simple table design with two columns like below.
   ![Table report design](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/basic-table-design.png '#width=245px')
4. Click on `Details group` in `Row Groups` pane, now the respective tablix member properties will be listed in the properties panel.
   ![Group properties](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/select-detail-group.png)
5. Click on the `Set Groups...` button in the properties panel. Now, the `Grouping` dialog will be opened like below.
   ![Group dialog](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/group-dialog.png '#width=385px')
6. Click on `Add` button and select `SubCat` and click OK.
   ![Group data in table](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/group-data.png '#width=385px')
7. Now select the `Sales` text box and [assign the following expression](./../../../report-items/tablix/assign-data-to-tablix-data-region/#edit-expression-in-properties-panel) `=Sum(Fields!Sales.Value)` in the cell.
   ![Sum sales value](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/sum-sales-value.png '#width=355px')
8. Format the numbers produced by the `Sales` field, using `Format` property. Set the `'$'#,0;('$'#,0)` as value format property field.
   ![Format textbox value](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/format-sales-value.png '#width=355px')
9. [Add a column](./../../../report-items/tablix/insert-or-delete-a-column-ssrs/#insert-a-column) to the right and name it as `Sales Indicator`.
   ![Add column in table](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/add-column.png '#width=355px')
10. Drag and drop the data bar report item into last cell of the table.
    ![Add data bar report item](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/add-databar.png '#width=355px')

    Now, the report design will look like below.

    ![Basic design of data bar report](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/intial-design.png '#width=385px')

> Cannot insert a data bar into a detail cell. Detail members can only contain the static inner members.

## Assign data

1. Select the cell containing data bar report item and switch to `DATA` tab in properties panel.
   ![Assign data to chart](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/switch-data-assign.png)
2. Drag and drop `Sales` field into `Y-Values` section as shown below.
      ![Add series to data bar](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/assign-series-value.png '#width=385px')

## Configure properties

1. Now, switch to the `PROPERTIES` tab in the properties panel.
2. Choose the `Sales` series in the  `Choose Series` dropdown.
   ![Choose series in chart](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/choose-series.png '#width=385px')
3. Click on the edit icon to open series properties.
   ![Series properties](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/edit-icon.png '#width=385px')
4. Under data label settings category, enable  [Data Label](./../../../report-items/chart/data-label/) property checkbox.
   ![Chart data label](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/enable-data-label.png '#width=385px')
5. Format the numbers produced by the `Data labels`, using `Format` property. Set the `'$'#,0;('$'#,0)` as value in format property field.
   ![Format datalabel value](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/format-values.png '#width=385px')
6. In the below design background color and font styles are changed in table cells to improvise the report design.
   ![Format table design](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/format-report.png '#width=425px')

> Refer the [Cell Properties](./../../../report-items/tablix/cell-properties/#cell-properties) to style the table cell.

## Report preview

On report preview, the difference in sales between each product category will be displayed like below,

![Data bar RDL report preview](/static/assets/on-premise/images/report-designer/report-items/data-bar/design/report-preview.png '#width=455px')

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/data-bar/design-ssrs-data-bar-using-table.rdl)