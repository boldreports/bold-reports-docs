---
title: Add Report Variables to RDL Reports | {{site.productName}}
description: Add report variables in {{site.productName}} Web Report Designer to reuse a static value or expression in an RDL report, with read-only and read-write variable types.
---

# Report variables in {{site.productNameTM}} Web Report Designer

The report variables option in {{site.productNameTM}} Web Report Designer adds custom variables to a report. A variable value can be static text or an expression. Create report variables when a report design needs a value or calculation many times. Each variable name must be unique in a report.

## How do report variables work?

At run time, {{site.productNameTM}} calculates the value of a report variable once and keeps it until the report is processed again. You can set a report variable type to **Read-only** or **Read-write**. By default, it is set to **Read-only** type.

**Read-only** - Use this type to set a constant value for the variable, for example, to create a time stamp. Use the following syntax to call a report variable anywhere in the report, **=Variables!MyVariable.Value**.

**Read-write** - Use this type to assign a value dynamically to the variable at run time. When you set the type to read-write, the **Writable** property for that variable is set to true. Use the following syntax to set a value for a report variable, **=Variables!MyVariable.SetValue("test")**.

## Add a report variable

You add a report variable in Web Report Designer from the **Code** category of Report properties. For example, you may want to add the report printing time on each page. A direct expression in a text box prints a different time on each page. To solve this, create a report variable that holds the same time on each page.

1. Click the Properties icon to open Report Properties. The report variables property is listed under Report properties.
   ![Report properties](/static/assets/on-premise/images/report-designer/compose-report/report-variables/report-properties.png '#width=350px')
2. Find the report variable option under the **Code** category.
   ![Property category](/static/assets/on-premise/images/report-designer/compose-report/report-variables/variables-option.png '#width=350px')
3. Click the editor icon to open the **Variables** panel.
   ![Open variables panel](/static/assets/on-premise/images/report-designer/compose-report/report-variables/edit-icon.png '#width=350px')
4. Click the ADD icon in the top right corner to add a new variable field.
   ![Add new variable field](/static/assets/on-premise/images/report-designer/compose-report/report-variables/add-option.png '#width=300px')
5. Enter the name of the variable in the **Name** field.
   > Note: A name should start with an alphabet character and it should not contain spaces and special characters except underscore.
6. In the value field, enter a direct value in the text field, or click the small square icon to enter an expression.
7. Clear the checkbox to set the variable type to **Read-write**. By default, it is set to **Read-only**.
8. Click the **Update** button in the variable panel to save the report variables state.

The following image shows a new report variable in the Variables panel.

![New report variable](/static/assets/on-premise/images/report-designer/compose-report/report-variables/new-variable.png '#width=300px')

You can edit the variable name and value anytime in the report. Open the variables panel, edit the variables you need, and then click the update button.

## Delete a report variable

You delete a report variable in Web Report Designer by clicking the delete icon on the right side of the variable field, and then clicking update.

![Delete a report variable](/static/assets/on-premise/images/report-designer/compose-report/report-variables/delete-option.png '#width=300px')

## Call report variable in a report

You call a report variable in {{site.productNameTM}} from any expression. The report variables available in the report are listed under the **Data** dropdown in Expression Builder.

![Variables listed in expression builder](/static/assets/on-premise/images/report-designer/compose-report/report-variables/variables-in-expression-builder.png '#width=400px')

Double-click the variable name to insert it into the text editor, and then click OK.

![Call variable from expression builder](/static/assets/on-premise/images/report-designer/compose-report/report-variables/choose-expression.png '#width=400px')

## Frequently asked questions

### What is the default report variable type?

By default, a report variable is set to **Read-only** type.

### How often is a report variable value calculated?

At run time, the value is calculated once and kept until the report is processed again.

## See also

* [Expressions](./../../compose-report/expressions/)
* [Code module](./../../compose-report/code-module/)
* [Report properties](./../../compose-report/report-properties/)
