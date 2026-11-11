---
title: Add an Electronic Signature to RDL Reports | Bold Reports
description: Add an electronic signature to an SSRS RDL invoice report in Bold Reports Web Report Designer, then preview, edit, and export the report with the signature.
keywords: SSRS RDL report, electronic signature, Bold Reports Designer, invoice report signature, add signature to SSRS report, report designer guide, signature item tutorial
---

# Add an electronic signature to an RDL report in Bold Reports<sup>®</sup>

The electronic signature item in the Bold Reports<sup>®</sup> Web Report Designer lets users graphically sign a report by drawing a signature directly within the report interface. The item is intended solely for visual representation of a person’s signature on reports or documents.

## How do I design an invoice report with an electronic signature?

You add an electronic signature to the `Invoice Details` report in the Web Report Designer by downloading the sample, placing the signature item, and drawing the signature. The steps below walk through each part.

### How do I get the invoice report?

You can download the [invoice sample report (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/design-ssrs-rdl-invoice-report.rdl) to follow along in the Bold Reports<sup>®</sup> Web Report Designer.

### Add the electronic signature item to the report

You add the signature item in the Web Report Designer by dragging it onto the report and drawing the signature in the signature dialog.

1. Open the downloaded `invoice` report.
    ![Open the invoice report](/static/assets/on-premise/images/report-designer/report-items/signature/open-invoice-report.png '#width=425px')
2. Drag and drop the signature report item into the required area of the report.
   ![Drag and drop signature into invoice report](/static/assets/on-premise/images/report-designer/report-items/signature/drag-and-drop-signature-invoice.png '#width=425px')
3. Check that the item properties are now listed in the properties panel. Click the `Draw...` button to open the signature dialog.
   ![Signature item with properties view](/static/assets/on-premise/images/report-designer/report-items/signature/design-signature-properties.png '#width=485px')
4. Draw the signature using a mouse or touch input within the dialog. You can also:
   * `Stroke width` - Adjust the thickness of the signature lines.
   * `Stroke color` - Change the color of the signature lines to enhance visibility and match the design of your document.
      ![Stroke width and color](/static/assets/on-premise/images/report-designer/report-items/signature/stroke-width-color.png '#width=400px')
   * Click the `Crop` button to enable cropping and fine-tune the visible portion of the signature.
      ![Croping in signature](/static/assets/on-premise/images/report-designer/report-items/signature/crop-signature.png '#width=400px')
5. Click `OK`. The signature is updated on the canvas in the Designer Area. You can change the height and width of the signature.
   ![Signature in invoice report](/static/assets/on-premise/images/report-designer/report-items/signature/authority-signature.png '#width=425px')

> Note: The electronic signatures are intended to visually represent a person’s signature on a report. They do not include cryptographic security or digital certificate validation, and are not legally binding. This feature is best used for adding a personal touch or indicating informal approval within internal workflows.

## Preview and edit signature

You can edit an electronic signature in the Bold Reports<sup>®</sup> Web Report Designer preview without returning to design mode.

1. Click the `Preview` button in the report header.
   ![Preview button](/static/assets/on-premise/images/report-designer/report-items/signature/preview-button.png '#width=425px')
2. Hover over the signature to see the `Edit` icon, and click it to open the Signature Dialog.
   ![Signature preview edit icon](/static/assets/on-premise/images/report-designer/report-items/signature/preview-edit-icon.png '#width=425px')
3. If needed, clear the existing signature and draw a new one directly within the dialog.
   ![Draw signature in dialog](/static/assets/on-premise/images/report-designer/report-items/signature/draw-signature-preview-dialog.png '#width=400px')
4. Click `OK`. The updated signature appears in the Preview Area.
   ![Signature in preview area](/static/assets/on-premise/images/report-designer/report-items/signature/preview-signature.png '#width=425px')

## Is the signature included when I export the report?

Yes. When you export a report from the Bold Reports<sup>®</sup> Web Report Designer, the signature in the preview area is included in the exported report.

> Download the [electronic signature report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/signature/design-ssrs-rdl-report-using-electronic-signature.rdl).

## Frequently asked questions

### Is the electronic signature legally binding?

No. Electronic signatures in Bold Reports<sup>®</sup> visually represent a person’s signature and do not include cryptographic security or digital certificate validation.

### Can I change the stroke of the signature?

Yes. In the signature dialog, you can adjust the `Stroke width` and `Stroke color` of the signature lines.

## See also

* [Signature report item overview](./../../signature/)
* [Add a PDF signature to a report](./../design-report-with-pdf-signature/)
