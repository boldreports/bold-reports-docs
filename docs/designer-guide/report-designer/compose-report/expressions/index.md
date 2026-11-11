---
title: Use the Expression Builder in RDL Reports | {{site.productName}}
description: Set expressions in the {{site.productName}} Web Report Designer using built-in fields, operators, functions, parameters, and dataset fields to control RDL reports.
keywords: ejReportDesigner, reportdesigner, expression, built-in-fields
---

# Expression Builder in Web Report Designer

The Expression Builder in {{site.productNameTM}} Web Report Designer lets you write expressions that control the content, style, data, value, and behavior of your reports. Expressions must start with an equal sign (=). Otherwise, the value is treated as a string literal.

![set-an-expression](/static/assets/on-premise/images/report-designer/compose-report/expressions/set-expression.png '#width=400px')

## How do I set an expression?

You set an expression in the Web Report Designer by picking items from the two drop-down lists in the Expression Builder.

1. Choose **Options** from the first drop-down list to set an expression with **Built-in-fields**, **Operators**, and **Functions**.
   ![expression-in-options](/static/assets/on-premise/images/report-designer/compose-report/expressions/options-dropdown.png '#width=250px')
2. Choose **Data** from the second drop-down list to set an expression with **Parameters** and **Dataset Fields**.
   ![expression-in-data](/static/assets/on-premise/images/report-designer/compose-report/expressions/data-dropdown.png '#width=250px')

## Which expressions are supported?

The Web Report Designer supports the expression types and functions listed in the following table:

|References|Description|Example
|----|-----|-----|
|[Built-in-fields](./../../compose-report/expressions/using-built-in-fields/)|Built-in fields collection are the global variables that are used in a report to specify the report name, page number, execution time. It includes Globals and the User collections.|`=Globals!ExecutionTime`|
|[Operators](./../../compose-report/expressions/using-operators/)| An operator is a symbol that represents to perform simple basic operation. It is used to combine references in an expression.|`=Globals!ExecutionTime+User!UserID`|
|[Functions](./../../compose-report/expressions/using-built-in-functions/)|Functions in an expressions is used to perform some basic functions like datetime, math, aggregate, text functions, conversion functions.|`=Round(1.3*5)/5`|
|[Parameters](./../../compose-report/expressions/using-report-parameters/)|Represents the collection of report parameters, each of which with a parameter value.|`Parameters!ReportParameter1.Value`|
|[Dataset Fields](./../../compose-report/expressions/using-dataset-fields/)|Represents dataset fields collections in reports with dataset field value.|`Fields!EmployeeID.Value,"DataSet1"`|

> Note: Write expressions in a single line format, not in multiple lines.

## See also

* [Built-in fields in expressions](./../../compose-report/expressions/using-built-in-fields/)
* [Built-in functions in expressions](./../../compose-report/expressions/using-built-in-functions/)
* [Operators in expressions](./../../compose-report/expressions/using-operators/)
