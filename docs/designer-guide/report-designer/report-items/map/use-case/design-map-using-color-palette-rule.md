---
title: Design map using color palette rule | Bold Reports
description: This section describes the steps involved in designing a map using color palette rule and optimal distribution type.
---

# Design map using color palette rule

The following steps guides you to design a map using color palette rule and optimal distribution to display the US presidential election results.

## Create data set

1. In the data panel, click `New Data`.
   ![New data](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/new-data.png '#width=350px')
2. Choose the `JSON` connection type.
   ![JSON connection](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/sql-connection.png '#width=350px')
3. Choose `File` as `Type`.
   ![Choose source type](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/type.png '#width=385px')
4. Click on the upload button, browse and upload the JSON file in `File Path` field.
   ![Provide connection details](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/connection-details.png '#width=385px')
5. Click on the `Connect` button.
6. In the query builder, the available fields in JSON file will be loaded under default table name, `Result`.
   ![Enter query](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/query-designer.png)
7. Drag and drop the `Result` table and execute.
   ![Execute table](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/execute-query.png)
8. Modify the data set `Name` and click Finish.
   ![Data list](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/data-list.png '#width=385px')

> Download the sample JSON file from [here](https://www.syncfusion.com/downloads/support/directtrac/general/ze/US-presidential-election-JSON429439438).

## Add map to the report design

The `Map` report item is listed under `Data Regions` category in the item panel.

![Map listed in item panel](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/map-listed-in-item-panel.png '#width=185px')

To add a `Map` report item to the report, drag the map from the item panel into design area.

![Drag map into design surface](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/drag-map-item.png '#width=300px')

Now, the map item will be rendered in the design area and the map properties will be listed in properties panel.

![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/initial-map-rendering.png)

> By default map report item renders with world map shapes.

## Bind analytical and shape data

In the Properties panel, under the **Basic Settings** category, set `USA` in `Shapes` property and choose the data set in the **DataSet** property.

![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/assign-data.png '#width=385px')

Then click on the edit icon for the [Binding Data](./../../../../report-items/map/binding-data/) property under **Basic Settings**.
![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/binding-data-edit-icon.png '#width=385px')

Refer [Binding Data](./../../../../report-items/map/binding-data/) section and match analytical and shape data. Choose **name** in the **Field Name** drop-down and choose the **=Fields!State.Value** expression in **Binding Expression**.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/match-field.png '#width=385px')

Click on the Update.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/set-binding-fields.png '#width=385px')

## Customize map appearance

Let’s customize the map name, title, legend, color settings, and other properties.

### Name

In the **Name** property, you can provide a unique name for specific map report items.

![Set name](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/set-name.png '#width=385px')

### Appearance

Under the **Appearance** category, set the border width and color properties as required.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/border.png '#width=385px')

### Title

Under the [Title](./../../../../report-items/map/properties/#title) category, set the title text, position, and font properties for the map title. First, enable the **Enable Title** check box. Then, add the title and position.
![Title text](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/title.png '#width=350px')

### Legend

Under the [Legend](./../../../../report-items/map/properties/#legend) category, enable the **Enable Legend** check box. Set the background color as **White**, position **BottomCenter**, remove title text and set the legend mode as **Default**.
![Legend](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/legend.png '#width=385px')

### Shape settings

Under the [Shape Settings](./../../../../report-items/map/shape-settings/), set the border color as `#676767` and width as `0.667px`, label text as `=Fields!State.Value` and tooltip as `="Electors : " & Fields!Electors.Value` expression.
![Shape settings](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/shape-settings.png '#width=385px')

### Shape color rule

Under [Shape color rule](./../../../../report-items/map/shape-color-rule/) category, enable the **Enable Color Rule** check box.
* Choose the `Candidate` name in Data Value.
* Choose **Color Palette** as the Type.
* Choose **Optimal** for **Distribution type**. This type adjusts the size of data intervals so as to limit the grouping blunder and in this manner the map looks increasingly adjusted and the outcomes appear to be progressively right, with only a couple of shapes in the highest class as one would anticipate.

The shape color rule configuration should be as below,

![shape-color-rule](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/shape-color-rule.png '#width=385px')

Now, the colors are applied to the map shapes but with sample data.

![Initial design](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/initial-design.png '#width=410px')

To see the actual data on map surface, preview the report. Before that, resize the width and height of the map, so as to view the information clearly in preview.

![Final design](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/final-design.png)

### Preview report

You can preview the report at design time using the built-in Bold Reports Viewer to ensure the report design is as expected. In the following snapshot, we can observe that the color distribution is applied based on the candidate who won in respective states.

![Report preview](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/preview.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/map/design-map-using-color-palette-rule.rdl).