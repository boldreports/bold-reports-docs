---
layout: post
title: Data resides in Bold Reports On-Premise Edition
description: This documentation explains about where does the data resides in the Bold Reports On-Premise Edition.
platform: report-platform
documentation: ug
---

# Where does the data resides in Bold Reports

Bold Reports data will be maintained the following details in the database, which was provided for configuring the [Bold Reports application](./../../application-startup/).

* Information of reports
* Information of shared data sources
* Information of shared data sets
* Categories
* Schedules definitions
* Permissions settings associated for report, data source, data set, categories, and schedules
* Report Server configurations

The reports, dataset, and data source, which are added to the Bold Reports Server will be maintained in some location based on storage type you have chosen while configuring the Bold Reports Server application.

For `File Storage` type, reports, dataset, and data source will be maintained in the following location.
![Resources location](/static/assets/on-premise/images/faq/resource-location.png)

For `Azure Blob Storage` type, reports, datasets, and data source will be maintained in the `Azure Blob Container`, which was provided for configuring Bold Reports Server application.

## See also

[Does Report Server store reports execution data to server database](./../does-report-server-store-reports-execution-data-to-server-database/)