---
title: Design an RDL Report with PDF Content | Bold Reports
description: Embed PDF documents in SSRS RDL reports with the PDF report item in Bold Reports Web Report Designer. Add a PDF by URL, preview it, and review the limitations.
keywords: SSRS RDL report, PDF report item, embed PDF in reports, design SSRS report with PDF, report designer guide, PDF content in RDL, Bold Reports, report viewer, documentation
---

# Design an RDL report with PDF content in Bold Reports<sup>®</sup>

The `PDF` report item in the Bold Reports<sup>®</sup> Web Report Designer includes multi-page PDF documents directly in an RDL report layout. Follow the steps below to add a PDF document through a URL.

## How do I add a PDF report item?

You add a PDF report item in the Bold Reports<sup>®</sup> Web Report Designer by dragging it into the design area and setting its source. Follow these steps:

1. Drag and drop the PDF report item from the item panel into the design area.
   ![Drag and drop pdf report item into design area](/static/assets/on-premise/images/report-designer/report-items/pdf/drag-and-drop-pdf.png '#width=425px')
2. After you place the PDF item in the design area, its properties are displayed in the properties panel.
   ![PDF item with properties view](/static/assets/on-premise/images/report-designer/report-items/pdf/pdf-item-basic-settings.png '#width=425px')
3. Select the source type as `URL`.
   ![upload the pdf document](/static/assets/on-premise/images/report-designer/report-items/pdf/upload-pdf-file.png '#width=425px')
4. In the input box, enter the URL of your PDF document using either of the following methods:

     * Enter a local file path or a publicly accessible web URL that points to the PDF file:
     ![PDF URL Link](/static/assets/on-premise/images/report-designer/report-items/pdf/uploaded-pdf-url.png '#width=425px')
     * Paste the complete `Base64` encoded content of the PDF document:
     ![PDF URL Base64](/static/assets/on-premise/images/report-designer/report-items/pdf/pdf-url-raw-content.png '#width=425px')
5. Click the `Preview` button in the report header.
   ![Preview button](/static/assets/on-premise/images/report-designer/report-items/pdf/preview-button.png '#width=425px')
6. During the report preview, the `Sales order details` document is displayed.
   ![preview the report](/static/assets/on-premise/images/report-designer/report-items/pdf/preview-report.png '#width=425px')

> Download the [PDF report item report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/pdf/design-ssrs-rdl-report-using-pdf-report-item.rdl).

## What are the limitations of the PDF report item?

The PDF report item in the Bold Reports<sup>®</sup> Web Report Designer has the following limitations:

1. PDF custom report item cannot be inserted inside the `header` or `footer` of the report.
2. The size of the PDF document must be less than `100 MB`.

## Frequently asked questions

### Can I place a PDF report item in the report header or footer?

No. The PDF custom report item cannot be inserted inside the `header` or `footer` of the report.

### What is the maximum PDF document size?

The size of the PDF document must be less than `100 MB`.

## See also

* [PDF report item overview](./../)
* [PDF report item troubleshooting and FAQ](./../troubleshooting-and-faq/)
