---
title: Embed PDF Documents in SSRS RDL Reports | {{site.productName}}
description: Use the PDF report item in {{site.productName}} Web Report Designer to embed PDF documents in SSRS RDL reports, with source, sizing, and appearance property options.
keywords: PDF report item overview, SSRS RDL PDF integration, PDF properties, {{site.productName}} documentation, user guide, {{site.productName}}, bold reporting
---

# PDF report item in {{site.productNameTM}}

The `PDF` report item in the {{site.productNameTM}} Web Report Designer lets you embed PDF documents within a report. It automatically converts the PDF into images without opening the file. It renders the images across multiple report pages, matching the total number of pages in the original PDF.

## How do I add a PDF report item?

You add a PDF report item in the {{site.productNameTM}} Web Report Designer from the item panel. Follow these steps:

1. Find the PDF report item in the item panel under the `Documents` category.
   ![PDF listed in item panel](/static/images/report-designer/report-items/pdf/pdf-item-in-item-panel.png '#width=215px')
2. Drag and drop the PDF report item from the item panel into the design area.
   ![Drag and drop PDF report item into design area](/static/images/report-designer/report-items/pdf/drag-and-drop-pdf.png '#width=425px')
3. After you place the PDF item in the design area, its properties are displayed in the properties panel.
   ![PDF item with properties view](/static/images/report-designer/report-items/pdf/pdf-properties.png '#width=425px')

## General Properties

The general properties of the PDF report item in the {{site.productNameTM}} Web Report Designer set where the PDF comes from and how it is sized.

### Basic Settings

The Basic Settings category of the PDF report item contains the `Source`, `URL`, and `Sizing` properties.

![pdf custom reportitem basic settings](/static/images/report-designer/report-items/pdf/upload-pdf-file.png '#width=355px')

#### Source

The `Source` property specifies the input type for the PDF document. You can choose from `URL`, `Database`, or `Server`.
![pdf source property](/static/images/report-designer/report-items/pdf/pdf-source.png '#width=425px')

* **URL**

   Use the `URL` option to provide a PDF document as an online URL or as a Base64-encoded string. An online URL is a direct link to a PDF file hosted on the web. A Base64-encoded string represents the PDF content. Use this option when the document is accessible through a web link, or when you have the PDF encoded as a Base64 string for secure or offline usage.

* **Database**
  
  Use the `Database` option to provide a PDF document stored in your database. The document can be a direct URL to the PDF file, a Base64-encoded string of the PDF content, or a byte array of the raw binary data. You can also use an expression to provide the PDF document dynamically by clicking the `Expression` box.

* **Server**

   The `Server` option displays the list of PDF files that have been uploaded on the {{site.productNameTM}} server. You can select any of these uploaded PDF files and use them directly in your report.

#### Sizing

The Sizing property lets you `control the size` of the PDF document displayed as an image in the report viewer. It offers two options to adjust the size of the rendered image: **AutoSize** and **FitToPageSize**.
![pdf sizing property](/static/images/report-designer/report-items/pdf/pdf-sizing.png '#width=425px')

* **AutoSize**

   The `AutoSize` option displays the original size of the given PDF document as an image in the report viewer. If the image size is larger than the report paper size, the image is cropped across multiple pages to prevent data loss.

* **FitToPageSize**

   The `FitToPageSize` option displays the given PDF document as an image in the print layout dimension.

## Other properties

The PDF report item in the {{site.productNameTM}} Web Report Designer also supports name, appearance, link, position, visibility, and miscellaneous properties.

### Name

The `Name` property gives the PDF report item a unique name in the report.

### Appearance

The appearance properties of the PDF report item include border style, color, and width. They style the PDF report item and customize its appearance in the report design. These options are available under the `Appearance` category in the properties panel.

### Link

The Linking property lets you create interactive and user-friendly reports by adding actions such as **Hyperlink** and **Report Linking**. See [Linking](./../../compose-report/link-data/) to learn more about linking.
![PDF link property](/static/images/report-designer/report-items/gauge/linear-gauge/enable-link-action.png '#width=355px')

#### Border

The Border properties add or customize the border around a PDF report item to visually separate it from other elements in the report design. To set border properties in the properties panel, see [Border Properties](./../../compose-report/common-properties/#border-properties).

### Position

The Position property sets the width, height, left, and top position of the PDF report item in the report design. To handle these properties in the properties panel, see [Position](./../../compose-report/common-properties/#position).

### Visibility

The Visibility property conditionally shows or hides the PDF report item during report preview or export. To set the visibility of the PDF report item in the properties panel, see [Visibility](./../../compose-report/common-properties/#visibility).

### Miscellaneous

The Miscellaneous category of the PDF report item holds the tooltip, bookmark, and custom style properties.

#### Tooltip

The Tooltip property displays informative text or values when the user hovers over the report item in report preview. To set a tooltip for the PDF report item in the properties panel, see [Tooltip](./../../compose-report/common-properties/#tooltip).

#### Bookmark

Bookmark links let users navigate to different parts of an SSRS report. You can add bookmarks to textboxes, images, tables, charts, or unique group values in a tablix to direct users to specified locations in the report. The value of the bookmark property can be either custom strings or expressions. See [Bookmark](./../../compose-report/bookmark/) to configure bookmarks in the report design.

You can set static or dynamic text as the value for the bookmark property. To set and reset dynamic text, see [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression).

#### Custom Style

The `Custom Style` property enables the use of external CSS for styling report items, providing enhanced flexibility beyond the built-in styling options. Use this property to meet specific design requirements and keep styling consistent across multiple reports. For a step-by-step guide on setting up custom styles in your report, check the **How To** section of this guide.

![custom style property](/static/images/report-designer/report-items/pdf/custom-style-property.png '#width=355px')

## Set expression

The {{site.productNameTM}} Web Report Designer lets you apply expressions to certain properties of the PDF report item, so the property values are processed based on expressions. To set expressions for the PDF custom report item properties, see [Set Expression](./../../compose-report/properties-panel/#set-expression).

## Reset expression

To `Reset` the expression applied to a PDF report item property in the {{site.productNameTM}} Web Report Designer, see [Reset Expression](./../../compose-report/properties-panel/#reset-expression).

## Advanced properties

Some properties of the PDF report item in the {{site.productNameTM}} Web Report Designer contain nested properties. To open and handle nested properties, see [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties).

## Frequently asked questions

### Which sources can the PDF report item use?

The `Source` property lets you choose `URL`, `Database`, or `Server` as the input type for the PDF document.

### How does the PDF report item render multi-page PDFs?

It converts the PDF into images and renders them across multiple report pages, matching the total number of pages in the original PDF.

## See also

* [Design RDL Report with PDF Content](./../../report-items/pdf/design-report-with-pdf-content/)

* [Troubleshooting and FAQ](./../../report-items/pdf/troubleshooting-and-faq/)
