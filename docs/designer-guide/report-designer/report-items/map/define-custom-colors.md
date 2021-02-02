---
title: Map custom colors | Web ReportDesigner | Bold Reports
description: This section describes the steps involved in defining a custom colors sets to map in Bold Report Designer
---

# Define custom colors

This option can be used to define any number of colors sets based on your desired output. To define custom colors, follow these steps:

1. In the properties panel, under the **Shape Color Rule** or **Marker Color Rule**category, choose **Custom** in **Type** property. Now, the **Custom Colors** field will start displaying under the type drop-down.
![Map custom color field](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/custom-colors-field.png#width=540px)
2. Then click on the edit icon for the `Custom Colors` property.
![Edit analytical and spatial link](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/edit-icon.png#width=540px)
3. Now, you will be taken to the **Map Custom Colors** panel.
![Edit analytical and spatial link](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/panel.png#width=540px)
4. Click on the **ADD** icon in the top-right corner. A new field with option to set color will be added in the panel.
![Add new binding expression](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/add-field.png#width=540px)
5. Set the desired color in the color field.
![Set color](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/set-color.png#width=540px)
6. Click on the **Update**.

You can also set color based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel. Click on the square icon in the right side of the each field to open expression menu,
![Expression menu](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/expression-menu.png#width=540px)

Repeat the above steps to create multiple colors sets or edit existing color sets. For example, I have added seven colors in custom colors panel and it will be distributed on the map surface based on the distribution type and data range.

![Multiple colors](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/multiple-colors-in-design.png#width=540px)

If we apply the same to map markers the colors will be distributed on marker icon background on the distribution type and data range.

![Marker multiple colors](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/marker-color-rule.png#width=540px)

## Delete color set

To delete the existing color set, click on the edit icon for the `Custom Colors` property. Now, the available color sets will be listed **Map Custom Colors** panel. Click on the `Delete` icon in the right corner of required color set and click on the **Update**.

![Delete binding expression](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/delete-custom-colors.png#width=540px)