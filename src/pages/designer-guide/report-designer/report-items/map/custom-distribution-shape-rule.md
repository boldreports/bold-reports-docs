---
title: Custom Distribution | Web ReportDesigner | Bold Reports
description: This section describes how to define a custom distribution rule for Map Report Item with the Bold Report Designer.
---

# Custom Distribution

Indicate your own number of data ranges to decide the distribution of values.

Once you select the data value, the properties required to configure distribution type will start displaying under shape color rule category,

![Map distribution types](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/distribution-properties.png)

Choose `Custom` in `Distribution Type` dropdown.
Now an option called **Buckets** will start displaying, click on the edit icon.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/edit-icon.png)

Now, you will be taken to the **Map Bucket** panel.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/custom-distribution-range/mapbucket-panel.png)

## Buckets

To define the data ranges explicitly in the `Buckets` property, refer [Custom Buckets](./../../../report-items/map/define-custom-data-range/#add-bucket) section.

## Legend text

This property can be used to set format of content in a legend. To format the content of legend, use map legend keywords and custom formats.

![Legend text](/static/assets/on-premise/images/report-designer/report-items/map/shape-color-rule/custom-legend-text.png)

| Format | Description |
|---------------------|-----------|
|#FROMVALUE{N0}-#TOVALUE{N0}| Showcases the real numeric values of the start of the range and end of the range.|
|#FROMVALUE {C2}| Showcases the values in currency format with two decimal places.|
|#TOVALUE|Showcases the actual value of the data field.|
|#FROMVALUE {C0}|Showcases the values in currency format without decimal places.|

You can also apply legend text based on dynamic values, by using the `Expressions`. Refer [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.
> Legends automatically extend to show the legend title or legend text.