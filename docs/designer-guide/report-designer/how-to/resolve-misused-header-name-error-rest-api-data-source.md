---
title: Resolve misused header name error | Bold Reports Designer
description: This section describes how to resolve the misused header name error when performing get and post actions in Rest API data source.
---

# How to resolve misused header name error

This section explains how to resolve the misused header name error when creating Rest API data source in Bold Reports.

![Misused header name error](/static/assets/on-premise/images/report-designer/how-to/resolve-misused-header-name-error/misused-header-error.png '#width=400px')

## When the error occurs

This error occurs when the user explicitly pass `Content-Type` or `Content-Length` reserved headers in the `Header(s)` list.

![Reserved headers](/static/assets/on-premise/images/report-designer/how-to/resolve-misused-header-name-error/reserved-headers.png '#width=400px')

## Why the error occurs

In Bold Reports REST API data source connector, we have handled the `Content-Type` and `Content-Length` request headers based on the `Data Format` field value. So, while passing the same values explicitly in `Headers` list causes the `Misused header name` error.

## How to overcome the error

1. Remove the `Content-Type` and `Content-Length` reserved headers from the `Header(s)` list.

2. Choose the content type in `Data Format` field.

    ![Data Format](/static/assets/on-premise/images/report-designer/how-to/resolve-misused-header-name-error/data-format.png '#width=450px')