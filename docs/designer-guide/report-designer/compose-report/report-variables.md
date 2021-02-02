---
title: Simple steps to add report variables | Web report designer
description: This section describes about how to a add report variables in a RDL report using Bold Report Designer
---

# Report Variables

A report variables option can be used to add custom variables to the report. It's value can be a static text or an expression. You can create report variables when a report design demands a value or calculation to be used many times. Each variable name must be unique in a report.

At run time, the value of report variables is calculated once and is maintained until the report is processed again. You can set a report variable  type to be **Read-only** or **Read-write**. By default, it is set to **Read-only** type.

**Read-only** - Use this type to set constant value for the variable. For example, to create a time stamp. Use the following syntax to call a report variable anywhere in the report, **=Variables!MyVariable.Value**

**Read-write** - Use this type to assign value dynamically to the variable at run time. When you set the type to read-write, the **Writable** property for that specific variable is set to true. Use the following syntax to set value for a report variable, **=Variables!MyVariable.SetValue("test")**.

## Add a report variable

For example, we may want to add report printing time in each page of the report, but using direct expression in a text box will print different time in each page. To get round this problem, we can create a report variable to hold the same time in each page. To create a report variable follow the below steps,

1. The report variables property is listed under Report properties. Click on the Properties icon to open Report Properties.
![Report properties](/static/assets/on-premise/images/report-designer/compose-report/report-variables/report-properties.png)
2. The report variable option is provided under the **Code** category.
![Property category](/static/assets/on-premise/images/report-designer/compose-report/report-variables/variables-option.png)
3. Click on the editor icon, to open the **Variables** panel.
![Open variables panel](/static/assets/on-premise/images/report-designer/compose-report/report-variables/edit-icon.png)
4. Click on the ADD icon in the top right corner, to add new variable field.
![Add new variable field](/static/assets/on-premise/images/report-designer/compose-report/report-variables/add-option.png)
5. Enter the name of the variable in **Name** field.
   > Note: A name should start with an alphabet character and it should not contain spaces and special characters except underscore.
6. In value field, enter the direct value in the text field or click on the small square icon to enter an expression.
7. Disable the checkbox, to specify the variable type as **Read-write**. By default, it is set to **Read-only**.

Finally, click on the **Update** button in the variable panel to save the report variables state.
![New report variable](/static/assets/on-premise/images/report-designer/compose-report/report-variables/new-variable.png)

You can edit the variable name and value anytime in the report. Open the variables panel and edit the required variables, then click on the update button.

## Delete a report variable

To delete the variable from the report, click on the delete icon present on the right side of each variable field and update.

![Delete a report variable](/static/assets/on-premise/images/report-designer/compose-report/report-variables/delete-option.png)

## Call report variable in a report

You can call the report variable in any expression. The report variables available in the report are listed under **Data** dropdown in Expression Builder.

![Variables listed in expression builder](/static/assets/on-premise/images/report-designer/compose-report/report-variables/variables-in-expression-builder.png)

Double click on the variable name to insert them into the text editor and click OK.

![Call variable from expression builder](/static/assets/on-premise/images/report-designer/compose-report/report-variables/choose-expression.png)