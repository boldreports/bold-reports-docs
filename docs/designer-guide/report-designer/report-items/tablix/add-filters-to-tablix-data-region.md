---
title: Add Filters to a Tablix in RDL Reports | Bold Reports
description: Add filters to a tablix data region or group in Bold Reports Web Report Designer to include or exclude values and show different views of the same dataset.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, filters
---

# Add filters to a tablix data region in Bold Reports<sup>®</sup>

In the Bold Reports<sup>®</sup> Web Report Designer, you can add filters to a tablix data region or a data region group to include or exclude specific values, or to show a different view of the dataset in multiple data regions. When processing the report, the filters applied in the report parts are processed first on the dataset, then on the data region, and then on groups.

## How do I set a filter on a tablix data region?

You set a filter on a tablix data region in the Bold Reports<sup>®</sup> Web Report Designer with the `Set Filters...` button in the properties panel.

1. Select the tablix data region in the design area.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/select-data-region.png '#width=600px')
2. In the properties panel, click the `Set Filters...` button. The filter dialog opens, as shown in the following image.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/filters-dialog.png '#width=385px')
3. Create the required filter expression in the filter dialog and click `OK`. Refer to the [Filter Data](./../../../compose-report/filter-data/) section for details.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/create-filter-expressions.png '#width=385px')
In the above image, three filter equations are created to filter the data in the data region based on the `OrderYear`, `Product Category`, and `OrderQtr` data fields. In the following design, two tablix data regions use a single dataset to display the quarter sales `Q1` and `Q2` against a year.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/report-design-view.png '#width=600px')

On report preview, using the `OrderYear` and `ProductCategory` report parameters, the sales of `Q1` and `Q2` are displayed in the tablix region based on the applied filters.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/report-preview.png '#width=600px')

> Download the [tablix data region filter report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/add-filters-to-tablix-data-region.rdl).

## How do I set a filter on a tablix group?

You set a filter on a tablix group in the Bold Reports<sup>®</sup> Web Report Designer by selecting the group member in the grouping panel and using `Set Filters...`.

1. Click the surface of the tablix data region to open the grouping panel.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/enable-grouping-panel.png '#width=600px')
2. Click the required group tablix member in the `Row Groups` or `Column Groups` pane. The tablix member properties are listed in the properties panel.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/open-member-properties.png '#width=600px')
3. In the properties panel, click the `Set Filters...` button. The filter dialog opens, as shown in the following image.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/filters-dialog.png '#width=385px')
4. Create the required filter expression in the filter dialog and click `OK`. Refer to the [Filter Data](./../../../compose-report/filter-data/) section for details.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/filter-equation-for-group.png '#width=385px')

Before you apply the filter to the row group, the report preview displays the sales of each quarter and its total.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/before-applying-filter-report-preview.png '#width=425px')

After you apply filters to the respective row group, the total sales of `Q1` and its total are displayed.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/after-applying-filter-report-preview.png '#width=425px')

Here, the filter is applied on a row group for demonstration. You can apply filters on column groups and detail groups in the same way.

> Download the [tablix group filter report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/set-filter-on-a-tablix-group.rdl).

## Frequently asked questions

### In what order are filters processed?

Bold Reports<sup>®</sup> processes filters first on the dataset, then on the data region, and then on groups.

### Can I filter column groups and detail groups?

Yes. The same steps used for a row group apply to column groups and detail groups.

## See also

* [Filter data](./../../../compose-report/filter-data/)
* [Grouping panel in a tablix](./../../../report-items/tablix/grouping-panel/)
* [Add grouping and totals in a tablix](./../../../report-items/tablix/add-grouping-and-totals-in-tablix-design/)
