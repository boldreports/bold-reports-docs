---
title: Design ssrs rdl report using subreport | Web Report Designer
description: Design ssrs rdl report using subreport report item, to insert one report inside the other report using web report designer.
keywords: ejReportDesigner, reportdesigner, subreport, reportitem, border
---

# Subreport

Subreport is used to embed another report inside the body of a main report. It allows to customize the subreport properties along report path, parameters.

## Properties

### Basic Settings

`Basic Settings` category contains `Report` and `Set Parameters` properties.

* `Report` property can be used to specify the report path of the subreport. Refer [Report Path](./../../compose-report/link-data/#report-path) section to set report path to this property.
* `Set Parameters` property can be used to pass parameters from the main report to the subreport. Refer [Set Parameters](./../../compose-report/link-data/#set-parameters) section to set parameters to the subreport.![subreport item basic settings](/static/assets/on-premise/images/report-designer/report-items/subreport/basic-settings.png)

### Appearance

`Appearance` property can be used to improvise the style of subreport layout. Border style, color, width properties are displayed under the `Appearance` category.
![subreport appearance](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-appearence.png)

#### Border

Border properties are used to add or customize the border around a subreport item to visually separate items in the report design. To set border properties to the subreport item using properties panel refer [Border Properties](./../../compose-report/common-properties/#border-properties) section.

### No Rows

No Rows property is used to display static text when dataset results with a empty or zero rows.

![subreport item norows property](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-property.png)

#### Font Family

Supported font family names are listed in the drop-down list, choose the required font family from the drop-down list to change the `Font Family` of the no rows message.

![Font family](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/font-family.png)

#### Font Color

To set font color for the no rows message, click on the color palette icon and choose the required color in the `Color Palette`.

![Font color](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/font-color.png)

#### Font Size

Font size property allows you to increase the size of the text in the no rows message. You can increase the font size using the numeric drop-down highlighted in below snap.

![Font size](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/font-size.png)

#### Font Styles

To change font style of the no rows message, choose the required font style in the `Font Style` drop-down list. Following are the supported font styles:

* Default
* Normal
* Italic

![Font style](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/font-style.png)

#### Font Weight

To change the font weight of the no rows message, choose the required type of font weight property from the drop-down list.

![Font weight](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/font-weight.png)

### Message

Provide the required text in the message textbox, the given message will be displayed to the user when dataset results with empty or zero rows.

![Message](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/message.png)

To customize the message appearance, open the `Advanced Panel`.

![Advanced properties](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/advanced.png)

#### Text Decoration

Text decoration property sets the appearance of decorative lines on text.

* **None** - Produces no text decoration.
* **Underline** - Each line of text is underlined.
* **Overline** - Each line of text has a line above it.
* **Line-through** - Each line of text has a line through the middle.

![Text decoration](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/text-decoration.png)

#### Format

Format property is used to format the given text in the no rows message. Refer [Format](./../../compose-report/format-data/#format) section to represent the text in **Numbers**, **Currency**, **Date**, **Time**, **Scientific**, **Percentage** and **Custom** formats.

![Text decoration](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/format.png)

#### Line height

Line height property is used to increase space between lines in given message. Increase or decrease the values in numeric dropdown to set the line height for no rows message.

![Text decoration](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/line-height.png)

#### Padding

`Padding` property is used to provide space around the no rows message content. Increase or decrease the values in numeric dropdown to set the left, right, top and bottom padding to the no rows message.

![Text decoration](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/padding.png)

#### Text Align

The `Text align` property is used to set the horizontal alignment of a no rows message. The text can be aligned in left, right, or center position. Choose the required text align property from the drop-down list as shown below.

![Text align](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/text-align.png)

### Vertical Align

The `Vertical Align` property is used to set the vertical alignment of a no rows message. Choose the required vertical align property from the drop-down list as shown below.

![Vertical align](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/vertical-align.png)

#### Writing Mode

Writing mode property represent the direction of the no rows message along `Horizontal`, `Vertical`, and `Rotate270`. Choose the required writing mode property from the drop-down.

**Horizontal**: Text will be horizontal, read left to right.

**Vertical**: Text will be vertical, read top to bottom.

**Rotate 270**: Text will be vertical, read bottom to top.

![Writing mode](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/writing-mode.png)

All the customizations will be applied to the no rows message container while previewing the report.

![Preview](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/preview.png)

### Position

Position property is used to set the width, height, left and top position of the subreport item in the report design. To handle these properties using properties panel refer [Position](./../../compose-report/common-properties/#position) section.![subreport item position](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-position.png)

### Data Element

Data element can be used to control visibility of a report item when exporting the report in XML format. The Data element properties are listed in the properties panel, under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/tablix/data-element-properties.png)

<span style="font-weight:bold">Name</span>

You can assign a custom name for the subreport element using the `Name` field. The subreport will be exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/tablix/name-property.png)

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

<span style="font-weight:bold">Output</span>

On exporting the report, the visibility of the subreport can be controlled using the `Output` property. Choosing the following options for the `Output` property will perform the respective operations:

* **Auto** or **Output** - Exports the subreport report item
* **NoOutput** - Does not export the subreport report item

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/tablix/output-property.png)

### Visibility

Visibility property is used to conditionally show or hide the subreport report item on report preview or export action. To set visibility of subreport item using properties panel refer [Visibility](./../../compose-report/common-properties/#visibility) section.

### Miscellaneous

<span style="font-weight:bold">Keep together</span>

Keep together property is used to display the subreport item in a single page, on report preview or export action. Enable the checkbox to keep the content in single page or it will span across multiple pages.

![subreport item keep together](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-keep-together.png)

<span style="font-weight:bold">Custom attributes</span>

This property can be used to set the values for subreport custom properties. To create and assign values for custom properties using properties panel refer [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.

#### Document Map

A document map is a navigational feature that displays a separate side pane with set of navigational links in hierarchical structure when you view a report. A user can click the content in the list, to navigate to the report page that displays that item. Refer [Document Map](./../../compose-report/document-map/) section to configure document map in the report design.

You can set the static or dynamic text as value for document map property. To set and reset dynamic text, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

#### Bookmark

Bookmark links allows the users to navigate to different parts of a SSRS report. You can add bookmarks to each textbox, image, table or chart or to the unique group values displayed in a tablix which can direct the users to specified locations in the report. The value of bookmark property can be your own strings or an expression. Refer [Bookmark](./../../compose-report/bookmark/) section to configure bookmark in the report design.

You can set the static or dynamic text as value for bookmark property. To set and reset dynamic text, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

<span style="font-weight:bold">Tooltip</span>

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for sub-report item using properties panel refer [Tooltip](./../../compose-report/common-properties/#tooltip) section.

## Set expression

Properties panel allows you to specify expressions that can include two or more data fields and various functions. To set expressions for the report or report item properties refer [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## Reset expression

To `Reset` the property value and expression, refer [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## Advanced properties

Few properties of the subreport report contains nested properties. To open and handle nested properties, refer [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.

## Design rdl report using subreport

Refer [Design rdl report using subreport](./../../report-items/subreport/design-rdl-report-using-subreport/) section to learn how to link report, set parameters, to customize the subreport properties.