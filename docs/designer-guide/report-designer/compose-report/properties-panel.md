---
title: Properties Panel | Bold Reports | Report Designer
description: The Properties panel, in which you can view, edit, and set properties of a selected report item or report properties.
keywords: ejReportDesigner, reportdesigner, line, reportitem, border
---

# Properties Panel

The Properties panel allows you to view and edit the properties of the selected report item or the entire report. It appears on the right side in the Web Report Designer.

## Open properties panel

To open the properties panel, click on the `Properties` icon in the configuration panel.
![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/properties-icon.png '#width=300px')

Now, the properties panel will be displayed like below.

![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/initial-properties-view.png '#width=350px')

> By default, the properties panel will display the `Report` properties.

Refer [Report properties](./../../compose-report/report-properties/) section to set and edit the report properties.

### Header properties

To open the `Header` properties, focus the mouse pointer on the header area of the report.

![Open header properties](/static/assets/on-premise/images/report-designer/report-items/properties-panel/header-properties.png)

Refer [Header properties](./../../compose-report/report-properties/) section to set and edit the report header properties.
> Refer [Show or hide header](./../../compose-report/show-or-hide-header-footer-in-report/#show-or-hide-report-header) section to show or hide header in the report.

### Body properties

To open the `Body` properties, focus the mouse pointer on the body area of the report.

![Open body properties](/static/assets/on-premise/images/report-designer/report-items/properties-panel/open-body-properties.png)

Refer [Body properties](./../../compose-report/report-properties/) section to set and edit the report body properties.

### Footer properties

To open the `Footer` properties, focus the mouse pointer on the footer area of the report.

![Open footer properties](/static/assets/on-premise/images/report-designer/report-items/properties-panel/open-footer-properties.png)

Refer [Footer properties](./../../compose-report/report-properties/) section to set and edit the report footer properties.
> Refer [Show or hide footer](./../../compose-report/show-or-hide-header-footer-in-report/#show-or-hide-report-footer) section to show or hide footer in the report.

### Report item properties

To open any of the report item properties, select a report item in the design area. Now, the respective report item properties will be listed in the properties panel. In the below snap, a line report item is selected in the design area and the line properties are listed in the properties panel.

![Open a report item properties](/static/assets/on-premise/images/report-designer/report-items/properties-panel/open-report-item-properties.png)

## Common properties

Some of the common properties like name, border, background etc are applicable for most of the report items and report layout, such properties are described under [Common properties](./../../compose-report/common-properties/) section.

## Set expression

1. Click on the square icon at the right corner of the respective property.
   ![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/expression-menu.png '#width=350px')
2. Click on `Expression` menu to open the expression builder.
   ![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/expression-dialog.png '#width=400px')

   > To learn more about handling expressions in report designer refer [Expressions](./../../compose-report/expressions/) section.
3. The square icon will be indicated in `Black color`, if the expression is applied to the specific property.
   ![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/set-expression-indication.png '#width=400px')

## Reset expression

1. Click on the square icon at the right corner of the respective property.
   ![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/expression-menu.png '#width=350px')
2. Click on `Reset` menu option to remove the expression for the specific property.
3. The icon will be indicated in `White color`, after reset action.
   ![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/reset-expression-indication.png '#width=400px')

## Advanced properties

Specific properties contain nested properties, which are listed under the `Advanced` property menu in the properties panel.

1. Click the square icon at the right corner of the respective property.
   ![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/advanced-menu.png '#width=350px')
2. Click on `Advanced...` menu option. Now, the advanced properties of the respective category will be listed like below.
   ![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/advanced-option-properties.png '#width=350px')
3. After customizing the properties, click on the `Close` icon to close the `Advanced Options` menu.
   ![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/close-advanced-menu.png '#width=350px')

## Dependent properties

There are specific properties in a report items, which will be enabled in the properties view based on the value of some other property. For example when you drag and drop the chart item into design area, the `Title` property will be listed in the properties view like below.

![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/rectangle-page-break-property-initial-view.png '#width=350px')

If the `Show Chart Title` property is set to true, the dependent title properties will be listed in the properties view like below.

![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/enable-page-break-property.png '#width=350px')

Again, if the `Show Chart Title` property is set to false, the dependent title properties will be hidden from the properties view.