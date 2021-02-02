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

> By default, the Bold Reports is deployed in `C:\Bold Reports`.

| Application           | Log location                                                  |
|------------------     |------------------------------------------------------------   |
| Identity Provider     | **`{Deployed Location}`**\IDP\App_Data\Logs                   |
| Report Server         | **`{Deployed Location}`**\Report Server\App_Data\Logs         |
