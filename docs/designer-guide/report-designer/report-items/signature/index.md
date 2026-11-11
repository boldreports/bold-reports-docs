---
title: Add Signature Report Items to RDL Reports | {{site.productName}}
description: Use the Signature report item in {{site.productName}} Web Report Designer to add electronic or PDF digital signatures to SSRS RDL reports and set its properties.
keywords: Signature report item, {{site.productName}} Designer, electronic signature, PDF signature, SSRS report customization, signature properties, report design guide
---

# Signature report item in {{site.productNameTM}}

The `Signature` report item in the {{site.productNameTM}} Web Report Designer lets you add signature fields to reports, supporting both electronic and PDF digital signatures. Use it for reports that require formal or informal approvals, acknowledgments, or secure document authentication.

## How do I add an electronic signature report item?

You add an electronic signature in the {{site.productNameTM}} Web Report Designer by dragging the **Electronic signature** item from the item panel into the design area.

1. Find the **Electronic signature** report item in the item panel under the `Signatures` category.
   ![Electronic Signature listed in item panel](/static/images/report-designer/report-items/signature/signature-item-in-item-panel.png '#width=215px')
2. Drag and drop the `Electronic Signature` item from the item panel into the design area.
   ![Drag and drop signature report item into design area](/static/images/report-designer/report-items/signature/drag-and-drop-signature.png '#width=425px')
3. Review the item properties, which appear in the properties panel after you place the report item in the design area.
   ![Signature item with properties view](/static/images/report-designer/report-items/signature/signature-properties.png '#width=425px')

## How do I add a PDF signature report item?

You add a PDF signature in the {{site.productNameTM}} Web Report Designer by dragging the **PDF signature** item from the item panel into the design area.

1. Find the **PDF signature** report item in the item panel under the `Signatures` category.
   ![PDF Signature listed in item panel](/static/images/report-designer/report-items/signature/pdf-signature-item-in-item-panel.png '#width=215px')
2. Drag and drop the `PDF Signature` item from the item panel into the design area.
   ![Drag and drop PDF signature report item into design area](/static/images/report-designer/report-items/signature/drag-drop-pdf-signature.png '#width=425px')
3. Review the item properties, which appear in the properties panel after you place the report item in the design area.
   ![PDF Signature item with properties view](/static/images/report-designer/report-items/signature/pdf-signature-properties.png '#width=425px')

## General Properties

The general properties of the signature report item in the {{site.productNameTM}} Web Report Designer control its name, appearance, position, visibility, and miscellaneous behavior.

### Name

The `Name` property gives the signature item a unique name in the report.

### Appearance

The appearance of the signature item includes border style, color, width, and background color, which style and customize the item in the report design. These options are available under the `Appearance` category in the properties panel.

#### Border

Border properties let you add or customize the border around a signature item to visually separate it from other elements in the report design. To set border properties using the properties panel, refer to the [Border Properties](./../../compose-report/common-properties/#border-properties) section.

#### Background color

The background color property colors the signature background. To set background color using the properties panel, refer to the [Background color](./../../compose-report/common-properties/#background-color) section.

### Position

The position property sets the width, height, left and top position of the signature in the report design. For guidance on handling these properties using the properties panel, refer to the [Position](./../../compose-report/common-properties/#position) section.

### Visibility

The visibility property conditionally shows or hides the signature report item during report preview or export actions. To set the visibility of the signature item using the properties panel, refer to the [Visibility](./../../compose-report/common-properties/#visibility) section.

### Miscellaneous

The miscellaneous properties of the signature item cover the tooltip, bookmark, and custom style settings.

#### Tooltip

The tooltip property displays informative text or values when the user hovers over the report item in report preview. To set a tooltip for the signature item using the properties panel, refer to the [Tooltip](./../../compose-report/common-properties/#tooltip) section.

#### Bookmark

Bookmark links let users navigate to different parts of an SSRS report. You can add bookmarks to textboxes, images, tables, charts, or unique group values in a tablix, directing users to specified locations in the report. The value of the bookmark property can be either custom strings or expressions. For more details, refer to the [Bookmark](./../../compose-report/bookmark/) section to configure bookmark in the report design.

Static or dynamic text can be set as the value for the bookmark property. For setting and resetting dynamic text, refer to the  [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Custom Style

The `Custom Style` property enables the use of external CSS for styling report items, providing more flexibility than the built-in styling options. Use this property to meet specific design requirements and keep styling consistent across multiple reports. For a step-by-step guide on setting up custom styles in your report, check the **How To** section of this guide.

The following image shows the `Custom Style` property in the properties panel.

![custom style property](/static/images/report-designer/report-items/signature/custom-style-property.png '#width=355px')

## How do I set an expression on a signature property?

You can apply expressions to certain properties of the signature report item in the {{site.productNameTM}} Web Report Designer to process the property values. To set expressions for the signature report item properties, refer to the [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## How do I reset an expression?

You `Reset` an expression applied to a signature item property from the Web Report Designer properties panel. For the steps, refer to the  [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## What are advanced properties?

Advanced properties are the nested properties that some signature report item properties contain in the {{site.productNameTM}} Web Report Designer. For information on opening and handling nested properties, refer to the [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.

## Frequently asked questions

### Which signature types can I add to a report?

The Signature report item supports both electronic and PDF digital signatures. Both items are listed in the item panel under the `Signatures` category.

### Can I hide the signature during preview or export?

Yes. The visibility property conditionally shows or hides the signature report item during report preview or export actions.

## See also

* [Electronic Signature](./../../report-items/signature/design-ssrs-rdl-report-using-electronic-signature/)

* [PDF Signature](./../../report-items/signature/design-report-with-pdf-signature/)
