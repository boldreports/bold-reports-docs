---
title: Nest a Chart Inside a Matrix in RDL Reports | Bold Reports
description: Place a chart inside a tablix or matrix data region in the Bold Reports Web Report Designer to show different views of the same dataset in one RDL report.
keywords: ejReportDesigner, reportdesigner, list, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, nested data regions, tablix
---

# Nest a chart inside a data region in the Bold Reports<sup>®</sup> Web Report Designer

In the Bold Reports<sup>®</sup> Web Report Designer, you can place a chart inside another data region, such as a tablix, to link both data regions to the same dataset. This provides different views of the same data. The following steps design the sales of each product sub-category, for each product category group and order year, by using a chart and a matrix data region.

## How do I create the dataset?

To present data in the matrix format in the Web Report Designer, create a dataset and bind data to the matrix data region. This example uses the following dataset query for dataset creation.

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

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section and create a dataset using the above query. The `AdventuresWorks` database is used here.

## How do I add a matrix to the report?

The Web Report Designer lists the matrix report item in the item panel under the `Data Regions` category.

![Matrix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/item-panel-view.png '#width=145px')

Drag and drop the matrix report item into the design area from the item panel. The properties of the matrix report item are listed in the properties panel. By default, it is named `Tablix1`.

![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/drag-and-drop-matrix.png '#width=355px')

The matrix initially has an empty default row group, column group, and a data cell.

![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/initial-matrix-structure.png '#width=385px')

### How do I assign data to the matrix?

In the Web Report Designer, assign the dataset to the `Dataset` property of the matrix report item.

![Drag and drop matrix report item into design area](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/assign-data.png '#width=355px')

Refer to the [Assign fields](./../../../report-items/tablix/assign-data-to-tablix-data-region/) section and assign the `ProdCat` and `OrderYear` fields in the initial matrix design. The first field that you assign to the row group or column group replaces the initial empty default row group or column group. In the following image, the `ProdCat` field is assigned to the row group. Notice the `Row Grouping pane`.

![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/default-group-replace.png '#width=385px')

Similarly, assign `OrderYear` to the column group.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/delete-details-group-output.png '#width=355px')

## How do I add a chart into the matrix?

To add a chart into a matrix cell in the Web Report Designer, follow these steps:

1. Drag and drop a rectangle and place it inside the second row, last cell.
   ![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-rectangle.png '#width=355px')
   > Use rectangles to control the sizing of the inserted chart item.
2. Drag an `Exploded-pie` chart from the item panel and place it inside the rectangle.
   ![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-chart-into-cell.png '#width=355px')
3. The chart is placed inside the rectangle within the table cell, as shown below.
   ![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-chart-design.png '#width=355px')
4. Resize the chart and matrix design as required.
   ![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/resize-table-design.png '#width=355px')

## How do I assign data to the chart?

To assign data to the nested chart in the Web Report Designer, select the chart report item in the table cell. The chart properties are listed in the properties panel. Then, click the `DATA` tab.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/open-chart-properties.png)

Based on the dataset assigned to the parent matrix report item, the dataset fields are listed in the `DATA` assign panel. The numeric columns and numeric expressions are listed under the `Measures` section. Other types of columns and dimension expressions are listed under the `Dimensions` section.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/data-assign-panel.png '#width=355px')

Drag the `Sales` field from the `Measures` section and drop it in the `Y Values` section.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-y-value.png '#width=355px')

Then, drag the `SubCat` field from the `Dimensions` section and drop it into the `Column` section. This field is measured against the selected numeric column(s) in the `Y Value(s)` section.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/add-column-field.png '#width=355px')

## How do I format the matrix?

In the following Web Report Designer design, the background color and font styles of the matrix cells are changed to improve the report design.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/format-matrix-report.png '#width=355px')

> Refer to the [Cell Properties](./../../../report-items/tablix/cell-properties/#cell-properties) to style the matrix cell.

## How do I format the chart?

To format the nested chart in the Web Report Designer, select the chart in the table cell. The chart properties are listed in the properties panel.

1. Disable the show legend checkbox.

    ![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/show-legend.png '#width=355px')

2. Disable the chart title property.

    ![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/chart-title.png '#width=355px')

3. Edit the `Sales` series properties.

    ![Edit series properties](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/edit-series.png '#width=355px')

4. Under `Data Label Settings`, enable the chart data label checkbox.

    ![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/enable-data-label.png '#width=355px')

5. Set the data label text value as `#AXISLABEL` in the `Label` property.

    ![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/data-label-value.png '#width=355px')

    Refer to the [Show Data Label](./../../../report-items/chart/data-label/) section to customize the data label in the chart.

6. To set the label position for the pie chart, set the `PieLabelStyle=Outside` custom attributes property.

    ![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/custom-attributes.png '#width=355px')

    ![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/set-label-position.png '#width=355px')

7. Set the series color using the `Color Palette` property.

    ![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/color-palette.png '#width=355px')

You can further customize the appearance of the chart using the chart properties in the properties panel.

## What does the final design look like?

To finish the nested chart design in the Web Report Designer, resize the tablix data region to the required size in the design area. The final design looks like the following image.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/final-design.png '#width=445px')

## How do I preview the report?

To see the report preview in the Web Report Designer, click the **Preview** button in the top-right corner of the report header.

![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/chart/nested-data-region/final-design-preview.png)

> Download the [chart nested data region report design file from GitHub](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/nested-data-region.rdl).

## Frequently asked questions

### Why place the chart inside a rectangle in the matrix cell?

Use rectangles to control the sizing of the inserted chart item.

### Which fields can the nested chart use?

The nested chart lists the dataset fields assigned to the parent matrix report item in the `DATA` assign panel.

## See also

* [Exploded pie chart](./../exploded-pie-chart/)
* [Chart data labels](./../data-label/)
* [Chart color palette](./../color-palette/)
