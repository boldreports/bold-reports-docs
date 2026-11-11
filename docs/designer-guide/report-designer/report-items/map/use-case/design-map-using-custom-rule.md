---
title: Design a Map Report with a Custom Color Rule | {{site.productName}}
description: Design a map in {{site.productName}} Web Report Designer with a custom color rule and custom distribution to show the GDP growth rate of each country like a heat map.
---

# Design a map using a custom rule in {{site.productNameTM}}

You can design a map in the {{site.productNameTM}} Web Report Designer with a custom color rule and custom distribution. The example map displays the annual gross domestic product (GDP) growth rate of each country for 2019, like a heat map.

## How do I create the data set?

You create the data set for the map in the {{site.productNameTM}} Web Report Designer from a JSON file. Follow these steps:

1. In the data panel, click `New Data`.
   ![New data](/static/images/report-designer/report-items/map/color-rule-use-case/new-data.png '#width=350px')
2. Choose the `JSON` connection type.
   ![JSON connection](/static/images/report-designer/report-items/map/color-rule-use-case/sql-connection.png '#width=350px')
3. Choose `File` as `Type`.
   ![Choose source type](/static/images/report-designer/report-items/map/color-rule-use-case/type.png '#width=425px')
4. Click the upload button, then browse and upload the JSON file in the `File Path` field.
   ![Provide connection details](/static/images/report-designer/report-items/map/color-rule-use-case/connection-details.png '#width=380px')
5. Click the `Connect` button.
6. In the query builder, the available fields in the JSON file are loaded under the default table name, `Result`.
   ![Enter query](/static/images/report-designer/report-items/map/color-rule-use-case/query-designer.png)
7. Drag and drop the `Result` table and execute.
   ![Execute table](/static/images/report-designer/report-items/map/color-rule-use-case/execute-query.png)
8. Modify the data set `Name` and click **Finish**.
   ![Data list](/static/images/report-designer/report-items/map/color-rule-use-case/data-list.png '#width=385px')

> Note: Download the [World GDP growth sample JSON file](https://www.syncfusion.com/downloads/support/directtrac/general/ze/World-GDP-Growth-JSON-185214165). This data is downloaded from [Data world bank](https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG).

## How do I add a map to the report design?

The `Map` report item in the {{site.productNameTM}} Web Report Designer is listed under the `Data Regions` category in the item panel.

![Map listed in item panel](/static/images/report-designer/report-items/map/color-rule-use-case/map-listed-in-item-panel.png '#width=175px')

To add a `Map` report item to the report, drag the map from the item panel into the design area.

![Drag map into design surface](/static/images/report-designer/report-items/map/color-rule-use-case/drag-map-item.png '#width=350px')

The map item is rendered in the design area, and the map properties are listed in the properties panel.

![Basic map rendering](/static/images/report-designer/report-items/map/color-rule-use-case/initial-map-rendering.png)

> By default, map report item renders with world map shapes.

## How do I bind analytical and shape data?

You bind analytical and shape data in the {{site.productNameTM}} Web Report Designer from the **Basic Settings** category of the properties panel. Follow these steps:

1. Under the **Basic Settings** category, choose the data set in the **DataSet** property.

   ![Basic map rendering](/static/images/report-designer/report-items/map/color-rule-use-case/assign-data.png '#width=385px')

2. Click the edit icon for the [Binding Data](./../../../../report-items/map/binding-data/) property under **Basic Settings**.
   ![Edit icon](/static/images/report-designer/report-items/map/color-rule-use-case/binding-data-edit-icon.png '#width=385px')

3. Match the analytical and shape data as described in [Binding Data](./../../../../report-items/map/binding-data/). Choose **name** in the **Field Name** drop-down and choose the **=Fields!Country.Value** expression in **Binding Expression**.

   ![Edit icon](/static/images/report-designer/report-items/map/color-rule-use-case/match-field.png '#width=385px')

4. Click **Update**.

## How do I customize the map appearance?

You customize the map title, legend, color settings, and other properties in the {{site.productNameTM}} Web Report Designer properties panel.

### Appearance

Under the **Appearance** category in the {{site.productNameTM}} Web Report Designer, set the border width and color properties as required.

![Edit icon](/static/images/report-designer/report-items/map/color-rule-use-case/border.png '#width=385px')

### Title

Under the [Title](./../../properties/#title) category in the {{site.productNameTM}} Web Report Designer, set the title text, position, and font properties for the map title. First, enable the **Enable Title** check box. Then, add the title and position.
![Title text](/static/images/report-designer/report-items/map/color-rule-use-case/title.png '#width=385px')

### Legend

Under the [Legend](./../../properties/#legend) category in the {{site.productNameTM}} Web Report Designer, enable the **Enable Legend** check box. Set the following values:

* Background color as **White**.
* Position as **BottomCenter**.
* Legend mode as **Interactive**.
* `=Fields!IndicatorName.Value` as the [expression](./../../../../compose-report/expressions/) for **Title**.

![Legend](/static/images/report-designer/report-items/map/color-rule-use-case/legend.png '#width=385px')

### Shape settings

Under the [Shape Settings](./../../shape-settings/) in the {{site.productNameTM}} Web Report Designer, set the following values:

* Border color as `#81808c` and width as `0.667px`.
* Tooltip as the `= Fields!Country.Value + " : "+ Round(Fields!GDP.Value, 3)` expression.

![Shape settings](/static/images/report-designer/report-items/map/color-rule-use-case/shape-settings.png '#width=385px')

### Shape color rule

Under the [Shape color rule](./../../../../report-items/map/shape-color-rule/) category in the {{site.productNameTM}} Web Report Designer, enable the **Enable Color Rule** check box. Then, set the following values:

* Choose Sum(GDP) in **Data Value**.
* Choose **Custom** as the Type. Following the [Custom colors](./../../../../report-items/map/custom-color-shape-rule/) section, set these color codes in the custom colors panel: **#cfedfb**, **#aadee8**, **#9cd2ed**, **#70bdff**, and **#4d739e**.![Shape settings](/static/images/report-designer/report-items/map/color-rule-use-case/custom-colors.png '#width=385px')
* Choose **Custom** for **Distribution** type. Indicate your own number of data ranges to decide the distribution of values.
* Following the [Custom distribution](./../../../../report-items/map/custom-color-shape-rule/) section, define the custom range as follows:![Shape settings](/static/images/report-designer/report-items/map/color-rule-use-case/custom-distribution.png '#width=385px')

The shape color rule configuration looks like the following image.

![shape-color-rule](/static/images/report-designer/report-items/map/color-rule-use-case/shape-color-rule.png '#width=385px')

The colors are now applied to the map shapes, but with sample data.

![Initial design](/static/images/report-designer/report-items/map/color-rule-use-case/initial-design.png '#width=385px')

To see the actual data on the map surface, preview the report. Before that, resize the width and height of the map so you can view the information clearly in preview.

![Final design](/static/images/report-designer/report-items/map/color-rule-use-case/final-design.png)

### Preview report

You can preview the report at design time using the built-in {{site.productNameTM}} Viewer to make sure the report design is as expected. In preview mode, hover over each shape on the map surface to see the country name and GDP growth rate. The following snapshot shows the color distribution applied based on the GDP growth rate of countries.

![Report preview](/static/images/report-designer/report-items/map/color-rule-use-case/preview.png)

> Download the [custom rule map report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/map/design-map-using-custom-rule.rdl).

## See also

* [Custom color shape rule](./../../../../report-items/map/custom-color-shape-rule/)
* [Custom distribution for map shapes](./../../../../report-items/map/custom-distribution-shape-rule/)
* [Map shape color rule](./../../../../report-items/map/shape-color-rule/)
