---
title: Stacked Bar Chart | Bold Reports | Web Report Designer
description: Adding HTML5 JavaScript Stacked Bar chart control into report and formatting with Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Stacked Bar Chart

The **Stacked Bar Chart** allows you to compare multiple measures through bars stacked one after the other horizontally.

## Add chart to the report

These types of charts are categorized under the `Comparison` category in the item panel.

Drag and drop a stacked bar chart from the item panel into the design area.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/drag-chart-from-item-panel.png '#width=215px')

Now, the stacked bar chart will be rendered in the design area and the chart properties will be listed in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/initial-view-of-stacked-bar-chart.png)

## Create data

To present data in the chart, create a dataset and bind data to the chart data region. In this designing section, the following json data is used for dataset creation.

```json
[
   {
      points: [
         { Month: "Jan", Percentage: 6 }, { Month: "Feb", Percentage: 8 }, { Month: "Mar", Percentage: 12 },
         { Month: "Apr", Percentage: 15.5 }, { Month: "May", Percentage: 20 }, { Month: "Jun", Percentage: 24 },
         { Month: "Jul", Percentage: 28 }, { Month: "Aug", Percentage: 32 }, { Month: "Sep", Percentage: 33 },
         { Month: "Oct", Percentage: 35 }, { Month: "Nov", Percentage: 40 }, { Month: "Dec", Percentage: 42 }],
      Product: 'ProductA'
   },
   {
      points: [
         { Month: "Jan", Percentage: 6 }, { Month: "Feb", Percentage: 8 }, { Month: "Mar", Percentage: 11 },
         { Month: "Apr", Percentage: 16 }, { Month: "May", Percentage: 21 }, { Month: "Jun", Percentage: 25 },
         { Month: "Jul", Percentage: 27 }, { Month: "Aug", Percentage: 31 }, { Month: "Sep", Percentage: 34 },
         { Month: "Oct", Percentage: 34 }, { Month: "Nov", Percentage: 41 } , { Month: "Dec", Percentage: 42 }],
      Product: 'ProductB'
   },
   {
      points: [
         { Month: "Jan", Percentage: -1 },{ Month: "Feb", Percentage: -1.5}, { Month: "Mar", Percentage: -2 },
         { Month: "Apr", Percentage: -2.5 }, { Month: "May", Percentage: -3 },{ Month: "Jun", Percentage: -3.5 },
         { Month: "Jul", Percentage: -4 },{ Month: "Aug", Percentage: -4.5 }, { Month: "Sep", Percentage: -5 },
         { Month: "Oct", Percentage: -5.5 }, { Month: "Nov", Percentage: -6 } , { Month: "Dec", Percentage: -6.5 }]
      Product: 'Wastage'
   }
]
```

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section for more information. Here, we are going to create a dataset using [JSON inline data](./../../../manage-data/data-connectors/json-data-source/#inline-data) to design the report.

## Assign data

The **Stacked Bar Chart** needs a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into the `Y Value(s)` section. The dimension that you would like to categorize the measure can be dropped into the `Column` section. If you would like to categorize based on a series, then the respective dimension can be dropped onto the `Row(s)` section in addition.

To configure data into a stacked bar chart, follow these steps:

1. To bind data to a chart report item placed in the design area, focus on that report item.

2. Click the `Properties` icon in the configuration panel, the property pane opens. Now, switch to the `DATA` tab.

   ![Chart properties pane](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/chart-properties-pane.png '#width=425px')

3. The available data in the report will be listed in the dropdown, choose a data in the dropdown list.

   ![Choose the dataset for chart](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/data-assign-drop-down.png '#width=385px')

4. The numeric columns and numeric expressions are listed under the `Measures` section; other types of columns and dimension expressions are listed under the `Dimensions` section.

   ![Measures and dimensions](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/measures-dimensions-category.png '#width=385px')

5. **Drag and Drop Measure Element**:

   Select and drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Value(s)` section.

   ![Add a Y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/add-y-values-field.png '#width=385px')

   Now, the report item design will look like below:

   ![Preview after adding y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/y-value-chart-design-view.png '#width=385px')

6. **Aggregate Options**:

   Click the `Settings` icon (highlighted below) to open the aggregation type dropdown list.

   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/aggregation-settings-icon.png '#width=185px')

   You can set the aggregation type by which you can compute the selected column.

   ![Aggregate menu list](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/aggregation-settings-menu.png '#width=385px')

7. **Drag and Drop Dimension Element**:

   Select and drag the dimension element from the `Dimensions` section to measure against any of the selected numeric column(s) in `Y Value(s)` section, and drop it into the `Column` section.

   ![Add dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/add-field-to-column-section.png '#width=385px')

   Now, the report item design will look like below:

   ![Preview after adding dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/column-field-design-preview.png '#width=385px')

8. **Grouping**:

   You can group the added column element with another column by adding the respective dimension element into the Row(s) section.

   ![Achieve grouping by row values](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/add-field-to-rows-section.png '#width=385px')

   Now, the report item design will look like below.

   ![Preview of row value grouping ](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/row-field-design-preview.png '#width=385px')

9. **Formatting Column and Row(s) sections**:

   You can also [Filter](./../../../compose-report/filter-data/), [Sort](./../../../compose-report/sort-data/), or [Group](./../../../compose-report/group-data/) the Column or Row(s) sections using expressions.

   For example, here the `Month` field is sorted using `=Month(cdate("1-" & Fields!Month.Value))` expression.

   ![Column row settings](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/column-row-settings.png '#width=215px')

   ![Sorting options](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/sorting-options.png '#width=385px')

   ![Set expression](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/set-expression.png '#width=385px')

## Format stacked bar chart

You can format the stacked bar chart for better illustration of the view that you require, through the settings available in the `Properties` tab.

To format a stacked bar chart, follow the below steps:

1. Drag and drop the stacked bar chart into the design area and resize it to the required size.

2. Configure the data for the stacked bar chart.

3. Focus on the stacked bar chart and click the `Properties` icon in the configuration panel, the property pane opens.

   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/open-chart-properties.png)

You can see the list of properties available for the widget with the default value.

### Name

The **Name** property can be used to provide a unique name for the chart item in the report.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/name-property.png '#width=385px')

### Basic Settings

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/basic-settings.png '#width=385px')

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of the legend in the chart and also customize the legend text appearance. To set/reset legend properties, refer to the [Show Legend](./../../../report-items/chart/legend/) property.

#### Choose Series

You can add multiple series to the chart and the available series will be listed in the `Choose Series` dropdown. To customize the series appearance, choose the required series name from the dropdown.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/multi-series-list-in-drop-down.png '#width=385px')

Refer to the [Series](./../../../report-items/chart/series/) section to customize each series using the properties panel.

### Appearance

The border style, color, width, and background color properties can be used to style the chart and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/appearance-property.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/appearance-design.png)

### Chart Area

The **Chart Area** properties such as border width, color, and background color can be used to customize the area of the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/chart-area-sketch.png '#width=410px')

These properties are listed under the `Chart Area` category.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/chart-area.png '#width=385px')

Use the [Color Palette](./../../../report-items/chart/color-palette/) property to customize the color of the chart.

### Title

To show/hide the chart title, toggle the `Show Chart Title` checkbox. The chart title can be customized by editing the `Title Text` property of the chart.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/chart-title.png '#width=385px')

Using these properties, the font color, font text, font style, border, background, and position of the title can be customized in the chart design.

### No Data

The **No Data** property is used to display static text when a dataset results with empty or zero rows at runtime.

![Chart No data message](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/no-data.png '#width=385px')

To set/reset no data message properties, refer to the [No Data Message](./../../../report-items/chart/no-data-message/) property section.

### Category Axis

The Category axis displays text labels instead of numbers. To use the categorical axis, toggle the `Enable Axis` checkbox under the `Category Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/category-axis.png '#width=385px')

To set/reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Value Axis

The Value axis uses a numerical scale and displays numbers as labels. To use the value axis, toggle the `Enable Axis` checkbox under the `Value Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/value-axis.png '#width=385px')

To set/reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Grid line

The **Grid line** properties can be set to category and value axis.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/grid-line.png '#width=385px')

#### Category Axis

To show the grid line for the category axis, enable the `Category Axis` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/category-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/category-grid-line-advanced-properties.png '#width=355px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/category-axis-minor-grid-lines.png '#width=410px')

#### Value Axis

To show the grid line for the value axis, enable the `Value Axis` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/value-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/value-grid-line-advanced-properties.png '#width=355px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/value-axis-minor-grid-lines.png '#width=410px')

### Page break

The **page break** property can be used to control the amount of information on each page when you preview the report. Follow the below steps to apply the page break property to the chart report item.

1. The **Break Location** property specifies where the page break should occur. Choose any `Break Location` type in the dropdown.

   ![Break location](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/break-location-types.png '#width=385px')

2. To restart the page numbering on each page, enable the `Page Number Reset` property checkbox.

   ![Reset page number](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/page-break-property.png '#width=385px')

### Data Element

Data element can be used to control visibility of a report item when exporting the report in XML format. The Data element properties are listed in the properties panel, under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/data-element-properties.png '#width=385px')

#### Name

You can assign a custom name to the chart element using the `Name` field. The chart report item will be exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/data-element-name-properties.png '#width=385px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

On exporting the report, the visibility of the chart can be controlled using the `Output` property. Choosing the following options for the `Output` property will perform the respective operations:

* **Auto** or **Output** - Exports the chart report item
* **NoOutput** - Does not export the chart report item

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/output-property.png '#width=385px')

### Miscellaneous

#### Page name

The **page name** property is used to name the first worksheet of the Excel workbook when exporting the report to excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/page-name.png '#width=385px')

You can set static or dynamic text as the page name. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Custom attributes

This property can be used to set the values for chart custom properties. To assign values to custom properties using the properties panel, refer to the [Custom Properties](./../../../compose-report/common-properties/#custom-properties) section.

#### Document Map

A document map is a navigational feature that displays a separate side pane with a set of navigational links in a hierarchical structure when you view a report. A user can click the content in the list to navigate to the report page that displays that item. Refer to the [Document Map](./../../../compose-report/document-map/) section to configure the document map in the report design.

You can set static or dynamic text as a value for the document map property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Bookmark

Bookmark links allow users to navigate to different parts of a SSRS report. You can add bookmarks to each textbox, image, table or chart, or to the unique group values displayed in a tablix, which can direct the users to specified locations in the report. The value of the bookmark property can be your own strings or an expression. Refer to the [Bookmark](./../../../compose-report/bookmark/) section to configure bookmarks in the report design.

You can set static or dynamic text as the value for the bookmark property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Tooltip

The **Tooltip** property can be used to display informative text or values when the user hovers over the report item in the report preview. To set the tooltip for the chart item using the properties panel, refer to the [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

## Preview report

1. The final design view of the report is shown below.

   ![Preview icon in design view](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/preview-icon.png '#width=455px')

2. Now, the report preview can be visualized as below.

   ![Chart report preview](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-bar-chart/report-preview-page.png '#width=455px')

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/stacked-bar.rdl).
