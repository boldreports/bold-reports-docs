---
title: Use the Grouping Panel in Web Report Designer | Bold Reports
description: Use the grouping panel in Bold Reports Web Report Designer to view, add, and delete row and column groups and totals for the selected tablix data region.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, grouping pane
---

# Grouping panel in Bold Reports<sup>®</sup> Web Report Designer

In the Bold Reports<sup>®</sup> Web Report Designer, the grouping panel displays the row and column groups of the selected tablix data region in the design area. The highlighted area in the following image shows the grouping panel in the design area.

![Grouping panel](/static/assets/on-premise/images/report-designer/report-items/tablix/grouping-panel.png '#width=425px')

The row groups of a selected tablix are listed in the `Row Groups` section and column groups are listed in the `Column Groups` section of the grouping panel.

## How do I show or hide the grouping panel?

You expand or collapse the Bold Reports<sup>®</sup> grouping panel in the design area at design time using the expand/collapse icon in the right corner of the grouping panel header.

![Expand collapse icon](/static/assets/on-premise/images/report-designer/report-items/tablix/grouping-panel-expand-collapse-icon.png '#width=385px')

The following image shows the collapsed view of the grouping panel in the design area.

![Grouping panel collapse state](/static/assets/on-premise/images/report-designer/report-items/tablix/grouping-panel-collapsed-state.png '#width=425px')

> Grouping panel will be visible in design area only if a tablix report item is selected in the design area.

## How do I resize the grouping panel?

You increase or decrease the height of the Bold Reports<sup>®</sup> grouping panel in the design area using the resizer.

![Grouping panel resizer](/static/assets/on-premise/images/report-designer/report-items/tablix/grouping-panel-resizer.png '#width=385px')

## What modes does the grouping panel have?

The Bold Reports<sup>®</sup> grouping panel has a `Default` mode and an `Advanced` mode.

### Default Mode

In default mode, the grouping panel displays the hierarchical view of the parent, child and adjacent groups of the selected tablix item in the `Row Groups` and `Column Groups` panes.

![Group types sketch](/static/assets/on-premise/images/report-designer/report-items/tablix/group-types-sketch.png '#width=385px')

### Advanced Mode

Advanced mode in the grouping panel lists all static and dynamic tablix members. By default, the grouping panel is displayed in `Default Mode`. To enable advanced mode, click the icon in the right corner of the grouping panel header.

![Advanced mode menu icon](/static/assets/on-premise/images/report-designer/report-items/tablix/advanced-mode-menu-icon.png '#width=385px')

Then, click the `Advanced` menu item. All groups, including static and dynamic tablix members, are listed in the `Row Groups` and `Column Groups` panes in a hierarchical view, as shown in the following image.

![Advanced mode members view](/static/assets/on-premise/images/report-designer/report-items/tablix/static-and-dynamic-tablix-members-view.png '#width=385px')

After you enable advanced mode, a tick mark appears in the `Advanced` menu, as shown in the following image.

![Advanced mode menu icon](/static/assets/on-premise/images/report-designer/report-items/tablix/advanced-mode-indication.png '#width=385px')

## Visual Cues

The Bold Reports<sup>®</sup> grouping panel uses symbols and label conventions as visual cues for groups and tablix members.

### Groups

The row and column groups in the selected tablix data region are indicated in the grouping panel using the `[` symbol.

![Group indication](/static/assets/on-premise/images/report-designer/report-items/tablix/visual-cues-group-indicator.png '#width=385px')

### Details Group

The grouping panel marks the details group on the row group hierarchy with the highlighted symbol in the following image.

![Details Group Indication](/static/assets/on-premise/images/report-designer/report-items/tablix/visual-cues-detail-group-indicator.png '#width=385px')

### Label convention

The grouping panel labels static and group tablix members as follows.

#### Static tablix member

* A static member with a header cell is indicated with the `Static` label text.
   ![Static member with header cell](/static/assets/on-premise/images/report-designer/report-items/tablix/static-member-with-header-cell.png '#width=385px')

* A static member with no header cell is indicated with the `(Static)` label text.
   ![Static member with header cell](/static/assets/on-premise/images/report-designer/report-items/tablix/static-member-with-no-header-cell.png '#width=385px')

#### Group tablix member

The label text for a group member is surrounded by square brackets.

![Static member with header cell](/static/assets/on-premise/images/report-designer/report-items/tablix/grouping-panel-group-member-lable-indication.png '#width=385px')

## Tablix member properties

You edit the static and dynamic tablix member properties in the Bold Reports<sup>®</sup> Web Report Designer by selecting the respective member in the Row or Column Groups pane and changing the property values in the `Properties` panel.

### Static member properties

Static member properties appear in the properties panel when you click the required static tablix member in the `Row Groups` or `Column Groups` pane.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/open-static-member-properties.png)

To set and edit the properties of a static tablix member, refer to the [Static member properties](./../../../report-items/tablix/member-properties/#static-member-properties) section.

### Group member properties

Group member properties appear in the properties panel when you click the required group tablix member in the `Row Groups` or `Column Groups` pane.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/open-group-member-properties.png '#width=600px')

To set and edit the properties of a group tablix member, refer to the [Group member properties](./../../../report-items/tablix/member-properties/#group-member-properties) section.

## How do I add groups or totals?

You add groups or totals to a tablix data region with the Bold Reports<sup>®</sup> grouping panel. To open the group menu, click the icon in the right corner of the row or column group member.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/group-menu-icon.png '#width=600px')

The group menu opens in the respective group, as shown in the following image.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/group-menu-open-view.png '#width=385px')

### How do I add a parent group?

You add a parent group with the `Parent Group...` option in the grouping panel group menu.

1. Click the `Parent Group...` option under the `Add Group` category.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/parent-group-menu.png '#width=385px')
2. Review the `Tablix Group` dialog, which opens as shown in the following image.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/tablix-group-dialog.png '#width=385px')
3. Choose a field in the group dialog and click the `OK` button.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/choose-field-in-group-dialog.png '#width=385px')
4. Check that a new parent group is added above the group in the grouping panel.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/new-parent-group.png '#width=385px')

### Add child group

You add a child group with the `Child Group...` option in the grouping panel group menu.

1. Click the `Child Group...` option under the `Add Group` category.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/child-group-menu.png '#width=385px')
2. Review the `Tablix Group` dialog, which opens as shown in the following image.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/tablix-group-dialog.png '#width=385px')
3. Choose a field in the group dialog and click the `OK` button.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/choose-field-in-group-dialog.png '#width=385px')
4. Check that a new child group is added under the group in the grouping panel.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/child-group-output.png '#width=355px')

> You cannot add child group for `Details` group.

### Add adjacent group

You add an adjacent group with the `Adjacent Before` or `Adjacent After` option in the grouping panel group menu.

1. Click the `Adjacent Before` or `Adjacent After` option under the `Add Group` category.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/adjacent-group-menu.png '#width=385px')
2. Review the `Tablix Group` dialog, which opens as shown in the following image.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/tablix-group-dialog.png '#width=385px')
3. Choose a field in the group dialog and click the `OK` button.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/choose-field-in-group-dialog.png '#width=385px')
4. Check that a new adjacent group is added above or below the group in the grouping panel.
    **Adjacent Before**
    ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/adjacent-above.png '#width=385px')
    **Adjacent After**
    ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/adjacent-after.png '#width=385px')

### How do I add a total?

You add a total above or below a group with the `Before` or `After` option under the `Add Total` menu of the grouping panel.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/add-total-menu.png '#width=385px')

The total row or column is added in the tablix region for the respective group in the tablix report item in the design area.

## How do I delete a group?

You delete a group with the Bold Reports<sup>®</sup> grouping panel by clicking the icon in the right corner of the row or column group member and then clicking the `Delete Group` option in the menu.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/delete-group-menu.png '#width=385px')

The following confirmation dialog then opens.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/delete-group-dialog.png '#width=385px')

* Choose the `Delete group and related rows and columns` option to delete all the rows and columns associated with the respective group.

* Choose the  `Delete group only` option to delete the group alone.

## Frequently asked questions

### Why is the grouping panel not visible?

The grouping panel is visible in the design area only when a tablix report item is selected in the design area.

### Can I add a child group to the Details group?

No. You cannot add a child group for the `Details` group.

## See also

* [Tablix groups](./../../../report-items/tablix/group/)
* [Tablix member properties](./../../../report-items/tablix/member-properties/)
* [Add a total in a tablix data region](./../../../report-items/tablix/add-total-in-tablix-data-region/)
