---
title: Add and Format Doughnut Charts in RDL Reports | {{site.productName}}
description: Add a doughnut chart to an RDL report in the {{site.productName}} Web Report Designer, bind JSON data, and format its legend, series, data labels, and page breaks.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Add a Doughnut Chart in the {{site.productNameTM}} Web Report Designer

You add a **Doughnut Chart** to a report in the {{site.productNameTM}} Web Report Designer by dragging it from the item panel. Use it to show the proportion of each item to the total as doughnut slices. It works best to display data with a small number of categories.

## How do I add a doughnut chart to the report?

The {{site.productNameTM}} Web Report Designer lists the doughnut chart under the `Proportion` category in the item panel.

Drag and drop the doughnut chart from the item panel into the design area.

![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/drag-chart-from-item-panel.png '#width=185px')

The doughnut chart renders in the design area, and the properties panel lists the chart properties.

![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/initial-view-of-doughnut-chart.png)

## How do I create data for the doughnut chart?

To present data in a {{site.productNameTM}} doughnut chart, create a dataset and bind data to the chart data region. This example creates a dataset using a [JSON data file loaded from disk](./../../../manage-data/data-connectors/json-data-source/#load-from-disk) to design the report. You can download the [expense analysis sample data from GitHub](https://github.com/boldreports/resources/tree/master/docs/report-designer/data/expense-analysis.json).

> For more information, see [Create an embedded dataset](./../../../manage-data/dataset/create-an-embedded-dataset/).

## How do I assign data to the doughnut chart?

The {{site.productNameTM}} **Doughnut Chart** needs a minimum of one value element and one column element to render. Drop the measure or expression field you want to analyze into the `Y Value(s)` section. Drop the dimension that categorizes the measure into the `Column` section. To categorize by a series, drop the respective dimension into the `Row(s)` section.

To configure data in a doughnut chart, follow these steps:

1. Select the chart report item in the design area to bind data to it.

2. Click the `Properties` icon in the configuration panel to open the property pane. Then, switch to the `DATA` tab.

   ![Chart properties pane](/static/images/report-designer/report-items/chart/doughnut-chart/chart-properties-pane.png)

3. Choose a dataset in the dropdown list. The dropdown lists the data available in the report.

   ![Choose the dataset for chart](/static/images/report-designer/report-items/chart/doughnut-chart/data-assign-drop-down.png '#width=385px')

4. Review the fields. The `Measures` section lists numeric columns and numeric expressions. The `Dimensions` section lists other types of columns and dimension expressions.

   ![Measures and dimensions](/static/images/report-designer/report-items/chart/doughnut-chart/measures-dimensions-category.png '#width=385px')

5. **Drag and Drop Measure Element**:

   Drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Value(s)` section.

   ![Add a Y-value field](/static/images/report-designer/report-items/chart/doughnut-chart/add-y-values-field.png '#width=385px')

   The following image shows the report item design after you add the Y value field.

   ![Preview after adding y-value field](/static/images/report-designer/report-items/chart/doughnut-chart/y-value-chart-design-view.png '#width=385px')

6. **Aggregate Options**:

   Click the `Settings` icon (highlighted in the image) to open the aggregation type dropdown list.

   ![Aggregate settings icon](/static/images/report-designer/report-items/chart/doughnut-chart/aggregation-settings-icon.png '#width=185px')

   Set the aggregation type that computes the selected column.

   ![Aggregate menu list](/static/images/report-designer/report-items/chart/doughnut-chart/aggregation-settings-menu.png '#width=385px')

7. **Drag and Drop Dimension Element**:

   Drag the dimension element from the `Dimensions` section and drop it into the `Column` section. The dimension measures against the numeric column(s) selected in the `Y Value(s)` section.

   ![Add dimension field](/static/images/report-designer/report-items/chart/doughnut-chart/add-field-to-column-section.png '#width=385px')

   The following image shows the report item design after you add the dimension field.

   ![Preview after adding dimension field](/static/images/report-designer/report-items/chart/doughnut-chart/column-field-design-preview.png '#width=385px')

8. **Grouping**:

   You can also group the added column element with another column by adding the respective dimension element into the Row(s) section.

9. **Formatting Column and Row(s) sections**:

   You can also [Filter](./../../../compose-report/filter-data/), [Sort](./../../../compose-report/sort-data/), or [Group](./../../../compose-report/group-data/) the Column or Row(s) sections using expressions.

## How do I format the doughnut chart?

You format a doughnut chart in the {{site.productNameTM}} Web Report Designer through the settings in the `Properties` tab.

To format a doughnut chart, follow these steps:

1. Drag and drop the doughnut chart into the design area and resize it to the required size.
2. Configure the data for the doughnut chart.
3. Select the doughnut chart and click the `Properties` icon in the configuration panel to open the property pane.

   ![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/open-chart-properties.png)

The property pane lists the properties available for the report item with their default values.

### Name

The **Name** property provides a unique name for the doughnut chart item in the report.

![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/name-property.png '#width=385px')

### Basic Settings

The **Basic Settings** category of the doughnut chart contains the **Show Legend** and **Choose Series** properties shown in the following image.

![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/basic-settings.png '#width=385px')

#### Show Legend

A chart legend is text that describes the plotted data. You can toggle the visibility of the legend in the chart and customize the legend text appearance. To set or reset legend properties, see the [Show Legend](./../../../report-items/chart/legend/) property.

#### Choose Series

The doughnut chart lists all series you add in the `Choose Series` dropdown. To customize a series appearance, choose the required series name from the dropdown.

![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/multi-series-list-in-drop-down.png '#width=385px')

To edit the selected series, click the edit button.

![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/edit-series.png '#width=385px')

In this example, the `Data Label Settings` properties have the `Show Data Label` property enabled, the Label set to `#PERCENT`, and the `UseValueAsLabel` property disabled.

![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/data-label-settings.png '#width=385px')

To customize each series using the properties panel, see [Series](./../../../report-items/chart/series/).

### Appearance

The doughnut chart **Appearance** properties (border style, color, width, and background color) style the chart and customize its appearance in the report design. The properties panel lists these properties under the `Appearance` category.

![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/appearance-property.png '#width=385px')

![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/appearance-design.png)

### Chart Area

The doughnut chart **Chart Area** property customizes the area of the chart design.

![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/chart-area-sketch.png '#width=425px')

Use the [Color Palette](./../../../report-items/chart/color-palette/) property to customize the color of the chart. The `Color Palette` property is listed under the `Chart Area` category.

![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/chart-area-design.png)

### Title

To show or hide the doughnut chart title, toggle the `Show Chart Title` checkbox. Customize the chart title by editing the `Title Text` property of the chart. You can customize the font color, font text, font style, border, background, and position of the title.

![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/chart-title.png '#width=385px')

![Chart Types](/static/images/report-designer/report-items/chart/doughnut-chart/chart-title-design.png)

### No Data

The doughnut chart **No Data** property displays static text when a dataset returns empty or zero rows at runtime.

![Chart No data message](/static/images/report-designer/report-items/chart/doughnut-chart/no-data.png '#width=385px')

To set or reset no data message properties, see the [No Data Message](./../../../report-items/chart/no-data-message/) property section.

### Page break

The doughnut chart **page break** property controls the amount of information on each page when you preview the report. To apply the page break property to the chart report item, follow these steps:

1. Choose a `Break Location` type in the dropdown. The **Break Location** property specifies where the page break occurs.

   ![Break location](/static/images/report-designer/report-items/chart/doughnut-chart/break-location-types.png '#width=385px')

2. To prevent predefined page breaks from being applied during report preview, enable the `Break Disabled` property checkbox. You can also control page breaks during report preview with expressions. For details on setting and resetting page breaks dynamically, see the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

   ![Page Break Disabled](/static/images/report-designer/report-items/rectangle/page-break-disabled.png '#width=355px')

3. To restart page numbering on each page, enable the `Page Number Reset` property checkbox.

   ![Reset page number](/static/images/report-designer/report-items/chart/doughnut-chart/page-break-property.png '#width=385px')

### Data Element

The doughnut chart **data element** properties control the visibility of a report item when you export the report in XML format. The properties panel lists them under the `Data Element` category.

![Data element properties](/static/images/report-designer/report-items/chart/doughnut-chart/data-element-properties.png '#width=385px')

#### Name

The `Name` field assigns a custom name to the chart element. The chart report item exports with the provided name.

![Data element name property](/static/images/report-designer/report-items/chart/doughnut-chart/data-element-name-properties.png '#width=385px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

The **Output** property controls the visibility of the chart when you export the report. Each option of the `Output` property performs the following operation:

* **Auto** or **Output** - Exports the chart report item.
* **NoOutput** - Does not export the chart report item.

![Data element output property](/static/images/report-designer/report-items/chart/doughnut-chart/output-property.png '#width=385px')

### Miscellaneous

The doughnut chart **Miscellaneous** category contains the page name, document map, bookmark, custom attributes, tooltip, and custom style properties.

#### Page name

The **page name** property names the first worksheet of the Excel workbook when you export the report to Excel format.

![Page name property](/static/images/report-designer/report-items/chart/doughnut-chart/page-name.png '#width=385px')

You can set static or dynamic text as the page name. To set and reset dynamic text, see the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Document Map

A **document map** is a navigational feature that displays a separate side pane with a set of navigational links in a hierarchical structure when you view a report. A user can click the content in the list to navigate to the report page that displays that item. To configure the document map in the report design, see the [Document Map](./../../../compose-report/document-map/) section.

You can set static or dynamic text as the value for the document map property. To set and reset dynamic text, see the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Bookmark

Bookmark links let users navigate to different parts of an SSRS report. You can add bookmarks to each textbox, image, table, or chart, or to the unique group values displayed in a tablix, to direct users to specified locations in the report. The value of the bookmark property can be your own strings or an expression. To configure bookmarks in the report design, see the [Bookmark](./../../../compose-report/bookmark/) section.

You can set static or dynamic text as the value for the bookmark property. To set and reset dynamic text, see the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

#### Custom attributes

The **custom attributes** property sets the values for chart custom properties. To create and assign values to custom properties using the properties panel, see the [Custom Properties](./../../../compose-report/common-properties/#custom-properties) section.

#### Tooltip

The **Tooltip** property displays informative text or values when the user hovers over the report item in the report preview. To set a tooltip for a chart item using the properties panel, see the [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

#### Custom Style

The `Custom Style` property enables external CSS for styling report items, giving more flexibility than the built-in styling options. Use this property to meet specific design requirements and keep styling consistent across multiple reports. For a step-by-step guide on setting up custom styles in your report, see the **How To** section of this guide.

![custom style property](/static/images/report-designer/report-items/chart/doughnut-chart/custom-style-property.png '#width=355px')

## How do I preview the doughnut chart report?

You preview the doughnut chart report with the **Preview** button in the {{site.productNameTM}} Web Report Designer.

1. Click the **Preview** button in the top-right corner of the report header.

   ![Preview icon in design view](/static/images/report-designer/report-items/chart/doughnut-chart/preview-icon.png '#width=445px')

2. Review the report preview, shown in the following image.

   ![Chart report preview](/static/images/report-designer/report-items/chart/doughnut-chart/report-preview-page.png '#width=445px')

> Download the [doughnut chart report design file from GitHub](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/doughnut-chart.rdl).

## Frequently asked questions

### Where is the doughnut chart in the item panel?

The {{site.productNameTM}} Web Report Designer lists the doughnut chart under the `Proportion` category in the item panel.

### When should I use a doughnut chart?

Use a doughnut chart to show the proportion of each item to the total. It works best to display data with a small number of categories.

## See also

* [Chart data labels](./../../../report-items/chart/data-label/)
* [Chart series properties](./../../../report-items/chart/series/)
* [Pie chart](./../../../report-items/chart/pie-chart/)
* [Chart color palette](./../../../report-items/chart/color-palette/)
