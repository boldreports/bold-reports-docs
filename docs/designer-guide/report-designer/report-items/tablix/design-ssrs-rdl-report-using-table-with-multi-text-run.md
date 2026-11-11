---
title: Design an SSRS Table with Multiple Text Runs | {{site.productName}}
description: Design an SSRS RDL table report with multi text run in {{site.productName}} Web Report Designer to combine static text and expressions in a single tablix cell.
keywords: ejReportDesigner, reportdesigner, table, multi textrun, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Design an SSRS RDL table report with multi text run in {{site.productNameTM}}

To combine static text and expressions in a single tablix cell, design an SSRS RDL table report with multi textrun in the {{site.productNameTM}} Web Report Designer. You add a table with the Tablix Wizard, set styled header text, and add and edit expressions.

## How do I add a table using the Tablix Wizard?

You add the table in the {{site.productNameTM}} Web Report Designer with the Tablix Wizard and then style it.

1. Assign the `ProdCat`, `SubCat`, `OrderYear`, `OrderQtr` and `Sales` fields in the initial matrix design. Refer to the [Create a Matrix Report using Tablix Wizard](./../../../report-items/tablix-wizard/design-report-using-the-tablix-wizard/) section for the steps.
   ![Tablix wizard with column and values](/static/assets/on-premise/images/report-designer/report-items/tablix/rendered-matrix.png '#width=355px')
2. Remove any unnecessary rows and apply styles to the Tablix item and its cells to improve visual clarity.
   ![Tablix wizard with column and values](/static/assets/on-premise/images/report-designer/report-items/tablix/rendered-matrix-with-design.png '#width=700px')

## How do I set header text for tablix data?

You set styled header text in a tablix cell with the `Multi-Text Run Editor` dialog of the {{site.productNameTM}} Web Report Designer.

1. Select the tablix cell and click the `Text Editor` icon to open the `Multi-Text Run Editor` Dialog.
   ![Tablix](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-icon-in-product-category.png '#width=700px')
2. Review the `Multi-Text Run Editor` dialog that opens, which lets you enter and format the content.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/empty-text-editor-dialog.png '#width=700px')
3. Enter the required header text in the `Multi-Text Run Editor` dialog.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/entered-text-in-text-editor-dialog.png '#width=700px')
4. Apply styling to the header text using the selected text properties available in the `Property Panel`.

   a. Select all the text and set the `Text Alignment` to Center.
      ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/text-alignment-in-text-editor-dialog.png '#width=700px')
   b. Highlight the header portion and set `Font Weight` to Bold.
      ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/font-weight-in-text-editor-dialog.png '#width=700px')
   c. Select the descriptive part of the heading and set `Font Style` to Italic.
      ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/font-style-in-text-editor-dialog.png '#width=700px')
5. Click `Save` after applying the desired properties to the header text, to apply the changes to the tablix cell.
   ![Multi text run Tablix](/static/assets/on-premise/images/report-designer/report-items/tablix/product-category-in-tablix-cell.png '#width=700px')
6. Repeat the same steps to format the header text for both the `Product Sub Category` and `Order Year` cells consistently.
   ![Multi text run Tablix](/static/assets/on-premise/images/report-designer/report-items/tablix/multi-textrun-table-design.png '#width=700px')

## How do I add an expression in a tablix cell?

You add the `[Sales]` expression into a selected tablix cell in the {{site.productNameTM}} Web Report Designer by following the steps in the [Set expression using Multi-Text Run Editor Dialog](./../assign-data-to-tablix-data-region/#set-expression-using-multi-text-run-editor-dialog) section.
   ![Multi text run Tablix](/static/assets/on-premise/images/report-designer/report-items/tablix/sales-in-tablix-cell.png '#width=700px')

## How do I edit an expression in a tablix cell?

You update a tablix cell with the `[Sum(Sales)]` expression in the {{site.productNameTM}} Web Report Designer by following the steps in the [Edit expression using Multi-Text Run Editor Dialog](./../assign-data-to-tablix-data-region/#edit-expression-using-multi-text-run-editor-dialog) section.
   ![Multi text run Tablix](/static/assets/on-premise/images/report-designer/report-items/tablix/sum-sales-in-tablix-cell.png '#width=700px')

## What does the report preview show?

The {{site.productNameTM}} report preview displays the product sales report of a company, as shown in the following image.

![Multi text run report](/static/assets/on-premise/images/report-designer/report-items/tablix/product-sales-report-preview.png '#width=700px')

> Download the [table with multi text run report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/design-ssrs-rdl-report-using-table-with-multi-text-run.rdl).

## Frequently asked questions

### Can I style part of the text in one cell differently?

Yes. In the `Multi-Text Run Editor` dialog, you can set `Font Weight` to Bold on the header portion and `Font Style` to Italic on the descriptive part.

### How do I open the Multi-Text Run Editor dialog?

Select the tablix cell and click the `Text Editor` icon.

## See also

* [Assign data to a tablix data region](./../assign-data-to-tablix-data-region/)
* [Design an SSRS matrix report using the tablix wizard](./../../../report-items/tablix-wizard/design-report-using-the-tablix-wizard/)
* [Design an SSRS RDL report using a table](./../design-ssrs-rdl-report-using-table/)
