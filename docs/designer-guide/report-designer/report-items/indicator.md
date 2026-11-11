---
title: Add Indicator Icons to RDL Reports | {{site.productName}}
description: Add an indicator report item to an RDL report in the {{site.productName}} Web Report Designer and set its value, type, and states to show the state of data as icons.
keywords: boldReportDesigner, reportdesigner, indicator, reportitem
---

# Indicator report item in {{site.productNameTM}} Web Report Designer

In the {{site.productNameTM}} Web Report Designer, an indicator report item is a minimal gauge that visualizes the state of data. You mostly use it in a `Tablix` to visually display the state of the cell data.

## How do I add an indicator to the report?

You add an indicator to a {{site.productNameTM}} report by dragging the indicator report item from the item panel into the design area.

1. Find the indicator report item in the item panel under the `KPI` category.
   ![Indicator item in item panel](/static/assets/on-premise/images/report-designer/report-items/indicator/item-panel.png '#width=145px')
2. Drag and drop the indicator report item into the design area from the item panel.
   ![Drag and drop indicator report item into design area](/static/assets/on-premise/images/report-designer/report-items/indicator/item-drag.png '#width=285px')
3. Drop the indicator item in the design area. The properties panel then lists the item properties.
   ![Indicator item with properties view](/static/assets/on-premise/images/report-designer/report-items/indicator/designer-area.png '#width=385px')

## Which properties can I set for an indicator?

The {{site.productNameTM}} properties panel lists every indicator property described below. Read the [Properties panel](./../../compose-report/properties-panel/) section before you work with the following properties.

### Basic settings

The border style, color, width, and background color properties style the indicator and customize its appearance in the report design. The properties panel lists these properties under the `Basic settings` category.

#### Border

Border properties add or customize the border around an indicator item to visually separate items in the report design. To set border properties for the indicator item in the properties panel, see the [Border Properties](./../../compose-report/common-properties/#border-properties) section.

#### Background color

The background color property customizes the indicator background color. To set the background color in the properties panel, see the [Background color](./../../compose-report/common-properties/#background-color) section.

### Position

The position property sets the width, height, left, and top position of the indicator in the report design. To set these properties in the properties panel, see the [Position](./../../compose-report/common-properties/#position) section.

### Data

The Data category of the indicator holds the dataset property.

#### Dataset

The Dataset property assigns a dataset to the indicator report item. The `Dataset` property dropdown lists the available datasets in the report. Choose the dataset you want from the dropdown.

![Data category](/static/assets/on-premise/images/report-designer/report-items/indicator/dataset.png '#width=355px')

> To add a dataset to your report, see the [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/) section.

### Indicator value

The Indicator value property assigns the value for indicator states. You can also set the indicator value based on dynamic values by using expressions.

![Indicator Numeric Value](/static/assets/on-premise/images/report-designer/report-items/indicator/numeric-value.png '#width=355px')

#### Measurement unit

The Measurement unit property sets how the indicator value is measured. Select `Percentage` or `Numeric` from the dropdown. If you select the `Percentage` option, the `Minimum` and `Maximum` properties appear in the properties panel.

![Indicator Percentage Value](/static/assets/on-premise/images/report-designer/report-items/indicator/percentage-value.png '#width=355px')

##### Minimum

The minimum property assigns the minimum value of the indicator. You can also set the minimum value based on dynamic values by using expressions.

##### Maximum

The maximum property assigns the maximum value of the indicator. You can also set the maximum value based on dynamic values by using expressions.

### Indicator types

The Indicator types property selects predefined indicator states from the dropdown.

![Indicator Type](/static/assets/on-premise/images/report-designer/report-items/indicator/types.png '#width=345px')

### Indicator states

The Indicator states property customizes the states of the indicator.

![Indicator States](/static/assets/on-premise/images/report-designer/report-items/indicator/states.png '#width=345px')

![Indicator States Panel](/static/assets/on-premise/images/report-designer/report-items/indicator/states-panel.png '#width=355px')

#### How do I customize a state?

You customize each indicator state in the {{site.productNameTM}} states panel by setting its icon, color, start value, end value, and scale factor.

* `Customizing an icon`: Choose a different icon for each state from the dropdown under the `Icon` field.

* `Customizing a color`: Choose a different color for each state from the color picker under the `Color` field.

* `Customizing start value`: Assign a start value for each state in the numeric textbox under the `Start` field. You can also set the start value from dynamic values by using expressions.

* `Customizing end value`: Assign an end value for each state in the numeric textbox under the `End` field. You can also set the end value from dynamic values by using expressions.

* `Customizing scale factor value`: Assign a scale factor value for each state in the numeric textbox under the `Scale Factor` field. You can also set the scale factor value from dynamic values by using expressions.

#### How do I add a new state?

To add a new indicator state, click the `Add icon`. The new state is created with the following values:

* Icon - Circle
* color - No Color
* Start - ''
* End - ''
* Scale Factor - 1

![Adding indicator states](/static/assets/on-premise/images/report-designer/report-items/indicator/states-add.png '#width=355px')

#### How do I delete a state?

To delete an indicator state, click the `delete icon`.

![Deleting indicator states](/static/assets/on-premise/images/report-designer/report-items/indicator/states-delete.png '#width=355px')

### Data Element

The Data element properties control the visibility of an indicator when you export the report in XML format. The properties panel lists these properties under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/tablix/data-element-properties.png '#width=355px')

<span style="font-weight:bold">Name</span>

Use the `Name` field to assign a custom name to the indicator element. The indicator is exported with the name you provide.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/tablix/name-property.png '#width=355px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

<span style="font-weight:bold">Output</span>

The `Output` property controls the visibility of the indicator when you export the report. Each option performs the following operation:

* **Auto** or **Output**: Exports the indicator report item.
* **NoOutput**: Does not export the indicator report item.

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/tablix/output-property.png '#width=355px')

### Visibility

The visibility property conditionally shows or hides the indicator report item on report preview or export. To set the visibility of the indicator item in the properties panel, see the [Visibility](./../../compose-report/common-properties/#visibility) section.

### Miscellaneous

The Miscellaneous category holds the page name, custom attributes, document map, bookmark, tooltip, and custom style properties of the indicator.

#### Page name

The page name property names the first worksheet of the Excel workbook when you export the report to Excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/indicator/page-name.png '#width=355px')

You can set static or dynamic text as the page name. To set and reset dynamic text, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Custom attributes

The custom attributes property sets the values of indicator custom properties. To create and assign values to custom properties in the properties panel, see the [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.

#### Document Map

A document map is a navigational feature that displays a separate side pane with a set of navigational links in a hierarchical structure when you view a report. Users click an entry in the list to navigate to the report page that displays that item. To configure a document map in the report design, see the [Document Map](./../../compose-report/document-map/) section.

You can set static or dynamic text as the value of the document map property. To set and reset dynamic text, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Bookmark

Bookmark links let users navigate to different parts of an SSRS report. You can add bookmarks to each textbox, image, table, or chart, or to the unique group values displayed in a tablix. A bookmark directs users to a specified location in the report. The bookmark value can be your own string or an expression. To configure a bookmark in the report design, see the [Bookmark](./../../compose-report/bookmark/) section.

You can set static or dynamic text as the value of the bookmark property. To set and reset dynamic text, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Tooltip

The Tooltip property displays informative text or a value when the user hovers over the report item in report preview. To set a tooltip for the indicator report item in the properties panel, see the [Tooltip](./../../compose-report/common-properties/#tooltip) section.

#### Custom Style

The `Custom Style` property lets you use external CSS to style report items, giving more flexibility than the built-in styling options. Use this property to meet specific design requirements and keep styling consistent across multiple reports. For a step-by-step guide on setting up custom styles in your report, see the **How To** section of this guide.

![custom style property](/static/assets/on-premise/images/report-designer/report-items/indicator/custom-style-property.png '#width=355px')

## How do I set an expression on an indicator property?

You can set an expression on a few properties of the {{site.productNameTM}} indicator report item to process the property values. To set expressions on the indicator report item properties, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## How do I reset an expression?

To `Reset` the expression applied to an indicator property, see the [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## How do I open nested (advanced) properties?

A few properties of the {{site.productNameTM}} indicator report item contain nested properties. To open and handle the nested properties, see the [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.

## Frequently asked questions

### Where is the indicator used most often?

You mostly use the indicator in a `Tablix` to visually display the state of the cell data.

### What values does a new indicator state get?

A new state gets the Circle icon, No Color, an empty start and end value, and a scale factor of 1.

## See also

* [Gauge report items](./../gauge/)
* [Data bar report item](./../data-bar/)
* [Sparkline report item](./../sparkline/)
