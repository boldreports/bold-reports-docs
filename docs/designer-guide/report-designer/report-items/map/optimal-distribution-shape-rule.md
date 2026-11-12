---
title: Set Optimal Distribution for Map Shapes | {{site.productName}}
description: Set the optimal distribution type for map shapes in {{site.productName}} Web Report Designer to size data intervals so the shape color rule looks balanced on the map.
---

# Optimal distribution for map shapes in {{site.productNameTM}}

In the {{site.productNameTM}} Web Report Designer, the optimal distribution type adjusts the size of data intervals to limit grouping errors, so the map looks balanced with only a few shapes in the highest class.

## How do I configure optimal distribution for shapes?

You configure optimal distribution in the {{site.productNameTM}} Web Report Designer after you select the data value. The properties required to configure the distribution type then appear under the shape color rule category.

![Map distribution types](/static/images/report-designer/report-items/map/shape-color-rule/distribution-properties.png '#width=355px')

You can also apply the distribution type based on dynamic values by using `Expressions`. See [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel.

## Start and end value

The start and end values in the {{site.productNameTM}} Web Report Designer set the limits for the data ranges. Based on these values, the ranges are split using an algorithm in report preview.

For example, to display the population of each country on a map, you can set the minimum population as the start value and the maximum population as the end value.

![Specify start and end value](/static/images/report-designer/report-items/map/shape-color-rule/start-end-value.png '#width=355px')

## Bucket count

The bucket count in the {{site.productNameTM}} Web Report Designer sets how many data ranges are created. For example, if you specify a bucket count of 25, the data between the start and end values is split into 25 ranges.

![Bucket count](/static/images/report-designer/report-items/map/shape-color-rule/bucket-count.png '#width=355px')

You can also set the bucket count based on dynamic values by using `Expressions`. See [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel.

If you enable the legend in the map design, the items in the legend are split into 25 ranges.

![Bucket count in legend](/static/images/report-designer/report-items/map/shape-color-rule/bucket-count-legend.png '#width=355px')

## Legend text

The Legend text property in the {{site.productNameTM}} Web Report Designer sets the format of the content in a legend. To format the legend content, use map legend keywords and custom formats.

![Legend text](/static/images/report-designer/report-items/map/shape-color-rule/optimal-legend-text.png '#width=355px')

| Format | Description |
|---------------------|-----------|
|#FROMVALUE{N0}-#TOVALUE{N0}| Showcases the real numeric values of the start of the range and end of the range.|
|#FROMVALUE {C2}| Showcases the values in currency format with two decimal places.|
|#TOVALUE|Showcases the actual value of the data field.|
|#FROMVALUE {C0}|Showcases the values in currency format without decimal places.|

You can also apply the legend text based on dynamic values by using `Expressions`. See [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel.
> Legends automatically extend to show the legend title or legend text.

## See also

* [Map shape color rule](./../../../report-items/map/shape-color-rule/)
* [Equal interval distribution for map shapes](./../../../report-items/map/equal-interval-shape-rule/)
* [Map legend](./../../../report-items/map/legend/)
