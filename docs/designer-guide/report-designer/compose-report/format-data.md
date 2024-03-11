---
title: Simple steps to format data using web report designer
description: This section describes about how to represent the data in various format in textbox using Bold Report Designer
keywords: ejReportDesigner, reportdesigner, number, currency, scientific, decimal places
---

# Format

Format is used to represent the text in various forms that includes **Numbers**, **Currency**, **Date**, **Time**, **Scientific**, **Percentage** and **Custom** format .

![open-format-dialog](/static/assets/on-premise/images/report-designer/compose-report/format-data/formatdialog.png '#width=400px')

## Format Numbers

**Number** format is used to format the numeric values present in a textbox.

Number type has the following options:

* **Decimal Places** is used to round off the number of decimal digits in numeric values.

* **Negative Values** is used to specify the representation of negative numbers.

* **Representation** is used to display the value in Thousands, Millions, or Billions.

* **Thousand Separator** is used to separate the value in terms of thousands in number positions.

   ![number-format](/static/assets/on-premise/images/report-designer/compose-report/format-data/format-numbers.png '#width=400px')

* **Use Regional Formatting** : Enable this option to apply default local culture settings to the numeric values.

   ![regional-option-in-format](/static/assets/on-premise/images/report-designer/compose-report/format-data/format-by-regional-option.png '#width=400px')

## Format Currency

**Currency** format is used to format the currency values present in a textbox.

Currency type has the following options:

* **Decimal Places** is used to round off the number of decimal digits in numeric values.

* **Negative Values** is used to specify the representation of negative numbers.

* **Representation** is used to display value  in Thousands, Millions, or Billions.

* **Thousand Separator**: is used to separate the value in terms of thousands in number positions.

   For example, if the field value is 1,789,905,394 and you select Billions and specify 2 decimal places, the value displayed in the report is `1.78`.

* **Currency Culture** is used to prefix the currency symbol in field value based on the selected culture.

   For example, if the field value is 1,789,905,394 and you select currency culture as `English(United States)`, the value displayed in the report is `US$1,789,905,394`.

* **Include Space** Enable this option to include space between currency culture code and value.

   For example, if the field value is 1,789,905,394 and select currency culture as `English(United States)` and if include space checkbox is enabled, the value displayed in the report is `US$ 1,789,905,394`.

    ![currency-format](/static/assets/on-premise/images/report-designer/compose-report/format-data/format-currency.png '#width=400px')

## Format Date

**Date** format is used to format the date and time field to display only date in the textbox. The supported date formats are listed in the `Date` drop-down list as shown below.

![date-format](/static/assets/on-premise/images/report-designer/compose-report/format-data/format-a-date.png '#width=400px')

## Format Time

**Time** format is used to format the date and time field to display only time in the textbox. The supported time formats are listed in the `Time` drop-down list as shown below.

![time-format](/static/assets/on-premise/images/report-designer/compose-report/format-data/format-a-time.png '#width=400px')

## Format Scientific

**Scientific** format is used to display numbers in scientific notation. The number is transformed into a real number followed by E+n, where E (which stands for Exponent) multiplies the real number by 10 to the nth power.

![scientific-format](/static/assets/on-premise/images/report-designer/compose-report/format-data/format-scientific.png '#width=400px')

For example, a 2-decimal scientific format displays 12345678901 as `1.23E+10`, which is `1.23` times 10 to the 10th power.

## Format Percentage

**Percentage** format is used to display the value by multiplying it with 100 and appending percent (%) symbol.

Percentage type has following options:

* **Decimal Places**: is used to round off the number of decimal digits in the numerical value.

* **Include Space**: Enable this option to include space between percent symbol and value.

   ![percentage-format](/static/assets/on-premise/images/report-designer/compose-report/format-data/format-percentage.png '#width=400px')

## Format Custom

**Custom** format is used to modify the predefined formats to create a new custom number format.

![custom-format](/static/assets/on-premise/images/report-designer/compose-report/format-data/format-by-custom.png '#width=400px')
