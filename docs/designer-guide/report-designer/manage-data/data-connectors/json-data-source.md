---
title: Connect a JSON Data Source to RDL Reports | {{site.productName}}
description: Connect JSON data from an inline string, a local file, or an external URL in the {{site.productName}} Web Report Designer and feed the data to your RDL reports.
---

# Connect to JSON data source

To use JSON data in {{site.productNameTM}}, create a JSON data source that retrieves data from a JSON file, a string in JSON format, or an external URL.

## How do I create a JSON data source?

To create a JSON data source in the {{site.productNameTM}} Web Report Designer, open the **Data** configuration panel and choose the JSON connection type.

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=410px')
2. In the `DATA` configuration panel, click the `NEW DATA` button.
   ![New Data Panel](/static/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=355px')
3. In the connection type panel, choose the `JSON` data source type.
   ![Connection types panel](/static/images/report-designer/manage-data/json-data-source/connection-types.png '#width=355px')
4. Specify the data source name without special characters in the **Name** field.
   ![JSON datasource properties](/static/images/report-designer/manage-data/json-data-source/initial-panel.png '#width=350px')

You can connect JSON data using the following three options:

* **Inline** - Inline data.
* **File Path** - Load from disk.
* **External** - Load from external URL.

![Source types](/static/images/report-designer/manage-data/json-data-source/types.png '#width=325px')

### Inline data

To use inline JSON data in the {{site.productNameTM}} Web Report Designer, paste a JSON string into the `Inline` text area.

1. Choose `Inline` in the `Type` drop-down.
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

3. Click `Connect` to open the query design pane. The query design pane shows the specified JSON data's structure in the left pane.
   ![Left schema](/static/images/report-designer/manage-data/json-data-source/left-schema.png '#width=410px')
4. Drag and drop the table from the left pane in the query design view page and execute.
   ![New connection panel](/static/images/report-designer/manage-data/json-data-source/execute-schema.png)
5. Click `Finish` to save the data source with a relevant name and continue designing the report.
   ![New connection panel](/static/images/report-designer/manage-data/json-data-source/data-list.png '#width=355px')

### Load from disk

To load a JSON file from disk in the {{site.productNameTM}} Web Report Designer, upload the file and connect.

1. Choose the `File` option in the `Type` field. The upload option appears, as shown in the following image.
   ![New connection panel](/static/images/report-designer/manage-data/json-data-source/file-upload-option.png '#width=335px')
2. Click the three-dotted button to open the upload box. Browse the JSON file and click open.
   ![New connection panel](/static/images/report-designer/manage-data/json-data-source/browse-file.png '#width=410px')
3. Click `Connect` to open the query design pane.
   ![New connection panel](/static/images/report-designer/manage-data/json-data-source/connect-data.png '#width=385px')
4. The query design pane shows the specified JSON data's structure in the left pane.
   ![Left schema](/static/images/report-designer/manage-data/json-data-source/json-file-left-schema.png '#width=355px')
5. Drag and drop the table from the left pane in the query design view page and execute.
   ![New connection panel](/static/images/report-designer/manage-data/json-data-source/execute-schema-file.png)
6. Click `Finish` to save the data source with a relevant name and continue designing the report.
   ![New connection panel](/static/images/report-designer/manage-data/json-data-source/file-data-list.png '#width=385px')

### Load from external URL

To load JSON data from an external URL in the {{site.productNameTM}} Web Report Designer, specify the URL and connect.

1. Choose the `External` option in the `Type` field.
   ![New connection panel](/static/images/report-designer/manage-data/json-data-source/external-type.png '#width=385px')
2. Specify an external URL in the `External` text area.
   ![New connection panel](/static/images/report-designer/manage-data/json-data-source/specify-web-service.png '#width=385px')
3. Click `Connect` to open the query design pane. The query design pane shows the specified JSON data's structure in the left pane.
4. Drag and drop the table from the left pane in the query design view page and execute.
   ![New connection panel](/static/images/report-designer/manage-data/json-data-source/execute-schema-external.png)
5. Click `Finish` to save the data source with a relevant name and continue designing the report.
   ![New connection panel](/static/images/report-designer/manage-data/json-data-source/external-data-list.png '#width=355px')

   > **Note:**
   > * In schema tree, the nested fields in the JSON data will be shown as flat structure.
   > * When the JSON data contains duplicate key names at different levels, {{site.productNameTM}} ensures uniqueness and avoids conflicts by appending the parent keys to each field name using the following format: `<fieldName>__<topLevelParentKey>_<nextParentKey>_..._<immediateParentKey>_`.

## Frequently asked questions

### How are nested JSON fields shown?

In the schema tree, the nested fields in the JSON data are shown as a flat structure.

### How does {{site.productNameTM}} handle duplicate JSON key names?

{{site.productNameTM}} appends the parent keys to each field name to ensure uniqueness, using the format `<fieldName>__<topLevelParentKey>_<nextParentKey>_..._<immediateParentKey>_`.

## See also

* [Formatting Columns](./../../../transforming-data/formatting-columns/)
* [Dataset Parameter](./../../../transforming-data/link-a-query-parameter-with-a-report-parameter/)
* [Connect to CSV data source](./../../data-connectors/csv-data-source/)
