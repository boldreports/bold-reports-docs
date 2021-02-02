---
title: Create and edit the expression columns Report Designer
description: This section describes the steps to create/edit and delete an expression columns with Expression Designer
keywords: 
---

# Query expression

An expression column is used to create an expression which is a combination of data columns, operators and built-in functions. This expression column will act as a calculated measure that can be configured to report item like other normal numeric columns as a quantitative measure.

## Open query expression dialog

Click on the `Expression` icon in the query designer toolbar to open `Query Expressions` dialog.

![Query expresssion dialog](/static/assets/on-premise/images/report-designer/transforming-data/configuring-expression-columns/query-expression-icon.png)

Now the `Query Expressions` dialog will be launched like below.

![Query expresssion dialog](/static/assets/on-premise/images/report-designer/transforming-data/configuring-expression-columns/query-expression-dialog.png)

> Note: The expression icon in the tools pane will be in disabled state, if there is no table found dropped in table design view.

## Create an expression column

1. To create a new expression column, click on the `Add` button in the `Query Expressions` dialog .
2. In **Name** field, type the name for the expression column or use the default name. By default, manually-created expression columns name are similar to `Expression1`.
  ![Query expresssion dialog](/static/assets/on-premise/images/report-designer/transforming-data/configuring-expression-columns/expression-name-field.png)
3. Define an expression in an **Expression** text area. The syntax for defining a simple expression is,

   `{function name(}[columnname]{operator[columnname])…}`

      where, content within curly braces is optional.

      Some expressions for reference:

      1. YEAR([Order Date]) – To compute year of order date.

      2. [Freight]+100 – To compute the total with 100 added to Freight.
4. To include the function names and the column names in the `Expression` text area, double click on the respective function or column name in the Functions or Column Settings list view.
![Query expresssion dialog](/static/assets/on-premise/images/report-designer/transforming-data/configuring-expression-columns/list-view.png)
5. After, designing the expression value in text area, click on the `Save` button.
![Query expresssion dialog](/static/assets/on-premise/images/report-designer/transforming-data/configuring-expression-columns/save-expression.png)
6. To create multiple expression columns, repeat the above steps.
![Query expresssion dialog](/static/assets/on-premise/images/report-designer/transforming-data/configuring-expression-columns/create-multiple-expression.png)
7. The newly added expressions will be listed under the `Column Settings` list view like below.
![Query expresssion dialog](/static/assets/on-premise/images/report-designer/transforming-data/configuring-expression-columns/expressions-listed-in-list-view.png)

> Refer [Supported Built-in functions](./../../transforming-data/supported-functions-in-query-expression/) section to know more about supported built-in functions.

## Edit an expression column

1. Select an expression column in left pane, which you want to update.
2. Edit the `Name` and `Expression` fields as required.
3. Click on the `Save` button to save the changes.

## Delete an expression column

Click on the `delete` icon in the expression field to delete an expression column.

![Query expresssion dialog](/static/assets/on-premise/images/report-designer/transforming-data/configuring-expression-columns/delete-expression.png)

## Close query expression dialog

To close the dialog click on the `Cancel` button in dialog footer or `Close` icon in the dialog header.

![Query expresssion dialog](/static/assets/on-premise/images/report-designer/transforming-data/configuring-expression-columns/close-query-expression-dialog.png)