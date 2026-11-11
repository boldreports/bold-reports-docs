---
title: Add HTML Formatted Text to an RDL Report | {{site.productName}}
description: Insert HTML-formatted text from a dataset field or expression into an RDL report with the {{site.productName}} Web Report Designer textbox and its Markup Type property.
keywords: ejReportDesigner, reportdesigner, textbox, {{site.productName}}, bold reporting, markup type, hmtl-formatted, plain-text
---

# Add HTML to a report with the {{site.productNameTM}} textbox

The text box report item in the {{site.productNameTM}} Web Report Designer lets you insert HTML-formatted text into a report. The text can be any simple or complex expression, or a value retrieved from a field in your dataset.

## How do I format plain text as HTML?

To render text as HTML in the {{site.productNameTM}} Web Report Designer, set the textbox `Markup Type` property to `HTML`. Follow these steps:

1. Drag and drop a textbox report item onto the design surface.

   ![Add textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/html-format-text/add-textbox.png '#width=255px')

2. Enter the text in valid HTML format in the text area.

   ![Enter valid html text](/static/assets/on-premise/images/report-designer/report-items/textbox/html-format-text/set-html-text.png '#width=425px')

3. Select the text and set `HTML` in the `Markup Type` property.

   ![Set Markup Type](/static/assets/on-premise/images/report-designer/report-items/textbox/html-format-text/set-markup-type.png)

You can also use the markup property to format a dataset field that returns HTML text from a database, or an expression that evaluates to text in HTML format.

On report preview, the text is rendered as HTML, as shown in the following image.

![Markup type preview](/static/assets/on-premise/images/report-designer/report-items/textbox/html-format-text/preview-html-text.png '#width=410px')

## Which HTML tags and CSS attributes are supported?

The {{site.productNameTM}} textbox ignores invalid HTML markup tags and cascading style sheet attributes and renders them as plain text. The following HTML tags and cascading style sheet attributes render as HTML when defined with the HTML markup type:

<ul>
  <li><p>Hyperlinks: &lt;A HREF&gt;</p></li>
  <li><p>Fonts: &lt;FONT&gt;</p></li>
  <li><p>Header, style and block elements: &lt;H{n}&gt;, &lt;DIV&gt;, &lt;SPAN&gt;,&lt;P&gt;, &lt;DIV&gt;, &lt;LI&gt;, &lt;HN&gt;</p></li>
  <li><p>Text format: &lt;B&gt;, &lt;I&gt;, &lt;U&gt;, &lt;S&gt;</p></li>
  <li><p>List handling: &lt;UL&gt;, &lt;LI&gt;</p></li>
  <li><p>Break: &lt;BR&gt;</p></li>
  <li><p>text-align, text-indent</p></li>
  <li><p>font-family</p></li>
  <li><p>font-size</p></li>
  <li><p>color</p></li>
  <li><p>padding, padding-bottom, padding-top, padding-right, padding-left</p></li>
  <li><p>font-weight</p></li>
</ul>

Download the [HTML in a report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/textbox/add-html-in-to-a-report.rdl)

## Frequently asked questions

### What happens to invalid HTML tags in a textbox?

The {{site.productNameTM}} textbox ignores invalid HTML markup tags and cascading style sheet attributes and renders them as plain text.

### Can a dataset field contain HTML?

Yes. You can use the markup property to format a dataset field that returns HTML text from a database, or an expression that evaluates to text in HTML format.

## See also

* [Textbox report item](./../../../report-items/textbox/)
* [Design RDL report using textbox](./../../../report-items/textbox/design-rdl-report-using-textbox/)
* [Format data](./../../../compose-report/format-data/)
