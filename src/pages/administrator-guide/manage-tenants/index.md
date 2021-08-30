---
layout: post
title: Tenant management in BoldReportsOn-PremiseEdition
description: Learn how to create sites and maintain users in tenant management on Bold Reports OnPremise Edition.
platform: report-platform
documentation: ug
---

# Multi-tenancy

Bold Reports Enterprise Reporting has comes with multi-tenancy, which allows administrator to deploy multiple tenants and manage their reports. Each tenant has its own database for managing its reports and resources so they are isolated from each other tenant under single Bold Reports deployment.

## Architecture

Architecture of the Bold Reports multi-tenant solution is given in the following image. Each tenant has deployed with its own database and resource, which ensures the data isolation of one tenant from others.

![Multi-Tenant Architect](/static/assets/on-premise/images/tenant-management/multi-tenant-architect.png)

To setup multi-tenant solution, install and deploy the Bold Reports Enterprise Reporting, which will deploy the first tenant with Identity Provider (IDP) application in isolated database. Then, you can deploy many tenants with their own database.

The Identity Provider (IDP) application is a core application of multi-tenant solution, which manages the tenant and its user identity.

> IDP and first Reports tenant can share the same database, but you cannot share same database between the two tenant applications.

You can add a tenant by following this [link](./../manage-tenants/create-site/)