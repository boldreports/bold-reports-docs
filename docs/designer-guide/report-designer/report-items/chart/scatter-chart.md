---
title: Create a Scatter Chart in RDL Reports | Bold Reports
description: Add a scatter chart to an RDL report in the Bold Reports Web Report Designer, bind X and Y values, format the legend, axes, and page breaks, and preview it.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Scatter chart in Bold Reports<sup>®</sup> Web Report Designer

You add a **Scatter Chart** to a report in the Bold Reports<sup>®</sup> Web Report Designer by dragging it from the item panel. Use it to compare a large number of data points shown as dots, irrespective of time.

## How do I add a scatter chart to the report?

The Bold Reports<sup>®</sup> Web Report Designer lists the scatter chart under the `Distribution` category in the item panel.

1. Drag the scatter chart from the item panel and drop it into the design area.

   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/drag-chart-from-item-panel.png '#width=215px')

2. The Web Report Designer renders the scatter chart in the design area and lists the chart properties in the properties panel.

   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/initial-view-of-scatter-chart.png)

## How do I create data for the scatter chart?

To present data in a Bold Reports<sup>®</sup> scatter chart, create a dataset and bind it to the chart data region. This example uses the following dataset query to create the dataset.

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

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section and create a dataset using the above query. This example uses the `AdventuresWorks` database.

## How do I assign data to the scatter chart?

A Bold Reports<sup>®</sup> scatter chart needs a minimum of 1 value element and 1 column element to display data. Drop the measure or expression field you want to analyze into the `Y Values` section. Drop the dimension that categorizes the measure onto the `Columns` section. To categorize by a series, also drop the respective dimension onto the `Rows` section.

To configure data in the scatter chart, follow these steps:

1. Focus on the chart report item placed in the design area.
2. Click the `Properties` icon in the configuration panel to open the property pane, and switch to the `DATA` tab.
   ![Chart properties pane](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/chart-properties-pane.png '#width=425px')
3. Choose a dataset from the drop-down list, which shows the data available in the report.
   ![Choose the dataset for chart](/static/assets/on-premise/images/report-designer/report-items/chart/data-assign-drop-down.png '#width=385px')
4. Review the fields. The `Measures` section lists numeric columns and numeric expressions. The `Dimensions` section lists other column types and dimension expressions.
   ![Measures and dimensions](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/measures-dimensions-category.png '#width=385px')
5. **Drag and Drop Measure Element**:
   Drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Values` section.
   ![Add a Y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/add-y-values-field.png '#width=385px')
   The following image shows the report item design after you add the Y value field.
   ![Preview after adding y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/y-value-chart-design-view.png '#width=385px')
6. **Aggregate Options**:
   Click the `Settings` icon (highlighted in the following image) to open the aggregation type drop-down list.
   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/aggregation-settings-icon.png '#width=215px')
   Set the aggregation type used to compute the selected column.
   ![Aggregate menu list](/static/assets/on-premise/images/report-designer/report-items/chart/aggregation-settings-menu.png '#width=385px')
7. **Drag and Drop Dimension Element**:
   Drag the dimension element from the `Dimensions` section and drop it into the `Column` section. The dimension measures against the numeric column(s) selected in the `Y Value(s)` section.
   ![Add dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/add-field-to-column-section.png '#width=385px')
   The following image shows the report item design after you add the dimension field.
   ![Preview after adding dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/column-field-design-preview.png '#width=385px')
8. **Grouping**:
   Group the added column element with another column by adding the respective dimension element into the Row(s) section.
   ![Achieve grouping by row values](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/add-field-to-rows-section.png '#width=215px')
   The following image shows the report item design after you add the row grouping.
   ![Preview of row value grouping ](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/row-field-design-preview.png '#width=385px')
9. **X-Value(s)**:
   Drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `X Values` section. The chart then plots the data between two values to compare a large number of data points.

## How do I format the scatter chart?

You format a scatter chart in the Bold Reports<sup>®</sup> Web Report Designer through the settings in the `Properties` tab. Use them to get the view you require.

To format a scatter chart, follow these steps:

1. Drag and drop the scatter chart into the design area and resize it to the required size.
2. Configure the data for the scatter chart.
3. Focus on the scatter chart and click the `Properties` icon in the configuration panel to open the property pane.
   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/open-chart-properties.png)

The property pane lists the properties available for the report item with their default values.

### Name

The **Name** property gives the scatter chart item a unique name in the report.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/name-property.png '#width=385px')

### Basic Settings

The **Basic Settings** category of the scatter chart contains the `Show Legend` and `Choose Series` properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/basic-settings.png '#width=385px')

#### Show Legend

A legend is text that describes the plotted data in a Bold Reports<sup>®</sup> chart. You can toggle the visibility of the legend in the chart and customize the legend text appearance. To set or reset legend properties, refer to the [Show Legend](./../../../report-items/chart/legend/) property.

#### Choose Series

The `Choose Series` drop-down lists the available series when you add multiple series to the chart. To customize the series appearance, choose the required series name in the drop-down.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/series/multi-series-list-in-drop-down.png '#width=385px')
Refer to the [Series](./../../../report-items/chart/series/) section to customize each series using the properties panel.

### Appearance

The **Appearance** properties style the scatter chart with border style, color, width, and background color in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/appearance-property.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/appearance-design.png)

### Chart Area

The **Chart Area** properties customize the area of the chart design with border style, border width, border color, shadow color, shadow offset, and background color.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/chart-area-sketch.png '#width=410px')

The properties panel lists these properties under the `Chart Area` category.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-area.png '#width=385px')

Use the [Color Palette](./../../../report-items/chart/color-palette/) property to customize the color of the chart.

### Title

The chart title is customized by editing the `Title Text` property of the scatter chart.

To show or hide the chart title, toggle the `Show Chart Title` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-title.png '#width=385px')

Use these properties to customize the font color, font text, font style, border, background, and position of the title in the chart design.

### No Data

The **No Data** property displays static text when the dataset returns empty or zero rows at run time.

![Chart No data message](/static/assets/on-premise/images/report-designer/report-items/chart/no-data/no-data.png '#width=385px')

To set or reset no data message properties, refer to the [No Data Message](./../../../report-items/chart/no-data-message/) property section.

### Category Axis

The category axis of a Bold Reports<sup>®</sup> chart displays text labels instead of numbers. To use the categorical axis, toggle the `Enable Axis` checkbox under the `Category Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/category-axis.png '#width=350px')

To set or reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Value Axis

The value axis of a Bold Reports<sup>®</sup> chart uses a numerical scale and displays numbers as labels. To use the value axis, toggle the `Enable Axis` checkbox under the `Value Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/value-axis.png '#width=350px')

To set or reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Grid line

The **Grid line** properties of the scatter chart can be set for the category axis and the value axis.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/grid-line.png '#width=385px')

#### Category Axis

To show the grid line for the category axis, enable the `Category Axis` checkbox.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/category-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/category-grid-line-advanced-properties.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/category-axis-minor-grid-lines.png '#width=410px')

#### Value Axis

To show the grid line for the value axis, enable the `Value Axis` checkbox.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/value-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/column-chart/value-grid-line-advanced-properties.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/value-axis-minor-grid-lines.png '#width=410px')

### Page break

The **page break** property controls the amount of information on each page when you preview the report. To apply the page break property to the chart report item, follow these steps:

1. Choose a `Break Location` type in the drop-down. The Break Location property specifies where the page break occurs.
   ![Break location](/static/assets/on-premise/images/report-designer/report-items/rectangle/break-location-types.png '#width=385px')
2. To prevent predefined page breaks from being applied during report preview, enable the `Break Disabled` property checkbox. You can also control page breaks during report preview by using expressions. For details on setting and resetting page breaks dynamically, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

   ![Page Break Disabled](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-break-disabled.png '#width=355px')
3. To restart page numbering on each page, enable the `Page Number Reset` property checkbox.
   ![Reset page number](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-break-property.png '#width=385px')

### Data Element

The **Data Element** properties control the visibility of the chart report item when you export the report in XML format. The properties panel lists them under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/tablix/data-element-properties.png '#width=385px')

#### Name

The `Name` field assigns a custom name to the chart element. The chart report item is exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/tablix/name-property.png '#width=385px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

The `Output` property controls the visibility of the chart when you export the report. Choose one of the following options:

* **Auto** or **Output** - Exports the chart report item.
* **NoOutput** - Does not export the chart report item.

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/tablix/output-property.png '#width=385px')

### Miscellaneous

The **Miscellaneous** category of the scatter chart contains the page name, document map, bookmark, custom attributes, tooltip, and custom style properties.

#### Page name

The **page name** property names the first worksheet of the Excel workbook when you export the report to Excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/chart/page-name.png '#width=385px')

You can set static or dynamic text as the page name. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Document Map

A **document map** is a navigational feature that displays a separate side pane with navigational links in a hierarchical structure when you view a report. Users click an item in the list to navigate to the report page that displays that item. Refer to the [Document Map](./../../../compose-report/document-map/) section to configure a document map in the report design.

You can set static or dynamic text as the value of the document map property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Bookmark

Bookmark links let users navigate to different parts of an SSRS report. You can add bookmarks to each textbox, image, table, or chart, or to the unique group values displayed in a tablix, to direct users to specified locations in the report. The bookmark value can be your own string or an expression. Refer to the [Bookmark](./../../../compose-report/bookmark/) section to configure bookmarks in the report design.

You can set static or dynamic text as the value of the bookmark property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Custom attributes

The **custom attributes** property sets the values for chart custom properties. To assign values for custom properties using the properties panel, refer to the [Custom Properties](./../../../compose-report/common-properties/#custom-properties) section.

#### Tooltip

The **Tooltip** property displays informative text or a value when the user hovers over the report item in report preview. To set a tooltip for a chart item using the properties panel, refer to the [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

#### Custom Style

The `Custom Style` property enables the use of external CSS for styling report items, providing enhanced flexibility beyond the built-in styling options. Use this property to meet specific design requirements and maintain consistent styling across multiple reports. For a step-by-step guide on setting up custom styles in your report, check the **How To** section of this guide.

![custom style property](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/custom-style-property.png '#width=355px')

## How do I preview the scatter chart report?

You preview the scatter chart report in the Bold Reports<sup>®</sup> Web Report Designer by clicking the preview icon in the design view.

1. The following image shows the final design with the preview icon.
   ![Preview icon in design view](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/preview-icon.png)
2. The following image shows the report preview.
   ![Chart report preview](/static/assets/on-premise/images/report-designer/report-items/chart/scatter-chart/report-preview-page.png)

> Download the [scatter chart report design file from GitHub](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/scatter-chart.rdl).

## Frequently asked questions

### What is the minimum data a scatter chart needs?

A Bold Reports<sup>®</sup> scatter chart needs a minimum of 1 value element and 1 column element to display data.

### Where is the scatter chart in the item panel?

The scatter chart is listed under the `Distribution` category in the item panel of the Web Report Designer.

## See also

* [Chart series properties](./../../../report-items/chart/series/)
* [Chart axis properties](./../../../report-items/chart/axis/)
* [Chart legend properties](./../../../report-items/chart/legend/)
