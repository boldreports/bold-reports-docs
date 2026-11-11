---
title: Sort Data in an RDL Tablix Data Region | Bold Reports
description: Sort data in a tablix in the Bold Reports Web Report Designer by setting a sort expression for the whole data region or for each group, including details.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, filters
---

# Sort data in a tablix data region in the Bold Reports<sup>®</sup> Web Report Designer

In the Bold Reports<sup>®</sup> Web Report Designer, you sort data in a tablix data region by setting a sort expression for the data region or for each group, including the details group.

## How do I set a sort expression for the tablix data region?

To sort the whole Bold Reports<sup>®</sup> tablix data region, follow these steps:

1. Select the tablix data region in the design area.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/select-data-region.png '#width=600px')
2. In the properties panel, click the `Set Sorts...` button. The sort dialog opens as shown in the following image.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sort-dialog.png '#width=315px')
3. See the [Sort Data](./../../../compose-report/sort-data/) section, create the sort expression you need in the sort dialog, and click the `OK` button.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/sort-data-in-tablix-data-region/new-sort-expression.png '#width=315px')

In this example, the sort expression sorts the `ProductCategory` field in descending order (Z-A). On report preview, the `ProductCategory` field values are sorted in Z-A alphabetical order. The following image highlights the sorted column.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/sort-data-in-tablix-data-region/sorting-report-preview.png '#width=600px')

> Download the [tablix sort report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/sort-data-in-tablix-data-region.rdl).

## How do I set a sort expression on a tablix group?

To sort a single group in a Bold Reports<sup>®</sup> tablix, follow these steps:

1. Click the surface of the tablix data region to open the grouping panel.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/enable-grouping-panel.png '#width=455px')
2. Click the group tablix member you need in the `Row Groups` or `Column Groups` pane. The properties panel lists the tablix member properties.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/open-member-properties.png '#width=600px')
3. In the properties panel, click the `Set Sorts...` button. The sort dialog opens as shown in the following image.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sort-dialog.png '#width=315px')
4. See the [Sort Data](./../../../compose-report/sort-data/) section, create the sort expression you need in the sort dialog, and click the `OK` button.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/sort-data-in-tablix-data-region/new-sort-expression.png '#width=315px')

> Download the [tablix group sort report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/set-sort-expression-on-a-tablix-group.rdl).

## Frequently asked questions

### Can I sort only one group in a tablix?

Yes. In the Bold Reports<sup>®</sup> Web Report Designer, you can set a sort expression for the whole data region or for each group, including the details group.

## See also

* [Add filters to tablix data region](./../../../report-items/tablix/add-filters-to-tablix-data-region/)
* [Sort data](./../../../compose-report/sort-data/)
* [Tablix member properties](./../../../report-items/tablix/member-properties/)
