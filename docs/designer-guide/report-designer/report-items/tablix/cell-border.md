---
title: Tablix Cell Border Behavior in RDL Reports | {{site.productName}}
description: Learn how tablix cell borders work in {{site.productName}} Web Report Designer, where adjacent cells share a border and each border depends on the cell position.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Tablix cell border in {{site.productNameTM}} Web Report Designer

In the {{site.productNameTM}} Web Report Designer, a tablix cell is the intersection between a row and a column in a tablix data region. Cells are visually separated using borders based on the collapsed-border table rendering model. Two adjacent cells share a border.

## How do tablix cell borders behave?

The border behavior of each tablix cell in the {{site.productNameTM}} Web Report Designer varies based on its position in the table. In the following image, the table item contains three rows and columns.

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/tablix-design.png '#width=315px')

### Which borders apply to the first cell of the first row?

If you apply a border to the cell in position (0,0) of the table, the border is applied to the respective cell based on the collapsing borders model behavior.

|Border Type           | Applicable         |
|-----------------------|-----------------------|
|border-left|Yes|
|border-top|Yes|
|border-right|Yes|
|border-bottom|No|

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/border-first-row-first-cell.png '#width=315px')

### Which borders apply to the other cells of the first row?

If you apply a border to the cell in position (0,1) of the table, the following borders apply:

|Border Type           | Applicable         |
|-----------------------|-----------------------|
|border-left|No|
|border-top|Yes|
|border-right|Yes|
|border-bottom|No|

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/border-first-row-second-cell.png '#width=315px')

The other cells in the first row inherit the same behavior as the (0,1) cell.

All rows in the table except the last row inherit the above border behavior.

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/common-border-behaviour.png '#width=315px')

### Which borders apply to the first cell of the last row?

If you apply a border to the last row, first cell position, the following borders apply:

|Border Type           | Applicable         |
|-----------------------|-----------------------|
|border-left|Yes|
|border-top|Yes|
|border-right|Yes|
|border-bottom|Yes|

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/border-last-row-first-cell.png '#width=315px')

### Which borders apply to the other cells of the last row?

If you apply a border to the last row, second cell position, the following borders apply.

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/border-last-row-second-cell.png '#width=315px')

|Border Type           | Applicable         |
|-----------------------|-----------------------|
|border-left|No|
|border-top|Yes|
|border-right|Yes|
|border-bottom|Yes|

The other cells in the last row inherit the same behavior as the second cell position.

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/last-row-border-behaviour.png '#width=315px')

## How do borders look in report preview?

On report preview in {{site.productNameTM}}, the border properties are applied to the four sides of each cell in the table.

![Table design](/static/assets/on-premise/images/report-designer/report-items/tablix-cell-border/preview.png '#width=315px')

## See also

* [Tablix cell properties](./../../../report-items/tablix/cell-properties/)
* [Merge cells in a tablix data region](./../../../report-items/tablix/merge-cells-in-tablix-data-region/)
