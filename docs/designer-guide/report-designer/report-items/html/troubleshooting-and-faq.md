---
title: Fix HTML Report Item Issues in RDL Reports | {{site.productName}}
description: Fix common HTML report item issues in {{site.productName}} RDL reports, including missing Blink files, rendering benchmarks, and enabling JavaScript execution.
keywords: HTML report item troubleshooting, SSRS RDL HTML issues, Blink files missing, HTML performance, enable JavaScript in reports, {{site.productName}} support
---

# Troubleshoot the HTML report item in {{site.productNameTM}}

The answers below help you fix common issues with the {{site.productNameTM}} HTML report item in RDL reports. They cover missing Blink files, rendering time, and script execution.

## Why do I see a Blink files missing error when viewing the report?

The Blink files missing error appears when the Chromium packages that the {{site.productNameTM}} HTML report item needs are not installed.

### Reason

The HTML report item in {{site.productNameTM}} relies on the Chromium browser to process and render HTML content. If the Chromium packages are not available in the installed Enterprise build location, the HTML report item does not work. In that case, you see an error similar to the following image:
![missing blink files](/static/assets/on-premise/images/report-designer/report-items/html/missing-blink-files.png '#width=425px')

### Solution

You can resolve the {{site.productNameTM}} Blink files error in one of the following ways:

* **During Build Installation**

    When you set up the Enterprise build, enable the checkbox to download the Chromium package.
    ![download chromium package](/static/assets/on-premise/images/report-designer/report-items/html/download-chromium-package.png '#width=425px')

* **Manual Approach**

    You can also download the Chromium package manually by following this guide and place it in the location specified in the documentation.

## What are the performance benchmarks of the HTML report item?

The {{site.productNameTM}} HTML report item takes additional time to process and convert the provided HTML content into an image because it relies on the Chromium browser for rendering.

<table>
    <tr>
        <th>Time taken for HTML content</th>
        <td>Approximately 2 to 5 seconds for conversion</td>
    </tr>
    <tr>
        <th>Time taken for online URL</th>
        <td>More than 10 seconds for conversion</td>
    </tr>
</table>

## Why is the script tag not executing in the HTML report item?

The {{site.productNameTM}} HTML report item does not execute `script` tags by default. To allow script execution, enable it explicitly by using the `EnableJavascript` property.

### How do I enable script execution?

To enable script execution for the HTML report item in {{site.productNameTM}}, add the `EnableJavascript` property to the reporting configuration file.

1. Click the profile icon in the top-right corner and navigate to **Manage Sites**.
   ![manage sites](/static/assets/on-premise/images/report-designer/report-items/html/manage-sites.png '#width=425px')
2. Navigate to **Settings > Configuration**, then select the `reporting\config.xml` file.
   ![config file](/static/assets/on-premise/images/report-designer/report-items/html/config-file.png '#width=425px')
3. Add the `EnableJavascript` property inside the `<Exporting>` XML tag, as shown in the following image.
   ![script-support](/static/assets/on-premise/images/report-designer/report-items/html/script-support.png '#width=425px')

## See also

* [HTML report item](./../)
* [Design RDL Report with HTML Content](./../design-report-with-html-content/)
