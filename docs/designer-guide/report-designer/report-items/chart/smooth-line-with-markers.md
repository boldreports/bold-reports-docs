---
title: Smooth Line with Markers Chart in RDL Reports | {{site.productName}}
description: Add a smooth line with markers chart to an RDL report in the {{site.productName}} Web Report Designer, bind data, format the legend, series, and axes, and preview it.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Smooth line with markers chart in {{site.productNameTM}} Web Report Designer

You add a **Smooth Line with Markers Chart** to a report in the {{site.productNameTM}} Web Report Designer by dragging it from the item panel. Use it to show trends over a time period, with data points connected by smooth lines with markers.

## How do I add a smooth line with markers chart to the report?

The {{site.productNameTM}} Web Report Designer lists the smooth line with markers chart under the `Distribution` category in the item panel.

1. Drag the smooth line with markers chart from the item panel and drop it into the design area.

   ![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/drag-chart-from-item-panel.png '#width=215px')

2. The Web Report Designer renders the smooth line with markers chart in the design area and lists the chart properties in the properties panel.

   ![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/initial-view-of-smooth-line-with-markers.png)

## How do I create data for the smooth line with markers chart?

To present data in a {{site.productNameTM}} smooth line with markers chart, create a dataset and bind it to the chart data region. This example uses the following JSON data to create the dataset.

```json
[
   {
      points: [
            { "Week Days": "Sun", "Temperature": 15 }, { "Week Days": "Mon", "Temperature": 22 },
            { "Week Days": "Tue", "Temperature": 32 }, { "Week Days": "Wed", "Temperature": 31 },
            { "Week Days": "Thu", "Temperature": 29 }, { "Week Days": "Fri", "Temperature": 24 },
            { "Week Days": "Sat", "Temperature": 18 }],
      "Temperature Level": "Max Temp"
   },
   {
      points: [
            { "Week Days": "Sun", "Temperature": 10 }, { "Week Days": "Mon", "Temperature": 18 },
            { "Week Days": "Tue", "Temperature": 28 }, { "Week Days": "Wed", "Temperature": 28 },
            { "Week Days": "Thu", "Temperature": 26 }, { "Week Days": "Fri", "Temperature": 20 },
            { "Week Days": "Sat", "Temperature": 15 }],
      "Temperature Level": "Avg Temp"
   },
   {
      points: [
            { "Week Days": "Sun", "Temperature": 2 }, { "Week Days": "Mon", "Temperature": 12 },
            { "Week Days": "Tue", "Temperature": 22 }, { "Week Days": "Wed", "Temperature": 23 },
            { "Week Days": "Thu", "Temperature": 19 }, { "Week Days": "Fri", "Temperature": 13 },
            { "Week Days": "Sat", "Temperature": 8 }],
      "Temperature Level": "Min Temp"
   }
]
```

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section for more information. This example creates a dataset using [JSON inline data](./../../../manage-data/data-connectors/json-data-source/#inline-data) to design the report.

## How do I assign data to the smooth line with markers chart?

A {{site.productNameTM}} **Smooth Line with Markers Chart** needs a minimum of 1 value element and 1 column element to display data. Drop the measure or expression field you want to analyze into the `Y Value(s)` section. Drop the dimension that categorizes the measure into the `Column` section. To categorize by a series, also drop the respective dimension onto the `Row(s)` section.

To configure data in a smooth line with markers chart, follow these steps:

1. Focus on the chart report item placed in the design area.

2. Click the `Properties` icon in the configuration panel to open the property pane, and switch to the `DATA` tab.

   ![Chart properties pane](/static/images/report-designer/report-items/chart/smooth-line-with-markers/chart-properties-pane.png '#width=425px')

3. Choose a dataset from the dropdown list, which shows the data available in the report.

   ![Choose the dataset for chart](/static/images/report-designer/report-items/chart/smooth-line-with-markers/data-assign-drop-down.png '#width=385px')

4. Review the fields. The `Measures` section lists numeric columns and numeric expressions. The `Dimensions` section lists other column types and dimension expressions.

   ![Measures and dimensions](/static/images/report-designer/report-items/chart/smooth-line-with-markers/measures-dimensions-category.png '#width=385px')

5. **Drag and Drop Measure Element**:

   Drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Values` section.

   ![Add a Y-value field](/static/images/report-designer/report-items/chart/smooth-line-with-markers/add-y-values-field.png '#width=385px')

   The following image shows the report item design after you add the Y value field.

   ![Preview after adding y-value field](/static/images/report-designer/report-items/chart/smooth-line-with-markers/y-value-chart-design-view.png '#width=395px')

6. **Aggregate Options**:

   Click the `Settings` icon (highlighted in the following image) to open the aggregation type dropdown list.

   ![Aggregate settings icon](/static/images/report-designer/report-items/chart/smooth-line-with-markers/aggregation-settings-icon.png '#width=185px')

   Set the aggregation type used to compute the selected column.

   ![Aggregate menu list](/static/images/report-designer/report-items/chart/smooth-line-with-markers/aggregation-settings-menu.png '#width=385px')

7. **Drag and Drop Dimension Element**:

   Drag the dimension element from the `Dimensions` section and drop it into the `Column` section. The dimension measures against the numeric column(s) selected in the `Y Value(s)` section.

   ![Add dimension field](/static/images/report-designer/report-items/chart/smooth-line-with-markers/add-field-to-column-section.png '#width=385px')

   The following image shows the report item design after you add the dimension field.

   ![Preview after adding dimension field](/static/images/report-designer/report-items/chart/smooth-line-with-markers/column-field-design-preview.png '#width=385px')

8. **Grouping**:
   Group the added column element with another column by adding the respective dimension element into the Row(s) section.

   ![Achieve grouping by row values](/static/images/report-designer/report-items/chart/smooth-line-with-markers/add-field-to-rows-section.png '#width=385px')

   The following image shows the report item design after you add the row grouping.

   ![Preview of row value grouping ](/static/images/report-designer/report-items/chart/smooth-line-with-markers/row-field-design-preview.png '#width=385px')

9. **Formatting Column and Row(s) sections**:

   You can also [Filter](./../../../compose-report/filter-data/), [Sort](./../../../compose-report/sort-data/), or [Group](./../../../compose-report/group-data/) the Column or Row(s) sections using expressions.

## How do I format the smooth line with markers chart?

You format a smooth line with markers chart in the {{site.productNameTM}} Web Report Designer through the settings in the `Properties` tab. Use them to get the view you require.

To format a smooth line with markers chart, follow these steps:

1. Drag and drop the smooth line with markers chart into the design area and resize it to the required size.
2. Configure the data for the smooth line with markers chart.
3. Focus on the smooth line with markers chart and click the `Properties` icon in the configuration panel to open the property pane.

   ![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/open-chart-properties.png)

The property pane lists the properties available for the report item with their default values.

### Name

The **Name** property gives the smooth line with markers chart item a unique name in the report.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/name-property.png '#width=385px')

### Basic Settings

The **Basic Settings** category of the smooth line with markers chart contains the `Show Legend` and `Choose Series` properties.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/basic-settings.png '#width=385px')

#### Show Legend

A legend is text that describes the plotted data in a {{site.productNameTM}} chart. You can toggle the visibility of the legend in the chart and customize the legend text appearance. To set or reset legend properties, refer to the [Show Legend](./../../../report-items/chart/legend/) property.

#### Choose Series

The `Choose Series` dropdown lists the available series when you add multiple series to the chart. To customize the series appearance, choose the required series name from the dropdown.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/multi-series-list-in-drop-down.png '#width=385px')

Refer to the [Series](./../../../report-items/chart/series/) section to customize each series using the properties panel.

### Appearance

The **Appearance** properties style the smooth line with markers chart with border style, color, width, and background color in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/appearance-property.png '#width=385px')

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/appearance-design.png)

### Chart Area

The **Chart Area** properties customize the area of the chart design with border width, color, shadow color, shadow offset, and background color.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/chart-area.png '#width=410px')

The properties panel lists these properties under the `Chart Area` category.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/chart-area-category.png '#width=355px')

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/chart-area-design.png)

Use the [Color Palette](./../../../report-items/chart/color-palette/) property to customize the color of the chart.

### Title

The chart title of the smooth line with markers chart is shown or hidden with the `Show Chart Title` checkbox. Customize the **chart title** by editing the `Title Text` property of the chart. You can also customize the font color, font text, font style, border, background, and position of the title in the chart design.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/chart-title.png '#width=355px')

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/chart-title-design.png)

### No Data

The **No Data** property displays static text when the dataset returns empty or zero rows at runtime.

![Chart No data message](/static/images/report-designer/report-items/chart/smooth-line-with-markers/no-data.png '#width=385px')

To set or reset no data message properties, refer to the [No Data Message](./../../../report-items/chart/no-data-message/) property section.

### Category Axis

The **Category axis** of a {{site.productNameTM}} chart displays text labels instead of numbers. To use the categorical axis, toggle the `Enable Axis` checkbox under the `Category Axis` category in the chart properties.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/category-axis.png '#width=350px')

To set or reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Value Axis

The **Value axis** of a {{site.productNameTM}} chart uses a numerical scale and displays numbers as labels. To use the value axis, toggle the `Enable Axis` checkbox under the `Value Axis` category in the chart properties.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/value-axis.png '#width=350px')

To set or reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Grid line

The **grid line** properties of the smooth line with markers chart can be set for the category axis and the value axis.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/grid-line.png '#width=385px')

#### Category Axis

To show the grid line for the category axis, enable the `Category Axis` checkbox.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/category-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/category-grid-line-advanced-properties.png '#width=355px')

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/category-axis-minor-grid-lines.png '#width=410px')

#### Value Axis

To show the grid line for the value axis, enable the `Value Axis` checkbox.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/value-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/value-grid-line-advanced-properties.png '#width=355px')

![Chart Types](/static/images/report-designer/report-items/chart/smooth-line-with-markers/value-axis-minor-grid-lines.png '#width=410px')

### Page break

The **page break** property controls the amount of information on each page when you preview the report. To apply the page break property to the chart report item, follow these steps:

1. Choose a `Break Location` type in the dropdown. The **Break Location** property specifies where the page break occurs.

   ![Break location](/static/images/report-designer/report-items/chart/smooth-line-with-markers/break-location-types.png '#width=385px')

2. To prevent predefined page breaks from being applied during report preview, enable the `Break Disabled` property checkbox. You can also control page breaks during report preview by using expressions. For details on setting and resetting page breaks dynamically, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

   ![Page Break Disabled](/static/images/report-designer/report-items/rectangle/page-break-disabled.png '#width=355px')

3. To restart page numbering on each page, enable the `Page Number Reset` property checkbox.

   ![Reset page number](/static/images/report-designer/report-items/chart/smooth-line-with-markers/page-break-property.png '#width=385px')

### Data Element

The **data element** properties control the visibility of the chart report item when you export the report in XML format. The properties panel lists them under the `Data Element` category.

![Data element properties](/static/images/report-designer/report-items/chart/smooth-line-with-markers/data-element-properties.png '#width=385px')

#### Name

The `Name` field assigns a custom name to the chart element. The chart report item is exported with the provided name.

![Data element name property](/static/images/report-designer/report-items/chart/smooth-line-with-markers/data-element-name-properties.png '#width=385px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

The **Output** property controls the visibility of the chart when you export the report. Choose one of the following options for the `Output` property:

* **Auto** or **Output** - Exports the chart report item.
* **NoOutput** - Does not export the chart report item.

![Data element output property](/static/images/report-designer/report-items/chart/smooth-line-with-markers/output-property.png '#width=385px')

### Miscellaneous

The **Miscellaneous** category of the smooth line with markers chart contains the page name, document map, bookmark, custom attributes, tooltip, and custom style properties.

#### Page name

The **page name** property names the first worksheet of the Excel workbook when you export the report to Excel format.

![Page name property](/static/images/report-designer/report-items/chart/smooth-line-with-markers/page-name.png '#width=385px')

You can set static or dynamic text as the page name. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Document Map

A **document map** is a navigational feature that displays a separate side pane with navigational links in a hierarchical structure when you view a report. Users click an item in the list to navigate to the report page that displays that item. Refer to the [Document Map](./../../../compose-report/document-map/) section to configure the document map in the report design.

You can set static or dynamic text as the value of the document map property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Bookmark

Bookmark links let users navigate to different parts of an SSRS report. You can add bookmarks to each textbox, image, table, or chart, or to the unique group values displayed in a tablix, to direct users to specified locations in the report. The bookmark value can be your own string or an expression. Refer to the [Bookmark](./../../../compose-report/bookmark/) section to configure bookmarks in the report design.

You can set static or dynamic text as the value of the bookmark property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Custom attributes

The **custom attributes** property sets the values for chart custom properties. To create and assign values to custom properties using the properties panel, refer to the [Custom Properties](./../../../compose-report/common-properties/#custom-properties) section.

#### Tooltip

The **Tooltip** property displays informative text or values when the user hovers over the report item in the report preview. To set a tooltip for a chart item using the properties panel, refer to the [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

#### Custom Style

The `Custom Style` property enables the use of external CSS for styling report items, providing enhanced flexibility beyond the built-in styling options. Use this property to meet specific design requirements and maintain consistent styling across multiple reports. For a step-by-step guide on setting up custom styles in your report, check the **How To** section of this guide.

![custom style property](/static/images/report-designer/report-items/chart/smooth-line-with-markers/custom-style-property.png '#width=355px')

## How do I preview the smooth line with markers chart report?

You preview the smooth line with markers chart report in the {{site.productNameTM}} Web Report Designer with the **Preview** button.

1. Click the **Preview** button in the top-right corner of the report header.

   ![Preview icon in design view](/static/images/report-designer/report-items/chart/smooth-line-with-markers/preview-icon.png '#width=455px')

2. The following image shows the report preview.

   ![Chart report preview](/static/images/report-designer/report-items/chart/smooth-line-with-markers/report-preview-page.png '#width=455px')

> Download the [smooth line with markers chart report design file from GitHub](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/smooth-line-with-markers.rdl).

## Frequently asked questions

### What is the minimum data a smooth line with markers chart needs?

A {{site.productNameTM}} smooth line with markers chart needs a minimum of 1 value element and 1 column element to display data.

### Where is the smooth line with markers chart in the item panel?

The smooth line with markers chart is listed under the `Distribution` category in the item panel of the Web Report Designer.

## See also

* [Chart series properties](./../../../report-items/chart/series/)
* [Chart marker properties](./../../../report-items/chart/marker/)
* [Chart axis properties](./../../../report-items/chart/axis/)
