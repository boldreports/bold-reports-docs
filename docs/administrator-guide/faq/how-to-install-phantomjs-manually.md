---
layout: post
title: Install PhantomJS Manually for Report Export | Bold Reports
description: Manually download and install PhantomJS in Bold Reports to enable image and PDF export of data visualizations in reports and schedules on each platform.
platform: report-platform
documentation: ug
---

# How to deploy PhantomJS WebKit manually in Bold Reports<sup>®</sup>

Bold Reports<sup>®</sup> uses PhantomJS, a headless WebKit script written in JavaScript, for image and PDF export in reports and schedules.

## What is PhantomJS and why does Bold Reports<sup>®</sup> need it?

PhantomJS is the executable that Bold Reports<sup>®</sup> needs to achieve image and PDF export features in reports and schedules. Without it, the image and PDF export options in reports and schedules are no longer available.

PhantomJS is free and open-source software that may be licensed under the MIT, BSD, LGPL or GPL, or other similar licenses. It contains third-party code. It is your decision if you choose to download PhantomJS, but you must accept all of its terms and conditions if you want to use it with Syncfusion<sup>®</sup>’s products.

## How do I download PhantomJS?

To download and install the PhantomJS application for Bold Reports<sup>®</sup>, you must accept the terms of the [LICENSE](https://github.com/ariya/phantomjs/blob/master/LICENSE.BSD) and [Third-Party](https://github.com/ariya/phantomjs/blob/master/third-party.txt) documents. Then, download PhantomJS for [Windows](https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-windows.zip), [Linux](https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2), and [Azure App Service](https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.0.0-windows.zip).

## How do I install PhantomJS in Bold Reports<sup>®</sup>?

After the download completes, extract the zip file. Then, copy the PhantomJS application from the following extracted location:

| Operating System           | Extracted Location                                                |
|------------------     |------------------------------------------------------------   |
| Windows               | **`{Extracted Location}`**\PhantomJS-2.1.1-windows\bin                  |
| Linux                 | **`{Extracted Location}`**\phantomjs-2.1.1-linux-x86_64\bin        |
| Azure App Service     | **`{Extracted Location}`**\phantomjs-2.0.0-windows\bin       |

Place the PhantomJS executable file in the following location:
`{Deployed Location}\BoldServices\app_data\reporting\exporthelpers`

**Example:**

`C:\BoldServices\app_data\reporting\exporthelpers\phantomjs.exe`

> **Note:** If you are using Bold Reports<sup>®</sup> version 5.4 or later, install the [Chromium](../../faq/how-to-install-chromium-packages/) package instead of PhantomJS.

## Frequently asked questions

### Which Bold Reports<sup>®</sup> versions should use Chromium instead of PhantomJS?

If you use Bold Reports<sup>®</sup> version 5.4 or later, install the Chromium package instead of PhantomJS.

### What happens if PhantomJS is not installed?

Without PhantomJS, the image and PDF export options in Bold Reports<sup>®</sup> reports and schedules are not available.

## See also

* [How to install Chromium packages](./../how-to-install-chromium-packages/)
* [Playwright export on Azure ARM64 Linux](./../how-to-export-data-visualization-in-azure-armx64-linux/)
