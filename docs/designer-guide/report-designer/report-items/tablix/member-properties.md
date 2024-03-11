---
title: Tablix member properties | Web ReportDesigner | Bold Reports
description: This section describes the types and properties of the tablix member along with its purpose in the Bold Report Designer.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, grouping pane
---

# Tablix member properties

The properties are listed under different categories in the properties panel based on the behaviour of each properties of tablix member.

## Static member properties

Click on the required static tablix member in the `Row Groups` or `Column Groups` pane, now the respective tablix member properties will be listed in the properties panel.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/open-static-member-properties.png '#width=600px')

### Miscellaneous

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/static-member-miscellaneous.png '#width=315px')

#### Fixed Data

Fixed data property is used to keep the row or column headers visible when scrolling the pages of a report in Bold Reports Report Viewer.

* To make row header visible when scrolling the pages of report, select the static header member in `Row Groups` pane and enable the `Fixed Data` property in the properties panel.

* To make column header visible when scrolling the pages of report, select the static header member in `Column Groups` pane and enable the `Fixed Data` property in the properties panel.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/enable-fixed-data.png '#width=315px')

#### Keep Together

Keep together property can be used to display the entire tablix member and any nested members in a single page, on report preview or export action. Enable the checkbox to keep the content in single page or it will span across multiple pages.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/enable-keep-together.png '#width=315px')

#### Keep with group

Keep with group property can be used to keep the row with the previous or following sibling group member.

* **None** - Select this option to indicate no preference for keeping this member with the members of the selected row group.
* **Before** -  Select this option to keep the respective member with the members of the previous group.
* **After** - Select this option to keep the respective member with the members of the following group.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-with-group-property.png '#width=315px')

#### Repeat on new page

Repeat on new page property can be used to display the static row or column headers on multiple pages in a report.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/repeat-on-new-page.png '#width=315px')

#### Data Element

Data element can be used to control visibility of a static row or column when exporting the report in XML format. The Data element properties are listed in the properties panel, under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/tablix/data-element-properties.png '#width=315px')

<span style="font-weight:bold">Name</span>

You can assign a custom name for the static row or column using the `Name` field. The row or column will be exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/tablix/name-property.png '#width=315px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

<span style="font-weight:bold">Output</span>

On exporting the report, the visibility of the static row or column can be controlled using the `Output` property. Choosing the following options for the `Output` property will perform the respective operations:

* **Auto** or **Output** - Exports the row or column
* **NoOutput** - Does not export the row or column

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/tablix/output-property.png '#width=315px')

#### Visibility

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/visibility-property.png '#width=315px')

**Visibility** - Visibility property is used to conditionally show or hide the row or column when the report is initially run. To set visibility of static row or column using properties panel refer [Visibility](./../../../compose-report/common-properties/#visibility) section.

**Toggle** - The toggle settings property can be used to allow the user interactively expand or collapse the report items or row and columns associated with the group to drill down to further detail within the same report. Some common reasons to use the toggle visibility feature are as follows:

* To hide columns or rows with details in table and matrix report items

* To completely hide a table or matrix item

* To hide other report items

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/toggle-property.png '#width=315px')

## Group member properties

Click on the required group tablix member in the `Row Groups` or `Column Groups` pane, now the respective tablix member properties will be listed in the properties panel.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/open-group-member-properties.png '#width=600px')

### Basic settings

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/group-member-basic-settings.png '#width=315px')

### Groups

You can edit the row or column group using this option. Select a row or column group, click on the `Set Groups...` button in the properties panel. Now, the `Grouping` dialog will be opened like below.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/group-dialog.png '#width=315px')

Now, modify the group `Name` or group expression in the group dialog and click `OK`.

#### Filters

Filters can be used to filter the data in the tablix. In tablix data region, filters can be applied independently for row groups, column groups, and adjacent groups. Select a group in the grouping panel, click on the `Set Filters...` button in the properties panel. Now, the filter dialog will be opened like below.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/filters-dialog.png '#width=315px')

To create a filter expression for the respective group member, refer the steps provided in [Filter Data](./../../../compose-report/filter-data/) section.

#### Sorts

To sort the numeric or string field in the tablix, sorting can be used. In tablix, the sorting can be applied to the whole data region or for each group, including the details group. Select a group in the grouping panel, click on the `Set Sorts...` button. Now, the sort dialog will be opened like below.

![Sort dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sort-dialog.png '#width=315px')

To create a sort expression for the respective group member, refer the steps provided in [Sort Data](./../../../compose-report/sort-data/) section.

### Miscellaneous

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/group-member-miscelleneous.png '#width=315px')

#### Fixed Data

Fixed data property is used to keep the row or column group headers visible when scrolling the pages of a report in Bold Reports Report Viewer.

* To make row header visible when scrolling the pages of report, select the dynamic header member in `Row Groups` pane and enable the `Fixed Data` property in the properties panel.

* To make column header visible when scrolling the pages of report, select the dynamic header member in `Column Groups` pane and enable the `Fixed Data` property in the properties panel.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/enable-fixed-data.png '#width=315px')

#### Keep Together

Keep together property can be used to display the entire tablix member and any nested members in a single page, on report preview or export action. Enable the checkbox to keep the content in single page or it will span across multiple pages.

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/enable-keep-together.png '#width=315px')

#### Data Element

Data element can be used to control visibility of dynamic row or column when exporting the report in XML format. The Data element properties are listed in the properties panel, under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/tablix/data-element-properties.png '#width=315px')

<span style="font-weight:bold">Name</span>

You can assign a custom name for the dynamic row or column using the `Name` field. The row or column will be exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/tablix/name-property.png '#width=315px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

<span style="font-weight:bold">Output</span>

On exporting the report, the visibility of the dynamic row or column can be controlled using the `Output` property. Choosing the following options for the `Output` property will perform the respective operations:

* **Auto** or **Output** - Exports the row or column
* **NoOutput** - Does not export the row or column

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/tablix/output-property.png '#width=315px')

### Page break

The **Page Break** property is used to control the amount of information on each page when you preview the report. Follow the below steps to apply page break property for dynamic member.

![Page break property](/static/assets/on-premise/images/report-designer/report-items/tablix/group-member-page-break.png '#width=315px')

Choose any `Break Location` type in the drop-down.

![Break location](/static/assets/on-premise/images/report-designer/report-items/tablix/group-break-location-types.png '#width=315px')

The **Page Number Reset** property indicates whether the page number should be reset to 1 when a page break occurs. If this property evaluates to true, the page number is reset.

![Page Number Reset](/static/assets/on-premise/images/report-designer/report-items/tablix/reset-page-number.png '#width=315px')

#### Visibility

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/visibility-property.png '#width=315px')

**Visibility** - Visibility property is used to conditionally show or hide the row or column groups when the report is initially run. To set visibility of dynamic row or column members using properties panel refer [Visibility](./../../../compose-report/common-properties/#visibility) section.

**Toggle** - The toggle settings property can be used to allow the user interactively expand or collapse the report items or row and columns associated with the group to drill down to further detail within the same report. Some common reasons to use the toggle visibility feature are as follows:

* To hide columns or rows with details in table and matrix report items

* To completely hide a table or matrix item

* To hide other report items

![Open static member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/toggle-property.png '#width=315px')