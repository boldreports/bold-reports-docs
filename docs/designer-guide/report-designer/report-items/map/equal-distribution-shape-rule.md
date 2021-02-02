---
title: Equal distribution | Web ReportDesigner | Bold Reports
description: This section describes how to define a Equal distribution type for Map Report Item with the Bold Report Designer.
---

# Equal Distribution

This type creates unequally sized data intervals and involves adjustment of the interval limits so that each range has an equal number of items.

Once you set value for `Data Value` property, the properties required to configure distribution type will start displaying under shape color rule category,

![Map distribution types](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/distribution-properties.png)

Choose `Equal Distribution` in `Distribution Type` dropdown.

You can also set distribution type based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

## Start and end value

Based on start and end values the ranges will be split using an algorithm in report preview.

For example, to display population of each country on a map, you can set minimum population as start value and maximum population as end value.

![Specify start and end value](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/equal-start-end-value.png)

## Bucket count

Based on specified bucket count, splits the data ranges. For example, if you specify bucket count as 25, the data between start and end values will be split into 25 ranges.

![Bucket count](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/equal-bucket-count.png)

You can also set bucket based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
If you enable legend in map design, you can see the items in legend is split into 25 ranges.

![Bucket count in legend](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/bucket-count-legend.png)

## Legend text

This property can be used to set format of content in a legend. To format the content of legend, use map legend keywords and custom formats.

![Legend text](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/equal-legend-text.png)

| Format | Description |
|---------------------|-----------|
|#FROMVALUE{N0}-#TOVALUE{N0}| Showcases the real numeric values of the start of the range and end of the range.|
|#FROMVALUE {C2}| Showcases the values in currency format with two decimal places.|
|#TOVALUE|Showcases the actual value of the data field.|
|#FROMVALUE {C0}|Showcases the values in currency format without decimal places.|

You can also apply legend text based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
> Legends automatically extend to show the legend title or legend text.