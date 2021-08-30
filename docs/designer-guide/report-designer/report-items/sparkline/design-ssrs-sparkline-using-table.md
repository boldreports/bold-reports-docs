---
title: Design ssrs sparkline report using table | Report Designer
description: Design ssrs sparkline report using table, to display trends and changes in data over time with Web Report Designer.
keywords: ejReportDesigner, reportdesigner, table, sparkline, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Design ssrs sparkline report using table

This section describes the steps to design `Sparkline` report using SSRS table report item.

## Create dataset

The following dataset query is used for this `Sparkline` report.

```sql
SELECT Prodcat.EnglishProductCategoryName,
              prodSubcat.EnglishProductSubcategoryName,
              prod.EnglishProductName,
              prod.Color,
              fact.[TotalProductCost],
              fact.SalesAmount,
              fact.TaxAmt,
              fact.[OrderDate],
              fact.[ShipDate]
FROM dbo.DimProduct as prod
   INNER JOIN  dbo.DimProductSubcategory AS prodSubcat ON
               prod.ProductSubcategoryKey = prodSubcat.ProductSubcategoryKey
   INNER JOIN  dbo.DimProductCategory AS Prodcat ON
                prodSubcat.ProductCategoryKey = Prodcat.ProductCategoryKey
   INNER JOIN  dbo.FactInternetSales AS fact ON
                 fact.ProductKey = prod.ProductKey
```

> Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `AdventureWorksDW2014` database is used here.

## Add sparkline report item

1. Drag and drop table report item to the design area.
![Sparkline item in item panel](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/add-table.png)
2. Assign [dataset](./../../../report-items/tablix/assign-data-to-tablix-data-region/#assign-data-from-properties-panel) to the table.
![Assign dataset to table](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/assign-data.png)
3. Assign `EnglishProductSubcategoryName` field in the first cell as shown below.
![Assign value in table cell](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/add-group-value.png)
4. Click on `Details group` in `Row Groups` pane, now the respective tablix member properties will be listed in the properties panel.
![Group properties](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/select-detail-group.png)
5. Click on the `Set Groups...` button in the properties panel. Now, the `Grouping` dialog will be opened like below.
![Group dialog](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/group-dialog.png)
6. Click on `Add` button and select `EnglishProductSubcategoryName` and click OK.
![Group data in table ](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/group-data.png)
7. Assign `Sales` field in the second cell as shown below.
![Assign value in table cell](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/assign-sales-field.png)
8. Now select the `Sales` text box and [assign the following expression](./../../../report-items/tablix/assign-data-to-tablix-data-region/#edit-expression-in-properties-panel) `=Sum(Fields!SalesAmount.Value)` in the cell.![Sum sales value](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/sum-sales-value.png)
9. Drag and drop the sparkline report item into last cell of the table as shown below.
![Add Sparkline item in table](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/add-sparkline.png)

Now, the report design will look like below.

![Basic design of sparkline report](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/intial-design.png)

> Cannot insert a sparkline into a detail cell. Detail members can only contain the static inner members.

## Assign data

1. Select the cell containing sparkline report item and switch to `DATA` tab in properties panel.
![Assign data to chart](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/switch-data-assign.png)
2. Drag and drop `TotalProductCost` field into `Y-Values` section as shown below.
![Add series to sparkline](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/assign-series-value.png)
3. Drag and drop `OrderDate` field into `Column` section as shown below.
![Add column to sparkline](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/assign-column-value.png)

Now, the report design will look like below.

![Basic design of sparkline report](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/assign-data-design.png)

## Configure properties

1. Now, switch to the `PROPERTIES` tab in the properties panel.
2. Choose the `Sales` series in the  `Choose Series` dropdown.
![Choose series in chart](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/choose-series.png)
3. Click on the edit icon to open series properties.
![Series properties](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/edit-icon.png)
4. Under data label settings category, enable  [Data Label](./../../../report-items/chart/data-label/) property checkbox.
![Chart data label](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/enable-data-label.png)
5. Format the numbers produced by the `Data labels`, using `Format` property. Set the `'$'#,0;('$'#,0)` as value format property field.
![Format datalabel value](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/format-values.png)
6. In the below design background color and font styles are changed in table cells to improvise the report design.
![Format table design](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/format-report.png)
    > Refer the [Cell Properties](./../../../report-items/tablix/cell-properties/#cell-properties) to style the table cell.

## Report preview

On report preview, the report is showing sales amount progress from start year to till end.

![Sparkline RDL report preview](/static/assets/on-premise/images/report-designer/report-items/sparkline/design/report-preview.png)

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/sparkline/design-ssrs-sparkline-using-table.rdl)