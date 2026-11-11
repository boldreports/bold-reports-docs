---
title: Insert or Delete a Column Group in RDL Tablix | {{site.productName}}
description: Insert or delete a column group in a tablix in the {{site.productName}} Web Report Designer with the cell context menu or grouping panel to show data in a hierarchy.
keywords: ejReportDesigner, reportdesigner, table, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Insert or delete a column group in the {{site.productNameTM}} Web Report Designer

In the {{site.productNameTM}} Web Report Designer, you can add column groups to a table to display data in a visual hierarchy. You can create both nested groups and adjacent groups. You add a column group with the cell context menu or with the group menu in the grouping panel. The cell context menu shows the `Column Group` option only when a column group can be added at that place.

## How do I insert a column group?

The {{site.productNameTM}} tablix data region groups data with the following options:

* Parent Group
* Child Group
* Adjacent Group

Parent and child groups create a hierarchy, so the groups depend on each other. Adjacent grouping creates separate groupings in the same table.

### How do I add a parent column group?

To add the first column group to the basic tablix structure in the Web Report Designer, follow these steps:

1. Select and right-click the cell where you want to add a parent group.
   ![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/open-column-group-cell-menu.png '#width=355px')
2. In the cell menu, click `Parent Group` under the `Column Group` category.
3. The `Tablix Group` dialog opens so you can configure the grouping.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/tablix-group-dialog.png '#width=315px')
    * **Group By**: Based on the dataset assigned to the tablix region, dataset fields will be listed in this drop-down or else click on the square icon to create an expression.
    * **Add Group Header**: Enable this option to add a header to this group.
    * **Add Group Footer**: Enable this option to add a footer to this group.
4. In this example, choose the `OrderQtr` field as the parent group in the tablix data region. Click the `OK` button.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/assign-field-for-column-parent-group.png '#width=315px')

A new row is added to the tablix data region, and a new group member is added to the `Column Groups` pane in the grouping panel hierarchical view.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/add-parent-group-in-column-group.png '#width=315px')

On report preview, the sales for each quarter of a year are grouped along the column.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/column-group-output.png '#width=410px')

You can add child and adjacent groups to the column group in the same way. To add row groups, see the [Insert or Delete Row Group](./../../../report-items/tablix/insert-or-delete-a-row-group-ssrs/) section.

> Download the [column group report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/insert-or-delete-a-column-group-ssrs.rdl).

## How do I delete a column group?

You delete a column group in the {{site.productNameTM}} Web Report Designer with the cell context menu or with the group menu in the grouping panel.

1. Select and right-click the column group that you want to delete from the tablix data region.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/delete-column-group-menu.png '#width=355px')
2. In the cell menu, click the `Delete Column Group` option. The following confirmation dialog opens.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/delete-row-group-dialog.png '#width=315px')
3. In the `Delete Group` dialog, choose one of the following options and click the `OK` button:
    * **Delete group and related rows and columns** - Choose this option to delete the group and all related rows that display group data. For the details group, if the same column belongs to both detail and group data, only the detail data rows are deleted.
    * **Delete group only** - Choose this option to keep the structure of the tablix data region and delete only the group definition.

The group information is deleted from the tablix data region.

## How do I edit column group properties?

To edit the properties of a column group in a {{site.productNameTM}} tablix data region, see the [Tablix member properties](./../../../report-items/tablix/grouping-panel/#group-member-properties) section.

## Frequently asked questions

### Why is the Column Group option missing from the cell menu?

The {{site.productNameTM}} cell context menu shows the `Column Group` option only when a column group can be added at that place.

### What is the difference between parent, child, and adjacent groups?

Parent and child groups create a hierarchy where the groups depend on each other. Adjacent groups create separate groupings in the same table.

## See also

* [Insert or delete a row group](./../../../report-items/tablix/insert-or-delete-a-row-group-ssrs/)
* [Insert or delete a column](./../../../report-items/tablix/insert-or-delete-a-column-ssrs/)
* [Tablix report item](./../../../report-items/tablix/)
