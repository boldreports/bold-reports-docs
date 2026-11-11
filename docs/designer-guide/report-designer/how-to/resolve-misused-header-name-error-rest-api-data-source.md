---
title: Fix Misused Header Name Error in REST API | Bold Reports
description: Resolve the misused header name error in the Bold Reports REST API data source by removing Content-Type and Content-Length headers from the Header(s) list.
---

# How to resolve misused header name error

To resolve the misused header name error in a REST API data source in Bold Reports<sup>®</sup>, remove the `Content-Type` and `Content-Length` reserved headers from the `Header(s)` list.

![Misused header name error](/static/assets/on-premise/images/report-designer/how-to/resolve-misused-header-name-error/misused-header-error.png '#width=400px')

## When does the error occur?

The misused header name error in the Bold Reports<sup>®</sup> REST API data source occurs when you explicitly pass the `Content-Type` or `Content-Length` reserved headers in the `Header(s)` list.

![Reserved headers](/static/assets/on-premise/images/report-designer/how-to/resolve-misused-header-name-error/reserved-headers.png '#width=400px')

## Why does the error occur?

The Bold Reports<sup>®</sup> REST API data source connector already handles the `Content-Type` and `Content-Length` request headers based on the `Data Format` field value. Passing the same values explicitly in the `Headers` list causes the `Misused header name` error.

## How do I fix the error?

You fix the error in the Bold Reports<sup>®</sup> REST API data source by removing the reserved headers and choosing the content type in `Data Format`.

1. Remove the `Content-Type` and `Content-Length` reserved headers from the `Header(s)` list.

2. Choose the content type in the `Data Format` field.

    ![Data Format](/static/assets/on-premise/images/report-designer/how-to/resolve-misused-header-name-error/data-format.png '#width=450px')

## See also

* [Pass form data in a REST API data source](./../../how-to/pass-form-data-in-rest-api-data-source/)
* [Report Designer how-to guides](./../../how-to/)
