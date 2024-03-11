---
title: Common properties | SSRS | Reporting | Bold Reports
description: This section describes the common properties that are applicable for all report layout or report items in Web Report Designer.
keywords: ejReportDesigner, reportdesigner, line, reportitem, border
---

# Common properties

This section describes the properties that are common for report layout and most of the report items in report designer.

## Name

In **Name** field, type the name for the report item or use the default name. For example, the default name created for textbox report item will be similar to `TextBox1`. This is common property for all the report items.

![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/name-property.png '#width=350px')

> You cannot set the name property for report, body, header and footer.

## Border properties

The Border property allows you to customize the borders around report layout and report items. It also provides you with a way of setting border width, color and style for each side of report layout and report items. There are three properties of a border you can change −

* The **border-color** specifies the color of a border.

* The **border-style** specifies whether a border should be solid, dashed line, double line, or dotted.

* The **border-width** specifies the width of a border.

The border properties are listed under the `Appearance` or `Basic Settings` category in the properties panel.

![Border properties](/static/assets/on-premise/images/report-designer/report-items/properties-panel/report-basic-settings.png '#width=350px')

> This property is not applicable for `Line` report item.

### Border style

The border-style property allows you to select one of the following styles of border -

* None - No border.

* Dashed - Border is a series of short lines.

* Dotted - Border is a series of dots.

* Double - Border is two solid lines.

* Solid - Border is a single solid line.

![Border style types](/static/assets/on-premise/images/report-designer/report-items/properties-panel/border-types.png '#width=350px')

### Border color

The border-color property is used to set colors to the border surrounding report layout or report items.

![Border color picker](/static/assets/on-premise/images/report-designer/report-items/properties-panel/border-color-picker.png '#width=300px')

### Border width

The border-width property helps you to set the width of the border. Increase or decrease the border width in the numeric drop-down provided for border property.

![Border width](/static/assets/on-premise/images/report-designer/report-items/properties-panel/border-width-drop-down.png '#width=350px')

### Setting borders for each side

You can individually set the border properties of the bottom, left, top and right sides of report layout or report items. The individual border options are provided under the `Advanced Properties` menu. Refer [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section to open/close advanced properties menu.
![Border advanced property](/static/assets/on-premise/images/report-designer/report-items/properties-panel/border-advanced-properties.png '#width=350px')

### Set border properties based on dynamic value

You can assign expressions to set the border properties based on dynamic values. Refer [Set Expressions](./../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
![Border expression property](/static/assets/on-premise/images/report-designer/report-items/properties-panel/border-expression-properties.png '#width=350px')

## Background color

The background color property can be used to set the background color of the report items or report. It is listed under the `Appearance` or `Basic Settings` category in the properties panel.

![Background color property](/static/assets/on-premise/images/report-designer/report-items/properties-panel/back-ground-color-picker.png '#width=350px')

> This property is not applicable for `Line` report item.

You can assign expressions to set the background property based on dynamic values. Refer [Set Expressions](./../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
![Background expression property](/static/assets/on-premise/images/report-designer/report-items/properties-panel/back-ground-color-expression-menu.png '#width=350px')

## Visibility

Enable or disable the visibility property to show or hide the report items on report preview or export action.

![Visibility property](/static/assets/on-premise/images/report-designer/report-items/textbox/visibility-property.png '#width=350px')

* Enable the checkbox to display the report item.

* Disable the checkbox to hide the report item.

 You can also set the visibility of report items based on dynamic values using expressions. Refer [Set Expressions](./../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
![Visiblity expression property](/static/assets/on-premise/images/report-designer/report-items/properties-panel/visibility-expression-property.png '#width=350px')

> This property is applicable only for report items.

## Position

To position and size the report items in the report design, the left, top, width and height properties are used. Those properties are listed under `Position` category in the properties panel.

![Position property](/static/assets/on-premise/images/report-designer/report-items/rectangle/position-property.png '#width=350px')

You can increase or decrease the values in the numeric drop-down of the respective property.

## Custom properties

Custom properties can be used to set the values for additional properties of report items or whole report that are not available in the properties pane. It is listed under the `Miscellaneous` category in the properties panel.

![Custom properties](/static/assets/on-premise/images/report-designer/report-items/properties-panel/custom-properties.png '#width=350px')

Click on the `Set Attributes...` button to open `Custom Attributes` dialog.

![Custom properties dialog](/static/assets/on-premise/images/report-designer/report-items/properties-panel/custom-properties-dialog.png '#width=400px')

Click on the `ADD` button to define value for custom property. In the `Name` field provide property name and in value field assign the values.

![Assign custom property value](/static/assets/on-premise/images/report-designer/report-items/properties-panel/assign-custom-prop-value.png '#width=400px')

## Tooltip

You can configure a tooltip for report items using the `ToolTip` property, it is listed under the `Miscellaneous` category in the properties panel.

![Report item tooltip](/static/assets/on-premise/images/report-designer/report-items/properties-panel/tooltip.png)

It can be used to display information, such as descriptive text or data related to the specific report item. When you hover over the report item in a rendered report, information will be shown in the tooltip.

To configure tooltip for a report item, select the report item in design area. In properties panel set the tooltip value as shown below,

![Set value for tooltip](/static/assets/on-premise/images/report-designer/report-items/properties-panel/set-tooltip.png '#width=300px')

You can also set the tooltip of report items based on dynamic values using expressions. Refer [Set Expressions](./../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
![Set dynamic value for tooltip](/static/assets/on-premise/images/report-designer/report-items/properties-panel/tooltip-expression.png '#width=350px')

> This property is applicable only for report items.