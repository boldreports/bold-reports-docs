---
title: Add filters to tablix data region | Web ReportDesigner
description: This section describes how to add filters to tablix data regions and group in the Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, filters
---

# Add filters to tablix data region

Filters can be used to filter data in the tablix data region or a data region group to include or exclude specific values from display or to provide a different view of the dataset in multiple data regions. When processing the report, the filters applied in the report parts are processed first on the dataset, and then on the data region, and then on groups.

## Set filter on tablix data region

1. Select tablix data region in the design area.
![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/select-data-region.png)
2. In the properties panel, click on the `Set Filters...` button. Now, the filter dialog will be opened like below.
![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/filters-dialog.png)
3. Refer [Filter Data](./../../../compose-report/filter-data/) section and create required filter expression in the filter dialog and click `OK`.
![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/create-filter-expressions.png)
In the above image, three filter equations are created to filter the data in the data region based on `OrderYear`, `Product Category`, and `OrderQtr` data fields. In the below design, two different tablix data regions are designed using single dataset to display the quarter sales `Q1` and `Q2` against a year.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/report-design-view.png)

On report preview, using the `OrderYear` and `ProductCategory` report parameters, the sales of `Q1` and `Q2` is displayed in the tablix region based on applied filters.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/report-preview.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/add-filters-to-tablix-data-region.rdl).

## Set filter on a tablix group

1. Click on the surface of the tablix data region to open grouping panel.
![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/enable-grouping-panel.png)
2. Click on the required group tablix member in the `Row Groups` or `Column Groups` pane, now the respective tablix member properties will be listed in the properties panel.
![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/open-member-properties.png)
3. In the properties panel, click on the `Set Filters...` button. Now, the filter dialog will be opened like below.
![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/filters-dialog.png)
4. Refer [Filter Data](./../../../compose-report/filter-data/) section and create required filter expression in the filter dialog and click `OK`.
![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/filter-equation-for-group.png)

Before applying filter to the row group, on report preview the report displays sales of each quarters and its total.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/before-applying-filter-report-preview.png)

After applying filters for the respective row group, the total sales of `Q1` and its total is displayed.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/after-applying-filter-report-preview.png)

Here, the filter is applied on a row group group for demonstration. Similarly, you can apply filters on column groups and detail groups.

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/set-filter-on-a-tablix-group.rdl).