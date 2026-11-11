---
title: Define Custom Colors for Map Report Items | Bold Reports
description: Define custom color sets for a map report item in the Bold Reports Web Report Designer with the Custom Colors property for shape or marker color rules.
---

# Define custom colors for a map in Bold Reports<sup>®</sup>

You can define any number of color sets for a map in the Bold Reports<sup>®</sup> Web Report Designer with the **Custom Colors** property. The colors are distributed on the map surface based on the distribution type and data range.

## How do I define custom colors?

You define custom colors in the Bold Reports<sup>®</sup> Web Report Designer through the **Map Custom Colors** panel. Follow these steps:

1. In the properties panel, under the **Shape Color Rule** or **Marker Color Rule** category, choose **Custom** in the **Type** property. The **Custom Colors** field appears under the type dropdown.
   ![Map custom color field](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/custom-colors-field.png '#width=355px')
2. Click the edit icon for the `Custom Colors` property.
   ![Edit analytical and spatial link](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/edit-icon.png '#width=355px')
3. Use the **Map Custom Colors** panel that opens.
   ![Edit analytical and spatial link](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/panel.png '#width=355px')
4. Click the **ADD** icon in the top-right corner. A new field with an option to set a color is added to the panel.
   ![Add new binding expression](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/add-field.png '#width=355px')
5. Set the color you want in the color field.
   ![Set color](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/set-color.png '#width=355px')
6. Click **Update**.

You can also set a color based on dynamic values by using `Expressions`. To open the set or reset expression menu in the properties panel, see the [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) sections. Click the square icon on the right side of each field to open the expression menu.
![Expression menu](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/expression-menu.png '#width=355px')

## How are multiple custom colors applied?

Bold Reports<sup>®</sup> distributes the custom colors on the map surface based on the distribution type and data range. Repeat the steps above to create multiple color sets or edit existing color sets. For example, the following image shows seven colors added in the custom colors panel and distributed on the map surface.

![Multiple colors](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/multiple-colors-in-design.png '#width=410px')

If you apply the same colors to map markers, the colors are distributed on the marker icon background based on the distribution type and data range.

![Marker multiple colors](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/marker-color-rule.png '#width=410px')

## How do I delete a color set?

To delete an existing color set in the Bold Reports<sup>®</sup> map report item, follow these steps:

1. Click the edit icon for the `Custom Colors` property. The **Map Custom Colors** panel lists the available color sets.
2. Click the `Delete` icon in the right corner of the color set you want to remove.
3. Click **Update**.

![Delete binding expression](/static/assets/on-premise/images/report-designer/report-items/map/custom-colors/delete-custom-colors.png '#width=355px')

## Frequently asked questions

### Can I use custom colors for both shapes and markers?

Yes. Choose **Custom** in the **Type** property under either the **Shape Color Rule** or the **Marker Color Rule** category.

### Can I set a custom color with an expression?

Yes. Click the square icon on the right side of each color field to open the expression menu.

## See also

* [Custom color rule for map shapes](./../../../report-items/map/custom-color-shape-rule/)
* [Custom color rule for map markers](./../../../report-items/map/custom-color-marker-rule/)
* [Define a custom data range](./../../../report-items/map/define-custom-data-range/)
