---
title: Add or Delete a Details Group | Web ReportDesigner
description: This section describes the steps to insert or delete a details group in tablix in Bold Report Designer.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Add or Delete a Details Group

The Details group can be used to display the detailed data in the tablix data region and it has no group expression. By default, when you drag and drop the the tablix report item in the design area,it renders with a `Details` group.

## Add details group

1. Select the tablix data region in the design area, now the `Grouping Panel` will be enabled in the design view.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-or-delete-details-group-ssrs/enable-grouping.png '#width=410px')
2. To add a details group, go to `Row Groups` pane in grouping panel and open the context menu on the innermost child group. Click `Add Group`, and then click on the `Child Group` option.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-or-delete-details-group-ssrs/add-child-group-menu.png '#width=385px')
3. Once you click on the `Child Group` option, a `Tablix Group` dialog will be opened to configure the grouping.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-or-delete-details-group-ssrs/tablix-group-dialog.png '#width=385px')
4. Select `Show detail data` and click on the `OK` button.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-or-delete-details-group-ssrs/enable-show-detail-data.png '#width=385px')

> Cannot insert a multi-value item into a detail cell. Detail members can only contain the static inner members.

## Delete details group

Details group can be deleted either using the cell context menu or using the group menu provided in grouping panel.

1. Click on the icon in the right corner of the `Details` group member. Click on `Delete Group` option in the menu.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-or-delete-details-group-ssrs/delete-group.png '#width=385px')
2. Now, the following confirmation dialog will be launched.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/delete-group-dialog.png '#width=385px')

* Choose the `Delete group and related rows and columns` option to delete all the rows and columns associated with the respective group.

* Choose the  `Delete group only` option to delete the group alone.

Now, the respective `Details` group information will be deleted from the tablix data region.

> A details group is added as a child group in the Grouping panel, so you cannot add child group to the details group further.

## Edit group properties

To edit a group properties in a tablix data region, refer [Tablix member properties](./../../../report-items/tablix/grouping-panel/#group-member-properties) section.