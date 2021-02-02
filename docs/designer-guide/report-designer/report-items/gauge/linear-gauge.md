---
title: Linear Gauge Report Item | Web ReportDesigner | Bold Reports
description: This section describes about gauge report item and its properties to design a report using gauge in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reporting
---

# Linear gauge

Linear gauges are rectangular in shape and oriented horizontally or vertically. These can be placed inside the `Tablix` and `Matrix`.

## Add a linear gauge to the report

1. The linear gauge report item is listed in the item panel under the `Deviation` category.
![Linear gauge item in item panel](/static/assets/on-premise/images/report-designer/report-items/gauge/linear-gauge/item-panel.png)
2. Drag the linear gauge report item into the design area from the item panel.
![Drag and drop linear gauge report item into design area](/static/assets/on-premise/images/report-designer/report-items/gauge/linear-gauge/item-drag.png)
3. After dropping the linear gauge item in the design area, the respective item properties will be listed in the properties panel.
![Linear gauge item with properties view](/static/assets/on-premise/images/report-designer/report-items/gauge/linear-gauge/designer-area.png)

## Properties

Refer to the [Properties panel](./../../../compose-report/properties-panel/) section before proceeding with the following properties:

### Basic settings

The border style, color, width, and background color properties are used to customize the appearance of a linear gauge in the report design. These properties are listed under the `Basic settings` category in the properties panel.

#### Border

Border properties are used to add or customize the border around an linear gauge item to visually separate items in the report design. To set border properties to a linear gauge item using properties panel,  refer to the [Border Properties](./../../../compose-report/common-properties/#border-properties) section.

#### Background color

Using the background color property, you can customize the background color of a linear gauge. To set the background color using properties panel, refer to the [Background color](./../../../compose-report/common-properties/#background-color) section.

### Data

#### Dataset

This property is used to assign the dataset to a linear gauge report item. The available datasets in the report will be listed in the `Dataset` property dropdown. You can choose the desired dataset from the dropdown.

![Data category](/static/assets/on-premise/images/report-designer/report-items/gauge/linear-gauge/dataset.png)

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section to add dataset to your report.

#### Type

This property is used to select the type of linear gauge report item. You can select `Horizontal`, `Vertical`, or `Auto` from the dropdown.

![Linear Gauge Type](/static/assets/on-premise/images/report-designer/report-items/gauge/linear-gauge/type.png)

* `Horizontal`: Displays the linear gauge horizontally.

* `Vertical`: Displays the linear gauge vertically.

* `Auto`: Displays the linear gauge according to the width and height of the linear gauge.

#### Value

This property is used to assign the `pointer value` of a linear gauge. You can also set the pointer value based on dynamic values using [expressions](./../../../compose-report/properties-panel/#set-expression).

#### Range

This property is used to assign `minimum` and `maximum` values of a linear gauge. You can also set the value for minimum and maximum properties based on dynamic values using [expressions](./../../../compose-report/properties-panel/#set-expression).

#### Interval

This property is used to assign `interval` value between the [scale labels](./../../../report-items/gauge/linear-gauge/#labels). You can also set the interval property value based on dynamic values using [expressions](./../../../compose-report/properties-panel/#set-expression).

### Pointer

Using this property, the pointer placement, type, marker style, marker length, width, and color can be customized in the linear gauge design.

#### Enable pointer

To show or hide the pointer in linear gauge, toggle the `Enable Pointer` checkbox.

#### Placement

Pointer placements can be `Inside`, `Outside`, or `Cross`. You can select any placement from the dropdown.

#### Type

You can select the pointer type, `Marker` or `Bar`, from the dropdown. If you select the `Marker` option, `Marker Style` and `Marker Length` properties will be visible in the property panel.

##### Marker style

You can select a marker style from the dropdown. The different styles are `Circle`, `Rectangle`, `Triangle`, or `Diamond`.

The following diagram represents the linear gauge with the `Marker` pointer type, `Diamond` marker style, and `Cross` pointer placement.

![Pointer Type](/static/assets/on-premise/images/report-designer/report-items/gauge/linear-gauge/pointer-property.png)

##### Marker length

This property is used to assign the `pointer marker length` value. You can also set the marker length property value based on dynamic values using [expressions](./../../../compose-report/properties-panel/#set-expression).

#### Width

This property is used to assign the `pointer width` value. You can also set the width property value based on dynamic values using [expressions](./../../../compose-report/properties-panel/#set-expression).

#### Color

Using the color property, you can customize the `pointer color` of a linear gauge.

### Scale

#### Width

This property is used to assign the `scale width` value. You can also set the width property value based on dynamic values using [expressions](./../../../compose-report/properties-panel/#set-expression).

#### Color

Using the color property, you can customize the `scale color` of a linear gauge.

#### Reverse direction

By clicking the `Reverse Direction` checkbox you can reverse the scale direction from maximum to minimum.

![Scale](/static/assets/on-premise/images/report-designer/report-items/gauge/linear-gauge/scale.png)

#### Labels

To show or hide the scale labels in a linear gauge, toggle the `Label` checkbox.

You can customize the scale label in the `Advanced Options` menu. To open and handle the nested properties of labels, refer to the [Advanced Properties](./../../../compose-report/properties-panel/#advanced-properties) section.![Scale Labels](/static/assets/on-premise/images/report-designer/report-items/gauge/linear-gauge/labels-advanced-options.png)

Using these properties, the scale label font color, font family, font size, and font style can be customized in the linear gauge design.

##### Show labels at the end

To show or hide the scale labels at the end of the scale, toggle the `Show Labels At End` checkbox.

##### Placement

Scale label placement can be `Inside`, `Outside`, or `Cross`. You can select an option from the dropdown.

### Tick mark

This property is used to customize major and minor ticks of a linear gauge.

#### Major tick and minor tick

To show or hide major and minor ticks in a scale, toggle the `Major Tick` and `Minor Tick` checkbox.

You can customize major and minor ticks in the `Advanced Options` menu. To open and handle the nested properties of major and minor ticks, refer to the [Advanced Properties](./../../../compose-report/properties-panel/#advanced-properties) section.![Major Tick](/static/assets/on-premise/images/report-designer/report-items/gauge/linear-gauge/major-tick.png)

Using this property, you can customize the major and minor ticks interval, color, length, and width.

#### Major tick placement and minor tick placement

Major tick and minor tick placement can be `Inside`, `Outside`, or `Cross`. The placement can be selected from the dropdown.

### Range

Using this property, the range placement, start value, end value, start width, end width, and color can be customized in the linear gauge design.

#### Enable range

To show or hide the range in a linear gauge, toggle the `Enable Range` checkbox.

![Enable Range](/static/assets/on-premise/images/report-designer/report-items/gauge/linear-gauge/enable-range.png)

#### Placement

Range placement can be `Inside`, `Outside`, or `Cross`. You can select any option from the dropdown.

#### Range

This property is used to assign the range `start` and `end` values of the linear gauge. You can also set the start and end properties value based on dynamic values using [expressions](./../../../compose-report/properties-panel/#set-expression).

#### Width

This property is used to assign the range `start width` and `end width` values of the linear gauge. You can also set the start and end width properties value based on dynamic values using [expressions](./../../../compose-report/properties-panel/#set-expression).

#### Color

Using the color property, you can customize the `range color` of a linear gauge.

### Position

The position property is used to set the width, height, left, and top positions of a linear gauge in the report design. To handle these properties using properties panel, refer to the [Position](./../../../compose-report/common-properties/#position) section.

### Data Element

Data element can be used to control visibility of a report item when exporting the report in XML format. The Data element properties are listed in the properties panel, under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/tablix/data-element-properties.png)

<span style="font-weight:bold">Name</span>

You can assign a custom name for the linear gauge element using the `Name` field. The linear gauge will be exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/tablix/name-property.png)

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

<span style="font-weight:bold">Output</span>

On exporting the report, the visibility of the linear gauge can be controlled using the `Output` property. Choosing the following options for the `Output` property will perform the respective operations:

* **Auto** or **Output** - Exports the linear gauge report item
* **NoOutput** - Does not export the linear gauge report item

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/tablix/output-property.png)

### Visibility

The visibility property is used to conditionally show or hide the linear gauge report item on report preview or export action. To set visibility of a linear gauge item using properties panel, refer to the [Visibility](./../../../compose-report/common-properties/#visibility) section.

### Miscellaneous

#### Page name

The page name property is used to name the first worksheet of the Excel workbook, when exporting the report to excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/gauge/page-name.png)

You can set the static or dynamic text as page name. To set and reset dynamic text, refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section.

#### Custom attributes

This property can be used to set the values for linear gauge custom properties. To assign values for custom properties using properties panel, refer to the [Custom Properties](./../../../compose-report/common-properties/#custom-properties) section.

<span style="font-weight:bold">Tooltip</span>

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for gauge report item using properties panel refer [Tooltip](./../../../compose-report/common-properties/#tooltip) section.