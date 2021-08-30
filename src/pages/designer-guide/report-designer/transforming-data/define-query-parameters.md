---
title: Define query parameters in dataset query designer
description: Define query parameters in dataset query designer on dataset create/edit action in Bold Report Designer
---

# Define query parameters

In query designer, the query parameter can be created in both design and query mode. The following sections describes the steps to create query parameters in design and query mode.

Refer [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/) section for better understanding with the following sections. The below image showcases the initial view of query designer.![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/define-query-parameters/query-designer-initial-view.png)

## Create query parameter in design mode

1. Drag and drop a table into design area and open the `Query Filters` dialog, in the query designer.
![Open query filter dialog](/static/assets/on-premise/images/report-designer/transforming-data/define-query-parameters/open-query-filter-dialog.png)
   > Refer [Query filters](./../../transforming-data/query-filter/) section to learn more about query filters.
2. Click on the **Add** icon, to create a new filter.
3. Choose any dataset field in the  first drop-down list.
4. Choose any **Operator** in the second drop-down list.
5. In the **Value** field, provide a value to filter the data.
6. Select the checkbox next to the value filed, to create a new `query parameter`.
7. Click on the `OK` button.
![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/define-query-parameters/create-query-parameter.png)

Once you save the dataset, an equivalent report parameters will be created under the `PARAMETERS` panel like below.
![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/define-query-parameters/report-parameters-list.png)

## Create query parameter in code mode

1. Click on the `switcher` in query designer toolbar, to switch to the query mode.
![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/define-query-parameters/code-switcher-icon.png)
2. Specify the query in the text area, the query specified in the below snap returns the list of data from the `AdventureWorks` database, `SalesOrderDetail` table for the `Sales` schema.
![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/define-query-parameters/specify-query-in-text-area.png)
3. Now, add the following `WHERE` clause at the end of the query to create a query parameter.
    ```js
    WHERE  (([Sales].[SalesOrderDetail].[SalesOrderID] = @SalesOrderID))
    ```
   ![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/define-query-parameters/add-where-clause.png)
4. Click on the `Finish` button, now the `Parameters` dialog opens.
![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/define-query-parameters/query-parameter-dialog.png)
5. Enter the value for parameter in the value field and click `OK`.
![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/define-query-parameters/enter-query-parameter-value.png)

Once you save the dataset, an equivalent report parameters will be created under the `PARAMETERS` panel like below.
![Query joiner icon in enabled state](/static/assets/on-premise/images/report-designer/transforming-data/define-query-parameters/report-parameters-list.png)