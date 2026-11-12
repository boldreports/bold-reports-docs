---
title: Edit Tablix Cells and Cell Properties in RDL | {{site.productName}}
description: Work with tablix cells in {{site.productName}} Web Report Designer. Change or delete the item in a cell, set cell properties, and cut, copy, and paste cell contents.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Tablix cell in {{site.productNameTM}} Web Report Designer

In the {{site.productNameTM}} Web Report Designer, a tablix cell contains the actual content that the table presents. You can change or delete the item in a cell, set its properties, and cut, copy, and paste cell contents.

## How do I change an item within a cell?

A tablix cell in the {{site.productNameTM}} Web Report Designer contains the report items that display the data in tabular format. By default, all cells in a tablix contain the `Textbox` report item. You can place any of the other report items supported in the Web Report Designer inside the tablix cell to present data. There are two ways to change an item within a cell:

* Drag and drop report item into table cell.
* Insert item using cell menu.

### How do I drag and drop a report item into a table cell?

You drag and drop the required report item into the table cell from the Web Report Designer item panel.

![Drag and drop line into table cell](/static/images/report-designer/report-items/tablix/drag-and-drop-image-into-table-cell.png '#width=355px')

The item replaces the existing textbox in the cell and inserts a line report item.

![Drag and drop image into table cell](/static/images/report-designer/report-items/tablix/drag-and-drop-image-into-table-cell-output.png '#width=315px')

You can insert other report items into the table cell in the same way. The following image shows tablix cells with different report items.

![Drag and drop image into table cell](/static/images/report-designer/report-items/tablix/tablix-cell-with-different-reprt-items.png '#width=385px')

> When you drag and drop an item into the cell which contains text box, line, image, sub-reports, chart or barcode report item, the old item in the cell will be replaced by a new report item. If the cell contains a report items such as a rectangle, list, table, or matrix, the new item is added to the containing item instead of replacing it. To replace such report item with a new item, delete the respective item from the cell. Deleting the rectangle, list, table, or matrix item replaces it with a text box, which you can then replace with another item.

### Insert item using cell menu

You insert a report item into a tablix cell with the `Insert` option of the Web Report Designer cell menu.

1. Select a cell in the tablix and right-click in the cell. The cell menu opens, as shown in the following image.
   ![Drag and drop image into table cell](/static/images/report-designer/report-items/tablix/open-cell-menu.png '#width=355px')
2. Choose the required report item from the `Insert` menu option.
   ![Drag and drop image into table cell](/static/images/report-designer/report-items/tablix/insert-report-item-menu-items.png '#width=355px')
3. Check that the old report item in the cell is replaced by the new report item.
   ![Drag and drop image into table cell](/static/images/report-designer/report-items/tablix/drag-and-drop-image-into-table-cell-output.png '#width=315px')

    > Here, line report item is used to demonstrate the behaviour.

> When you insert item into the cell using the `Insert` option from cell context menu, the report item in the cell will be replaced by a new report item. To insert items inside the container report item such as a rectangle, drag and drop the required report item into the tablix cell containing rectangle.

## Cell properties

The cell properties in the {{site.productNameTM}} Web Report Designer are the properties of the report item placed in the respective cell. For example, if the cell contains the line report item, the line report item properties are displayed in the properties panel. To style a tablix cell, select the required cell and modify the respective report item properties in the properties panel.

Refer to the [Properties panel](./../../../compose-report/properties-panel/) section to set and edit report item properties.

## How do I delete an item from a cell?

You delete an item from a tablix cell in the {{site.productNameTM}} Web Report Designer by selecting the cell, right-clicking, and clicking the `Delete` option.

![Delete cell menu](/static/images/report-designer/report-items/tablix/delete-cell-menu.png '#width=315px')

A new `Textbox` is then inserted in the respective cell.

![Delete cell menu](/static/images/report-designer/report-items/tablix/delete-cell-menu-output.png '#width=315px')

You can also delete the item from a cell using the `Delete` option in the toolbar. Select the cell and click the delete icon in the toolbar.

![Delete cell menu](/static/images/report-designer/report-items/tablix/delete-item-from-cell-using-delete-option.png '#width=325px')

## How do I cut, copy, and paste cell contents?

You cut, copy, and paste tablix cell contents in the {{site.productNameTM}} Web Report Designer with the right-click menu or the corresponding icons in the toolbar.

* Cut - Select the cell content and use the `Cut` icon in the toolbar, or right-click and select the `Cut` option from the menu, to delete the selected cell content. You can later insert the cut data in any other cell in the tablix or in the design area.

* Copy - Select the cell content and either use the `Copy` icon in the toolbar or right-click and select the `Copy` option from the menu. You can later insert the copied cell content in any other cell in the tablix or in the design area.

* Paste - Select a cell and either use the `Paste` icon in the toolbar or right-click and select the `Paste` option to insert the previously copied or cut cell content into the selected cell or the design area.

You can also use the following keyboard shortcuts to perform cut, copy and paste operations:

* Ctrl+X key combination for cutting;
* Ctrl+C key combination for copying;
* Ctrl+V key combination for pasting.

### How do I cut, copy, and paste a single cell?

You cut, copy, and paste a single tablix cell in the Web Report Designer as follows.

**Cut** :
1. Select a tablix cell, use the `Cut` icon in the toolbar or right-click and select the `Cut` option from the menu.
   ![Cut menu options](/static/images/report-designer/report-items/tablix/cut-option-in-menu-and-toolbar.png '#width=325px')
2. Check that the report item is deleted and a new `Textbox` is inserted in the respective cell.
   ![Cut menu options](/static/images/report-designer/report-items/tablix/cut-action-output.png '#width=285px')

**Copy** :

1. Select a tablix cell, use the `Copy` icon in the toolbar or right-click and select the `Copy` option from the menu.
   ![Copy menu options](/static/images/report-designer/report-items/tablix/copy-option-in-menu-and-toolbar.png '#width=325px')
2. Insert the copied cell content later in any other cell in the tablix or in the design area.

**Paste** :

1. Select a tablix cell, use the `Paste` icon in the toolbar or right-click and select the `Paste` option in the cell menu.
   ![Paste menu options](/static/images/report-designer/report-items/tablix/paste-option-in-menu-and-toolbar.png '#width=325px')
2. Check that the previously copied item is pasted in the selected cell.
   ![Paste menu options](/static/images/report-designer/report-items/tablix/paste-single-cell.png '#width=285px')

### How do I cut, copy, and paste multiple cells?

You can perform the cut or copy and paste action on multiple tablix cells at a time in the Web Report Designer.

1. Select the required cells in the tablix data region and perform the copy or cut action. Here, the copy action is performed.
   ![Paste menu options](/static/images/report-designer/report-items/tablix/multiple-cell-selection-for-copy-action.png '#width=325px')
2. Select the cells in the tablix data region where you want to paste the copied cell content and perform the paste action.
   ![Paste menu options](/static/images/report-designer/report-items/tablix/perform-paste-action.png '#width=325px')
3. Check that the copied cell contents are pasted in the selected cells, as shown in the following image.
   ![Paste menu options](/static/images/report-designer/report-items/tablix/paste-multiple-cell-output.png '#width=285px')

### What if the paste area does not match?

The copied cell content area and the target cell content area for the paste action need to be the same. In the following example, the cell content in the second row, first two columns is copied and pasted into the second row, last column.

![Paste menu options](/static/images/report-designer/report-items/tablix/copy-multiple-cell-content.png '#width=355px')

![Paste menu options](/static/images/report-designer/report-items/tablix/paste-content-in-multiple-cell.png '#width=355px')

The following alert message is then shown in the design area.

![Paste menu options](/static/images/report-designer/report-items/tablix/paste-alert.png '#width=325px')

Whenever you perform the paste action, the target area must have enough left, top, right, and bottom cell areas.

## Frequently asked questions

### What report item does a tablix cell contain by default?

By default, all cells in a tablix contain the `Textbox` report item.

### What happens to a cell after I delete its item?

A new `Textbox` is inserted in the respective cell.

## See also

* [Tablix cell border](./../../../report-items/tablix/cell-border/)
* [Merge cells in a tablix data region](./../../../report-items/tablix/merge-cells-in-tablix-data-region/)
* [Properties panel](./../../../compose-report/properties-panel/)
