---
title: Merge and Split Cells in an RDL Tablix | {{site.productName}}
description: Merge adjacent tablix cells in the {{site.productName}} Web Report Designer to add spanning labels for row and column groups, and split merged cells in RDL reports.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Merge cells in a tablix in the {{site.productNameTM}} Web Report Designer

In the {{site.productNameTM}} Web Report Designer, you can merge two or more adjacent cells in a tablix data region into a single cell. Merging improves the appearance or provides spanning labels for column groups and row groups.

## What are the merge restrictions?

In a {{site.productNameTM}} tablix, you can merge the cells in each area of a data region only within that area. The following restrictions apply when you merge cells in a tablix data region:

* Cannot merge a cell in the corner area of data region with a cell in the row group area. Cross boundary merge is not allowed.
* In body area, the cells can only be merged in the horizontal direction and not in vertical direction.
* In corner area, the cells can be merged in horizontally across columns or vertically down rows at a time.

## How do I merge cells?

The following sections show how to merge cells in each area of a {{site.productNameTM}} tablix data region, using a company sales report.

![Tablix areas](/static/images/report-designer/report-items/tablix/merge-split-sketch.png '#width=425px')

### Corner area

To merge cells in the corner area of a {{site.productNameTM}} tablix, follow these steps:

1. Select the cells in the corner area of the tablix data region.
2. Right-click the cell to open the cell menu, and click the `Merge Cells` option in the menu list.
   > If the cell selection is invalid or across boundaries, `Merge Cells` option will not be available in the menu.

   ![Merge corner cells](/static/images/report-designer/report-items/tablix/merge-corner-cells.png '#width=410px')
3. The selected cells in the corner area are merged as shown in the following image.
   ![Merge corner cells](/static/images/report-designer/report-items/tablix/corner-cell-merge-output.png '#width=385px')

> If the cell has any content, the content of the top-left cell will be displayed in the newly merged cell. The content of the rest of the cells in the merged region will be cleared.

### Body area

To merge cells in the body area of a {{site.productNameTM}} tablix, follow these steps:

1. Select the cells in the body area of the tablix data region.
2. Right-click the cell to open the cell menu, and click the `Merge Cells` option in the menu list.
   > If the cell selection is invalid or across boundaries, `Merge Cells` option will not be available in the menu.

   ![Merge corner cells](/static/images/report-designer/report-items/tablix/select-cell-in-body-area-for-merge-action.png '#width=410px')
3. The selected cells in the body area are merged as shown in the following image.
   ![Merge corner cells](/static/images/report-designer/report-items/tablix/body-cells-merge-output.png '#width=385px')

> If the cell has any content, the content of the top-left cell will be displayed in the newly merged cell. The content of the rest of the cells in the merged region will be cleared.

### Row group

To merge cells in the row group area of a {{site.productNameTM}} tablix, follow these steps:

1. Select the cells in the row group of the tablix data region.
2. Right-click the cell to open the cell menu, and click the `Merge Cells` option in the menu list.
   > If the cell selection is invalid or across boundaries, `Merge Cells` option will not be available in the menu.

    ![Merge corner cells](/static/images/report-designer/report-items/tablix/select-cell-in-row-group-area-for-merge-action.png '#width=410px')
3. The selected cells in the row group area are merged as shown in the following image.
   ![Merge corner cells](/static/images/report-designer/report-items/tablix/merge-row-group-cells-output.png '#width=385px')

> If the cell has any content, the content of the top-left cell will be displayed in the newly merged cell. The content of the rest of the cells in the merged region will be cleared.

### Column group

To merge cells in the column group area of a {{site.productNameTM}} tablix, follow these steps:

1. Select the cells in the column group area of the tablix data region.
2. Right-click the cell to open the cell menu, and click the `Merge Cells` option in the menu list.
   > If the cell selection is invalid or across boundaries, `Merge Cells` option will not be available in the menu.

   ![Merge corner cells](/static/images/report-designer/report-items/tablix/select-cell-in-column-group-area-for-merge-action.png '#width=410px')
3. The selected cells in the column group area are merged as shown in the following image.
   ![Merge corner cells](/static/images/report-designer/report-items/tablix/merge-column-group-cells-output.png '#width=385px')

> If the cell has any content, the content of the top-left cell will be displayed in the newly merged cell. The content of the rest of the cells in the merged region will be cleared.

## How do I split merged cells?

After you merge a cell in a {{site.productNameTM}} tablix, you can split it with the `Split Cells` option in the menu list. Cells split in the horizontal direction across columns or in the vertical direction down rows.

1. Select the cells in the specific area of the tablix data region.
2. Right-click the cell to open the cell menu, and click the `Split Cells` option in the menu list.
   > If the cell selection is invalid or across boundaries, `Split Cells` option will not be available in the menu.

   ![Split corner cells](/static/images/report-designer/report-items/tablix/select-cell-in-column-group-area-for-split-action.png '#width=410px')
3. The selected cell in the column group area splits as shown in the following image.
   ![Split corner cells](/static/images/report-designer/report-items/tablix/split-row-group-cells-output.png '#width=385px')

> If the cell has any content, the content of the top-left cell will be displayed in the newly merged cell. The content of the rest of the cells in the merged region will be cleared.

## Frequently asked questions

### Why is the Merge Cells option missing from the cell menu?

In the {{site.productNameTM}} Web Report Designer, the `Merge Cells` option is not available when the cell selection is invalid or crosses area boundaries.

### What happens to cell content when I merge cells?

The content of the top-left cell is displayed in the newly merged cell. The content of the rest of the cells in the merged region is cleared.

## See also

* [Tablix report item](./../../../report-items/tablix/)
* [Resize tablix data region](./../../../report-items/tablix/resize-tablix-data-region/)
* [Cell properties](./../../../report-items/tablix/cell-properties/)
