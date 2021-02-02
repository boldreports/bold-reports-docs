---
title: Design SSRS Matrix Report | Report Designer | Bold Reports
description: This section describes steps to design a company sales report using matrix report item in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Design SSRS Matrix Report

This section describes the steps to design yearly sales report of a company using SSRS matrix report item.

## Create dataset

To present data in the matrix format, create a dataset and bind data to the matrix data region. In this designing section, the following dataset query is used for dataset creation.

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

> Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `AdventuresWorks` database is used here.

## Add matrix to the report

The matrix report item is listed in the item panel under the `Data Regions` category.
![Matrix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/matrix/item-panel-view.png)

Drag and drop the matrix report item into the design area from the item panel. The properties of matrix report item will be listed in properties panel. By default, it will be named as `Tablix1`.

![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/matrix/drag-and-drop-matrix.png)

The matrix initially has empty default row group, column group and a data cell.

![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/matrix/initial-matrix-structure.png)

### Assign data

Assign dataset to the `Dataset` property of matrix report item.
![Drag and drop matrix report item into design area](/static/assets/on-premise/images/report-designer/report-items/matrix/assign-data.png)

Refer [Assign fields](./../../../report-items/tablix/assign-data-to-tablix-data-region/) section and assign the `ProdCat`, `OrderYear` and `Sales` fields in  initial matrix design.
The first field that we assign to the row group or column group will replace the initial empty default row group or column group. Now, I have assigned `ProdCat` field in row group, notice the `Row Grouping pane`.

### Delete details group

![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/matrix/default-group-replace.png)

Similarly, assign `OrderYear` in column grouping pane and sales field in data cell.

![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/matrix/assign-initial-fields.png)

### Add child row group

1. In the `Row Groups` pane, open the group menu in `ProdCat1` group field.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/open-group-menu-to-add-child-group.png)
2. From the context menu, click on `Child Group...` option under `Add Group` category.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/child-row-group.png)
3. Once you click on the `Child Group` option, a `Tablix Group` dialog will be opened to configure the grouping.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/matrix/tablix-group-dialog.png)
4. Here, `SubCat` field is chosen as child row group in tablix data region. Click on the `OK` button
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/matrix/select-child-row-group.png)

Now, the matrix design will look like below.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/matrix/child-row-group-output.png)

### Add child column group

1. In the `Column Groups` pane, open the group menu in `OrderYear1` group field.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/open-group-menu-to-add-column-child-group.png)
2. From the context menu, click on `Child Group...` option under `Add Group` category.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/choose-child-group-option.png)
3. Once you click on the `Child Group` option, a `Tablix Group` dialog will be opened to configure the grouping.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/matrix/tablix-group-dialog.png)
4. Here, `OrderQtr` field is chosen as child column group in tablix data region. Click on the `OK` button
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/matrix/choose-child-group-field.png)

Now, the matrix design will look like below.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/add-child-column-group-output.png)

## Calculate a summary

Now, a matrix report is created with row groups and column groups. To calculate the total sales amount for each product category, refer [Assign expression in cell](./../../../report-items/tablix/assign-data-to-tablix-data-region/#assign-or-edit-expression-into-table-cell) section and assign the `=Sum(Fields!Sales.Value)` expression to the last cell in third row of the matrix design as shown below.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/calculate-fields.png)

> To set expression in matrix cell, refer [Assign or edit expression into table cell](./../../../report-items/tablix/assign-data-to-tablix-data-region/#assign-or-edit-expression-into-table-cell) section.

## Format data

By default, the summary data for the `Sales` field displays a general number. To format the `Sales` field to display the number as currency, set the format for `Sales` field cell using the `Format` property.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/format-data.png)

## Change width or height

The matrix report item expands horizontally as well as vertically. You can resize rows and columns to display the data without wrapping. To resize rows and column in matrix data region, refer [Resize tablix data region](./../../../report-items/tablix/resize-tablix-data-region/). Here, the width of columns in matrix design is resized to minimum required width as shown below.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/resize-output.png)

## Merge matrix cells

After adding row and column groups, corner cells are created in the matrix design. You can use the corner cell to display any label content or data. The number of corner cell in a matrix design is based on the number of row and column groups in the matrix. In the above matrix design, it has four cells in its corner area. The cells are arranged in two rows and two columns. The four cells are not used in this report and it can be merged as one. To merge the corner cells, refer [Merge cells in corner area](./../../../report-items/tablix/merge-cells-in-tablix-data-region/#corner-area)
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/merge-corner-cell.png)

## Format matrix design

In the below design background color and font styles are changed in matrix cells to improvise the report design.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/format-matrix-report.png)

> Refer the [Cell Properties](./../../../report-items/tablix/cell-properties/#cell-properties) to style the matrix cell.

## Report preview

On report preview, the yearly sales report of a company will be displayed like below,

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/matrix/matrix-design-preview.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/matrix/design-ssrs-matrix-report.rdl).