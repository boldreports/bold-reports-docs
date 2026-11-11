---
title: Tablix Row and Column Group Member Properties | Bold Reports
description: Set static and group tablix member properties in the Bold Reports Web Report Designer, such as fixed data, keep together, page break, filters, and visibility.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, grouping pane
---

# Tablix member properties in the Bold Reports<sup>®</sup> Web Report Designer

In the Bold Reports<sup>®</sup> Web Report Designer, the properties panel lists the tablix member properties under different categories based on the behavior of each property. Static members and group members each have their own set of properties.

## Static member properties

The Bold Reports<sup>®</sup> static member properties appear when you click a static tablix member in the `Row Groups` or `Column Groups` pane. The properties panel then lists the properties of that tablix member.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/open-static-member-properties.png '#width=600px')

### Miscellaneous

The static member Miscellaneous category holds the Fixed Data, Keep Together, Keep with group, Repeat on new page, Data Element, and Visibility properties, as shown in the following image.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/static-member-miscellaneous.png '#width=315px')

#### Fixed Data

The Fixed Data property keeps the row or column headers visible when you scroll the pages of a report in Bold Reports<sup>®</sup> Report Viewer.

* To keep the row header visible when you scroll the pages of a report, select the static header member in the `Row Groups` pane and enable the `Fixed Data` property in the properties panel.

* To keep the column header visible when you scroll the pages of a report, select the static header member in the `Column Groups` pane and enable the `Fixed Data` property in the properties panel.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/enable-fixed-data.png '#width=315px')

#### Keep Together

The Keep Together property displays the entire tablix member and any nested members on a single page on report preview or export. Enable the checkbox to keep the content on a single page. Otherwise, the content spans multiple pages.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/enable-keep-together.png '#width=315px')

#### Keep with group

The Keep with group property keeps the row with the previous or following sibling group member.

* **None** - Select this option to indicate no preference for keeping this member with the members of the selected row group.
* **Before** -  Select this option to keep the respective member with the members of the previous group.
* **After** - Select this option to keep the respective member with the members of the following group.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-with-group-property.png '#width=315px')

#### Repeat on new page

The Repeat on new page property displays the static row or column headers on multiple pages in a report.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/repeat-on-new-page.png '#width=315px')

#### Data Element

The static member Data Element properties control the visibility of a static row or column when you export the report in XML format. The properties panel lists them under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/tablix/data-element-properties.png '#width=315px')

<span style="font-weight:bold">Name</span>

The `Name` field assigns a custom name to the static row or column. The row or column is exported with the name you provide.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/tablix/name-property.png '#width=315px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

<span style="font-weight:bold">Output</span>

The `Output` property controls the visibility of the static row or column when you export the report. Each option for the `Output` property performs the following operation:

* **Auto** or **Output** - Exports the row or column.
* **NoOutput** - Does not export the row or column.

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/tablix/output-property.png '#width=315px')

#### Visibility

The static member Visibility category holds the Visibility and Toggle settings, as shown in the following image.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/visibility-property.png '#width=315px')

**Visibility** - The Visibility property conditionally shows or hides the row or column when the report is initially run. To set the visibility of a static row or column in the properties panel, see the [Visibility](./../../../compose-report/common-properties/#visibility) section.

**Toggle** - The toggle settings property lets the user interactively expand or collapse the report items, or the rows and columns associated with the group, to drill down to further detail within the same report. Common reasons to use the toggle visibility feature are:

* To hide columns or rows with details in table and matrix report items.

* To completely hide a table or matrix item.

* To hide other report items.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/toggle-property.png '#width=315px')

## Group member properties

The Bold Reports<sup>®</sup> group member properties appear when you click a group tablix member in the `Row Groups` or `Column Groups` pane. The properties panel then lists the properties of that tablix member.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/open-group-member-properties.png '#width=600px')

### Basic settings

The group member Basic settings category holds the Groups, Filters, and Sorts properties, as shown in the following image.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/group-member-basic-settings.png '#width=315px')

### Groups

The Groups property edits the row or column group. Select a row or column group and click the `Set Groups...` button in the properties panel. The `Grouping` dialog opens as shown in the following image.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/group-dialog.png '#width=315px')

Modify the group `Name` or group expression in the group dialog and click `OK`.

#### Filters

The Filters property filters the data in the tablix. In the tablix data region, you can apply filters independently to row groups, column groups, and adjacent groups. Select a group in the grouping panel and click the `Set Filters...` button in the properties panel. The filter dialog opens as shown in the following image.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/filters-dialog.png '#width=315px')

To create a filter expression for the group member, follow the steps in the [Filter Data](./../../../compose-report/filter-data/) section.

#### Sorts

The Sorts property sorts numeric or string fields in the tablix. You can apply sorting to the whole data region or to each group, including the details group. Select a group in the grouping panel and click the `Set Sorts...` button. The sort dialog opens as shown in the following image.

![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sort-dialog.png '#width=315px')

To create a sort expression for the group member, follow the steps in the [Sort Data](./../../../compose-report/sort-data/) section.

### Miscellaneous

The group member Miscellaneous category holds the Fixed Data, Keep Together, and Data Element properties, as shown in the following image.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/group-member-miscelleneous.png '#width=315px')

#### Fixed Data

The Fixed Data property keeps the row or column group headers visible when you scroll the pages of a report in Bold Reports<sup>®</sup> Report Viewer.

* To keep the row header visible when you scroll the pages of a report, select the dynamic header member in the `Row Groups` pane and enable the `Fixed Data` property in the properties panel.

* To keep the column header visible when you scroll the pages of a report, select the dynamic header member in the `Column Groups` pane and enable the `Fixed Data` property in the properties panel.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/enable-fixed-data.png '#width=315px')

#### Keep Together

The Keep Together property displays the entire tablix member and any nested members on a single page on report preview or export. Enable the checkbox to keep the content on a single page. Otherwise, the content spans multiple pages.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/enable-keep-together.png '#width=315px')

#### Data Element

The group member Data Element properties control the visibility of a dynamic row or column when you export the report in XML format. The properties panel lists them under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/tablix/data-element-properties.png '#width=315px')

<span style="font-weight:bold">Name</span>

The `Name` field assigns a custom name to the dynamic row or column. The row or column is exported with the name you provide.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/tablix/name-property.png '#width=315px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

<span style="font-weight:bold">Output</span>

The `Output` property controls the visibility of the dynamic row or column when you export the report. Each option for the `Output` property performs the following operation:

* **Auto** or **Output** - Exports the row or column.
* **NoOutput** - Does not export the row or column.

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/tablix/output-property.png '#width=315px')

### Page break

The group member **Page Break** property controls the amount of information on each page when you preview the report. Follow these steps to apply the page break property to a dynamic member.

The following image shows the Page Break property in the properties panel.

![Page break property](/static/assets/on-premise/images/report-designer/report-items/tablix/group-member-page-break.png '#width=315px')

Choose any `Break Location` type in the dropdown.

![Break location](/static/assets/on-premise/images/report-designer/report-items/tablix/group-break-location.png '#width=315px')

To prevent predefined page breaks from being applied during report preview, enable the `Break Disabled` property checkbox. You can also control page breaks during report preview with expressions. To set and reset page breaks dynamically, see the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

![Page Break Disabled](/static/assets/on-premise/images/report-designer/report-items/tablix/group-page-break-disabled.png '#width=355px')

To restart page numbering on each page, enable the `Page Number Reset` property checkbox.

![Page Number Reset](/static/assets/on-premise/images/report-designer/report-items/tablix/group-reset-page-number.png '#width=315px')

#### Visibility

The group member Visibility category holds the Visibility and Toggle settings, as shown in the following image.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/visibility-property.png '#width=315px')

**Visibility** - The Visibility property conditionally shows or hides the row or column groups when the report is initially run. To set the visibility of dynamic row or column members in the properties panel, see the [Visibility](./../../../compose-report/common-properties/#visibility) section.

**Toggle** - The toggle settings property lets the user interactively expand or collapse the report items, or the rows and columns associated with the group, to drill down to further detail within the same report. Common reasons to use the toggle visibility feature are:

* To hide columns or rows with details in table and matrix report items.

* To completely hide a table or matrix item.

* To hide other report items.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/toggle-property.png '#width=315px')

## See also

* [Grouping panel](./../../../report-items/tablix/grouping-panel/)
* [Repeat headers on each page](./../../../report-items/tablix/repeat-headers-on-each-page-in-ssrs/)
* [Keep column headers visible while scrolling](./../../../report-items/tablix/keep-column-headers-visible-while-scrolling-in-ssrs/)
