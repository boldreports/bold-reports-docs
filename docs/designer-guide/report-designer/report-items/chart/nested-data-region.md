---
title: Chart Nested data regions | Report Designer | Bold Reports
description: This section describes about nested data regions and the steps design a report with cart as nested data regions in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, list, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, nested data regions, tablix
---

# Chart Nested Data Regions

The data region such as a chart can be placed inside the another data region such as a tablix, to link more than one data region to the same dataset. This will provide different views of the same data. In the below steps, sales of each sub-category products for each product category group and order year is designed using chart and matrix data region.

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

![Matrix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/item-panel-view.png)

Drag and drop the matrix report item into the design area from the item panel. The properties of matrix report item will be listed in properties panel. By default, it will be named as `Tablix1`.

![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/drag-and-drop-matrix.png)

The matrix initially has empty default row group, column group and a data cell.

![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/initial-matrix-structure.png)

### Assign data

Assign dataset to the `Dataset` property of matrix report item.
![Drag and drop matrix report item into design area](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/assign-data.png)

Refer [Assign fields](./../../../report-items/tablix/assign-data-to-tablix-data-region/) section and assign the `ProdCat` and `OrderYear` fields in  initial matrix design.
The first field that we assign to the row group or column group will replace the initial empty default row group or column group. Now, I have assigned `ProdCat` field in row group, notice the `Row Grouping pane`.

![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/default-group-replace.png)

Similarly, assign `OrderYear` in column group.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/delete-details-group-output.png)

## Add chart into the matrix

1. Drag and drop a rectangle and place inside the second row, last cell.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-rectangle.png)
   > Use rectangles to control the sizing of inserted chart item.
2. Now, drag a `Exploded-pie` chart from the item panel and place inside the rectangle.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-chart-into-cell.png)
3. The chart will be placed inside rectangle within table cell as below,
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-chart-design.png)
4. Resize the chart and matrix design as required.
![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/resize-table-design.png)

## Assign data to chart

Select the chart report item in table cell. Now, the chart properties will be listed in the properties panel. Then, click on the `DATA` tab.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/open-chart-properties.png)

Based on the dataset assigned for parent matrix report item, the dataset field will be listed in the `DATA` assign panel. The numeric columns and numeric expressions are listed under the `Measures` section; other type of columns and dimension expressions are listed under the `Dimensions` section.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/data-assign-panel.png)

Now, drag and drop `Sales` field from `Measures` section and drop it in the `Y Values` section.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-y-value.png)

Then, drag and drop `SubCat` field from the `Dimensions` section to measure against any of the selected numeric column(s) in `Y Value(s)` section, and drop into the `Column(s)` section.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-column-field.png)

## Format matrix

In the below design background color and font styles are changed in matrix cells to improvise the report design.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/format-matrix-report.png)

> Refer the [Cell Properties](./../../../report-items/tablix/cell-properties/#cell-properties) to style the matrix cell.

## Format chart

Select the chart in the table cell. Now, the chart properties will be listed in the properties panel.

Disable the show legend checkbox,

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/show-legend.png)

Disable the chart title property,

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/chart-title.png)

Edit the `Sales` series properties.

![Edit series properties](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/edit-series.png)

Under `Data Label Settings`, enable the chart data label checkbox.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/enable-data-label.png)

Now, set the data label text value as `#AXISLABEL` in the `Label` property.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/data-label-value.png)

Refer [Show Data Label](./../../../report-items/chart/data-label/) section to customize data label in chart.

To set label position for pie chart, set `PieLabelStyle=Outside` custom attributes property.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/custom-attributes.png)

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/set-label-position.png)

Set the series color using the `Color Palette` property.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/color-palette.png)

You can further customize the appearance of the chart using the chart properties in properties panel.

## Final design

Resize the tablix data region to the required size in the design area. Now, the final design will look like below,

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/final-design.png)

## Report preview

To see the report preview, click on the **Preview** button in the top-right corner of the report header.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/final-design-preview.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/nested-data-region.rdl).