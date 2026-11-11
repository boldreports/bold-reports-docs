---
title: Define Custom Data Ranges for Map Items | {{site.productName}}
description: Define custom data ranges for a map report item in the {{site.productName}} Web Report Designer by using the Custom distribution type and the Buckets property.
---

# Define a custom data range for a map in {{site.productNameTM}}

In the {{site.productNameTM}} Web Report Designer, the custom distribution type defines the data ranges explicitly for the map report item. You set each range as a bucket with a start value and an end value.

## How do I open the Map Bucket panel?

You open the {{site.productNameTM}} **Map Bucket** panel from the distribution properties of the map report item.

1. Choose the **Custom** type in the distribution dropdown.

   ![Custom distribution](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/custom-distribution.png '#width=385px')

2. Click the edit icon of the **Buckets** option that appears.

   ![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/edit-icon.png '#width=385px')

3. Use the **Map Bucket** panel that opens.

   ![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/mapbucket-panel.png '#width=385px')

## Add bucket

To add a bucket in the {{site.productNameTM}} **Map Bucket** panel, click the **ADD** icon in the top-right corner. A new field with **Start Value** and **End Value** options to define a data range is added to the panel.

![Add field](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/add-field.png '#width=385px')

Click **Update**.

If you know the minimum and maximum values in the analytical data, you can split them into 'N' number of buckets in this panel. The total number of ranges in the panel counts as the bucket count for the map report item. For example, when the minimum and maximum population range is known, you can split it as shown in the following image.

![Add field](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/multiple-data-range.png '#width=385px')

You can also define start and end values based on dynamic values by using `Expressions`. To open the set or reset expression menu in the properties panel, see the [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) sections. Click the square icon on the right side of each field to open the expression menu.
![Expression menu](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/expression-menu.png '#width=385px')

## How do I delete a bucket?

To delete an existing bucket range in the {{site.productNameTM}} map report item, follow these steps:

1. Click the edit icon for the `Buckets` property. The **MapBucket** panel lists the available data ranges.
2. Click the `Delete` icon in the right corner of the data range you want to remove.
3. Click **Update**.

![Delete binding expression](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/delete-map-bucket.png '#width=385px')

## Frequently asked questions

### How is the bucket count decided?

The total number of ranges in the **Map Bucket** panel counts as the bucket count for the map report item.

### Can bucket start and end values use expressions?

Yes. Click the square icon on the right side of each field to open the expression menu.

## See also

* [Custom distribution for map shapes](./../../../report-items/map/custom-distribution-shape-rule/)
* [Custom distribution for map markers](./../../../report-items/map/custom-distribution-marker-rule/)
* [Define custom colors](./../../../report-items/map/define-custom-colors/)
