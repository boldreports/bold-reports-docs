---
title: Configure Map Marker Settings in RDL Reports | {{site.productName}}
description: Display and customize map markers in {{site.productName}} Web Report Designer by setting the background color, border, style, size, and tooltip for each marker icon.
---

# Map marker settings in {{site.productNameTM}} Web Report Designer

In the {{site.productNameTM}} Web Report Designer, a marker identifies a location on a map. By default, a marker uses standard icons. You can set the background color, border, style, size, and tooltip for it.

> When you apply any of the marker color rules or template rule, it will take precedence over basic marker settings.

## How do I define marker settings?

You can apply marker settings in the {{site.productNameTM}} Web Report Designer after you match the map shapes based on shape data and analytical data. The analytical data can come from a data set field or from a spatial data source field.

The marker properties are listed under **Marker Settings** in the map properties. To enable or disable markers on the map surface, toggle the `Enable Marker` checkbox.

![Map Marker](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/initial.png '#width=385px')

After you enable the marker, the other properties required for defining the marker appear under the **Marker Settings** category. By default, the **Circle** marker is applied on the map surface, as shown in the following image.

![Enable marker](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/enable-marker.png '#width=410px')

### Background color

The Background color property in the {{site.productNameTM}} Web Report Designer sets the background color for the marker icons on the map surface.

![Shape Background color](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/bg-color.png '#width=385px')

The background color is then applied to the map markers.

![Background color in design](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/bg-color-design.png '#width=355px')

You can also apply the background color based on dynamic values by using `Expressions`. See [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel.
> When you apply any of the marker color rules, it will take precedence over basic marker settings.

### Border

The Border property in the {{site.productNameTM}} Web Report Designer draws a border around each marker icon on the map surface. You can set the color and size of the border. The border is applied around the map marker icons, as shown in the following image.

![Shape border in design](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/border-design.png)

You can also set the border properties based on dynamic values by using `Expressions`. See [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel.
![Shape border expression](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/expression-menu.png '#width=355px')

### Style

The Style property in the {{site.productNameTM}} Web Report Designer sets the style of the marker icon. The supported standard marker icon types are listed in the `Style` property drop-down.

![Style](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/style.png '#width=385px')

Select the required marker icon style in this property. The style is applied on the map surface, as shown in the following image.

![Style design](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/style-design.png)

You can also set the marker properties based on dynamic values by using `Expressions`. See [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel.
![Style expression](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/style-expression.png '#width=385px')

### Size

The Size property in the {{site.productNameTM}} Web Report Designer defines the size of the marker icons.

![Size](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/size.png)

You can also set the marker properties based on dynamic values by using `Expressions`. See [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel.
![Size expression](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/style-expression.png '#width=355px')

### Tooltip

The `ToolTip` property in the {{site.productNameTM}} Web Report Designer configures a tooltip for marker icons. Use it to display information, such as descriptive text or data related to the specific marker shape. When you hover over each marker icon in a rendered report, the information appears in the tooltip.

You can enter static text or set an expression that evaluates to a value. See [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel.
![Set dynamic value for tooltip](/static/assets/on-premise/images/report-designer/report-items/map/marker-settings/tooltip.png '#width=355px')

## Frequently asked questions

### Which marker is applied by default when I enable markers?

The **Circle** marker is applied on the map surface by default when you enable the marker.

### Do marker color rules override basic marker settings?

Yes. When you apply any of the marker color rules or template rule, it takes precedence over basic marker settings.

## See also

* [Map marker rule](./../../../report-items/map/marker-rule/)
* [Map shape settings](./../../../report-items/map/shape-settings/)
* [Map properties](./../../../report-items/map/properties/)
