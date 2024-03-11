---
layout: post
title: Repeat row and column headers on multiple pages
description: This section explains how to repeat the row and column headers on multiple pages in the report viewer
platform: report-platform
documentation: ug
---

# How to repeat row and column headers on multiple pages

This section explains how to repeat the row and column headers on multiple pages

## Display column headers on multiple pages in matrix

1. Select the matrix report item in the report and open the **Properties** panel.
2. Expand the **Headers** section in the **Properties** panel and select the **Repeat Column** check box under the **Headers** section.
   ![table design](/static/assets/on-premise/images/report-designer/how-to/repeat-row-column-header-on-multiple-pages/repeat-column.png)
3. Click the **Preview** at the top-right corner. The matrix header columns are repeated on each report page, as in the following image.
   ![output](/static/assets/on-premise/images/report-designer/how-to/repeat-row-column-header-on-multiple-pages/repeat-column-header-after.gif)

## Display row headers on multiple pages in matrix

1. Select the matrix report item in the report and open the **Properties** panel.
2. Expand the **Headers** section in the **Properties** panel and select the **Repeat row** check box under the **Headers** section.
   ![table design](/static/assets/on-premise/images/report-designer/how-to/repeat-row-column-header-on-multiple-pages/repeat-row.png)
3. Click the **Preview** at the top-right corner. The matrix header rows are repeated on each report page, as in the following image.
   ![output](/static/assets/on-premise/images/report-designer/how-to/repeat-row-column-header-on-multiple-pages/repeat-row-header-after.gif)

## To display a static row or column on multiple pages

1. Select the table report item and open the **Properties** panel.
2. Click the **dotted button** on the right side of the **Grouping panel** and select **Advanced Mode**. Now, the Grouping panel displays the hierarchical static and dynamic members of the table groups.
   ![table design](/static/assets/on-premise/images/report-designer/how-to/repeat-row-column-header-on-multiple-pages/advanced-mode.png)
3. Click a static member in Row Groups and check the **RepeatOnNewPage** option in the Properties panel.
4. Set the **KeepWithGroup** property to After. You must choose one of the following options from the drop-down menu based on your group:
   ![table design](/static/assets/on-premise/images/report-designer/how-to/repeat-row-column-header-on-multiple-pages/repeat-static-row.png)

   * **After:** Keep this selected member with the following group members. Set this option to keep a group header with a group.
   * **Before:** Keep this selected member with the previous group members. Set this option to keep a group footer with a group.
   * **None:** Set this option when you don’t want this member to be kept with the members of the selected row group.
  
5. Repeat steps 3 and 4 for as many adjacent members as you want to repeat.
6. Click **Preview**. The table header is repeated on each report page, as in the following image
   ![output](/static/assets/on-premise/images/report-designer/how-to/repeat-row-column-header-on-multiple-pages/static-header-after-1.gif)
