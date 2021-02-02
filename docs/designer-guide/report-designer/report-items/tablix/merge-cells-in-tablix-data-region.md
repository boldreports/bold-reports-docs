---
title: Merge cells | Web Report Designer | Bold Reports
description: This section describes about merge and split actions in tablix data regions to design a report using tablix in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Merge Cells

In tablix data regions, two or more adjacent cells can be merged into a single cell to improve the appearance or to provide spanning labels for column groups and row groups.

## Merge restrictions

The cells in the each area of a data region can be merged within the respective areas. Following are the some of the restrictions when merging the cells in tablix data region:

* Cannot merge a cell in the corner area of data region with a cell in the row group area. Cross boundary merge is not allowed.
* In body area, the cells can only be merged in the horizontal direction and not in vertical direction.
* In corner area, the cells can be merged in horizontally across columns or vertically down rows at a time.

## Merge cells

In the following sections, merge action for each area of tablix data region is demonstrated using company sales report.

![Tablix areas](/static/assets/on-premise/images/report-designer/report-items/tablix/merge-split-sketch.png)

### Corner area

1. Select the cells in the corner area of the tablix data region.
2. Right click in the cell to open cell menu, in the menu list click on the `Merge Cells` option.
   > If the cell selection is invalid or across boundaries, `Merge Cells` option will not be available in the menu.

   ![Merge corner cells](/static/assets/on-premise/images/report-designer/report-items/tablix/merge-corner-cells.png)
3. Now, the selected cell in the corner area will be merged like below.
![Merge corner cells](/static/assets/on-premise/images/report-designer/report-items/tablix/corner-cell-merge-output.png)

> If the cell has any content, the content of the top-left cell will be displayed in the newly merged cell. The content of the rest of the cells in the merged region will be cleared.

### Body area

1. Select the cells in the body area of the tablix data region.
2. Right click in the cell to open cell menu, in the menu list click on the `Merge Cells` option.
   > If the cell selection is invalid or across boundaries, `Merge Cells` option will not be available in the menu.

   ![Merge corner cells](/static/assets/on-premise/images/report-designer/report-items/tablix/select-cell-in-body-area-for-merge-action.png)
3. Now, the selected cell in the body area will be merged like below.
![Merge corner cells](/static/assets/on-premise/images/report-designer/report-items/tablix/body-cells-merge-output.png)

> If the cell has any content, the content of the top-left cell will be displayed in the newly merged cell. The content of the rest of the cells in the merged region will be cleared.

### Row group

1. Select the cells in the row group of the tablix data region.
2. Right click in the cell to open cell menu, in the menu list click on the `Merge Cells` option.
   > If the cell selection is invalid or across boundaries, `Merge Cells` option will not be available in the menu.

    ![Merge corner cells](/static/assets/on-premise/images/report-designer/report-items/tablix/select-cell-in-row-group-area-for-merge-action.png)
3. Now, the selected cell in the row group area will be merged like below.
![Merge corner cells](/static/assets/on-premise/images/report-designer/report-items/tablix/merge-row-group-cells-output.png)

> If the cell has any content, the content of the top-left cell will be displayed in the newly merged cell. The content of the rest of the cells in the merged region will be cleared.

### Column group

1. Select the cells in the column group area of the tablix data region.
2. Right click in the cell to open cell menu, in the menu list click on the `Merge Cells` option.
   > If the cell selection is invalid or across boundaries, `Merge Cells` option will not be available in the menu.

   ![Merge corner cells](/static/assets/on-premise/images/report-designer/report-items/tablix/select-cell-in-column-group-area-for-merge-action.png)
3. Now, the selected cell in the column group area will be merged like below.
![Merge corner cells](/static/assets/on-premise/images/report-designer/report-items/tablix/merge-row-group-cells-output.png)

> If the cell has any content, the content of the top-left cell will be displayed in the newly merged cell. The content of the rest of the cells in the merged region will be cleared.

## Split cells

Once a cell is merged, you can split using the `Split Cells` option in the menu list. The cells can split in horizontal direction across columns or in vertical direction down rows.

1. Select the cells in the specific area of the tablix data region.
2. Right click in the cell to open cell menu, in the menu list click on the `Split Cells` option.
   > If the cell selection is invalid or across boundaries, `Split Cells` option will not be available in the menu.

   ![Split corner cells](/static/assets/on-premise/images/report-designer/report-items/tablix/select-cell-in-column-group-area-for-split-action.png)
3. Now, the selected cell in the column group area will split like below.
![Split corner cells](/static/assets/on-premise/images/report-designer/report-items/tablix/split-row-group-cells-output.png)

> If the cell has any content, the content of the top-left cell will be displayed in the newly merged cell. The content of the rest of the cells in the merged region will be cleared.