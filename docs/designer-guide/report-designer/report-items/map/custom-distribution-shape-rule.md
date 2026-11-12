---
title: Set a Custom Distribution for Map Shapes | {{site.productName}}
description: Set a custom distribution type for map shapes in the {{site.productName}} Web Report Designer, define your own data ranges, and format the map legend text.
---

# Custom distribution for map shapes in {{site.productNameTM}}

In the {{site.productNameTM}} Web Report Designer, the custom distribution type lets you set your own number of data ranges to decide the distribution of values for map shapes.

## How do I set a custom distribution for map shapes?

You set a custom distribution for map shapes in the {{site.productNameTM}} Web Report Designer from the shape color rule category.

1. Select the data value. The properties required to configure the distribution type appear under the shape color rule category.

   ![Map distribution types](/static/images/report-designer/report-items/map/shape-color-rule/distribution-properties.png '#width=385px')

2. Choose `Custom` in the `Distribution Type` dropdown.
3. Click the edit icon of the **Buckets** option that appears.

   ![Edit icon](/static/images/report-designer/report-items/map/custom-distribution-range/edit-icon.png '#width=355px')

4. Use the **Map Bucket** panel that opens to define your ranges.

   ![Edit icon](/static/images/report-designer/report-items/map/custom-distribution-range/mapbucket-panel.png '#width=355px')

## Buckets

To define the data ranges explicitly in the {{site.productNameTM}} `Buckets` property, see the [Custom Buckets](./../../../report-items/map/define-custom-data-range/#add-bucket) section.

## Legend text

The Legend text property sets the format of the content in a {{site.productNameTM}} map legend. To format the legend content, use map legend keywords and custom formats.

![Legend text](/static/images/report-designer/report-items/map/shape-color-rule/custom-legend-text.png '#width=355px')

| Format | Description |
|---------------------|-----------|
|#FROMVALUE{N0}-#TOVALUE{N0}| Showcases the real numeric values of the start of the range and end of the range.|
|#FROMVALUE {C2}| Showcases the values in currency format with two decimal places.|
|#TOVALUE|Showcases the actual value of the data field.|
|#FROMVALUE {C0}|Showcases the values in currency format without decimal places.|

You can also apply legend text based on dynamic values by using `Expressions`. To open the set or reset expression menu in the properties panel, see the [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) sections.
> Legends automatically extend to show the legend title or legend text.

## See also

* [Shape color rule](./../../../report-items/map/shape-color-rule/)
* [Define a custom data range](./../../../report-items/map/define-custom-data-range/)
* [Map legend](./../../../report-items/map/legend/)
