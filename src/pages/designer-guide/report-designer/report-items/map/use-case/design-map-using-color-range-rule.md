---
title: Design map using color range rule | Bold Reports
description: This section describes the steps involved in designing a map using color range rule and optimal distribution type.
---

# Design map using color range rule

The following steps guides you to design a map using color range rule and optimal distribution to display the population of each country and group countries with population ranges to produce a display similar to a heat map.

## Create data set

1. In the data panel, click `New Data`.
![New data](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/new-data.png)
2. Choose the `JSON` connection type.
![JSON connection](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/sql-connection.png)
3. Choose `File` as `Type`.
![Choose source type](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/type.png)
4. Click on the upload button, browse and upload the JSON file in `File Path` field.
![Provide connection details](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/connection-details.png)
5. Click on the `Connect` button.
6. In the query builder, the available fields in JSON file will be loaded under default table name, `Result`.
![Enter query](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/query-designer.png)
7. Drag and drop the `Result` table and execute.
![Execute table](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/execute-query.png)
8. Modify the data set `Name` and click Finish.
![Data list](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/data-list.png)

> Note: The population data we used here is an approximate measure. The live population data may vary from this. Download the sample JSON file from [here](https://www.syncfusion.com/downloads/support/directtrac/general/ze/World-population-JSON799813027).

## Add map to the report design

The `Map` report item is listed under `Data Regions` category in the item panel.

![Map listed in item panel](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/map-listed-in-item-panel.png)

To add a `Map` report item to the report, drag the map from the item panel into design area.

![Drag map into design surface](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/drag-map-item.png)

Now, the map item will be rendered in the design area and the map properties will be listed in properties panel.

![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/initial-map-rendering.png)

> By default map report item renders with world map shapes.

## Bind analytical and shape data

In the Properties panel, under the **Basic Settings** category, choose the data set in the **DataSet** property.

![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/assign-data.png)

Then click on the edit icon for the [Binding Data](./../../../../report-items/map/binding-data/) property under **Basic Settings**.
![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/binding-data-edit-icon.png)

Refer [Binding Data](./../../../../report-items/map/binding-data/) section and match analytical and shape data. Choose **admin** in the **Field Name** drop-down and choose the **=Fields!Country.Value** expression in **Binding Expression**.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/match-field.png)

Click on the Update.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/set-binding-fields.png)

## Customize map appearance

Let’s customize the map name, title, legend, color settings, and other properties.

### Name

In the **Name** property, you can provide a unique name for specific map report items.

![Set name](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/set-name.png)

### Appearance

Under the **Appearance** category, set the border width and color properties as required.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/border.png)

### Title

Under the [Title](./../../../../report-items/map/properties/#title) category, set the title text, position, and font properties for the map title. First, enable the **Enable Title** check box. Then, add the title and position.
![Title text](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/title.png)

### Legend

Under the [Legend](./../../../../report-items/map/properties/#legend) category, enable the **Enable Legend** check box. Set the background color as **White**, position **BottomCenter**, and set the `Range` as **Title**.
![Legend](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/legend.png)

### Shape settings

Under the [Shape Settings](./../../../../report-items/map/shape-settings/), set the border color as `#08519c` and width as `1.152px` and tooltip as `=Fields!Country.Value & " : " & FormatNumber(Fields!Population.Value,0)` expression.
![Shape settings](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/shape-settings.png)

### Shape color rule

Under [Shape color rule](./../../../../report-items/map/shape-color-rule/) category, enable the **Enable Color Rule** check box.
* Set `=CDec(Sum(Fields!Population.Value))` expression in Data Value.
* Choose **Color Range** as the Type.
* Set the start, middle, and end colors as **#CFF09E**, **#79BD9B**, **#1074AD**, respectively. The start color applies to the low end of the data range and the end color applies to data at the high end of the data range.
* Choose **Equal Distribution** for **Distribution type**. This type creates unequally sized data intervals and involves adjustment of the interval limits so that each range has an equal number of items.
* The bucket count property is used to split the available data into a required number of ranges. Specify the **Bucket Count** as 25. Notice the legend splits into 25 ranges.

The shape color rule configuration should be as below,

![shape-color-rule](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/shape-color-rule.png)

Now, the colors are applied to the map shapes but with sample data.

![Initial design](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/initial-design.png)

To see the actual data on map surface, preview the report. Before that, resize the width and height of the map, so as to view the information clearly in preview.

![Final design](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/final-design.png)

### Preview report

You can preview the report at design time using the built-in Bold Reports Viewer to ensure the report design is as expected. Switch to the preview mode to see the country name and population when you hover on each shape of the map surface. In the following snapshot, we can observe that the color distribution is applied based on the population range of countries.

![Report preview](/static/assets/on-premise/images/report-designer/report-items/map/color-range-use-case/preview.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/map/design-map-using-color-range-rule.rdl).