---
title: Set a Map Marker Rule in Web Report Designer | {{site.productName}}
description: Define a marker rule for a map in {{site.productName}} Web Report Designer to set marker styles for each marker based on ranges of analytical data in RDL reports.
---

# Map marker rule in {{site.productNameTM}} Web Report Designer

In the {{site.productNameTM}} Web Report Designer, the marker rule properties define marker styles for each marker on the map surface. You can vary marker styles across ranges of analytical data.

## How do I define a marker rule?

You can apply a marker rule in the {{site.productNameTM}} Web Report Designer after you match the map shapes based on shape data and analytical data. The analytical data can come from a data set field or from a spatial data source field.

The marker rule properties are listed under **Marker Rule** in the map properties. To enable or disable the marker rule on the map surface, toggle the `Enable Marker Rule` checkbox.

![Map Rule properties](/static/images/report-designer/report-items/map/marker-rule/initial.png '#width=355px')

After you enable the marker rule, the other properties required for defining marker styles appear under the **Marker Rule** category.

![Map marker rule](/static/images/report-designer/report-items/map/marker-rule/enable-marker-rule.png '#width=355px')

### Markers

The `Markers` property in the {{site.productNameTM}} Web Report Designer defines any number of marker style sets based on your desired output. To define marker styles, follow these steps:

1. Click the edit icon for the `Markers` property.
   ![Markers style](/static/images/report-designer/report-items/map/marker-rule/edit-icon.png '#width=355px')
2. The **Map Marker** panel opens.
   ![Edit analytical and spatial link](/static/images/report-designer/report-items/map/marker-rule/panel.png '#width=355px')
3. Click the **ADD** icon in the top-right corner. A new field with an option to set the marker style is added to the panel.
   ![Add new marker style](/static/images/report-designer/report-items/map/marker-rule/add-field.png '#width=355px')
4. Set the desired style in the marker style field.
   ![Set marker style](/static/images/report-designer/report-items/map/marker-rule/set-style.png '#width=355px')
5. Click **Update**.

You can also set the marker style based on dynamic values by using `Expressions`. See [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel. Click the square icon on the right side of each field to open the expression menu.
![Expression menu](/static/images/report-designer/report-items/map/marker-rule/expression-menu.png '#width=385px')

Repeat the steps to create multiple marker style sets or edit existing style sets. For example, the following image shows six marker styles added in the marker style panel. They are distributed on the map surface based on the distribution type and data range.

![Marker multiple styles](/static/images/report-designer/report-items/map/marker-rule/multiple-style.png '#width=445px')

#### How do I delete a style set?

To delete a marker style set in the {{site.productNameTM}} Web Report Designer, follow these steps:

1. Click the edit icon for the `Markers` property. The available style sets are listed in the **Map Marker** panel.
2. Click the `Delete` icon in the right corner of the style set you want to remove.
3. Click **Update**.

![Delete marker style](/static/images/report-designer/report-items/map/marker-rule/delete-custom-style.png '#width=385px')

### Data value

The data value field in the {{site.productNameTM}} Web Report Designer lists the available shape data fields and analytical data fields. The list depends on the source of shape data and analytical data in the report.

![Map data value](/static/images/report-designer/report-items/map/marker-rule/data-value.png '#width=385px')

For example, to vary the marker styles based on the population of each country, choose the sum of population data field as the data value. You can also set the data value based on dynamic values by using `Expressions`. See [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel.
![Map data value](/static/images/report-designer/report-items/map/marker-rule/data-value-expression.png '#width=385px')

After you select the data value, the properties required to configure the distribution type appear under the marker rule category.

![Map distribution properties](/static/images/report-designer/report-items/map/marker-rule/distribution-properties.png '#width=385px')

### Distribution type

The marker distribution options in the {{site.productNameTM}} Web Report Designer govern how markers are visualized on the map surface. There are four types of distribution rules: Optimal, Equal Interval, Equal Distribution, and Custom. These options are listed in the **Distribution Type** drop-down.

![Map distribution types](/static/images/report-designer/report-items/map/marker-rule/distribution-types.png '#width=385px')

On report preview, the analytical data is split into ranges based on the selected distribution type. The specified color rules are then applied to the map markers.

* **Optimal** - adjusts the size of data intervals to limit grouping errors. The map looks more balanced, with only a few marker styles in the highest class.
* **Equal Interval** - divides the entire data range into equally sized intervals.
* **Equal Distribution** - creates unequally sized data intervals and adjusts the interval limits so that each range has an equal number of items.
* **Custom** - lets you indicate your own number of data ranges to decide the distribution of values.

**Start and End Value** - Based on the start and end values, the ranges are split using an algorithm in report preview.

For example, to display the population of each country on a map, you can set the minimum population as the start value and the maximum population as the end value.

![Specify start and end value](/static/images/report-designer/report-items/map/marker-rule/start-end-value.png '#width=385px')

**Bucket count** - Splits the data ranges based on the specified bucket count. For example, if you specify a bucket count of 25, the data between the start and end values is split into 25 ranges.

![Bucket count](/static/images/report-designer/report-items/map/marker-rule/bucket-count.png '#width=385px')

You can also set the bucket count based on dynamic values by using `Expressions`. See [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel.

For optimal, equal interval, and equal distribution, the data ranges are split using an algorithm when the report is processed. You can also define the data ranges explicitly using the `Custom distribution` type. See [Custom distribution](./../../../report-items/map/custom-distribution-marker-rule/).

You can also apply the distribution type based on dynamic values by using `Expressions`. See [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) to open the set or reset expression menu in the properties panel.

## Frequently asked questions

### How many marker style sets can I add to a map marker rule?

You can define any number of marker style sets in the **Map Marker** panel. The styles are distributed on the map surface based on the distribution type and data range.

### Which distribution types does the marker rule support?

The marker rule supports four distribution types: Optimal, Equal Interval, Equal Distribution, and Custom.

## See also

* [Map marker settings](./../../../report-items/map/marker-settings/)
* [Optimal distribution for map markers](./../../../report-items/map/optimal-distribution-marker-rule/)
* [Custom distribution for map markers](./../../../report-items/map/custom-distribution-marker-rule/)
