---
title: Simple steps on line reportitem using web report designer
description: This section describes about how to draw a line in the report and its properties using the Bold Report Designer
keywords: ejReportDesigner, reportdesigner, line, reportitem, border
---

# Line

Line reportitem allows to separate the report sections  horizontally, vertically, or diagonally. It has a start and end point with various style properties. A line has visually no data associated with it.

![Line report item in design area](/static/assets/on-premise/images/report-designer/report-items/line/line-reportitem-designarea.png)

## To draw a line

1. Drag and drop line reportitem from the itempanel to designer surface.
![Drag and drop line report item in design area](/static/assets/on-premise/images/report-designer/report-items/line/drag-drop-line-reportitem.png)

2. Line report item and its associated properties are listed in the property panel.
![Line report item in design area](/static/assets/on-premise/images/report-designer/report-items/line/line-reportitem-designarea.png)

## Line Properties

### Line Styles

The line style property can be used to change the style of the line report item. This property is listed under `Basic Settings` category. They are **Solid**, **Dashed** and **Dotted**.

![Line reportitem different styles](/static/assets/on-premise/images/report-designer/report-items/line/line-style-types.png)

### Border

The line style property allows to increase or decrease thickness of line report item along three different line styles.

![Line reportitem border styles](/static/assets/on-premise/images/report-designer/report-items/line/line-reportitem-border.png)

### Position

The line style property allows the line reportitem to place left and top position in the designer surface.
![Line report item in postion change](/static/assets/on-premise/images/report-designer/report-items/line/line-reportitem-position.png)

### Size

The line style property allows to increase or decrease the width and height of line report item.
![Line report item in size change](/static/assets/on-premise/images/report-designer/report-items/line/line-reportitem-size.png)

### Visibility

Enable/Disable the visibility property to show and hide the line reportitem, when preview the report.

### Miscellaneous

#### Document Map

A document map is a navigational feature that displays a separate side pane with set of navigational links in hierarchical structure when you view a report. A user can click the content in the list, to navigate to the report page that displays that item. Refer [Document Map](./../../compose-report/document-map/) section to configure document map in the report design.

You can set the static or dynamic text as value for document map property. To set and reset dynamic text, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

#### Bookmark

Bookmark links allows the users to navigate to different parts of a SSRS report. You can add bookmarks to each textbox, image, table or chart or to the unique group values displayed in a tablix which can direct the users to specified locations in the report. The value of bookmark property can be your own strings or an expression. Refer [Bookmark](./../../compose-report/bookmark/) section to configure bookmark in the report design.

#### Custom attributes

This property can be used to set the values for line report item custom properties. To create and assign values for custom properties using properties panel refer [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.