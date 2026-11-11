---
title: Add and Format a Pyramid Chart in RDL Reports | Bold Reports
description: Add a pyramid chart to an RDL report in the Bold Reports Web Report Designer, bind data to it, and format its legend, series, data labels, and page breaks.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Add a pyramid chart in the Bold Reports<sup>®</sup> Web Report Designer

You add a **Pyramid Chart** to a report in the Bold Reports<sup>®</sup> Web Report Designer by dragging it from the item panel. Use it to make proportional comparisons between values in a triangle diagram that increases progressively. The pyramid chart consists of various segments, each representing a data point.

## How do I add a pyramid chart to the report?

The Web Report Designer categorizes pyramid charts under the `Proportion` category in the item panel.

Drag and drop the pyramid chart from the item panel into the design area.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/drag-a-chart-from-item-panel.png '#width=185px')

The pyramid chart is rendered in the design area, and the chart properties are listed in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/initial-view-of-pyramid-chart.png)

## How do I create data for the pyramid chart?

To present data in the pyramid chart in the Web Report Designer, create a dataset and bind data to the chart data region. This example uses the following JSON data for dataset creation.

```json
[
  {
    "Food":"Sweet Treats",
    "Calories":"120 cal"
  },
  {
    "Food":"Milk, Youghnut, Cheese",
    "Calories":"435 cal"
  },
  {
    "Food":"Vegetables",
    "Calories":"470 cal"
  },
  {
    "Food":"Meat, Poultry, Fish",
    "Calories":"475 cal"
  },
  {
    "Food":"Fruits",
    "Calories":"520 cal"
  },
  {
    "Food":"Bread, Rice, Pasta",
    "Calories":"930 cal"
  }
]
```

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section for more information. This example creates a dataset using [JSON inline data](./../../../manage-data/data-connectors/json-data-source/#inline-data) to design the report.

## How do I assign data to the pyramid chart?

The **Pyramid Chart** in the Web Report Designer needs a minimum of one value element and one column element to showcase. Drop the measure or expression field that you want to analyze into the `Y Value(s)` section. Drop the dimension that categorizes the measure into the `Column` section. To categorize the measure based on a series, drop the respective dimension into the `Row(s)` section.

To configure data in a pyramid chart, follow these steps:

1. To bind data to a chart report item placed in the design area, focus on that report item.

2. Click the `Properties` icon in the configuration panel to open the property pane. Then, switch to the `DATA` tab.

   ![Chart properties pane](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/chart-properties-pane.png '#width=425px')

3. The available data in the report is listed in the dropdown. Choose a data in the dropdown list.

   ![Choose the dataset for chart](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/data-assign-drop-down.png '#width=385px')

4. The numeric columns and numeric expressions are listed under the `Measures` section. Other types of columns and dimension expressions are listed under the `Dimensions` section.

   ![Measures and dimensions](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/measures-dimensions-category.png '#width=385px')

5. **Drag and Drop Measure Element**:

   Select and drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Value(s)` section.

   ![Add a Y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/add-y-values-field.png '#width=385px')

   The report item design looks like the following image.

   ![Preview after adding y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/y-value-chart-design-view.png '#width=385px')

6. **Aggregate Options**:

   Click the `Settings` icon (highlighted in the following image) to open the aggregation type dropdown list.

   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/aggregation-settings-icon.png '#width=185px')

   Set the aggregation type used to compute the selected column.

   ![Aggregate menu list](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/aggregation-settings-menu.png '#width=385px')

7. **Drag and Drop Dimension Element**:

   Select and drag the dimension element from the `Dimensions` section and drop it into the `Column` section. The dimension is measured against the selected numeric column(s) in the `Y Value(s)` section.

   ![Add dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/add-field-to-column-section.png '#width=385px')

   The report item design looks like the following image.

   ![Preview after adding dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/column-field-design-preview.png '#width=385px')

8. **Grouping**:

   You can also group the added column element with another column by adding the respective dimension element into the Row(s) section.

9. **Formatting Column and Row(s) sections**:

   You can also [Filter](./../../../compose-report/filter-data/), [Sort](./../../../compose-report/sort-data/), or [Group](./../../../compose-report/group-data/) the Column or Row(s) sections using expressions.

## How do I format the pyramid chart?

You format the pyramid chart in the Web Report Designer through the settings available in the `Properties` tab, for better illustration of the view that you require.

To format a pyramid chart, follow these steps:

1. Drag and drop the pyramid chart into the design area and resize it to the required size.
2. Configure the data for the pyramid chart.
3. Focus on the pyramid chart and click the `Properties` icon in the configuration panel to open the property pane.

   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/open-chart-properties.png)

The property pane lists the properties available for the report item with their default values.

### Name

The **Name** property in the Web Report Designer provides a unique name for the chart item in the report.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/name-property.png '#width=385px')

### Basic Settings

The Basic Settings category in the Web Report Designer holds the Show Legend and Choose Series properties of the pyramid chart.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/basic-settings.png '#width=385px')

#### Show Legend

A legend in a Bold Reports<sup>®</sup> chart is text used to describe the data plotted. You can toggle the visibility of the legend in the chart and customize the legend text appearance. To set or reset legend properties, refer to the [Show Legend](./../../../report-items/chart/legend/) property.

#### Choose Series

The `Choose Series` dropdown in the Web Report Designer lists the available series when you add multiple series to the chart. To customize a series appearance, choose the required series name in the dropdown.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/multi-series-list-in-drop-down.png '#width=385px')

You can edit the selected series by clicking the edit button.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/edit-series.png '#width=385px')

In this example, the `Show Data Label` property is enabled in the `Data Label Settings` properties.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/data-label-settings.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/data-label-settings-preview.png)

Refer to the [Series](./../../../report-items/chart/series/) section to customize each series using the properties panel.

### Appearance

The Appearance properties in the Web Report Designer, such as border style, color, width, and background color, style the chart and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/appearance-property.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/appearance-design.png)

### Chart Area

The **Chart Area** property in the Web Report Designer customizes the area of the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/chart-area-sketch.png '#width=410px')

Use the [Color Palette](./../../../report-items/chart/color-palette/) property to customize the color of the chart. The `Color Palette` is listed under the `Chart Area` category.

In this example, the `Color Palette` is set to `EarthTones`, and the design is shown in the following image.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/chart-area-design.png)

### Title

The pyramid chart title in the Web Report Designer is shown or hidden by toggling the `Show Chart Title` checkbox. You customize the **chart title** by editing the `Title Text` property of the chart. You can customize the font color, font text, font style, border, background, and position of the title.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/chart-title.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/chart-title-design.png)

### No Data

The **No Data** property in the Web Report Designer displays static text when a dataset returns empty or zero rows at runtime.

![Chart No data message](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/no-data.png '#width=385px')

To set or reset no data message properties, refer to the [No Data Message](./../../../report-items/chart/no-data-message/) property section.

### Page break

The **page break** property in the Web Report Designer controls the amount of information on each page when you preview the report. To apply the page break property to the chart report item, follow these steps.

1. The **Break Location** property specifies where the page break should occur. Choose any `Break Location` type in the drop-down.

   ![Break location](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/break-location-types.png '#width=385px')

2. To prevent predefined page breaks from being applied during report preview, enable the `Break Disabled` property checkbox. You can also control the application of page breaks during report preview by using expressions. For details on setting and resetting page breaks dynamically, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

   ![Page Break Disabled](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-break-disabled.png '#width=355px')

3. To restart page numbering on each page, enable the `Page Number Reset` property checkbox.

   ![Reset page number](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/page-break-property.png '#width=385px')

### Data Element

The Data element properties in the Web Report Designer control the visibility of a report item when you export the report in XML format. The Data element properties are listed in the properties panel under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/data-element-properties.png '#width=385px')

#### Name

The Data Element `Name` field assigns a custom name to the chart element. The chart report item is exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/data-element-name-properties.png '#width=385px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

The `Output` property controls the visibility of the chart when you export the report. Choosing the following options for the `Output` property performs the respective operations:

* **Auto** or **Output** - Exports the chart report item.
* **NoOutput** - Does not export the chart report item.

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/output-property.png '#width=385px')

### Miscellaneous

The Miscellaneous category in the Web Report Designer holds the page name, tooltip, document map, bookmark, and custom style properties of the chart.

#### Page name

The **page name** property names the first worksheet of the Excel workbook when you export the report to Excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/page-name.png '#width=385px')

You can set static or dynamic text as the page name. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Tooltip

The **Tooltip** property displays informative text or values when the user hovers over the report item in the report preview. To set a tooltip for a chart item using the properties panel, refer to the [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

#### Document Map

A **document map** in a Bold Reports<sup>®</sup> report is a navigational feature that displays a separate side pane with a set of navigational links in a hierarchical structure when you view a report. A user can click the content in the list to navigate to the report page that displays that item. Refer to the [Document Map](./../../../compose-report/document-map/) section to configure the document map in the report design.

You can set static or dynamic text as the value for the document map property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Bookmark

Bookmark links in a Bold Reports<sup>®</sup> report let users navigate to different parts of an SSRS report. You can add bookmarks to each textbox, image, table, or chart, or to the unique group values displayed in a tablix, to direct users to specified locations in the report. The value of the bookmark property can be your own strings or an expression. Refer to the [Bookmark](./../../../compose-report/bookmark/) section to configure bookmarks in the report design.

You can set static or dynamic text as the value for the bookmark property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Custom Style

The `Custom Style` property enables the use of external CSS for styling report items, providing enhanced flexibility beyond the built-in styling options. Use this property to meet specific design requirements and maintain consistent styling across multiple reports. For a step-by-step guide on setting up custom styles in your report, check the **How To** section of this guide.

![custom style property](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/custom-style-property.png '#width=355px')

## How do I preview the pyramid chart report?

To preview the pyramid chart report in the Web Report Designer, review the final design and then open the preview:

1. The final design view of the report is shown in the following image.

   ![Preview icon in design view](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/preview-icon.png '#width=455px')

2. The report preview appears as shown in the following image.

   ![Chart report preview](/static/assets/on-premise/images/report-designer/report-items/chart/pyramid-chart/report-preview-page.png '#width=455px')

> Download the [pyramid chart report design file from GitHub](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/pyramid-chart.rdl).

## Frequently asked questions

### What data does a pyramid chart need?

A pyramid chart needs a minimum of one value element in the `Y Value(s)` section and one column element in the `Column` section.

### Where is the pyramid chart in the item panel?

The pyramid chart is categorized under the `Proportion` category in the item panel of the Web Report Designer.

## See also

* [Funnel chart](./../funnel-chart/)
* [Chart data labels](./../data-label/)
* [Chart color palette](./../color-palette/)
