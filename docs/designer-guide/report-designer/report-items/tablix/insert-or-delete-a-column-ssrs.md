---
title: Insert or Delete a Column in an RDL Tablix | {{site.productName}}
description: Insert or delete a column in a tablix in the {{site.productName}} Web Report Designer, inside or outside a group, to organize the data in your RDL report as you need.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Insert or delete a tablix column in the {{site.productNameTM}} Web Report Designer

In the {{site.productNameTM}} Web Report Designer, you can insert or delete columns in a tablix to organize the data in your report.

## Insert a column

You can add a column to a {{site.productNameTM}} tablix in two ways: from the column gripper or from a cell.

To insert a column by selecting the column:

1. Right-click the column gripper where you want to insert a column.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/right-click-and-open-menu-to-insert-column.png '#width=315px')
2. Click `Insert Column` and then click `Left` or `Right`.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-column-menu-options.png '#width=315px')

To insert a column by selecting a cell:

1. Right-click a cell in the tablix where you want to insert a column.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/open-cell-menu-to-insert-column.png '#width=355px')
2. Click `Insert Column` and then click `Left` or `Right`.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-column-menu-options-in-cell.png '#width=355px')

A new column is added to the left or right of the target column.

![Tablix item with properties view](/static/images/report-designer/report-items/tablix/insert-column-output.png '#width=315px')

## How do I insert a column in a group?

You can add a column to a group in a {{site.productNameTM}} tablix in two ways: from the column group gripper or from a column group cell.

To insert a column by selecting the column group:

1. Right-click the column group gripper where you want to insert a column.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/right-click-and-open-menu-to-insert-column-in-a-column-group.png '#width=355px')
2. Click `Insert Column`.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-column-in-a-column-group-menu-options.png '#width=355px')

To insert a column by selecting a cell:

1. Right-click a column group cell in the tablix where you want to insert a column.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/open-cell-menu-to-insert-column-in-a-group.png '#width=355px')
2. Click `Insert Column`.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-column-in-group-menu-options-in-cell.png '#width=355px')

### Which Insert Column options are available in a group?

The Web Report Designer lists the following options in the `Insert Column` menu:

1. **Inside Group - Left** - A new column is added inside the target group but in the left position. In the following image, the `Grouping Indicator` shows that the column is added inside the group.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-column-inside-group-left.png '#width=315px')
2. **Inside Group - Right** - A new column is added inside the target group but in the right position. In the following image, the `Grouping Indicator` shows that the column is added inside the group.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-column-inside-group-right.png '#width=315px')
3. **Outside Group - Left** - A new column is added outside of the target group but in the left position. In the following image, the `Grouping Indicator` is shown only for the target group.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-column-outside-group-left.png '#width=315px')
4. **Outside Group - Right** - A new column is added outside of the target group but in the right position. In the following image, the `Grouping Indicator` is shown only for the target group.
   ![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/insert-column-outside-group-right.png '#width=315px')

## How do I delete a column?

You can delete a column from a {{site.productNameTM}} tablix in two ways: from the column gripper or from a cell.

To delete a column by selecting the column:

1. Select the column that you want to delete.
   ![Tablix item with properties view](/static/images/report-designer/report-items/tablix/select-a-column-to-delete.png '#width=315px')
2. Right-click the column gripper of that column.
   ![Tablix item with properties view](/static/images/report-designer/report-items/tablix/open-delete-menu-of-selected-column.png '#width=315px')
3. Click `Delete Columns` in the context menu.

To delete a column by selecting a cell:

1. Right-click a cell in the tablix where you want to delete a column.
   ![Tablix item with properties view](/static/images/report-designer/report-items/tablix/open-delete-menu-of-selected-cell-to-delete-column.png '#width=355px')
2. Click `Delete Columns` in the context menu.

The selected column is deleted from the tablix.

![Tablix item with properties view](/static/images/report-designer/report-items/tablix/delete-column-ouput.png '#width=315px')

## How do I delete a column from a group?

To delete a column from a column group in a {{site.productNameTM}} tablix, follow these steps:

1. Right-click a column group cell in the column group of a tablix.
   ![Tablix item with properties view](/static/images/report-designer/report-items/tablix/open-delete-menu-of-selected-cell-column-group.png '#width=355px')
2. Click `Delete Columns`.

The selected column is deleted from the tablix.

![Tablix item with properties view](/static/images/report-designer/report-items/tablix/delete-column-group-ouput.png '#width=315px')

## Frequently asked questions

### What is the difference between Inside Group and Outside Group?

In the {{site.productNameTM}} Web Report Designer, **Inside Group** adds the new column inside the target group. **Outside Group** adds the new column outside the target group, so the `Grouping Indicator` is shown only for the target group.

## See also

* [Insert or delete a row](./../../../report-items/tablix/insert-or-delete-a-row-ssrs/)
* [Insert or delete a column group](./../../../report-items/tablix/insert-or-delete-a-column-group-ssrs/)
* [Tablix report item](./../../../report-items/tablix/)
