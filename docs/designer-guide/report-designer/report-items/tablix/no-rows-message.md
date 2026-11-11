---
title: Set a No Rows Message for an RDL Tablix | Bold Reports
description: Set a no rows message in the Bold Reports Web Report Designer to show static text when a tablix dataset returns no data, and format its font and alignment.
---

# Set a no rows message in the Bold Reports<sup>®</sup> Web Report Designer

In the Bold Reports<sup>®</sup> Web Report Designer, the No Rows property displays static text when a dataset returns empty or zero rows at run time. You set the message text and format its font, alignment, and spacing in the properties panel.

The following image shows the No Rows properties of a tablix.

![Tablix No rows message](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/no-rows.png '#width=315px')

## Font

The Bold Reports<sup>®</sup> no rows message Font properties set the font family, color, size, style, and weight of the message, as shown in the following image.

![Tablix No rows message](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/font-properties.png '#width=315px')

### Font Family

The `Font Family` property sets the font of the no rows message. The dropdown list shows the supported font family names. Choose the font family you need from the list.

![Font family](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/font-family.png '#width=315px')

### Font Color

The Font Color property sets the color of the no rows message. Click the color palette icon and choose the color you need in the `Color Palette`.

![Font color](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/font-color.png '#width=315px')

### Font Size

The Font size property increases the size of the text in the no rows message. You can increase the font size with the numeric dropdown highlighted in the following image.

![Font size](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/font-size.png '#width=315px')

### Font Styles

The `Font Style` property changes the font style of the no rows message. Choose the font style you need in the `Font Style` dropdown list. The supported font styles are:

* Default
* Normal
* Italic

![Font style](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/font-style.png '#width=315px')

### Font Weight

The Font Weight property changes the font weight of the no rows message. Choose the font weight type you need from the dropdown list.

![Font weight](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/font-weight.png '#width=315px')

## Message

The Bold Reports<sup>®</sup> no rows Message property holds the text shown to the user when the dataset returns empty or zero rows. Enter the text you need in the message textbox.

![Message](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/message.png '#width=315px')

To customize the message appearance, open the `Advanced Panel`.

![Advanced properties](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/advanced.png '#width=315px')

### Text Decoration

The Text decoration property sets the appearance of decorative lines on the no rows message text.

* **None** - Produces no text decoration.
* **Underline** - Each line of text is underlined.
* **Overline** - Each line of text has a line above it.
* **Line-through** - Each line of text has a line through the middle.

![Text decoration](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/text-decoration.png '#width=315px')

### Format

The Format property formats the text in the no rows message. See the [Format](../../../compose-report/format-data/) section to show the text in **Numbers**, **Currency**, **Date**, **Time**, **Scientific**, **Percentage**, and **Custom** formats.

![Text decoration](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/format.png '#width=315px')

### Line height

The Line height property increases the space between lines in the no rows message. Increase or decrease the value in the numeric dropdown to set the line height.

![Text decoration](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/line-height.png '#width=315px')

### Padding

The `Padding` property adds space around the no rows message content. Increase or decrease the values in the numeric dropdown to set the left, right, top, and bottom padding.

![Text decoration](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/padding.png '#width=315px')

### Text Align

The `Text align` property sets the horizontal alignment of a no rows message. You can align the text in the left, right, or center position. Choose the text align option you need from the dropdown list.

![Text align](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/text-align.png '#width=315px')

### Vertical Align

The `Vertical Align` property sets the vertical alignment of a no rows message. Choose the vertical align option you need from the dropdown list.

![Vertical align](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/vertical-align.png '#width=315px')

### Writing Mode

The Writing mode property sets the direction of the no rows message to `Horizontal`, `Vertical`, or `Rotate270`. Choose the writing mode you need from the dropdown.

**Horizontal**: Text will be horizontal, read left to right.

**Vertical**: Text will be vertical, read top to bottom.

**Rotate 270**: Text will be vertical, read bottom to top.

![Writing mode](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/writing-mode.png '#width=315px')

## How does the no rows message look in preview?

Bold Reports<sup>®</sup> applies all the customizations to the no rows message container when you preview the report.

![Preview](/static/assets/on-premise/images/report-designer/report-items/tablix/no-rows/preview.png '#width=315px')

## Frequently asked questions

### When does the no rows message appear?

The Bold Reports<sup>®</sup> no rows message appears when the dataset returns empty or zero rows at run time.

### Which font styles can I use for the no rows message?

The supported font styles are Default, Normal, and Italic.

## See also

* [Tablix report item](./../../../report-items/tablix/)
* [Format data](./../../../compose-report/format-data/)
* [Tablix member properties](./../../../report-items/tablix/member-properties/)
