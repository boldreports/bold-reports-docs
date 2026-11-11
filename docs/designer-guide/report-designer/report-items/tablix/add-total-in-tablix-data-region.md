---
title: Add Totals to a Tablix Data Region in RDL | Bold Reports
description: Add totals to a tablix data region in Bold Reports Web Report Designer to show the sum of numeric values for the tablix body, a row group, or a column group.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Add a total to a tablix data region in Bold Reports<sup>®</sup>

In the Bold Reports<sup>®</sup> Web Report Designer, the Add Total option displays the sum of numeric values for a tablix group or for the whole tablix data region. You can add a total to the tablix body, a row group, or a column group.

## How do I add a total to the tablix body?

You add a total to the tablix body in the Bold Reports<sup>®</sup> Web Report Designer from the cell context menu.

1. Select the cell that contains a numeric field in the tablix data region body area.
2. Right-click in the cell and click the `Add Total` option in the menu.
   ![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/add-total-to-tablix-data-region/open-cell-menu.png '#width=385px')
3. Check that a new row or column is added outside the respective cell in the data region.
   ![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/add-total-to-tablix-data-region/add-total-to-body-cell-output.png '#width=385px')

If the cell in the body area is common to a row and column group, as shown in the following image, the `Row` and `Column` options are listed in the `Add Total` menu.
![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/add-total-to-tablix-data-region/row-and-column-total-menu.png '#width=385px')

## How do I add a total for a row group?

You add a row group total in the Bold Reports<sup>®</sup> Web Report Designer by choosing `Before` or `After` from the `Add Total` menu.

1. Select the cell in the row group area for which you want a total in the tablix data region.
2. Right-click in the cell and click the `Add Total` option in the menu.
   ![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/add-total-to-tablix-data-region/add-total-row-group-menu.png '#width=385px')
3. Click the `Before` or `After` option to add the total before or after a group in the tablix data region.
4. Check that a new row is added outside the current group in the data region, with a default total for each numeric field in the row.
    * **Add total before**:
        ![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/add-total-to-tablix-data-region/row-group-add-total-before.png '#width=385px')
    * **Add total after**:
        ![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/add-total-to-tablix-data-region/row-group-add-total-after.png '#width=385px')

## How do I add a total for a column group?

You add a column group total in the Bold Reports<sup>®</sup> Web Report Designer by choosing `Before` or `After` from the `Add Total` menu.

1. Select the cell in the column group area for which you want a total in the tablix data region.
2. Right-click in the cell and click the `Add Total` option in the menu.
   ![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/add-total-to-tablix-data-region/add-total-column-group-menu.png '#width=385px')
3. Click the `Before` or `After` option to add the total before or after a group in the tablix data region.
4. Check that a new column is added outside the current group in the data region, with a default total for each numeric field in the column.
    * **Add total before**:
        ![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/add-total-to-tablix-data-region/column-group-add-total-before.png '#width=385px')
    * **Add total after**:
        ![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/add-total-to-tablix-data-region/column-group-add-total-after.png '#width=385px')

## Frequently asked questions

### When does the Add Total menu show Row and Column options?

The `Row` and `Column` options are listed in the `Add Total` menu when the cell in the body area is common to a row and column group.

### What does a group total contain by default?

A default total is added for each numeric field in the new row or column.

## See also

* [Add grouping and totals in a tablix](./../../../report-items/tablix/add-grouping-and-totals-in-tablix-design/)
* [Grouping panel in a tablix](./../../../report-items/tablix/grouping-panel/)
* [Tablix cell properties](./../../../report-items/tablix/cell-properties/)
