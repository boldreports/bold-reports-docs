---
layout: post
title: Azure App Service Prerequisites | Bold Reports
description: Review what you need to deploy Bold Reports on Azure App Service, including the App Service plan, subscription, database, file storage, and supported browsers.
platform: bold-reports
documentation: ug
---

# Prerequisites to use Bold Reports<sup>®</sup> on the Microsoft Azure App service

To use Bold Reports<sup>®</sup> on Microsoft Azure App Service, you need the App Service plan, subscription, storage, database, and browser listed below.

## What do I need to deploy Bold Reports<sup>®</sup> on Azure App Service?

Bold Reports<sup>®</sup> on Azure App Service requires the following plan, subscription, deployment type, storage, browser, and database:

* **App Service Plan:** S3+ (Budget-friendly option for testing) | P2V3+ (Similar to production but at a lower cost for development/testing environments) | I1v2+ (Suitable for high-security and compliance requirements).
    >**Note:** You can choose any plan that has more than 4 cores and 14 GB RAM.

* **Subscriptions:** Microsoft Azure Subscription. If you don't already have one, you can sign up for a free trial on the [Azure free account website](https://azure.microsoft.com/en-us/free/).

* **Deployment Type:** ARM Template.
* **File Storage:** Azure Blob Storage.
* **Web Browser:** Microsoft Edge | Mozilla Firefox | Chrome | Apple Safari.
* **Storage:** 10 GB or more.
* **Database:** PostgreSQL 13.0+ | Microsoft SQL Server 2016+ | MySQL 8.0+ | Oracle Database 19c+.

## Frequently asked questions

### Which databases does Bold Reports<sup>®</sup> support on Azure App Service?

Bold Reports<sup>®</sup> on Azure App Service supports PostgreSQL 13.0+, Microsoft SQL Server 2016+, MySQL 8.0+, and Oracle Database 19c+.

### Which App Service plan should I choose?

Use S3+ for budget-friendly testing, P2V3+ for development or testing that resembles production, or I1v2+ for high-security and compliance requirements. You can choose any plan that has more than 4 cores and 14 GB RAM.

## See also

* [Recommended Azure App Service configuration](./../recommendations/)
* [Deploy Bold Reports<sup>®</sup> Azure web app using the ARM template](./../using-arm-template/)
* [Install Client Libraries](./../client-libraries/)
