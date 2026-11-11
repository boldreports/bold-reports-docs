---
title: Resize Report Items in Web Report Designer | {{site.productName}}
description: Resize the height and width of RDL report items in the {{site.productName}} Web Report Designer using the resizer, size properties, keyboard shortcuts, or touch.
keywords: ejReportDesigner, reportdesigner, table, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Report item resizing in Web Report Designer

In {{site.productNameTM}} Web Report Designer, you can resize the height and width of report items in the design area to improve report readability. You can resize with the mouse resizer, the width and height properties, keyboard shortcuts, or the touch resizer.

## How do I resize using the resizer?

The resizer in the Web Report Designer changes the height, width, or both dimensions of a report item when you drag the selection line.

**Resize height**:

To change the height of a report item, place the mouse pointer in the `CenterTop` or `CenterBottom` position of the report item selection line.

Use `CenterBottom` to increase the height in the downward direction or to decrease the height in the upward direction.

![Adjust column width of the table](/static/assets/on-premise/images/report-designer/compose-report/design-surface/report-item-resizing/resize-vertically-downwards.png '#width=250px')

Use `CenterTop` to increase the height in the upward direction or to decrease the height in the downward direction.

![Adjust column width of the table](/static/assets/on-premise/images/report-designer/compose-report/design-surface/report-item-resizing/resize-vertically-upwards.png '#width=250px')

**Resize width**:

To change the width of a report item, place the mouse pointer in the `RightCenter` or `LeftCenter` position of the report item selection line.

Use `RightCenter` to resize the width outwards or inwards on the right side.

![Adjust column width of the table](/static/assets/on-premise/images/report-designer/compose-report/design-surface/report-item-resizing/resize-right-center.png '#width=250px')

Use `LeftCenter` to resize the width outwards or inwards on the left side.

![Adjust column width of the table](/static/assets/on-premise/images/report-designer/compose-report/design-surface/report-item-resizing/resize-left-center.png '#width=250px')

**Change width and height proportionally**:

1. Select the report item in the design area.
   ![Adjust column width of the table](/static/assets/on-premise/images/report-designer/compose-report/design-surface/report-item-resizing/select-report-item-to-resize.png '#width=250px')
2. Place the mouse pointer in the `LeftTop`, `RightTop`, `LeftBottom`, or `RightBottom` position on the report item.
   ![Adjust column width of the table](/static/assets/on-premise/images/report-designer/compose-report/design-surface/report-item-resizing/resize-proportionally.png '#width=250px')
3. The resizer arrow is enabled in the respective position. Hold and drag the resizer arrow. The report item is resized proportionally in all directions.
   ![Adjust column width of the table](/static/assets/on-premise/images/report-designer/compose-report/design-surface/report-item-resizing/over-all-resize-ouput.png '#width=250px')

## How do I resize using the width and height properties?

The `Height` and `Width` properties in the Web Report Designer properties panel set the exact size of a report item.

1. Select a report item. The properties panel lists the respective item properties.
   ![Resize the table column](/static/assets/on-premise/images/report-designer/compose-report/design-surface/report-item-resizing/select-report-item-to-resize.png '#width=250px')
2. In the properties panel, modify the `Height` and `Width` properties of the report item.
   ![Resize the table column](/static/assets/on-premise/images/report-designer/compose-report/design-surface/report-item-resizing/width-and-height-properties.png '#width=350px')

## How do I resize using keyboard shortcuts?

The Web Report Designer lets you resize a report item in the design surface using keyboard shortcut keys. Select the report item and use any of the following key combinations:

* To increase the width of the report item, hold `Ctrl + Shift` keys or only `Shift` and press `Right Arrow` key.

* To decrease the width of the report item, hold `Ctrl + Shift` keys or only `Shift` and press `Left Arrow` key.

* To increase the height of the report item, hold `Ctrl + Shift` keys or only `Shift` and press `Up Arrow` key.

* To decrease the height of the report item, hold `Ctrl + Shift` keys or only `Shift` and press `Down Arrow` key.

> `Ctrl + Shift + Arrow Keys` combination increase or decreases the value by `1` point, whereas `Shift + Arrow Keys` combination increases or decreases the value by 8 points.

To learn more about supported keyboard shortcut keys, see [Design report using keyboard shortcuts](./../../../design-report-using-keyboard-shortcuts/).

## How do I resize using the touch resizer?

The touch resizer in the Web Report Designer increases or decreases the width and height of a report item on touch devices.

1. Select the report item and hold any of the highlighted points shown in the following image.

    ![Resize the table column](/static/assets/on-premise/images/report-designer/compose-report/design-surface/report-item-resizing/touch-resizer.png '#width=150px')

2. Drag toward the required direction in the design area.

## Frequently asked questions

### How much does each keyboard shortcut resize a report item?

`Ctrl + Shift + Arrow Keys` changes the value by 1 point. `Shift + Arrow Keys` changes the value by 8 points.

### How do I resize a report item proportionally?

Drag the resizer arrow from the `LeftTop`, `RightTop`, `LeftBottom`, or `RightBottom` position of the selected report item.

## See also

* [Report item selection](./../report-item-selection/)
* [Report item alignment](./../report-item-alignment/)
* [Design report using keyboard shortcuts](./../../../design-report-using-keyboard-shortcuts/)
