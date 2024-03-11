---
title: Map custom distribution | Web ReportDesigner | Bold Reports
description: This section describes the steps involved in defining a custom data range to map in Bold Report Designer
---

# Define custom data range

Custom distribution type property can be used to define the data ranges explicitly for map report item. Choose **Custom** type in distribution drop-down,

![Custom distribution](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/custom-distribution.png '#width=385px')

Now an option called **Buckets** will start displaying, click on the edit icon.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/edit-icon.png '#width=385px')

Now, you will be taken to the **Map Bucket** panel.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/mapbucket-panel.png '#width=385px')

## Add bucket

Click on the **ADD** icon in the top-right corner. A new field with **Start Value** and **End Value** option to define data range will be added in the panel.

![Add field](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/add-field.png '#width=385px')

Click on the update.

If you know the minimum and maximum values in analytical data, you can split it into 'N' number of buckets in this panel. Total number of ranges in the panel will be counted as bucket count for the respective map report item. For example, we know the minimum and maximum population range. So, the splitting can be done like below.

![Add field](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/multiple-data-range.png '#width=385px')

You can also define start and end values based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel. Click on the square icon in the right side of the each field to open expression menu,
![Expression menu](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/expression-menu.png '#width=385px')

## Delete bucket

To delete the existing bucket range, click on the edit icon for the `Buckets` property. Now, the available data ranges will be listed **MapBucket** panel. Click on the `Delete` icon in the right corner of required data range and click on the **Update**.

![Delete binding expression](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/delete-map-bucket.png '#width=385px')
