---
title: Equal Interval Distribution Marker | Bold Reports Designer
description: This section describes how to define a equal interval distribution for Map markers with the Bold Report Designer.
---

# Equal Interval

This distribution type divides the entire data range into equally sized intervals.

Once you set value for `Data Value` property, the properties required to configure distribution type will start displaying under marker color rule category,

![Map distribution types](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/distribution-properties.png '#width=355px')

Choose `Equal Interval` in `Distribution Type` dropdown.

You can also set distribution type based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

## Start and end value

Based on start and end values the ranges will be split using an algorithm in report preview.

For example, to display population of each country on a map, you can set minimum population as start value and maximum population as end value.

![Specify start and end value](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/equal-interval-start-end-value.png '#width=385px')

## Bucket count

Based on specified bucket count, splits the data ranges. For example, if you specify bucket count as 25, the data between start and end values will be split into 25 ranges.

![Bucket count](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/equal-interval-bucket-count.png '#width=385px')

You can also set bucket based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.