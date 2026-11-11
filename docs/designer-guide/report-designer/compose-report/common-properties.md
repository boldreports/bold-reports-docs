---
title: Common Report Item Properties in RDL Reports | {{site.productName}}
description: Set the name, border, background color, font, visibility, position, custom properties, and tooltip of report items in the {{site.productName}} Web Report Designer.
keywords: ejReportDesigner, reportdesigner, line, reportitem, border
---

# Common properties of report items in Web Report Designer

{{site.productNameTM}} Web Report Designer shares a set of common properties across the report layout and most report items. You use these properties to name, style, show or hide, position, and describe report items in RDL reports.

## Name

The **Name** field in the Web Report Designer sets the name of a report item. Type a name for the report item, or keep the default name. For example, the default name for a textbox report item is similar to `TextBox1`. Every report item has this property.

![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/name-property.png '#width=350px')

> You cannot set the name property for report, body, header and footer.

## Border properties

The Border property in the Web Report Designer customizes the borders around the report layout and report items. You can set the border width, color, and style for each side of the report layout and report items. You can change three border properties:

* The **border-color** specifies the color of a border.

* The **border-style** specifies whether a border should be solid, dashed line, double line, or dotted.

* The **border-width** specifies the width of a border.

The border properties are listed under the `Appearance` or `Basic Settings` category in the properties panel.

![Border properties](/static/assets/on-premise/images/report-designer/report-items/properties-panel/report-basic-settings.png '#width=350px')

> This property is not applicable for `Line` report item.

### Border style

The border-style property in the Web Report Designer lets you select one of the following border styles:

* None - No border.

* Dashed - Border is a series of short lines.

* Dotted - Border is a series of dots.

* Double - Border is two solid lines.

* Solid - Border is a single solid line.

![Border style types](/static/assets/on-premise/images/report-designer/report-items/properties-panel/border-types.png '#width=350px')

### Border color

The border-color property in the Web Report Designer sets the color of the border around the report layout or report items.

![Border color picker](/static/assets/on-premise/images/report-designer/report-items/properties-panel/border-color-picker.png '#width=300px')

### Border width

The border-width property in the Web Report Designer sets the width of the border. Increase or decrease the border width in the numeric drop-down provided for the border property.

![Border width](/static/assets/on-premise/images/report-designer/report-items/properties-panel/border-width-drop-down.png '#width=350px')

### How do I set borders for each side?

The Web Report Designer lets you set the border properties of the bottom, left, top, and right sides of the report layout or report items individually. The individual border options are under the `Advanced Properties` menu. To open or close the advanced properties menu, see [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties).

![Border advanced property](/static/assets/on-premise/images/report-designer/report-items/properties-panel/border-advanced-properties.png '#width=350px')

### How do I set border properties based on a dynamic value?

The Web Report Designer lets you assign expressions to set the border properties based on dynamic values. To open the set or reset expression menu in the properties panel, see [Set Expressions](./../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../compose-report/properties-panel/#reset-expression).

![Border expression property](/static/assets/on-premise/images/report-designer/report-items/properties-panel/border-expression-properties.png '#width=350px')

## Background color

The background color property in the Web Report Designer sets the background color of the report items or the report. It is listed under the `Appearance` or `Basic Settings` category in the properties panel.

![Background color property](/static/assets/on-premise/images/report-designer/report-items/properties-panel/back-ground-color-picker.png '#width=350px')

> This property is not applicable for `Line` report item.

You can assign expressions to set the background property based on dynamic values. To open the set or reset expression menu in the properties panel, see [Set Expressions](./../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../compose-report/properties-panel/#reset-expression).

![Background expression property](/static/assets/on-premise/images/report-designer/report-items/properties-panel/back-ground-color-expression-menu.png '#width=350px')

## Font Properties

The font family, font size, font color, font style, and font weight properties in the Web Report Designer style the text content in the selected report items.

### Font Family

The `Font Family` drop-down list in the Web Report Designer lists the supported font family names. Choose the required font family from the drop-down list to change the `Font Family` of the selected report items.

![Font family property](/static/assets/on-premise/images/report-designer/compose-report/common-properties/font-family-drop-down.png '#width=350px')

### Font Color

The font color property in the Web Report Designer sets the color of the text content in the selected report items. Click the color palette icon and choose the required color in the `Color Palette`.

![Font color property](/static/assets/on-premise/images/report-designer/compose-report/common-properties/font-color-picker.png '#width=350px')

### Font Size

The Font size property in the Web Report Designer increases the size of the text in the selected report items. You can increase the font size using the numeric drop-down shown in the following image.

![Font size property](/static/assets/on-premise/images/report-designer/compose-report/common-properties/font-size-drop-down.png '#width=350px')

### Font Styles

The `Font Style` drop-down list in the Web Report Designer changes the font style of text content in the selected report items. The supported font styles are:

* Default

* Normal

* Italic

![Font styles property](/static/assets/on-premise/images/report-designer/compose-report/common-properties/font-style-drop-down.png '#width=350px')

### Font Weight

The font weight drop-down list in the Web Report Designer changes the font weight of text content in the selected report items. The supported font weights are:

* Default

* Normal

* Light

* Bold

![Font weight property](/static/assets/on-premise/images/report-designer/compose-report/common-properties/font-weight-drop-down.png '#width=350px')

You can assign expressions to set the font properties based on dynamic values. To open the set or reset expression menu in the properties panel, see [Set Expressions](./../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../compose-report/properties-panel/#reset-expression).

![Font properties expression 1](/static/assets/on-premise/images/report-designer/compose-report/common-properties/font-properties-expression-1.png '#width=350px')

![Font properties expression 2](/static/assets/on-premise/images/report-designer/compose-report/common-properties/font-properties-expression-2.png '#width=350px')

## Visibility

The visibility property in the Web Report Designer shows or hides report items on report preview or export. Enable or disable the property as follows.

![Visibility property](/static/assets/on-premise/images/report-designer/report-items/textbox/visibility-property.png '#width=350px')

* Enable the checkbox to display the report item.

* Disable the checkbox to hide the report item.

You can also set the visibility of report items based on dynamic values using expressions. To open the set or reset expression menu in the properties panel, see [Set Expressions](./../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../compose-report/properties-panel/#reset-expression).

![Visiblity expression property](/static/assets/on-premise/images/report-designer/report-items/properties-panel/visibility-expression-property.png '#width=350px')

> This property is applicable only for report items.

## Position

The left, top, width, and height properties in the Web Report Designer position and size the report items in the report design. These properties are listed under the `Position` category in the properties panel.

![Position property](/static/assets/on-premise/images/report-designer/report-items/rectangle/position-property.png '#width=350px')

You can increase or decrease the values in the numeric drop-down of the respective property.

## Custom properties

Custom properties in the Web Report Designer set values for additional properties of report items, or of the whole report, that are not available in the properties pane. They are listed under the `Miscellaneous` category in the properties panel.

![Custom properties](/static/assets/on-premise/images/report-designer/report-items/properties-panel/custom-properties.png '#width=350px')

To define a custom property:

1. Click the `Set Attributes...` button to open the `Custom Attributes` dialog.

    ![Custom properties dialog](/static/assets/on-premise/images/report-designer/report-items/properties-panel/custom-properties-dialog.png '#width=400px')

2. Click the `ADD` button to define a value for the custom property.

3. In the `Name` field, provide the property name. In the value field, assign the values.

    ![Assign custom property value](/static/assets/on-premise/images/report-designer/report-items/properties-panel/assign-custom-prop-value.png '#width=400px')

## Tooltip

The `ToolTip` property in the Web Report Designer configures a tooltip for report items. It is listed under the `Miscellaneous` category in the properties panel.

![Report item tooltip](/static/assets/on-premise/images/report-designer/report-items/properties-panel/tooltip.png)

A tooltip displays information, such as descriptive text or data related to the specific report item. When you hover over the report item in a rendered report, the tooltip shows the information.

To configure a tooltip for a report item:

1. Select the report item in the design area.

2. In the properties panel, set the tooltip value.

    ![Set value for tooltip](/static/assets/on-premise/images/report-designer/report-items/properties-panel/set-tooltip.png '#width=300px')

You can also set the tooltip of report items based on dynamic values using expressions. To open the set or reset expression menu in the properties panel, see [Set Expressions](./../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../compose-report/properties-panel/#reset-expression).

![Set dynamic value for tooltip](/static/assets/on-premise/images/report-designer/report-items/properties-panel/tooltip-expression.png '#width=350px')

> This property is applicable only for report items.

## See also

* [Properties panel](./../../compose-report/properties-panel/)
* [Format data](./../../compose-report/format-data/)
* [Layout ordering](./../../compose-report/layout-ordering/)
