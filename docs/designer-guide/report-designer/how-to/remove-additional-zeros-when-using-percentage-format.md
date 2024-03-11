---
layout: post
title: How to remove the additional zeros when using percentage 
description: This section briefly describes how to remove the additional zeros when using percentage format in a report.
platform: report-platform
documentation: ug
---

# How to remove the additional zeros when using percentage format

When using the percentage format in a cell, it automatically calculates the value into a percentage. However, it adds additional zeros to your pre-calculated percentage value. To remove the additional zeros, follow these steps.

1. Click on the textbox field value in the tablix, and apply an expression to **divide** the field value by 100.
   ![expression page](/static/assets/on-premise/images/report-designer/how-to/remove-additional-zeros-when-using-percentage-format/field-expression.png '#width=500px')
2. Click the **Preview**. Now, the percentage value is shown in the following image.
   ![output image](/static/assets/on-premise/images/report-designer/how-to/remove-additional-zeros-when-using-percentage-format/percentage-output-image.png)