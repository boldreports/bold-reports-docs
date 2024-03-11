---
title: Sort data in a tablix data region | Web ReportDesigner
description: This section describes how to Sort data in a tablix data regions and group in the Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, filters
---

# Sort data in a tablix data region

In a tablix data region, set the sort expression for the data region or for each group, including the details group.

## Set sort expression for tablix data region

1. Select tablix data region in the design area.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/select-data-region.png '#width=600px')
2. In the properties panel, click on the `Set Sorts...` button. Now, the sort dialog will be opened like below.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sort-dialog.png '#width=315px')
3. Refer [Sort Data](./../../../compose-report/sort-data/) section to and create required sort expression in the sort dialog and click on the `OK` button.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/sort-data-in-tablix-data-region/new-sort-expression.png '#width=315px')

A sort expression is created to sort `ProductCategory` fields in descending order (i.e Z-A ). On report preview, the `ProductCategory` field values will be sorted in Z-A alphabetical order. Respective column is highlighted in the below snap.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/sort-data-in-tablix-data-region/sorting-report-preview.png '#width=600px')

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/sort-data-in-tablix-data-region.rdl).

## Set sort expression on a tablix group

1. Click on the surface of the tablix data region to open grouping panel.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/enable-grouping-panel.png '#width=455px')
2. Click on the required group tablix member in the `Row Groups` or `Column Groups` pane, now the respective tablix member properties will be listed in the properties panel.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/add-filter-to-tablix-data-region/open-member-properties.png '#width=600px')
3. In the properties panel, click on the `Set Sorts...` button. Now, the sort dialog will be opened like below.
   ![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sort-dialog.png '#width=315px')
4. Refer [Sort Data](./../../../compose-report/sort-data/) section to and create required sort expression in the sort dialog and click on the `OK` button.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/sort-data-in-tablix-data-region/new-sort-expression.png '#width=315px')

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/set-sort-expression-on-a-tablix-group.rdl).