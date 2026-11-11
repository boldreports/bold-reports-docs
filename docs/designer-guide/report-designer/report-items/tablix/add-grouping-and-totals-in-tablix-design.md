---
title: Add Grouping and Totals to a Tablix in RDL | {{site.productName}}
description: Add row groups and totals to a tablix data region in {{site.productName}} Web Report Designer to show grouped records, subtotals, and a grand total in an RDL report.
keywords: ejReportDesigner, reportdesigner, table, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Add grouping and totals to a tablix in {{site.productNameTM}}

To add grouping and totals to an SSRS RDL report in the {{site.productNameTM}} Web Report Designer, add row groups and totals to the tablix data region with the following steps.

Prefer watching over reading? Check out this video for adding grouping and totals in a tablix data region:

`youtube: https://www.youtube.com/watch?v=Q4y64_TH4J8`

## How do I create the dataset?

To present data in tabular format in the {{site.productNameTM}} Web Report Designer, create a dataset and bind data to the tablix data region. This design example uses the following dataset query for dataset creation:

```sql
SELECT Top 50  PC.Name AS ProdCat, PS.Name AS SubCat, DATEPART(yy, SOH.OrderDate) AS OrderYear, 'Q' + DATENAME(qq, SOH.OrderDate) AS OrderQtr,SUM(SOD.UnitPrice * SOD.OrderQty) AS Sales
FROM Production.ProductSubcategory PS INNER JOIN
Sales.SalesOrderHeader SOH INNER JOIN
Sales.SalesOrderDetail SOD ON SOH.SalesOrderID = SOD.SalesOrderID INNER JOIN
Production.Product P ON SOD.ProductID = P.ProductID ON PS.ProductSubcategoryID = P.ProductSubcategoryID INNER JOIN
Production.ProductCategory PC ON PS.ProductCategoryID = PC.ProductCategoryID
WHERE (SOH.OrderDate BETWEEN '1/1/2002' AND '12/31/2003')
GROUP BY DATEPART(yy, SOH.OrderDate), PC.Name, PS.Name, 'Q' + DATENAME(qq, SOH.OrderDate), PS.ProductSubcategoryID
```

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section and create a dataset using the above query. The `AdventuresWorks` database is used here.

## How do I create a simple table design?

You start with a simple table report design in the {{site.productNameTM}} Web Report Designer by following the steps in the [Table Design](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/) section.

![Tablix listed in item panel](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/initial-design.png '#width=285px')

## How do I add group data?

You add group data to a tablix in the {{site.productNameTM}} Web Report Designer by creating a parent row group and then a child row group from the grouping panel.

### How do I add a parent row group?

To add the first row group to the basic tablix structure, follow these steps:

1. Select the tablix data region in the design area. The `Grouping Panel` is enabled in the design view.
   ![Enable grouping panel](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/enable-grouping-panel.png '#width=355px')
   > To add the first row group in the basic tablix structure, use the group menu in the grouping panel.
2. Go to the `Row Groups` pane in the grouping panel and open the context menu on the `Details` group field.
   ![Open group menu](/static/images/report-designer/report-items/tablix-insert-or-delete-group/open-context-menu-in-details-group.png '#width=385px')
3. From the context menu, click the `Parent Group...` option under the `Add Group` category.
   ![Open group menu](/static/images/report-designer/report-items/tablix-insert-or-delete-group/click-on-parent-group-option.png '#width=385px')
4. Configure the grouping in the `Tablix Group` dialog that opens after you click the `Parent Group` option.
   ![Open group menu](/static/images/report-designer/report-items/tablix-insert-or-delete-group/tablix-group-dialog.png '#width=355px')
5. Choose the `Product Category` field as the parent group in the tablix data region, as in this example. Click the `OK` button.
   ![Open group menu](/static/images/report-designer/report-items/tablix-insert-or-delete-group/assign-field-for-parent-group.png '#width=355px')

A new column is added to the right side of the detail group in the tablix data region, and a new group member is added above the `Detail` group of the `Row Groups` pane in the grouping panel hierarchical view.

![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/add-parent-group-design-ouput.png '#width=355px')

### How do I add a child row group?

You add a child row group in the Web Report Designer with the `Child Group...` option.

1. Click the `Child Group...` option under the `Add Group` category.
   ![Open group member properties](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/open-child-group-context-menu.png '#width=355px')
2. Review the `Tablix Group` dialog, which opens as shown in the following image.
   ![Open group member properties](/static/images/report-designer/report-items/tablix/tablix-group-dialog.png '#width=355px')
3. Choose a field in the group dialog and click the `OK` button.
   ![Open group member properties](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/add-child-group.png '#width=355px')

A new column is added to the right side of the `Product Category` row group in the tablix data region. A new field is also added below the `Product Category` group in the hierarchical view of the `Row Groups` pane.

![Open group member properties](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/add-child-group-design-ouput.png '#width=385px')

## How do I add totals?

You add totals to a tablix in the {{site.productNameTM}} Web Report Designer with the `Add Total` option in the cell menu. The steps below add a product total, a product category total, and a grand total.

### How do I add the total yearly sales of a product?

In the following steps, you create a total field that calculates the sum of sales for each subcategory product:

1. Right-click in the cell that contains the `[Sales]` expression, and click `Add Total` in the cell menu.
   ![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/select-cell-to-add-quarterly-sales.png '#width=355px')
2. Check that a new row is added inside the `ProdCat` group in the data region.
   ![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/quarterly-total-sales-new-total-row.png '#width=355px')

### How do I add the total yearly sales of a product category?

To calculate the sum of yearly sales for each product category, follow these steps:

1. Right-click in the third row, last cell of the data region that contains the `[Sum(Sales)]` expression, and click `Add Total` in the cell menu.
   ![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/yearly-total-sales.png '#width=355px')
2. Check that another new row is added inside the `ProdCat` group in the data region.
   ![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/yearly-total-sales-new-total-row.png '#width=355px')

### How do I add the grand total to the report?

To calculate the grand total of all product sales, follow these steps:

1. Right-click in the fourth row, last cell of the data region that contains `[Sum(Sales)]`, and click `Add Total` in the cell menu.
   ![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/total-sales.png '#width=355px')
2. Check that another new row is added outside the `ProdCat` group in the data region.
   ![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/total-sales-design.png '#width=355px')

## How do I edit the total cell content?

You modify the text for each total in the {{site.productNameTM}} Web Report Designer by editing the cells and setting expressions.

1. Edit the third row, third column cell that contains the `Total` text and set the expression `= "Total yearly sales of " & Fields!SubCat.Value` in the expression builder.
   ![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/set-expression-for-subcat-field.png '#width=355px')
2. Edit the fourth row, second column cell that contains the `Total` text and set the expression `= "Total yearly sales of " & Fields!ProdCat.Value` in the expression builder.
   ![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/set-expression-for-prodcat-field.png '#width=355px')
3. Remove the `Total` text value from the fifth row, second column cell.
   ![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/remove-cell-content.png '#width=355px')
4. Edit the fifth row, first cell content as  `Grand Total`. The table design now looks like the following image.
   ![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/edit-cell-content.png '#width=355px')

The final design now looks like the following image:

![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/final-design-after-editing-cell-content.png '#width=355px')

## How do I format the total rows?

You format total rows in the {{site.productNameTM}} Web Report Designer with background colors and font weight. In the following design, the `Background` color of the total column is set with three different colors. The colors differentiate the totals at the details level and the product category level. Set the font weight of the expression fields as `Bold` to improve the table design. The background color of the tablix header row is also changed to improve the report presentation.

![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/format-total-row.png '#width=385px')

## What does the final design and preview look like?

The final {{site.productNameTM}} report design looks like the following image:

![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/final-report-design.png '#width=385px')

On report preview, the total yearly sales of each product, product category and grand totals at the details group level are displayed as follows.

![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/total-sales-preview.png '#width=425px')

Navigate to the last page of the report in preview. The grand total details are displayed at the end of the report, as follows.

![Open group menu](/static/images/report-designer/report-items/tablix-add-grouping-and-totals/grand-total-design.png '#width=425px')

> Download the [grouping and totals report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/add-grouping-and-totals-in-tablix-design.rdl).

## Frequently asked questions

### Where is the grand total row added?

The grand total row is added outside the `ProdCat` group in the data region, and the grand total details are displayed at the end of the report.

### How do I add the first row group to a basic tablix?

Use the group menu in the grouping panel. Open the context menu on the `Details` group field and click `Parent Group...` under `Add Group`.

## See also

* [Design an SSRS RDL report using a table](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/)
* [Add a total in a tablix data region](./../../../report-items/tablix/add-total-in-tablix-data-region/)
* [Grouping panel in a tablix](./../../../report-items/tablix/grouping-panel/)
