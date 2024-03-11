---
title: Add grouping and totals  | Web Report Designer
description: Design ssrs rdl report using grouping and total in tablix data region, to display a list of records in the table format in Web Report Designer.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Add Grouping and Totals

The following steps guides you to design ssrs rdl report to add grouping and totals in tablix data region.

## Create dataset

To present data in the tabular format, create a dataset and bind data to the tablix data region. In this designing section, the following dataset query is used for dataset creation.

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

> Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `AdventuresWorks` database is used here.

## Simple table design

Create a simple table report design by following the steps provided in [Table Design](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/) section.

![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/initial-design.png '#width=285px')

## Add group data

### Parent row group

To add a first row group in the basic tablix structure follow the below steps.

1. Select the tablix data region in the design area, now the `Grouping Panel` will be enabled in the design view.
   ![Enable grouping panel](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/enable-grouping-panel.png '#width=355px')
   > To add first row group in the basic tablix structure, use the group menu in grouping panel.
2. To add a  group, go to `Row Groups` pane in grouping panel and open the context menu on the `Details` group field.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/open-context-menu-in-details-group.png '#width=385px')
3. From the context menu, click on `Parent Group...` option under `Add Group` category.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/click-on-parent-group-option.png '#width=385px')
4. Once you click on the `Parent Group` option, a `Tablix Group` dialog will be opened to configure the grouping.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/tablix-group-dialog.png '#width=355px')
5. Here, `Product Category` field is chosen as parent group in tablix data region. Click on the `OK` button
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-insert-or-delete-group/assign-field-for-parent-group.png '#width=355px')

Now, a new column will be added to the right side of the detail group in tablix data region and a new group member will be added above the `Detail` group of `Row Groups` pane in grouping panel hierarchical view.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/add-parent-group-design-ouput.png '#width=355px')

### Child row group

1. To add a child group, click on the `Child Group...` option under `Add Group` category.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/open-child-group-context-menu.png '#width=355px')
2. Now, `Tablix Group` dialog will open like below.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix/tablix-group-dialog.png '#width=355px')
3. Choose field in the group dialog and click `OK` button.
   ![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/add-child-group.png '#width=355px')

Now, a new column will be added to the right side of the `Product Category` row group in tablix data region and a new field will be added below of the `Product Category` group in hierarchical view of `Row Groups` pane in grouping panel.

![Open group member properties](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/add-child-group-design-ouput.png '#width=385px')

## Add Totals

### Add total yearly sales of a product

In the below steps the total field is created to calculate the sum of sales of each sub category products.

1. Right-click in the cell which contains `[Sales]` expression, and click on the `Add Total` in the cell menu.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/select-cell-to-add-quarterly-sales.png '#width=355px')
2. Now, new row will be added inside of the `ProdCat` group in the data region as shown below.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/quarterly-total-sales-new-total-row.png '#width=355px')

### Add totals yearly sales of product category

Now to calculate the sum of yearly sales of each product category follow the below steps.

1. Right-click in the third row, last cell of the data region that contains `[Sum(Sales)]` expression, and click on the `Add Total` in the cell menu.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/yearly-total-sales.png '#width=355px')
2. Now, another new row will be added inside of the `ProdCat` group in the data region as shown below.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/yearly-total-sales-new-total-row.png '#width=355px')

### Add the grand total to the report

Now to calculate the grand total of over all product sales follow the below steps.

1. Right-click in the fourth row, last cell of the data region that contains `[Sum(Sales)]`, and click on the `Add Total` in the cell menu.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/total-sales.png '#width=355px')
2. Now, another new row will be added outside of the `ProdCat` group in the data region as shown below.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/total-sales-design.png '#width=355px')

## Edit cell content

Modify the each total representation text as shown below.

1. Edit the third row, third column cell which contains `Total` text and set the following expression `= "Total yearly sales of " & Fields!SubCat.Value` in the expression builder.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/set-expression-for-subcat-field.png '#width=355px')
2. Edit the fourth row, second column cell which contains `Total` text and set the following expression `= "Total yearly sales of " & Fields!ProdCat.Value` in the expression builder.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/set-expression-for-prodcat-field.png '#width=355px')
3. Remove the `Total` text value from the fifth row, second column cell.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/remove-cell-content.png '#width=355px')
4. Edit the fifth row, first cell content as  `Grand Total`. Now the table design will look like below.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/edit-cell-content.png '#width=355px')

Now, the final design will look like below:

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/final-design-after-editing-cell-content.png '#width=355px')

## Format total row

In the below design `Background` color of the total column is set with three different colors . This will differentiate the totals at details level, and product category Level. Set the font weight of the expression fields as `Bold` to improvise the table design. Also the background color of the tablix header row is changed to improvise the report presentation.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/format-total-row.png '#width=385px')

## Design and preview

The final report design will look like below:

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/final-report-design.png '#width=385px')

On report preview, the total yearly sales of each product, product category and grand totals at details group level will be displayed like below.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/total-sales-preview.png '#width=425px')

Navigate to the last page of the report in preview. The grand total details will be displayed at the end of the report like below.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-grouping-and-totals/grand-total-design.png '#width=425px')

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/add-grouping-and-totals-in-tablix-design.rdl).