---
title: Add a Range Bar Chart to RDL Reports | {{site.productName}}
description: Add a range bar chart to an RDL report in the {{site.productName}} Web Report Designer, bind high and low values, and format its legend, axes, and page breaks.
---

# Add a range bar chart in the {{site.productNameTM}} Web Report Designer

You add a **Range Bar Chart** to a report in the {{site.productNameTM}} Web Report Designer by dragging it from the item panel. Use it to display a range of data by plotting two Y-values (low and high) per data point.

## How do I add a range bar chart to the report?

The Web Report Designer lists the range bar chart under the `Comparison` category in the item panel.

Drag and drop the range bar chart from the item panel into the design area.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/drag-chart-from-item-panel.png '#width=215px')

The range bar chart is rendered in the design area, and the chart properties are listed in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/initial-view-of-range-bar-chart.png)

## How do I create data for the range bar chart?

To present data in the range bar chart in the Web Report Designer, create a dataset and bind data to the chart data region. This example uses the following JSON data for dataset creation.

```json
[
   {
      points:
      [{Month: 'Jan', Highvalue: 6.1, Lowvalue: 0.7}, {Month: 'Feb', Highvalue: 6.3, Lowvalue: 1.3},
      {Month: 'Mar', Highvalue: 8.5, Lowvalue: 1.9}, {Month: 'Apr', Highvalue: 10.8, Lowvalue: 3.1},
      {Month: 'May', Highvalue: 14.4, Lowvalue: 5.7}, {Month: 'Jun', Highvalue: 16.9, Lowvalue: 8.4},
      {Month: 'Jul', Highvalue: 19.2, Lowvalue: 10.6}, {Month: 'Aug', Highvalue: 16.5, Lowvalue: 10.5},
      {Month: 'Sep', Highvalue: 16.1, Lowvalue: 8.5}, {Month: 'Oct', Highvalue: 12.5, Lowvalue: 6},
      {Month: 'Nov', Highvalue: 6.9, Lowvalue: 1.5}, {Month: 'Dec', Highvalue: 12.1, Lowvalue: 5.1}],
      Country: 'India'
},
   {
      points:
      [{Month: 'Jan', Highvalue: 7.1, Lowvalue: 1.7}, {Month: 'Feb', Highvalue: 7.7, Lowvalue: 1.9},
      {Month: 'Mar', Highvalue: 7.5, Lowvalue: 1.2}, {Month: 'Apr', Highvalue: 9.8, Lowvalue: 2.5},
      {Month: 'May', Highvalue: 11.4, Lowvalue: 4.7}, {Month: 'Jun', Highvalue: 14.4, Lowvalue: 6.4},
      {Month: 'Jul', Highvalue: 17.2, Lowvalue: 9.6}, {Month: 'Aug', Highvalue: 17.9, Lowvalue: 10.7},
      {Month: 'Sep', Highvalue: 15.1, Lowvalue: 7.5}, {Month: 'Oct', Highvalue: 10.5, Lowvalue: 3},
      {Month: 'Nov', Highvalue: 7.9, Lowvalue: 1.2}, {Month: 'Dec', Highvalue: 9.1, Lowvalue: 4.1}],
      Country: 'Germany'
   }
]
```

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section for more information. This example creates a dataset using [JSON inline data](./../../../manage-data/data-connectors/json-data-source/#inline-data) to design the report.

## How do I assign data to the range bar chart?

The **Range Bar Chart** in the Web Report Designer needs a minimum of 2 value elements and 1 column element to showcase. Drop the measure or expression field that you want to analyze into the `High(s)` or `Low(s)` section. Drop the dimension that categorizes the measure onto the `Column` section. To categorize based on a series, also drop the respective dimension onto the `Row(s)` section.

To configure data in a range bar chart, follow these steps:

1. To bind data to a chart report item placed in the design area, focus on that report item.

2. Click the `Properties` icon in the configuration panel to open the property pane. Then, switch to the `DATA` tab.

   ![Chart properties pane](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/chart-properties-pane.png '#width=425px')

3. The available data in the report is listed in the dropdown. Choose a data in the dropdown list.

   ![Choose the dataset for chart](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/data-assign-drop-down.png '#width=385px')

4. The numeric columns and numeric expressions are listed under the `Measures` section. Other types of columns and dimension expressions are listed under the `Dimensions` section.

   ![Measures and dimensions](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/measures-dimensions-category.png '#width=385px')

5. **Drag and Drop Measure Element**:

   Select and drag the `Highvalue` or the numeric expression column from the `Measures` section and drop it in the `High(s)` section.

   ![Add a High value field](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/add-high-value-field.png '#width=385px')

   The report item design looks like the following image.

   ![Preview after adding y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/high-value-chart-design-view.png '#width=385px')

   Select and drag the `Lowvalue` or the numeric expression column from the `Measures` section and drop it in the `Low(s)` section.

   ![Add a Low value field](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/add-low-value-field.png '#width=385px')

   The report item design looks like the following image.

   ![Preview after adding y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/low-value-chart-design-view.png '#width=385px')

6. **Aggregate Options**:

   Click the `Settings` icon (highlighted in the following image) to open the aggregation type dropdown list.

   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/aggregation-settings-icon.png '#width=185px')

   Set the aggregation type used to compute the selected column.

   ![Aggregate menu list](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/aggregation-settings-menu.png '#width=385px')

7. **Drag and Drop Dimension Element**:

   Select and drag the dimension element from the `Dimensions` section to measure against any of the selected numeric column(s) in `High(s)` or `Low(s)` section, and drop it into the `Column` section.

   ![Add dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/add-field-to-column-section.png '#width=385px')

   The report item design looks like the following image.

   ![Preview after adding dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/column-field-design-preview.png '#width=385px')

8. **Grouping**:

   Group the added column element with another column by adding the respective dimension element into the `Row(s)` section.

   ![Achieve grouping by row values](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/add-field-to-rows-section.png '#width=385px')

   The report item design looks like the following image.

   ![Preview of row value grouping ](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/row-field-design-preview.png '#width=385px')

9. **Formatting Column and Row(s) sections**:

   You can also [Filter](./../../../compose-report/filter-data/), [Sort](./../../../compose-report/sort-data/), or [Group](./../../../compose-report/group-data/) the Column or Row(s) sections using expressions.

   For example, here the `Month` field is sorted using the `=Month(cdate("1-" & Fields!Month.Value))` expression.

   ![Column row settings](/static/assets/on-premise/images/report-designer/report-items/chart/polar-chart/column-row-settings.png '#width=185px')

   ![Sorting options](/static/assets/on-premise/images/report-designer/report-items/chart/polar-chart/sorting-options.png '#width=385px')

   ![Set expression](/static/assets/on-premise/images/report-designer/report-items/chart/polar-chart/set-expression.png '#width=385px')

## How do I format the range bar chart?

You format the range bar chart in the Web Report Designer through the settings available in the `Properties` tab, for better illustration of the view that you require.

To format a range bar chart, follow these steps:

1. Drag and drop the range bar chart into the design area and resize it to the required size.
2. Configure the data for the range bar chart.
3. Focus on the range bar chart and click the `Properties` icon in the configuration panel to open the property pane.

   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/open-chart-properties.png)

The property pane lists the properties available for the report item with their default values.

### Name

The **Name** property in the Web Report Designer provides a unique name for the chart item in the report.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/name-property.png '#width=385px')

### Basic Settings

The Basic Settings category in the Web Report Designer holds the Show Legend and Choose Series properties of the range bar chart.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/basic-settings.png '#width=385px')

#### Show Legend

A legend in a {{site.productNameTM}} chart is text used to describe the data plotted. You can toggle the visibility of the legend in the chart and customize the legend text appearance. To set or reset legend properties, refer to the [Show Legend](./../../../report-items/chart/legend/) property.

#### Choose Series

The `Choose Series` dropdown in the Web Report Designer lists the available series when you add multiple series to the chart. To customize a series appearance, choose the required series name in the dropdown.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/multi-series-list-in-drop-down.png '#width=385px')

Refer to the [Series](./../../../report-items/chart/series/) section to customize each series using the properties panel.

### Appearance

The Appearance properties in the Web Report Designer, such as border style, color, width, and background color, style the chart and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/appearance-property.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/appearance-design.png)

### Chart Area

The **Chart Area** property in the Web Report Designer customizes the area of the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/chart-area-sketch.png '#width=410px')

Use the [Color Palette](./../../../report-items/chart/color-palette/) property to customize the color of the chart. The `Color Palette` is listed under the `Chart Area` category.

In this example, the `Color Palette` is set to `Pacific`, and the design is shown in the following image.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/chart-area-design.png)

### Title

The range bar chart title in the Web Report Designer is shown or hidden by toggling the `Show Chart Title` checkbox. You customize the **chart title** by editing the `Title Text` property of the chart. You can customize the font color, font text, font style, border, background, and position of the title.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/chart-title.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/chart-title-design.png)

### No Data

The **No Data** property in the Web Report Designer displays static text when a dataset returns empty or zero rows at runtime.

![Chart No data message](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/no-data.png '#width=385px')

To set or reset no data message properties, refer to the [No Data Message](./../../../report-items/chart/no-data-message/) property section.

### Category Axis

The **Category axis** in a {{site.productNameTM}} chart displays text labels instead of numbers. To use the categorical axis, toggle the `Enable Axis` checkbox under the `Category Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/category-axis.png '#width=350px')

To set or reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Value Axis

The **Value axis** in a {{site.productNameTM}} chart uses a numerical scale and displays numbers as labels. To use the value axis, toggle the `Enable Axis` checkbox under the `Value Axis` category in the chart properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/value-axis.png '#width=350px')

To set or reset axis properties, refer to the [Axis Properties](./../../../report-items/chart/axis/) property.

### Grid line

The **Grid line** properties in the Web Report Designer can be set for the category and value axis of the range bar chart.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/grid-line.png '#width=385px')

#### Category Axis

To show the grid line for the category axis, enable the `Category Axis` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/category-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/category-grid-line-advanced-properties.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/category-axis-minor-grid-lines.png '#width=410px')

#### Value Axis

To show the grid line for the value axis, enable the `Value Axis` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/value-axis-grid-line.png '#width=410px')

You can also enable the `Minor Grid Lines` and customize the major and minor gridline style and color in the `Advanced Options` menu.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/value-grid-line-advanced-properties.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/value-axis-minor-grid-lines.png '#width=410px')

### Page break

The **page break** property in the Web Report Designer controls the amount of information on each page when you preview the report. To apply the page break property to the chart report item, follow these steps.

1. The **Break Location** property specifies where the page break should occur. Choose any `Break Location` type in the dropdown.

   ![Break location](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/break-location-types.png '#width=385px')

2. To prevent predefined page breaks from being applied during report preview, enable the `Break Disabled` property checkbox. You can also control the application of page breaks during report preview by using expressions. For details on setting and resetting page breaks dynamically, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

   ![Page Break Disabled](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-break-disabled.png '#width=355px')

3. To restart page numbering on each page, enable the `Page Number Reset` property checkbox.

   ![Reset page number](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/page-break-property.png '#width=385px')

### Data Element

The Data element properties in the Web Report Designer control the visibility of a report item when you export the report in XML format. The Data element properties are listed in the properties panel under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/data-element-properties.png '#width=385px')

#### Name

The Data Element `Name` field assigns a custom name to the chart element. The chart report item is exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/data-element-name-properties.png '#width=385px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

The `Output` property controls the visibility of the chart when you export the report. Choosing the following options for the `Output` property performs the respective operations:

* **Auto** or **Output** - Exports the chart report item.
* **NoOutput** - Does not export the chart report item.

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/output-property.png '#width=385px')

### Miscellaneous

The Miscellaneous category in the Web Report Designer holds the page name, custom attributes, document map, bookmark, tooltip, and custom style properties of the chart.

#### Page name

The **page name** property names the first worksheet of the Excel workbook when you export the report to Excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/page-name.png '#width=335px')

You can set static or dynamic text as the page name. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Custom attributes

The custom attributes property sets the values for chart custom properties. To assign values to custom properties using the properties panel, refer to the [Custom Properties](./../../../compose-report/common-properties/#custom-properties) section.

#### Document Map

A document map in a {{site.productNameTM}} report is a navigational feature that displays a separate side pane with a set of navigational links in a hierarchical structure when you view a report. A user can click the content in the list to navigate to the report page that displays that item. Refer to the [Document Map](./../../../compose-report/document-map/) section to configure the document map in the report design.

You can set static or dynamic text as the value for the document map property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Bookmark

Bookmark links in a {{site.productNameTM}} report let users navigate to different parts of an SSRS report. You can add bookmarks to each textbox, image, table, or chart, or to the unique group values displayed in a tablix, to direct users to specified locations in the report. The value of the bookmark property can be your own strings or an expression. Refer to the [Bookmark](./../../../compose-report/bookmark/) section to configure bookmarks in the report design.

You can set static or dynamic text as the value for the bookmark property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Tooltip

The **Tooltip** property displays informative text or values when the user hovers over the report item in the report preview. To set the tooltip for the chart item using the properties panel, refer to the [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

To customize the tooltip property in the report preview, go to [Series Properties](https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/report-items/chart/series/#tooltip). Under the Miscellaneous category, set the tooltip as shown below.
`="Country: " & Fields!Country.Value + "<br>" + "Month: " & Fields!Month.Value + "<br>" + "High Value: " + Fields!Highvalue.Value + "<br>" + "Low Value: " + Fields!Lowvalue.Value`

![Tooltip Property](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/tooltip-property-preview.png '#width=385px')

#### Custom Style

The `Custom Style` property enables the use of external CSS for styling report items, providing enhanced flexibility beyond the built-in styling options. Use this property to meet specific design requirements and maintain consistent styling across multiple reports. For a step-by-step guide on setting up custom styles in your report, check the **How To** section of this guide.

![custom style property](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/custom-style-property.png '#width=355px')

## How do I preview the range bar chart report?

To preview the range bar chart report in the Web Report Designer, review the final design and then open the preview:

1. The final design view of the report is shown in the following image.

   ![Preview icon in design view](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/preview-icon.png '#width=455px')

2. The report preview appears as shown in the following image.

   ![Chart report preview](/static/assets/on-premise/images/report-designer/report-items/chart/range-bar-chart/report-preview-page.png '#width=455px')

> Download the [range bar chart report design file from GitHub](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/range-bar-chart.rdl).

## Frequently asked questions

### What data does a range bar chart need?

A range bar chart needs a minimum of 2 value elements in the `High(s)` and `Low(s)` sections and 1 column element in the `Column` section.

### Can I show minor grid lines on a range bar chart?

Yes. Enable the `Minor Grid Lines` in the `Advanced Options` menu of the category or value axis grid line, and customize the gridline style and color.

## See also

* [Range column chart](./../range-column-chart/)
* [Range area chart](./../range-area-chart/)
* [Chart axis properties](./../axis/)
