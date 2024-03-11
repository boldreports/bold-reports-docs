---
title: Create SSRS drill through report | Web Report Designer
description: Drill through reports in SSRS means allowing users to open a report by clicking a link within another report and it contains details about an item that is contained in an original summary report.
keywords: ejReportDesigner, reportdesigner, line, reportitem, border
---

# Create SSRS drill through report

Drill through can be used to create an interactive report which allows user to open an report by clicking the link within the main report.

## Create data

To present data in the table, create a dataset and bind data to the table data region. In this designing section, the following dataset query is used for dataset creation.

```sql
SELECT PC.Name AS ProdCat, PS.Name AS SubCat, DATEPART(yy, SOH.OrderDate) AS OrderYear, 'Q' + DATENAME(qq, SOH.OrderDate) AS OrderQtr,SUM(SOD.UnitPrice * SOD.OrderQty) AS Sales
FROM Production.ProductSubcategory PS INNER JOIN
Sales.SalesOrderHeader SOH INNER JOIN
Sales.SalesOrderDetail SOD ON SOH.SalesOrderID = SOD.SalesOrderID INNER JOIN
Production.Product P ON SOD.ProductID = P.ProductID ON PS.ProductSubcategoryID = P.ProductSubcategoryID INNER JOIN
Production.ProductCategory PC ON PS.ProductCategoryID = PC.ProductCategoryID
WHERE (SOH.OrderDate BETWEEN '1/1/2002' AND '12/31/2003')
GROUP BY DATEPART(yy, SOH.OrderDate), PC.Name, PS.Name, 'Q' + DATENAME(qq, SOH.OrderDate), PS.ProductSubcategoryID
```

> Refer [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `AdventuresWorks` database is used here.

## Design drill through report

Design the drill through report, before configuring the drill through action in the main report. Refer the [Data bar report](./../../report-items/data-bar/design-ssrs-data-bar-using-table/) section and the report design will look like below.

![Drill through report](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/databar-report-design.png '#width=450px')

Now, define a [basic parameter](./../../report-parameters/add/#create-parameter) and name it as `Product Category`.
![Basic parameter](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/basic-parameter.png '#width=350px')

Then apply filter condition on the dataset to filter product category and its sub categories at dataset level.

![Dataset filter](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/open-dataset-filter.png '#width=350px')

Add a filter and choose `Prodcat` field.

![Add filter](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/add-filter.png '#width=400px')

Assign a `Product Category` parameter as expression in the value field and click `OK`.

![Add filter](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/assign-parameter.png '#width=400px')

> Refer [Dataset Filters](./../../manage-data/dataset/add-a-filter-to-a-dataset/) section to apply filters at dataset level.

## Add drill through action to a chart

Now, design a main report and link the drill through report using `Link` property. Here, we are going to configure the drill through action for chart series.

Refer the [Pie chart](./../../report-items/data-bar/design-ssrs-data-bar-using-table/) section and design the report like below.

![Main report](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/main-report.png)

1. Open the chart properties,
   ![Chart properties](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/chart-properties.png '#width=350px')
2. Choose `Sales1` series in choose series dropdown and click `edit` icon.
   ![Choose series](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/choose-series.png '#width=350px')
3. The respective series properties will be listed in secondary panel.
   ![Series properties](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/series-properties.png  '#width=350px')
4. Under `Link` category, choose `Report` option in `Link To` property.
   ![Link to property](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/choose-report-action.png '#width=350px')
5. In the `Report` field, browse and set the path of already designed data bar report.
   ![Set report path](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/set-report-path.png '#width=350px')
6. Click on `Set Parameters` button. Now, the parameters dialog will open like below.
   ![Set parameters](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/open-parameters-dialog.png '#width=350px')
7. Click on `ADD` option in the dialog to configure parameter values.
   ![Add parameter](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/add-parameter-field.png '#width=350px')
8. In the `Parameter Name` field, select the parameter name of the selected report.
   ![Select parameter](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/select-parameter.png '#width=350px')
9. Provide the `=Fields!ProdCat.Value` expression value in `Parameter Value` field and click `OK`.
   ![Provide parameter value](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/provide-parameter-value.png '#width=350px')

   > Refer [Link Report](./../../compose-report/link-data/#report-linking) section to know more about report linking.

   ![Set report action](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/set-report-action.png '#width=350px')

## Drill through chart series

Now, click on the `Preview` button and the report preview will look like normal pie chart.

![Main report preview](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/report-preview.png '#width=600px')

Then click on any series in the report preview,

![Main report preview](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/click-on-series.png '#width=600px')

The sub-report displays sub-category wise sales amount of `Bikes` product. Click on the `Go to parent` icon to navigate from sub-report to main report.

![Drill through report](/static/assets/on-premise/images/report-designer/compose-report/create-ssrs-drill-through-report/drill-through-report.png '#width=550px')

> Download the above report design from the links - [Parent report](https://github.com/boldreports/resources/tree/master/docs/report-designer/compose-report/create-ssrs-drill-through-report-pie-chart.rdl) and [Child report](https://github.com/boldreports/resources/tree/master/docs/report-designer/compose-report/create-ssrs-drill-through-report-databar.rdl)