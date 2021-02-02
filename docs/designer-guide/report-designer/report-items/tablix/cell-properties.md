---
title: Tablix cell properties | Web ReportDesigner | Bold Reports
description: This section describes about tablix cell and its properties to design a report using tablix in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Tablix cell

Tablix cell contains the actual content to be presented by the table.

## Change an item within a cell

A tablix cell contains the report items to display the data in the tabular format. By default, all cells in tablix contains the `Textbox` report item. You can place any of the other report items supported in Web Report Designer inside the tablix cell to present data. There are two ways to change an item within a cell.

* Drag and drop report item into table cell
* Insert item using cell menu

### Drag and drop report item into table cell

Drag and drop the required report item into the table cell from item panel.

![Drag and drop line into table cell](/static/assets/on-premise/images/report-designer/report-items/tablix/drag-and-drop-image-into-table-cell.png)

Now, the item will replace the existing textbox in the cell and inserts a line report item.

![Drag and drop image into table cell](/static/assets/on-premise/images/report-designer/report-items/tablix/drag-and-drop-image-into-table-cell-output.png)

Similarly, you can insert other report items into the table cell. The following snap shows the tablix cells with different report items

![Drag and drop image into table cell](/static/assets/on-premise/images/report-designer/report-items/tablix/tablix-cell-with-different-reprt-items.png)

> When you drag and drop an item into the cell which contains text box, line, image, sub-reports, chart or barcode report item, the old item in the cell will be replaced by a new report item. If the cell contains a report items such as a rectangle, list, table, or matrix, the new item is added to the containing item instead of replacing it. To replace such report item with a new item, delete the respective item from the cell. Deleting the rectangle, list, table, or matrix item replaces it with a text box, which you can then replace with another item.

### Insert item using cell menu

1. Select a cell in tablix and right click in the respective cell. Now, the cell menu will be opened like below.
![Drag and drop image into table cell](/static/assets/on-premise/images/report-designer/report-items/tablix/open-cell-menu.png)
2. Choose the required report item from the `Insert` menu option.
![Drag and drop image into table cell](/static/assets/on-premise/images/report-designer/report-items/tablix/insert-report-item-menu-items.png)
3. Now, the old report item in the cell will be replaced by new report item.
![Drag and drop image into table cell](/static/assets/on-premise/images/report-designer/report-items/tablix/drag-and-drop-image-into-table-cell-output.png)

    > Here, line report item is used to demonstrate the behaviour.

> When you insert item into the cell using the `Insert` option from cell context menu, the report item in the cell will be replaced by a new report item. To insert items inside the container report item such as a rectangle, drag and drop the required report item into the tablix cell containing rectangle.

## Cell properties

The cell properties is properties of the report item placed in the respective cell. For example, if the cell contains the line report item, then the line report item properties will be displayed in the properties panel. To style a tablix cell, select the required cell and modify the respective report item properties in the properties panel.

Refer the [Properties panel](./../../../compose-report/properties-panel/) section to set and edit properties report item properties.

## Delete an item from a cell

To delete the item from the tablix cell, select cell and right click. Click on `Delete` option.

![Delete cell menu](/static/assets/on-premise/images/report-designer/report-items/tablix/delete-cell-menu.png)

Now, a new `Textbox` will be inserted in the respective cell.

![Delete cell menu](/static/assets/on-premise/images/report-designer/report-items/tablix/delete-cell-menu-output.png)

You can also, delete the item from cell using `Delete` option in the toolbar. Select the cell and click on the delete icon in the toolbar.

![Delete cell menu](/static/assets/on-premise/images/report-designer/report-items/tablix/delete-item-from-cell-using-delete-option.png)

## Cut Copy and Paste cell contents

To cut, copy and paste cell contents in the table cell make use of the right-click menu or use the corresponding icons available in the toolbar,

* Cut - Select the cell content and use the `Cut` icon in the toolbar or right-click and select the `Cut` option from the menu to delete the selected cell content. The cut data can be later inserted in any other cell in the tablix or in the design area.

* Copy - Select the cell content and either use the `Copy` icon in the toolbar or right-click and select the `Copy` option from the menu. The copied cell content can be later inserted in any other cell in the tablix or in the design area.

* Paste - Select a cell and either use the `Paste` icon in the toolbar or right-click and select the `Paste` option to insert the previously copied/cut cell content to the selected cell or in the design area.

You can also use the following keyboard shortcuts to perform cut, copy and paste operations.

* Ctrl+X key combination for cutting;
* Ctrl+C key combination for copying;
* Ctrl+V key combination for pasting.

### Cut Copy and Paste operation in single cell

**Cut** :
1. Select a tablix cell, use the `Cut` icon in the toolbar or right-click and select the `Cut` option from the menu.
![Cut menu options](/static/assets/on-premise/images/report-designer/report-items/tablix/cut-option-in-menu-and-toolbar.png)
2. Now, the report item will be deleted and new `Textbox` will be inserted in the respective cell.
![Cut menu options](/static/assets/on-premise/images/report-designer/report-items/tablix/cut-action-output.png)

**Copy** :

1. Select a tablix cell, use the `Copy` icon in the toolbar or right-click and select the `Copy` option from the menu.
![Copy menu options](/static/assets/on-premise/images/report-designer/report-items/tablix/copy-option-in-menu-and-toolbar.png)
2. The copied cell content can be later inserted in any other cell in the tablix or in the design area.

**Paste** :

1. Select a tablix cell, use the `Paste` icon in the toolbar or right-click and select the `Paste` option in the cell menu.
![Paste menu options](/static/assets/on-premise/images/report-designer/report-items/tablix/paste-option-in-menu-and-toolbar.png)
2. Now, previously copied item will be pasted in the selected cell.
![Paste menu options](/static/assets/on-premise/images/report-designer/report-items/tablix/paste-single-cell.png)

### Cut Copy and Paste operation in multiple cell

You can perform the cut/copy and paste action in multiple cells at a time.

1. Select the required cells in the tablix data region and perform copy or cut action. Here, copy action is performed.
![Paste menu options](/static/assets/on-premise/images/report-designer/report-items/tablix/multiple-cell-selection-for-copy-action.png)
2. Now, select the cells in which you need to paste the copied cell content in the tablix data region and perform paste action.
![Paste menu options](/static/assets/on-premise/images/report-designer/report-items/tablix/perform-paste-action.png)
3. The copied cell contents will be pasted in the selected cells like below,
![Paste menu options](/static/assets/on-premise/images/report-designer/report-items/tablix/paste-multiple-cell-output.png)

The copied cell content area and target cell content area to perform paste action need to be same. In the below example, the cell content in the second row, first two columns are copied and trying to pasting the cell content in second row, last column.

![Paste menu options](/static/assets/on-premise/images/report-designer/report-items/tablix/copy-multiple-cell-content.png)

![Paste menu options](/static/assets/on-premise/images/report-designer/report-items/tablix/paste-content-in-multiple-cell.png)

Now, the following alert message will be shown in the design area.

![Paste menu options](/static/assets/on-premise/images/report-designer/report-items/tablix/paste-alert.png)

So, whenever performing the paste action, the target area must have enough left, top, right, and bottom cell areas.