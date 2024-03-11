---
title: Funnel Chart | Bold Reports Report Designer | Bold Reports
description: Adding HTML5 JavaScript Funnel Chart control into report and formatting chart appearance with the Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Funnel Chart

The **Funnel Chart** control shows values across multiple stages in a process by highlighting different stages with different colors. It allows you to make proportional comparisons between values showcased in a progressively decreasing manner.

## Add chart to the report

These types of charts are categorized under the `Proportion` category in the item panel.

Drag and drop the funnel chart from the item panel into the design area.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/drag-a-chart-from-item-panel.png '#width=245px')

Now, the funnel chart will be rendered in the design area and the chart properties will be listed in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/initial-view-of-funnel-chart.png)

## Create data

To present data in the chart, create a dataset and bind data to the chart data region. In this designing section, the following json data is used for dataset creation.

```json
[
      { "Country":"China", "Population":1409517397 },
      { "Country":"India", "Population":1339180127 },
      { "Country":"UnitedStates", "Population":324459463 },
      { "Country":"Indonesia", "Population":263991379 },
      { "Country":"Brazil", "Population":209288278 },
      { "Country":"Pakistan", "Population":197015955 },
      { "Country":"Nigeria", "Population":190886311 },
      { "Country":"Bangladesh", "Population":164669751 },
      { "Country":"Russia", "Population":143989754 },
      { "Country":"Mexico", "Population":129163276 },
      { "Country":"Japan", "Population":127484450 },
      { "Country":"Ethiopia", "Population":104957438 },
      { "Country":"Philippines", "Population":104918090 },
      { "Country":"Egypt", "Population":97553151 },
      { "Country":"Vietnam", "Population":95540800 },
      { "Country":"Germany", "Population":82114224 }
]
```

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section for more information. Here, we are going to create a dataset using [JSON inline data](./../../../manage-data/data-connectors/json-data-source/#inline-data) to design the report.

## Assign data

The **Funnel Chart** needs a minimum of one value element and one column element to showcase. The measure or expression field that you want to analyze can be dropped into the `Y Value(s)` section. The dimension for which you want to categorize the measure can be dropped into the `Column` section. To categorize the measure based on a series, drop the respective dimension into the `Row(s)` section.

To configure data into a funnel chart, follow the steps:

1. To bind data to a chart report item placed in the design area, focus on that report item.

2. Click the `Properties` icon in the configuration panel, the property pane opens. Now, switch to the `DATA` tab.

   ![Chart properties pane](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/chart-properties-pane.png '#width=425px')

3. The available data in the report will be listed in the dropdown, choose a data in the dropdown list.

   ![Choose the dataset for chart](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/data-assign-drop-down.png '#width=385px')

4. The numeric columns and numeric expressions are listed under the `Measures` section; other types of columns and dimension expressions are listed under the `Dimensions` section.

   ![Measures and dimensions](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/measures-dimensions-category.png '#width=385px')

5. **Drag and Drop Measure Element**:

   Select and drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Values` section.

   ![Add a Y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/add-y-values-field.png '#width=385px')

   Now, the report item design will look like below:

   ![Preview after adding y-value field](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/y-value-chart-design-view.png '#width=385px')

6. **Aggregate Options**:

   Click the `Settings` icon (highlighted below) to open the aggregation type dropdown list.

   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/aggregation-settings-icon.png '#width=185px')

   You can set the aggregation type by which you can compute the selected column.

   ![Aggregate menu list](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/aggregation-settings-menu.png '#width=385px')

7. **Drag and Drop Dimension Element**:

   Select and drag the dimension element from the `Dimensions` section to measure against any of the selected numeric column(s) in `Y Value(s)` section, and drop it into the `Column` section.

   ![Add dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/add-field-to-column-section.png '#width=385px')

   Now, the report item design will look like below:

   ![Preview after adding dimension field](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/column-field-design-preview.png '#width=385px')

8. **Grouping**:

   You can also group the added column element with another column, by adding the respective dimension element into the `Row(s)` section.

9. **Formatting Column and Row(s) sections**:

   You can also [Filter](./../../../compose-report/filter-data/), [Sort](./../../../compose-report/sort-data/), or [Group](./../../../compose-report/group-data/) the Column or Row(s) sections using expressions.

## Format Funnel Chart

You can format the funnel chart for better illustration of the view that you require, through the settings available in the `Properties` tab.

To format a funnel chart, follow the below steps:

1. Drag and drop the funnel chart into the design area and resize it to the required size.
2. Configure the data for the funnel chart.
3. Focus on the funnel chart and click the `Properties` icon in the configuration panel, the property pane opens.

   ![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/open-chart-properties.png)

You can see the list of properties available for the widget with the default value.

### Name

The **Name** property can be used to provide a unique name for the chart item in the report.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/name-property.png '#width=385px')

### Basic Settings

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/basic-settings.png '#width=385px')

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of the legend in chart and also customize the legend text appearance. To set/reset legend properties, refer to the [Show Legend](./../../../report-items/chart/legend/) property.

#### Choose Series

You can add multiple series to the chart and the available series will be listed in the `Choose Series` dropdown. To customize the series appearance, choose the required series name in the dropdown.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/multi-series-list-in-drop-down.png '#width=385px')

We can edit the selected series by clicking the edit button.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/edit-series.png '#width=385px')

In this case, we have enabled the `Enable SmartLabel` property.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/enable-smart-label.png '#width=385px')

In the `Data Label Settings` properties, we have enabled the `Show Data Label` property and set the `Format` as `#,0;(#,0)`.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/data-label-settings.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/data-label-settings-preview.png)

Refer to the [Series](./../../../report-items/chart/series/) section to customize each series using the properties panel.

### Appearance

The border style, color, width, and background color properties can be used to style the chart and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/appearance-property.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/appearance-design.png)

### Chart Area

The **Chart Area** property can be used to customize the area of the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/chart-area-sketch.png '#width=410px')

Use the [Color Palette](./../../../report-items/chart/color-palette/) property to customize the color of the chart. `Color Palette` are listed under the `Chart Area` category.

Here, we have set the `Color Palette` as `PacificLight` and the design is shown below.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/chart-area-design.png)

### Title

To show/hide the chart title, toggle the `Show Chart Title` checkbox. The **chart title** can be customized by editing the `Title Text` property of the chart. You can customize the font color, font text, font style, border, background, and position of the title in the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/chart-title.png '#width=385px')

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/chart-title-design.png)

### No Data

The **No Data** property is used to display static text when a dataset results with empty or zero rows at runtime.

![Chart No data message](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/no-data.png '#width=385px')

To set/reset no data message properties, refer to the [No Data Message](./../../../report-items/chart/no-data-message/) property section.

### Page break

The **page break** property can be used to control the amount of information on each page when you preview the report. Follow the below steps to apply the page break property for the chart report item.

1. The **Break Location** property specifies where the page break should occur. Choose any `Break Location` type in the drop-down.

   ![Break location](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/break-location-types.png '#width=385px')

2. To restart the page numbering on each page, enable `Page Number Reset` property checkbox.

   ![Reset page number](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/page-break-property.png '#width=385px')

### Data Element

Data element can be used to control visibility of a report item when exporting the report in XML format. The Data element properties are listed in the properties panel, under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/data-element-properties.png '#width=385px')

#### Name

You can assign a custom name to the chart element using the `Name` field. The chart report item will be exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/data-element-name-properties.png '#width=385px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

On exporting the report, the visibility of the chart can be controlled using the `Output` property. Choosing the following options for the `Output` property will perform the respective operations:

* **Auto** or **Output** - Exports the chart report item
* **NoOutput** - Does not export the chart report item

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/output-property.png '#width=385px')

### Miscellaneous

#### Page name

The **page name** property is used to name the first worksheet of the Excel workbook when exporting the report to excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/page-name.png '#width=385px')

You can set static or dynamic text as the page name. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Tooltip

The **Tooltip** property can be used to display informative text or values, when the user hovers over the report item in the report preview. To set a tooltip for a chart item using the properties panel, refer to the [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

#### Document Map

A **Document Map** is a navigational feature that displays a separate side pane with a set of navigational links in a hierarchical structure when you view a report. A user can click the content in the list to navigate to the report page that displays that item. Refer to the [Document Map](./../../../compose-report/document-map/) section to configure the document map in the report design.

You can set static or dynamic text as value for the document map property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Bookmark

Bookmark links allow users to navigate to different parts of a SSRS report. You can add bookmarks to each textbox, image, table or chart or to the unique group values displayed in a tablix which can direct the users to specified locations in the report. The value of the bookmark property can be your own strings or an expression. Refer to the [Bookmark](./../../../compose-report/bookmark/) section to configure bookmarks in the report design.

You can set static or dynamic text as the value for the bookmark property. To set and reset dynamic text, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

## Preview report

1. The final design view of the report is shown below.

   ![Preview icon in design view](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/preview-icon.png '#width=445px')

2. Now, the report preview can be visualized as below.

   ![Chart report preview](/static/assets/on-premise/images/report-designer/report-items/chart/funnel-chart/report-preview-page.png '#width=445px')

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/funnel-chart.rdl).
