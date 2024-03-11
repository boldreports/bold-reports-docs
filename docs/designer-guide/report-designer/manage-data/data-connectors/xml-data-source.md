---
title: Connect to XML Data Source | Bold Reports Designer
description: Learn how to connect to XML data source and feed data to your RDL reports using Bold Reports Designer. The data source can be loaded from local disk, external URL file, and direct string.
---

# Connect to XML data source

The Bold Reports allows you to connect to the XML data source that retrieves data from XML file, a string in XML format or a external URL.

## How to create XML data source

To configure the XML data source, follow the below steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=415px')
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=350px')
3. In the connection type panel, choose the `XML` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/connection-types.png '#width=350px')
4. Specify the data source name without special characters, in **Name** field.
   ![XML datasource properties](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/initial-panel.png '#width=350px')

You can connect XML data using the following three options,

* **Inline** - Inline data
* **File Path** - Load from disk
* **External** - Load from external URL

![Source types](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/types.png '#width=385px')

### Inline data

1. Choose `Inline` in `Type` drop-down.
2. Specify a string that contains XML data in the `Inline` text area.

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <root>
      <element>
         <FirstName>First Name 1</FirstName>
         <ID>1</ID>
         <IDBook>1</IDBook>
         <LastName>Last Name 1</LastName>
      </element>
      <element>
         <FirstName>First Name 2</FirstName>
         <ID>2</ID>
         <IDBook>1</IDBook>
         <LastName>Last Name 2</LastName>
      </element>
   </root>

   ```

3. Click on the `Connect` to proceed with query design pane. The query design pane will show the specified XML data's structure in left pane.
   ![Left schema](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/left-schema.png '#width=385px')
4. Drag and drop the table from the left pane in the query design view page and execute.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/execute-schema.png '#width=400px')
5. Click `Finish` to save the data source with a relevant name to proceed with designing report.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/data-list.png '#width=385px')

### Load from disk

1. Choose `File` option in `Type` field. Now, the upload option will start displaying like below.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/file-upload-option.png '#width=385px')
2. Click on the three-dotted button to open upload box. Browse the XML file and click open,
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/browse-file.png '#width=385px')
3. Click on the `Connect` to proceed with query design pane.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/connect-data.png '#width=385px')
4. The query design pane will show the specified XML data's structure in left pane.
   ![Left schema](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/json-file-left-schema.png '#width=250px')
5. Drag and drop the table from the left pane in the query design view page and execute.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/execute-schema-file.png)
6. Click `Finish` to save the data source with a relevant name to proceed with designing report.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/file-data-list.png '#width=355px')

### Load from external URL

1. Choose `External` option in `Type` field.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/external-type.png '#width=355px')
2. Specify a external URL in the `External` text area.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/specify-web-service.png '#width=385px')
3. Click on the `Connect` to proceed with query design pane. The query design pane will show the specified XML data's structure in left pane.
4. Drag and drop the table from the left pane in the query design view page and execute.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/execute-schema-external.png)
5. Click `Finish` to save the data source with a relevant name to proceed with designing report.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/xml-data-source/external-data-list.png '#width=350px')

> Note: In schema tree, the nested fields in the XML data will be shown as flat structure.

## See also

[Formatting Columns](./../../../transforming-data/formatting-columns/)

[Dataset Parameter](./../../../transforming-data/link-a-query-parameter-with-a-report-parameter/)