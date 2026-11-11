---
title: Design an SSRS RDL Report with Barcodes | Bold Reports
description: Design an SSRS RDL product details report with a barcode inside a table report item in the Bold Reports Web Report Designer, from dataset to preview.
keywords: ejReportDesigner, reportdesigner, barcode, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, custom item
---

# Design an SSRS RDL report using barcode in Bold Reports<sup>®</sup>

You design a `Product Details` report with barcodes in the Bold Reports<sup>®</sup> Web Report Designer by creating a dataset and adding a barcode to an SSRS table report item.

## How do I create the dataset?

The `Product Details` report in the Bold Reports<sup>®</sup> Web Report Designer needs a dataset bound to the table data region to present data in table format. This example uses the following dataset query.

```sql
SELECT TOP 100 [Order Details].ProductID, Products.ProductName, [Order Details].Quantity, [Order Details].UnitPrice, [Order Details].Discount
FROM [Order Details] INNER JOIN
Products ON [Order Details].ProductID = Products.ProductID

```

Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section and create the dataset using the above query. This example uses the `Northwind` database.

## How do I add a table to the report?

You add a table to the report by dragging the table report item from the item panel of the Web Report Designer.

1. Drag the table report item from the item panel and drop it into the design area.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/add-table-report-item.png '#width=355px')
2. Assign data to the table using the `Dataset` property in the table properties.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/assign-data-to-table.png '#width=355px')

## How do I configure the table?

You configure the table by adding column headers and assigning the product details data fields in the Web Report Designer.

1. Add the required table column headers to the table, as shown in the following image.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/table-cell-headers.png '#width=410px')
2. Assign the required product details data fields in the `Details` group row of the table cell.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/assign-fields-in-table.png '#width=410px')

   The following expressions are used in the `UnitPrice` and `Total Price` cells of the table.
   * `=FormatCurrency(FormatNumber(Fields!UnitPrice.Value,2))`
   * `=FormatCurrency(FormatNumber(Fields!Quantity.Value * Fields!UnitPrice.Value,2))`

## How do I add the barcode report item?

The barcode report item in Bold Reports<sup>®</sup> presents the product ID in the empty `Product ID` cell of the table design above. Add it inside a rectangle with the following steps.

1. Drag a rectangle item and drop it into the `Product ID` column cell.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/add-rectangle-in-table.png '#width=410px')
2. Drag the barcode report item and drop it into the `Product ID` column cell.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/add-barcode-in-table.png '#width=410px')
3. Check the cell. The barcode report item is placed inside the rectangle.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/barcode-item-with-rectangle.png '#width=410px')

> If you add the barcode directly into a table cell, the report item fills the whole cell. So, the rectangle report item is used as a container.

### How do I encode a value in the barcode?

You encode a value in the barcode by setting the `Text` property of the barcode report item to a field expression.

1. Select the barcode report item and open the properties panel.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/barcode-propeties-with-table.png '#width=500px')
2. Open the expression menu in the `Text` property under the `Basic Settings` category.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/open-expression-builder.png '#width=385px')
3. In the `Expression Builder`, assign the `=Fields!ProductID.Value` field value and click `Ok`.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/assign-expression.png '#width=410px')

The `Product ID` of each product is now encoded in the barcode report item on report export.

### How do I customize the barcode appearance?

You customize the barcode report item with its position and appearance properties in the Web Report Designer properties panel.

![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/resize-barcode-with-table.png '#width=385px')

## How do I format the table?

You format the table with the background and font properties in the Web Report Designer properties panel.

1. Select the first row, and set the background and font properties in the properties panel.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/customize-text-design.png '#width=385px')
2. [Resize](./../../../report-items/tablix/resize-tablix-data-region/) the table to the required size for better report design.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/barcode/table-final-design.png '#width=385px')

## How do I add a report header?

You add a report title by enabling the report `Header` in the Web Report Designer and placing a textbox in it.

1. Enable the report `Header` to add a title to the report.
   ![Enable header tag](/static/assets/on-premise/images/report-designer/report-items/barcode/enable-report-header.png '#width=355px')
   > Refer to the [Show or hide header and footer](./../../../compose-report/show-or-hide-header-footer-in-report/) section to add or remove the header or footer in the report.
2. Add a rectangle report item in the report header area and a textbox within the rectangle.
   ![Add report items in header area](/static/assets/on-premise/images/report-designer/report-items/barcode/add-report-items-in-header-area.png '#width=410px')
3. Set the report title text in the textbox. Customize the appearance of the title using the textbox and rectangle properties in the properties panel as required.
   ![Report title text](/static/assets/on-premise/images/report-designer/report-items/barcode/report-title-text.png '#width=410px')

## What does the final design look like?

The final design of the Bold Reports<sup>®</sup> `Product Details` report looks like the following image.

![Product Details report design](/static/assets/on-premise/images/report-designer/report-items/barcode/product-details-final-design.png '#width=395px')

## What does the report preview look like?

On report preview, the Bold Reports<sup>®</sup> Report Viewer displays the product details report as shown below.

![Product Details report preview](/static/assets/on-premise/images/report-designer/report-items/barcode/report-preview.png '#width=425px')

> Download the [Product Details barcode report design](https://github.com/boldreports/resources/tree/master/docs/report-designer/barcode/design-ssrs-rdl-report-using-barcode.rdl)

## Frequently asked questions

### Why place the barcode inside a rectangle?

If you add the barcode directly into a table cell in the Bold Reports<sup>®</sup> Web Report Designer, the report item fills the whole cell. The rectangle acts as a container.

### Which property sets the value that the barcode encodes?

The `Text` property under the `Basic Settings` category sets the encoded value, for example `=Fields!ProductID.Value`.

## See also

* [Barcode report item overview](./../)
* [Supported barcode types](./../supported-barcode-types/)
* [Create an embedded dataset](./../../../manage-data/dataset/create-an-embedded-dataset/)
