---
layout: post
title: How to install the PhantomJS manually in Bold Reports
description: This section explains how to install PhantomJS manually in Bold Reports for exporting data visualization in scheduling.
platform: report-platform
documentation: ug
---

# How to deploy PhantomJS WebKit manually

PhantomJS is a headless WebKit script able with JavaScript. It is a free software/open source that may contain MIT, BSD, LGPL or GPL, or other similar licenses It contains third-party code. This executable file is necessary to export the data visualization report items during export schedules. Without this, the data visualization report items no longer available in the exported schedules. It is your decision if you choose to download Phantom JS, but you must accept all of their terms and conditions if you want to use it with Syncfusion’s products.

To download the PhantomJS application and deploy it on your machine, you should accept its license terms on [LICENSE](https://github.com/ariya/phantomjs/blob/master/LICENSE.BSD) and [Third-Party](https://github.com/ariya/phantomjs/blob/master/third-party.txt) document. Then, you can download PhantomJS by clicking this [link](http://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-windows.zip).

Once download completed, extract the zip file and then copy the PhantomJS application from `{Extracted Location}\PhantomJS-2.1.1-windows\bin` and paste it in the below mentioned deploy location.

**Install Location:**

Please place the PhantomJS executable file in the location.
`{Deployed Location}\BoldServices\app_data\reporting\exporthelpers`

**Example:**

`C:\BoldServices\app_data\reporting\exporthelpers\phantomjs.exe`