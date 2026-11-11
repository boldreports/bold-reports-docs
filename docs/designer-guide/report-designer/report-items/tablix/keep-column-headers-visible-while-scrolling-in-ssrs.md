---
title: Keep Table Headers Visible While Scrolling | {{site.productName}}
description: Keep column headers visible while scrolling an SSRS RDL table in the {{site.productName}} Web Report Designer by setting Fixed Data and Repeat On New Page properties.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting, repeat headers
---

# Keep column headers visible while scrolling in SSRS reports with {{site.productNameTM}}

You keep column headers visible while scrolling in the {{site.productNameTM}} Web Report Designer by setting the `Fixed Data` and `Repeat On New Page` properties on the static header row. Follow the steps in this guide to set them up in a table report.

## How do I keep column headers visible while scrolling?

To keep column headers visible while you scroll through a report in the {{site.productNameTM}} Web Report Designer, follow these steps:

1. See the [Simple Table Design](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/) section and create a table report.

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/simple-table-design.png '#width=315px')

2. Click the surface of the table design to enable the grouping panel.

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/enable-grouping-panel.png '#width=315px')

3. See the [Advanced Mode](./../../../report-items/tablix/grouping-panel/#advanced-mode) section to enable advanced mode in the grouping panel.

4. After you click `Advanced Mode`, the grouping panel shows the static columns in both the row and column group. Select the static column in the row group pane (Header Row Group).

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/select-static-group.png '#width=355px')

5. In the properties panel, enable the `Fixed Data` and `Repeat On New Page` property checkboxes and set `Keep With Group` to `After`.

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/set-repeat-header.png '#width=315px')

    Preview your report and try scrolling. The column header looks messy because its background is transparent by default.

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/preview-before-applyig-color.png '#width=410px')

6. To fix this, change the background color of the cells in the header row.

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/preview-after-applyig-color.png '#width=315px')

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/preview-first-page.png '#width=410px')

> Download the [keep headers visible report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/keep-headers-visible-while-scrolling-in-tablix.rdl).

## Frequently asked questions

### Why does the fixed column header look messy when I scroll?

In the {{site.productNameTM}} Web Report Designer, the header background is transparent by default. Change the background color of the cells in the header row to fix it.

## See also

* [Repeat headers on each page](./../../../report-items/tablix/repeat-headers-on-each-page-in-ssrs/)
* [Tablix member properties](./../../../report-items/tablix/member-properties/)
* [Grouping panel](./../../../report-items/tablix/grouping-panel/)
