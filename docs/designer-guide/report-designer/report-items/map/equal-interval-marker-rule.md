---
title: Set an Equal Interval Rule for Map Markers | {{site.productName}}
description: Set the equal interval distribution type for map markers in the {{site.productName}} Web Report Designer to divide the whole data range into equally sized intervals.
---

# Equal interval for map markers in {{site.productNameTM}}

In the {{site.productNameTM}} Web Report Designer, the equal interval distribution type divides the entire data range into equally sized intervals.

## How do I set equal interval distribution for map markers?

You set equal interval distribution for map markers in the {{site.productNameTM}} Web Report Designer from the marker color rule category.

1. Set a value for the `Data Value` property. The properties required to configure the distribution type appear under the marker color rule category.

   ![Map distribution types](/static/images/report-designer/report-items/map/marker-color-rule/distribution-properties.png '#width=355px')

2. Choose `Equal Interval` in the `Distribution Type` dropdown.

You can also set the distribution type based on dynamic values by using `Expressions`. To open the set or reset expression menu in the properties panel, see the [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) sections.

## Start and end value

The start and end values set the limits that {{site.productNameTM}} splits into ranges by using an algorithm in report preview.

For example, to display the population of each country on a map, set the minimum population as the start value and the maximum population as the end value.

![Specify start and end value](/static/images/report-designer/report-items/map/marker-color-rule/equal-interval-start-end-value.png '#width=385px')

## Bucket count

The bucket count sets how many data ranges {{site.productNameTM}} creates. For example, if you specify a bucket count of 25, the data between the start and end values is split into 25 ranges.

![Bucket count](/static/images/report-designer/report-items/map/marker-color-rule/equal-interval-bucket-count.png '#width=385px')

You can also set the bucket count based on dynamic values by using `Expressions`. To open the set or reset expression menu in the properties panel, see the [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) sections.

## Frequently asked questions

### How is equal interval different from equal distribution?

Equal interval divides the entire data range into equally sized intervals. Equal distribution gives each range an equal number of items, which creates unequally sized intervals.

## See also

* [Marker color rule](./../../../report-items/map/marker-color-rule/)
* [Equal distribution for map markers](./../../../report-items/map/equal-distribution-marker-rule/)
* [Equal interval for map shapes](./../../../report-items/map/equal-interval-shape-rule/)
