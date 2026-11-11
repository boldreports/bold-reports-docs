---
title: Insert or Delete a Row in an RDL Tablix | {{site.productName}}
description: Insert or delete a row in a tablix data region in the {{site.productName}} Web Report Designer, inside or outside a group, to organize the data in your RDL report.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Insert or delete a tablix row in the {{site.productNameTM}} Web Report Designer

In the {{site.productNameTM}} Web Report Designer, you can insert or delete rows in a tablix to organize the data in your report.

## How do I insert a row?

You can add a row to a {{site.productNameTM}} tablix in two ways: from the row gripper or from a cell.

To insert a row by selecting the row:

1. Right-click the row gripper where you want to insert a row.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/right-click-and-open-menu-to-insert-row.png '#width=315px')
2. Click `Insert Row` and then click `Above` or `Below`.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-row-menu-options.png '#width=315px')

To insert a row by selecting a cell:

1. Right-click a cell in the tablix where you want to insert a row.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/open-cell-menu-to-insert-row.png '#width=315px')
2. Click `Insert Row` and then click `Above` or `Below`.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-row-menu-options-in-cell.png '#width=315px')

A new row is added above or below the target row.

![Tablix item with properties view](/static/images/report-designer/report-items/tablix/insert-row-output.png '#width=315px')

## How do I insert a row in a group?

You can add a row to a group in a {{site.productNameTM}} tablix in two ways: from the row group gripper or from a row group cell.

To insert a row by selecting the row group:

1. Right-click the row group gripper where you want to insert a row.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/right-click-and-open-menu-to-insert-row-in-a-row-group.png '#width=315px')
2. Click `Insert Row`.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-row-in-a-row-group-menu-options.png '#width=315px')

To insert a row by selecting a cell:

1. Right-click a row group cell in the tablix where you want to insert a row.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/open-cell-menu-to-insert-row-in-a-group.png '#width=315px')
2. Click `Insert Row`.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-row-in-group-menu-options-in-cell.png '#width=315px')

### Which Insert Row options are available in a group?

The Web Report Designer lists the following options in the `Insert Row` menu:

1. **Inside Group - Above** - A new row is added inside the target group but in the top position. In the following image, the `Grouping Indicator` shows that the row is added inside the group.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-row-inside-group-above.png '#width=315px')
2. **Inside Group - Below** - A new row is added inside the target group but in the bottom position. In the following image, the `Grouping Indicator` shows that the row is added inside the group.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-row-inside-group-below.png '#width=315px')
3. **Outside Group - Above** - A new row is added outside of the target group but in the top position. In the following image, the `Grouping Indicator` is shown only for the target group.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-row-outside-group-above.png '#width=315px')
4. **Outside Group - Below** - A new row is added outside of the target group but in the bottom position. In the following image, the `Grouping Indicator` is shown only for the target group.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-row-outside-group-below.png '#width=315px')

## How do I delete a row?

You can delete a row from a {{site.productNameTM}} tablix in two ways: from the row gripper or from a cell.

To delete a row by selecting the row:

1. Select the row that you want to delete.
   ![Tablix item with properties view](/static/images/report-designer/report-items/tablix/select-a-row-to-delete.png '#width=315px')
2. Right-click the row gripper of that row.
   ![Tablix item with properties view](/static/images/report-designer/report-items/tablix/open-delete-menu-of-selected-row.png '#width=315px')
3. Click `Delete Rows` in the context menu.

To delete a row by selecting a cell:

1. Right-click a cell in the tablix where you want to delete a row.
   ![Tablix item with properties view](/static/images/report-designer/report-items/tablix/open-delete-menu-of-selected-cell.png '#width=315px')
2. Click `Delete Rows` in the context menu.

The selected row or rows are deleted from the tablix.

![Tablix item with properties view](/static/images/report-designer/report-items/tablix/delete-row-ouput.png '#width=315px')

## How do I delete a row from a group?

To delete a row from a row group in a {{site.productNameTM}} tablix, follow these steps:

1. Right-click a row group cell in the row group of a tablix.
   ![Tablix item with properties view](/static/images/report-designer/report-items/tablix/open-delete-menu-of-selected-cell-row-group.png '#width=315px')
2. Click `Delete Rows`.

The selected row is deleted from the tablix.

![Tablix item with properties view](/static/images/report-designer/report-items/tablix/delete-row-ouput.png '#width=315px')

## Frequently asked questions

### What is the difference between Inside Group and Outside Group?

In the {{site.productNameTM}} Web Report Designer, **Inside Group** adds the new row inside the target group. **Outside Group** adds the new row outside the target group, so the `Grouping Indicator` is shown only for the target group.

## See also

* [Insert or delete a column](./../../../report-items/tablix/insert-or-delete-a-column-ssrs/)
* [Insert or delete a row group](./../../../report-items/tablix/insert-or-delete-a-row-group-ssrs/)
* [Tablix report item](./../../../report-items/tablix/)
