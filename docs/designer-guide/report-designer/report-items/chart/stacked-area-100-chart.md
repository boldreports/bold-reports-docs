---
title: Add a Stacked Area 100% Chart to RDL Reports | {{site.productName}}
description: Add a stacked area 100% chart to an RDL report in the {{site.productName}} Web Report Designer, bind data to it, format the legend, series, and axes, and preview it.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Stacked area 100% chart in {{site.productNameTM}} Web Report Designer

You add a **Stacked Area 100% Chart** to a report in the {{site.productNameTM}} Web Report Designer by dragging it from the item panel. Use it to compare multiple measures through filled curves stacked vertically.

## How do I add a stacked area 100% chart to the report?

The {{site.productNameTM}} Web Report Designer lists the stacked area 100% chart under the `Distribution` category in the item panel.

1. Drag the stacked area 100% chart from the item panel and drop it into the design area.

   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/drag-a-chart-from-item-panel.png '#width=215px')

2. The Web Report Designer renders the stacked area 100% chart in the design area and lists the chart properties in the properties panel.

   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/initial-view-of-stacked-area-100-chart.png)

## How do I create data for the stacked area 100% chart?

To present data in a {{site.productNameTM}} stacked area 100% chart, create a dataset and bind it to the chart data region. This example uses the following JSON data to create the dataset.

```json
[
   {
      points: [
         {Year: 2006,Temperature: 34},{Year: 2007,Temperature: 20},{Year: 2008,Temperature: 40},
         {Year: 2009,Temperature: 51},{Year: 2010,Temperature: 26},{Year: 2011,Temperature: 37},
         {Year: 2012,Temperature: 54},{Year: 2013,Temperature: 44},{Year: 2014,Temperature: 48}],
      Country: "USA"
   },
   {
      points: [
         {Year: 2006,Temperature: 51},{Year: 2007,Temperature: 26},{Year: 2008,Temperature: 37},
         {Year: 2009,Temperature: 51},{Year: 2010,Temperature: 26},{Year: 2011,Temperature: 37},
         {Year: 2012,Temperature: 43},{Year: 2013,Temperature: 23},{Year: 2014,Temperature: 55}],
      Country: "India"
   },
   {
      points: [
         {Year: 2006,Temperature: 14},{Year: 2007,Temperature: 34},{Year: 2008,Temperature: 73},
         {Year: 2009,Temperature: 51},{Year: 2010,Temperature: 26},{Year: 2011,Temperature: 37},
         {Year: 2012,Temperature: 12},{Year: 2013,Temperature: 16},{Year: 2014,Temperature: 34}],
      Country: "Canada"
   },
   {
      points: [
         {Year: 2006,Temperature: 37},{Year: 2007,Temperature: 16},{Year: 2008,Temperature: 53},
         {Year: 2009,Temperature: 51},{Year: 2010,Temperature: 26},{Year: 2011,Temperature: 37},
         {Year: 2012,Temperature: 54},{Year: 2013,Temperature: 44},{Year: 2014,Temperature: 23}],
      Country: "China"
   }
]
```

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section for more information. This example creates a dataset using [JSON inline data](./../../../manage-data/data-connectors/json-data-source/#inline-data) to design the report.

## How do I assign data to the stacked area 100% chart?

A {{site.productNameTM}} **Stacked Area 100% Chart** needs a minimum of 1 value element and 1 column element to display data. Drop the measure or expression field you want to analyze into the `Y value(s)` section. Drop the dimension that categorizes the measure onto the `Column` section. To categorize by a series, also drop the respective dimension onto the `Row(s)` section.

To configure data in a stacked area 100% chart, follow these steps:

1. Focus on the chart report item placed in the design area.

2. Click the `Properties` icon in the configuration panel to open the property pane, and switch to the `DATA` tab.

   ![Chart properties pane](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/Chart-properties-pane.png '#width=425px')

3. Choose a dataset from the dropdown list, which shows the data available in the report.

   ![Choose the dataset for chart](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/data-assign-drop-down.png '#width=385px')

4. Review the fields. The `Measures` section lists numeric columns and numeric expressions. The `Dimensions` section lists other column types and dimension expressions.

   ![Measures and dimensions](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/measures-dimensions-category.png '#width=385px')

5. **Drag and Drop Measure Element**:

   Drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Values` section.

   ![Add a Y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/add-y-values-field.png '#width=385px')

   The following image shows the report item design after you add the Y value field.

   ![Preview after adding y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/y-value-chart-design-view.png '#width=385px')

6. **Aggregate Options**:

   Click the `Settings` icon (highlighted in the following image) to open the aggregation type dropdown list.

   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/aggregation-settings-icon.png '#width=175px')

   Set the aggregation type used to compute the selected column.

   ![Aggregate menu list](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/aggregation-settings-menu.png '#width=385px')

7. **Drag and Drop Dimension Element**:

   Drag the dimension element from the `Dimensions` section and drop it into the `Column` section. The dimension measures against the numeric column(s) selected in the `Y Value(s)` section.

   ![Add dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/add-field-to-column-section.png '#width=385px')

   The following image shows the report item design after you add the dimension field.

   ![Preview after adding dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/column-field-design-preview.png '#width=385px')

8. **Grouping**:

   Group the added column element with another column by adding the respective dimension element into the Row(s) section.

   ![Achieve grouping by row values](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/add-field-to-rows-section.png '#width=385px')

   The following image shows the report item design after you add the row grouping.

   ![Preview of row value grouping ](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/row-field-design-preview.png '#width=385px')

## How do I format the stacked area 100% chart?

You format a stacked area 100% chart in the {{site.productNameTM}} Web Report Designer through the settings in the `Properties` tab. Use them to get the view you require.

To format a stacked area 100% chart, follow these steps:

1. Drag and drop the stacked area 100% chart into the design area and resize it to the required size.
2. Configure the data for the stacked area 100% chart.
3. Focus on the stacked area 100% chart and click the `Properties` icon in the configuration panel to open the property pane.

   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/open-chart-properties.png)

The property pane lists the properties available for the report item with their default values.

### Name

The **Name** property gives the stacked area 100% chart item a unique name in the report.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/name-property.png '#width=385px')

### Basic Settings

The **Basic Settings** category of the stacked area 100% chart contains the `Show Legend` and `Choose Series` properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/basic-settings.png '#width=385px')

#### Show Legend

A legend is text that describes the plotted data in a {{site.productNameTM}} chart. You can toggle the visibility of the legend in the chart and customize the legend text appearance. To set or reset legend properties, refer to the [Show Legend](./../../../report-items/chart/legend/) property.

#### Choose Series

The `Choose Series` dropdown lists the available series when you add multiple series to the chart. To customize the series appearance, choose the required series name in the dropdown.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/multi-series-list-in-drop-down.png '#width=385px')

Refer to the [Series](./../../../report-items/chart/series/) section to customize each series using the properties panel.

### Appearance

The **Appearance** properties style the stacked area 100% chart with border style, color, width, and background color in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/appearance-property.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/appearance-design.png)

### Chart Area

The **Chart Area** properties customize the area of the chart design with border width, color, shadow color, shadow offset, and background color.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/chart-area-sketch.png '#width=410px')

The properties panel lists these properties under the `Chart Area` category.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/chart-area.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/chart-area-design.png)

Use the [Color Palette](./../../../report-items/chart/color-palette/) property to customize the color of the chart.

### Title

The chart title of the stacked area 100% chart is shown or hidden with the `Show Chart Title` checkbox. Customize the **chart title** by editing the `Title Text` property of the chart.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/chart-title.png '#width=385px')

Use these properties to customize the font color, font text, font style, border, background, and position of the title in the chart design.

### No Data

The **No Data** property displays static text when the dataset returns empty or zero rows at runtime.

![Chart No data message](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/no-data.png '#width=385px')

To set or reset no data message properties, refer to the [No Data Message](./../../../report-items/chart/no-data-message/) property section.

### Category Axis

The **Category axis** of a {{site.productNameTM}} chart displays text labels instead of numbers. To use the categorical axis, toggle the `Enable Axis` checkbox under the `Category Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/category-axis.png '#width=350px')

To set or reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Value Axis

The **Value axis** of a {{site.productNameTM}} chart uses a numerical scale and displays numbers as labels. To use the value axis, toggle the `Enable Axis` checkbox under the `Value Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/value-axis.png '#width=350px')

To set or reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Grid Line

The **Grid Line** properties of the stacked area 100% chart can be set for the category axis and the value axis.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/grid-line.png '#width=385px')

#### Category Axis

To show the grid line for the category axis, enable the `Category Axis` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/category-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/category-grid-line-advanced-properties.png '#width=355px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/category-axis-minor-grid-lines.png '#width=410px')

#### Value Axis

To show the grid line for the value axis, enable the `Value Axis` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/value-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/value-grid-line-advanced-properties.png '#width=355px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/value-axis-minor-grid-lines.png '#width=410px')

### Page break

The **page break** property controls the amount of information on each page when you preview the report. To apply the page break property to the chart report item, follow these steps:

1. Choose a `Break Location` type in the drop-down. The **Break Location** property specifies where the page break occurs.

   ![Break location](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/break-location-types.png '#width=385px')

2. To prevent predefined page breaks from being applied during report preview, enable the `Break Disabled` property checkbox. You can also control page breaks during report preview by using expressions. For details on setting and resetting page breaks dynamically, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

   ![Page Break Disabled](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-break-disabled.png '#width=355px')

3. To restart page numbering on each page, enable the `Page Number Reset` property checkbox.

   ![Reset page number](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/page-break-property.png '#width=385px')

### Data Element

The **Data Element** properties control the visibility of the chart report item when you export the report in XML format. The properties panel lists them under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/data-element-properties.png '#width=385px')

#### Name

The `Name` field assigns a custom name to the chart element. The chart report item is exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/data-element-name-properties.png '#width=385px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

The `Output` property controls the visibility of the chart when you export the report. Choose one of the following options:

* **Auto** or **Output** - Exports the chart report item.
* **NoOutput** - Does not export the chart report item.

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/output-property.png '#width=385px')

### Miscellaneous

The **Miscellaneous** category of the stacked area 100% chart contains the page name, tooltip, document map, bookmark, and custom style properties.

#### Page name

The **page name** property names the first worksheet of the Excel workbook when you export the report to Excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/page-name.png '#width=385px')

You can set static or dynamic text as the page name. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Tooltip

The **Tooltip** property displays informative text or values when the user hovers over the report item in the report preview. To set a tooltip for a chart item using the properties panel, refer to the [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

#### Document Map

A **document map** is a navigational feature that displays a separate side pane with navigational links in a hierarchical structure when you view a report. Users click an item in the list to navigate to the report page that displays that item. Refer to the [Document Map](./../../../compose-report/document-map/) section to configure the document map in the report design.

You can set static or dynamic text as the value of the document map property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Bookmark

Bookmark links let users navigate to different parts of an SSRS report. You can add bookmarks to each textbox, image, table, or chart, or to the unique group values displayed in a tablix, to direct users to specified locations in the report. The bookmark value can be your own string or an expression. Refer to the [Bookmark](./../../../compose-report/bookmark/) section to configure bookmarks in the report design.

You can set static or dynamic text as the value of the bookmark property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Custom Style

The `Custom Style` property enables the use of external CSS for styling report items, providing enhanced flexibility beyond the built-in styling options. Use this property to meet specific design requirements and maintain consistent styling across multiple reports. For a step-by-step guide on setting up custom styles in your report, check the **How To** section of this guide.

![custom style property](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/custom-style-property.png '#width=355px')

## How do I preview the stacked area 100% chart report?

You preview the stacked area 100% chart report in the {{site.productNameTM}} Web Report Designer by clicking the preview icon in the design view.

1. The following image shows the final design view of the report.

   ![Preview icon in design view](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/preview-icon.png '#width=455px')

2. The following image shows the report preview.

   ![Chart report preview](/static/assets/on-premise/images/report-designer/report-items/chart/stacked-area-100-chart/report-preview-page.png '#width=455px')

> Download the [stacked area 100% chart report design file from GitHub](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/stacked-area-100-chart.rdl).

## Frequently asked questions

### What is the minimum data a stacked area 100% chart needs?

A {{site.productNameTM}} stacked area 100% chart needs a minimum of 1 value element and 1 column element to display data.

### Where is the stacked area 100% chart in the item panel?

The stacked area 100% chart is listed under the `Distribution` category in the item panel of the Web Report Designer.

## See also

* [Stacked area chart](./../../../report-items/chart/stacked-area-chart/)
* [Chart series properties](./../../../report-items/chart/series/)
* [Chart axis properties](./../../../report-items/chart/axis/)
