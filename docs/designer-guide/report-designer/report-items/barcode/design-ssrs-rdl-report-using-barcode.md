---
title: Design ssrs rdl report using barcode | Web Report Designer
description: Design ssrs rdl report using barcode, to make tasks like tracking shipping orders and employee identification numbers easier.
keywords: ejReportDesigner, reportdesigner, barcode, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, custom item
---

# Design ssrs rdl report using barcode

This section describes the steps to design `Product Details` report using barcode and SSRS table report item.

## Create dataset

To present data in the table format, create a dataset and bind data to the table data region. In this designing section, the following dataset query is used for dataset creation.

```sql
SELECT TOP 100 [Order Details].ProductID, Products.ProductName, [Order Details].Quantity, [Order Details].UnitPrice, [Order Details].Discount
FROM [Order Details] INNER JOIN
Products ON [Order Details].ProductID = Products.ProductID

```

Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `Northwind` database is used here.

## Add a table to the report

1. Drag and drop the table report item into the design area from the item panel.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/add-table-report-item.png '#width=355px')
2. Assign data to the table using `Dataset` property in the table properties.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/assign-data-to-table.png '#width=355px')

## Configure table

1. Add the required table column headers in the table as shown in the below snap.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/table-cell-headers.png '#width=410px')
2. Now, assign the required product details data fields in the `Details` group row of the table cell.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/assign-fields-in-table.png '#width=410px')

   Following expressions are used in the `UnitPrice` and `Total Price` cells of the table.
   * `=FormatCurrency(FormatNumber(Fields!UnitPrice.Value,2))`
   * `=FormatCurrency(FormatNumber(Fields!Quantity.Value * Fields!UnitPrice.Value,2))`

## Add barcode report item

In the above table design, `Product ID` cell is left empty, it would be better if we present the product ID using the barcode.

1. Drag a rectangle item and drop into the `Product ID` column cell.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/add-rectangle-in-table.png '#width=410px')
2. Now, drag and drop it into the `Product ID` column cell.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/add-barcode-in-table.png '#width=410px')
3. The barcode report item will be placed inside the rectangle as shown below,
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/barcode-item-with-rectangle.png '#width=410px')

> If we directly add barcode into table cell, the report item fill the whole cell. So, rectangle report item is used as container.

### Encode value in barcode

1. Select the barcode report item and open properties panel,
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/barcode-propeties-with-table.png '#width=500px')
2. Open the expression menu in the `Text` property under `Basic Settings` category.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/open-expression-builder.png '#width=385px')
3. In the `Expression Builder` assign the `=Fields!ProductID.Value` field value and click `Ok`.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/assign-expression.png '#width=410px')

Now, the `Product ID` of each product will encoded in the barcode report item on report export action.

### Customize appearance

Using the position and appearance properties, you can customize the barcode report item as shown below,

![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/resize-barcode-with-table.png '#width=385px')

## Format table

1. Select the first row, set the background and font properties in the properties panel.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/customize-text-design.png '#width=385px')
2. [Resize](./../../../report-items/tablix/resize-tablix-data-region/) the table to the required size for better report design.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/table-final-design.png '#width=385px')

## Report header

1. Enable the  report `Header` to add a title to the report.
   ![Enable header tag](/static/assets/on-premise/images/report-designer/report-items/barcode/enable-report-header.png '#width=355px')
   > Refer [Show or hide header and footer](./../../../compose-report/show-or-hide-header-footer-in-report/) section to add or remove header/footer in the report.
2. Now, add a rectangle report item in the report header area and a textbox within the rectangle.
   ![Add report items in header area](/static/assets/on-premise/images/report-designer/report-items/barcode/add-report-items-in-header-area.png '#width=410px')
3. Set the report title text in the textbox and customize the appearance of the title using the textbox and rectangle properties in properties panel as required.
   ![Report title text](/static/assets/on-premise/images/report-designer/report-items/barcode/report-title-text.png '#width=410px')

## Final design

A final design of Product Details report will look like below.

![Product Details report design](/static/assets/on-premise/images/report-designer/report-items/barcode/product-details-final-design.png '#width=395px')

## Report preview

On report preview, the product details report will be displayed like below,

![Product Details report preview](/static/assets/on-premise/images/report-designer/report-items/barcode/report-preview.png '#width=425px')

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/barcode/design-ssrs-rdl-report-using-barcode.rdl)