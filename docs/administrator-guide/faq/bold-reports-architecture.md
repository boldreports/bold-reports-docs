---
layout: post
title: Architecture Diagram for Bold Reports On-Premise Edition
description: This section explains the architecture diagram for Bold Reports On-Premise Edition provided to create, manage, and share the interactive business reports.
platform: report-platform
documentation: ug
keywords: boldreports
canonical: ''
---

# Architecture Diagram for Bold Reports

This section explains the architecture diagram for Bold Reports On-Premise Edition.

## Overview of Bold Reports

The Bold Reports is an online solution for analyzing data on the web using interactive reports with key metrics and tracking your business easily.

It is an end-to-end solution for creating, managing, and sharing interactive business reports that include a powerful report designer for composing easily.

## Architecture Diagram for Bold Reports

This topic provides users responsible for supporting bold reports in their organization with an advanced description of the architecture of bold reports.

The architecture of Bold Reports is a multi-tenant solution. Each tenant has its own database and resources, which ensures the data isolation of one tenant from others.

The diagram below describes the components of a Bold Reports server and how Bold Reports works on the server.

![Architecture Diagram](/static/assets/on-premise/images/architecture/architecture-diagram.png)

The Bold Reports is provided with a single installation process. After installing the bold reports on a server, you will have access to all of the Bold Reports functionality.

The Bold Reports application has two types of functional systems:

* Bold ID - It manages user identities and sites.
* Bold Reports Server- It manages reports, data sources, datasets, schedules, and user permissions.
Storage Options

### Bold ID Application

Bold ID Application is an identity provider for Bold Platform products. The [tenant](./../../manage-tenants/) details and the user details are maintained in the Bold ID application. Login and logout have been processed in this application. The Bold ID Application is a core application of the multi-tenant solution that manages the tenant and its user identity.

Tenant and user details are stored in the Tenant Catalog we called this as UMS (user management server), whereas the login processes are handled by the identity service. All these functionalities are carried out under the application called Bold ID.

In Bold ID we are supporting various login support like SSO, OAuth, Open ID, JWT token access, and Windows authentication; please refer [here](./../../authentication/) for more details.

Whenever you are accessing the bold reports tenant directly, the bold reports application will redirect the request to Bold ID to authenticate over the user and proceeded to tenant accessibility when it is valid and authorized; otherwise, it will end up with an authentication error.

> IDP and first Reports tenant can share the same database, but you cannot share the same database between two tenants.

### Bold Reports Application

Bold Reports Server is a reporting application where we can maintain resources like reports, data sources, datasets, schedules, users, groups, and permissions as separately with irrespective of other tenants.

Well, admin and non-admin users can also perform the CRUD operations among reporting items based on a set of privileges provided to them. Please go through it [here](./../../manage-permissions/) for permission management.

The Data Viewer Service (Report Designer) is one of the applications of the Bold Reports Server, where we can design the report using a live connection to retrieve the data and create and view the report.
To create a new report, refer [here](../../../designer-guide/report-designer/design-rdl-report-in-web-report-designer/).

The **Report** service (Report viewer) is an engine which is integrated by default into the data viewer service and report server to render/view the report.

> We are providing the support to embed the report viewer and report designer in your application. Please refer [here](../../../developer-guide/embed-in-application/) for more details.