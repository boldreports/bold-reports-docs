---
title: Map Legend | Web ReportDesigner | Bold Reports
description: This section describes how to enable and customize the legend in Map Report Item with the Bold Report Designer.
---

# Map Legend

A Legend can be used to provide valuable information for interpreting the meaning of colors on a map shapes. The **Legend** property under map allows you to toggle the visibility of legend in map and also customize the legend appearance in map design. This property is listed under the **Legend** category in the map properties.

![Map Title Position](/static/assets/on-premise/images/report-designer/report-items/map/legend/initial-state.png '#width=355px')

> The legend split the data range based on the shape color rules specified for respective map report item.

## Show or hide legend

To show/hide legend in the map surface, toggle the `Enable Legend` checkbox.

![Enable legend](/static/assets/on-premise/images/report-designer/report-items/chart/show-legend/show-legend-checkbox.png '#width=355px')

If you enable the `Enable Legend` checkbox, the map legend will be displayed in the right center position of map surface.

![Legend in map surface](/static/assets/on-premise/images/report-designer/report-items/map/legend/legend-in-map-surface.png '#width=355px')

You can also enable or disable the legend based on dynamic values, by using the `Expressions`. Refer [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

## Customize legend

Once you enable legend, other properties required for legend customization will start displaying under **Legend** category.

![Legend properties](/static/assets/on-premise/images/report-designer/report-items/map/legend/legend-dependent-properties.png '#width=355px')

You can customize the legend appearance through these properties.

### Background color

Background color property can be used to set the background color for the legend area.

![Background color](/static/assets/on-premise/images/report-designer/report-items/map/legend/back-ground-color.png '#width=355px')

Now, the background color property will be applied to the legend area.

![Background color in design](/static/assets/on-premise/images/report-designer/report-items/map/legend/bg-color-in-design.png)

You can also apply background color based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

### Position

You can place the legend in different position inside the map surface using this property. Supported positioning patterns are listed in the `Position` drop-down.

![Legend position](/static/assets/on-premise/images/report-designer/report-items/map/legend/position.png '#width=425px')

By default the legend will be placed in `RightCenter` position. In the below snap, the legend is positioned at `LeftTop` position inside the map surface.

![Chart Types](/static/assets/on-premise/images/report-designer/report-items/map/legend/left-top-position.png '#width=410px')

### Title

You can customize the title text for legend using this property. By default, the text will be displayed as `Title`. Specify the required title text in the title property textbox and it will be displayed as map legend title in map design.

![Legend-title-text](/static/assets/on-premise/images/report-designer/report-items/map/legend/title.png)

You can also apply title text based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

#### Title font

You can customize the legend title text appearance through the properties provided in the `Advanced` menu of title property. Click on the square icon in the right side of the `Title` text field and click on `Advanced` option in the menu.

![Legend advanced menu](/static/assets/on-premise/images/report-designer/report-items/map/legend/advanced-menu.png '#width=385px')

Now, the title font properties will be displayed in the advanced options.

![Font properties](/static/assets/on-premise/images/report-designer/report-items/map/legend/font-properties.png '#width=385px')

You can also apply font properties based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
![Dynamic font values](/static/assets/on-premise/images/report-designer/report-items/map/legend/font-expression.png '#width=385px')

Legends automatically extend to show the legend title or legend text.

### Legend mode

Legend mode property can be used to set the mode for legend in the map surface.

![Legend mode](/static/assets/on-premise/images/report-designer/report-items/map/legend/mode.png '#width=455px')

Default mode groups the range and display legend as in below snap.

![Default mode](/static/assets/on-premise/images/report-designer/report-items/map/legend/default-mode.png)

Interactive mode displays the range in color scale.

![Interactive mode](/static/assets/on-premise/images/report-designer/report-items/map/legend/interactive-mode.png)