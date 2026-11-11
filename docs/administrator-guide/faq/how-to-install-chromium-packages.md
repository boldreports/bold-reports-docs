---
layout: post
title: Install Chromium Packages for Report Export | Bold Reports
description: Manually download and install the Chromium packages that Bold Reports On-Premises Edition needs for image and PDF export in reports and schedules.
platform: report-platform
documentation: ug
keywords: boldreports
canonical: ''
---

# How do I deploy Chromium packages manually in Bold Reports<sup>®</sup>?

To deploy Chromium packages manually in Bold Reports<sup>®</sup>, download the package for your operating system and copy the `chrome-win` or `chrome-linux` folder to the listed location. Without these packages, the image and PDF export options in reports and schedules will no longer be available.

## When do I install Chromium packages manually?

Install the Bold Reports<sup>®</sup> Chromium packages manually if you installed the build offline or skipped the packages during the build installation.

## Where do I download and copy the Chromium packages?

The following table lists the Bold Reports<sup>®</sup> Chromium download link and location for each operating system. After the download completes, extract the zip file. Copy the `chrome-win` folder for Windows or the `chrome-linux` folder for Linux from the extracted location.

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Operating System</span>
    </td>
     <td>
        <span style="font-weight:bold">Download Link</span>
    </td>
    <td>
        <span style="font-weight:bold">Location</span>
    </td>
 </tr>
 <tr>
 <td> Windows 32-bit </td>
 <td> <a href="https://storage.googleapis.com/chromium-browser-snapshots/Win/901912/chrome-win.zip">Download Chromium Package for Windows</a></td>
 <td> {Deployed Location}\app_data\reporting\exporthelpers\puppeteer\Win-901912\chrome-win</td>
 </tr>
 <tr>
 <td> Windows 64-bit </td>
 <td><a href="https://storage.googleapis.com/chromium-browser-snapshots/Win_x64/901912/chrome-win.zip">Download Chromium Package for Windows</a></td>
 <td> {Deployed Location}\app_data\reporting\exporthelpers\puppeteer\Win64-901912\chrome-win </td>
 </tr>
 <td> Linux </td>
 <td> <a href="https://storage.googleapis.com/chromium-browser-snapshots/Linux_x64/901912/chrome-linux.zip">Download Chromium Package for Linux</a></td>
 <td> /var/www/bold-services/application/app_data/reporting/exporthelpers/puppeteer/Linux-901912/chrome-linux </td>
 </tr>
 </table>

## What do I do after I copy the Chromium packages?

After you copy the Chromium packages into the directory listed in the table, restart the Bold Reports<sup>®</sup> web, API, and job services. For more information, see the <a href="./../how-to-restart-the-bold-reports-enterprise-application/">Bold Reports<sup>®</sup> Enterprise Application Restart Guide</a>.

 > **NOTE:**
 > * If the location listed in the table does not exist, create it manually and move the downloaded packages.
 > * If you are using the Bold Reports<sup>®</sup> version below 5.4 or the Azure App Service Environment, install [phantomjs](../../faq/how-to-install-phantomjs-manually/) instead of the chromium package.
 > * The Puppeteer-based data visualization export using Chromium packages is not supported in Azure environments and on Linux ARM64. As a result, data visualization items like Chart, Map, Gauge in scheduled reports cannot be exported.
 To overcome this limitation, use [Playwright](../../faq/how-to-export-data-visualization-in-azure-armx64-linux/) instead.

## Frequently asked questions

### Which Bold Reports<sup>®</sup> versions use PhantomJS instead of Chromium?

If you use a Bold Reports<sup>®</sup> version below 5.4 or the Azure App Service Environment, install PhantomJS instead of the Chromium package.

### Can I export charts with Chromium on Azure or Linux ARM64?

No. Puppeteer-based data visualization export with Chromium packages is not supported in Azure environments and on Linux ARM64. Use Playwright instead.

## See also

* [How to install PhantomJS manually](./../how-to-install-phantomjs-manually/)
* [Playwright export on Azure ARM64 Linux](./../how-to-export-data-visualization-in-azure-armx64-linux/)
* [How to restart the Bold Reports<sup>®</sup> application](./../how-to-restart-the-bold-reports-enterprise-application/)
