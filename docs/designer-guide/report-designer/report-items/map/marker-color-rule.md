---
title: Color Map Markers with a Marker Color Rule | {{site.productName}}
description: Define a marker color rule in the {{site.productName}} Web Report Designer to fill map marker icons with color palette, color range, or custom color rules by range.
---

# Marker color rule in {{site.productNameTM}} Web Report Designer

In the {{site.productNameTM}} Web Report Designer, the marker color rule properties define color filling rules for map marker icons with a user-specified number of ranges.

## Which rules and distribution types are available?

The {{site.productNameTM}} marker color rule has three rules to fill colors on map marker icons:

* [Color palette](./../../../report-items/map/color-palette-marker-rule/)
* [Color ranges](./../../../report-items/map/color-range-marker-rule/)
* [Custom colors](./../../../report-items/map/custom-color-marker-rule/)

The marker color rule also has four distribution types to distribute colors on map marker icons:

* [Equal](./../../../report-items/map/equal-distribution-marker-rule/)
* [Equal interval](./../../../report-items/map/equal-interval-marker-rule/)
* [Optimal](./../../../report-items/map/optimal-distribution-marker-rule/)
* [Custom](./../../../report-items/map/custom-distribution-marker-rule/)

## How do I define a marker color rule?

You can apply {{site.productNameTM}} marker color rules after you match the map shapes based on shape data and analytical data from a dataset field.

The properties are listed under **Marker Color Rule** in the map properties. To enable or disable the marker color rule on the map surface, toggle the `Enable Color Rule` checkbox.

![Map Shape properties](/static/images/report-designer/report-items/map/marker-color-rule/initial.png '#width=385px')

When you enable the marker color rule, the other properties required to define it appear under the **Marker Color Rule** category. By default, the **Color Range** type is applied on the map surface, as shown in the following image.

![Map shape color rule](/static/images/report-designer/report-items/map/marker-color-rule/enable-color-rule.png)

### Data value

The Data value field lists the available shape data fields and analytical data fields, depending on the source of shape data and analytical data in the report.

![Map data value](/static/images/report-designer/report-items/map/marker-color-rule/data-value.png '#width=385px')

For example, to vary the marker colors based on the population of each country, choose the sum of the population data field as the data value. You can also set the data value based on dynamic values by using `Expressions`. To open the set or reset expression menu in the properties panel, see the [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) sections.
![Map data value](/static/images/report-designer/report-items/map/marker-color-rule/data-value-expression.png '#width=385px')

### Type

The Type property selects one of the three map marker color rules: Color Range, Color Palette, and Custom. The **Type** dropdown lists these options.

![Map color rule types](/static/images/report-designer/report-items/map/marker-color-rule/types.png '#width=385px')

To learn about each marker color rule, see the following sections:

* [Color palette](./../../../report-items/map/color-palette-marker-rule/)
* [Color ranges](./../../../report-items/map/color-range-marker-rule/)
* [Custom colors](./../../../report-items/map/custom-color-marker-rule/)

### Distribution type

The color distribution options govern how colors are visualized on the marker icons. When you set a value for the `Data Value` property, the properties required to configure the distribution type appear under the marker color rule category.

![Map distribution properties](/static/images/report-designer/report-items/map/marker-color-rule/distribution-properties.png '#width=355px')

The **Distribution Type** dropdown lists these options.

![Map distribution types](/static/images/report-designer/report-items/map/marker-color-rule/distribution-types.png '#width=385px')

To design map markers with each distribution type, see the following sections:

* [Equal](./../../../report-items/map/equal-distribution-marker-rule/)
* [Equal interval](./../../../report-items/map/equal-interval-marker-rule/)
* [Optimal](./../../../report-items/map/optimal-distribution-marker-rule/)
* [Custom](./../../../report-items/map/custom-distribution-marker-rule/)

On report preview, the analytical data is split into ranges based on the selected distribution type, and the specified color rules are applied to the marker icons.

## Frequently asked questions

### Which color rule is applied by default?

When you enable the marker color rule, the **Color Range** type is applied on the map surface by default.

### When can I apply a marker color rule?

You can apply marker color rules after you match the map shapes based on shape data and analytical data from a dataset field.

## See also

* [Map report item](./../../../report-items/map/)
* [Bind data to a map](./../../../report-items/map/binding-data/)
* [Map legend](./../../../report-items/map/legend/)
