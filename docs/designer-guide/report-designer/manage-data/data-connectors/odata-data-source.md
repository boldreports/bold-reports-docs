---
title: Connect to Odata Data Source | Bold Reports Designer
description: Learn how to connect to OData data source and feed data to your RDL reports using Bold Reports Designer. You can connect with the OData using this REST API interface.
---

# Connect to OData data source

The Bold Reports supports connecting OData web services through REST API.

## Choose OData data source

To configure the OData data source, follow the below steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png)
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png)
3. In the connection type panel, choose the `OData` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/odata-data-source/connection-types.png)

## Create OData data source

After clicking the data source, the `NEW DATASOURCE` configuration panel opens. Follow the below steps to create OData data source:

1. Specify the data source name without special characters, in **Name** field.
   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/odata-data-source/initial.png)
2. Enter a valid OData REST API endpoint in the URL textbox. Refer the [OData API documentation](https://www.odata.org/documentation/) for more details.

   Example: `https://services.odata.org/V4/Northwind/Northwind.svc/Orders`
3. Choose one of the **Method** from the drop-down for the provided REST API. Options are *GET* and *POST*.
4. If required by the REST API, provide key value pairs in **Headers**.
5. Choose a **Data Format** from the drop-down based on the response of your provided REST API. Options are JSON and XML.
6. Choose an **Authentication Type** supported by the data source. Options are `Basic http authentication` and `None`. Learn more about [Authentication Types](./../../../manage-data/data-connectors/odata-data-source/#authentication-types).
If you choose `GET` method type, the basic configuration looks something similar to below image,

![GET configuration](/static/assets/on-premise/images/report-designer/manage-data/odata-data-source/get-config.png)

Based on the REST API service which you use, pass the headers, parameters or raw data, data format and authentication type.

Click on the `Connect` to proceed with query design pane. The left pane will show the key fields of JSON data retrieved from OData Rest API request.
![Left schema](/static/assets/on-premise/images/report-designer/manage-data/odata-data-source/left-schema.png)

Drag and drop the table from the left pane in the query design view page and execute. Its corresponding values will be shown in grid for preview.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/odata-data-source/execute-schema.png)

> Note: In schema tree, the nested fields in the specified OData service will be shown as flat structure.

Click `Finish` to save the data source with a relevant name to proceed with designing report.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/odata-data-source/data-list.png)

## Authentication types

You can set authentication type, either as **None** or **Basic HTTP Authentication**.

Use *None* type in following cases,

1. To connect OData services without any authentication, choose **None** under **Authentication Type**.
2. If your data source supports API Key/API Token authentication, pass these values under **Header(s)** by clicking **+Add**. Choose **None** under **Authentication Type**.

Use *Basic Http authentication*, if your OData service requires username and password to authenticate. Choose **Basic HTTP Authentication** under **Authentication Type** and input the username and password.

## Pass dynamic values

You can pass dynamic values for URL, headers, and parameters using [Expressions](./../../../compose-report/expressions/). To set an expression for required fields, click on the square icon provided for respective field. For example, follow the below steps to set expression for URL field.
1. Click on the square icon in right corner of URL field to open expression menu,
![Expression option](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/url-exp-option.png)
2. Choose `Expression` option from the menu,
![Choose expression option](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/expression-menu.png)
3. Now, this will launch the expression dialog,
![Open expression dialog](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/expression-dialog.png)
4. Enter the required expression and click OK.
![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/odata-data-source/enter-expression.png)
5. Now, the square icon will be indicated with black color and URL field denoted with `<<Exp>>`,
![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/url-set-exp-output.png)

To reset the expression, choose `Reset` option from the menu. Specify other required connection settings and click `Connect`. Once you click on connect for the first time, it will prompt for a actual URL to load data in query design.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/url-connection-data.png)

Enter a direct URL value instead of expression and click `OK`.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/odata-data-source/enter-prompt-url.png)

The above action will take you to query design view.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/odata-data-source/query-view.png)

Similarly, you can set and reset expression for all the fields which supports expression.

## Sample queries

[https://services.odata.org/V4/Northwind/Northwind.svc/Order_Details](https://services.odata.org/V4/Northwind/Northwind.svc/Order_Details)

[https://services.odata.org/V4/Northwind/Northwind.svc/Customers](https://services.odata.org/V4/Northwind/Northwind.svc/Customers)

[https://services.odata.org/V4/Northwind/Northwind.svc/Regions](https://services.odata.org/V4/Northwind/Northwind.svc/Regions)

[https://services.odata.org/V4/Northwind/Northwind.svc/Orders](https://services.odata.org/V4/Northwind/Northwind.svc/Orders)

[https://services.odata.org/TripPinRESTierService](https://services.odata.org/TripPinRESTierService)

## See also

[Formatting Columns](./../../../transforming-data/formatting-columns/)
[Dataset Parameter](./../../../transforming-data/link-a-query-parameter-with-a-report-parameter/)