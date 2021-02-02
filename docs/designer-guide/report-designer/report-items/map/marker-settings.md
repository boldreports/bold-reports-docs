---
title: Map Marker Settings | Web ReportDesigner | Bold Reports
description: This section describes how to display and customize the markers in Map Report Item with the Bold Report Designer
---

# Marker settings

A marker identifies a location on a map. By default, a marker uses a standard icons. We can set background color, border, style, size and tooltip for it.

> When you apply any of the marker color rules or template rule, it will take precedence over basic marker settings.

## Define marker settings

Marker settings can be applied when you have matched the map shapes based on shape data and analytical data from a data set field or from a spatial data source field.

These properties are listed under **Marker Settings** in the map properties. To enable/disable marker in the map surface, toggle the `Enable Marker` checkbox.

![Map Marker](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/initial.png)

Once you enable the marker, other properties required for defining marker will start displaying under **Marker Settings** category and by default **Circle** marker will be applied on the map surface as shown in below,

![Enable marker](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/enable-marker.png)

### Background color

Background color property can be used to set the background color for the marker icons in map surface.

![Shape Background color](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/bg-color.png)

Now, the background color property will be applied to the map markers.

![Background color in design](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/bg-color-design.png)

You can also apply background color based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
> When you apply any of the marker color rules, it will take precedence over basic marker settings.

### Border

Border property can be used to draw border around each marker icons in the map surface. You can set color and size of the border using this property. The border will be applied around the map marker icons as shown in below image,

![Shape border in design](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/border-design.png)

You can also set border properties based on dynamic values, by using the `Expressions`. Refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
![Shape border expression](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/expression-menu.png)

### Style

This property can be used to set the style of marker icon. The supported standard marker icon types are listed in the `Style` property drop-down,

![Style](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/style.png)

Select the required marker icon style in this property, it will be applied on map surface like below.

![Style design](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/style-design.png)

You can also set marker properties based on dynamic values, by using the `Expressions`. Refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
![Style expression](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/style-expression.png)

### Size

This property can be used to define the size for marker icons.

![Size](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/size.png)

You can also set marker properties based on dynamic values, by using the `Expressions`. Refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
![Size expression](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/style-expression.png)

### Tooltip

You can configure a tooltip for marker icons using the `ToolTip` property. It can be used to display information, such as descriptive text or data related to the specific marker shape. When you hover over the each marker icon in a rendered report, information will be shown in the tooltip.

You can enter a static text or set an expression that evaluates to a value. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
![Set dynamic value for tooltip](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/tooltip.png)