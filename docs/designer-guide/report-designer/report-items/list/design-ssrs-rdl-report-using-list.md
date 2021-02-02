---
title: Design ssrs rdl report using list | Web Report Designer
description: Design ssrs rdl report using list, to display a list of records in the list format in Web Report Designer.
keywords: ejReportDesigner, reportdesigner, list, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Design ssrs rdl report using list

This section describes the steps to design `Mail Merge Report` using SSRS list report item.

## Create dataset

To present data in the list format, create a dataset and bind data to the list data region. In this designing section, the following dataset query is used for dataset creation.

```sql
SELECT Emp.Photo as Photo, Emp.FirstName, Emp.LastName,
(DATENAME(WEEKDAY,Emp.BirthDate)+', '+ DATENAME(DAY,Emp.BirthDate)+' '+DATENAME(MONTH,Emp.BirthDate)+' '+DATENAME(YEAR,Emp.BirthDate)) as BirthDate,
Emp.Address, Emp.Title, Emp.Region, Emp.City, Emp.Country, Emp.TitleOfCourtesy, Rep.FirstName as ReportingFirstName, Rep.LastName as ReportingLastName,
(DATENAME(WEEKDAY,Emp.HireDate)+', '+DATENAME(DAY,Emp.HireDate)+' '+DATENAME(MONTH,Emp.HireDate)+' '+DATENAME(YEAR,Emp.HireDate))as HireDate,
Emp.Notes, Emp.HomePhone    FROM  Employees Emp INNER JOIN Employees Rep ON Rep.EmployeeID=emp.ReportsTo

```

Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `Northwind` database is used here.

## Configure a list

1. The list report item is listed in the item panel under the `Data Regions` category.
![List item listed in item panel](/static/assets/on-premise/images/report-designer/report-items/list/item-panel-view.png)
2. Drag and drop the list report item into the design area from the item panel.
![Drag and drop list report item into design area](/static/assets/on-premise/images/report-designer/report-items/list/drag-and-drop-list.png)
3. Respective list properties will be listed in the properties panel.
![List item with properties view](/static/assets/on-premise/images/report-designer/report-items/list/list-item-with-properties-view.png)
4. In the `DataSet` drop-down list choose the required dataset.
![Assign dataset](/static/assets/on-premise/images/report-designer/report-items/list/assign-dataset.png)

## Initial design

Once you drop the list item, the `Table` renders with a single cell in a row associated with the detail group in the design area. By default, the cell contains a rectangle that acts as a container.

![List basic view](/static/assets/on-premise/images/report-designer/report-items/list/list-basic-view.png)

> The cell in a list contains a rectangle. You can replace a default report item in a cell with any other report item.

## Add report items

In list data regions, you can place the report items anywhere instead of being limited to a table layout. To create a mail merge template place the images, rectangles and textboxes inside of the list report item in a free-form manner.

1. Drag and drop two rectangle report items inside the list, to display the employee image and personal details side-by-side. Resize the list report item width and height to the required size.
![Add rectangle item](/static/assets/on-premise/images/report-designer/report-items/list/add-rectangle-item.png)
2. Then, drag and drop the image item in the left rectangle to display the employee image in the report.
![Add image item](/static/assets/on-premise/images/report-designer/report-items/list/add-image-item.png)
3. Bind the `Photo` field from the database to the image item.
![Bind data to the image](/static/assets/on-premise/images/report-designer/report-items/list/bind-data-to-the-image.png)
4. To display the employee name, add textbox in the bottom position of image report item.
![Add textbox item](/static/assets/on-premise/images/report-designer/report-items/list/add-textbox-item.png)
5. Now, right click in the textbox and click on `Expression` option.
![Assign expression in textbox](/static/assets/on-premise/images/report-designer/report-items/list/open-textbox-menu.png)
6. In the expression editor, choose `FirstName` field from the dataset.
![Bind data to the textbox](/static/assets/on-premise/images/report-designer/report-items/list/assign-dataset-field-in-textbox.png)
7. Similarly, assign `LastName` field and create another expression. Then, customize the text appearance using the textbox properties in properties panel.
![Bind data field to the textbox](/static/assets/on-premise/images/report-designer/report-items/list/assign-expression-in-textbox.png)
   > Refer [Display dynamic text using expression](./../../../report-items/textbox/design-rdl-report-using-textbox/#display-dynamic-text-using-expression) section to assign expression in textbox report item.
8. To display other employee details place other report items in the list item. In the below snap, the employee information are placed in the textboxes and the values are bound as expression to fetch dynamic data from the database.
![Mail merge template](/static/assets/on-premise/images/report-designer/report-items/list/mail-merge-template.png)
9. On report preview, each employee details will be displayed as list. To separate the each employee information you can drag and drop a line report item in the inside bottom position of the list cell.
![Mail merge template](/static/assets/on-premise/images/report-designer/report-items/list/add-line-report-item.png)

## Report header

1. Enable the  report `Header` to add a title to the report.
![Enable header tag](/static/assets/on-premise/images/report-designer/report-items/list/enable-header-tag.png)
   > Refer [Show or hide header and footer](./../../../compose-report/show-or-hide-header-footer-in-report/) section to add or remove header/footer in the report
2. Now, add a rectangle report item in the report header area and a textbox within the rectangle.
![Add report items in header area](/static/assets/on-premise/images/report-designer/report-items/list/add-report-items-in-header-area.png)
3. Set the report title text in the textbox and customize the appearance of the title using the textbox and rectangle properties in properties panel as required.
![Report title text](/static/assets/on-premise/images/report-designer/report-items/list/report-title-text.png)

## Final design

A final design of Mail Merge Report will look like below.

![Mail merge report design](/static/assets/on-premise/images/report-designer/report-items/list/final-design.png)

## Report preview

On report preview, the mail merge report will be displayed like below,

![Mail merge report preview](/static/assets/on-premise/images/report-designer/report-items/list/report-preview.png)

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/list/design-ssrs-rdl-report-using-list.rdl)