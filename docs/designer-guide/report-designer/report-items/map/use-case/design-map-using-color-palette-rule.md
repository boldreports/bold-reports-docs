---
title: Design a Map Report with a Color Palette Rule | Bold Reports
description: Design a map in Bold Reports Web Report Designer with a color palette rule and optimal distribution to display US presidential election results by state.
---

# Design a map using a color palette rule in Bold Reports<sup>®</sup>

You can design a map in the Bold Reports<sup>®</sup> Web Report Designer with a color palette rule and optimal distribution to display US presidential election results. Follow the steps in each section below.

## How do I create the data set?

You create the data set for the map in the Bold Reports<sup>®</sup> Web Report Designer from a JSON file. Follow these steps:

1. In the data panel, click `New Data`.
   ![New data](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/new-data.png '#width=350px')
2. Choose the `JSON` connection type.
   ![JSON connection](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/sql-connection.png '#width=350px')
3. Choose `File` as `Type`.
   ![Choose source type](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/type.png '#width=385px')
4. Click the upload button, then browse and upload the JSON file in the `File Path` field.
   ![Provide connection details](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/connection-details.png '#width=385px')
5. Click the `Connect` button.
6. In the query builder, the available fields in the JSON file are loaded under the default table name, `Result`.
   ![Enter query](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/query-designer.png)
7. Drag and drop the `Result` table and execute.
   ![Execute table](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/execute-query.png)
8. Modify the data set `Name` and click **Finish**.
   ![Data list](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/data-list.png '#width=385px')

> Download the [US presidential election sample JSON file](https://www.syncfusion.com/downloads/support/directtrac/general/ze/US-presidential-election-JSON429439438).

## How do I add a map to the report design?

The `Map` report item in the Bold Reports<sup>®</sup> Web Report Designer is listed under the `Data Regions` category in the item panel.

![Map listed in item panel](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/map-listed-in-item-panel.png '#width=185px')

To add a `Map` report item to the report, drag the map from the item panel into the design area.

![Drag map into design surface](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/drag-map-item.png '#width=300px')

The map item is rendered in the design area, and the map properties are listed in the properties panel.

![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/initial-map-rendering.png)

> By default, map report item renders with world map shapes.

## How do I bind analytical and shape data?

You bind analytical and shape data in the Bold Reports<sup>®</sup> Web Report Designer from the **Basic Settings** category of the properties panel. Follow these steps:

1. Under the **Basic Settings** category, set `USA` in the `Shapes` property and choose the data set in the **DataSet** property.

   ![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/assign-data.png '#width=385px')

2. Click the edit icon for the [Binding Data](./../../../../report-items/map/binding-data/) property under **Basic Settings**.
   ![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/binding-data-edit-icon.png '#width=385px')

3. Match the analytical and shape data as described in [Binding Data](./../../../../report-items/map/binding-data/). Choose **name** in the **Field Name** drop-down and choose the **=Fields!State.Value** expression in **Binding Expression**.

   ![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/match-field.png '#width=385px')

4. Click **Update**.

   ![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/set-binding-fields.png '#width=385px')

## How do I customize the map appearance?

You customize the map name, title, legend, color settings, and other properties in the Bold Reports<sup>®</sup> Web Report Designer properties panel.

### Name

The **Name** property in the Bold Reports<sup>®</sup> Web Report Designer gives a unique name to a specific map report item.

![Set name](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/set-name.png '#width=385px')

### Appearance

Under the **Appearance** category in the Bold Reports<sup>®</sup> Web Report Designer, set the border width and color properties as required.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/border.png '#width=385px')

### Title

Under the [Title](./../../../../report-items/map/properties/#title) category in the Bold Reports<sup>®</sup> Web Report Designer, set the title text, position, and font properties for the map title. First, enable the **Enable Title** check box. Then, add the title and position.
![Title text](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/title.png '#width=350px')

### Legend

Under the [Legend](./../../../../report-items/map/properties/#legend) category in the Bold Reports<sup>®</sup> Web Report Designer, enable the **Enable Legend** check box. Set the background color as **White** and the position as **BottomCenter**. Remove the title text and set the legend mode as **Default**.
![Legend](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/legend.png '#width=385px')

### Shape settings

Under the [Shape Settings](./../../../../report-items/map/shape-settings/) in the Bold Reports<sup>®</sup> Web Report Designer, set the following values:

* Border color as `#676767` and width as `0.667px`.
* Label text as `=Fields!State.Value`.
* Tooltip as the `="Electors : " & Fields!Electors.Value` expression.

![Shape settings](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/shape-settings.png '#width=385px')

### Shape color rule

Under the [Shape color rule](./../../../../report-items/map/shape-color-rule/) category in the Bold Reports<sup>®</sup> Web Report Designer, enable the **Enable Color Rule** check box. Then, set the following values:

* Choose the `Candidate` name in Data Value.
* Choose **Color Palette** as the Type.
* Choose **Optimal** for **Distribution type**. This type adjusts the size of data intervals to limit grouping errors. As a result, the map looks balanced, with only a few shapes in the highest class.

The shape color rule configuration looks like the following image.

![shape-color-rule](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/shape-color-rule.png '#width=385px')

The colors are now applied to the map shapes, but with sample data.

![Initial design](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/initial-design.png '#width=410px')

To see the actual data on the map surface, preview the report. Before that, resize the width and height of the map so you can view the information clearly in preview.

![Final design](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/final-design.png)

### Preview report

You can preview the report at design time using the built-in Bold Reports<sup>®</sup> Viewer to make sure the report design is as expected. The following snapshot shows the color distribution applied based on the candidate who won in each state.

![Report preview](/static/assets/on-premise/images/report-designer/report-items/map/color-palette-use-case/preview.png)

> Download the [color palette map report design (RDL) from GitHub](https://github.com/boldreports/resources/tree/master/docs/report-designer/map/design-map-using-color-palette-rule.rdl).

## See also

* [Map shape color rule](./../../../../report-items/map/shape-color-rule/)
* [Color palette shape rule](./../../../../report-items/map/color-palette-shape-rule/)
* [Design a map using a color range rule](./../../../../report-items/map/use-case/design-map-using-color-range-rule/)
