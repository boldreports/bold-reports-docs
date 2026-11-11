---
title: Design a Map Report with a Marker Rule | {{site.productName}}
description: Design a map in {{site.productName}} Web Report Designer with a marker rule and marker color rule to show the mineral resources production plants of a company in USA.
---

# Design a map using a marker rule in {{site.productNameTM}}

You can design a map in the {{site.productNameTM}} Web Report Designer with a marker rule and color rule. The example map displays the mineral resources production plants of a company in the USA.

## How do I create the data set?

You create the data set for the map in the {{site.productNameTM}} Web Report Designer from a JSON file. Follow these steps:

1. In the data panel, click `New Data`.
   ![New data](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/new-data.png '#width=350px')
2. Choose the `JSON` connection type.
   ![JSON connection](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/sql-connection.png '#width=350px')
3. Choose `File` as `Type`.
   ![Choose source type](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/type.png '#width=385px')
4. Click the upload button, then browse and upload the JSON file in the `File Path` field.
   ![Provide connection details](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/connection-details.png '#width=385px')
5. Click the `Connect` button.
6. In the query builder, the available fields in the JSON file are loaded under the default table name, `Result`.
   ![Enter query](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/query-designer.png)
7. Drag and drop the `Result` table and execute.
   ![Execute table](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/execute-query.png)
8. Modify the data set `Name` and click **Finish**.
   ![Data list](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/data-list.png '#width=375px')

> Note: This data is created for demonstration purposes. Download the [mineral resources sample JSON file](https://www.syncfusion.com/downloads/support/directtrac/general/ze/mineralresources-1752410690).

## How do I add a map to the report design?

The `Map` report item in the {{site.productNameTM}} Web Report Designer is listed under the `Data Regions` category in the item panel.

![Map listed in item panel](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/map-listed-in-item-panel.png '#width=175px')

To add a `Map` report item to the report, drag the map from the item panel into the design area.

![Drag map into design surface](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/drag-map-item.png '#width=300px')

The map item is rendered in the design area, and the map properties are listed in the properties panel.

![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/initial-map-rendering.png)

> By default, map report item renders with world map shapes.

## How do I bind analytical and shape data?

You bind analytical and shape data in the {{site.productNameTM}} Web Report Designer from the **Basic Settings** category of the properties panel. Follow these steps:

1. Under the **Basic Settings** category, set `USA` in the `Shapes` property and choose the data set in the **DataSet** property.

   ![Basic map rendering](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/assign-data.png '#width=385px')

2. Click the edit icon for the [Binding Data](./../../../../report-items/map/binding-data/) property under **Basic Settings**.
   ![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/binding-data-edit-icon.png '#width=385px')

3. Match the analytical and shape data as described in [Binding Data](./../../../../report-items/map/binding-data/). Choose **name** in the **Field Name** drop-down and choose the **=Fields!Country.Value** expression in **Binding Expression**.
   ![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/match-field.png '#width=385px')

4. Click **Update**.

## How do I customize the map appearance?

You customize the map title, color settings, and other properties in the {{site.productNameTM}} Web Report Designer properties panel.

### Appearance

Under the **Appearance** category in the {{site.productNameTM}} Web Report Designer, set the border width and color properties as required.

![Edit icon](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/border.png '#width=385px')

### Title

Under the [Title](./../../../../report-items/map/properties/#title) category in the {{site.productNameTM}} Web Report Designer, set the title text, position, and font properties for the map title. First, enable the **Enable Title** check box. Then, set the title as `= "Mineral Production Plants of " & Fields!CompanyName.Value` and the position as `center`.
![Title text](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/title.png '#width=385px')

### Shape settings

Under the [Shape Settings](./../../../../report-items/map/shape-settings/) in the {{site.productNameTM}} Web Report Designer, set the following values:

* Background color as `#ffffff`.
* Border color as `#676767` and width as `0.672px`.
* Tooltip as `=Fields!State.Value`.

![Shape settings](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/shape-settings.png '#width=385px')

## How do I define the marker rule?

You define the marker rule in the {{site.productNameTM}} Web Report Designer after you enable the markers. Under the [Marker Settings](./../../../../report-items/map/marker-settings/) category, enable the **Enable Marker** checkbox. Set the marker size as `12.333` and the tooltip as the `=Fields!Resource.Value` expression, and leave the other values at their defaults.
![Marker settings](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/marker-settings.png '#width=385px')

### Marker rule

Under the [Marker rule](./../../../../report-items/map/marker-rule/) category in the {{site.productNameTM}} Web Report Designer, enable the **Enable Marker Rule** check box. Then, set the following values:

* Choose the `Resource` field in **Data Value**.
* Define custom marker styles as described in [Marker property](./../../../../report-items/map/marker-rule/#markers). Here, seven styles in total are defined to show the data on the map surface.![Marker settings](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/marker-style-set.png '#width=385px')
* Set **Bucket Count** as seven.

The marker rule configuration looks like the following image.

![Marker rule](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/marker-rule.png '#width=385px')

### Marker color rule

The marker color rule in the {{site.productNameTM}} Web Report Designer differentiates items that share the same marker style. The marker style configuration above defines seven marker styles, and `Diamond` is defined more than once. So, in preview, two items denote the `Diamond` shape. To differentiate these items, apply a marker color rule.

Under the [Marker color rule](./../../../../report-items/map/marker-color-rule/) category, enable the **Enable Color Rule** check box. Then, set the following values:

* Choose `Resource` in **Data Value**.
* Choose `Type` as `Color Palette`.
* Choose `Palette` as `Random`.
* Choose **Optimal** for **Distribution** type.
* Set **Bucket Count** as seven.

The marker color rule configuration looks like the following image.

![Marker color rule](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/marker-color-rule.png '#width=385px')

The markers are now applied to the map shapes, but with sample data.

![Initial design](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/initial-design.png '#width=385px')

To see the actual data on the map surface, preview the report. Before that, resize the width and height of the map so you can view the information clearly in preview.

![Final design](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/final-design.png)

### Preview report

You can preview the report at design time using the built-in {{site.productNameTM}} Viewer to make sure the report design is as expected. In preview mode, you can see the different mineral resources production plants located in states of the USA. The following snapshot shows the marker style distributed based on the type of mineral resource plant.

![Report preview](/static/assets/on-premise/images/report-designer/report-items/map/marker-rule-use-case/preview.png)

> Download the [marker rule map report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/map/design-map-using-marker-rule.rdl).

## See also

* [Map marker rule](./../../../../report-items/map/marker-rule/)
* [Map marker color rule](./../../../../report-items/map/marker-color-rule/)
* [Design a map using a marker color range rule](./../../../../report-items/map/use-case/design-map-using-marker-color-range-rule/)
