---
title: Connect to Excel Data Source | Bold Reports Designer
description: Learn how to connect to Excel data source and feed data to your RDL reports using Bold Reports Designer. The data source can be loaded from local disk and external URL file.
---

# Connect to Excel data source

The Bold Reports allows you to connect to the Excel data source that retrieves data from an excel file and external URL.

## File Prerequisites

1. Bold Reports supports connecting Excel workbooks created with version 2007 and later with `.xlsx` and `.xls` file extensions.

2. Prepared workbook should be a structured one. It should be created with unique column names and the value in a row must be in same data type for the corresponding columns.

3. The first row values of your worksheet will be considered as column names by default in Bold Reports. So, provide a unique and meaningful column name in your spreadsheet that will make it easy to identify your data.

4. You can upload a maximum of file size 20 MB.

## How to create Excel data source

To configure the Excel data source, follow the below steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png)
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png)
3. In the connection type panel, choose the `Excel` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/connection-types.png)
4. Specify the data source name without special characters, in **Name** field.
   ![Excel datasource properties](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/initial-panel.png)

You can connect Excel data using the following two options,

* **File Path** - Load from disk
* **External** - Load from external URL

![Source types](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/types.png)

### Load from disk

1. Choose `File` option in `Type` field. Now, the upload option will start displaying like below.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/file-upload-option.png)
2. Click on the three-dotted button to open upload box. Browse the Excel file and click open,
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/browse-file.png)
3. Here, Bold Reports allows different `Extract Type` and click [here](./../../../manage-data/data-connectors/excel-data-source/#importing-data) to know about each extract type.
![Choose extract type](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/extract-type.png)
4. Click on the `Connect` to proceed with query design pane. The query design pane will show the worksheets/tables in a tree view on the left side pane.
![Left schema](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/excel-file-left-schema.png)
5. Now, drag and drop the worksheet/table you want to analyze, from the left pane in the query design view page and execute.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/execute-schema-file.png)
6. Click `Finish` to save the data source with a relevant name to proceed with designing report.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/file-data-list.png)

### Load from external URL

1. Choose `External` option in `Type` field.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/external-type.png)
2. Specify an external URL in the `External` text area.
![Choose source type](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/specify-web-service.png)
3. Here, Bold Reports allows different `Extract Type` and click [here](./../../../manage-data/data-connectors/excel-data-source/#importing-data) to know about each extract type.
![Choose extract type](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/extract-type.png)
4. Click on the `Connect` to proceed with query design pane. The query design pane will show the worksheets/tables in a tree view on the left side pane.
![Left schema](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/excel-file-left-schema.png)
5. Drag and drop the table from the left pane in the query design view page and execute.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/execute-schema-file.png)
6. Click `Finish` to save the data source with a relevant name to proceed with designing report.
![Dataset list view](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/file-data-list.png)

## Importing data

Bold Reports allows you to import excel as `Worksheets` and `Tables`.

* Worksheets: Choose `Worksheets` to fetch an entire worksheet of data along with tables.
* Table: Choose `Tables` to fetch tables from Excel worksheets.

> NOTE: The import type feature is only available for the version 2007 and later with .xlsx extension format.

### Importing Worksheets

Bold Reports Excel data connector allows you to connect data from different worksheets. In the following excel file, there are two worksheets.

![Excel with multiple worksheet](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/multiple-worksheet.png)

To connect entire worksheet along with tables, choose `Worksheets` in Extract type.

![Choose worksheet as extract type](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/choose-worksheet-type.png)

Click on the `Connect`. The query designer will show the worksheets in a tree view on the left side pane.

![Left schema](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/excel-file-left-schema.png)

### Importing Tables

Bold Reports `Excel` data connector allows you to connect multiple tables across the worksheets. In the following workbook, `Order Details` worksheet has two different tables.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/spreadsheet-tables.png)

To connect one or more tables from your worksheets, choose `Tables` in Extract type.

![Choose tables as extract type](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/choose-table-type.png)

Click on the `Connect`. The query designer will show the tables in a tree view on the left side pane.

![Tables listed in left pane](/static/assets/on-premise/images/report-designer/manage-data/excel-data-source/tables-list.png)

## Limitations

1. You couldn't connect an excel file with the formats other than .xls and .xlsx extensions.
2. You couldn't connect an empty worksheet.
3. Inserted image, charts, shapes or non-data elements in the file will not be shown.
4. You couldn't connect the password protected worksheet.