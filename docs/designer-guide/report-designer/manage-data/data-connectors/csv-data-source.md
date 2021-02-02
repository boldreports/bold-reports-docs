---
title: Connect to CSV Data Source | Bold Reports Designer
description: Learn how to connect to CSV data source and feed data to your RDL reports using Bold Reports Designer. The data source can be loaded from local disk and external URL file.
---

# Connect to CSV data source

The Bold Reports allows you to connect to the CSV data source that retrieves data from csv and text files, or an external URL.

## How to create JSON data source

To configure the CSV data source, follow the below steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png)
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png)
3. In the connection type panel, choose the `CSV` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/connection-types.png)
4. Specify the data source name without special characters, in **Name** field.
   ![CSV datasource properties](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/initial-panel.png)

You can connect CSV data using the following two options,

* **File Path** - Load from disk
* **External** - Load from external URL

![Source types](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/types.png)

### Load from disk

1. Choose `File` option in `Type` field. Now, the upload option will start displaying like below.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/file-upload-option.png)
2. Click on the three-dotted button to open upload box. Browse the CSV file and click open,
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/browse-file.png)
3. If your data contains headers, enable `Consider the first row as header` option to treat them as headers.
4. Use `Separator` based on the type of file uploaded. Click [here](./../../../manage-data/data-connectors/csv-data-source/#separator) to know about supported separators.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/separators.png)
5. Click on the `Connect` to proceed with query design pane. The query design pane will show the specified CSV data's structure in left pane.
![Left schema](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/csv-file-left-schema.png)
6. Drag and drop the table from the left pane in the query design view page and execute.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/execute-schema-file.png)
7. Click `Finish` to save the data source with a relevant name to proceed with designing report.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/file-data-list.png)

### Load from external URL

1. Choose `External` option in `Type` field.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/external-type.png)
2. Specify a external URL in the `External` text area.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/specify-web-service.png)
3. If your data contains headers, enable `Consider the first row as header` option to treat them as headers.
4. Use `Separator` based on the type of file uploaded. Click [here](./../../../manage-data/data-connectors/csv-data-source/#separator) to know about supported separators.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/separators.png)
5. Click on the `Connect` to proceed with query design pane. The query design pane will show the specified CSV data's structure in left pane.
![Left schema](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/csv-file-left-schema.png)
6. Drag and drop the table from the left pane in the query design view page and execute.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/execute-schema-file.png)
7. Click `Finish` to save the data source with a relevant name to proceed with designing report.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/file-data-list.png)

## Separator

Use `Separator` based on the type of file uploaded. Available options are listed under separator drop-down.

![Separator list](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/separators.png)

To set custom delimiter, choose  `Custom` option in separator drop-down.

![Separator list](/static/assets/on-premise/images/report-designer/manage-data/csv-data-source/custom-separator.png)

In delimiter textbox, enter the required delimiter. The data will be retrieved from the data source based on that delimiter.