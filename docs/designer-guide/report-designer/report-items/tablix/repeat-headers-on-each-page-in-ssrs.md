---
title: Repeat Table Headers on Each Page in SSRS RDL | {{site.productName}}
description: Repeat column headers on every page of an SSRS RDL table in the {{site.productName}} Web Report Designer with the RepeatOnNewPage and KeepWithGroup properties.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting, repeat headers
---

# Repeat headers on each page in SSRS reports with {{site.productNameTM}}

You repeat table headers on every page in the {{site.productNameTM}} Web Report Designer by setting the `RepeatOnNewPage` and `KeepWithGroup` properties on the static header row. Follow the steps in this guide to set them up in a table report.

## How do I repeat headers on every page?

To repeat the headers on every page of a report in the {{site.productNameTM}} Web Report Designer, follow these steps:

1. See the [Simple Table Design](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/) section and create a table report.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-repeat-headers/simple-table-design.png '#width=285px')
2. Click the surface of the table design to enable the grouping panel.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-repeat-headers/enable-grouping-panel.png '#width=285px')
3. See the [Advanced Mode](./../../../report-items/tablix/grouping-panel/#advanced-mode) section to enable advanced mode in the grouping panel.
4. After you click `Advanced Mode`, the grouping panel shows the static columns in both the row and column group. Select the static column in the row group pane (Header Row Group).
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-repeat-headers/select-static-group.png '#width=315px')
5. In the properties panel, enable the `RepeatOnNewPage` property checkbox and set `KeepWithGroup` to `After`.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-repeat-headers/set-repeat-header-properties.png '#width=315px')

## What does the report look like in preview?

When you preview the report in {{site.productNameTM}}, the header rows show up on every page. The following images show the first and last pages of the report preview.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-repeat-headers/report-preview-first-page.png '#width=455px')

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-repeat-headers/report-preview-last-page.png '#width=455px')

> Download the [repeat headers report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/repeat-headers-on-each-page-in-ssrs.rdl).

## See also

* [Keep column headers visible while scrolling](./../../../report-items/tablix/keep-column-headers-visible-while-scrolling-in-ssrs/)
* [Tablix member properties](./../../../report-items/tablix/member-properties/)
* [Grouping panel](./../../../report-items/tablix/grouping-panel/)
