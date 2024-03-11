---
title: Tablix cell border | Web ReportDesigner | Bold Reports
description: This section describes about tablix cell border and its behaviour to design a report using tablix in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Tablix cell border

A cell is the intersection between a row and a column in a tablix data region. Each cells are visually separated using the border based on the collapsed-border table rendering model. Two adjacent cells will share a border.

## Border behaviour

In the below snap, the table item contains three row and columns, the border behaviour for each cell varies based on its position in the table.

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/tablix-design.png '#width=315px')

If we apply border for the cell in position (0,0) of the table, the border will be applied to the respective cell based on the collapsing borders model behaviour.

|Border Type           | Applicable         |
|-----------------------|-----------------------|
|border-left|Yes|
|border-top|Yes|
|border-right|Yes|
|border-bottom|No|

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/border-first-row-first-cell.png '#width=315px')

If we apply border for the cell in position (0,1) of the table,

|Border Type           | Applicable         |
|-----------------------|-----------------------|
|border-left|No|
|border-top|Yes|
|border-right|Yes|
|border-bottom|No|

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/border-first-row-second-cell.png '#width=315px')

The other cells in the first row inherits the same behaviour as (0,1) cell.

Except last row of the table, other rows in the table inherits the above border behaviour.

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/common-border-behaviour.png '#width=315px')

If we apply border for last row, first cell position,

|Border Type           | Applicable         |
|-----------------------|-----------------------|
|border-left|Yes|
|border-top|Yes|
|border-right|Yes|
|border-bottom|Yes|

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/border-last-row-first-cell.png '#width=315px')

If we apply border for last row, second cell position,

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/border-last-row-second-cell.png '#width=315px')

|Border Type           | Applicable         |
|-----------------------|-----------------------|
|border-left|No|
|border-top|Yes|
|border-right|Yes|
|border-bottom|Yes|

The other cells in the last row inherits the same behaviour as second cell position.

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/last-row-border-behaviour.png '#width=315px')

On report preview, the border properties will be applied to the four sides of each cell in the table.

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/preview.png '#width=315px')