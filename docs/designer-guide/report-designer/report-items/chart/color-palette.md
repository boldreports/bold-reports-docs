---
title: Chart Color Palette | Web ReportDesigner | Bold Reports
description: This section describes how to customize the color aplette in Chart Report Item with the Bold Report Designer
keywords: ejReportDesigner, reportdesigner, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Chart Color Palette

Color palette property can be used to customize the chart series color. You can change the color palette for a chart series by choosing from a predefined set of color palettes or defining a custom palette. The **Color Palette** property is listed under the `Chart Area` category in the chart properties panel.

![Color Palette property](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/color-palette-property.png)

## Built-in color palette

You can switch between the predefined color palette options available in `Color Palette` dropdown.

![Built in Color Palettes](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/built-in-color-palette.png)

## Define custom color palette

To define custom colors, follow these steps:

1. Select `Custom` option from the `Color Palette` dropdown.

    ![Custom color palette option](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/custom-option.png)

2. Now, the `Custom Colors` field will start displaying under the color palette drop-down.

    ![Custom color palette field](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/custom-colors-field.png)

3. Click on the edit icon in the right side of `Custom Colors` property.

    ![Edit icon](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/edit-icon.png)

4. Now, you will be taken to the **Custom Colors** panel.

    ![Custom colors panel](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/custom-colors-panel.png)

5. Click on the ADD icon in the top-right corner. A new **Color** field will be added in the panel.

    ![Add icon](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/add-icon.png)

6. Set the desired color in the color field.

    ![Choose color](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/choose-color.png)

7. Click on the **Update**.

Repeat the above steps to define multiple colors sets or edit existing color sets. For example, I have added three colors in custom colors panel and it will be applied to the chart based on number of series.

![Multiple colors](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/multiple-colors.png)

You can also set color based on dynamic values, by using the [Expressions](./../../../compose-report/expressions/). Click on the square icon in the right side of the each field to open expression menu.

![Expression menu](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/expression-menu.png)

> Note: Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to set and reset expression for custom colors.

### Delete color set

To delete the existing color set, click on the edit icon for the `Custom Colors` property. Now, the available color sets will be listed **Chart Custom Colors** panel. Click on the `Delete` icon in the right corner of required color set and click on the **Update**.

![Delete binding expression](/static/assets/on-premise/images/report-designer/report-items/chart/color-palette/delete-custom-colors.png)