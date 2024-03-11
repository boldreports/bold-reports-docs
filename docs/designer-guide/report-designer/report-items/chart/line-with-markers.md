---
title: Line with Markers Chart | Report Designer | Bold Reports
description: Adding HTML5 JavaScript Line with Markers Chart control into report and formatting with the Bold Report Designer.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Line with Markers Chart

The **Line with Markers Chart** allows you to showcase trends for analysis over a time period with data points connecting using straight lines with markers.

## Add chart to the report

These types of charts are categorized under the `Distribution` category in the item panel.

Drag and drop the line with markers chart from the item panel into the design area.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/drag-chart-from-item-panel.png '#width=245px')

Now, the line with markers chart will be rendered in the design area and the chart properties will be listed in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/initial-view-of-line-with-markers.png)

## Create data

To present data in the chart, create a dataset and bind data to the chart data region. In this designing section, the following json data is used for dataset creation.

```json
[
   {
        points: [
         { Year: 2005, Percentage: 28 },{ Year: 2006, Percentage: 25 },{ Year: 2007, Percentage: 26 },{ Year: 2008, Percentage: 27 },
         { Year: 2009, Percentage: 32 },{ Year: 2010, Percentage: 35 },{ Year: 2011, Percentage: 30 }],
        Country: 'India'
   },
   {
        points: [
         { Year: 2005, Percentage: 31 },{ Year: 2006, Percentage: 28 },{ Year: 2007, Percentage: 30 },{ Year: 2008, Percentage: 36 },
         { Year: 2009, Percentage: 36 },{ Year: 2010, Percentage: 39 },{ Year: 2011, Percentage: 37 }],
        Country: 'Germany'
   },
   {
        points: [
         { Year: 2005, Percentage: 36 },{ Year: 2006, Percentage: 32 },{ Year: 2007, Percentage: 34 },{ Year: 2008, Percentage: 41 },
         { Year: 2009, Percentage: 42 },{ Year: 2010, Percentage: 42 },{ Year: 2011, Percentage: 43 }],
        Country: 'England'
   },
   {
        points: [
         { Year: 2005, Percentage: 39 },{ Year: 2006, Percentage: 36 },{ Year: 2007, Percentage: 40 },{ Year: 2008, Percentage: 44 },
         { Year: 2009, Percentage: 45 },{ Year: 2010, Percentage: 48 },{ Year: 2011, Percentage: 46 }],
        Country: 'France'
   }
]
```

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section for more information. Here, we are going to create a dataset using [JSON inline data](./../../../manage-data/data-connectors/json-data-source/#inline-data) to design the report.

## Assign data

The **Line with Markers Chart** needs a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into the `Y Value(s)` section. The dimension that you would like to categorize the measure can be dropped into the `Column` section. If you would like to categorize based on a series, then the respective dimension can be dropped onto the `Row(s)` section in addition.

To configure data into a line with markers chart, follow these steps:

1. To bind data to a chart report item placed in the design area, focus on that report item.

2. Click the `Properties` icon in the configuration panel, the property pane opens. Now, switch to the `DATA` tab.

   ![Chart properties pane](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/chart-properties-pane.png '#width=425px')

3. The available data in the report will be listed in the dropdown, choose a data in the dropdown list.

   ![Choose the dataset for chart](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/data-assign-drop-down.png '#width=385px')

4. The numeric columns and numeric expressions are listed under the `Measures` section; other types of columns and dimension expressions are listed under the `Dimensions` section.

   ![Measures and dimensions](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/measures-dimensions-category.png '#width=385px')

5. **Drag and Drop Measure Element**:

   Select and drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Value(s)` section.

   ![Add a Y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/add-y-values-field.png '#width=385px')

   Now, the report item design will look like below:

   ![Preview after adding y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/y-value-chart-design-view.png '#width=385px')

6. **Aggregate Options**:

   Click the `Settings` icon (highlighted below) to open the aggregation type dropdown list.

   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/aggregation-settings-icon.png '#width=215px')

   You can set the aggregation type by which you can compute the selected column.

   ![Aggregate menu list](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/aggregation-settings-menu.png '#width=385px')

7. **Drag and Drop Dimension Element**:

   Select and drag the dimension element from the `Dimensions` section to measure against any of the selected numeric column(s) in the `Y Value(s)` section, and drop it into the `Column` section.

   ![Add dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/add-field-to-column-section.png '#width=385px')

   Now, the report item design will look like below:

   ![Preview after adding dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/column-field-design-preview.png '#width=385px')

8. **Grouping**:

   You can group the added column element with another column by adding the respective dimension element into the `Row(s)` section.

   ![Achieve grouping by row values](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/add-field-to-rows-section.png '#width=385px')

   Now, the report item design will look like below.

   ![Preview of row value grouping ](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/row-field-design-preview.png '#width=385px')

9. **Formatting Column and Row(s) sections**:

   You can also [Filter](./../../../compose-report/filter-data/), [Sort](./../../../compose-report/sort-data/), or [Group](./../../../compose-report/group-data/) the Column or Row(s) sections using expressions.

## Format Line with Markers Chart

You can format the line with markers chart for better illustration of the view that you require, through the settings available in the  `Properties` tab.

To format a line with markers chart, follow the below steps:

1. Drag and drop the line with markers chart into the design area and resize it to the required size.
2. Configure the data to the line with markers chart.
3. Focus on the line with markers chart and click the `Properties` icon in the configuration panel, the property pane opens.

   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/open-chart-properties.png)

You can see the list of properties available for the widget with the default value.

### Name

The **Name** property can be used to provide a unique name for the chart item in the report.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/name-property.png '#width=385px')

### Basic Settings

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/basic-settings.png '#width=385px')

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of the legend in the chart and also customize the legend text appearance. To set/reset legend properties, refer to the [Show Legend](./../../../report-items/chart/legend/) property.

#### Choose Series

You can add multiple series to the chart and the available series will be listed in the `Choose Series` dropdown. To customize the series appearance, choose the required series name from the dropdown.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/multi-series-list-in-drop-down.png '#width=385px')

Refer to the [Series](./../../../report-items/chart/series/) section to customize each series using the properties panel.

### Appearance

The border style, color, width, and background color properties can be used to style the chart and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/appearance-property.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/appearance-design.png)

### Chart Area

The **Chart Area** properties such as border width, color, and background color can be used to customize the area of the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/chart-area.png '#width=410px')

These properties are listed under the `Chart Area` category.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/chart-area-category.png '#width=385px')

Here, we have set the `Color Palette` as `Pacific` and the design is shown below.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/chart-area-design.png)

Use the [Color Palette](./../../../report-items/chart/color-palette/) property to customize the color of the chart.

### Title

To show/hide the chart title, toggle the `Show Chart Title` checkbox. The chart title can be customized by editing the `Title Text` property of the chart. You can customize the font color, font text, font style, border, background, and position of the title in the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/chart-title.png '#width=425px')

### No Data

The **No Data** property is used to display static text when a dataset results with empty or zero rows at runtime.

![Chart No data message](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/no-data.png '#width=385px')

To set/reset no data message properties, refer to the [No Data Message](./../../../report-items/chart/no-data-message/) property section.

### Category Axis

The **Category axis** displays text labels instead of numbers. To use the categorical axis, toggle the `Enable Axis` checkbox under the `Category Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/category-axis.png '#width=385px')

To set/reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Value Axis

The **Value axis** uses a numerical scale and displays numbers as labels. To use the value axis, toggle the `Enable Axis` checkbox under the `Value Axis` category in the chart properties.

In this case, we have set the `Interval` as `5` to get the desired report design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/value-axis.png '#width=385px')

To set/reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Grid line

The **grid line** properties can be set to category and value axis.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/grid-line.png '#width=385px')

#### Category Axis

To show the grid line for category axis, enable the `Category Axis` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/category-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/category-grid-line-advanced-properties.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/category-axis-minor-grid-lines.png '#width=410px')

#### Value Axis

To show the grid line for value axis, enable the `Value Axis` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/value-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/value-grid-line-advanced-properties.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/value-axis-minor-grid-lines.png '#width=410px')

### Page break

The **page break** property can be used to control the amount of information on each page when you preview the report. Follow the below steps to apply the page break property to the chart report item.

1. The **Break Location** property specifies where the page break should occur. Choose any `Break Location` type in the dropdown.

   ![Break location](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/break-location-types.png '#width=385px')

2. To restart the page numbering on each page, enable the `Page Number Reset` property checkbox.

   ![Reset page number](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/page-break-property.png '#width=385px')

### Data Element

The **data element** can be used to control the visibility of a report item when exporting the report in XML format. The data element properties are listed in the properties panel, under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/data-element-properties.png '#width=385px')

#### Name

You can assign a custom name to the chart element using the `Name` field. The chart report item will be exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/data-element-name-properties.png '#width=385px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

On exporting the report, the visibility of the chart can be controlled using the **Output** property. Choosing the following options for the `Output` property will perform the respective operations:

* **Auto** or **Output** - Exports the chart report item
* **NoOutput** - Does not export the chart report item

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/output-property.png '#width=385px')

### Miscellaneous

#### Page name

The **page name** property is used to name the first worksheet of the Excel workbook, when exporting the report to excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/page-name.png '#width=385px')

You can set static or dynamic text as the page name. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Document Map

A **document map** is a navigational feature that displays a separate side pane with a set of navigational links in a hierarchical structure when you view a report. A user can click the content in the list to navigate to the report page that displays that item. Refer to the [Document Map](./../../../compose-report/document-map/) section to configure the document map in the report design.

You can set static or dynamic text as the value for the document map property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Bookmark

Bookmark links allow users to navigate to different parts of a SSRS report. You can add bookmarks to each textbox, image, table, chart, or to the unique group values displayed in a tablix, which can direct the users to specified locations in the report. The value of the bookmark property can be your own strings or an expression. Refer to the [Bookmark](./../../../compose-report/bookmark/) section to configure bookmarks in the report design.

You can set static or dynamic text as the value for the bookmark property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Custom attributes

This property can be used to set the values for chart custom properties. To create and assign values to custom properties using the properties panel, refer to the [Custom Properties](./../../../compose-report/common-properties/#custom-properties) section.

#### Tooltip

The **Tooltip** property can be used to display informative text or values when the user hovers over the report item in the report preview. To set a tooltip for a chart item using the properties panel, refer to the [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

## Preview report

1. To see the report preview, click on the **Preview** button in the top-right corner of the report header.

   ![Preview icon in design view](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/preview-icon.png '#width=445px')

2. Now, the report preview can be visualized as below.

   ![Chart report preview](/static/assets/on-premise/images/report-designer/report-items/chart/line-with-markers/report-preview-page.png '#width=445px')

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/line-with-markers.rdl).