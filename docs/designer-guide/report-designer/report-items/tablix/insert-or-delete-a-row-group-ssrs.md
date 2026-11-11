---
title: Insert or Delete a Row Group in RDL Tablix | {{site.productName}}
description: Insert or delete parent, child, and adjacent row groups in a tablix in the {{site.productName}} Web Report Designer using the cell context menu or the grouping panel.
keywords: ejReportDesigner, reportdesigner, table, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Insert or delete a row group in the {{site.productNameTM}} Web Report Designer

In the {{site.productNameTM}} Web Report Designer, you can add row groups to a table to display data in a visual hierarchy. You can create both nested groups and adjacent groups. You add a row group with the cell context menu or with the group menu in the grouping panel. The cell context menu shows the `Row Group` option only when a row group can be added at that place.

## Insert a row group

The {{site.productNameTM}} tablix data region groups data with the following options:

* Parent Group
* Child Group
* Adjacent Group

Parent and child groups create a hierarchy, so the groups depend on each other. Adjacent grouping creates separate groupings in the same table.

### How do I add a parent row group?

To add the first row group to the basic tablix structure in the Web Report Designer, follow these steps:

1. Select the tablix data region in the design area. The `Grouping Panel` is enabled in the design view.
   ![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/select-tablix-data-region-in-design-area.png '#width=425px')
   > To add first row group in the basic tablix structure, use the group menu in grouping panel.
2. To add a group, go to the `Row Groups` pane in the grouping panel and open the context menu on the `Details` group field.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/open-context-menu-in-details-group.png '#width=385px')
3. In the context menu, click the `Parent Group...` option under the `Add Group` category.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/click-on-parent-group-option.png '#width=385px')
4. The `Tablix Group` dialog opens so you can configure the grouping.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/tablix-group-dialog.png '#width=385px')
    * **Group By**: Based on the dataset assigned to the tablix region, dataset fields will be listed in this drop-down or else click on the square icon to create an expression.
    * **Add Group Header**: Enable this option to add a header to this group.
    * **Add Group Footer**: Enable this option to add a footer to this group.
5. In this example, choose the `Product Category` field as the parent group in the tablix data region. Click the `OK` button.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/assign-field-for-parent-group.png '#width=385px')

A new column is added to the right side of the detail group in the tablix data region. A new group member is added above the `Detail` group of the `Row Groups` pane in the grouping panel hierarchical view.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/add-parent-group-in-row-group.png '#width=410px')

On report preview, the sales details of each product are grouped by product category.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/row-group-output.png '#width=425px')

### How do I add a child row group?

A child row group in the {{site.productNameTM}} tablix subcategorizes the data in the tablix data region. You can add a child group with the cell menu or with the group menu in the grouping panel. The following steps add a child group with the cell menu:

1. Select and right-click the row group cell where you want to add a child group.
2. In the cell menu, click `Child Group` under the `Row Group` category.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/open-cell-menu-to-add-child-group.png '#width=410px')
3. The `Tablix Group` dialog opens so you can configure the grouping.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/tablix-group-dialog.png '#width=355px')
    * **Group By**: Based on the dataset assigned to the tablix region, dataset fields will be listed in this drop-down or else click on the square icon to create an expression.
    * **Add Group Header**: Enable this option to add a header to this group.
    * **Add Group Footer**: Enable this option to add a footer to this group.
4. In this example, choose the `Sub Category` field as the child group in the tablix data region. Click the `OK` button.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/assign-field-for-child-group.png '#width=385px')

A new column is added to the right side of the `Product Category` row group in the tablix data region. A new field is also added below the `Product Category` group in the hierarchical view of the `Row Groups` pane.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/add-child-group-in-row-group.png '#width=385px')

On report preview, product names are categorized by product type.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/child-row-group-output.png '#width=425px')

> To add a child group with the group menu in the grouping panel, see the [Add child group](./../../../report-items/tablix/grouping-panel/#add-child-group) section. Download the [row group report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/insert-or-delete-a-row-group-ssrs.rdl).

### How do I add an adjacent row group?

An adjacent row group creates multiple groupings in a {{site.productNameTM}} tablix data region. You can add the adjacent row group above (before) or below (after) the existing group in the data region. You can use the cell menu or the group menu in the grouping panel. Follow these steps to add an adjacent group:

1. Select and right-click the row group cell where you want to create an adjacent group.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/open-adjacent-group-menu.png '#width=385px')
2. Click `Adjacent Above` to create a new group before the existing group, or `Adjacent Below` to create a new group after the existing group.
3. The `Tablix Group` dialog opens so you can configure the grouping.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/tablix-group-dialog.png '#width=355px')
4. Choose the dataset field you need in the `Group by` field and click the `OK` button.

A new row group is created above or below the existing group in the tablix data region.

> To add an adjacent group with the group menu in the grouping panel, see the [Add adjacent group](./../../../report-items/tablix/grouping-panel/#add-adjacent-group) section.

## How do I delete a row group?

You delete a row group in the {{site.productNameTM}} Web Report Designer with the cell context menu or with the group menu in the grouping panel.

1. Select and right-click the row group that you want to delete from the tablix data region.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/delete-row-group-menu.png '#width=385px')
2. In the cell menu, click the `Delete Row Group` option. The following confirmation dialog opens.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/delete-row-group-dialog.png '#width=355px')
3. In the `Delete Group` dialog, choose one of the following options and click the `OK` button:
    * **Delete group and related rows and columns** - Choose this option to delete the group and all related rows that display group data. For the details group, if the same row belongs to both detail and group data, only the detail data rows are deleted.
    * **Delete group only** - Choose this option to keep the structure of the tablix data region and delete only the group definition.

The group information is deleted from the tablix data region.

## How do I edit row group properties?

To edit the properties of a row group in a {{site.productNameTM}} tablix data region, see the [Tablix member properties](./../../../report-items/tablix/grouping-panel/#group-member-properties) section.

## Frequently asked questions

### How do I add the first row group to a basic tablix?

In the {{site.productNameTM}} Web Report Designer, use the group menu in the grouping panel to add the first row group to the basic tablix structure.

### Where can an adjacent row group be placed?

You can add an adjacent row group above (before) or below (after) the existing group in the tablix data region.

## See also

* [Insert or delete a column group](./../../../report-items/tablix/insert-or-delete-a-column-group-ssrs/)
* [Insert or delete a row](./../../../report-items/tablix/insert-or-delete-a-row-ssrs/)
* [Grouping panel](./../../../report-items/tablix/grouping-panel/)
