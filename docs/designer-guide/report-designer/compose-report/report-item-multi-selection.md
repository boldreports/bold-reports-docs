---
title: Report Item Multiselection | Report Designer | Bold Reports
description: This section describes about set or edit the multiple report item properties in a single action to enhance the report design in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, list, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, nested data regions, tablix
---

# Report Item Multiselection

Report item multiselection allows to set/edit the properties of report items in a easier way. Customizing more than one report item properties in a single action, makes the report designing steps as a simpler and work saving process.

## Open properties panel

To open the properties panel, click on the `Properties` icon in the configuration panel.
![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/properties-icon.png '#width=300px')

Now, the properties panel will be displayed like below.

![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/initial-properties-view.png '#width=300px')

> By default, the properties panel will display the `Report` properties.

## Same item type selection

When the report items of same type is selected in the design area, the properties of the respective report item type will be listed in the properties panel. Drag and drop more than one rectangle report items in the design area and select all rectangle report items. Now, the properties of `Rectangle` report item will be listed in the properties panel.

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/same-report-item-selection.png)

When you edit the report item properties on multiple report item selection, the respective property change will be applied to all selected items in the design area in single property change action. For example, if you change the `Background` color in the properties panel,

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/set-property-same-report-item-selection.png)

the background color will be applied to the selected rectangle report items in the design area.

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/background-property-output.png)

Similarly, you can set other properties for the selected report items in the design area. On undo and redo action the property values will be restored in all previously selected report items.

The `Name` property of the report item will be in disabled state and indicates the selected report item type. For example, in the above snap two rectangle report items are selected and the type is indicated as `Rectangle` in the name property field. The `Name` property change is not allowed for multiple report item selection.

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/name-property-for-same-type-selection.png)

## Different item type selection

When the report items of different type is selected in the design area, the static properties such as border, background, position and visibility properties will be listed in the properties panel. Drag and drop more than one report items of different types in the design area and select all report items. Now, the static properties will be listed in the properties panel.

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/different-report-item-selection.png)

When you edit the report item properties on multiple report item selection, the respective property change will be applied to all selected items in the design area in single property change action. For example, if you change the `Background` color in the properties panel,

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/set-property-different-report-item-selection.png)

the background color will be applied to the selected report items in the design area.

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/background-property-different-item-selection.png)

Similarly, you can set other properties for the selected report items in the design area. On undo and redo action the property values will be restored in all previously selected report items.

> Note: On property change action, if any of the selected report item has no support for the specific property will be skipped. For example, The line report item has no `Background Color` property support. If  background property is changed for line and rectangle report item combination, the background property change will be skipped for line report item and only applied to rectangle.

The `Name` property of the report item will be in disabled state and for different report item selection it is indicated as `Common Properties`. The `Name` property change is not allowed for multiple report item selection.

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/name-property-for-different-type-selection.png)

## Cell with same item type

When the tablix cell containing same report item type is selected in the tablix data region, the properties of the respective report item type will be listed in the properties panel. Select multiple tablix cell containing textbox report item, now the properties of `textbox` report item will be listed in the properties panel.

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/select-tablix-cell-with-same-report-item.png)

When you edit the tablix cell properties on multiple cell selection, the respective property change will be applied to all selected cells in the tablix in single property change action. For example, if you change the `Content` property for textboxes in the properties panel,

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/set-tablix-cell-property-for-same-report-item-type.png)

the content property value will be applied to selected cells in the tablix data region.

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/set-content-for-textbox.png)

Similarly, you can set other properties for the selected tablix cell in the data region. On undo and redo action the property values will be restored in all previously selected tablix cells.

## Cell with different item type

When the tablix cell containing different report item type is selected in the tablix data region, the static properties such as border, background, position and visibility properties will be listed in the properties panel. Select multiple tablix cell containing different report items type, now the static properties will be listed in the properties panel.

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/select-tablix-cell-with-different-report-item.png)

When you edit the tablix cell properties on multiple cell selection, the respective property change will be applied to all selected cells in the tablix on a single property change action. For example, if you change the `Background` color in the properties panel,

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/set-property-different-cell-selection.png)

the background color will be applied to the selected cells in the tablix data region.

![Same report item selection](/static/assets/on-premise/images/report-designer/report-items/report-item-multi-selection/set-property-tablix-cell-ouput.png)

Similarly, you can set other properties for the selected tablix cell in the data region. On undo and redo action the property values will be restored in all previously selected tablix cells.