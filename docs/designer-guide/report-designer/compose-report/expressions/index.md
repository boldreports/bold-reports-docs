---
title: Simple steps to set expression using web report designer
description: This section describes about how to set expression with various references using Bold Report Designer
keywords: ejReportDesigner, reportdesigner, expression, built-in-fields
---

# Expression Builder

Expressions provide great flexibility to control the content, style, data, value and behavior of your reports. Expressions must start with equal sign (=), if not the value will be considered as a string literal.

![set-an-expression](/static/assets/on-premise/images/report-designer/compose-report/expressions/set-expression.png)

1. Choose **Options** from the first drop-down list to set expression with **Built-in-fields**, **Operators** and **Functions**.
![expression-in-options](/static/assets/on-premise/images/report-designer/compose-report/expressions/options-dropdown.png)
2. Choose **Data** from the second drop-down list to set expression with **Parameters** and **Dataset Fields**.
![expression-in-data](/static/assets/on-premise/images/report-designer/compose-report/expressions/data-dropdown.png)

## Supported Expressions

The supported expression types and functions details are listed in the following table:

|References|Description|Example
|----|-----|-----|
|[Built-in-fields](./../../compose-report/expressions/using-built-in-fields/)|Built-in fields collection are the global variables that are used in a report to specify the report name, page number, execution time. It includes Globals and the User collections.|`=Globals!ExecutionTime`|
|[Operators](./../../compose-report/expressions/using-operators/)| An operator is a symbol that represents to perform simple basic operation. It is used to combine references in an expression.|`=Globals!ExecutionTime+User!UserID`|
|[Functions](./../../compose-report/expressions/using-built-in-functions/)|Functions in an expressions is used to perform some basic functions like datetime, math, aggregate, text functions, conversion functions.|`=Round(1.3*5)/5`|
|[Parameters](./../../compose-report/expressions/using-report-parameters/)|Represents the collection of report parameters, each of which with a parameter value.|`Parameters!ReportParameter1.Value`|
|[Dataset Fields](./../../compose-report/expressions/using-dataset-fields/)|Represents dataset fields collections in reports with dataset field value.|`Fields!EmployeeID.Value,"DataSet1"`|