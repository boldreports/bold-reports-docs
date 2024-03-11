---
layout: post
title: Download chromium packages manually in Bold Reports.
description: Explore this section to gain insights into manually adding chromium packages in Bold Reports' On-Premise Edition, with step-by-step instructions for installation.
platform: report-platform
documentation: ug
keywords: boldreports
canonical: ''
---

# How do I deploy chromium packages manually in Bold Reports

Chromium packages are necessary to achieve `image and PDF export` functionalities in reports,schedules from Bold Reports. Without these packages, the image and PDF export options in reports and schedules will no longer be available.

If you installed the build offline or skipped the packages during the build installation, you can manually install the chromium packages. Please find the download link and location details in the following table. Once the download is complete, extract the zip file and copy the `chrome-win` folder for Windows or the `chrome-linux` folder for Linux from the extracted location.

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
 <td> <a href="https://storage.googleapis.com/chromium-browser-snapshots/Win/901912/chrome-win.zip">https://storage.googleapis.com/chromium-browser-snapshots/Win/901912/chrome-win.zip</a></td>
 <td> {Deployed Location}\app_data\reporting\exporthelpers\puppeteer\Win-901912\chrome-win</td>
 </tr>
 <tr>
 <td> Windows 64-bit </td>
 <td><a href="https://storage.googleapis.com/chromium-browser-snapshots/Win_x64/901912/chrome-win.zip">https://storage.googleapis.com/chromium-browser-snapshots/Win_x64/901912/chrome-win.zip</a></td>
 <td> {Deployed Location}\app_data\reporting\exporthelpers\puppeteer\Win64-901912\chrome-win </td>
 </tr>
 <td> Linux </td>
 <td> <a href="https://storage.googleapis.com/chromium-browser-snapshots/Linux_x64/901912/chrome-linux.zip">https://storage.googleapis.com/chromium-browser-snapshots/Linux_x64/901912/chrome-linux.zip</a></td>
 <td> /var/www/bold-services/application/app_data/reporting/exporthelpers/puppeteer/Linux-901912/chrome-linux </td>
 </tr>
 </table>

After copying the chromium packages into the specified directory mentioned in the above table, you must restart the web,API, and job services. Please refer to this [link](./../how-to-restart-the-bold-reports-enterprise-application/) for more information.

 > **NOTE:**
 > * If the above-highlighted location doesn’t exist, Please create it manually and move the downloaded packages.
 > * If you are using the Bold Reports version below 5.4 or the Azure App Service Environment, install [phantomjs](./../how-to-install-phantomjs-manually/) instead of the chromium package.