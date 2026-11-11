---
title: Add and Format an Area Chart in RDL Reports | Bold Reports
description: Add a stacked area chart to an RDL report in the Bold Reports Web Report Designer, bind data, and format its legend, series, axes, page break, and style.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Area Chart in Bold Reports<sup>®</sup> Web Report Designer

A stacked area chart in the Bold Reports<sup>®</sup> Web Report Designer compares multiple measures through filled curves stacked one after the other vertically.

## How do I add an area chart to the report?

Area charts in the Bold Reports<sup>®</sup> Web Report Designer are listed under the `Distribution` category in the item panel. Drag the area chart from the item panel and drop it into the design area.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/drag-chart-from-item-panel.png '#width=285px')

The area chart is rendered in the design area, and the chart properties are listed in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/initial-view-of-area-chart.png)

> Here, `Stacked Area` chart is used for demonstration.

## How do I create the data?

The area chart in the Web Report Designer needs a dataset bound to the chart data region to present data. This example uses the following dataset query.

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

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section and create the dataset using the above query. This example uses the `AdventuresWorks` database.

## How do I assign data to the area chart?

A stacked area chart in Bold Reports<sup>®</sup> needs a minimum of 1 value element and 1 column element. Drop the measure or expression field that you want to analyze into the `Y Values` section. Drop the dimension that categorizes the measure into the `Columns` section. To categorize based on a series, also drop the respective dimension into the `Rows` section.

To configure data in the area chart, follow these steps:

1. Focus on the chart report item placed in the design area to bind data to it.
2. Click the `Properties` icon in the configuration panel to open the property pane. Switch to the `DATA` tab.
   ![Chart properties pane](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/chart-properties-pane.png)
3. Choose a data in the drop-down list, which lists the available data in the report.
   ![Choose the dataset for chart](/static/assets/on-premise/images/report-designer/report-items/chart/data-assign-drop-down.png '#width=395px')
4. Review the fields. Numeric columns and numeric expressions are listed under the `Measures` section. Other types of columns and dimension expressions are listed under the `Dimensions` section.
   ![Measures and dimensions](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/measures-dimensions-category.png '#width=395px')
5. **Drag and Drop Measure Element**:
   Drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Values` section.
   ![Add a Y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/column-chart/add-y-values-field.png '#width=395px')
   The report item design then looks like the following image.
   ![Preview after adding y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/y-value-chart-design-view.png '#width=355px')
6. **Aggregate Options**:
   Click the `Settings` icon (highlighted below) to open the aggregation type drop-down list.
   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/aggregation-settings-icon.png '#width=215px')
   Set the aggregation type that computes the selected column.
   ![Aggregate menu list](/static/assets/on-premise/images/report-designer/report-items/chart/aggregation-settings-menu.png '#width=350px')
7. **Drag and Drop Dimension Element**:
   Drag the dimension element from the `Dimensions` section and drop it into the `Column` section to measure it against the selected numeric column(s) in the `Y Value(s)` section.
   ![Add dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/column-chart/add-field-to-column-section.png '#width=350px')
   The report item design then looks like the following image.
   ![Preview after adding dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/column-field-design-preview.png '#width=355px')
8. **Grouping**:
   Group the added column element with another column by adding the respective dimension element into the Row(s) section.
   ![Achieve grouping by row values](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/add-field-to-rows-section.png '#width=385px')
   The report item design then looks like the following image.
   ![Preview of row value grouping ](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/row-field-design-preview.png '#width=375px')

## How do I format the area chart?

You format the area chart in the Bold Reports<sup>®</sup> Web Report Designer with the settings in the `Properties` tab, so the view illustrates what you need.

To format the area chart, follow these steps:

1. Drag the area chart into the design area and resize it to the required size.
2. Configure the data for the area chart.
3. Focus on the area chart and click the `Properties` icon in the configuration panel to open the property pane.
   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/open-chart-properties.png '#width=425px')

The property pane lists the properties available for the report item with their default values.

### Name

The Name property provides a unique name for the chart item in the report.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/name-property.png '#width=385px')

### Basic Settings

The Basic Settings category of the area chart contains the Show Legend and Choose Series properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/basic-settings.png '#width=385px')

#### Show Legend

A legend is text that describes the plotted data. Use this property to toggle the visibility of the legend in the chart and customize the legend text appearance. To set or reset legend properties, refer to the [Show Legend](./../../../report-items/chart/legend/) property.

#### Choose Series

The `Choose Series` drop-down lists the series in the chart, and you can add multiple series. To customize a series appearance, choose the required series name in the drop-down.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/series/multi-series-list-in-drop-down.png '#width=385px')

Refer to the [Series](./../../../report-items/chart/series/) section to customize each series using the properties panel.

### Appearance

The border style, color, width, and background color properties style the chart and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/appearance-property.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/appearance-design.png)

### Chart Area

The Chart Area properties, such as border width, color, shadow color, shadow offset, and background color, customize the area of the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/chart-area-sketch.png '#width=410px')

These properties are listed under the `Chart Area` category.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-area.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/chart-area-design.png)

Use the [Color Palette](./../../../report-items/chart/color-palette/) property to customize the color of the chart.

### Title

The chart title is customized by editing the `Title Text` property of the chart.

To show or hide the chart title, toggle the `Show Chart Title` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-title.png '#width=350px')

These properties customize the font color, font text, font style, border, background, and position of the title in the chart design.

### No Data

The No Data property displays static text when the dataset returns empty or zero rows at run time.

![Chart No data message](/static/assets/on-premise/images/report-designer/report-items/chart/no-data/no-data.png '#width=350px')

To set or reset no data message properties, refer to the [No Data Message](./../../../report-items/chart/no-data-message/) property section.

### Category Axis

The category axis displays text labels instead of numbers. To use the categorical axis, toggle the `Enable Axis` checkbox under the `Category Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/category-axis.png '#width=350px')

To set or reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Value Axis

The value axis uses a numerical scale and displays numbers as labels. To use the value axis, toggle the `Enable Axis` checkbox under the `Value Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/value-axis.png '#width=350px')

To set or reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Grid line

The Grid line properties apply to the category and value axes of the area chart.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/grid-line.png '#width=355px')

#### Category Axis

To show the grid line for the category axis, enable the `Category Axis` checkbox.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/category-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/category-grid-line-advanced-properties.png '#width=350px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/category-axis-minor-grid-lines.png '#width=410px')

#### Value Axis

To show the grid line for the value axis, enable the `Value Axis` checkbox.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/value-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/column-chart/value-grid-line-advanced-properties.png '#width=350px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/value-axis-minor-grid-lines.png '#width=410px')

### Page break

The page break property controls the amount of information on each page when you preview the report. Follow these steps to apply the page break property to the chart report item.

1. Choose a `Break Location` type in the drop-down. The Break Location property specifies where the page break occurs.
   ![Break location](/static/assets/on-premise/images/report-designer/report-items/rectangle/break-location-types.png '#width=350px')

2. To prevent predefined page breaks from being applied during report preview, enable the `Break Disabled` property checkbox. You can also control the application of page breaks during report preview by using expressions. For details on setting and resetting page breaks dynamically, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

   ![Page Break Disabled](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-break-disabled.png '#width=355px')

3. To restart page numbering on each page, enable the `Page Number Reset` property checkbox.
   ![Reset page number](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-break-property.png '#width=350px')

### Data Element

The Data element properties control the visibility of a report item when you export the report in XML format. They are listed in the properties panel under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/tablix/data-element-properties.png '#width=350px')

#### Name

The `Name` field assigns a custom name to the chart element. The chart report item is exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/tablix/name-property.png '#width=350px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

The `Output` property controls the visibility of the chart when you export the report. The options perform the following operations:

* **Auto** or **Output** - Exports the chart report item.
* **NoOutput** - Does not export the chart report item.

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/tablix/output-property.png '#width=350px')

### Miscellaneous

The Miscellaneous category of the area chart contains the page name, document map, bookmark, custom attributes, tooltip, and custom style properties.

#### Page name

The page name property names the first worksheet of the Excel workbook when you export the report to Excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/chart/page-name.png '#width=350px')

 You can set static or dynamic text as the page name. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Document Map

A document map is a navigational feature that displays a separate side pane with a set of navigational links in a hierarchical structure when you view a report. A user can click the content in the list to navigate to the report page that displays that item. Refer to the [Document Map](./../../../compose-report/document-map/) section to configure a document map in the report design.

You can set static or dynamic text as the value for the document map property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Bookmark

Bookmark links allow users to navigate to different parts of an SSRS report. You can add bookmarks to each textbox, image, table, or chart, or to the unique group values displayed in a tablix, to direct users to specified locations in the report. The value of the bookmark property can be your own string or an expression. Refer to the [Bookmark](./../../../compose-report/bookmark/) section to configure bookmarks in the report design.

You can set static or dynamic text as the value for the bookmark property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Custom attributes

The Custom attributes property sets the values for chart custom properties. To assign values for custom properties using the properties panel, refer to the [Custom Properties](./../../../compose-report/common-properties/#custom-properties) section.

#### Tooltip

The Tooltip property displays informative text or a value when the user hovers over the report item in report preview. To set a tooltip for the chart item using the properties panel, refer to the [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

#### Custom Style

The `Custom Style` property enables the use of external CSS for styling report items, providing more flexibility than the built-in styling options. Use this property to meet specific design requirements and maintain consistent styling across multiple reports. For a step-by-step guide on setting up custom styles in your report, check the **How To** section of this guide.

![custom style property](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/custom-style-property.png '#width=355px')

## How do I preview the report?

You preview the area chart report from the Bold Reports<sup>®</sup> Web Report Designer design view.

1. Check the final report design, which looks like the following image.
   ![Preview icon in design view](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/preview-icon.png '#width=455px')
2. Preview the report. The report preview looks like the following image.
   ![Chart report preview](/static/assets/on-premise/images/report-designer/report-items/chart/area-chart/report-preview-page.png '#width=455px')

> Download the [area chart report design](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/area.rdl).

## Frequently asked questions

### What data does a stacked area chart need?

A stacked area chart in Bold Reports<sup>®</sup> needs a minimum of 1 value element in the `Y Values` section and 1 column element in the `Columns` section.

### Where is the area chart in the item panel?

Area charts are listed under the `Distribution` category in the item panel of the Web Report Designer.

### Can I stop the chart from exporting to XML?

Yes. Set the `Output` property under `Data Element` to **NoOutput** so the chart report item is not exported.

## See also

* [Chart axis properties](./../axis/)
* [Add filters to a chart data region](./../add-filters-to-chart-data-region/)
* [Create an embedded dataset](./../../../manage-data/dataset/create-an-embedded-dataset/)
