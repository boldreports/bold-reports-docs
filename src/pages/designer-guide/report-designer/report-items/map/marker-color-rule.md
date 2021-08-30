---
title: Map Marker Color Rule | Web ReportDesigner | Bold Reports
description: This section describes how to define color rule for marker in Map Report Item with the Bold Report Designer
---

# Marker color rule

The marker color rule properties can be used to define color filling rules for map marker icons with a user specified number of ranges.

## Rules

It has three rules to fill colors on map marker icons,

* [Color palette](./../../../report-items/map/color-palette-marker-rule/)
* [Color ranges](./../../../report-items/map/color-range-marker-rule/)
* [Custom colors](./../../../report-items/map/custom-color-marker-rule/)
Similarly, it has four distribution types to distribute colors on map marker icons,

* [Equal](./../../../report-items/map/equal-distribution-marker-rule/)
* [Equal interval](./../../../report-items/map/equal-interval-marker-rule/)
* [Optimal](./../../../report-items/map/optimal-distribution-marker-rule/)
* [Custom](./../../../report-items/map/custom-distribution-marker-rule/)

## Define marker color rule

Marker color rules can be applied once you match the map shapes based on shape data and analytical data from a data set field.

These properties are listed under **Marker Color Rule** in the map properties. To enable/disable marker color rule in the map surface, toggle the `Enable Color Rule` checkbox.

![Map Shape properties](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/initial.png)

Once you enable the marker color rule, other properties required for defining marker color rule will start displaying under **Marker Color Rule** category and by default, **Color Range** type will be applied on the map surface as shown in below,

![Map shape color rule](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/enable-color-rule.png)

### Data value

The data value field will list the available shape data fields and analytical data fields depending on the source of shape data and analytical data in the report.

![Map data value](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/data-value.png)

For example, to vary the marker colors based on population of each country, you have to choose sum of population data field as data value. You can also set data value based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
![Map data value](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/data-value-expression.png)

### Type

As explained earlier, the map marker color rule has three types of color rules: Color Range, Color Palette, and Custom. These options are listed in the **Type** drop-down,

![Map color rule types](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/types.png)

Refer following sections to learn about each marker color rule,

* [Color palette](./../../../report-items/map/color-palette-marker-rule/)
* [Color ranges](./../../../report-items/map/color-range-marker-rule/)
* [Custom colors](./../../../report-items/map/custom-color-marker-rule/)

### Distribution type

The color distribution options govern the way colors are visualized on the marker icons. Once you set value for `Data Value` property, the properties required to configure distribution type will start displaying under marker color rule category,

![Map distribution properties](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/distribution-properties.png)

These options are listed in the **Distribution Type** drop-down,

![Map distribution types](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/distribution-types.png)

Refer the following sections to design map marker using each distribution type,

* [Equal](./../../../report-items/map/equal-distribution-marker-rule/)
* [Equal interval](./../../../report-items/map/equal-interval-marker-rule/)
* [Optimal](./../../../report-items/map/optimal-distribution-marker-rule/)
* [Custom](./../../../report-items/map/custom-distribution-marker-rule/)
On report preview, based on the selected distribution type the analytical data will be split into ranges and the specified color rules will be applied to the marker icons.