---
title: Switch Chart Type | Chart switcher | Bold Reports Designer
description: This section describes how to change chart type at any point in report design using Bold Reports Designer.
---

# Switch chart type

This section explains how to change the type of chart report item during the report design using the chart type switcher in Bold Reports Designer. You can change the chart type using the `Chart Type` dropdown under series properties. To open specific series properties, choose the series name in `Choose Series` dropdown.

![Series selection](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/chose-series.png)

Clicking on the `Edit` icon, will display properties to customize the respective series.

![Series properties](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/series-properties.png)

Chart type switcher is listed under `Basic Settings`.

![Chart type switcher](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/chart-type.png)

Based on the present series chart type, compatible chart types will be listed under chart type dropdown. For example, if the existing series type is pie chart, the chart type dropdown will have chart types as shown below.

![Supported chart types](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/supported-types.png)

## Chart with single series

If the chart has single series, then changing the chart type will directly change the chart to expected chart type. For example, if the report has a column chart with single series.

![Single series](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/single-series.png)

To change chart series type to `Line`, choose `Line` in chart type dropdown.

![Line chart](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/line-chart.png)

## Chart with multiple series

If the chart has multiple series, you can switch chart type for individual series. But it suits only for compatible chart types, otherwise all series in the chart will be changed to the selected chart type.

For example, the below chart design has multiple series. Both series are of column chart type.

![Multiple series](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/multiple-series.png)

To change individual series type, choose respective series in the `Choose Series` dropdown and click edit icon.

![Choose series](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/choose-multi-series.png)

Now, choose expected chart type in `Chart Type` dropdown.

![Choose chart type](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/choose-chart-type.png)

Respective series type will be changed in chart design as shown below,

![Chart design](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/individual-series.png)

If the target chart type is not compatible with other series types in the chart, it will show a confirmation dialog.

For example, now choose `Bar` chart type for second series.

![Unsupported chart type](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/unsupported-type.png)

A confirmation dialog will be displayed like below.

![Confirmation alert](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/confirmation.png)

Clicking `Yes` will change existing series types to bar.

![Bar chart](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/bar-chrt.png)

Clicking `No` will let the respective series unchanged.

![Chart design](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/individual-series.png)