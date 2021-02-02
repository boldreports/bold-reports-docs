---
title: Connect to JSON Data Source | Bold Reports Designer
description: Learn how to connect to JSON data source and feed data to your RDL reports using Bold Reports Designer. The data source can be loaded from local disk, external URL file, and direct string.
---

# Connect to JSON data source

The Bold Reports allows you to connect to the JSON data source that retrieves data from JSON file, a string in JSON format or a external URL.

## How to create JSON data source

To configure the JSON data source, follow the below steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png)
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png)
3. In the connection type panel, choose the `JSON` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/connection-types.png)
4. Specify the data source name without special characters, in **Name** field.
   ![JSON datasource properties](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/initial-panel.png)

You can connect JSON data using the following three options,

* **Inline** - Inline data
* **File Path** - Load from disk
* **External** - Load from external URL

![Source types](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/types.png)

### Inline data

1. Choose `Inline` in `Type` drop-down.
2. Specify a string that contains JSON data in the `Inline` text area.

   ```json
   [
   {
      "ID": 1,
      "IDBook": 1,
      "FirstName": "First Name 1",
      "LastName": "Last Name 1"
   },
   {
      "ID": 2,
      "IDBook": 1,
      "FirstName": "First Name 2",
      "LastName": "Last Name 2"
   }
   ]

   ```

3. Click on the `Connect` to proceed with query design pane. The query design pane will show the specified JSON data's structure in left pane.
![Left schema](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/left-schema.png)
4. Drag and drop the table from the left pane in the query design view page and execute.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/execute-schema.png)
5. Click `Finish` to save the data source with a relevant name to proceed with designing report.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/data-list.png)

### Load from disk

1. Choose `File` option in `Type` field. Now, the upload option will start displaying like below.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/file-upload-option.png)
2. Click on the three-dotted button to open upload box. Browse the JSON file and click open,
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/browse-file.png)
3. Click on the `Connect` to proceed with query design pane.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/connect-data.png)
4. The query design pane will show the specified JSON data's structure in left pane.
![Left schema](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/json-file-left-schema.png)
5. Drag and drop the table from the left pane in the query design view page and execute.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/execute-schema-file.png)
6. Click `Finish` to save the data source with a relevant name to proceed with designing report.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/file-data-list.png)

### Load from external URL

1. Choose `External` option in `Type` field.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/external-type.png)
2. Specify a external URL in the `External` text area.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/specify-web-service.png)
3. Click on the `Connect` to proceed with query design pane. The query design pane will show the specified JSON data's structure in left pane.
4. Drag and drop the table from the left pane in the query design view page and execute.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/execute-schema-external.png)
5. Click `Finish` to save the data source with a relevant name to proceed with designing report.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/json-data-source/external-data-list.png)

> Note: In schema tree, the nested fields in the JSON data will be shown as flat structure.

## See also

[Formatting Columns](./../../../transforming-data/formatting-columns/)

[Dataset Parameter](./../../../transforming-data/link-a-query-parameter-with-a-report-parameter/)