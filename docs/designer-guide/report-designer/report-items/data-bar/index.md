---
title: Add and Format a Data Bar in RDL Reports | Bold Reports
description: Add a data bar report item in the Bold Reports Web Report Designer, assign data, and format it to show trends and changes in data within tables and matrices.
keywords: ejReportDesigner, reportdesigner, data bar, tablix, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Add a data bar in the Bold Reports<sup>®</sup> Web Report Designer

A data bar in the Bold Reports<sup>®</sup> Web Report Designer is a small, simple chart that shows trends and changes in data over time, especially over many periods. Data bars convey a lot of information in a little space, and you often use them in tables and matrices.

## How do I add a data bar to the report?

The Bold Reports<sup>®</sup> Web Report Designer lists the data bar report item in the item panel under the `KPI` category.

1. Find the data bar report item under the `KPI` category in the item panel.
   ![Data bar item in item panel](/static/assets/on-premise/images/report-designer/report-items/data-bar/item-panel.png '#width=145px')
2. Drag and drop the data bar report item from the item panel into the design area or inside a tablix cell.
   ![Drag and drop data bar report item into design area](/static/assets/on-premise/images/report-designer/report-items/data-bar/item-drag.png '#width=355px')
3. Review the item properties. After you drop the data bar item in the design area or inside a tablix cell, the properties panel lists its properties.
   ![Data bar item with properties view](/static/assets/on-premise/images/report-designer/report-items/data-bar/designer-area.png)

## How do I create data for the data bar?

To present data in a Bold Reports<sup>®</sup> data bar, create a dataset and bind data to it. This example uses the following dataset query to create the dataset.

```sql
SELECT PC.Name AS ProdCat, PS.Name AS SubCat, DATEPART(yy, SOH.OrderDate) AS OrderYear, 'Q' + DATENAME(qq, SOH.OrderDate) AS OrderQtr,SUM(SOD.UnitPrice * SOD.OrderQty) AS Sales
FROM Production.ProductSubcategory PS INNER JOIN
Sales.SalesOrderHeader SOH INNER JOIN
Sales.SalesOrderDetail SOD ON SOH.SalesOrderID = SOD.SalesOrderID INNER JOIN
Production.Product P ON SOD.ProductID = P.ProductID ON PS.ProductSubcategoryID = P.ProductSubcategoryID INNER JOIN
Production.ProductCategory PC ON PS.ProductCategoryID = PC.ProductCategoryID
GROUP BY DATEPART(yy, SOH.OrderDate), PC.Name, PS.Name, 'Q' + DATENAME(qq, SOH.OrderDate), PS.ProductSubcategoryID
```

> To create the dataset with this query, see [Create an embedded dataset](./../../manage-data/dataset/create-an-embedded-dataset/). This example uses the `AdventuresWorks` database.

## How do I assign data to the data bar?

A Bold Reports<sup>®</sup> data bar needs a minimum of 1 value element to show data. Drop the measure or expression field you want to analyze into the `Y Values` section. Drop the dimension that categorizes the measure into the `Columns` section. To categorize by a series, also drop the respective dimension into the `Rows` section.

To configure data in the data bar, follow these steps:

1. Select the data bar report item to bind data to it.
2. Click the `Properties` icon in the configuration panel to open the property pane. Then, switch to the `DATA` tab.
   ![Chart properties pane](/static/assets/on-premise/images/report-designer/report-items/data-bar/chart-properties-pane.png)
3. Choose a dataset in the dropdown list. The dropdown lists the data available in the report.
   ![Choose the dataset for chart](/static/assets/on-premise/images/report-designer/report-items/data-bar/data-assign-drop-down.png '#width=385px')
4. Review the fields. The `Measures` section lists numeric columns and numeric expressions. The `Dimensions` section lists other types of columns and dimension expressions.
   ![Measures and dimensions](/static/assets/on-premise/images/report-designer/report-items/data-bar/measures-dimensions-category.png '#width=385px')
5. **Drag and Drop Measure Element**:
   Drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Values` section.
   ![Add a Y-value field](/static/assets/on-premise/images/report-designer/report-items/data-bar/add-y-values-field.png '#width=385px')
   The following image shows the report item design after you add the Y value field.
   ![Preview after adding y-value field](/static/assets/on-premise/images/report-designer/report-items/data-bar/y-value-chart-design-view.png '#width=385px')
6. **Aggregate Options**:
   Click the `Settings` icon (highlighted in the image) to open the aggregation type dropdown list.
   ![Aggregate settings icon](/static/assets/on-premise/images/report-designer/report-items/data-bar/aggregation-settings-icon.png '#width=195px')
   Set the aggregation type that computes the selected column.
   ![Aggregate menu list](/static/assets/on-premise/images/report-designer/report-items/data-bar/aggregation-settings-menu.png '#width=395px')
7. **Drag and Drop Dimension Element**:
   Drag the dimension element from the `Dimensions` section and drop it into the `Column(s)` section. The dimension measures against the numeric column(s) selected in the `Y Value(s)` section.
   ![Add dimension field](/static/assets/on-premise/images/report-designer/report-items/data-bar/add-field-to-column-section.png '#width=395px')
   The following image shows the report item design after you add the dimension field.
   ![Preview after adding dimension field](/static/assets/on-premise/images/report-designer/report-items/data-bar/column-field-design-preview.png '#width=385px')
8. **Grouping**:
   Group the added column element with another column by adding the respective dimension element into the Row(s) section.
   ![Achieve grouping by row values](/static/assets/on-premise/images/report-designer/report-items/data-bar/add-field-to-rows-section.png '#width=395px')
   The following image shows the report item design after you add the row field.
   ![Preview of row value grouping](/static/assets/on-premise/images/report-designer/report-items/data-bar/row-field-design-preview.png '#width=385px')

## Which properties can I set for a data bar?

The Bold Reports<sup>®</sup> data bar properties control its name, series, appearance, page breaks, position, export behavior, and visibility. Before you set the following properties, see the [Properties panel](./../../compose-report/properties-panel/) section.

### Name

The **Name** property provides a unique name for the data bar item in the report.

![Name property](/static/assets/on-premise/images/report-designer/report-items/data-bar/name-property.png '#width=375px')

### Basic Settings

The data bar **Basic Settings** category is shown in the following image.

![Chart Basic settings](/static/assets/on-premise/images/report-designer/report-items/data-bar/basic-settings.png '#width=375px')

### Choose Series

The data bar lists all series you add in the `Choose Series` dropdown. To customize a series appearance, choose the required series name in the dropdown.

![Choose series](/static/assets/on-premise/images/report-designer/report-items/data-bar/single-series-list-in-drop-down.png '#width=375px')

To customize each series using the properties panel, see [Series](../chart/series/).

### Appearance

The data bar **Appearance** properties (border style, color, width, and background color) style the chart and customize its appearance in the report design. The properties panel lists these properties under the `Appearance` category.

![Chart appearance](/static/assets/on-premise/images/report-designer/report-items/chart/appearance-property.png '#width=375px')

### Chart Area

The data bar **Chart Area** properties, such as border width, color, shadow color, shadow offset, and background color, customize the area of the chart design. The properties panel lists these properties under the `Chart Area` category.

![Chart Area](/static/assets/on-premise/images/report-designer/report-items/data-bar/chart-area.png '#width=375px')

### No Data

The data bar **No Data** property displays static text when a dataset returns empty or zero rows at run time.

![Chart No data message](/static/assets/on-premise/images/report-designer/report-items/chart/no-data/no-data.png '#width=355px')

To set or reset no data message properties, see the [No Data Message](../chart/no-data-message/) property section.

### Page break

The data bar **page break** property controls the amount of information on each page when you preview the report. To apply the page break property to the data bar report item, follow these steps:

1. Choose a `Break Location` type in the dropdown. The Break Location property specifies where the page break occurs.
   ![Break location](/static/assets/on-premise/images/report-designer/report-items/rectangle/break-location-types.png '#width=355px')
2. To restart the page numbering on each page, enable the `Page Number Reset` property checkbox.
   ![Reset page number](/static/assets/on-premise/images/report-designer/report-items/rectangle/page-break-property.png '#width=355px')

### Position

The data bar **Position** property sets the width, height, left, and top position of the data bar in the report design. To handle these properties using the properties panel, see the [Position](./../../compose-report/common-properties/#position) section.

![Chart postion](/static/assets/on-premise/images/report-designer/report-items/data-bar/position.png '#width=355px')

### Data Element

The data bar **Data element** properties control the visibility of a report item when you export the report in XML format. The properties panel lists them under the `Data Element` category.

![Data element properties](/static/assets/on-premise/images/report-designer/report-items/tablix/data-element-properties.png '#width=355px')

#### Name

The `Name` field assigns a custom name to the data bar element. The data bar exports with the provided name.

![Data element name property](/static/assets/on-premise/images/report-designer/report-items/tablix/name-property.png '#width=355px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

The `Output` property controls the visibility of the data bar when you export the report. Each option performs the following operation:

* **Auto** or **Output** - Exports the data bar report item.
* **NoOutput** - Does not export the data bar report item.

![Data element output property](/static/assets/on-premise/images/report-designer/report-items/tablix/output-property.png '#width=355px')

### Visibility

The data bar **Visibility** property conditionally shows or hides the data bar report item on report preview or export. To set the visibility of a data bar item using the properties panel, see the [Visibility](./../../compose-report/common-properties/#visibility) section.

![Chart visibility](/static/assets/on-premise/images/report-designer/report-items/data-bar/visibility.png '#width=355px')

### Miscellaneous

The data bar **Miscellaneous** category contains the page name, document map, bookmark, custom attributes, tooltip, and custom style properties.

#### Page name

The **page name** property names the first worksheet of the Excel workbook when you export the report to Excel format.

![Page name property](/static/assets/on-premise/images/report-designer/report-items/data-bar/page-name.png '#width=355px')

You can set static or dynamic text as the page name. To set and reset dynamic text, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Document Map

A **document map** is a navigational feature that displays a separate side pane with a set of navigational links in a hierarchical structure when you view a report. A user can click the content in the list to navigate to the report page that displays that item. To configure the document map in the report design, see the [Document Map](./../../compose-report/document-map/) section.

You can set static or dynamic text as the value for the document map property. To set and reset dynamic text, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Bookmark

Bookmark links let users navigate to different parts of an SSRS report. You can add bookmarks to each textbox, image, table, or chart, or to the unique group values displayed in a tablix, to direct users to specified locations in the report. The value of the bookmark property can be your own strings or an expression. To configure bookmarks in the report design, see the [Bookmark](./../../compose-report/bookmark/) section.

You can set static or dynamic text as the value for the bookmark property. To set and reset dynamic text, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Custom attributes

The **custom attributes** property sets the values for chart custom properties. To assign values to custom properties using the properties panel, see the [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.

#### Tooltip

The **Tooltip** property displays informative text or values when the user hovers over the report item in the report preview. To set a tooltip for a data bar report item using the properties panel, see the [Tooltip](./../../compose-report/common-properties/#tooltip) section.

#### Custom Style

The `Custom Style` property enables external CSS for styling report items, giving more flexibility than the built-in styling options. Use this property to meet specific design requirements and keep styling consistent across multiple reports. For a step-by-step guide on setting up custom styles in your report, see the **How To** section of this guide.

![custom style property](/static/assets/on-premise/images/report-designer/report-items/data-bar/custom-style-property.png '#width=355px')

## How do I set an expression on a data bar property?

You can set an expression on a few Bold Reports<sup>®</sup> data bar properties to process their values based on expressions. To set expressions on data bar report item properties, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## How do I reset an expression?

To `Reset` the expression applied to a Bold Reports<sup>®</sup> data bar property, see the [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## How do I open advanced properties?

A few Bold Reports<sup>®</sup> data bar properties contain nested properties. To open and handle the nested properties, see the [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.

## Frequently asked questions

### Where is the data bar in the item panel?

The Bold Reports<sup>®</sup> Web Report Designer lists the data bar report item under the `KPI` category in the item panel.

### What data does a data bar need?

A data bar needs a minimum of 1 value element in the `Y Values` section. Add dimensions to the `Columns` and `Rows` sections to categorize the measure.

## See also

* [Design an SSRS data bar report using a table](./design-ssrs-data-bar-using-table/)
* [Chart series properties](../chart/series/)
* [Chart no data message](../chart/no-data-message/)
