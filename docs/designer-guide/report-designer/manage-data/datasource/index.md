---
canonical: /enterprise-reporting/designer-guide/report-designer/manage-data/datasource/
title: Manage Data Sources in Web Report Designer | {{site.productName}}
description: Connect {{site.productName}} Web Report Designer report items to embedded or shared data sources such as SQL Server, Oracle, OData, JSON, and XML without code.
keywords: reports, ejreports, reportdesigner, report designer, web designer, bold-reports reportdesigner, Overview, web designer
---

# Data sources in {{site.productNameTM}} Web Report Designer

The {{site.productNameTM}} Web Report Designer lets you create an embedded or shared data source using a built-in or data processing extension. You can have any number of data sources that connect to different local or server databases.

## Which data providers can I connect to?

The {{site.productNameTM}} Web Report Designer connects to major data providers such as **Microsoft SQL Server**, **Oracle**, **OLEDB**, **ODBC**, **Web API**, **OData**, **JSON**, and **XML**. You can explore data and design reports with a wide range of data sources.

## What is an embedded data source?

An embedded data source in {{site.productNameTM}} is a data connection that you create for a single report. The embedded data source is specific to a report, and you can use the connection string as expressions.

## What is a shared data source?

A shared data source is stored on a {{site.productNameTM}} Report Server and shared by multiple reports. You can add it to a report. The shared data source provides better security by hiding the connection details.

## What are custom data processing extensions?

Custom data processing extensions in {{site.productNameTM}} add data providers to connect to your own database or extend the features of the existing data providers. You create .NET framework compatible custom data processing extensions using the data extension interface. With minimal configuration, you can use any additional data source such as SASS, WebApi, MySQL, PostgreSQL, MongoDB, etc.

## See also

[Create Embedded Datasource](./../../manage-data/datasource/create-an-embedded-data-source/)

[Link Shared Datasource](./../../manage-data/datasource/link-a-shared-data-source/)

[Edit Embedded Datasource](./../../manage-data/datasource/modify-an-embedded-data-source/)

[Edit Shared Datasource](./../../manage-data/datasource/modify-shared-data-source/)

[Delete Datasource](./../../manage-data/datasource/delete-a-data-source/)

[Duplicate Datasource](./../../manage-data/datasource/duplicate-a-data-source/)

[Reordering DataSources](./../../manage-data/datasource/reorder-data-source/)
