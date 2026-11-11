---
title: Add or Delete a Details Group in a Tablix | Bold Reports
description: Add or delete a details group in a tablix data region in Bold Reports Web Report Designer with the grouping panel, and edit the details group properties.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Add or delete a details group in a Bold Reports<sup>®</sup> tablix

In the Bold Reports<sup>®</sup> Web Report Designer, the Details group displays the detailed data in the tablix data region and has no group expression. By default, when you drag and drop the tablix report item in the design area, it renders with a `Details` group.

## How do I add a details group?

You add a details group in the Bold Reports<sup>®</sup> Web Report Designer by adding a child group with `Show detail data` selected.

1. Select the tablix data region in the design area. The `Grouping Panel` is enabled in the design view.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-or-delete-details-group-ssrs/enable-grouping.png '#width=410px')
2. Go to the `Row Groups` pane in the grouping panel and open the context menu on the innermost child group. Click `Add Group`, and then click the `Child Group` option.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-or-delete-details-group-ssrs/add-child-group-menu.png '#width=385px')
3. Configure the grouping in the `Tablix Group` dialog that opens after you click the `Child Group` option.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-or-delete-details-group-ssrs/tablix-group-dialog.png '#width=385px')
4. Select `Show detail data` and click the `OK` button.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-or-delete-details-group-ssrs/enable-show-detail-data.png '#width=385px')

> Cannot insert a multi-value item into a detail cell. Detail members can only contain the static inner members.

## How do I delete a details group?

You delete a details group in the Bold Reports<sup>®</sup> Web Report Designer using either the cell context menu or the group menu in the grouping panel.

1. Click the icon in the right corner of the `Details` group member. Click the `Delete Group` option in the menu.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-or-delete-details-group-ssrs/delete-group.png '#width=385px')
2. Choose an option in the confirmation dialog that opens.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/delete-group-dialog.png '#width=385px')

* Choose the `Delete group and related rows and columns` option to delete all the rows and columns associated with the respective group.

* Choose the  `Delete group only` option to delete the group alone.

The respective `Details` group information is deleted from the tablix data region.

> A details group is added as a child group in the Grouping panel, so you cannot add child group to the details group further.

## How do I edit group properties?

You edit the properties of a group in a Bold Reports<sup>®</sup> tablix data region from the grouping panel. For the steps, refer to the [Tablix member properties](./../../../report-items/tablix/grouping-panel/#group-member-properties) section.

## Frequently asked questions

### Does a new tablix include a details group?

Yes. By default, when you drag and drop the tablix report item in the design area, it renders with a `Details` group.

### Can I add a child group under the details group?

No. A details group is added as a child group in the Grouping panel, so you cannot add a child group to it.

## See also

* [Grouping panel in a tablix](./../../../report-items/tablix/grouping-panel/)
* [Insert or delete a row group](./../../../report-items/tablix/insert-or-delete-a-row-group-ssrs/)
* [Tablix group properties](./../../../report-items/tablix/group/)
