---
title: Chart Series | Web ReportDesigner | Bold Reports
description: This section describes how to customize the series properties in Chart Report Item with Bold Report Designer
---

# Chart Series

This section explains how to customize the chart series appearance using the properties panel. You can add multiple series to the chart and the available series will be listed in the `Choose Series` drop-down.

![Series selection](/static/assets/on-premise/images/report-designer/report-items/chart/series/choose-series.png '#width=385px')

In the below snap, the chart has single series.

![Chart with single series](/static/assets/on-premise/images/report-designer/report-items/chart/series/chart-with-single-series.png)

So, only one series is listed in the drop-down,

![Series dropdown with single value](/static/assets/on-premise/images/report-designer/report-items/chart/series/single-series-list-in-drop-down.png '#width=385px')

If the chart has multiple series as below,

![Chart with multiple series](/static/assets/on-premise/images/report-designer/report-items/chart/series/chart-with-multiple-series.png)

Now, both series will be listed in the properties panel.

![Series dropdown with multiple value](/static/assets/on-premise/images/report-designer/report-items/chart/series/multi-series-list-in-drop-down.png '#width=385px')

To customize the series appearance choose the required series name in the drop-down. Then click on the edit icon.

![Choose series](/static/assets/on-premise/images/report-designer/report-items/chart/series/edit-option.png '#width=385px')

Now, the respective series properties will be displayed in secondary panel.

![Series properties](/static/assets/on-premise/images/report-designer/report-items/chart/series/properties.png '#width=385px')

## Basic Settings

### Chart Type

Supported chart types will be listed in the `Chart Type` property dropdown. You can switch a series to required chart type based on your data presentation.

![Choose series](/static/assets/on-premise/images/report-designer/report-items/chart/series/properties.png '#width=385px')

For example, the chart has two series. Both series are of column chart type.

![Same series type](/static/assets/on-premise/images/report-designer/report-items/chart/series/same-series-type.png '#width=385px')

Let's choose first series and change chart type as `Line`.

![Switch chart type](/static/assets/on-premise/images/report-designer/report-items/chart/series/switch-chart-type.png '#width=385px')

Now, you can see respective series is changed to line type in chart surface.

![Multi series type](/static/assets/on-premise/images/report-designer/report-items/chart/series/multi-series-type.png '#width=385px')

Refer [Chart switcher](./../../../report-items/chart/switch-chart-type/) section, to customize each series using the properties panel.

### Series Border

Series border properties can be used to customize the chart series border in the design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/series/series-border.png '#width=385px')

In the below design, border color, width and style properties are applied to the chart series.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/series/border-design.png)

You can also set properties based on dynamic values, by using the `Expressions`. Refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/series/border-expression-menu.png '#width=385px')

### Series Color

Series Color property can be used to customize the series colors in the chart area. If the chart has multiple series, you can differentiate the series using this property.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/series/series-color-first-series.png '#width=385px')

Now, the selected color will be applied to the respective series in the chart design.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/series/first-series-color-design.png '#width=385px')

You can also apply series color based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

### Enable Smart Label

Smart labels manage overlapping of labels even when a large number of labels are placed in close vicinity. To set/reset data label properties, refer [Enable Smart Label](./../../../report-items/chart/smart-label/) property.

![Enable smart label](/static/assets/on-premise/images/report-designer/report-items/chart/series/enable-smart-label.png '#width=385px')

> To apply smart label properties, enable `Data Label` for chart data region.

## Axis Settings

Charts typically have two axes to help organize and display data more meaningfully. They can be easily visualized by presenting series data with different ranges or unit types on different axes, using primary and secondary axes.

`Primary` and `Secondary` axis options will be listed in the Category and Value property dropdown.

![Primary and Secondary axis](/static/assets/on-premise/images/report-designer/report-items/chart/series/primary-and-secondary-axis-options.png '#width=385px')

If you want to showcase the number of units sold (in unit type numbers) in every month of the year along with the total sale amount (in unit type Dollars), you don’t have to compare this in two different charts. Instead, you can display the total number of units sold (in unit type numbers) on the primary y-axis and the total sale amount (in unit type Dollars) will be displayed on the secondary y-axis. This allows us to compare multiple series with different ranges on the same chart.

![Chart secondary axis](/static/assets/on-premise/images/report-designer/report-items/chart/series/secondary-axis-series.png)

> Note: Axis settings are not applicable for `Proportion` and `KPI` chart types.

## Link

### Link To

You can configure **Hyperlink**, **Bookmark** or a **Report path** in the chart series to create an interactive report. Refer [Linking](./../../../compose-report/link-data/) section to set or reset link property for chart series.

![Link To property](/static/assets/on-premise/images/report-designer/report-items/chart/link-to-property.png '#width=385px')

## Marker Settings

### Show Marker

Data markers are used to provide information about the data point to the user. You can add a shape and label to adorn each data point. To set/reset marker properties, refer [Marker](./../../../report-items/chart/marker/) property section.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/series/marker.png '#width=385px')

## Data Label Settings

### Show Data Label

Data label can be added to a chart series by using the `Show Data Label` property. The labels appear at the top of the data point, by default. To set/reset data label properties, refer [Data Label](./../../../report-items/chart/data-label/) property section.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/chart/series/data-label.png '#width=385px')

## Miscellaneous

### Tooltip

Tooltip property can be used to display informative text or value, when the user hovers over the respective series in report preview. To set tooltip for chart series using properties panel refer [Tooltip](./../../../compose-report/common-properties/#tooltip) section.

![Series tooltip](/static/assets/on-premise/images/report-designer/report-items/chart/series/tooltip.png '#width=385px')

### Custom Attributes

This property can be used to set the values for chart series custom properties. To assign values for series custom properties using properties panel refer [Custom Properties](./../../../compose-report/common-properties/#custom-properties) section.

![Series Custom properties](/static/assets/on-premise/images/report-designer/report-items/chart/custom-attributes.png '#width=385px')

### Legend Text

A **Legend Text** property can be used to customize the legend text of each series in the chart.

![Series Legend Text](/static/assets/on-premise/images/report-designer/report-items/chart/series/legend-text.png '#width=385px')

You can customize text for all legends on your report by navigating to the series properties.

![Series Legend Text Preview](/static/assets/on-premise/images/report-designer/report-items/chart/series/legend-text-preview.png)

You can also set the legend text property based on dynamic values, by using the `Expressions`. Refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.