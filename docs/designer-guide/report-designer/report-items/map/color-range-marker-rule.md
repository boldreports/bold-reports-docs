---
title: Color Range Marker Rule | Bold Report Designer
description: This section describes how to define a color range rule for Map markers with the Bold Report Designer.
---

# Color range

We can set the start, middle, and end colors. Then specify the distribution options. Based on the specified distribution type and using the provided colors, make a lot of hues that delivers a presentation like a heat map. The start color applies to the low end of the data range and the end color applies to data at the high end of the data range.

![Map color rule types](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/types.png#width=540px)

Specify the required colors in `Start` color, `Middle` color and `End` color fields. By default red, yellow and green colors will be applied on map marker icons.

![Map color rule types](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/color-range-type.png)

* Start color - to use for the lowest range.
* Middle color - to use for the middle range.
* End color - to use for the highest range.

For example, to display population of each country on a map, set the color codes #CFF09E, #79BD9B, #1074AD, respectively. Now, the map design with sample will look like below,

![Map color rule types](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/color-range-demo.png)

On report processing these three color will be distributed on map marker icons based on the distribution type that delivers a presentation like a heat map.

## Use case

Refer the [Design map using color range rule](./../../../report-items/map/use-case/design-map-using-marker-color-range-rule/) section to design a U.S sales analysis report using color range rule in map report item.