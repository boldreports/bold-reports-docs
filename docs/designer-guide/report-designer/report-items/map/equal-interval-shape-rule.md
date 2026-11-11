---
title: Set an Equal Interval Rule for Map Shapes | Bold Reports
description: Set the equal interval distribution type for map shapes in the Bold Reports Web Report Designer to divide the whole data range into equally sized intervals.
---

# Equal interval for map shapes in Bold Reports<sup>®</sup>

In the Bold Reports<sup>®</sup> Web Report Designer, the equal interval distribution type divides the entire data range into equally sized intervals.

## How do I set equal interval distribution for map shapes?

You set equal interval distribution for map shapes in the Bold Reports<sup>®</sup> Web Report Designer from the shape color rule category.

1. Set a value for the `Data Value` property. The properties required to configure the distribution type appear under the shape color rule category.

   ![Map distribution types](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/distribution-properties.png '#width=355px')

2. Choose `Equal Interval` in the `Distribution Type` dropdown.

You can also set the distribution type based on dynamic values by using `Expressions`. To open the set or reset expression menu in the properties panel, see the [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) sections.

## Start and end value

The start and end values set the limits that Bold Reports<sup>®</sup> splits into ranges by using an algorithm in report preview.

For example, to display the population of each country on a map, set the minimum population as the start value and the maximum population as the end value.

![Specify start and end value](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/equal-interval-start-end-value.png '#width=385px')

## Bucket count

The bucket count sets how many data ranges Bold Reports<sup>®</sup> creates. For example, if you specify a bucket count of 25, the data between the start and end values is split into 25 ranges.

![Bucket count](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/equal-interval-bucket-count.png '#width=385px')

You can also set the bucket count based on dynamic values by using `Expressions`. To open the set or reset expression menu in the properties panel, see the [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) sections.
If you enable the legend in the map design, the legend items are split into 25 ranges.

![Bucket count in legend](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/bucket-count-legend.png '#width=385px')

## Legend text

The Legend text property sets the format of the content in a Bold Reports<sup>®</sup> map legend. To format the legend content, use map legend keywords and custom formats.

![Legend text](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/legend-text.png '#width=385px')

| Format | Description |
|---------------------|-----------|
|#FROMVALUE{N0}-#TOVALUE{N0}| Showcases the real numeric values of the start of the range and end of the range.|
|#FROMVALUE {C2}| Showcases the values in currency format with two decimal places.|
|#TOVALUE|Showcases the actual value of the data field.|
|#FROMVALUE {C0}|Showcases the values in currency format without decimal places.|

You can also apply legend text based on dynamic values by using `Expressions`. To open the set or reset expression menu in the properties panel, see the [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) sections.
> Legends automatically extend to show the legend title or legend text.

## Frequently asked questions

### Does the bucket count change the legend?

Yes. If you enable the legend and set a bucket count of 25, the legend items are split into 25 ranges.

## See also

* [Shape color rule](./../../../report-items/map/shape-color-rule/)
* [Equal distribution for map shapes](./../../../report-items/map/equal-distribution-shape-rule/)
* [Map legend](./../../../report-items/map/legend/)
