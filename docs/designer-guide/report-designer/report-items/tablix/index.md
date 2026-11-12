---
title: Tablix Table, Matrix, and List in RDL Reports | {{site.productName}}
description: Use the {{site.productName}} Web Report Designer tablix to show RDL report data as a table, matrix, or list, and set its dataset, filters, sorting, and page breaks.
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Tablix report item in {{site.productNameTM}}

The {{site.productNameTM}} tablix report item displays paginated report data from a dataset in cells organized into rows and columns. It combines the `Table`, `Matrix`, and `List` report items `(Table + Matrix + List = Tablix)`. You find the `Tablix` report items under the `Data Regions` category in the item panel of the Web Report Designer.

The following image shows the tablix items listed in the item panel.

![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/item-panel-initial-view.png '#width=185px')

> Matrix report item is not provided as separate report item. The table report item can be used to create a matrix layout.

The following sections explain each of these report items.

## What is the Table report item?

The {{site.productNameTM}} Table report item displays data in tabular format. A simple table design contains a table header row and a details row with three columns. A table can have only row groups.

![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/table-initial-design.png '#width=355px')

## What is the Matrix layout?

The {{site.productNameTM}} matrix layout displays summarized data. A matrix can have row groups and column groups. A simple matrix design contains a row group, a column group, a corner cell, and a data cell.

![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/initial-matrix-design.png '#width=355px')

## What is the List report item?

The {{site.productNameTM}} List report item creates free-form layouts. A list acts as a container where you place multiple report items side by side to design a free-form layout.

![Tablix listed in item panel](/static/images/report-designer/report-items/tablix/initial-list-design.png '#width=185px')

## What are the tablix sections?

A {{site.productNameTM}} tablix data region has four sections:

* Corner cell - It is created when tablix data region has both row groups and column groups.
* Row group cells - Displays group instance values.
* Column group cells - Displays group instance values.
* Body cells - Displays detail and group data.

The following image shows the areas of a tablix region with nested row groups and column groups.

![Tablix areas](/static/images/report-designer/report-items/tablix/tablix-areas.png '#width=410px')

> The tablix body area always exists in the tablix data region. The other areas are optional.

### How do groups and totals appear in a tablix?

When you select a tablix cell in the Web Report Designer, row and column grippers and group indicators inside the tablix data region show the groups that the cell belongs to.

The following image shows a matrix with both row and column groups, a total row, and a total column.

![Groups and total ](/static/images/report-designer/report-items/tablix/groups-and-total-sketch.png '#width=410px')

## Properties

The tablix properties in the Web Report Designer are set through the properties panel. Before you set the following properties, read the [Properties panel](./../../compose-report/properties-panel/) section.

### Data

The Data category of the tablix holds the Dataset, Filter, and Sort properties, as shown in the following image.

![Data category](/static/images/report-designer/report-items/tablix/data-category-property.png '#width=385px')

#### Dataset

The Dataset property assigns a dataset to the tablix. The `Dataset` property dropdown lists the available datasets in the report. Choose the dataset you want from the dropdown.

> Each tablix report item can only show data from one dataset.

![Data category](/static/images/report-designer/report-items/tablix/dataset-drop-down-view.png '#width=385px')

> To add a dataset to your report, see the [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/) section.

#### Filter

The Filter property filters the data shown in the tablix. To open the `Filter` dialog, click the `Set Filters...` button. The filter dialog opens as shown in the following image.

![Filter dialog](/static/images/report-designer/report-items/tablix/filters-dialog.png '#width=385px')

To add or remove filters in the filter dialog, see the [Filter Data](./../../compose-report/filter-data/) section.

#### Sort

The Sort property sorts numeric or string fields in the tablix. You can apply sorting to the whole data region or to each group, including the details group. To open the sort dialog, click the `Set Sorts...` button. The sort dialog opens as shown in the following image.

![Sort dialog](/static/images/report-designer/report-items/tablix/sort-dialog.png '#width=385px')

To add or remove sort expressions in the sort dialog, see the [Sort Data](./../../compose-report/sort-data/) section.

### Appearance

The tablix Appearance properties (border style, color, width, and background color) style the tablix and customize its look in the report design. You find these properties under the `Appearance` category in the properties panel.

#### Border

The Border properties add or customize the border around a tablix item to separate it visually in the report design. To set border properties in the properties panel, see the [Border Properties](./../../compose-report/common-properties/#border-properties) section.

#### Background color

The Background color property colors the tablix background. To set the background color in the properties panel, see the [Background color](./../../compose-report/common-properties/#background-color) section.

### Page break

The tablix **Page Break** property controls the amount of information on each page when you preview the report. Follow these steps to apply the page break property to a dynamic member.

The following image shows the Page Break property in the properties panel.

![Page break property](/static/images/report-designer/report-items/tablix/page-break.png '#width=315px')

Choose any `Break Location` type in the dropdown.

![Break location](/static/images/report-designer/report-items/tablix/group-break-location-types.png '#width=315px')

To prevent predefined page breaks from being applied during report preview, enable the `Break Disabled` property checkbox. You can also control page breaks during report preview with expressions. To set and reset page breaks dynamically, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

![Page Break Disabled](/static/images/report-designer/report-items/tablix/page-break-disabled.png '#width=355px')

To restart page numbering on each page, enable the `Page Number Reset` property checkbox.

![Page Number Reset](/static/images/report-designer/report-items/tablix/reset-page-number.png '#width=315px')

#### Keep together

The Keep together checkbox keeps the entire tablix together on one page if possible. Enable it as shown in the following image.

![Keep together tablix](/static/images/report-designer/report-items/tablix/keep-together.png '#width=385px')

### Headers

The tablix Headers property configures how the row and column headers behave when you preview the report.

![Tablix headers](/static/images/report-designer/report-items/tablix/headers.png '#width=385px')

<span style="font-weight:bold">Fixed Row</span>

The Fixed row property freezes the row headers while you scroll the pages of a report.

<span style="font-weight:bold">Fixed Column</span>

The Fixed column property freezes the column headers while you scroll the pages of a report.

<span style="font-weight:bold">Repeat Row</span>

The Repeat row property shows the row header on every page of the report.

<span style="font-weight:bold">Repeat Column</span>

The Repeat column property shows the column header on every page of the report.

### Position

The tablix Position property sets the width, height, left, and top position of the tablix in the report design. To set these properties in the properties panel, see the [Position](./../../compose-report/common-properties/#position) section.

### No Rows

The tablix No Rows property displays static text when the dataset returns empty or zero rows at run time.

![Tablix No rows message](/static/images/report-designer/report-items/tablix/no-rows/no-rows.png '#width=315px')

To set or reset the no data message properties, see the [No Rows](./no-rows-message/) property section.

### Data Element

The tablix Data element properties control the visibility of a report item when you export the report in XML format. The properties panel lists them under the `Data Element` category.

![Data element properties](/static/images/report-designer/report-items/tablix/data-element-properties.png '#width=355px')

<span style="font-weight:bold">Name</span>

The `Name` field assigns a custom name to the tablix element. The tablix is exported with the name you provide.

![Data element name property](/static/images/report-designer/report-items/tablix/name-property.png '#width=355px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

<span style="font-weight:bold">Output</span>

The `Output` property controls the visibility of the tablix when you export the report. Each option for the `Output` property performs the following operation:

* **Auto** or **Output** - Exports the tablix report item.
* **NoOutput** - Does not export the tablix report item.

![Data element output property](/static/images/report-designer/report-items/tablix/output-property.png '#width=355px')

### Visibility

The tablix Visibility property conditionally shows or hides the tablix report item on report preview or export. To set the visibility of the tablix item in the properties panel, see the [Visibility](./../../compose-report/common-properties/#visibility) section.

### Miscellaneous

The tablix Miscellaneous category holds the Page name, Custom attributes, Document Map, Bookmark, Custom Style, and Tooltip properties.

#### Page name

The Page name property names the first worksheet of the Excel workbook when you export the report to Excel format.

![Page name property](/static/images/report-designer/report-items/tablix/page-name.png '#width=355px')

You can set static or dynamic text as the page name. To set and reset dynamic text, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Custom attributes

The Custom attributes property sets the values for tablix custom properties. To create and assign values for custom properties in the properties panel, see the [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.

#### Document Map

A document map is a navigational feature that displays a separate side pane with a set of navigational links in a hierarchical structure when you view a report. You click an item in the list to go to the report page that displays that item. To configure a document map in the report design, see the [Document Map](./../../compose-report/document-map/) section.

You can set static or dynamic text as the value of the document map property. To set and reset dynamic text, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Bookmark

Bookmark links let users navigate to different parts of an SSRS report. You can add bookmarks to each textbox, image, table, or chart, or to the unique group values displayed in a tablix, to direct users to specified locations in the report. The bookmark value can be your own string or an expression. To configure a bookmark in the report design, see the [Bookmark](./../../compose-report/bookmark/) section.

You can set static or dynamic text as the value of the bookmark property. To set and reset dynamic text, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Custom Style

The `Custom Style` property lets you use external CSS to style report items, giving more flexibility than the built-in styling options. Use this property to meet specific design requirements and keep styling consistent across multiple reports. For a step-by-step guide to setting up custom styles in your report, see the **How To** section of this guide.

![custom style property](/static/images/report-designer/report-items/tablix/custom-style-property.png '#width=355px')

#### Tooltip

The Tooltip property displays informative text or a value when the user hovers over the report item in report preview. To set a tooltip for the table report item in the properties panel, see the [Tooltip](./../../compose-report/common-properties/#tooltip) section.

## How do I set an expression on a tablix property?

You can set an expression on some properties of the {{site.productNameTM}} tablix report item so that their values are processed from expressions. To set expressions on tablix properties, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## How do I reset an expression?

To `Reset` an expression applied to a tablix property in the Web Report Designer, see the [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## How do I use advanced properties?

Some properties of the {{site.productNameTM}} tablix report item contain nested properties. To open and handle nested properties, see the [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.

## How do I design an RDL report using a table?

To learn how to design a simple tablix in your report with the Web Report Designer, see the [Design ssrs RDL report using tablix](./../../report-items/tablix/design-ssrs-rdl-report-using-table/) section.

## Frequently asked questions

### Can a tablix show data from more than one dataset?

No. Each {{site.productNameTM}} tablix report item can only show data from one dataset.

### Is there a separate Matrix report item?

No. The matrix report item is not provided as a separate report item. You use the table report item to create a matrix layout.

## See also

* [Insert or delete a row group](./insert-or-delete-a-row-group-ssrs/)
* [Insert or delete a column group](./insert-or-delete-a-column-group-ssrs/)
* [Tablix member properties](./member-properties/)
* [No rows message](./no-rows-message/)
