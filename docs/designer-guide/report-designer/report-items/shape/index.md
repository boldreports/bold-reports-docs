---
title: Shape Report Item in Web Report Designer | {{site.productName}}
description: Add and configure the Shape report item in {{site.productName}} Web Report Designer, including shape type, rotation, fill color, line style, and star and arrow options.
keywords: ejReportDesigner, reportdesigner, shape, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Shape report item in {{site.productNameTM}}

The `Shape` report item in the {{site.productNameTM}} Web Report Designer is a graphical element used in a report layout. It provides visual structure, separates content areas, or enhances the design without directly displaying data.

If you prefer watching over reading, see this video for the shape report item:

`youtube: https://www.youtube.com/watch?v=X3t32kCiBQA`

## How do I add a shape to the report?

You add a shape in the {{site.productNameTM}} Web Report Designer from the item panel. Follow these steps:

1. Find the shape report item in the item panel under the `Shapes` category.
   ![Shape listed in item panel](/static/images/report-designer/report-items/shape/shape-item-in-item-panel.png '#width=215px')
2. Drag and drop the shape report item from the item panel into the design area.
   ![Drag and drop shape report item into design area](/static/images/report-designer/report-items/shape/drag-and-drop-shape.png '#width=355px')
3. After the shape item is placed in the design area, its properties are displayed in the properties panel.
   ![Adding Shape to design](/static/images/report-designer/report-items/shape/shape-properties.png '#width=440px')

### Common Shape Properties

The common properties of a shape report item in the {{site.productNameTM}} Web Report Designer are listed under the `Basic Settings` category in the properties panel.

![Shape item with properties view](/static/images/report-designer/report-items/shape/shape-basic-settings.png '#width=400px')

<span style="font-weight:bold">Shapes</span>

The `Shapes` drop-down menu lists the supported shapes.

![Shape Types](/static/images/report-designer/report-items/shape/shape-types-list.png '#width=400px')

Select a shape in the design area, and then choose a new shape type from the drop-down menu. The design updates accordingly.

![Shape types Dropdown](/static/images/report-designer/report-items/shape/shape-types-change.png '#width=385px')

The supported shape types are listed in the [Shape Types](./../../report-items/shape/shape-types/) section.

<span style="font-weight:bold">Rotation Angle</span>

The `Rotation Angle` property rotates a specific shape to a desired angle. The range is from 0 to 360 degrees.

![Shape Rotation Angle](/static/images/report-designer/report-items/shape/shape-angle.png '#width=385px')

<span style="font-weight:bold">Fill Color</span>

The `Fill Color` property sets a fill color for a particular shape report item.

![Shape fill color](/static/images/report-designer/report-items/shape/shape-fillcolor.png '#width=410px')

<span style="font-weight:bold">Line Style</span>

The `Line Style` property sets a stroke color, stroke width, and stroke style for a particular shape report item.

<span style="font-weight:bold">Line Style</span>

The `Line Style` property sets the border style for a particular shape report item.

![Shape border style](/static/images/report-designer/report-items/shape/shape-stroke-styles.png '#width=410px')

<span style="font-weight:bold">Line Color</span>

The `Line color` property sets the border color for a particular shape report item.

![Shape border color](/static/images/report-designer/report-items/shape/shape-line-color.png '#width=410px')

<span style="font-weight:bold">Line width</span>

The `Line width` property sets the border width for a particular shape report item.

![Shape border width](/static/images/report-designer/report-items/shape/shape-line-width.png '#width=410px')

### Additional properties for Star shape

The Star shape in the {{site.productNameTM}} Web Report Designer has two unique properties: `Star Count` and `Concavity`.

![Start shape properties](/static/images/report-designer/report-items/shape/star-shape-basic-settings.png '#width=400px')

<span style="font-weight:bold">Star Count</span>

The `Star Count` property specifies the number of points on the star. The range is between 3 and 8.

![Start shape count](/static/images/report-designer/report-items/shape/shape-star-count.png '#width=410px')

<span style="font-weight:bold">Concavity</span>

The `Concavity` property adjusts the depth of the star’s inner points. It ranges from 0.3 to 1.0, where lower values create sharper indents.

![Start shape concavity](/static/images/report-designer/report-items/shape/shape-star-concavity.png '#width=410px')

### Additional properties for Arrow shape

The Arrow shape in the {{site.productNameTM}} Web Report Designer has two unique properties: `Arrow Height` and `Arrow Width`.

![Arrow shape properties](/static/images/report-designer/report-items/shape/arrow-shape-basic-settings.png '#width=400px')

<span style="font-weight:bold">Arrow Height</span>

The `Arrow Height` property defines the height of the arrowhead, with a range from 0 to 100.

![Arrow shape height](/static/images/report-designer/report-items/shape/shape-arrow-height.png '#width=410px')

<span style="font-weight:bold">Arrow Width</span>

The `Arrow Width` property defines the width of the arrow's stem, with a range from 0 to 100.

![Arrow shape width](/static/images/report-designer/report-items/shape/shape-arrow-width.png '#width=410px')

## General properties

The general properties of the shape report item in the {{site.productNameTM}} Web Report Designer include name, appearance, link, position, visibility, and miscellaneous properties.

### Name

The `Name` property gives the shape item a unique name in the report.

### Appearance

The Appearance properties style the shape and customize its look in the report design. They include border style, color, width, and background color. These properties are listed under the `Appearance` category in the properties panel.

### Link

The Linking property lets you create interactive and user-friendly reports by adding actions such as **Hyperlink** and **Report Linking**. See [Linking](./../../compose-report/link-data/) to learn more about linking.
![Shape link property](/static/images/report-designer/report-items/gauge/linear-gauge/enable-link-action.png '#width=355px')

#### Border

The Border properties add or customize the border around a shape item to visually separate it in the report design. To set border properties in the properties panel, see [Border Properties](./../../compose-report/common-properties/#border-properties).

#### Background color

The Background color property sets the color of the shape's background. To set the background color in the properties panel, see [Background color](./../../compose-report/common-properties/#background-color).

### Position

The Position property defines the width, height, left, and top position of the shape in the report design. To handle these properties in the properties panel, see [Position](./../../compose-report/common-properties/#position).

### Visibility

The Visibility property conditionally shows or hides the shape report item on report preview or export. To set the visibility of the shape item in the properties panel, see [Visibility](./../../compose-report/common-properties/#visibility).

### Miscellaneous

The Miscellaneous category of the shape report item holds the tooltip, bookmark, and custom style properties.

#### Tooltip

The Tooltip property displays informative text or a value when the user hovers over the report item in report preview. To set a tooltip for the shape item in the properties panel, see [Tooltip](./../../compose-report/common-properties/#tooltip).

#### Bookmark

Bookmark links let users navigate to different parts of an SSRS report. You can add bookmarks to textboxes, images, tables, charts, or unique group values in a tablix to direct users to specified locations in the report. The value of the bookmark property can be either custom strings or expressions. See [Bookmark](./../../compose-report/bookmark/) to configure bookmarks in the report design.

You can set static or dynamic text as the value for the bookmark property. To set and reset dynamic text, see [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression).

#### Custom Style

The `Custom Style` property enables the application of external CSS for styling report items, providing enhanced flexibility beyond the built-in styling options. Use this feature to meet specific design requirements and keep styling consistent across multiple reports. For a step-by-step guide on setting up custom styles in your report, check the How To section of this guide.

![custom style property](/static/images/report-designer/report-items/shape/custom-style-property.png '#width=355px')

## Set expression

The {{site.productNameTM}} Web Report Designer lets you set an expression on a few properties of the shape report item, so the property values are processed based on expressions. To set expressions on the shape report item properties, see [Set Expression](./../../compose-report/properties-panel/#set-expression).

## Reset expression

To `Reset` the expression applied to a shape property in the {{site.productNameTM}} Web Report Designer, see [Reset Expression](./../../compose-report/properties-panel/#reset-expression).

## Advanced properties

A few properties of the shape report item in the {{site.productNameTM}} Web Report Designer contain nested properties. To open and handle nested properties, see [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties).

## Frequently asked questions

### What range does the shape Rotation Angle support?

The `Rotation Angle` property ranges from 0 to 360 degrees.

### How many points can a Star shape have?

The `Star Count` property ranges between 3 and 8 points.

## See also

* [Step-by-Step: Designing a Manufacturing Flowchart Report](./../../report-items/shape/design-ssrs-rdl-report-using-shapes/)
* [Shape types](./../../report-items/shape/shape-types/)
* [Shape use case examples](./../../report-items/shape/use-case-examples/)
