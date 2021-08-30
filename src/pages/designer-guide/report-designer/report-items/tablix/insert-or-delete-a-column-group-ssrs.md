---
title: Insert or Delete a Column Group | Web ReportDesigner
description: This section describes the steps to insert or delete a column group in table in Bold Report Designer.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Insert or Delete a Column Group

You can add column groups in the table to display data in a visual hierarchy. You can create both nested groups and adjacent groups. Column group can be added either using the cell context menu or using the group menu provided in grouping panel. In cell context menu the `Column Group` option will be shown only if there is a possibility to add column group in the respective place.

## Insert a column group

In tablix data region the data can be grouped using the following options:

* Parent Group
* Child Group
* Adjacent Group

The parent and child group are used for creating a hierarchy, the groups depend on each other. While the adjacent grouping functionality can be used to create separate groupings in the same table.

### Parent column group

To add a first column group in the basic tablix structure follow the below steps.

1. Select and right click in the cell to which you need to add a parent child group.
![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/open-column-group-cell-menu.png)
2. In the cell menu, click on the `Parent Group` under the `Column Group` category.
3. Once you click on the `Parent Group` option, a `Tablix Group` dialog will be opened to configure the grouping.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/tablix-group-dialog.png)

    * **Group By**: Based on the dataset assigned to the tablix region, dataset fields will be listed in this drop-down or else click on the square icon to create an expression.
    * **Add Group Header**: Enable this option to add a header to this group
    * **Add Group Footer**: Enable this option to add a footer to this group
4. Here, `OrderQtr` field is chosen as parent group in tablix data region. Click on the `OK` button.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/assign-field-for-column-parent-group.png)

Now, a new row will be added in tablix data region and a new group member will be added in the `Column Groups` pane in grouping panel hierarchical view.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/add-parent-group-in-column-group.png)

On report preview, each quarter sales of a year will be grouped along column.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/column-group-output.png)

Similarly, you can add child and adjacent group in the column group. Refer [Insert or Delete Row Group](./../../../report-items/tablix/insert-or-delete-a-row-group-ssrs/) section to add row groups.

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/insert-or-delete-a-column-group-ssrs.rdl).

## Delete column group

Column group can be deleted either using the cell context menu or using the group menu provided in grouping panel.

1. Select and right click on a column group which you want to delete from the tablix data region.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/delete-column-group-menu.png)
2. In the cell menu, click on the `Delete Column Group` option. Now, the following confirmation dialog will be launched.
![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/delete-row-group-dialog.png)
3. In the `Delete Group` dialog choose one of the following options and click on the `OK` button.

    * **Delete group and related rows and columns** - Choose this option to delete the group and all related rows that display group data. For the details group, if the same column belongs to both detail and group data, only the detail data rows are deleted.

    * **Delete group only** - Choose this option to keep the structure of the tablix data region and delete only the group definition.

Now, the respective group information will be deleted from the tablix data region.

## Edit group properties

To edit a column group properties in a tablix data region, refer [Tablix member properties](./../../../report-items/tablix/grouping-panel/#group-member-properties) section.