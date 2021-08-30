---
title: Chart Axis | Web ReportDesigner | Bold Reports
description: This section describes how to customize the category and value axis in Chart Report Item with Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Chart Axis

Charts typically have two axes that are used to measure and categorize data: a vertical (y) primaryYAxis, and a horizontal (x) primaryXAxis. You can customize the axis appearance through the properties provided under the `Category Axis` and `Value Axis` category of chart properties. To customize category axis change the properties under the `Category Axis` property and for value axis change the properties under the `Value Axis` category.

## Show or hide axis

To show/hide axis in the chart surface, toggle the `Enable Axis` checkbox in the properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/enable-axis-checkbox.png)

If you enable the `Enable Axis` checkbox, the chart axis will be displayed in the chart area.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/axes-types.png)

You can also enable or disable the chart axis based on dynamic values, by using the `Expressions`. Refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

## Axis Title

The title property in the axis provides options to customize the text and font of the axis title. You can customize the font family, font style, font weight, alignment and size. Axis does not display the title, by default.

To display title text for axis, provide the text in `Axis Title` textbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/axis-title-property.png)

Now, the text will be displayed in the respective axis of chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/axis-title-design.png)

To set font weight, color, style, size and alignment, open the `Advanced Menu` of axis title property.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/title-advanced-property.png)

Now, the font properties will listed in the `Advanced Options` menu,

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/title-advanced-properties.png)

You can also set the chart axis title text based on dynamic values, by using the `Expressions`. Refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

## Line Style

Line style property can be used to set the line style, width, and color of the axis line.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/line-style.png)

In the below snap, line style, color and width properties are applied to chart axes

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/line-style-design.png)

## Label Overflow Mode

Label Overflow Mode property can be used to handle the display mode of the overlapping labels.

### Trim

This option trims the end of overlapping label in the axis.

### Hide

This option hides the overlapping label in the axis.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/label-overflow-mode.png)

## Label Rotation

Label rotation property can be used to define the rotation angle for the axis labels to display in the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/label-rotation.png)

Increase or decrease the rotation angle in the label rotation numeric textbox,

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/label-rotation-design.png)

## Label Format

Label format property can be used to handle different formatting options like display type, denominations, decimal places, currency culture and negative value display format to the value axis labels.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/label-format.png)

Refer [Format Data](./../../../compose-report/format-data/) section to set different formats to the axis label. Here, the `Currency` format is applied to the `Sales` values in Value axis.
![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/label-format-design.png)

You can also set the label format based on dynamic values, by using the `Expressions`. Refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

## Label Font

The font family, font size, and font color properties can be used to customize the label text.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/label-font.png)

You can also apply font properties based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/label-font-design.png)

## Interval

Interval and interval type property can be used to to set the interval for category and value axes. The interval property allows you to define the number of intervals you want in the category (x) and value (y) axes and it provides the consistent measurement of the data points in the chart report.

![Interval](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/interval.png)

## Labels AutoFit Disabled

By default, the Interval Auto setting for the chart axis can cause the labels of X/Y axis to show only every second interval. This property can be used to avoid skipping labels at runtime. Enable or disable this property based on the label rendering behaviour of chart design.

![Interval](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/label-autofit.png)

## Tick

Tick properties can used to set style, width, color, and length of the axis tick, and to set the visibility of the major and minor tick marks.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/tick-properties.png)

### Major Ticks

To enable major ticks in the chart axis, toggle the `Enable Major Ticks` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/enable-major-ticks.png)

Now, the major ticks will be enabled in the respective chart axis.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/major-ticks-design.png)

To customize the tick color, width and length, open the `Advanced...` menu.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/major-tick-menu.png)

Click on `Advanced...` option, now the properties will be listed in the `Advanced Option` pane.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/major-tick-advanced-properties.png)

### Minor Ticks

To enable minor ticks in the chart axis, toggle the `Enable Minor Ticks` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/enable-minor-ticks.png)

Now, the minor ticks will be enabled in the respective chart axis.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/minor-ticks-design.png)

To customize the tick color, width and length, open the `Advanced...` menu.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/minor-tick-menu.png)

Click on `Advanced...` option, now the properties will be listed in the `Advanced Option` pane.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/minor-tick-advanced-properties.png)

You can also enable or disable ticks based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

### Tick Position

Tick position property can be used to position the ticks outside or inside of the chart axis.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/tick-position.png)

By default, ticks will be positioned outside of the chart axis, in the below snap position is changed as `Inside`.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/chart-axis/tick-position-design.png)

You can also apply tick position based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.> Axis properties are not applicable for `Proportion` chart types.