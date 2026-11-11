---
title: Textbox Report Item Properties in RDL Reports | {{site.productName}}
description: Use the {{site.productName}} Web Report Designer textbox to show static or dynamic text in RDL reports, and set its font, format, alignment, links, and markup.
keywords: ejReportDesigner, reportdesigner, textbox, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# TextBox report item in {{site.productNameTM}}

The {{site.productNameTM}} TextBox report item displays static text for titles, key information, descriptions, and labels. It also displays dynamic text set from expressions in the Web Report Designer.

## How do I add a textbox to the report?

To add a {{site.productNameTM}} textbox to your report in the Web Report Designer, follow these steps:

1. Find the textbox report item in the item panel under the `Basic Items` category.
   ![Textbox listed in item panel](/static/images/report-designer/report-items/textbox/textbox-in-item-panel.png '#width=145px')
2. Drag and drop the textbox report item from the item panel into the design area.
   ![Drag and drop textbox report item into design area](/static/images/report-designer/report-items/textbox/drag-and-drop-textbox.png '#width=410px')
3. After you drop the textbox item into the design area, the properties panel lists its textbox properties.
   ![Textbox item with properties view](/static/images/report-designer/report-items/textbox/textbox-item-with-properties-view.png)

## Properties

The {{site.productNameTM}} textbox report item lets you view and set properties for the whole textbox and for each piece of content in it (the paragraph).

To view and edit the overall textbox properties, select the textbox report item in the design area. The properties panel lists the textbox properties, as shown in the following image.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/textbox-properties.png)

To view and edit the selected text properties, focus inside the text area. The properties panel lists the selected text properties, as shown in the following image.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/selected-text-properties.png)

Before you set the following properties, read the [Properties panel](./../../compose-report/properties-panel/) section.

### Common properties

The textbox common properties apply to both the whole textbox and selected text. They are listed in the following sections.

#### Basic Settings

The textbox Basic Settings category holds the font, text decoration, and format properties.

<span style="font-weight:bold">Font</span>

The font family, font size, font color, font style, and font weight properties style the content in the textbox. You can apply these font properties to the whole textbox content or to specific content in a textbox.

<span style="font-weight:bold">Font Family</span>

The `Font Family` property sets the font of the textbox. The dropdown under the `Basic Settings` category lists the supported font family names. Choose the font family you need from the dropdown list.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/font-family-drop-down.png '#width=355px')

<span style="font-weight:bold">Font Color</span>

The Font Color property sets the color of the content in the textbox. Click the color palette icon and choose the color you need in the `Color Palette`.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/font-color-picker.png '#width=355px')

<span style="font-weight:bold">Font Size</span>

The Font size property increases the size of the text in the textbox. You can increase the font size with the numeric dropdown highlighted in the following image.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/font-size-numeric-drop-down.png '#width=355px')

<span style="font-weight:bold">Font Styles</span>

The `Font Style` property changes the font style of the content in the textbox. Choose the font style you need in the `Font Style` dropdown list. The supported font styles are:

* Default
* Normal
* Italic

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/font-style-drop-down.png '#width=355px')

<span style="font-weight:bold">Font Weight</span>

The Font Weight property changes the font weight of the content in the textbox. Choose the font weight type you need from the dropdown list.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/font-weight-property.png '#width=355px')

<span style="font-weight:bold">Text Decoration </span>

The Text decoration property sets the appearance of decorative lines on text.

* **None** - Produces no text decoration.
* **Underline** - Each line of text is underlined.
* **Overline** - Each line of text has a line above it.
* **Line-through** - Each line of text has a line through the middle.

Underline and Overline decorations are positioned under the text, line-through over it.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/text-decoration.png '#width=355px')

<span style="font-weight:bold">Format </span>

The Format property formats an entire text box or specific text, numbers, expressions, or fields within the text box. To open the format dialog, click the icon highlighted in the following image, or type the format directly in the textbox.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/format-button.png '#width=355px')

To apply **Number**, **Currency**, **Date**, **Time**, **Scientific**, **Percentage**, or **Custom** formats with the format dialog, follow the steps in the [Format](./../../compose-report/format-data/) section.

#### Link

The textbox Link property sets a hyperlink inside the textbox content to link another report. Select the `Enable  Link` checkbox to enable the sub properties.

![Textbox link property](/static/images/report-designer/report-items/textbox/report-linking.png '#width=355px')

To set the hyperlink on selected text or on the whole textbox, follow the steps in the [Linking](./../../compose-report/link-data/#report-linking) section.

### Textbox properties

The following {{site.productNameTM}} properties apply only to the whole textbox item.

#### Alignment

The textbox Alignment category holds the text alignment, vertical alignment, line height, and writing mode properties.

<span style="font-weight:bold">Text Alignment </span>

The `Text Alignment` property aligns the textbox content or specific content in a textbox. Choose the text alignment option from the dropdown list to align the text in the `Left`, `Right`, or `Center` position.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/text-alignment-property.png '#width=355px')

<span style="font-weight:bold">Vertical alignment</span>

The Vertical alignment property aligns the textbox content or specific content in a textbox in the `Top`, `Middle`, or `Bottom` position. Choose the vertical alignment option you need from the dropdown list.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/vertical-alignment.png '#width=355px')

<span style="font-weight:bold">Line height</span>

The Line height property increases the space between lines of a textbox. Increase or decrease the value in the numeric dropdown to set the line height.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/line-height-property.png '#width=355px')

<span style="font-weight:bold">Writing Mode</span>

The Writing mode property controls the direction of the text content in the textbox: `Horizontal`, `Vertical`, or `Rotate270`. Choose the writing mode you need from the dropdown.

**Horizontal**: Text is displayed horizontally, read from left to right.

**Vertical**: Text is displayed vertically, read from top to bottom.

**Rotate 270**: Text is displayed vertically, read from bottom to top.

![Textbox writing mode](/static/images/report-designer/report-items/textbox/writing-mode.png '#width=355px')

All the customizations are applied to the textbox when you preview the report.

![Textbox writing mode preview](/static/images/report-designer/report-items/textbox/writing-mode-preview.png '#width=355px')

#### Appearance

The textbox Appearance properties (border style, color, width, and background color) style the textbox and customize its look in the report design. You find these properties under the `Appearance` category in the properties panel.

![Textbox appearance settings](/static/images/report-designer/report-items/textbox/textbox-appearance.png '#width=355px')

<span style="font-weight:bold">Background color</span>

The Background color property colors the textbox background. To set the background color in the properties panel, see the [Background color](./../../compose-report/common-properties/#background-color) section.

<span style="font-weight:bold">Border</span>

The Border properties add or customize the border around a textbox item to separate items visually in the report design. To set border properties in the properties panel, see the [Border Properties](./../../compose-report/common-properties/#border-properties) section.

#### Position

The textbox Position property sets the width, height, left, and top position of the textbox in the report design. To set these properties in the properties panel, see the [Position](./../../compose-report/common-properties/#position) section.

#### Data Element

The textbox Data element properties control the visibility of a report item when you export the report in XML format. The properties panel lists them under the `Data Element` category.

![Data element properties](/static/images/report-designer/report-items/textbox/data-element-properties.png '#width=355px')

<span style="font-weight:bold">Name</span>

The `Name` field assigns a custom name to the textbox element. The textbox is exported with the name you provide.

![Data element name property](/static/images/report-designer/report-items/textbox/name-property.png '#width=355px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

<span style="font-weight:bold">Output</span>

The `Output` property controls the visibility of the textbox when you export the report. Each option for the `Output` property performs the following operation:

* **Auto** or **Output** - Exports the textbox report item.
* **NoOutput** - Does not export the textbox report item.

![Data element output property](/static/images/report-designer/report-items/textbox/output-property.png '#width=355px')

<span style="font-weight:bold">Style</span>

The `Style` property sets the export type of the textbox report item. Choosing **Auto** or **Element** style exports the textbox as an XML element. The **Attribute** style exports the textbox as an XML attribute.

![Data element style property](/static/images/report-designer/report-items/textbox/style-property.png '#width=355px')

#### Visibility

The textbox Visibility property conditionally shows or hides the textbox report item on report preview or export. To set the visibility of the textbox item in the properties panel, see the [Visibility](./../../compose-report/common-properties/#visibility) section.

#### Miscellaneous

The textbox Miscellaneous category holds the Can Grow, Can Shrink, Custom Attributes, Tooltip, Document Map, Bookmark, and Custom Style properties, as shown in the following image.

![Visibility property](/static/images/report-designer/report-items/textbox/miscellenous-property.png '#width=355px')

<span style="font-weight:bold">Can Grow</span>

Enable this property to expand the Textbox height vertically based on its content when you preview the text.

<span style="font-weight:bold">Can Shrink</span>

Enable this property to shrink the Textbox height vertically based on its content when you preview the text.

<span style="font-weight:bold">Custom Attributes</span>

The Custom Attributes property sets the values for textbox custom properties. To create and assign values for custom properties in the properties panel, see the [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.

<span style="font-weight:bold">Tooltip</span>

The Tooltip property displays informative text or a value when the user hovers over the report item in report preview. To set a tooltip for the textbox report item in the properties panel, see the [Tooltip](./../../compose-report/common-properties/#tooltip) section.

<span style="font-weight:bold">Document Map</span>

A document map is a navigational feature that displays a separate side pane with a set of navigational links in a hierarchical structure when you view a report. You click an item in the list to go to the report page that displays that item. To configure a document map in the report design, see the [Document Map](./../../compose-report/document-map/) section.

You can set static or dynamic text as the value of the document map property. To set and reset dynamic text, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

<span style="font-weight:bold">Bookmark</span>

Bookmark links let users navigate to different parts of an SSRS report. You can add bookmarks to each textbox, image, table, or chart, or to the unique group values displayed in a tablix, to direct users to specified locations in the report. The bookmark value can be your own string or an expression. To configure a bookmark in the report design, see the [Bookmark](./../../compose-report/bookmark/) section.

<span style="font-weight:bold">Custom Style</span>

The `Custom Style` property lets you use external CSS to style report items, giving more flexibility than the built-in styling options. Use this property to meet specific design requirements and keep styling consistent across multiple reports. For a step-by-step guide to setting up custom styles in your report, see the **How To** section of this guide.

![Custom style property](/static/images/report-designer/report-items/textbox/custom-style-property.png '#width=355px')

#### Localization

The textbox Localization category holds the Direction and Language properties.

<span style="font-weight:bold">Direction</span>

The **Direction** property configures the content rendering direction of the textbox report item. On preview, the textbox content renders in the direction you set. You can set either Right-To-Left or Left-To-Right direction.

![Text direction](/static/images/report-designer/report-items/textbox/direction.png '#width=355px')

By default, content renders in Left-To-Right direction.

**Left-To-Right** report preview:

![Left-To-Right direction](/static/images/report-designer/report-items/textbox/left-to-right.png '#width=410px')

**Right-To-Left** report preview:

![Right-To-Left direction](/static/images/report-designer/report-items/textbox/right-to-left.png '#width=410px')

<span style="font-weight:bold">Language</span>

The **Language** property sets the locale of a textbox, which determines the default formats for displaying report data in the textbox. Select the language you need in the **Language** property dropdown.

![Report Language](/static/images/report-designer/report-items/textbox/language.png '#width=385px')

> The language property on a text box overrides the language property on the report.

### Selected Text properties

The following {{site.productNameTM}} properties apply only to the selected text in a textbox.

### Markup Type

The Markup type property renders the selected text as plain text or HTML-formatted text. Select the text and choose the type in the `Markup Type` property dropdown.

![Textbox Markup Type](/static/images/report-designer/report-items/textbox/markup-type.png '#width=385px')

**Plain Text** - Displays the selected text as simple text and the HTML will be treated as literal text.

**HTML** - Displays the selected text as HTML. If the expression value or values from dataset field contains a valid  HTML tags, these tags will be rendered as HTML. See the [Add HTML in to a report](./../../report-items/textbox/add-html-in-to-a-report/) section to import HTML with a textbox.

#### Paragraph Settings

The selected text Paragraph Settings category holds the Text Alignment, Indent, and Space properties, as shown in the following image.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/paragraph-settings.png '#width=385px')

<span style="font-weight:bold">Text Alignment</span>

The `Text Alignment` property aligns the textbox content or specific content in a textbox. Choose the text alignment option you need from the dropdown list.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/paragraph-settings-text-alignment.png '#width=385px')

<span style="font-weight:bold">Indent</span>

The Indent property indents the text in the paragraph. Increase or decrease the left and right indent in the text box with the numeric dropdown.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/indent-property.png '#width=385px')

<span style="font-weight:bold">Space</span>

The Space property adds space before and after the paragraphs in the textbox.

![Textbox item with properties view](/static/images/report-designer/report-items/textbox/space-property.png '#width=385px')

## How do I set an expression on a textbox property?

You can set an expression on some properties of the {{site.productNameTM}} textbox report item so that their values are processed from expressions. To set expressions on textbox properties, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## How do I reset an expression?

To `Reset` an expression applied to a textbox property in the Web Report Designer, see the [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## How do I use advanced properties?

Some properties of the {{site.productNameTM}} textbox report item contain nested properties. To open and handle nested properties, see the [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.

## How do I design an RDL report using a textbox?

To learn how to position, style, and format a textbox, link a report, and add a hyperlink in the Web Report Designer, see the [Design RDL report using textbox](./../../report-items/textbox/design-rdl-report-using-textbox/) section.

## What are the textbox limitations?

The {{site.productNameTM}} textbox report item has the following limitations:

1. Pasting multiline text content from one TextBox report item into another TextBox report item will insert additional line breaks between each line of text.
2. In the designer, vertical text alignment won't be applied while editing text; it will only take effect after the text field loses focus. The alignment will function as usual in preview.

## Frequently asked questions

### Does the textbox language override the report language?

Yes. In {{site.productNameTM}}, the language property on a text box overrides the language property on the report.

### What is the default text direction of a textbox?

By default, textbox content renders in Left-To-Right direction.

## See also

* [Design RDL report using textbox](./../../report-items/textbox/design-rdl-report-using-textbox/)
* [Add HTML in to a report](./../../report-items/textbox/add-html-in-to-a-report/)
* [Format data](./../../compose-report/format-data/)
* [Tablix report item](./../../report-items/tablix/)
