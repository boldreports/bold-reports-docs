---
title: Set a Custom Distribution for Map Markers | {{site.productName}}
description: Set a custom distribution type for map markers in the {{site.productName}} Web Report Designer and define your own number of data ranges for the marker color rule.
---

# Custom distribution for map markers in {{site.productNameTM}}

In the {{site.productNameTM}} Web Report Designer, the custom distribution type lets you set your own number of data ranges to decide the distribution of values for map markers.

## How do I set a custom distribution for map markers?

You set a custom distribution for map markers in the {{site.productNameTM}} Web Report Designer from the marker color rule category.

1. Select the data value. The properties required to configure the distribution type appear under the marker color rule category.

   ![Map distribution types](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-rule/distribution-properties.png '#width=385px')

2. Choose `Custom` in the `Distribution Type` dropdown.
3. Click the edit icon of the **Buckets** option that appears.

   ![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/edit-icon.png '#width=355px')

4. Use the **Map Bucket** panel that opens to define your ranges.

   ![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/mapbucket-panel.png '#width=355px')

## Buckets

To define the data ranges explicitly in the {{site.productNameTM}} `Buckets` property, see the [Custom Buckets](./../../../report-items/map/define-custom-data-range/#add-bucket) section.
On report preview, the fill color is applied to marker icons on the map surface based on the specified data ranges.

## See also

* [Marker color rule](./../../../report-items/map/marker-color-rule/)
* [Define a custom data range](./../../../report-items/map/define-custom-data-range/)
* [Custom distribution for map shapes](./../../../report-items/map/custom-distribution-shape-rule/)
