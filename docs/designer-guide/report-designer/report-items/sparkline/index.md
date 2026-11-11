---
title: Add and Format a Sparkline in RDL Reports | {{site.productName}}
description: Add a sparkline report item in {{site.productName}} Web Report Designer, assign data, and configure its series, appearance, page break, and visibility settings.
keywords: ejReportDesigner, reportdesigner, sparkline, tablix, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Sparkline report item in {{site.productNameTM}}

The sparkline report item in the {{site.productNameTM}} Web Report Designer is a small, simple chart that shows trends and changes in data over time, especially over many periods.
Sparklines represent multiple data points and are often used in tables and matrices.

## How do I add a sparkline to the report?

You add a sparkline in the {{site.productNameTM}} Web Report Designer by dragging it from the `KPI` category of the item panel into the design area or a tablix cell.

1. Find the sparkline report item in the item panel under the `KPI` category.
   ![Sparkline item in item panel](/static/images/report-designer/report-items/sparkline/item-panel.png '#width=125px')
2. Drag and drop the sparkline report item from the item panel into the design area or inside a tablix cell.
   ![Drag and drop sparkline report item into design area](/static/images/report-designer/report-items/sparkline/item-drag.png '#width=385px')
3. Review the item properties, which are listed in the properties panel after you drop the sparkline item in the design area or inside a tablix cell.
   ![Sparkline item with properties view](/static/images/report-designer/report-items/sparkline/designer-area.png '#width=600px')

## How do I create data for the sparkline?

To present data in the {{site.productNameTM}} sparkline, create a dataset and bind data to it. This design example uses the following dataset query for dataset creation:

```sql
SELECT PC.Name AS ProdCat, PS.Name AS SubCat, DATEPART(yy, SOH.OrderDate) AS OrderYear, 'Q' + DATENAME(qq, SOH.OrderDate) AS OrderQtr,SUM(SOD.UnitPrice * SOD.OrderQty) AS Sales
FROM Production.ProductSubcategory PS INNER JOIN
Sales.SalesOrderHeader SOH INNER JOIN
Sales.SalesOrderDetail SOD ON SOH.SalesOrderID = SOD.SalesOrderID INNER JOIN
Production.Product P ON SOD.ProductID = P.ProductID ON PS.ProductSubcategoryID = P.ProductSubcategoryID INNER JOIN
Production.ProductCategory PC ON PS.ProductCategoryID = PC.ProductCategoryID
GROUP BY DATEPART(yy, SOH.OrderDate), PC.Name, PS.Name, 'Q' + DATENAME(qq, SOH.OrderDate), PS.ProductSubcategoryID
```

> Refer to the [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/) section and create a dataset using the above query. The `AdventuresWorks` database is used here.

## How do I assign data to the sparkline?

A sparkline in the {{site.productNameTM}} Web Report Designer needs a minimum of 1 value element to showcase data. Drop the measure or expression field you want to analyze into the `Y Values` section. Drop the dimension that categorizes the measure onto the `Columns` section. To categorize based on a series, also drop the respective dimension onto the `Rows` section.

To configure data for the sparkline, follow these steps:

1. Focus on the sparkline report item to bind data to it.
2. Click the `Properties` icon in the configuration panel to open the property pane. Switch to the `DATA` tab.
   ![Chart properties pane](/static/images/report-designer/report-items/sparkline/chart-properties-pane.png '#width=600px')
3. Choose a data source from the drop-down, which lists the available data in the report.
   ![Choose the dataset for chart](/static/images/report-designer/report-items/sparkline/data-assign-drop-down.png '#width=315px')
4. Review the fields. Numeric columns and numeric expressions are listed under the `Measures` section; other types of columns and dimension expressions are listed under the `Dimensions` section.
   ![Measures and dimensions](/static/images/report-designer/report-items/sparkline/measures-dimensions-category.png '#width=315px')
5. **Drag and Drop Measure Element**:
   Select and drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Values` section.
   ![Add a Y-value field](/static/images/report-designer/report-items/sparkline/add-y-values-field.png '#width=315px')
   The report item design now looks like the following image:
   ![Preview after adding y-value field](/static/images/report-designer/report-items/sparkline/y-value-chart-design-view.png '#width=285px')
6. **Aggregate Options**:
   Click the `Settings` icon (highlighted below) to open the aggregation type drop-down list.
   ![Aggregate settings icon](/static/images/report-designer/report-items/sparkline/aggregation-settings-icon.png '#width=245px')
   Set the aggregation type used to compute the selected column.
   ![Aggregate menu list](/static/images/report-designer/report-items/sparkline/aggregation-settings-menu.png '#width=315px')
7. **Drag and Drop Dimension Element**:
   Select and drag the dimension element from the `Dimensions` section to measure against any of the selected numeric column(s) in the `Y Value(s)` section, and drop it into the `Column(s)` section.  
   ![Add dimension field](/static/images/report-designer/report-items/sparkline/add-field-to-column-section.png '#width=315px')
   The report item design now looks like the following image:
   ![Preview after adding dimension field](/static/images/report-designer/report-items/sparkline/column-field-design-preview.png '#width=245px')
8. **Grouping**:
   Group the added column element with another column by adding the respective dimension element into the Row(s) section.
   ![Achieve grouping by row values](/static/images/report-designer/report-items/sparkline/add-field-to-rows-section.png '#width=315px')
   The report item design now looks like the following image.
   ![Preview of row value grouping ](/static/images/report-designer/report-items/sparkline/row-field-design-preview.png '#width=245px')

## Properties

The sparkline report item in the {{site.productNameTM}} Web Report Designer has name, series, appearance, chart area, no data, page break, position, data element, visibility, and miscellaneous properties. Refer to the [Properties panel](./../../compose-report/properties-panel/) section before proceeding with the following properties.

### Name

The Name property gives the sparkline item a unique name in the report.

![Name property](/static/images/report-designer/report-items/sparkline/name-property.png '#width=315px')

### Basic Settings

The basic settings of the sparkline include the `Choose Series` option, shown in the following image.

![Chart Basic settings](/static/images/report-designer/report-items/sparkline/basic-settings.png '#width=315px')

#### Choose Series

The `Choose Series` drop-down lists the available series when you add multiple series to the chart. To customize a series appearance, choose the required series name in the drop-down.

![Choose series](/static/images/report-designer/report-items/sparkline/single-series-list-in-drop-down.png '#width=315px')

Refer to the [Series](../chart/series/) section to customize each series using the properties panel.

### Appearance

The border style, color, width and background color properties style the chart and customize its appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

![Chart appearance](/static/images/report-designer/report-items/chart/appearance-property.png '#width=315px')

### Chart Area

Chart Area properties such as border width, color, shadow color, shadow offset and background color customize the area of the chart design. These properties are listed under the `Chart Area` category.

![Chart Area](/static/images/report-designer/report-items/sparkline/chart-area.png '#width=315px')

### No Data

The No Data property displays static text when the dataset returns empty or zero rows at run time.

![Chart No data message](/static/images/report-designer/report-items/chart/no-data/no-data.png '#width=315px')

To set or reset no data message properties, refer to the [No Data Message](../chart/no-data-message/) property section.

### Page break

The page break property controls the amount of information on each page when you preview the report. Follow these steps to apply the page break property to the sparkline report item:

1. Choose any `Break Location` type in the drop-down. The Break Location property specifies where the page break occurs.
   ![Break location](/static/images/report-designer/report-items/rectangle/break-location-types.png '#width=315px')
2. Enable the `Page Number Reset` property checkbox to restart the page numbering on each page.
   ![Reset page number](/static/images/report-designer/report-items/rectangle/page-break-property.png '#width=315px')

### Position

The Position property sets the width, height, left and top position of the sparkline in the report design. To handle these properties using the properties panel, refer to the [Position](./../../compose-report/common-properties/#position) section.![Chart postion](/static/images/report-designer/report-items/sparkline/position.png '#width=315px')

### Data Element

The Data element properties control the visibility of a report item when you export the report in XML format. The Data element properties are listed in the properties panel, under the `Data Element` category.

![Data element properties](/static/images/report-designer/report-items/tablix/data-element-properties.png '#width=315px')

#### Name

The `Name` field assigns a custom name to the sparkline element. The sparkline is exported with the provided name.

![Data element name property](/static/images/report-designer/report-items/tablix/name-property.png '#width=315px')

> Note: The name cannot contain spaces, and it must begin with a letter followed by letters, numbers, or the underscore character (_).

#### Output

The `Output` property controls the visibility of the sparkline when you export the report. Choosing the following options for the `Output` property performs the respective operations:

* **Auto** or **Output** - Exports the sparkline report item.
* **NoOutput** - Does not export the sparkline report item.

![Data element output property](/static/images/report-designer/report-items/tablix/output-property.png '#width=315px')

### Visibility

The visibility property conditionally shows or hides the sparkline report item on report preview or export action. To set visibility of the sparkline item using the properties panel, refer to the [Visibility](./../../compose-report/common-properties/#visibility) section.![Chart visibility](/static/images/report-designer/report-items/sparkline/visibility.png '#width=315px')

### Miscellaneous

The miscellaneous properties of the sparkline cover page name, custom attributes, document map, bookmark, tooltip, and custom style.

#### Page name

The page name property names the first worksheet of the Excel workbook when you export the report to Excel format.

![Page name property](/static/images/report-designer/report-items/sparkline/page-name.png '#width=315px')

You can set static or dynamic text as the page name. To set and reset dynamic text, refer to the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Custom attributes

The custom attributes property sets the values for chart custom properties. To create and assign values for custom properties using the properties panel, refer to the [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.

#### Document Map

A document map is a navigational feature that displays a separate side pane with a set of navigational links in a hierarchical structure when you view a report. A user can click the content in the list to navigate to the report page that displays that item. Refer to the [Document Map](./../../compose-report/document-map/) section to configure a document map in the report design.

You can set static or dynamic text as the value for the document map property. To set and reset dynamic text, refer to the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Bookmark

Bookmark links let users navigate to different parts of an SSRS report. You can add bookmarks to each textbox, image, table or chart, or to the unique group values displayed in a tablix, to direct users to specified locations in the report. The value of the bookmark property can be your own strings or an expression. Refer to the [Bookmark](./../../compose-report/bookmark/) section to configure a bookmark in the report design.

You can set static or dynamic text as the value for the bookmark property. To set and reset dynamic text, refer to the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Tooltip

The Tooltip property displays informative text or a value when the user hovers over the report item in report preview. To set a tooltip for the sparkline report item using the properties panel, refer to the [Tooltip](./../../compose-report/common-properties/#tooltip) section.

#### Custom Style

The `Custom Style` property enables the use of external CSS for styling report items, providing more flexibility than the built-in styling options. Use this property to meet specific design requirements and keep styling consistent across multiple reports. For a step-by-step guide on setting up custom styles in your report, check the **How To** section of this guide.

The following image shows the `Custom Style` property in the properties panel.

![custom style property](/static/images/report-designer/report-items/sparkline/custom-style-property.png '#width=355px')

## How do I set an expression on a sparkline property?

You can set an expression on a few properties of the sparkline report item in the {{site.productNameTM}} Web Report Designer to process the property values. To set expressions on the sparkline report item properties, refer to the [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## How do I reset an expression?

You `Reset` an expression applied to a sparkline property from the Web Report Designer properties panel. For the steps, refer to the [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## What are advanced properties?

Advanced properties are the nested properties that a few sparkline report item properties contain in the {{site.productNameTM}} Web Report Designer. To open and handle the nested properties, refer to the [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.

## Frequently asked questions

### How many values does a sparkline need?

A sparkline needs a minimum of 1 value element in the `Y Values` section to showcase data.

### Can I stop the sparkline from exporting?

Yes. Set the `Output` property under `Data Element` to **NoOutput** so the sparkline report item is not exported.

## See also

* [Design an SSRS sparkline report using a table](./../../report-items/sparkline/design-ssrs-sparkline-using-table/)
* [Chart series properties](../chart/series/)
* [Properties panel](./../../compose-report/properties-panel/)
