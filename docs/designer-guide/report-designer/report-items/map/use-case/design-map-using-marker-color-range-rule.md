---
title: Design map using marker color range rule | Report Designer
description: This section describes the steps involved in designing a map using marker color range rule with equal distribution type.
---

# Design map using marker color range rule

The following steps guides you to design a map using marker color range rule and equal distribution to display the sales done by the sales person of USA states.

## Create data

In this designing section, the following dataset query is used for dataset creation.

```sql
SELECT
  p.FirstName,
  p.LastName,
  p.City,
  RTRIM(sp.StateProvinceCode) AS StateCode,
  p.SalesLastYear
FROM
  Sales.vSalesPerson p
  INNER JOIN Person.BusinessEntityAddress ea
    ON p.BusinessEntityID = ea.BusinessEntityID
  INNER JOIN Person.Address a
    ON ea.AddressID = a.AddressID
  INNER JOIN Person.StateProvince sp
    ON a.StateProvinceID = sp.StateProvinceID
WHERE
CountryRegionName = 'United States'
```

> Refer [Create Data](./../../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `AdventuresWorks2012` database is used here.

## Add map to the report design

The `Map` report item is listed under `Data Regions` category in the item panel.

![Map listed in item panel](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/map-listed-in-item-panel.png '#width=185px')

To add a `Map` report item to the report, drag the map from the item panel into design area.

![Drag map into design surface](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/drag-map-item.png '#width=300px')

Now, the map item will be rendered in the design area and the map properties will be listed in properties panel.

![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/initial-map-rendering.png)

> By default map report item renders with world map shapes.

## Bind analytical and shape data

In the Properties panel, under the **Basic Settings** category, set the `USA` in `Shapes` property and choose the data set in the **DataSet** property.

![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/assign-data.png '#width=385px')

Then click on the edit icon for the [Binding Data](./../../../../report-items/map/binding-data/) property under **Basic Settings**.
![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/binding-data-edit-icon.png '#width=385px')

Refer [Binding Data](./../../../../report-items/map/binding-data/) section and match analytical and shape data. Choose `iso_3166_2` in the **Field Name** drop-down and choose the **=Fields!StateCode.Value** expression in **Binding Expression**.
![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/match-field.png '#width=385px')

Click on the Update.

## Customize map appearance

Let’s customize the map title, color settings, and other properties.

### Appearance

Under the **Appearance** category, set the border width and color properties as required.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/border.png '#width=385px')

### Title

Under the [Title](./../../../../report-items/map/properties/#title) category, set the title text, position, and font properties for the map title. First, enable the Enable Title check box. Then, add the title and position.
![Title text](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/title.png '#width=385px')

### Shape settings

Under the [Shape Settings](./../../../../report-items/map/shape-settings/), set the background color as `#8bd3e1`, border color as `#676767`, border width as `0.667px`, and tooltip as `=Fields!StateCode.Value & " : "&Fields!City.Value`.
![Shape settings](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/shape-settings.png '#width=385px')

The map design will look like below,

![Before marker design](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/before-marker-design.png '#width=385px')

## Define marker color rule

Under [Marker Settings](./../../../../report-items/map/marker-settings/) category enable the **Enable Marker** checkbox. Set the background color as `#ffffff`, border color as `#000000` and width as `1.333px`,marker style as `Diamond`, marker size as `14.333` and tooltip as `=Fields!FirstName.Value + " " + Fields!LastName.Value + " - " + FormatCurrency(Fields!SalesLastYear.Value)` expression.
![Marker settings](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/marker-settings.png '#width=385px')

Under [Marker color rule](./../../../../report-items/map/marker-color-rule/) category, enable the **Enable Color Rule** check box.
* Choose the Sum(SalesLastYear) in **Data Value**.
* Choose `Type` as `Color Range`.
* Set the start, middle, and end colors as **#008000**, **#ffff00**, **#ff0000**, respectively. The start color applies to the low end of the data range and the end color applies to data at the high end of the data range.
* Choose **Equal distribution** for **Distribution** type.
* Set **Bucket Count** as seven.

The marker color rule configuration should be as below,

![Marker color rule](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/marker-color-rule.png '#width=385px')

Now, the marker are applied to the map shapes but with sample data.

![Initial design](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/initial-design.png)

To see the actual data on map surface, preview the report. Before that, resize the width and height of the map, so as to view the information clearly in preview.

![Final design](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/final-design.png)

### Preview report

You can preview the report at design time using the built-in Bold Reports Viewer to ensure the report design is as expected. In the following snapshot, we can observe that the background color for markers is distributed based on the sales amount done by sales person in respective state. Hover on each shape to see the details like state code and the city where sales happened.

![Report preview](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/preview-shape-tooltip.png '#width=425px')

Hover on each marker filled with colors to see the details like sales person name and sales amount.

![Report preview](/static/assets/on-premise/images/report-designer/report-items/map/marker-color-range-use-case/preview.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/map/design-map-using-marker-color-range-rule.rdl).