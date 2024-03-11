---
title: Design map using marker rule | Bold Reports Designer
description: This section describes the steps involved in designing a map using marker rule along with marker color rule.
---

# Design map using marker rule

The following steps guides you to design a map using marker rule and color rule to display the mineral resources production plants of a company in USA.

## Create data set

1. In the data panel, click `New Data`.
   ![New data](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/new-data.png '#width=350px')
2. Choose the `JSON` connection type.
   ![JSON connection](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/sql-connection.png '#width=350px')
3. Choose `File` as `Type`.
   ![Choose source type](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/type.png '#width=385px')
4. Click on the upload button, browse and upload the JSON file in `File Path` field.
   ![Provide connection details](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/connection-details.png '#width=385px')
5. Click on the `Connect` button.
6. In the query builder, the available fields in JSON file will be loaded under default table name, `Result`.
   ![Enter query](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/query-designer.png)
7. Drag and drop the `Result` table and execute.
   ![Execute table](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/execute-query.png)
8. Modify the data set `Name` and click Finish.
   ![Data list](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/data-list.png '#width=375px')

> Note: This Data is created on our own for demonstration purpose. Download the sample JSON file from [here](https://www.syncfusion.com/downloads/support/directtrac/general/ze/mineralresources-1752410690).

## Add map to the report design

The `Map` report item is listed under `Data Regions` category in the item panel.

![Map listed in item panel](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/map-listed-in-item-panel.png '#width=175px')

To add a `Map` report item to the report, drag the map from the item panel into design area.

![Drag map into design surface](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/drag-map-item.png '#width=300px')

Now, the map item will be rendered in the design area and the map properties will be listed in properties panel.

![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/initial-map-rendering.png)

> By default map report item renders with world map shapes.

## Bind analytical and shape data

In the Properties panel, under the **Basic Settings** category, set the `USA` in `Shapes` property and choose the data set in the **DataSet** property.

![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/assign-data.png '#width=385px')

Then click on the edit icon for the [Binding Data](./../../../../report-items/map/binding-data/) property under **Basic Settings**.
![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/binding-data-edit-icon.png '#width=385px')

Refer [Binding Data](./../../../../report-items/map/binding-data/) section and match analytical and shape data. Choose **name** in the **Field Name** drop-down and choose the **=Fields!Country.Value** expression in **Binding Expression**.
![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/match-field.png '#width=385px')

Click on the Update.

## Customize map appearance

Let’s customize the map title, color settings, and other properties.

### Appearance

Under the **Appearance** category, set the border width and color properties as required.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/border.png '#width=385px')

### Title

Under the [Title](./../../../../report-items/map/properties/#title) category, set the title text, position, and font properties for the map title. First, enable the Enable Title check box. Then, set the title as `= "Mineral Production Plants of " & Fields!CompanyName.Value` and position as `center`.
![Title text](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/title.png '#width=385px')

### Shape settings

Under the [Shape Settings](./../../../../report-items/map/shape-settings/), set the background color as `#ffffff`, border color as `#676767`, width as `0.672px` and tooltip as `=Fields!State.Value`.
![Shape settings](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/shape-settings.png '#width=385px')

## Define marker rule

Under [Marker Settings](./../../../../report-items/map/marker-settings/) category enable the **Enable Marker** checkbox. Set the marker size as `12.333`, tooltip as `=Fields!Resource.Value` expression and let other values to default.
![Marker settings](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/marker-settings.png '#width=385px')

### Marker rule

Under [Marker rule](./../../../../report-items/map/marker-rule/) category, enable the **Enable Marker Rule** check box.
* Choose `Resource` field in **Data Value**.
* Refer [Marker property](./../../../../report-items/map/marker-rule/#markers) section and define custom marker style. Here, totally seven styles are defined to achieve the data in map surface.![Marker settings](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/marker-style-set.png '#width=385px')
* Set **Bucket Count** as seven.

The marker rule configuration should be as below,

![Marker rule](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/marker-rule.png '#width=385px')

### Marker color rule

In above marker style configuration, we have defined seven marker styles. In which, we defined `Diamond` multiple times. So, in preview two items will denote `Diamond` shape. To differentiate these items, we can apply marker color rule.

Under [Marker color rule](./../../../../report-items/map/marker-color-rule/) category, enable the **Enable Color Rule** check box.
* Choose the `Resource` in **Data Value**.
* Choose `Type` as `Color Palette`.
* Choose `Palette` as `Random`.
* Choose **Optimal** for **Distribution** type.
* Set **Bucket Count** as seven.

The marker color rule configuration should be as below,

![Marker color rule](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/marker-color-rule.png '#width=385px')

Now, the marker are applied to the map shapes but with sample data.

![Initial design](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/initial-design.png '#width=385px')

To see the actual data on map surface, preview the report. Before that, resize the width and height of the map, so as to view the information clearly in preview.

![Final design](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/final-design.png)

### Preview report

You can preview the report at design time using the built-in Bold Reports Viewer to ensure the report design is as expected. Switch to the preview mode to visualize the different mineral resources production plants located in states of USA. In the following snapshot, we can observe that the marker style is distributed based on the type of mineral resource plant.

![Report preview](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/preview.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/map/design-map-using-marker-rule.rdl).