---
title: Pass Form Data in a REST API Data Source | {{site.productName}}
description: POST form data with the REST API data source in {{site.productName}} Report Designer by setting the URL, POST method, request body parameters, and Content-Type header.
---

# How to pass form data in a REST API data source

To POST form data with the REST API data source in {{site.productNameTM}}, choose the `POST` method and specify keys and values under `Parameters` in `Request Body`.

## How do I post form data?

You post form data from the {{site.productNameTM}} REST API data source by setting the URL, method, request body, and headers.

1. Enter the REST API URL in the `URL` field.
2. Choose the `Method` type as `POST`.
3. Choose `Parameters` in `Request Body`. Enter the key and values to post the data.
4. In `Header(s)`, enter the `Content-Type` of the form data.
   ![POST form data](/static/images/report-designer/how-to/pass-form-data/post-with-parameters.png '#width=350px')

## Do I need a Content-Type header for raw data?

No. For a `POST` action with `Raw` data, the {{site.productNameTM}} REST API data source handles the `Content-Type` request header based on the `Data Format` field value.

> NOTE: For `POST` action with `Raw` data, the `Content-Type` request header is handled based on the `Data Format` field value. So, you do not need to pass this header explicitly in the Header(s) list. Passing it leads to the [Misused Header name](./../pass-form-data-in-rest-api-data-source/) error.
![Misused header name error](/static/images/report-designer/how-to/pass-form-data/misused-header-error.png '#width=400px')

## See also

* [Resolve misused header name error](./../../how-to/resolve-misused-header-name-error-rest-api-data-source/)
* [Configure timeout setting for data connectors](https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/how-to/configure-timeout-setting/)
* [Report Designer how-to guides](./../../how-to/)
