---
title: Design RDL report using rectangle | Web Report Designer
description: Design RDL report using rectangle report item, to visually separate a region of the report or to combine Images, Text Boxes, Charts etc in one place.
keywords: ejReportDesigner, reportdesigner, line, reportitem, border
---

# Rectangle

The rectangle report item is used to visually separate regions of the report or it can act as container for other report items to improve the overall report design and readability.

## Add a rectangle to the report

1. The rectangle report item is listed in the item panel under the `Basic Items` category.
![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/rectangle/rectangle-item-in-item-panel.png)
2. Drag and drop the rectangle report item into the design area from the item panel.
![Drag and drop rectangle report item into design area](/static/assets/on-premise/images/report-designer/report-items/rectangle/drag-and-drop-rectangle.png)
3. Once you drop the rectangle item into design area, respective item properties will be listed the properties panel.
![Rectangle item with properties view](/static/assets/on-premise/images/report-designer/report-items/rectangle/rectangle-item-with-properties-view.png)

## Properties

Refer the [Properties panel](./../../compose-report/properties-panel/) section before proceeding with the below properties.

### Basic Settings

The border style, color, width and background color properties are used to style the rectangle and customize its appearance in the report design. These properties are listed under the `Basic Settings` category in the properties panel.

![Rectangle basic settings](/static/assets/on-premise/images/report-designer/report-items/rectangle/rectangle-basic-settings.png)

#### Border

Border properties are used to add or customize the border around a rectangle item to visually separate items in the report design. To set border properties to the rectangle item using properties panel refer [Border Properties](./../../compose-report/common-properties/#border-properties) section.

#### Background color

Using the background color property you can color the rectangle background. To set background color using properties panel refer [Background color](./../../compose-report/common-properties/#background-color) section.

### Page break

The page break property is used to control the amount of information on each page when you preview the report. Follow the below steps to apply page break property for rectangle item.

1. Choose any `Break Location` type in the drop-down.
![Break location](/static/assets/on-premise/images/report-designer/report-items/rectangle/break-location-types.png)
2. To reset page number on each page, enable `Page Number Reset` property checkbox.
![Reset page number](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-break-property.png)

### Position

Position property is used to set the width, height, left and top position of the rectangle in the report design. To handle these properties using properties panel refer [Position](./../../compose-report/common-properties/#position) section.

### Data Element

Data element can be used to control visibility of a report item when exporting the report in XML format. The Data element properties are listed in the properties panel, under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/rectangle/data-element-properties.png)

<span style="font-weight:bold">Name</span>

You can assign a custom name for the rectangle element using the `Name` field. The rectangle will be exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/rectangle/name-property.png)

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

<span style="font-weight:bold">Output</span>

On exporting the report, the visibility of the rectangle can be controlled using the `Output` property. Choosing the following options for the `Output` property will perform the respective operations:

* **Auto** or **Output** - Exports the rectangle and its contents
* **NoOutput** - Does not export the rectangle report item
* **ContentsOnly** - Does not export the rectangle report item, only the contents of it are exported

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/rectangle/output-property.png)

### Visibility

Visibility property is used to conditionally show or hide the rectangle report item on report preview or export action. To set visibility of rectangle item using properties panel refer [Visibility](./../../compose-report/common-properties/#visibility) section.

### Miscellaneous

#### Keep together

Keep together property is used to display the report item or section of a report in a single page, on report preview or export action. Enable the checkbox to keep the content in single page or it will span across multiple pages.

![Keep together property](/static/assets/on-premise/images/report-designer/report-items/rectangle/keep-together-property.png)

#### Page name

The page name property is used to name the first worksheet of the Excel workbook, when exporting the report to excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-name-property.png)

You can set the static or dynamic text as page name. To set and reset dynamic text, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

#### Custom attributes

This property can be used to set the values for rectangle custom properties. To create and assign values for custom properties using properties panel refer [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.

#### Tooltip

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for rectangle report item using properties panel refer [Tooltip](./../../compose-report/common-properties/#tooltip) section.

## Set expression

An expression can be set to few properties of the rectangle report item to process the property values based on expressions. To set expressions to the rectangle report item properties, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## Reset expression

To `Reset` the expression applied to a property, refer [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## Advanced properties

Few properties of the rectangle report contains nested properties. To open and handle nested properties, refer [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.