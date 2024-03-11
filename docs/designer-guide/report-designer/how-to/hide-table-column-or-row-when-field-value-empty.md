---
layout: post
title: Hide the column or row when the field value is empty
description: This section explains about how to hide the table column or row when the field value is empty using expression
platform: report-platform
documentation: ug
---

# How to hide the table column or row when the field value is empty

This section explains how to hide a table column or row when the field value is empty using an expression.

## Hide the table column when the field value is empty

1. Drag and drop the table, then select the dataset and assign the field values.
   ![table deisgn](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-row-column-table-design.png '#width=350px')
2. Select the row and click `visibility` under the properties panel.
   ![set visibility expression](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-column-expression.png '#width=450px')
3. You can hide the empty column in the table based on the column visibility expression as follows.  

   ```csharp
    =IIF(Sum(IIF(Nothing(Fields!FirstName.Value),1,0)) = COUNT(Fields!FirstName.Value) ,FALSE,TRUE)
   ```

4. Click `Preview` at the top-right corner of the Report Designer toolbar to see the output result.
   ![output-column](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-column-output.png '#width=450px')

## Hide the table row when the field value is empty

1. Drag and drop the table, then select the dataset and assign the field values.
   ![table deisgn](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-row-column-table-design.png '#width=450px')
2. Select the row and click `visibility` under the properties panel.
   ![set visibility expression](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-row-expression.png '#width=400px')
3. You can hide the empty column in the table based on the column visibility expression as follows.

   ```csharp
    =IIF(Nothing(Fields!FirstName.Value) ,FALSE,TRUE)
   ```

4. Click `Preview` at the top-right corner of the Report Designer toolbar to see the output result.
   ![output-row](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-row-output.png '#width=400px')