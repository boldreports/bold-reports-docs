---
title: Parameters Layout | Web Report Designer | Bold Reports
description: This section explains how to use parameter layout in Bold Reports Designer to arrange and organize the parameter structure in a report. 
---

# Parameters Layout

Parameters layout is a grid layout where you can arrange the order of parameters. When you preview the report, the order of parameters displayed on the parameters pane is determined by the order of the parameters in the parameters layout and parameters pane.
Parameters order is important when designing a reports with cascading parameters.

You can access the parameters layout by using the `Edit Layout` option in `Parameters Pane`.

1. Open the parameters pane in the navigation panel.
![Open parameters pane](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/open-parameters-pane.png)
2. Click on `Edit Layout >` option in the parameters pane.
![Edit layout option to open layout](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/edit-layout.png)
3. Now, the parameters layout dialog will open.
![Parameters layout dialog](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/parameters-layout-dialog.png)

By default, the layout opens with four columns and two rows. You can manually reorder parameters, insert or delete rows and columns in the parameters layout dialog.

> The parameter layout supported for reports created from RDL XML schema version 2016 onward.

## Order parameters

In the grid, you can move parameters to any position by dragging them to the desired cell. If there is already a parameter in that cell, the parameters swap positions. Changing the position of a parameter also impact the order of the parameter list in parameters pane. Now, the parameters layout have four parameters in a row with four columns. In report preview, the parameter pane will look like below,

![Before ordering parameters](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/before-ordering-in-viewer.png)

To arrange the parameter positions drag a required parameter from a cell and drop into required cell position,

![Ordering parameters](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/swap-positions.png)

Then click OK. Notice the order of parameters in the parameters pane list also changed.

Now, I have arranged the parameters like below,

![After ordering parameters](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/after-arranging-positions.png)

Parameters list in the parameters pane also reordered based on the parameter layout,

![Ordering effect in parameters pane](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/reordering-in-list.png)

After ordering, at report preview the parameter pane will look like below,

![After reordering parameters in viewer](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/after-reordering-in-viewer.png)

## Insert row or column

As in any grid-like structure, you can add new columns and rows or remove them. We can add maximum of 8 columns, but the number of rows appears not have a limit. To insert a row or column, right click on a cell around which you want to add row or column. The context menu will show up with `Insert Column` and `Insert Row` options.

![Cell context menu](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/cell-context-menu.png)

You can add a column to the `Left` or `Right` of the target row.

![Insert row options](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/insert-column-options.png)

Similarly, you can add a row `Above` or `Below` the target row.

![Insert column options](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/insert-row-options.png)

## Delete row or column

As like insert row and column actions, you can also delete a parameter or delete a row or column in the parameter layout. Deleting a row or column will also delete all associated parameters on that specific row or column. The delete action in parameters layout will also deletes the respective parameters from parameters pane. To delete a row or column, right click any cell in that respective row or column. The context menu will show up with `Delete Column` and `Delete Row` options.

![Cell context menu](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/cell-context-menu.png)

Performing delete action on an empty row or column will automatically deletes the respective row or column from the layout. If the row or column contains one or more parameters, it will show a alert confirmation like below.

![Alert confirmation](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/delete-alert-confirmation.png)

You can also delete a specific parameter from a row or column using the `Delete` option in the context menu. Right click on the cell in which you want to delete the parameter and select `Delete` option from the menu.

![Delete single parameter](/static/assets/on-premise/images/report-designer/report-parameters/parameters-layout/delete-single-parameter.png)

Once you click OK. It also deletes the respective parameter from parameters pane.