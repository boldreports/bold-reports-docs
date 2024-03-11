---
title: Optimal Distribution | Web ReportDesigner | Bold Reports
description: This section describes how to define optimal distribution for Map Report Item with the Bold Report Designer.
---

# Optimal Distribution

This distribution type adjusts the size of data intervals so as to limit the grouping blunder and in this manner the map looks increasingly adjusted and the outcomes appear to be progressively right, with only a couple of shapes in the highest class as one would anticipate.

Once you select the data value, the properties required to configure distribution type will start displaying under shape color rule category,

![Map distribution types](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/distribution-properties.png '#width=355px')

You can also apply distribution type based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

## Start and end value

Based on start and end values the ranges will be split using an algorithm in report preview.

For example, to display population of each country on a map, you can set minimum population as start value and maximum population as end value.

![Specify start and end value](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/start-end-value.png '#width=355px')

## Bucket count

Based on specified bucket count, splits the data ranges. For example, if you specify bucket count as 25, the data between start and end values will be split into 25 ranges.

![Bucket count](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/bucket-count.png '#width=355px')

You can also set bucket based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
If you enable legend in map design, you can see the items in legend is split into 25 ranges.

![Bucket count in legend](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/bucket-count-legend.png '#width=355px')

## Legend text

This property can be used to set format of content in a legend. To format the content of legend, use map legend keywords and custom formats.

![Legend text](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/optimal-legend-text.png '#width=355px')

| Format | Description |
|---------------------|-----------|
|#FROMVALUE{N0}-#TOVALUE{N0}| Showcases the real numeric values of the start of the range and end of the range.|
|#FROMVALUE {C2}| Showcases the values in currency format with two decimal places.|
|#TOVALUE|Showcases the actual value of the data field.|
|#FROMVALUE {C0}|Showcases the values in currency format without decimal places.|

You can also apply legend text based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
> Legends automatically extend to show the legend title or legend text.