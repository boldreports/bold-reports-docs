---
title: Tablix Group | Web ReportDesigner | Bold Reports
description: This section describes about tablix group, its types and the behaviour in tablix data regions in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, list, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, group scopes, tablix
---

# Tablix Group

A group organizes the report dataset in a data regions. It helps to present the different views of the same data in a data regions.

The following snap shows the areas for a tablix region with nested row groups and column groups

![Tablix Groups](/static/assets/on-premise/images/report-designer/report-items/tablix/tablix-areas.png)

Groups are organized as members of one or more hierarchies for each data region. A group hierarchy has parent/child groups that are nested and can have adjacent groups. Data associated with row group members expands horizontally across the page and data associated with column group members expands vertically down the page. The `Grouping panel` displays row group and column group members for the currently selected tablix data region on the design surface.

## Create groups

A group has a name and a set of group expressions. The set of group expressions can be a dataset field or a combination of multiple expressions. During the data processing, the group expressions are combined and the resultant data is applied to the specific group. For example, if a group has
date field to organize the data in the data region. On report preview, data is organized by date, and then displayed with other dataset values for each date.

By default, a table, matrix, or list, report items created with `Details` group only. You can create groups manually to organize and group data in the tablix data regions.

## Group types

* **Row groups and column groups** - The data can be organized into groups by rows or columns. On report preview, the row groups expand vertically on a page and the column groups expand horizontally on a page. You can create a nested group or adjacent groups in the data regions. When you create a group for a data region, set of rows or columns will be added to the data region and these rows or columns are used to display group data. Refer [Row Groups](./../../../report-items/tablix/insert-or-delete-a-row-group-ssrs/) and [Column groups](./../../../report-items/tablix/insert-or-delete-a-column-group-ssrs/) section to create groups in tablix data region.
* **Details Group** - The Details group displays all data from the dataset after applying the dataset and data region filters. The `Details` group is the only group that has no group expression. By default, a table or list report item is created with the Details group and adds a row to display the detail data. On report preview, the details row repeats once for every value in the data which is applied to the respective data region. Refer [Create Details Group](./../../../report-items/tablix/add-or-delete-a-details-group-ssrs/) section to create details group in tablix data region.
   > A details group is added as a child group in the Grouping panel, you cannot add child group to the details group further.## Edit group properties

After creating groups, the group properties such as [filters](./../../../compose-report/filter-data/), [sort](./../../../compose-report/sort-data/), and [groups expressions](./../../../compose-report/group-data/) can be modified to organize the data visualization of the respective group in data region. To edit an existing group, select the respective member in the Row or Column Groups pane of the grouping panel. Now, the respective member properties will be listed in the properties panel.![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/open-group-member-properties.png)

Refer [Group properties](./../../../report-items/tablix/member-properties/#group-member-properties) section and modify the group properties.

## Group scope

You can create a nested group or adjacent groups in the data regions. The scope of group is defined by the hierarchy in which the groups are created in the data regions. To easily understand the scope of the groups in the selected tablix data region,

* The visual cues are provided in the tablix data regions.
![Groups and total ](/static/assets/on-premise/images/report-designer/report-items/tablix/groups-and-total-sketch.png)

* The groups are listed as tree structure in the grouping panel.
![Group types sketch](/static/assets/on-premise/images/report-designer/report-items/tablix/group-types-sketch.png)
To understand the visual cues in grouping panel, refer the [Grouping Panel Visual Cues](./../../../report-items/tablix/grouping-panel/#visual-cues) section.