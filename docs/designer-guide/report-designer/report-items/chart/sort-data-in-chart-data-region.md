---
title: Sort data in a chart data region | Web ReportDesigner
description: This section describes how to set sort expressions on chart category and series group in Bold Report Designer.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, filters
---

# Sort data in a chart data region

You can control the order in which data appears in a chart data region by representing sort expressions. You can sort the data either in ascending or descending order.

## Set sort expression on a chart category group

1. Select chart data region in the design area.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/sort-data-in-chart-data-region/select-data-region.png)
2. Switch to `DATA` tab,
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/switch-to-data-tab.png '#width=385px')
3. In the `DATA` assign panel, under the column section click on the `Settings` icon.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/filter-data-menu.png '#width=195px')
4. Now, click on the `Sorts...` option in the menu. Now, the sort dialog will be opened like below.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/sort-data-in-chart-data-region/sort-dialog.png '#width=385px')
5. Refer [Sort Data](./../../../compose-report/sort-data/) section to and create required sort expression in the sort dialog and click on the `OK` button.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/sort-data-in-chart-data-region/new-sort-expression.png '#width=385px')
A sort expression is created to sort `ProductCategory` fields in descending order (i.e Z-A ). On report preview, the `ProductCategory` field values will be sorted in Z-A alphabetical order.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/sort-data-in-chart-data-region/sort-data-preview.png '#width=550px')

Similarly, you can set sort expression on a `chart series group`.

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/sort-data-in-chart-data-region.rdl)