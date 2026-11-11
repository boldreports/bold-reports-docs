---
title: Nest Charts and Tables in RDL Data Regions | {{site.productName}}
description: Nest a chart or tablix inside another data region in the {{site.productName}} Web Report Designer to show different views of one RDL dataset and control data scope.
keywords: ejReportDesigner, reportdesigner, list, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting, nested data regions, tablix
---

# Nested data regions in the {{site.productNameTM}} Web Report Designer

In the {{site.productNameTM}} Web Report Designer, you can place a data region such as a chart inside another data region such as a tablix. This links more than one data region to the same dataset and provides different views of the same data. For example, you can create a sales report for each sales person. Create a list with text boxes and an image to display information about the employee. Then, add table and chart data regions to the list to show the employee's sales record.

## How do I assign data to a nested data region?

In {{site.productNameTM}}, nested data regions inherit the dataset assigned to the parent data region. Nested data regions are based on a single dataset. Data regions based on different datasets cannot be nested inside one another.

### How do I assign data to a nested chart?

When a chart data region is nested within a table in the Web Report Designer, the `Data` tab of the chart report item is disabled. The tab becomes available after you assign data to the table report item.

![Tablix listed in item panel](/static/images/report-designer/report-items/tablix-nested-data-regions/assign-data-to-chart-initial-view.png '#width=600px')

To enable the `Data` panel for the chart report item, select the table report item and assign the dataset in the `Dataset` property in the properties panel.

![Tablix listed in item panel](/static/images/report-designer/report-items/tablix-nested-data-regions/assign-data-to-table.png '#width=385px')

Select the nested chart report item in the table cell. The `Data` panel is now enabled.

![Tablix listed in item panel](/static/images/report-designer/report-items/tablix-nested-data-regions/assign-data-to-chart-enabled-view.png '#width=600px')

Switch to the `Data` tab and assign data fields to the chart.

![Tablix listed in item panel](/static/images/report-designer/report-items/tablix-nested-data-regions/chart-data-panel-full-view.png '#width=600px')

### How do I assign data to a nested tablix?

When a tablix data region is nested within another tablix region in the Web Report Designer, the `Dataset` property is not available in the nested tablix properties.

![Tablix listed in item panel](/static/images/report-designer/report-items/tablix-nested-data-regions/assign-data-for-nested-table.png '#width=600px')

To assign data to the nested tablix region, select the parent data region and assign the dataset in the `Dataset` property in the properties panel.

![Tablix listed in item panel](/static/images/report-designer/report-items/tablix-nested-data-regions/assign-data-to-parent-data-region.png '#width=600px')

Select a cell in the nested tablix region and open the data assign menu. The data assign menu lists the available fields in the dataset, and you can assign data to the nested tablix region from there.

![Tablix listed in item panel](/static/images/report-designer/report-items/tablix-nested-data-regions/data-assign-menu.png '#width=315px')

## What is the scope of data for nested data regions?

In {{site.productNameTM}}, data binds to nested data regions based on their position in the parent data region. The following points describe the scope for cells in each tablix area:

* Tablix corner - The data bind to the nested data regions, after the filter and sort expressions for the dataset and the outer Tablix are applied.

* Tablix column group - The data binds to the nested data regions in the innermost column group. Binding happens after the filter and sort expressions for the dataset, the outer Tablix, and the column groups are applied.

* Tablix row group - The data binds to the nested data regions in the innermost row group. Binding happens after the filter and sort expressions for the dataset, the outer Tablix, and the row groups are applied.

* Tablix body - The data binds to the nested data regions in the tablix body area. Binding happens after the filter and sort expressions for the dataset, the outer Tablix, and the row and column groups are applied.

> Cannot insert a multi-value item into a detail cell. Detail members can only contain the static inner members.

## How do I design a simple report with a nested data region?

To design a sales order report with a table nested in a list in the {{site.productNameTM}} Web Report Designer, follow these steps:

1. To present data in the data regions, create a dataset and bind data to the data region. This example uses the following dataset query to create the dataset:

    ```sql
    SELECT SOD.SalesOrderDetailID, SOD.OrderQty, SOD.UnitPrice,
            CASE WHEN SOD.UnitPriceDiscount IS NULL THEN 0 ELSE SOD.UnitPriceDiscount END AS UnitPriceDiscount,
            SOD.LineTotal, SOD.CarrierTrackingNumber, SOD.SalesOrderID, P.Name, P.ProductNumber
    FROM    Sales.SalesOrderDetail SOD INNER JOIN
            Production.Product P ON SOD.ProductID = P.ProductID INNER JOIN
            Sales.SalesOrderHeader SOH ON SOD.SalesOrderID = SOH.SalesOrderID
    ```
    > See the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section and create the dataset with the preceding query. This example uses the `AdventuresWorks` database.
2. Drag and drop a `List` report item to the design surface.![Add list report item](/static/images/report-designer/report-items/tablix-nested-data-regions/add-list-report-item.png '#width=255px')
3. Select the `List` report item and choose the dataset in the `Dataset` property in the properties panel.
   ![Assign data to the list](/static/images/report-designer/report-items/tablix-nested-data-regions/assign-dataset-to-list.png '#width=315px')
4. In the Row Grouping pane, click the `(Details)` field. The properties panel lists the tablix member properties.
   ![Assign data to the list](/static/images/report-designer/report-items/tablix-nested-data-regions/open-details-group-properties.png '#width=550px')
5. Click the `Groups` button to open the `Grouping` dialog.
   ![Assign data to the list](/static/images/report-designer/report-items/tablix-nested-data-regions/grouping-button.png '#width=315px')
6. Change the Name to `SalesOrderID`. Click `Add` in the `Grouping` dialog, choose `SalesOrderID` in the dropdown list, and click `OK`.
   ![Assign data to the list](/static/images/report-designer/report-items/tablix-nested-data-regions/create-group-expression.png '#width=315px')
   > Adding a group expression changes the details group into a parent group organized by sales order IDs.
7. Resize the List data region to the size you need, and drag and drop a textbox report item into the list report item.
   ![Assign data to the list](/static/images/report-designer/report-items/tablix-nested-data-regions/add-textboxes-inside-list-report-item.png '#width=285px')
8. See [Create Expression in Textbox](./../../../report-items/textbox/design-rdl-report-using-textbox/#display-dynamic-text-using-expression) and assign the `="Sales Order: " & Fields!SalesOrderID.Value` expression in the textbox.
9. Drag and drop a `Table` report item into the List.
   ![Assign data to the list](/static/images/report-designer/report-items/tablix-nested-data-regions/add-table-in-list-report-item.png '#width=315px')
10. See the [Assign data fields](./../../../report-items/tablix/assign-data-to-tablix-data-region/#assign-fields-using-data-assign-menu) section and assign the `ProductNumber`, `OrderQty`, `LineTotal` data fields to the table.
   ![Assign data to the list](/static/images/report-designer/report-items/tablix-nested-data-regions/assign-data-fields-in-table.png '#width=315px')
11. See the [Set header text using data assign menu](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/#set-header-text-using-data-assign-menu) section and set the header text in the table header row.
   ![Assign data to the list](/static/images/report-designer/report-items/tablix-nested-data-regions/set-table-header-row-text.png '#width=315px')

You now have a simple sales order details report designed with list and table data regions that group the data by `SalesOrderID`.

![Assign data to the list](/static/images/report-designer/report-items/tablix-nested-data-regions/final-design.png '#width=600px')

> Download the [nested data region report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/nested-data-region.rdl).

## Frequently asked questions

### Can I nest data regions that use different datasets?

No. In {{site.productNameTM}}, nested data regions are based on a single dataset. Data regions based on different datasets cannot be nested inside one another.

### Why is the Data tab of a nested chart disabled?

The `Data` tab of a chart nested within a table stays disabled until you assign data to the table report item.

## See also

* [Assign data to tablix data region](./../../../report-items/tablix/assign-data-to-tablix-data-region/)
* [Design SSRS RDL report using table](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/)
* [Tablix report item](./../../../report-items/tablix/)
