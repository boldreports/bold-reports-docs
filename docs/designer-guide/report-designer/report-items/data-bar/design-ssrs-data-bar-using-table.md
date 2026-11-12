---
title: Design an SSRS Data Bar Report Using a Table | {{site.productName}}
description: Design an SSRS data bar report with a table in the {{site.productName}} Web Report Designer to show trends and changes in sales data across product subcategories.
keywords: ejReportDesigner, reportdesigner, table, data bar, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Design an SSRS data bar report using a table in {{site.productNameTM}}

To design a `Data bar` report in the {{site.productNameTM}} Web Report Designer, create a dataset, add a table report item, and place a data bar in a table column. The finished report shows the difference in sales between product subcategories.

## How do I create the dataset?

The {{site.productNameTM}} `Data bar` report in this example uses the following dataset query.

```sql
SELECT PC.Name AS ProdCat, PS.Name AS SubCat, DATEPART(yy, SOH.OrderDate) AS OrderYear, 'Q' + DATENAME(qq, SOH.OrderDate) AS OrderQtr,SUM(SOD.UnitPrice * SOD.OrderQty) AS Sales
FROM Production.ProductSubcategory PS INNER JOIN
Sales.SalesOrderHeader SOH INNER JOIN
Sales.SalesOrderDetail SOD ON SOH.SalesOrderID = SOD.SalesOrderID INNER JOIN
Production.Product P ON SOD.ProductID = P.ProductID ON PS.ProductSubcategoryID = P.ProductSubcategoryID INNER JOIN
Production.ProductCategory PC ON PS.ProductCategoryID = PC.ProductCategoryID
GROUP BY DATEPART(yy, SOH.OrderDate), PC.Name, PS.Name, 'Q' + DATENAME(qq, SOH.OrderDate), PS.ProductSubcategoryID
```

> To create the dataset with this query, see [Create an embedded dataset](./../../../manage-data/dataset/create-an-embedded-dataset/). This example uses the `AdventuresWorks` database.

## How do I add the data bar report item to a table?

You add a data bar to a table cell in the {{site.productNameTM}} Web Report Designer after you set up the table and its groups.

1. Drag and drop the table report item to the design area.
   ![Data bar item in item panel](/static/images/report-designer/report-items/data-bar/design/add-table.png '#width=295px')
2. Assign a [dataset to the table](./../../../report-items/tablix/assign-data-to-tablix-data-region/#assign-dataset-from-properties-panel).
   ![Assign dataset to table](/static/images/report-designer/report-items/data-bar/design/assign-data.png '#width=355px')
3. Create a simple table design with two columns, as shown in the following image.
   ![Table report design](/static/images/report-designer/report-items/data-bar/design/basic-table-design.png '#width=245px')
4. Click `Details group` in the `Row Groups` pane. The properties panel lists the respective tablix member properties.
   ![Group properties](/static/images/report-designer/report-items/data-bar/design/select-detail-group.png)
5. Click the `Set Groups...` button in the properties panel. The `Grouping` dialog opens.
   ![Group dialog](/static/images/report-designer/report-items/data-bar/design/group-dialog.png '#width=385px')
6. Click the `Add` button, select `SubCat`, and click OK.
   ![Group data in table](/static/images/report-designer/report-items/data-bar/design/group-data.png '#width=385px')
7. Select the `Sales` text box and [assign an expression with the data assign menu](./../../../report-items/tablix/assign-data-to-tablix-data-region/#edit-expression-using-data-assign-menu). Use the expression `=Sum(Fields!Sales.Value)` in the cell.
   ![Sum sales value](/static/images/report-designer/report-items/data-bar/design/sum-sales-value.png '#width=355px')
8. Format the numbers produced by the `Sales` field with the `Format` property. Set `'$'#,0;('$'#,0)` as the value of the format property field.
   ![Format textbox value](/static/images/report-designer/report-items/data-bar/design/format-sales-value.png '#width=355px')
9. [Add a column to the right](./../../../report-items/tablix/insert-or-delete-a-column-ssrs/#insert-a-column) and name it `Sales Indicator`.
   ![Add column in table](/static/images/report-designer/report-items/data-bar/design/add-column.png '#width=355px')
10. Drag and drop the data bar report item into the last cell of the table.
    ![Add data bar report item](/static/images/report-designer/report-items/data-bar/design/add-databar.png '#width=355px')

    The following image shows the resulting report design.

    ![Basic design of data bar report](/static/images/report-designer/report-items/data-bar/design/intial-design.png '#width=385px')

> Cannot insert a data bar into a detail cell. Detail members can only contain the static inner members.

## How do I assign data to the data bar?

You assign data to a {{site.productNameTM}} data bar in the `DATA` tab of the properties panel.

1. Select the cell that contains the data bar report item and switch to the `DATA` tab in the properties panel.
   ![Assign data to chart](/static/images/report-designer/report-items/data-bar/design/switch-data-assign.png)
2. Drag and drop the `Sales` field into the `Y-Values` section.
      ![Add series to data bar](/static/images/report-designer/report-items/data-bar/design/assign-series-value.png '#width=385px')

## How do I configure the data bar properties?

You configure the {{site.productNameTM}} data bar series and data labels in the `PROPERTIES` tab of the properties panel.

1. Switch to the `PROPERTIES` tab in the properties panel.
2. Choose the `Sales` series in the `Choose Series` dropdown.
   ![Choose series in chart](/static/images/report-designer/report-items/data-bar/design/choose-series.png '#width=385px')
3. Click the edit icon to open the series properties.
   ![Series properties](/static/images/report-designer/report-items/data-bar/design/edit-icon.png '#width=385px')
4. Under the data label settings category, enable the [Data Label](./../../../report-items/chart/data-label/) property checkbox.
   ![Chart data label](/static/images/report-designer/report-items/data-bar/design/enable-data-label.png '#width=385px')
5. Format the numbers produced by the `Data labels` with the `Format` property. Set `'$'#,0;('$'#,0)` as the value in the format property field.
   ![Format datalabel value](/static/images/report-designer/report-items/data-bar/design/format-values.png '#width=385px')
6. Change the background color and font styles of the table cells to improve the report design, as shown in the following image.
   ![Format table design](/static/images/report-designer/report-items/data-bar/design/format-report.png '#width=425px')

> To style the table cell, see [Cell Properties](./../../../report-items/tablix/cell-properties/#cell-properties).

## What does the data bar report look like in preview?

The {{site.productNameTM}} data bar report preview displays the difference in sales between each product category, as shown in the following image.

![Data bar RDL report preview](/static/images/report-designer/report-items/data-bar/design/report-preview.png '#width=455px')

> Download the [data bar report design (RDL) from GitHub](https://github.com/boldreports/resources/tree/master/docs/report-designer/data-bar/design-ssrs-data-bar-using-table.rdl)

## Frequently asked questions

### Can I insert a data bar into a table detail cell?

No. You cannot insert a data bar into a detail cell, because detail members can only contain static inner members. Group the details first, as this example does with `SubCat`.

### How do I show currency values on the data bar?

Enable the `Data Label` property in the series properties. Then, set `'$'#,0;('$'#,0)` in the `Format` property field.

## See also

* [Data bar report item](./../)
* [Assign data to a tablix data region](./../../../report-items/tablix/assign-data-to-tablix-data-region/)
* [Chart data label properties](./../../../report-items/chart/data-label/)
* [Table cell properties](./../../../report-items/tablix/cell-properties/)
