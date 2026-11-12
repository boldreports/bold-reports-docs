---
title: Format Textbox Data in Web Report Designer | {{site.productName}}
description: Format textbox values in the {{site.productName}} Web Report Designer as number, currency, date, time, scientific, percentage, or custom formats in the Format dialog.
keywords: ejReportDesigner, reportdesigner, number, currency, scientific, decimal places
---

# Format data in {{site.productNameTM}} Web Report Designer

The Format option in {{site.productNameTM}} Web Report Designer displays textbox values in various forms, including **Numbers**, **Currency**, **Date**, **Time**, **Scientific**, **Percentage**, and **Custom** formats.

![open-format-dialog](/static/images/report-designer/compose-report/format-data/formatdialog.png '#width=400px')

## How do I format numbers?

The **Number** format in the Web Report Designer formats the numeric values in a textbox. The Number type has the following options:

* **Decimal Places** rounds off the number of decimal digits in numeric values.

* **Negative Values** specifies the representation of negative numbers.

* **Representation** displays the value in Thousands, Millions, or Billions.

* **Thousand Separator** separates the value in terms of thousands in number positions.

   ![number-format](/static/images/report-designer/compose-report/format-data/format-numbers.png '#width=400px')

* **Use Regional Formatting**: Enable this option to apply default local culture settings to the numeric values.

   ![regional-option-in-format](/static/images/report-designer/compose-report/format-data/format-by-regional-option.png '#width=400px')

## How do I format currency?

The **Currency** format in the Web Report Designer formats the currency values in a textbox. The Currency type has the following options:

* **Decimal Places** rounds off the number of decimal digits in numeric values.

* **Negative Values** specifies the representation of negative numbers.

* **Representation** displays the value in Thousands, Millions, or Billions.

* **Thousand Separator** separates the value in terms of thousands in number positions.

   For example, if the field value is 1,789,905,394 and you select Billions and specify 2 decimal places, the value displayed in the report is `1.78`.

* **Currency Culture** prefixes the currency symbol to the field value based on the selected culture.

   For example, if the field value is 1,789,905,394 and you select currency culture as `English(United States)`, the value displayed in the report is `US$1,789,905,394`.

* **Include Space**: Enable this option to include a space between the currency culture code and the value.

   For example, if the field value is 1,789,905,394, you select currency culture as `English(United States)`, and the include space checkbox is enabled, the value displayed in the report is `US$ 1,789,905,394`.

    ![currency-format](/static/images/report-designer/compose-report/format-data/format-currency.png '#width=400px')

## How do I format a date?

The **Date** format in the Web Report Designer formats a date and time field to display only the date in the textbox. The supported date formats are listed in the `Date` drop-down list.

![date-format](/static/images/report-designer/compose-report/format-data/format-a-date.png '#width=400px')

## How do I format a time?

The **Time** format in the Web Report Designer formats a date and time field to display only the time in the textbox. The supported time formats are listed in the `Time` drop-down list.

![time-format](/static/images/report-designer/compose-report/format-data/format-a-time.png '#width=400px')

## How do I use scientific format?

The **Scientific** format in the Web Report Designer displays numbers in scientific notation. The number is transformed into a real number followed by E+n, where E (which stands for Exponent) multiplies the real number by 10 to the nth power.

![scientific-format](/static/images/report-designer/compose-report/format-data/format-scientific.png '#width=400px')

For example, a 2-decimal scientific format displays 12345678901 as `1.23E+10`, which is `1.23` times 10 to the 10th power.

## How do I format a percentage?

The **Percentage** format in the Web Report Designer displays the value multiplied by 100 with a percent (%) symbol appended. The Percentage type has the following options:

* **Decimal Places**: Rounds off the number of decimal digits in the numerical value.

* **Include Space**: Enable this option to include a space between the percent symbol and the value.

   ![percentage-format](/static/images/report-designer/compose-report/format-data/format-percentage.png '#width=400px')

## How do I create a custom format?

The **Custom** format in the Web Report Designer modifies the predefined formats to create a new custom number format.

![custom-format](/static/images/report-designer/compose-report/format-data/format-by-custom.png '#width=400px')

## Frequently asked questions

### How do I show large numbers in millions or billions?

Use the **Representation** option in the Number or Currency format to display the value in Thousands, Millions, or Billions.

### How do I add a currency symbol to a value?

Use the **Currency Culture** option in the Currency format. It prefixes the currency symbol based on the selected culture.

## See also

* [Common properties](./../common-properties/)
* [Filter data](./../filter-data/)
* [Group data](./../group-data/)
