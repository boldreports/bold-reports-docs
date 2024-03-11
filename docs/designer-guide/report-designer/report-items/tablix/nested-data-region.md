---
title: Nested data regions | Web ReportDesigner | Bold Reports
description: This section describes about nested data regions and the steps design a report with nested data regions in Bold Report Designer
keywords: ejReportDesigner, reportdesigner, list, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, nested data regions, tablix
---

# Nested Data Regions

The data region such as a chart can be placed inside the another data region such as a tablix, to link more than one data region to the same dataset. This will provide different views of the same data. For example, if you want to create a sales report for each sales person, you can create a list with text boxes and an image to display information about the employee, and then add table and chart data regions to the list to show the employee's sales record.

## Assign data to the nested data region

When you create a report design with nested data regions, the dataset assigned to the parent data region will be inherited by the nested data regions. Nested data regions are based on the single dataset, the data regions based on different datasets cannot be nested inside one another.

### Assign data to the nested chart region

If the chart data region is nested within a table, the `Data` tab of the chart report item will be in the disabled state until you assign data to the table report item.

![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/assign-data-to-chart-initial-view.png '#width=600px')

To enable the `Data` panel for chart report item, select the table report item and assign the dataset in the `Dataset` property using properties panel.

![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/assign-data-to-table.png '#width=385px')

Now, select the nested chart report item in the table cell and notice the `Data` panel is in enabled state.

![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/assign-data-to-chart-enabled-view.png '#width=600px')

Switch to the `Data` tab and assign data fields to the chart.

![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/chart-data-panel-full-view.png '#width=600px')

### Assign data to the nested tablix region

If any of the tablix data region is nested within another tablix region, the `Dataset` property for the nested tablix region will not available in the tablix properties.

![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/assign-data-for-nested-table.png '#width=600px')

So to assign data to the nested tablix region, select the parent data region and assign the dataset in the `Dataset` property using properties panel.

![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/assign-data-to-parent-data-region.png '#width=600px')

Now, select a cell in nested tablix region and open the data assign menu. The available fields in the respective dataset will be listed in the data assign menu, from then you can assign data to the nested tablix region.

![Tablix listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/data-assign-menu.png '#width=315px')

## Scope of data for nested data regions

The data bind to the nested data regions, based on the position of the nested data regions in the parent data region. The following points describes the scope for cells in the following Tablix areas:

* Tablix corner - The data bind to the nested data regions, after the filter and sort expressions for the dataset and the outer Tablix are applied.

* Tablix column group - The data bind to the nested data regions in the innermost column group, after the filter and sort expressions for the dataset, the outer Tablix, and the column groups are applied.

* Tablix row group - The data bind to the nested data regions in the innermost row group, after the filter and sort expressions for the dataset, the outer Tablix, and the row groups are applied.

* Tablix body - The data bind to the nested data regions in the tablix body area, after the filter and sort expressions for the dataset, the outer Tablix, and the row and column groups are applied.

> Cannot insert a multi-value item into a detail cell. Detail members can only contain the static inner members.

## Design a simple report with nested data region

1. To present data in the data regions, create a dataset and bind data to the data region. In this designing section, the following dataset query is used for dataset creation.

    ```sql
    SELECT SOD.SalesOrderDetailID, SOD.OrderQty, SOD.UnitPrice,
            CASE WHEN SOD.UnitPriceDiscount IS NULL THEN 0 ELSE SOD.UnitPriceDiscount END AS UnitPriceDiscount,
            SOD.LineTotal, SOD.CarrierTrackingNumber, SOD.SalesOrderID, P.Name, P.ProductNumber
    FROM    Sales.SalesOrderDetail SOD INNER JOIN
            Production.Product P ON SOD.ProductID = P.ProductID INNER JOIN
            Sales.SalesOrderHeader SOH ON SOD.SalesOrderID = SOH.SalesOrderID
    ```
    > Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `AdventuresWorks` database is used here.
2. Drag and drop a `List` report item to the design surface.![Add list report item](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/add-list-report-item.png '#width=255px')
3. Select the `List` report item and choose the dataset in the `Dataset` property using property panel.
   ![Assign data to the list](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/assign-dataset-to-list.png '#width=315px')
4. In the Row Grouping pane, click on the `(Details)` field, now the tablix member properties will be listed in the properties panel.
   ![Assign data to the list](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/open-details-group-properties.png '#width=550px')
5. Click on the `Groups` button to open the `Grouping` dialog.
   ![Assign data to the list](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/grouping-button.png '#width=315px')
6. Change the Name to `SalesOrderID`. Click `Add` in the `Grouping` dialog and choose `SalesOrderID` in drop-down list and click `OK`.
   ![Assign data to the list](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/create-group-expression.png '#width=315px')
   > By adding a group expression, details group is changed as a parent group organized by sales order Id's.
7. Resize the List data region to the required size and drag and drop a textbox report item in the list report item.
   ![Assign data to the list](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/add-textboxes-inside-list-report-item.png '#width=285px')
8. Refer [Create Expression in Textbox](./../../../report-items/textbox/design-rdl-report-using-textbox/#display-dynamic-text-using-expression) and assign the `="Sales Order: " & Fields!SalesOrderID.Value` expressions in the textbox.
9. Drag and drop a `Table` report item into List.
   ![Assign data to the list](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/add-table-in-list-report-item.png '#width=315px')
10. Refer [Assign data fields](./../../../report-items/tablix/assign-data-to-tablix-data-region/#assign-fields-using-data-assign-menu) section and assign the `ProductNumber`, `OrderQty`, `LineTotal` data fields to the table.
   ![Assign data to the list](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/assign-data-fields-in-table.png '#width=315px')
11. Refer [Set header text](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/#set-header-text) section and set header text to the table header row.
   ![Assign data to the list](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/set-table-header-row-text.png '#width=315px')

A simple sales order details report is designed using list and table data regions to group the data based on `SalesOrderID`.

![Assign data to the list](/static/assets/on-premise/images/report-designer/report-items/tablix-nested-data-regions/final-design.png '#width=600px')

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/nested-data-region.rdl).