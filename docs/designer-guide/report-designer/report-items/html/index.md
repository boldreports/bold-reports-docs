---
title: Embed HTML Documents in SSRS RDL Reports | Bold Reports
description: Use the HTML report item in Bold Reports to embed multi-page HTML content in SSRS RDL reports, with setup steps, properties, sizing options, and styling.
keywords: HTML report item, SSRS RDL report HTML, Bold Reports HTML integration, embed HTML in reports, HTML content in SSRS, HTML report designer, Chromium rendering in reports, HTML sizing options, custom CSS in reports, Bold Reports documentation, user guide
---

# HTML report item in Bold Reports<sup>®</sup>

The `HTML` report item in Bold Reports<sup>®</sup> lets you embed rich HTML content directly within reports. It supports CSS for styling along with standard HTML tags. The item uses the Chromium browser engine to process the HTML content and renders it as an image, so the output appears exactly as it would in a web browser.

## How do I add an HTML report item?

You add an HTML report item by dragging it from the Bold Reports<sup>®</sup> Web Report Designer item panel into the design area.

1. Find the HTML report item in the item panel under the `Documents` category.
   ![HTML listed in item panel](/static/assets/on-premise/images/report-designer/report-items/html/html-item-in-item-panel.png '#width=215px')
2. Drag and drop the HTML report item from the item panel into the design area.
   ![Drag and drop html report item into design area](/static/assets/on-premise/images/report-designer/report-items/html/drag-and-drop-html.png '#width=425px')
3. Check the properties panel. After you place the HTML item in the design area, the panel displays its properties.
   ![HTML item with properties view](/static/assets/on-premise/images/report-designer/report-items/html/html-properties.png '#width=425px')

## Which content properties does the HTML report item have?

The Bold Reports<sup>®</sup> HTML report item sets where its content comes from and how it is sized through the `Basic Settings` properties.

### Basic Settings

Basic Settings contains the `Source`, `Content`, and `Sizing` properties.

![html custom reportitem basic settings](/static/assets/on-premise/images/report-designer/report-items/html/html-input-box.png '#width=425px')

#### Source

The `Source` property specifies the input type for the HTML document. You can choose `Content`, `URL`, `Database`, or `Server`.
![html source property](/static/assets/on-premise/images/report-designer/report-items/html/html-source.png '#width=425px')

* **Content**

   The Content option lets you enter the `HTML content` manually along with the `CSS` tags.

* **URL**

  The `URL` option accepts an HTML document in two forms. Use an online URL that links directly to the HTML file hosted on the web, or a Base64-encoded string representing the HTML content. Use this method when the document is accessible through a web link, or when you have the HTML encoded as a Base64 string for secure or offline usage.

* **Database**

  The `Database` option uses an HTML document stored within your database. The document can be a URL that links directly to the HTML file, or a Base64-encoded string representing the HTML content. It can also be a byte array containing the raw binary data of the HTML, or the raw HTML content of the page itself. You can also use an expression to provide the HTML document dynamically by clicking the `Expression` box.

* **Server**

   The `Server` option displays the list of HTML files uploaded on the Bold Reports<sup>®</sup> server. You can select any of these uploaded HTML files and use them directly in your report.

#### Sizing

The Sizing property controls the size of HTML content displayed as an image in the report viewer. It offers four options to adjust the size of the rendered image: `AutoSize`, `Fit`, `FitProportional`, and `Clip`.
![html sizing property](/static/assets/on-premise/images/report-designer/report-items/html/html-sizing.png '#width=425px')

* **AutoSize**

    The `AutoSize` option displays the converted HTML content at its original size in the report viewer. If the image is larger than the report paper size, the image is cropped across multiple pages to prevent data loss.

* **Fit**

    The `Fit` option scales the converted HTML content to fit within the report item, based on the report item size set in the design area.

* **FitProportional**

    The `FitProportional` option adjusts the converted HTML content to fit within the report item while maintaining a certain aspect ratio.

* **Clip**

    The `Clip` option displays only a portion of the converted HTML content as an image within the report item, starting from the top-left corner. If the image is larger than the report item, only the visible part of the image is shown.

## General Properties

The Bold Reports<sup>®</sup> HTML report item also has general properties for its name, appearance, link, position, visibility, and miscellaneous settings.

### Name

The `Name` property gives the HTML item a unique name in the report.

### Appearance

The appearance properties of the HTML item, including border style, color, and width, style the HTML item and customize its appearance in the report design. These options are available under the `Appearance` category in the properties panel.

### Link

The Linking property in Bold Reports<sup>®</sup> lets you create interactive, user-friendly reports by adding actions such as **Hyperlink** and **Report Linking**. To learn more, see the [Linking](./../../compose-report/link-data/) section.
![HTML link property](/static/assets/on-premise/images/report-designer/report-items/gauge/linear-gauge/enable-link-action.png '#width=355px')

#### Border

Border properties add or customize the border around an HTML item to visually separate it from other elements in the report design. To set border properties in the properties panel, see the [Border Properties](./../../compose-report/common-properties/#border-properties) section.

### Position

The position property sets the width, height, left, and top position of the HTML item in the report design. To set these properties in the properties panel, see the [Position](./../../compose-report/common-properties/#position) section.

### Visibility

The visibility property conditionally shows or hides the HTML report item during report preview or export. To set the visibility of the HTML item in the properties panel, see the [Visibility](./../../compose-report/common-properties/#visibility) section.

### Miscellaneous

The Miscellaneous category holds the tooltip, bookmark, and custom style properties of the HTML report item.

#### Tooltip

The tooltip property displays informative text or values when the user hovers over the report item in report preview. To set a tooltip for the HTML item in the properties panel, see the [Tooltip](./../../compose-report/common-properties/#tooltip) section.

#### Bookmark

Bookmark links let users navigate to different parts of an SSRS report. You can add bookmarks to textboxes, images, tables, charts, or unique group values in a tablix to direct users to specified locations in the report. The bookmark value can be a custom string or an expression. To configure a bookmark in the report design, see the [Bookmark](./../../compose-report/bookmark/) section.

You can set static or dynamic text as the value of the bookmark property. To set and reset dynamic text, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Custom Style

The `Custom Style` property lets you use external CSS to style report items, giving more flexibility than the built-in styling options. Use this property to meet specific design requirements and keep styling consistent across multiple reports. For a step-by-step guide on setting up custom styles in your report, see the **How To** section of this guide.

![custom style property](/static/assets/on-premise/images/report-designer/report-items/html/custom-style-property.png '#width=355px')

## How do I set an expression on an HTML item property?

You can apply expressions to certain properties of the Bold Reports<sup>®</sup> HTML report item to process the property values. To set expressions for the HTML report item properties, see the [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## How do I reset an expression?

To `Reset` the expression applied to an HTML report item property, see the [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## How do I open nested (advanced) properties?

Some properties of the Bold Reports<sup>®</sup> HTML report item contain nested properties. To learn how to open and handle nested properties, see the [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.

## Frequently asked questions

### How does the HTML report item render content?

The HTML report item uses the Chromium browser engine to process the HTML content and renders it as an image. The output appears exactly as it would in a web browser.

### Which sources can provide the HTML content?

The `Source` property accepts `Content`, `URL`, `Database`, or `Server` as the input type for the HTML document.

## See also

* [Design RDL Report with HTML Content](./../../report-items/html/design-report-with-html-content/)

* [Troubleshooting and FAQ](./../../report-items/html/troubleshooting-and-faq/)
