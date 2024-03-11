---
title: Configuring and Formatting Line Chart | Web ReportDesigner
description: Adding HTML5 JavaScript Line Chart control into report and formatting with the Bold Report Designer.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Line Chart

Line Chart allows you to showcase trends for analysis over a time period with data points connecting using straight lines.

## Add chart to the report

These types of charts are categorized under the `Distribution` category in item panel.

Drag and drop column chart from the item panel into design area.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-chart/drag-chart-from-item-panel.png '#width=245px')

Now, the line chart will be rendered in the design area and the chart properties will be listed in properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-chart/initial-view-of-column-chart.png)

## Create data

To present data in the chart, create a dataset and bind data to the chart data region. In this designing section, the following dataset query is used for dataset creation.

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

## Assign data

Column Chart needs a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into `Y Values` section. The dimension that you would like to categorize the measure, can be dropped onto `Columns` section. If you would like to categorize based on a series, then the respective dimension can be dropped onto `Rows` section in addition.

To configure data into column chart follow the steps:

1. To bind data to a chart report item placed in the design area, focus on that report item.
2. Click `Properties` icon in the configuration panel, the property pane opens. Now, switch to `DATA` tab.
   ![Chart properties pane](/static/assets/on-premise/images/report-designer/report-items/chart/line-chart/chart-properties-pane.png '#width=425px')
3. The available data in the report will be listed in the drop-down, choose a data in the drop-down list.
   ![Choose the dataset for chart](/static/assets/on-premise/images/report-designer/report-items/chart/data-assign-drop-down.png '#width=385px')
4. The numeric columns and numeric expressions are listed under the `Measures` section; other type of columns and dimension expressions are listed under the `Dimensions` section.
   ![Measures and dimensions](/static/assets/on-premise/images/report-designer/report-items/chart/line-chart/measures-dimensions-category.png '#width=385px')
5. **Drag and Drop Measure Element**:
   Select and drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Values` section.
   ![Add a Y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/column-chart/add-y-values-field.png '#width=385px')
   Now, the report item design will look like below:
   ![Preview after adding y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/line-chart/y-value-chart-design-view.png '#width=385px')
6. **Aggregate Options**:
   Click the `Settings` icon (highlighted below) to open the aggregation type drop-down list.
   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/aggregation-settings-icon.png '#width=245px')
   You can set the aggregation type by which you can compute the selected column.
   ![Aggregate menu list](/static/assets/on-premise/images/report-designer/report-items/chart/aggregation-settings-menu.png '#width=385px')
7. **Drag and Drop Dimension Element**:
   Select and drag the dimension element from the `Dimensions` section to measure against any of the selected numeric column(s) in `Y Value(s)` section, and drop into the `Column` section.  
   ![Add dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/column-chart/add-field-to-column-section.png '#width=385px')
   Now, the report item design will look like below:
   ![Preview after adding dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/line-chart/column-field-design-preview.png '#width=385px')
8. **Grouping**:
   You can group the added column element with another column, by adding the respective dimension element into Row(s) section.
   ![Achieve grouping by row values](/static/assets/on-premise/images/report-designer/report-items/chart/column-chart/add-field-to-rows-section.png '#width=385px')
   Now, the report item design will look like below.
   ![Preview of row value grouping ](/static/assets/on-premise/images/report-designer/report-items/chart/line-chart/row-field-design-preview.png '#width=385px')

> Follow the above steps to assign data for other chart categories such as bar, line, area, radar and polar.

## Format line chart

You can format the line chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To format line chart follow the below steps:

1. Drag and drop the line chart into design area and resize it to required size.
2. Configure the data to the line chart.
3. Focus on the line chart and click `Properties` icon in the configuration panel, the property pane opens.
   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-chart/open-chart-properties.png)

You can see the list of properties available for the widget with default value.

### Name

Name property can be used to provide an unique name to the chart item in the report.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/name-property.png '#width=385px')

### Basic Settings

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/basic-settings.png '#width=385px')

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also you can customize the legend text appearance. To set/reset legend properties, refer [Show Legend](./../../../report-items/chart/legend/) property.

#### Choose Series

You can add multiple series to the chart and the available series will be listed in the `Choose Series` drop-down. To customize the series appearance choose the required series name in the drop-down.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/series/multi-series-list-in-drop-down.png '#width=385px')

Refer [Series](./../../../report-items/chart/series/) section, to customize each series using the properties panel.

### Appearance

The border style, color, width and background color properties can be used to style the chart and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/appearance-property.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-chart/appearance-design.png)

### Chart Area

Chart Area properties such as border width, color, and background color can be used to customize the area of the chart design.
These properties are listed under `Chart Area` category.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-area.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-chart/chart-area-design.png)

Use [Color Palette](./../../../report-items/chart/color-palette/) property to customize the color of the chart.

### Title

The chart title can be customized by editing the `Title Text` property of the chart.

To show/hide the chart title, toggle the `Show Chart Title` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-title.png '#width=385px')

Using these properties the font color, font text, font style, border, background and position of the title can be customized in the chart design.

### No Data

No Data property is used to display static text when dataset results with a empty or zero rows at run time.

![Chart No data message](/static/assets/on-premise/images/report-designer/report-items/chart/no-data/no-data.png '#width=385px')

To set/reset no data message properties, refer [No Data Message](./../../../report-items/chart/no-data-message/) property section.

### Category Axis

Category axis displays the text labels instead of numbers. To use the categorical axis, toggle the `Enable Axis` checkbox under `Category Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/category-axis.png '#width=385px')

To set/reset axis properties, refer [Axis Properties](./../../../report-items/chart/axis/) property.

### Value Axis

Value axis uses numerical scale and displays numbers as labels. To use the value axis, toggle the `Enable Axis` checkbox under `Value Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/value-axis.png '#width=385px')

To set/reset axis properties, refer [Axis Properties](./../../../report-items/chart/axis/) property.

### Grid line

The Grid line properties can be set to category and value axis.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/grid-line.png '#width=385px')

#### Category Axis

To show the grid line for category axis, enable the `Category Axis` checkbox.

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/category-grid-line-advanced-properties.png '#width=385px')

#### Value Axis

To show the grid line for value axis, enable the `Value Axis` checkbox.

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/column-chart/value-grid-line-advanced-properties.png '#width=385px')

### Page break

The page break property can be used to control the amount of information on each page when you preview the report. Follow the below steps to apply page break property for chart report item.

1. The Break Location property specifies where the page break should occur. Choose any `Break Location` type in the drop-down.
   ![Break location](/static/assets/on-premise/images/report-designer/report-items/rectangle/break-location-types.png '#width=385px')
2. To restart the page numbering on each page, enable `Page Number Reset` property checkbox.
   ![Reset page number](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-break-property.png '#width=385px')

### Data Element

Data element can be used to control visibility of a report item when exporting the report in XML format. The Data element properties are listed in the properties panel, under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/tablix/data-element-properties.png '#width=385px')

#### Name

You can assign a custom name for the chart element using the `Name` field. The chart report item will be exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/tablix/name-property.png '#width=385px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

On exporting the report, the visibility of the chart can be controlled using the `Output` property. Choosing the following options for the `Output` property will perform the respective operations:

* **Auto** or **Output** - Exports the chart report item
* **NoOutput** - Does not export the chart report item

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/tablix/output-property.png '#width=385px')

### Miscellaneous

#### Page name

The page name property is used to name the first worksheet of the Excel workbook, when exporting the report to excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/chart/page-name.png '#width=385px')

You can set the static or dynamic text as page name. To set and reset dynamic text, refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Document Map

A document map is a navigational feature that displays a separate side pane with set of navigational links in hierarchical structure when you view a report. A user can click the content in the list, to navigate to the report page that displays that item. Refer [Document Map](./../../../compose-report/document-map/) section to configure document map in the report design.

You can set the static or dynamic text as value for document map property. To set and reset dynamic text, refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Bookmark

Bookmark links allows the users to navigate to different parts of a SSRS report. You can add bookmarks to each textbox, image, table or chart or to the unique group values displayed in a tablix which can direct the users to specified locations in the report. The value of bookmark property can be your own strings or an expression. Refer [Bookmark](./../../../compose-report/bookmark/) section to configure bookmark in the report design.

You can set the static or dynamic text as value for bookmark property. To set and reset dynamic text, refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Custom attributes

This property can be used to set the values for chart custom properties. To create and assign values for custom properties using properties panel refer [Custom Properties](./../../../compose-report/common-properties/#custom-properties) section.

#### Tooltip

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for chart item using properties panel refer [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

## Preview report

1. To see the report preview, click on the **Preview** button in the top-right corner of the report header.
   ![Preview icon in design view](/static/assets/on-premise/images/report-designer/report-items/chart/line-chart/preview-icon.png)
2. Now, the report preview can be visualized like below.
   ![Chart report preview](/static/assets/on-premise/images/report-designer/report-items/chart/line-chart/report-preview-page.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/line-chart.rdl).