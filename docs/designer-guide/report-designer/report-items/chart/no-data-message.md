---
title: Set a No Data Message for an RDL Chart | {{site.productName}}
description: Set a no data message in the {{site.productName}} Web Report Designer to show static text in place of a chart when its dataset returns no rows at run time.
---

# Set a no data message for a chart in the {{site.productNameTM}} Web Report Designer

In the {{site.productNameTM}} Web Report Designer, the No Data property displays static text when a dataset returns empty or zero rows at run time.

The following image shows the no data message properties of the chart.

![Chart No data message](/static/images/report-designer/report-items/chart/no-data/no-data.png '#width=355px')

## Font

The Font properties in the Web Report Designer set the font family, color, size, style, and weight of the chart no data message.

![Chart No data message](/static/images/report-designer/report-items/chart/no-data/font-properties.png '#width=355px')

### Font Family

The Web Report Designer lists the supported font family names in the drop-down list. Choose the required font family from the drop-down list to change the `Font Family` of the no data message.

![Font family](/static/images/report-designer/report-items/chart/no-data/font-family.png '#width=355px')

### Font Color

To set the font color for the no data message in the Web Report Designer, click the color palette icon and choose the required color in the `Color Palette`.

![Font color](/static/images/report-designer/report-items/chart/no-data/font-color.png '#width=355px')

### Font Size

The Font size property in the Web Report Designer increases the size of the text in the no data message. You can increase the font size using the numeric drop-down highlighted in the following image.

![Font size](/static/images/report-designer/report-items/chart/no-data/font-size.png '#width=355px')

### Font Styles

To change the font style of the no data message in the Web Report Designer, choose the required font style in the `Font Style` drop-down list. The supported font styles are:

* Default
* Normal
* Italic

![Font style](/static/images/report-designer/report-items/chart/no-data/font-style.png '#width=355px')

### Font Weight

To change the font weight of the no data message in the Web Report Designer, choose the required type of font weight property from the drop-down list.

![Font weight](/static/images/report-designer/report-items/chart/no-data/font-weight.png '#width=355px')

## Message

The Message property in the Web Report Designer holds the text shown when the chart dataset has no rows. Provide the required text in the message textbox. The message is displayed to the user when the dataset returns empty or zero rows.

![Message](/static/images/report-designer/report-items/chart/no-data/message.png '#width=355px')

To customize the message appearance, open the `Advanced Panel`.

![Advanced properties](/static/images/report-designer/report-items/chart/no-data/advanced.png '#width=355px')

### Hide No Data

To show or hide the message on the chart surface in the Web Report Designer, toggle the `Hide No Data` checkbox.

![Hide message](/static/images/report-designer/report-items/chart/no-data/hide-no-data.png '#width=355px')

If you disable the `Hide No Data` checkbox, the no data message is displayed on the chart area during preview.

You can also show or hide the message based on dynamic values by using `Expressions`. To open the set or reset expression menu in the properties panel, refer to the [Set Expression](./../../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../../compose-report/properties-panel/#reset-expression) sections.

### Border

The Border property in the Web Report Designer sets the border color and width for the no data message container.

![Border](/static/images/report-designer/report-items/chart/no-data/border.png '#width=355px')

### Background color

The Background color property in the Web Report Designer sets the background color for the no data message container.

![Background color](/static/images/report-designer/report-items/chart/no-data/bg-color.png '#width=355px')

The background color property is applied to the no data message container during preview.

You can also apply the background color based on dynamic values by using `Expressions`. To open the set or reset expression menu in the properties panel, refer to the [Set Expressions](./../../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../../compose-report/properties-panel/#reset-expression) sections.

### Position

The Position property in the Web Report Designer places the no data message container in different positions inside the chart area. The supported positioning patterns are listed in the `Position` drop-down.

![Position](/static/images/report-designer/report-items/chart/no-data/position.png '#width=355px')

By default, the message container is placed in the `TopCenter` position.

All the customizations are applied to the no data message container when you preview the report.

![Preview](/static/images/report-designer/report-items/chart/no-data/preview.png '#width=400px')

## Frequently asked questions

### When does the chart show the no data message?

The chart shows the no data message when its dataset returns empty or zero rows at run time, and the `Hide No Data` checkbox is disabled.

### What is the default position of the no data message?

By default, the message container is placed in the `TopCenter` position inside the chart area.

## See also

* [Chart max data count](https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/report-items/chart/max-data-count-for-chart-item/)
* [Chart legend](./../legend/)
* [Add filters to a chart data region](./../add-filters-to-chart-data-region/)
