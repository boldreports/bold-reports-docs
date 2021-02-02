---
title: Add filters to chart data region | Web ReportDesigner
description: This section describes how to add filters on chart category and series group in Bold Report Designer.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, filters
---

# Add filters to chart data region

Filters can be used to filter data in the chart data region to include or exclude specific values from display or to provide a different view of the dataset in multiple data regions. When processing the report, the filters applied in the report parts are processed first on the dataset, and then on the data region, and then on groups.

## Set filter on a chart category group

1. Select chart data region in the design area.
![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/select-data-region.png)
2. Switch to `DATA` tab,
![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/switch-to-data-tab.png)
3. In the `DATA` assign panel, under the column section click on the `Settings` icon.
![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/filter-data-menu.png)
4. Now, click on the `Filters...` option in the menu. Now, the filter dialog will be opened like below.
![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/filters-dialog.png)
5. Refer [Filter Data](./../../../compose-report/filter-data/) section and create required filter expression in the filter dialog and click `OK`.
![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/create-filter-expressions.png)
In the above image, the filter equation is created to filter the data in the data region based on `Product Category` data field.

On report preview, using the `OrderYear` and `ProductCategory` report parameters, the sales of `Q1`, `Q2`, `Q3` and `Q4` is displayed in the chart data region based on applied filters.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/report-preview.png)

Similarly, you can set filters on a `chart series group`.

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/add-filters-to-chart-data-region.rdl)