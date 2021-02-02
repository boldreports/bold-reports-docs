---
title: TextBox Report Item | Web ReportDesigner | Bold Reports
description: This section describes about textbox report item and its properties to design a report using textbox in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, textbox, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# TextBox

TextBox can be used to display static text for titles, highlighting key information, descriptions and labels or dynamic text set based on expressions.

## Add a textbox to the report

1. The textbox report item is listed in the item panel under the `Basic Items` category.
![Textbox listed in item panel](/static/assets/on-premise/images/report-designer/report-items/textbox/textbox-in-item-panel.png)
2. Drag and drop the textbox report item into the design area from the item panel.
![Drag and drop textbox report item into design area](/static/assets/on-premise/images/report-designer/report-items/textbox/drag-and-drop-textbox.png)
3. Once you drop the textbox item into design area, respective textbox properties will be listed in the properties panel.
![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/textbox-item-with-properties-view.png)

## Properties

In textbox report item you can view and set properties for the textbox report item and each content in the textbox. (i.e Paragraph).

To view and edit overall textbox properties select the textbox report item in design area. Now, the textbox properties will be listed in the properties panel like below.

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/textbox-properties.png)

To view and edit the selected text properties, focus inside the text area. Now, the selected text properties will be listed in the properties panel like below.

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/selected-text-properties.png)

Refer the [Properties panel](./../../compose-report/properties-panel/) section before proceeding with the below properties.

### Common properties

The following are the common properties for textbox and selected text:

#### Basic Settings

<span style="font-weight:bold">Font</span>

The font family, font size, font color, font style, and font weight properties are used to style the content in the textbox. You can apply these font properties to the over all textbox content or specific content in a textbox.

<span style="font-weight:bold">Font Family</span>

Supported font family names are listed in the drop-down under `Basic Settings` category. To change the `Font Family` of the textbox, choose the required font family from the drop-down list.

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/font-family-drop-down.png)

<span style="font-weight:bold">Font Color</span>

To set font color for the content in the textbox, click on the color palette icon and choose the required color in the `Color Palette`

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/font-color-picker.png)

<span style="font-weight:bold">Font Size</span>

Font size property allows you to increase the size of the text in the textbox. You can increase the font size using the numeric drop-down highlighted in below snap.

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/font-size-numeric-drop-down.png)

<span style="font-weight:bold">Font Styles</span>

To change font style of the content in textbox, choose the required font style in the `Font Style` drop-down list. Following are the supported font styles:

* Default
* Normal
* Italic

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/font-style-drop-down.png)

<span style="font-weight:bold">Font Weight</span>

To change the font weight of the content in textbox, choose the required type of font weight property from the drop-down list.

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/font-weight-property.png)

<span style="font-weight:bold">Text Decoration </span>

Text decoration property sets the appearance of decorative lines on text.

* **None** - Produces no text decoration.
* **Underline** - Each line of text is underlined.
* **Overline** - Each line of text has a line above it.
* **Line-through** - Each line of text has a line through the middle.

Underline and Overline decorations are positioned under the text, line-through over it.

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/text-decoration.png)

<span style="font-weight:bold">Format </span>

Format property is used format an entire text box or specific text, numbers, expressions, or fields within the text box. To open the format dialog click on the icon highlighted in the below snap or you can type the format directly in the textbox.

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/format-button.png)

To apply **Number**, **Currency**, **Date**, **Time**, **Scientific**, **Percentage** or **Custom** formats using format dialog follow the steps provided in [Format](./../../compose-report/format-data/#format) section.

#### Link

You can specify a hyperlink inside the textbox content to link another report. Select the `Enable  Link` checkbox, to enable the sub properties.

![Border width](/static/assets/on-premise/images/report-designer/report-items/textbox/report-linking.png)

To set the hyperlink to a selected text or over all textbox follow the steps provided in [Linking](./../../compose-report/link-data/#report-linking) section.

### Textbox properties

The following properties are only specific to the over all textbox item:

#### Alignment

<span style="font-weight:bold">Text Alignment </span>

You can align the textbox content or specific content in a textbox using the `Text Alignment` property. Choose the respective text alignment property from the drop-down list to align the text in `Left`, `Right`, or `Center` positions.

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/text-alignment-property.png)

<span style="font-weight:bold">Vertical alignment</span>

You can align the textbox content or specific content in a textbox in `Top`, `Middle`, and `Bottom` positions. Choose the required vertical alignment property from the drop-down list.

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/vertical-alignment.png)

<span style="font-weight:bold">Line height</span>

Line height property is used to increase space between lines of a textbox. Increase or decrease the values in numeric dropdown to set the line height.

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/line-height-property.png)

#### Appearance

The border style, color, width and background color properties are used to style the textbox and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Textbox appearance settings](/static/assets/on-premise/images/report-designer/report-items/textbox/textbox-appearance.png)

<span style="font-weight:bold">Background color</span>

Using the background color property you can color the textbox background. To set background color using properties panel refer [Background color](./../../compose-report/common-properties/#background-color) section.

<span style="font-weight:bold">Border</span>

Border properties are used to add or customize the border around a textbox item to visually separate items in the report design. To set border properties to the textbox item using properties panel refer [Border Properties](./../../compose-report/common-properties/#border-properties) section.

#### Position

Position property is used to set the width, height, left and top position of the textbox in the report design. To handle these properties using properties panel refer [Position](./../../compose-report/common-properties/#position) section.

#### Data Element

Data element can be used to control visibility of a report item when exporting the report in XML format. The Data element properties are listed in the properties panel, under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/textbox/data-element-properties.png)

<span style="font-weight:bold">Name</span>

You can assign a custom name for the textbox element using the `Name` field. The textbox will be exported with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/textbox/name-property.png)

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

<span style="font-weight:bold">Output</span>

On exporting the report, the visibility of the textbox can be controlled using the `Output` property. Choosing the following options for the `Output` property will perform the respective operations:

* **Auto** or **Output** - Exports the textbox report item
* **NoOutput** - Does not export the textbox report item

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/textbox/output-property.png)

<span style="font-weight:bold">Style</span>

The `Style` property can be used to set the export type of the textbox report item. Choosing **Auto** or **Element** style will export the textbox as an XML element. The **Attribute** style will export the textbox as an XML attribute.

![Data element style property](/static/assets/on-premise/images/report-designer/report-items/textbox/style-property.png)

#### Visibility

Visibility property is used to conditionally show or hide the textbox report item on report preview or export action. To set visibility of textbox item using properties panel refer [Visibility](./../../compose-report/common-properties/#visibility) section.

#### Miscellaneous

![Visibility property](/static/assets/on-premise/images/report-designer/report-items/textbox/miscellenous-property.png)

<span style="font-weight:bold">Can Grow</span>

Enable this property to expand the Textbox height vertically based on their content while previewing the text.

<span style="font-weight:bold">Can Shrink</span>

Enable this property to shrink the Textbox height vertically based on their content while previewing the text.

<span style="font-weight:bold">Custom Attributes</span>

This property can be used to set the values for textbox custom properties. To create and assign values for custom properties using properties panel refer [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.

<span style="font-weight:bold">Tooltip</span>

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for textbox report item using properties panel refer [Tooltip](./../../compose-report/common-properties/#tooltip) section.

#### Localization

<span style="font-weight:bold">Direction</span>

The **Direction** property can be used to configure the content rendering direction for textbox report item. On preview, content in the textbox will be rendered based on the provided direction. You can set either Right-To-Left or Left-To-Right direction.

![Text direction](/static/assets/on-premise/images/report-designer/report-items/textbox/direction.png)

By default, content renders in Left-To-Right direction.

**Left-To-Right** report preview:

![Left-To-Right direction](/static/assets/on-premise/images/report-designer/report-items/textbox/left-to-right.png)

**Right-To-Left** report preview:

![Right-To-Left direction](/static/assets/on-premise/images/report-designer/report-items/textbox/right-to-left.png)

<span style="font-weight:bold">Language</span>

The **Language** property can be used to set the locale on a textbox which determines the default formats for displaying report data in textbox. Select the required language in the **Language** property dropdown.

![Report Language](/static/assets/on-premise/images/report-designer/report-items/textbox/language.png)

> The language property on a text box overrides the language property on the report.

### Selected Text properties

### Markup Type

Markup type property can be used to render the selected text as plain text or HTML-formatted text. Select the required text and choose the type in `Markup Type` property dropdown.

![Textbox Markup Type](/static/assets/on-premise/images/report-designer/report-items/textbox/markup-type.png)

**Plain Text** - Displays the selected text as simple text and the HTML will be treated as literal text.

**HTML** - Displays the selected text as HTML. If the expression value or values from dataset field contains a valid  HTML tags, these tags will be rendered as HTML. Refer [Add HTML in to a report](./../../report-items/textbox/add-html-in-to-a-report/) section to import HTML using textbox.

#### Paragraph Settings

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/paragraph-settings.png)

<span style="font-weight:bold">Text Alignment</span>

You can align the textbox content or specific content in a textbox using the `Text Alignment` property. Choose the required text alignment property from the drop-down list.

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/paragraph-settings-text-alignment.png)

<span style="font-weight:bold">Indent</span>

To indent the text in the paragraph you can use this property. Increase/decrease the left and right indent in the text box using the numeric drop-down.

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/indent-property.png)

<span style="font-weight:bold">Space</span>

Using this property you can add space before and after the paragraphs in the textbox.

![Textbox item with properties view](/static/assets/on-premise/images/report-designer/report-items/textbox/space-property.png)

## Set expression

An expression can be set to few properties of the textbox report item to process the property values based on expressions. To set expressions to the textbox report item properties, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## Reset expression

To `Reset` the expression applied to a property, refer [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## Advanced properties

Few properties of the textbox report contains nested properties. To open and handle nested properties, refer [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.

## Design RDL report using textbox

Refer [Design RDL report using textbox](./../../report-items/textbox/design-rdl-report-using-textbox/) section to learn how to position, style, format, link report, add hyperlink in a textbox.