---
title: Configure Map Shapes | Web ReportDesigner | Bold Reports
description: This section describes how to configure custom map shapes for Map Report Item with Bold Reports On-Premise.
---

# How to configure custom map shapes

In on-premise server, we can configure the custom shape data to visualize it on map report item. To add custom shape data into on-premise application and use it report designer follow the below steps.

## Place custom shape data file in installed location

In on-premise application, build-in shape data files are located at `{Installed_location}\Bold Reports\Report Server\ReportService\bin\ShapeData`.
![Shape data installed location](/static/assets/on-premise/images/report-designer/how-to/configure-map-shapes/installed-location.png)

Copy your shape data file and paste at this location. For example, **storelocations.js**
![Shape data installed location](/static/assets/on-premise/images/report-designer/how-to/configure-map-shapes/add-new-file.png)

## Add file entry

Once you paste the file in mentioned location, open mapshapes.txt file which is available in same location.

![Shape data installed location](/static/assets/on-premise/images/report-designer/how-to/configure-map-shapes/map-shapes-file.png)

Add the entry of your file name and display name as shown below and save the file,

![Shape data installed location](/static/assets/on-premise/images/report-designer/how-to/configure-map-shapes/add-entry.png)

## Visualize shape data on map

1. Launch the on-premise application and [create a new report](https://help.boldreports.com/designer-guide/manage-content/reports/create-report/#steps-to-create-a-report).
![New report](/static/assets/on-premise/images/report-designer/how-to/configure-map-shapes/new-report.png)
2. Drag a map into design area from item panel.
![New report](/static/assets/on-premise/images/report-designer/how-to/configure-map-shapes/add-map.png)
3. The newly added shape data entry will be listed in the **Shapes** property drop-down under **Basic Settings** category.
![Shapes property](/static/assets/on-premise/images/report-designer/how-to/configure-map-shapes/shapes-property.png)

Refer [Design a rdl report using map](./../../report-items/map/use-case/design-map-using-custom-rule/) section to visualize shape data and analytical data using map report item.