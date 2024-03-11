---
title: Chart Smart Label | Web ReportDesigner | Bold Reports
description: This section describes how to customize the smart label in Chart Report Item with Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Chart Smart Label

Smart labels manage overlapping of labels even when a large number of labels are placed in close vicinity.

## Enable or disable smart label

To manage overlapping of labels on report preview, toggle the `Enable Smart Label` checkbox.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/smart-label/enable-smart-label.png '#width=385px')

If you enable the `Enable Smart Label` checkbox, the label properties will be applied to the data label in respective series of chart.

You can also enable or disable the smart label based on dynamic values, by using the `Expressions`. Refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

## Format smart label

You can customize the data label appearance through the properties provided in the `Advanced` menu of smart label property. Click on the square icon in the right side of the `Enable Smart Label` checkbox and click on `Advanced` option in the menu.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/smart-label/advanced-menu.png '#width=385px')

Now, the smart label properties will be displayed in the `Advanced Options` category.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/smart-label/advanced-properties.png '#width=385px')

### Label Style

The label styles are listed in the `Label Style` drop-down.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/smart-label/label-style.png '#width=385px')

Set the label type based on the type of chart that are used to present the data.

### Value

Based on the selected `Label Style`, the values will be listed in the `Value` drop-down.

<span style="font-weight:bold">PieLabelStyle</span>

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/smart-label/pie-label-style.png '#width=385px')

<span style="font-weight:bold">FunnelLabelStyle</span>

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/smart-label/funnel-label-style.png '#width=385px')

<span style="font-weight:bold">PyramidLabelStyle</span>

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/smart-label/pyramid-label-style.png '#width=385px')

<span style="font-weight:bold">BarLabelStyle</span>

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/smart-label/bar-label-style.png '#width=385px')

<span style="font-weight:bold">LabelStyle</span>

Common label styles will be listed in the `Value` field drop-down for `Label Style` type. The selected `Value` applied to the chart data region based on the selected chart type.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/smart-label/default-label-style.png '#width=385px')

In the below design, pie chart is used of demonstration.

Select `PieLabelStyle` in `Label Style` drop-down and choose `Outside` in `Value` field. Now, the chart design will look like below.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/smart-label/label-style-outside.png '#width=385px')

Now, choose `Inside` in `Value` field. Now, the chart design will look like below.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/smart-label/label-style-inside.png '#width=385px')

On above snap notice that some labels are shown outside for better design, the smart label property manages to avoid overlapping of labels and improves the chart design.