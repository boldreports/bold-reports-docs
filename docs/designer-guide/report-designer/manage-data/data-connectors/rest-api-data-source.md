---
title: Connect to REST API Data Source | Bold Reports Designer
description: Learn how to connect to REST API data source and feed data to your RDL reports using Bold Reports Designer. You can connect with all web services that has a REST API interface.
---

# Connect to Rest API data source

The Bold Reports supports connecting almost all web services that has a REST API interface.

## Choose web data source

To configure the web data source, follow the below steps:

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png)
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png)
3. In the connection type panel, choose the `Web API` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/connection-types.png)
4. After clicking the data source, the `NEW DATASOURCE` configuration panel opens. Specify the data source name without special characters, in **Name** field.
   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/initial.png)

## Connect to web data source with GET action

1. Enter a valid REST API endpoint in the URL text box to perform GET action.
2. Choose *GET* in **Method** drop-down.
3. Choose a **Data Format** from the drop-down based on the response of your provided REST API. Options are JSON and XML.
4. Choose an **Authentication Type** supported by the data source. Options are `Basic http authentication` and `None`. Learn more about [Authentication Types](./../../../manage-data/data-connectors/rest-api-data-source/#authentication-types).
Now, the basic connection details looks something similar to below image,

![GET configuration](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/get-config.png)

If required by the REST API, provide key value pairs in **Headers**.

![GET action with headers](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/get-action-headers.png)

Click on the `Connect` to proceed with query design pane. The query design pane will show a list of schema in left pane.
![Left schema](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/left-schema.png)

Drag and drop the table from the left pane in the query design view page and execute. Its corresponding values will be shown in grid for preview.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/execute-schema.png)

> Note: In schema tree, the nested fields in the specified REST API will be shown as flat structure.

Click `Finish` to save the data source with a relevant name to proceed with designing report.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/data-list.png)

## Connect to web data source with POST action

1. Enter a valid REST API endpoint in the URL text box to perform POST action.
2. Choose *POST* in **Method** drop-down.
3. Choose a **Data Format** from the drop-down based on the response of your provided REST API. Options are JSON and XML.
4. Choose an **Authentication Type** supported by the data source. Options are `Basic http authentication` and `None`. Learn more about [Authentication Types](./../../../manage-data/data-connectors/rest-api-data-source/#authentication-types).
Now, the connection details looks something similar to below image,

![Post configuration](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/post-config.png)

Click on the `Connect` to proceed with query design pane.

Drag and drop the table from the left pane in the query design view page and execute. The results for posted data will be shown in grid for preview.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/execute-schema-for-post.png)

> Note: In schema tree, the nested fields in the specified REST API will be shown as flat structure.

Click `Finish` to save the data source with a relevant name to proceed with designing report.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/data-list.png)

## Pass dynamic value for URL

You can pass dynamic values for URL, Follow the below steps to set expression for URL field.

1. Click on the square icon in right corner of URL field to open expression menu,
![Expression option](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/url-exp-option.png)
2. Choose `Expression` option from the menu,
![Choose expression option](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/expression-menu.png)
3. Now, this will launch the expression dialog,
![Open expression dialog](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/expression-dialog.png)
4. Enter the required expression and click OK.
![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/enter-expression.png)
5. Now, the square icon will be indicated with black color and URL field denoted with `<<Exp>>`,
![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/url-set-exp-output.png)

To reset the expression, choose `Reset` option from the menu. Specify other required connection settings and click `Connect`. Once you click on connect for the first time, it will prompt for a actual URL to load data in query design.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/url-connection-data.png)

Enter a direct URL value instead of expression and click `OK`.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/enter-prompt-url.png)

The above action will take you to query design view.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/query-view.png)

## How to pass headers

Based on the REST API URL, pass the required headers in `Headers` property. To add headers, follow these steps:

Click on the `+ ADD` to add new header.
![Pass parameters for post action](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/add-header.png)

Enter the valid key and its value required to connect with REST API.
![Pass parameters for post action](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/specify-key-value.png)

Similarly, you can add multiple headers and pass value for it.

### How to pass dynamic value for headers

During report processing, you can pass dynamic values for each key in headers using expressions. To set expression for headers, follow these steps:

1. Click on the square icon in right corner of *Value* field to open expression menu,
![Expression for headers](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/expression-for-headers.png)
2. Choose `Expression` option from the menu,
![Choose expression option](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/exp-menu-headers.png)
3. Now, this will launch the expression dialog,
![Open expression dialog](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/exp-dialog-value.png)
4. Enter the required expression and click OK.
![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/enter-exp-header-val.png)
5. Now, the square icon will be indicated with black color and value field denoted with `<<Exp>>`,
![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/exp-output-header.png)

To reset the expression, choose `Reset` option from the menu. Specify other required connection settings and click `Connect`. Once you click on connect for the first time, it will prompt for a valid header values to load data in query design.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/headers-connection-data.png)

Enter a valid headers value instead of expression and click `OK`.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/enter-prompt-header.png)

The above action will fetch field information from specified REST API URL and take you to query design view.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/query-view.png)

## How to pass parameters

The parameter option will start displaying once you choose *POST* method. To add parameter, follow these steps:

Click on the `+ ADD` to add new parameter.
![Pass parameters for post action](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/add-parameter.png)

Enter the property name and its value to post the data.
![Pass parameters for post action](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/specify-key-value-param.png)

### How to pass dynamic value for parameters

During report processing, you can pass dynamic values for each parameter using expressions. To set expression for parameter value, follow these steps:

1. Click on the square icon in right corner of *Value* field to open expression menu,
![Expression for parameters](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/expression-for-parameters.png)
2. Choose `Expression` option from the menu,
![Choose expression option](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/exp-menu-param.png)
3. Now, this will launch the expression dialog,
![Open expression dialog](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/exp-dialog-param.png)
4. Enter the required expression and click OK.
![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/enter-exp-param.png)
5. Now, the square icon will be indicated with black color and value field denoted with `<<Exp>>`,
![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/exp-output-param.png)

To reset the expression, choose `Reset` option from the menu. Specify other required connection settings and click `Connect`. Once you click on connect for the first time, it will prompt for a direct values to load data in query design.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/param-connection-data.png)

Enter a values instead of expression and click `OK`.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/enter-prompt-parameter.png)

The above action will post information into specified REST API URL and take you to query design view.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/query-view.png)

## How to pass raw data

To specify raw value, follow these steps:

Choose *POST* method and switch the `Raw` radio button. Now, a text area with an option to set expression will start displaying.

![Pass parameters for post action](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/enable-raw-option.png)

Enter the direct value in the text area, for example

```json
{
  "ID": 220,
  "Title": "Book 220",
  "Description": "Book 220 added",
  "PageCount": 100,
  "Excerpt": "Lorem lorem lorem. Lorem lorem lorem. Lorem lorem lorem.\r\n",
  "PublishDate": "2020-08-06T10:42:22.464Z"
}

```

### How to pass dynamic value for raw data

During report processing, you can directly pass raw data using expressions. To set expression for raw value, follow these steps:

1. Click on the square icon in right corner of *Raw* field to open expression menu,
![Expression for parameters](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/exp-menu-raw.png)
2. Choose `Expression` option from the menu. Now, this will launch the expression dialog,
![Open expression dialog](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/exp-dialog-raw.png)
3. Enter the required expression and click OK.
![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/exp-value-raw.png)
4. Now, the square icon will be indicated with black color and value field denoted with `<<Exp>>`,
![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/exp-output-raw.png)

To reset the expression, choose `Reset` option from the menu. Specify other required connection settings and click `Connect`. Once you click on connect for the first time, it will prompt for a raw data to load data in query design.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/connection-data.png)

Enter a valid data and click `OK`.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/enter-prompt-raw.png)

The above action will post the information into specified REST API URL and take you to query design view.

![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/query-view.png)

### Syntax to pass expression in raw data

**Syntax 1** :
   When passing data as JSON object, it should be enclosed with in double quotes, the key/value strings should be enclosed within single quotes. Otherwise it can follow any syntax which supports the Client-Server transaction.

   ![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/raw-syntax-1.png)

**Syntax 2** :  To use the Parameters, Data fields, or Variables along with Json object, follow the below syntax.

   ![Enter expression](/static/assets/on-premise/images/report-designer/manage-data/web-data-source/syntax-raw-2.png)

> We use double quotes to identify the data is whole string value or not.

## Pagination

Pagination allows REST API to conserve resources, improve response times and optimize the user experience. To get better response time for huge records append pagination properties along with URL or specify it as `Headers`. For example, you can append the pagination parameter in URL like below,

```html
https://demo.net/rest/api/2/Books?id=1278&startAt=0&maxResults=33&fields=title,author,price
```

## Authentication types

You can set authentication type, either as **None** or **Basic HTTP Authentication**.

Use *None* type in following cases,

1. If your data source supports authentication directly through REST API URL, choose **None** under **Authentication Type**.
2. If your data source supports API Key/API Token authentication, pass these values under **Header(s)** by clicking **+Add**. Choose **None** under **Authentication Type**.

Use *Basic Http authentication*, if your data source requires username and password to authenticate. Choose **Basic HTTP Authentication** under **Authentication Type** and input the username and password.

## See also

[Formatting Columns](./../../../transforming-data/formatting-columns/)

[Dataset Parameter](./../../../transforming-data/link-a-query-parameter-with-a-report-parameter/)