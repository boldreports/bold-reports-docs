---
title: Set Optimal Distribution for Map Markers | Bold Reports
description: Set the optimal distribution type for map markers in Bold Reports Web Report Designer to size data intervals so the marker color rule looks balanced on the map.
---

# Optimal distribution for map markers in Bold Reports<sup>®</sup>

In the Bold Reports<sup>®</sup> Web Report Designer, the optimal distribution type adjusts the size of data intervals to limit grouping errors, so the map looks balanced with only a few shapes in the highest class.

## How do I configure optimal distribution for markers?

You configure optimal distribution in the Bold Reports<sup>®</sup> Web Report Designer after you select the data value. The properties required to configure the distribution type then appear under the marker color rule category.

![Map distribution types](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/distribution-properties.png '#width=385px')

You can also apply the distribution type based on dynamic values by using `Expressions`. See [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel.

## Start and end value

The start and end values in the Bold Reports<sup>®</sup> Web Report Designer set the limits for the data ranges. Based on these values, the ranges are split using an algorithm in report preview.

For example, to display the population of each country on a map, you can set the minimum population as the start value and the maximum population as the end value.

![Specify start and end value](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/start-end-value.png '#width=355px')

## Bucket count

The bucket count in the Bold Reports<sup>®</sup> Web Report Designer sets how many data ranges are created. For example, if you specify a bucket count of 25, the data between the start and end values is split into 25 ranges.

![Bucket count](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/bucket-count.png '#width=355px')

You can also set the bucket count based on dynamic values by using `Expressions`. See [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel.

## See also

* [Map marker color rule](./../../../report-items/map/marker-color-rule/)
* [Equal interval distribution for map markers](./../../../report-items/map/equal-interval-marker-rule/)
* [Custom distribution for map markers](./../../../report-items/map/custom-distribution-marker-rule/)
