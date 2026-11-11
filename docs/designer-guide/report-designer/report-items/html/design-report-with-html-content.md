---
title: Design RDL Reports with HTML Content | {{site.productName}}
description: Embed HTML content from a URL in an RDL report with the HTML report item in {{site.productName}} Web Report Designer, preview the result, and review the limitations.
keywords: SSRS RDL report, HTML report item, embed HTML in reports, design SSRS report with HTML, report designer guide, HTML content in RDL, {{site.productName}}, report viewer, documentation
---

# Design an RDL report with HTML content in {{site.productNameTM}}

The `HTML` report item in the {{site.productNameTM}} Web Report Designer integrates HTML content as plain text, a file, or a URL link within RDL reports for dynamic, visually rich layouts. The steps below embed a `Health Tracker Dashboard` sample by using an HTML URL link.

## How do I embed HTML content from a URL?

You embed HTML content from a URL by adding an HTML report item in the {{site.productNameTM}} Web Report Designer and setting its source type to `URL`.

1. Drag and drop the HTML report item from the item panel into the design area.
   ![Drag and drop html report item into design area](/static/images/report-designer/report-items/html/drag-and-drop-html.png '#width=425px')
2. Check the properties panel. After you place the HTML item in the design area, the panel displays its properties.
   ![HTML item with properties view](/static/images/report-designer/report-items/html/html-basic-settings.png '#width=425px')
3. Select `URL` as the source type and enter the dashboard showcase URL in the input box.
   ![HTML URL input](/static/images/report-designer/report-items/html/raw-html-content.png '#width=425px')
   The example above uses the [Health Tracker Dashboard](https://ej2.syncfusion.com/showcase/typescript/healthtracker/) sample.
4. Click the `Preview` button to view the HTML content in the report.
   ![Preview button](/static/images/report-designer/report-items/html/preview-button.png '#width=425px')
5. Review the result. During the report preview, the `Health Tracker Dashboard` displays as follows:
   ![preview the report](/static/images/report-designer/report-items/html/preview-report.png '#width=425px')

> Download the [HTML report design (RDL) from GitHub](https://github.com/boldreports/resources/tree/master/docs/report-designer/html/design-ssrs-rdl-report-using-html-report-item.rdl).

## What are the limitations of the HTML report item?

The {{site.productNameTM}} HTML report item has the following limitations:

1. The HTML report item is not supported on `Azure App Service (Windows)`.
2. For optimal performance, use the HTML report item outside of the `Tablix report item`, because placing it inside can slow report rendering. For more information, see the [Performance Benchmarks](../../html/troubleshooting-and-faq/#what-are-the-performance-benchmarks-of-the-html-report-item).

## Frequently asked questions

### Can I use the HTML report item on Azure App Service?

No. The HTML report item is not supported on `Azure App Service (Windows)`.

### Should I place the HTML report item inside a tablix?

Use the HTML report item outside of the `Tablix report item` for optimal performance. Placing it inside can slow report rendering.

## See also

* [HTML report item](./../)
* [HTML report item troubleshooting and FAQ](./../troubleshooting-and-faq/)
