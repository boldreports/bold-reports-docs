---
title: Connect CData Data Sources to RDL Reports | {{site.productName}}
description: Connect the {{site.productName}} Web Report Designer to a CData data source, optionally through an SSH tunnel, and use the query results to build RDL reports.
---

# Connect to CDATA data source

To connect {{site.productNameTM}} to a CData data source, open the **Data** configuration panel in the Web Report Designer and create a CData data source. You can also connect through a secure SSH tunnel.

## How do I create a CDATA data source?

To create a CDATA data source in the {{site.productNameTM}} Web Report Designer, open the **Data** configuration panel and choose the CDATA connection type.

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=415px')
2. In the `DATA` configuration panel, click the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=350px')
3. In the connection type panel, choose the `CDATA` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/cdata-data-source/connection-types.png '#width=360px')

### How do I configure the basic options?

When you create a new data source in the Web Report Designer, the `NEW DATASOURCE` panel shows the basic options.

1. Specify the data source name without special characters in the **Name** field.
2. Enter a valid CDATA server or host name in the **Server Name** field.
3. Enter a valid CDATA username in the **UserName** text box.
4. Enter a valid CDATA password in the **Password** text box.
5. Select a database that you want to query in the listed database associated with the given CDATA server in the database drop-down.
   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/cdata-data-source/basic-options.png '#width=360px')
6. Click `Connect` to open the query design pane.
7. Enter the required query and execute it. The corresponding values appear in a grid for preview.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/cdata-data-source/execute-schema.png '#width=600px')

8. Click `Finish` to save the data source with a relevant name and continue designing the report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/cdata-data-source/data-list.png '#width=350px')

### How do I connect to a CDATA data source through an SSH tunnel?

{{site.productNameTM}} lets you connect to a CDATA data source using a secure SSH tunnel. The SSH tunnel provides a more secure method for connecting, especially when you access remote databases over untrusted or insecure networks.

![Enable-SSH](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/enable-ssh-mysql.png '#width=385px')

> Refer to [Configuring SSH tunnel for data connectors](./../../connection-settings/configuring-ssh-tunnel/) for more details.

## Frequently asked questions

### Can I connect to CDATA through an SSH tunnel?

Yes. {{site.productNameTM}} supports connecting to a CDATA data source through a secure SSH tunnel.

### How do I preview CDATA data before saving?

Click `Connect`, enter the required query, and execute it. The corresponding values appear in a grid for preview.

## See Also

* [Connect to MySQL data source](./../../data-connectors/mysql-data-source/)
* [Data connectors overview](./../../data-connectors/)
