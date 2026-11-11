---
title: Report Header, Body, and Footer Properties | {{site.productName}}
description: Set report header, body, and footer properties in the {{site.productName}} Web Report Designer, including border, background, height, print options, and size.
keywords: ejReportDesigner, reportdesigner, line, reportitem, border
---

# Report sections in {{site.productNameTM}} Web Report Designer

{{site.productNameTM}} Web Report Designer divides a report into three sections: header, body, and footer. Each section has general properties and its own specific properties.

## What are the report header and footer?

In {{site.productNameTM}} Web Report Designer, the report header and footer sections hold report items at the top and bottom of the report body. You can place images, text boxes, lines, rectangles, and expressions in the header and footer section of the report. For example, you can place the Report Title, Company Logo, Company Address, Report Generated Time, and Page Numbers in the header and footer sections.

> Note: You cannot place data regions in the header and footer section of the report design. By default, reports have a report footer, but not a report header. To add or remove the header and footer in a report, see [show or hide header and footer](./../../compose-report/show-or-hide-header-footer-in-report/).

## What is the report body?

The report body section in the Web Report Designer is the main work area for designing reports. You can place all types of report items in the report body section.

## General properties

The Web Report Designer provides the following general properties for the report header, body, and footer areas.

### Border

Border properties in the Web Report Designer add or customize the border around the header, body, or footer section in the report design. To set border properties for the report sections using the properties panel, see [Border Properties](./../../compose-report/common-properties/#border-properties).

### Background color

The background color property in the Web Report Designer sets the background color of the header, body, or footer sections.

![Background color](/static/assets/on-premise/images/report-designer/report-items/properties-panel/body-background-color-picker.png '#width=350px')

### Background Image

The background image property in the Web Report Designer displays company logos, watermarks, or any other background image in report sections such as the page header, footer, and body. To set a background image for the report sections, see [Background Image](./../../compose-report/background-image/).

## Header and Footer properties

The Web Report Designer provides the following properties that apply only to the report header and footer.

### Height

The Height property in the Web Report Designer increases or decreases the height of the report header and footer area. This property is listed under the `General` category of header and footer properties in the properties panel.

![Header and footer height property](/static/assets/on-premise/images/report-designer/report-items/properties-panel/header-footer-height.png '#width=350px')

### Print on first page

The Print on first page option in the Web Report Designer displays the header or footer only on the first page of a report instead of every page. Enable this option to use it.

![Print on first page](/static/assets/on-premise/images/report-designer/report-items/properties-panel/print-on-page-property.png '#width=350px')

### Print on last page

The Print on last page option in the Web Report Designer displays the header or footer only on the last page of a report instead of every page. Enable this option to use it.

![Print on last page](/static/assets/on-premise/images/report-designer/report-items/properties-panel/print-on-last-page-property.png '#width=350px')

### Custom Style

The `Custom Style` property in the Web Report Designer enables the use of external CSS for styling the report header and footer, providing enhanced flexibility beyond the built-in styling options. Use this property to meet specific design requirements and maintain consistent styling across multiple reports. For a step-by-step guide on setting up custom styles in your report, see the **How To** section of this guide.

![Custom style at header footer](/static/assets/on-premise/images/report-designer/report-items/properties-panel/custom-style-header-footer.png '#width=450px')

## Body properties

The Web Report Designer provides the following properties that apply only to the report body.

### Size

The Size property in the Web Report Designer sets the width and height of the report body area in the report design. This property is listed under the `Position` category of body properties in the properties panel.

![Report body width and height](/static/assets/on-premise/images/report-designer/report-items/properties-panel/body-size-property.png '#width=350px')

> The width of report header and footer will be same as the report body area.

### Custom Style

The `Custom Style` property in the Web Report Designer enables the use of external CSS for styling the report body, providing enhanced flexibility beyond the built-in styling options. Use this property to meet specific design requirements and maintain consistent styling across multiple reports. For a step-by-step guide on setting up custom styles in your report, see the **How To** section of this guide.

![Custom style at body](/static/assets/on-premise/images/report-designer/report-items/properties-panel/custom-style-header-footer.png '#width=450px')

## Frequently asked questions

### Can I place a data region in the header or footer?

No. You cannot place data regions in the header and footer section of the report design.

### Does a new report have a header by default?

No. By default, reports have a report footer, but not a report header.

## See also

* [Show or hide header and footer](./../../compose-report/show-or-hide-header-footer-in-report/)
* [Common properties](./../../compose-report/common-properties/)
* [Background image](./../../compose-report/background-image/)
