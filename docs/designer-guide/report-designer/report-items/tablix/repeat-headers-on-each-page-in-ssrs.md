---
title: Repeat Headers on Each Page in SSRS | Bold Reports
description: This section describes how to repeat headers on each page of SSRS report in the Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, repeat headers
---

# Repeat Headers on Each Page in SSRS

To repeat the headers on every page of the report follow the below steps.

1. Refer [Simple Table Design](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/) section and create a table report as shown below.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-repeat-headers/simple-table-design.png)
2. Click on the surface of the table design to enable grouping panel.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-repeat-headers/enable-grouping-panel.png)
3. Refer [Advanced Mode](./../../../report-items/tablix/grouping-panel/#advanced-mode) section to enable advanced mode in grouping panel.
4. Once you click on the `Advanced Mode`, it will show the static columns in both row and column group. Now, select the static column presented in row group pane (Header Row Group)
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-repeat-headers/select-static-group.png)
5. In the properties panel, enable `RepeatOnNewPage` property checkbox and set `KeepWithGroup` as `After`.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-repeat-headers/set-repeat-header-properties.png)

Now, preview the report and the header rows will now show up on every page.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-repeat-headers/report-preview-first-page.png)

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-repeat-headers/report-preview-last-page.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/repeat-headers-on-each-page-in-ssrs.rdl).