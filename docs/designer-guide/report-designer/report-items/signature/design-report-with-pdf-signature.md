---
title: Add a PDF Digital Signature to RDL Reports | Bold Reports
description: Add a PDF digital signature to an SSRS RDL report in Bold Reports Web Report Designer. Set the Digital ID file and signer details, then export the signed PDF.
keywords: SSRS RDL report, PDF digital signature, secure report signing, Bold Reports Designer, digital ID file, PFX certificate, NDA report signature, PDF signature tutorial
---

# PDF signature in Bold Reports<sup>®</sup> Web Report Designer

A PDF digital signature in Bold Reports<sup>®</sup> is a secure, cryptographic form of electronic signature that verifies a document's authenticity and integrity. It confirms the signer’s identity and ensures the document has not been altered after signing.

## How do I design a Non Disclosure Agreement report with a PDF signature?

You add a PDF signature to the `Non Disclosure Agreement report` in the Bold Reports<sup>®</sup> Web Report Designer by placing the PDF signature report item in the report. Download the [Non Disclosure Agreement sample report (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/signature/design-ssrs-rdl-non-disclosure-agreement-report.rdl) to follow along.

### How do I add a PDF signature to the report?

To add the PDF signature report item in the Bold Reports<sup>®</sup> Web Report Designer, follow these steps:

1. Open the downloaded `Non Disclosure Agreement` report.
   ![Open the Non Disclosure Agreement report](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/non-disclosure-agreement-report.png '#width=425px')

2. Drag and drop the PDF signature report item into the required area of the report.
   ![Drag and drop signature into Non Disclosure Agreement report](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/drag-drop-pdf-signature.png '#width=425px')

3. The item properties appear in the **Properties** panel.
   ![PDF signature basic settings](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-basic-settings-properties.png '#width=425px')

## Basic properties

The `Basic Settings` category of the PDF signature report item in the Bold Reports<sup>®</sup> Web Report Designer contains properties specific to PDF signatures. Resize the report item to view all available fields.
![Digital ID file](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-full-resize.png '#width=425px')

### Digital ID file

  The `Digital ID file` property selects the digital ID (PFX) certificate used to sign the PDF. Click the browse button in the `Digital ID file` option.
  ![Digital ID file Browse Button](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-digital-id-list-browse-btn.png '#width=425px')

  The dialog lists the digital ID (PFX) certificates uploaded to the Bold Reports<sup>®</sup> server.
  ![Digital ID file Browsing](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-digital-id-drpdwn-list.png '#width=425px')
  
  Use the refresh button to get the latest digital ID file list from the server.
  ![Digital ID file Refresh Button](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-digital-id-refresh-files.png '#width=425px')

### Signature

  The Signature property lets you add your signature in the signature dialog by clicking the **Draw…** button. For more details on using the dialog, see [Add the electronic signature item to the report](https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/report-items/signature/design-ssrs-rdl-report-using-electronic-signature/#add-the-electronic-signature-item-to-the-report).
  ![Draw signature](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-draw-option.png '#width=425px')

### Show signed name

  The signed name is the name associated with the Digital ID file. Enable or disable this property to display or hide the signer’s name during export.

  The following image shows the `Show signed name` property when disabled.
  ![Show signed name disabled](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-show-signed-disabled.png '#width=425px')

### Show contact info

  Contact information is the detail, such as the email address, stored in the digital ID file. Enable or disable this property to show or hide the contact information in the report item during export.

  The following image shows the `Show contact info` property when disabled.
  ![Show contact info disabled](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-show-contact-info-disabled.png '#width=425px')

### Show reason

  The reason is the input text given in the `Reason` property. Enable or disable this property to show or hide the reason in the report item during export.

  The following image shows the `Show reason` property when disabled.
  ![Show reason disabled](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-show-reason-disabled.png '#width=425px')

### Reason

  The `Reason` text box specifies the reason for signing. The default value is `I agree`, which you can modify. Based on the `Show reason` property, this field appears or is hidden during export.

  The following image shows the `Reason` property when disabled.
  ![Reason input](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-reason-input.png '#width=425px')

### Show location

  The location is the value stored in the digital ID file. Enable or disable this property to show or hide the location in the report item during export.

  The following image shows the `Show location` property when disabled.
  ![Show location disabled](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-show-location-disabled.png '#width=425px')

### Show current date

  The `Show current date` property controls the current date and time, which are shown during design and export. Enable or disable this property to show or hide the current date and time in the report item during export.

  The following image shows the `Show current date` property when disabled.
  ![Show current date disabled](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-show-current-date-disabled.png '#width=425px')

> **Note**: In the report item's design and preview modes, the static text displayed after the colon (e.g., signer’s name, contact information, location, reason, and date) serves as a visual placeholder. These values are not dynamically linked to any certificate data at design time. During PDF export, the actual signature details are programmatically extracted from the selected Digital ID file, replacing the placeholder content with authenticated information.

## Final Design

The final design of the `Non Disclosure Agreement` report in the Bold Reports<sup>®</sup> Web Report Designer is shown below, with the PDF signature report item resized and customized for placement. For simplicity, this example shows the design of a single PDF signature. In practice, an additional PDF signature was included in the same way to represent both parties signing the NDA.

  ![Updated Signed Report](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-updated-signed-report.png '#width=425px')

## How do I preview the signed report?

You preview the PDF signature in the Bold Reports<sup>®</sup> Web Report Designer from the report header. Follow these steps:

1. Click the `Preview` button in the report header.
   ![Preview button](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/preview-edit-icon.png '#width=425px')

2. In preview mode, the PDF signature in the `Non Disclosure Agreement` report is displayed.
   ![Preview PDF signature](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-preview.png '#width=425px')

   You can also edit the signed signature directly in preview mode. For more details, see [Preview and edit the signature](https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/report-items/signature/design-ssrs-rdl-report-using-electronic-signature/#preview-and-edit-signature).

## How do I export the signed report to PDF?

When you export to PDF in Bold Reports<sup>®</sup>, the configured digital signature is automatically included. It appears as valid as long as the certificate is trusted by the viewer. PDF signatures are supported only in the PDF export format and are not applied to other export types.

  Click the `PDF` option to export the report.
  ![Preview PDF signature](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-preview-exp-menu.png '#width=425px')

  Export and view the `Non Disclosure Agreement` report in any PDF viewer application.
  ![Export PDF signature](/static/assets/on-premise/images/report-designer/report-items/signature/pdf-signature/pdf-signature-export.png '#width=425px')

> Download the [PDF signature report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/signature/design-ssrs-rdl-report-using-pdf-signature.rdl).

## What are the limitations of PDF signatures?

PDF signatures in Bold Reports<sup>®</sup> have the following limitation:

  1. When exporting a PDF signature using the standalone designer, the PDF file includes a signature placeholder instead of an actual digital signature. This placeholder reserves space for the signature but does not contain any secure data. The document is still unsigned and can be digitally signed later using external PDF signing tools.

## Frequently asked questions

### Which export formats support PDF signatures?

PDF signatures are supported only in the PDF export format and are not applied to other export types.

### What is the default signing reason?

The default value of the `Reason` property is `I agree`, which you can modify.

## See also

* [Signature report item](./../)
* [Design an SSRS RDL report using an electronic signature](./../design-ssrs-rdl-report-using-electronic-signature/)
