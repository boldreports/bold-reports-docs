---
title: Resize tablix data region | Report Designer | Bold Reports
description: Resize the tablix data region, row, columns to display the improve the data presentation in Web Report Designer.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Resize tablix data region

To improve the report readability, we can resize the height and width of specific column and row or the over all tablix data region.

## Over all data region

### Resize using resizer

**Change height property**:

To change the height of the tablix region , place the mouse pointer in the `CenterTop` or `CenterBottom` position of the tablix selection line.

Use `CenterBottom` to increase height towards downward direction or to decrease height towards upward direction,

![Adjust column width of the table](/static/assets/on-premise/images/report-designer/report-items/tablix/resize-data-region-vertically.png)

Use `CenterTop` to increase height towards upward direction or to decrease height towards downward direction,

![Adjust column width of the table](/static/assets/on-premise/images/report-designer/report-items/tablix/resize-data-region-vertically-upwards.png)

**Change width property**:

To change the width of the tablix region , place the mouse pointer in the `RightCenter` or `LeftCenter` position of the tablix selection line.

Use `RightCenter` to resize the width outwards or inwards in right side direction,

![Adjust column width of the table](/static/assets/on-premise/images/report-designer/report-items/tablix/resize-data-region-right-center.png)

Use `LeftCenter` to resize the width outwards or inwards in left direction,

![Adjust column width of the table](/static/assets/on-premise/images/report-designer/report-items/tablix/resize-data-region-left-center.png)

**Change width and height proportionally**:

1. Select the tablix data region in the design area.
![Adjust column width of the table](/static/assets/on-premise/images/report-designer/report-items/tablix/select-tablix-data-region-to-resize.png)
2. To resize the data region place the mouse pointer in `LeftTop` or `RightTop` or `LeftBottom` or `RightBottom` position on the data region. Now, the resizer arrow will be enabled in the respective position like below,
![Adjust column width of the table](/static/assets/on-premise/images/report-designer/report-items/tablix/resize-bottom-label.png)
3. Hold and drag the resizer arrow, now the tablix data region will be resized proportionally in all direction.
![Adjust column width of the table](/static/assets/on-premise/images/report-designer/report-items/tablix/over-all-resize-ouput.png)

### Set width and height in table properties

1. Select a tablix data region, now the respective item properties will be listed in the properties panel.
![Resize the table column](/static/assets/on-premise/images/report-designer/report-items/tablix/select-tablix-data-region-to-resize.png)
2. In the properties panel, modify the `Height` and `Width` property of the tablix data region.
![Resize the table column](/static/assets/on-premise/images/report-designer/report-items/tablix/tablix-width-and-height-properties.png)

## Resize the column

### Set column width using gripper

1. Place the mouse pointer in the respective column border.
![Resize the table column](/static/assets/on-premise/images/report-designer/report-items/tablix/resize-column.png)
2. Drag the column gripper horizontally, to adjust the column width.
![Adjust column width of the table](/static/assets/on-premise/images/report-designer/report-items/tablix/resize-column-ouput.png)

### Set column width in cell properties

1. Select a cell in the tablix data region, now the respective cell item properties will be listed in the properties panel.
![Resize the table column](/static/assets/on-premise/images/report-designer/report-items/tablix/select-cell-to-resize-width.png)
2. In the properties panel, modify the `Width` property of the respective cell.
![Resize the table column](/static/assets/on-premise/images/report-designer/report-items/tablix/set-width-property.png)

### Using touch resizer

To increase or decrease the column using touch resizer, `Tap` on the respective column gripper in the screen. Now, a bubble will be enabled in the right side of the column like below.

![Resize the table column](/static/assets/on-premise/images/report-designer/report-items/tablix/touch-resizer-column.png)

Now, drag  the bubble horizontally to adjust the column width.

![Resize the table column](/static/assets/on-premise/images/report-designer/report-items/tablix/touch-resizer-column-output.png)

## Resize the row

### Set row height using gripper

1. Place the mouse pointer in the respective row border.
![Resize the table row](/static/assets/on-premise/images/report-designer/report-items/tablix/resize-row.png)
2. Drag the row gripper vertically upwards or downwards, to adjust the row height.
![Adjust row height of the table](/static/assets/on-premise/images/report-designer/report-items/tablix/resize-row-ouput.png)

### Set row height in cell properties

1. Select a cell in the tablix data region, now the respective cell item properties will be listed in the properties panel.
![Resize the table column](/static/assets/on-premise/images/report-designer/report-items/tablix/select-cell-to-resize-width.png)
2. In the properties panel, modify the `Height` property of the respective cell.
![Resize the table column](/static/assets/on-premise/images/report-designer/report-items/tablix/set-height-property.png)

### Using touch resizer

To increase or decrease the row height using touch resizer, `Tap` on the respective row gripper in the screen. Now, a bubble will be enabled in the bottom of the row like below.

![Resize the table column](/static/assets/on-premise/images/report-designer/report-items/tablix/touch-resizer-row.png)

Now, drag  the bubble vertically to adjust the row height.

![Resize the table column](/static/assets/on-premise/images/report-designer/report-items/tablix/touch-resizer-row-output.png)