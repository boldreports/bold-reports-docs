---
title: Grouping Panel | Web ReportDesigner | Bold Reports
description: This section describes the steps to add or remove groups and totals using grouping panel in Bold Report Designer.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, grouping pane
---

# Grouping Panel

The grouping panel displays the row and column groups of the selected tablix data region in design area. The highlighted area in the below snap shows the grouping panel in design area.

![Grouping panel](/static/assets/on-premise/images/report-designer/report-items/tablix/grouping-panel.png '#width=425px')

The row groups of a selected tablix are listed in the `Row Groups` section and column groups are listed in the `Column Groups` section of the grouping panel.

## Show or hide grouping panel

You can expand or collapse the grouping panel in the design area at design time using the expand/collapse icon provided in the right corner of the grouping panel header.

![Expand collapse icon](/static/assets/on-premise/images/report-designer/report-items/tablix/grouping-panel-expand-collapse-icon.png '#width=385px')

The below snap shows the collapsed view of grouping panel in the design area.

![Grouping panel collapse state](/static/assets/on-premise/images/report-designer/report-items/tablix/grouping-panel-collapsed-state.png '#width=425px')

> Grouping panel will be visible in design area only if a tablix report item is selected in the design area.

## Resize grouping panel

You can increase or decrease the height of the grouping panel in the design area using the resizer.

![Grouping panel resizer](/static/assets/on-premise/images/report-designer/report-items/tablix/grouping-panel-resizer.png '#width=385px')

## Modes of grouping panel

Grouping panel have `Default` and `Advanced` mode.

### Default Mode

In default  mode, the grouping panel displays the hierarchical view of parent, child and adjacent groups of selected tablix item in `Row Groups` and `Column Groups` pane.

![Group types sketch](/static/assets/on-premise/images/report-designer/report-items/tablix/group-types-sketch.png '#width=385px')

### Advanced Mode

By default, grouping panel will be displayed in `Default Mode`, to enable advanced mode in the grouping panel, click on the icon in the right corner of the grouping panel header.

![Advanced mode menu icon](/static/assets/on-premise/images/report-designer/report-items/tablix/advanced-mode-menu-icon.png '#width=385px')

Then, click on the `Advanced` menu item. Now, all groups including static and dynamic tablix members will be listed in `Row Groups` and `Column Groups` pane in hierarchical view like below.

![Advanced mode members view](/static/assets/on-premise/images/report-designer/report-items/tablix/static-and-dynamic-tablix-members-view.png '#width=385px')

Once you enable the advanced mode, a tick mark will be indicated in the `Advanced` menu like below.

![Advanced mode menu icon](/static/assets/on-premise/images/report-designer/report-items/tablix/advanced-mode-indication.png '#width=385px')

## Visual Cues

### Groups

The row and column groups in the selected tablix data region will be indicated in the grouping panel using the `[` symbol.

![Group indication](/static/assets/on-premise/images/report-designer/report-items/tablix/visual-cues-group-indicator.png '#width=385px')

### Details Group

Details group on the row group hierarchy will be indicated in the grouping panel using the highlighted symbol in the below snap.

![Details Group Indication](/static/assets/on-premise/images/report-designer/report-items/tablix/visual-cues-detail-group-indicator.png '#width=385px')

### Label convention

In the grouping panel,

#### Static tablix member

* A static member with a header cell will be indicated with `Static` label text.
   ![Static member with header cell](/static/assets/on-premise/images/report-designer/report-items/tablix/static-member-with-header-cell.png '#width=385px')

* A static member with no header cell will be indicated with `(Static)` label text.
   ![Static member with header cell](/static/assets/on-premise/images/report-designer/report-items/tablix/static-member-with-no-header-cell.png '#width=385px')

#### Group tablix member

The label text for group member will be surrounded by square brackets.

![Static member with header cell](/static/assets/on-premise/images/report-designer/report-items/tablix/grouping-panel-group-member-lable-indication.png '#width=385px')

## Tablix member properties

To edit the static and dynamic tablix member properties, select the respective member in the Row or Column Groups pane, and change the property values in the `Properties` panel.

### Static member properties

Click on the required static tablix member in the `Row Groups` or `Column Groups` pane, now the respective tablix member properties will be listed in the properties panel.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/open-static-member-properties.png)

To set and edit the properties of static tablix member, refer [Static member properties](./../../../report-items/tablix/member-properties/#static-member-properties) section.

### Group member properties

Click on the required group tablix member in the `Row Groups` or `Column Groups` pane, now the respective tablix member properties will be listed in the properties panel.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/open-group-member-properties.png '#width=600px')

To set and edit the properties of group tablix member, refer [Group member properties](./../../../report-items/tablix/member-properties/#group-member-properties) section.

## Add groups or total

You can add groups or totals to the tablix data region using the grouping panel. To open the group menu click on the icon in the right corner of the row or column group member.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/group-menu-icon.png '#width=600px')

Now, the group menu will open in the respective group like below,

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/group-menu-open-view.png '#width=385px')

### Add parent group

1. To add a parent group, click on the `Parent Group...` option under `Add Group` category.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/parent-group-menu.png '#width=385px')
2. Now, `Tablix Group` dialog will open like below.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/tablix-group-dialog.png '#width=385px')
3. Choose field in the group dialog and click `OK` button.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/choose-field-in-group-dialog.png '#width=385px')
4. Now, a new parent group will be added above a group in the grouping panel.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/new-parent-group.png '#width=385px')

### Add child group

1. To add a child group, click on the `Child Group...` option under `Add Group` category.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/child-group-menu.png '#width=385px')
2. Now, `Tablix Group` dialog will open like below.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/tablix-group-dialog.png '#width=385px')
3. Choose field in the group dialog and click `OK` button.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/choose-field-in-group-dialog.png '#width=385px')
4. Now, a new child group will be added under a group in the grouping panel.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/child-group-output.png '#width=355px')

> You cannot add child group for `Details` group.

### Add adjacent group

1. To add a adjacent group, click on the `Adjacent Before` or `Adjacent After` option under `Add Group` category.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/adjacent-group-menu.png '#width=385px')
2. Now, `Tablix Group` dialog will open like below.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/tablix-group-dialog.png '#width=385px')
3. Choose field in the group dialog and click `OK` button.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/choose-field-in-group-dialog.png '#width=385px')
4. Now, a new adjacent group will be added above or below a group in the grouping panel.
    **Adjacent Before**
    ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/adjacent-above.png '#width=385px')
    **Adjacent After**
    ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/adjacent-after.png '#width=385px')

### Add total

You can add total above or below a group. To add total click on the `Before` or `After` under `Add Total` menu.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/add-total-menu.png '#width=385px')

The total row or column will be added in the tablix region for the respective group in the tablix report item in design area.

## Delete Group

To delete a group using grouping panel, click on the icon in the right corner of the row or column group member. Click on `Delete Group` option in the menu.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/delete-group-menu.png '#width=385px')

Now, the following confirmation dialog will be launched.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/delete-group-dialog.png '#width=385px')

* Choose the `Delete group and related rows and columns` option to delete all the rows and columns associated with the respective group.

* Choose the  `Delete group only` option to delete the group alone.