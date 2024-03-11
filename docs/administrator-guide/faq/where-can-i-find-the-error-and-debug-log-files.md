---
layout: post
title: Frequently asked questions in Bold Reports On-premise
description: Tells about where to find the error logs and debug files to identify the issue in the Bold Reports On-premise Edition.
platform: report-platform
documentation: ug
---

# Where can i find the error and debug log files

## Error logs

Error log files are generated when an exception occurs while configuring or interacting with the Bold Reports application

## Debug logs

Event log files record the complete user interaction details one after the other when users interact with the Bold Reports application

## Log Directories

For any configurations made in the Bold Reports, log files are generated in deployed locations under the various modules listed in the following table based on the nature of the error or event.

## Bold Reports version 3.1.31 or later

Admin can download log files from Get diagnostic logs in UMS.

 ![Diagnostic logs](/static/assets/on-premise/images/faq/diagnostic-logs.png)

 You can get the log file manually from the following location for Bold Reports version 3.1.31 or later.

> By default, the Bold Reports is deployed in `C:\BoldServices`.

| Hosted Environment    | Log location                                                  |
|------------------     |------------------------------------------------------------   |
| Windows               |  **`{Deployed Location}`**\app_data\logs                      |
| Linux                 |   /var/www/bold-services/application/app_data/logs            |

## Bold Reports version below 3.1.31

> By default, the Bold Reports is deployed in `C:\Bold Reports`.

| Application           | Log location                                                  |
|------------------     |------------------------------------------------------------   |
| Identity Provider     | **`{Deployed Location}`**\IDP\App_Data\Logs                   |
| Report Server         | **`{Deployed Location}`**\Report Server\App_Data\Logs         |
