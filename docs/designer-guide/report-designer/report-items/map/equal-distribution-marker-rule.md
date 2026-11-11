---
title: Set Equal Distribution for Map Markers | {{site.productName}}
description: Set the equal distribution type for map markers in the {{site.productName}} Web Report Designer so each marker color rule data range has an equal number of items.
---

# Equal distribution for map markers in {{site.productNameTM}}

In the {{site.productNameTM}} Web Report Designer, the equal distribution type adjusts the interval limits so that each range has an equal number of items. The result is unequally sized intervals.

## How do I set equal distribution for map markers?

You set equal distribution for map markers in the {{site.productNameTM}} Web Report Designer from the color rule distribution properties.

1. Set a value for the `Data Value` property. The properties required to configure the distribution type appear under the marker color rule category.

   ![Map distribution types](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/distribution-properties.png '#width=355px')

2. Choose `Equal Distribution` in the `Distribution Type` dropdown.

You can also set the distribution type based on dynamic values by using `Expressions`. To open the set or reset expression menu in the properties panel, see the [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) sections.

## Start and end value

The start and end values set the limits that {{site.productNameTM}} splits into ranges by using an algorithm in report preview.

For example, to display the population of each country on a map, set the minimum population as the start value and the maximum population as the end value.

![Specify start and end value](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/equal-start-end-value.png '#width=385px')

## Bucket count

The bucket count sets how many data ranges {{site.productNameTM}} creates. For example, if you specify a bucket count of 25, the data between the start and end values is split into 25 ranges.

![Bucket count](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/equal-bucket-count.png '#width=385px')

You can also set the bucket count based on dynamic values by using `Expressions`. To open the set or reset expression menu in the properties panel, see the [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) sections.

## Frequently asked questions

### How is equal distribution different from equal interval?

Equal distribution gives each range an equal number of items, which creates unequally sized intervals. Equal interval divides the entire data range into equally sized intervals.

## See also

* [Marker color rule](./../../../report-items/map/marker-color-rule/)
* [Equal interval for map markers](./../../../report-items/map/equal-interval-marker-rule/)
* [Equal distribution for map shapes](./../../../report-items/map/equal-distribution-shape-rule/)
