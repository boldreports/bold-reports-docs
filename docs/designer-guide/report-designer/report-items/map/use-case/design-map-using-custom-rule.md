---
title: Design map using custom rule | Bold Reports Designer
description: This section describes the steps involved in designing a map using custom color rule and custom distribution type.
---

# Design map using custom rule

The following steps guides you to design a map using custom color rule and custom distribution to display the annual gross domestic product (GDP) growth rate of each country for year 2019 to produce a display similar to a heat map.

## Create data set

1. In the data panel, click `New Data`.
![New data](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/new-data.png)
2. Choose the `JSON` connection type.
![JSON connection](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/sql-connection.png)
3. Choose `File` as `Type`.
![Choose source type](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/type.png)
4. Click on the upload button, browse and upload the JSON file in `File Path` field.
![Provide connection details](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/connection-details.png)
5. Click on the `Connect` button.
6. In the query builder, the available fields in JSON file will be loaded under default table name, `Result`.
![Enter query](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/query-designer.png)
7. Drag and drop the `Result` table and execute.
![Execute table](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/execute-query.png)
8. Modify the data set `Name` and click Finish.
![Data list](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/data-list.png)

>Note: Download the sample JSON file from [here](https://www.syncfusion.com/downloads/support/directtrac/general/ze/World-GDP-Growth-JSON-185214165). This data is downloaded from [Data world bank](https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG).

## Add map to the report design

The `Map` report item is listed under `Data Regions` category in the item panel.

![Map listed in item panel](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/map-listed-in-item-panel.png)

To add a `Map` report item to the report, drag the map from the item panel into design area.

![Drag map into design surface](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/drag-map-item.png)

Now, the map item will be rendered in the design area and the map properties will be listed in properties panel.

![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/initial-map-rendering.png)

> By default map report item renders with world map shapes.

## Bind analytical and shape data

In the Properties panel, under the **Basic Settings** category, choose the data set in the **DataSet** property.

![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/assign-data.png)

Then click on the edit icon for the [Binding Data](./../../../../report-items/map/binding-data/) property under **Basic Settings**.
![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/binding-data-edit-icon.png)

Refer [Binding Data](./../../../../report-items/map/binding-data/) section and match analytical and shape data. Choose **name** in the **Field Name** drop-down and choose the **=Fields!Country.Value** expression in **Binding Expression**.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/match-field.png)

Click on the Update.

## Customize map appearance

Let’s customize the map title, legend, color settings, and other properties.

### Appearance

Under the **Appearance** category, set the border width and color properties as required.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/border.png)

### Title

Under the [Title](./../../properties/#title) category, set the title text, position, and font properties for the map title. First, enable the Enable Title check box. Then, add the title and position.
![Title text](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/title.png)

### Legend

Under the [Legend](./../../properties/#legend) category, enable the **Enable Legend** check box. Set the background color as **White**, position **BottomCenter**, legend mode as **Interactive**, and set the `=Fields!IndicatorName.Value` as [expression](./../../../../compose-report/expressions/) for **Title**.
![Legend](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/legend.png)

### Shape settings

Under the [Shape Settings](./../../shape-settings/), set the border color as `#81808c` and width as `0.667px` and tooltip as `= Fields!Country.Value + " : "+ Round(Fields!GDP.Value, 3)` expression.
![Shape settings](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/shape-settings.png)

### Shape color rule

Under [Shape color rule](./../../../../report-items/map/shape-color-rule/) category, enable the **Enable Color Rule** check box.
* Choose the Sum(GDP) in **Data Value**.
* Choose **Custom** as the Type. Refer [Custom colors](./../../../../report-items/map/custom-color-shape-rule/) section and set the color codes following colors in the custom colors panel: **#cfedfb**, **#aadee8**, **#9cd2ed**, **#70bdff**, and **#4d739e**.![Shape settings](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/custom-colors.png)
* Choose **Custom** for **Distribution** type. Indicate your own number of data ranges to decide the distribution of values.
* Refer [Custom distribution](./../../../../report-items/map/custom-color-shape-rule/) section and define custom range as follows:![Shape settings](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/custom-distribution.png)

The shape color rule configuration should be as below,

![shape-color-rule](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/shape-color-rule.png)

Now, the colors are applied to the map shapes but with sample data.

![Initial design](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/initial-design.png)

To see the actual data on map surface, preview the report. Before that, resize the width and height of the map, so as to view the information clearly in preview.

![Final design](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/final-design.png)

### Preview report

You can preview the report at design time using the built-in Bold Reports Viewer to ensure the report design is as expected. Switch to the preview mode to see the country name and GDP growth rate when you hover on each shape of the map surface. In the following snapshot, we can observe that the color distribution is applied based on the GDP growth rate of countries.

![Report preview](/static/assets/on-premise/images/report-designer/report-items/map/color-rule-use-case/preview.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/map/design-map-using-custom-rule.rdl).