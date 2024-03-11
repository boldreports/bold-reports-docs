---
layout: post
title: Filtering Reports using the URL Parameters| Bold Reports
description: Filtering report by passing one or more single or multi-valued parameters to the Reports URL in Bold Reports.
platform: report-platform
documentation: ug
---
# Report link with filter parameters

You can pass the parameters to a report by including them in a report URL. Passing parameter values within the URL will apply filters in the report on initial load itself.

To set a report parameter within a URL, use the following syntax.

`parameter=value1, value2,…, valueN`

Where `parameter` represents the parameter name.
Parameter can be single-valued and multiple-valued.

To append your query string made with parameters and values, to a URL, add a prefix (?) to the query string. If (?) is already there in the URL,add a prefix(&) to the query string.

`http://<servername>/<culturename>/reports/<reportid>/<category>/<reportname>?ParameterName=Value`

Here is a report view illustrating the same with single-valued parameter.

![URLFilterParameterValue](/static/assets/on-premise/images/how-to/pass-singleparameter-in-url.png)

Here is a report view illustrating the same with multi-valued parameter.

![URLFilterParameterValues](/static/assets/on-premise/images/how-to/pass-multipleparameter-in-url.png)