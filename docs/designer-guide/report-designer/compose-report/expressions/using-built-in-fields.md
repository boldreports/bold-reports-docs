---
title: Simple steps of built-in fields using web report designer
description: This section describes about built-in fields references of expression using the Bold Report Designer
keywords: ejReportDesigner, reportdesigner, built-in fields, references, expression
---

# Built-in Fields

Built-in fields collection are the global variables that are used in a report to specify the report name, page number, execution time. It includes Globals and the User collections.

![set-an-expression](/static/assets/on-premise/images/report-designer/compose-report/expressions/build-in-fields.png '#width=400px')

## Global Collection

The Globals collection provides values such as the name of the report, the time when report processing start, and current page numbers for the report header or footer.

<table>
<tr>
<th>Member</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">ExecutionTime</code></td>
<td>
DateTime
</td>
<td>The date and time that the report start to run.</td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">PageNumber</code></td>
<td>
Integer
</td>
<td>The current page number that can be reset through the use of page breaks.</td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">ReportFolder</code></td>
<td>
String
</td>
<td>The full path to the folder containing the report. This does not include the report server URL.</td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">ReportName</code></td>
<td>
String
</td>
<td>The name of the report as it is stored in the report server database.</td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">ReportServerUrl</code></td>
<td>
String
</td>
<td>The URL of the report server on which the report is being run.</td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">TotalPages</code></td>
<td>
Integer
</td>
<td>The total number of pages in the current continuous page sequence can be used only in the page header and footer. The number can be reset by using page breaks.
</td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">PageName</code></td>
<td>
String
</td>
<td>The name of the current page in the report can be used only in the page header or footer.
</td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">OverallPageNumber</code></td>
<td>
Integer
</td>
<td>The page number of the current page for the entire report. This value is not affected by ResetPageNumber.
</td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">OverallTotalPages</code></td>
<td>
Integer
</td>
<td>The total number pages for the entire report. This value is not affected by ResetPageNumber.
</td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">RenderFormat</code></td>
<td>
RenderFormat
</td>
<td>Information about the current rendering request.
</td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">RenderFormat.Name</code></td>
<td>
String
</td>
<td>The name of the renderer as registered in the RSReportServer configuration file.
</td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">RenderFormat.IsInteractive</code></td>
<td>
Boolean
</td>
<td>Whether the current rendering request uses an interactive rendering format.
</td>
</tr>
</table>

## User Collection

The User collection provides the user identifier and language settings. These values can be used in expressions to filter results in a report.

<table>
<tr>
<th>Member</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">Language</code></td>
<td>
String
</td>
<td>The language ID of the client running the report.</td>
</tr>
<tr>
<td><code class="language-text" style="word-break: break-word;">UserID</code></td>
<td>
String
</td>
<td>The ID of the user running the report.</td>
</tr>
</table>
