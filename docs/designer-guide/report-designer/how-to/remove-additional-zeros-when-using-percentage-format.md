---
layout: post
title: Remove Extra Zeros in Percentage Format | Bold Reports
description: Remove the additional zeros that appear when you apply percentage format to a pre-calculated value in Bold Reports Web Report Designer by dividing it by 100.
platform: report-platform
documentation: ug
---

# How to remove the additional zeros when using percentage format

The percentage format in Bold Reports<sup>®</sup> Report Designer automatically converts a cell value into a percentage. If your value is already a pre-calculated percentage, this adds extra zeros to it.

## How do I remove the additional zeros?

You remove the extra zeros in Bold Reports<sup>®</sup> Report Designer by dividing the field value by 100 in an expression.

1. Click the textbox field value in the tablix, and apply an expression to **divide** the field value by 100.
   ![expression page](/static/assets/on-premise/images/report-designer/how-to/remove-additional-zeros-when-using-percentage-format/field-expression.png '#width=500px')
2. Click **Preview**. The percentage value is shown as in the following image.
   ![output image](/static/assets/on-premise/images/report-designer/how-to/remove-additional-zeros-when-using-percentage-format/percentage-output-image.png)

## See also

* [Format data](./../../compose-report/format-data/)
* [Expression Builder](./../../compose-report/expressions/)
* [How-to guides for Web Report Designer](./../../how-to/)
