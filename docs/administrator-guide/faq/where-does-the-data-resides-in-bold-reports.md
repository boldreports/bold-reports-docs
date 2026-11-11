---
layout: post
title: Where Report Server Stores Reports and Data | Bold Reports
description: Learn where Bold Reports On-Premises Edition stores reports, data sources, datasets, schedules, and permissions, in the database, file storage, or Azure Blob.
platform: report-platform
documentation: ug
---

# Where does the data reside in Bold Reports<sup>®</sup>?

Bold Reports<sup>®</sup> keeps report details in the database you provided when you configured the [Bold Reports<sup>®</sup> application](./../../../application-startup/). It keeps the report, dataset, and data source files in File Storage or Azure Blob Storage.

## Which details does Bold Reports<sup>®</sup> store in the database?

Bold Reports<sup>®</sup> maintains the following details in the database:

* Information of reports.
* Information of shared data sources.
* Information of shared data sets.
* Categories.
* Schedules definitions.
* Permissions settings associated for report, data source, data set, categories, and schedules.
* Bold Reports<sup>®</sup> Report Server configurations.

## Where does Bold Reports<sup>®</sup> store reports, datasets, and data sources?

Bold Reports<sup>®</sup> Server keeps the reports, datasets, and data sources you add in a location based on the storage type you chose while configuring the Bold Reports<sup>®</sup> Server application.

For the `File Storage` type, reports, datasets, and data sources are maintained in the following location:
![Resources location](/static/assets/on-premise/images/faq/resource-location.png)

For the `Azure Blob Storage` type, reports, datasets, and data sources are maintained in the `Azure Blob Container` that you provided when configuring the Bold Reports<sup>®</sup> Server application.

## See also

* [Does Report Server store reports execution data to server database](./../does-report-server-store-reports-execution-data-to-server-database/)
* [Bold Reports<sup>®</sup> architecture](./../bold-reports-architecture/)
* [What are the database permissions required to set up Bold Reports<sup>®</sup>?](./../what-are-the-database-permissions-required-to-set-up-bold-reports/)
