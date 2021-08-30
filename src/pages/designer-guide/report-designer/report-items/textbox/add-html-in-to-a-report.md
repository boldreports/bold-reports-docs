---
title: Add HTML into a Report | Web ReportDesigner | Bold Reports
description: This section describes steps to insert HTML-formatted text from a dataset field into a report using textbox report item.
keywords: ejReportDesigner, reportdesigner, textbox, bold reports, bold reporting, markup type, hmtl-formatted, plain-text
---

# Add HTML in to a report

The text box report item allows you to insert HTML-formatted text into a report. The text can be any simple or complex expression, or a value retrieved from a field in your dataset.

## Format plain text as HTML

Drag and drop a textbox report item in to design surface.

![Add textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/html-format-text/add-textbox.png)

Enter the text in valid HTML format into text area.

![Enter valid html text](/static/assets/on-premise/images/report-designer/report-items/textbox/html-format-text/set-html-text.png)

Select the text and set `HTML` in `Markup Type` property.

![Set Markup Type](/static/assets/on-premise/images/report-designer/report-items/textbox/html-format-text/set-markup-type.png)

You can also format a dataset field which returns HTML text from database or an expression which evaluates to a text in HTML format using the markup property.

On report preview, the text will be rendered as shown below,

![Markup type preview](/static/assets/on-premise/images/report-designer/report-items/textbox/html-format-text/preview-html-text.png)

Invalid HTML markup tags and cascading style sheet attributes will be ignored and render as plain text. Following are the few set of HTML tags and cascading style sheet attributes which will render as HTML when defined with HTML markup type,

<ul>
  <li><p>Hyperlinks: &lt;A HREF&gt;</p></li>
  <li><p>Fonts: &lt;FONT&gt;</p></li>
  <li><p>Header, style and block elements: &lt;H{n}&gt;, &lt;DIV&gt;, &lt;SPAN&gt;,&lt;P&gt;, &lt;DIV&gt;, &lt;LI&gt;, &lt;HN&gt;</p></li>
  <li><p>Text format: &lt;B&gt;, &lt;I&gt;, &lt;U&gt;, &lt;S&gt;</p></li>
  <li><p>List handling: &lt;OL&gt;, &lt;UL&gt;, &lt;LI&gt;</p></li>
  <li><p>text-align, text-indent</p></li>
  <li><p>font-family</p></li>
  <li><p>font-size</p></li>
  <li><p>color</p></li>
  <li><p>padding, padding-bottom, padding-top, padding-right, padding-left</p></li>
  <li><p>font-weight</p></li>
</ul>

Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/textbox/add-html-in-to-a-report.rdl)