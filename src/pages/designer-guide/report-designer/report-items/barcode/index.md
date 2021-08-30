---
title: Barcode Report Item | Web ReportDesigner | Bold Reports
description: This section describes about barcode report item and its properties to design a report using barcode in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Barcode

A barcode report item is used for representing data in a visual, machine-readable form. You can build reports that display a barcode to make tasks like tracking shipping orders and employee identification numbers easier.

## One-Dimensional barcodes

One-Dimensional barcodes represents data in the widths and spacings of printed parallel lines, which is why they are also called as linear barcodes or symbolics. Linear barcodes are read in one direction (horizontally). Linear symbolics allows the coding of small amounts of information content (a maximum of 20-30 digits or symbols).

### Adding a one dimensional barcode to the report

1. One-dimensional barcode report item is listed in the item panel under the `Barcodes` category.
![Barcodes listed in item panel](/static/assets/on-premise/images/report-designer/report-items/barcode/barcode-item-in-item-panel.png)
2. Drag and drop the 1-D barcode report item into the design area from the item panel.
![Drag and drop barcode report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/drag-and-drop-1D-barcode.png)
3. Once you drop the barcode item into design area, respective item properties will be listed the properties panel.
![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/1D-barcode-properties.png)

### Properties

Properties required to generate 1D barcodes are listed under the `Basic Settings` category in the properties panel.

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/1D-basic-settings.png)

<span style="font-weight:bold">Symbology Type</span>

The list of supported 1D barcode symbologies are provided in the `Symbology Type` drop-down list.

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/symbology-types.png)

To change the type of existing 1D barcode in the report, select the specific barcode item and choose the symbology type in the drop-down. Now, the respective 1D barcode type will be rendered in the report design.

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/symbology-design.png)

<span style="font-weight:bold">Text</span>

`Text` property can be used to specify the value to be encoded in the barcode.

Each barcode type requires different type and length of input values for encoding, so provide the valid values based on the respective 1D barcode type. Supported barcode types and their valid input values are listed in the [Supported Barcode Types](./../../report-items/barcode/supported-barcode-types/) section.
If you provide invalid values, the error message will be displayed in the barcode item as below,

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/invalid-encoding.png)

You can also encode the values in barcodes dynamically by using the `Expressions`.

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/1D-barcode-expression-menu.png)

In the expression builder, create expression using built-in-functions or data fields and click `OK`.

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/1D-expression-demo.png)

Now, the expression value will encoded in the barcode at run-time. Refer [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

<span style="font-weight:bold">Text Visibility</span>

The `Text Visibility` property can be used to show/hide the label text of the barcode. The label shows a value of the barcode. In the below snaps, the `Code39` barcode with and without label text is displayed.

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/1D-label-visible.png)

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/1D-label-hidden.png)

## Two-Dimensional barcodes

Two-dimensional (2D) barcodes are used for coding large amounts of information in a bar code, potentially up to several pages worth. Such a barcode would consist of square cells, dots, hexagons, and other geometrical figures.

### Adding a two dimensional barcode to the report

1. Two-dimensional barcode report item is listed in the item panel under the `Barcodes` category.
![Barcodes listed in item panel](/static/assets/on-premise/images/report-designer/report-items/barcode/2D-barcode-item-in-item-panel.png)
2. Drag and drop the 2-D barcode report item into the design area from the item panel.
![Drag and drop barcode report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/drag-and-drop-2D-barcode.png)
3. Once you drop the barcode item into design area, respective item properties will be listed the properties panel.
![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/2D-barcode-properties.png)

### Properties

Properties required to generate 2D barcode item are listed under the `Basic Settings` category in the properties panel.

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/2D-basic-settings.png)

<span style="font-weight:bold">Symbology Type</span>

The list of supported 2D barcode symbologies are provided in the `Symbology Type` drop-down list.

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/2D-symbology-types.png)

To change the type of existing 2D barcode in the report, select the specific barcode item and choose the symbology type in the drop-down. Now, the respective 2D barcode type will be rendered in the report design.

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/2D-symbology-design.png)

<span style="font-weight:bold">Text</span>

`Text` property can be used to specify the value to be encoded in the 2D barcode.

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/2D-text-property.png)

You can also encode the values in barcodes dynamically by using the `Expressions`.

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/expression-menu.png)

In the expression builder, create expression using built-in-functions or data fields and click `OK`.

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/1D-expression-demo.png)

Now, the expression value will encoded in the barcode at run-time. Refer [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

<span style="font-weight:bold">Text Visibility</span>

The `Text Visibility` property can be used to show/hide the label text of the barcode. The label shows a value of the barcode. In the below snaps, the `QR` barcode with and without label text is displayed.

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/2D-label-visible.png)

![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/2D-label-hidden.png)

> Note: The `Text Visibility` property is only supported for QR Barcode.

Supported barcode types and their valid input values are listed in the [Supported Barcode Types](./../../report-items/barcode/supported-barcode-types/) section.

## General properties

### Name

`Name` property can be used to provide an unique name to the barcode item in the report.

### Appearance

The border style, color, width and background color properties are used to style the barcode and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

#### Border

Border properties are used to add or customize the border around a barcode item to visually separate it in the report design. To set border properties to the tablix item using properties panel refer [Border Properties](./../../compose-report/common-properties/#border-properties) section.

#### Background color

Using the background color property you can color the barcode background. To set background color using properties panel refer [Background color](./../../compose-report/common-properties/#background-color) section.![Barcode item with properties view](/static/assets/on-premise/images/report-designer/report-items/barcode/appearance.png)

### Position

Position property is used to set the width, height, left and top position of the barcode in the report design. To handle these properties using properties panel refer [Position](./../../compose-report/common-properties/#position) section.

### Visibility

Visibility property is used to conditionally show or hide the barcode report item on report preview or export action. To set visibility of barcode item using properties panel refer [Visibility](./../../compose-report/common-properties/#visibility) section.

### Miscellaneous

#### Tooltip

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for barcode item using properties panel refer [Tooltip](./../../compose-report/common-properties/#tooltip) section.

#### Bookmark

Bookmark links allows the users to navigate to different parts of a SSRS report. You can add bookmarks to each textbox, image, table or chart or to the unique group values displayed in a tablix which can direct the users to specified locations in the report. The value of bookmark property can be your own strings or an expression. Refer [Bookmark](./../../compose-report/bookmark/) section to configure bookmark in the report design.

You can set the static or dynamic text as value for bookmark property. To set and reset dynamic text, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## Set expression

An expression can be set to few properties of the tablix report item to process the property values based on expressions. To set expressions to the tablix report item properties, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## Reset expression

To `Reset` the expression applied to a property, refer [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## Advanced properties

Few properties of the tablix report items contains nested properties. To open and handle nested properties, refer [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.