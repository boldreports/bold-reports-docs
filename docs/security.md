---
layout: post
title: Report Server Security and Encryption | Bold Reports
description: Learn how Bold Reports Report Server secures data with authentication, authorization, encryption, SSL and TLS, logging, and least privilege access.
platform: bold-reports
documentation: ug
---

# Overview of Bold Reports<sup>®</sup> Security

Bold Reports<sup>®</sup> protects your reports and data with authentication, authorization, data security, and network security features. The sections below explain the key security features that Bold Reports<sup>®</sup> software provides to its customers, including application security, logging, and least privilege access.

## How does Bold Reports<sup>®</sup> authenticate users?

Bold Reports<sup>®</sup> Report Server verifies a user's identity through authentication. Anyone who wants to access and manage resources such as reports, data sources, and datasets must be a user of the Bold Reports<sup>®</sup> server. You can configure the Bold Reports<sup>®</sup> server to use either local or external authentication to validate the authenticity of its users.

### Local authentication

In local authentication, the Bold Reports<sup>®</sup> server validates user authentication by comparing the provided credentials with the details stored in the Bold Reports<sup>®</sup> database.

### External authentication

The Bold Reports<sup>®</sup> Report Server supports Microsoft Entra ID (formerly Azure AD), OAuth 2.0, OpenID Connect, and JWT single sign-on. You can also import users from LDAP and Active Directory user directories.

* LDAP  

  You can configure the Bold Reports<sup>®</sup> server to use LDAP for user authentication. Users submit their credentials to the Bold Reports<sup>®</sup> server, which then attempts to bind to the LDAP instance using the user credentials. If the bind works and the credentials are valid, the server grants the user a session.

* Microsoft Entra ID  

  You can configure the Bold Reports<sup>®</sup> server to use Microsoft Entra ID (formerly Azure AD) for importing users and validating their authentication. Users are logged in to the Bold Reports<sup>®</sup> server after Microsoft validates and authenticates the credentials they provide.

* OpenID Connect  

  OpenID Connect is a simple identity layer on top of the OAuth 2.0 protocol. It allows clients to log in to the Bold Reports<sup>®</sup> application after they have logged in to their identity provider. To use OpenID Connect with the Bold Reports<sup>®</sup> server, configure OpenID Connect in the Bold Reports<sup>®</sup> application.

* OAuth 2.0  

  Bold Reports<sup>®</sup> supports the OAuth 2.0 authorization code workflow for authorizing third-party application users logging in to the Bold Reports<sup>®</sup> application. It allows clients to log in to the Bold Reports<sup>®</sup> application after logging in to their identity provider. To use OAuth 2.0 with the Bold Reports<sup>®</sup> server, configure OAuth 2.0 in the Bold Reports<sup>®</sup> application.

## How does Bold Reports<sup>®</sup> control what users can access?

Bold Reports<sup>®</sup> authorization controls which resources, such as reports, data sources, or datasets, users can access on the Bold Reports<sup>®</sup> server after authentication has been verified.

Authorization includes:

* Which users are allowed to create new reports or manage existing reports.
* Which users are allowed to create new data sources or manage existing data sources.
* Which users are allowed to create new datasets or manage existing datasets.
* Which users are allowed to create new schedules or manage existing schedules.
* Which users are allowed to perform admin roles on Bold Reports<sup>®</sup>, such as creating sites, adding users, and configuring server settings.

## How does Bold Reports<sup>®</sup> secure report data?

Bold Reports<sup>®</sup> lets you control which users can see the reports, data sources, and datasets. For data sources connected to live databases, you can also control user access based on their permissions.

You can assign read, write, create, and delete permissions to users and groups. Without the read permission, no user can see your data sources, datasets, or reports.

### Within the site

The Bold Reports<sup>®</sup> server provides a flexible permission system. Using this, you can control access to reports, data sources, and datasets.

### Between the sites

Every Bold Reports<sup>®</sup> site user can only log in to their site and access its resources. By default, each site is deployed with its own database and resources, so one site's data is not shared with other sites.

From v6.1, sites can also share one database with separate tables per site, and from v7.1 all sites can share common tables with logical isolation (PostgreSQL and Microsoft SQL Server only).

Additionally, users belonging to one site can only see users belonging to the same site and share reports with those site users. Users must have permissions to view and access reports and resources created by another user within the same site.

## How does Bold Reports<sup>®</sup> encrypt sensitive data?

Every Bold Reports<sup>®</sup> product installation generates unique private keys on the customer's machine. Bold Reports<sup>®</sup> uses these private keys to encrypt and store sensitive data such as passwords and database details.

The Bold Reports<sup>®</sup> server uses the following encryption methods to secure information such as user passwords and database details:

* `Rijndael Encryption (256 bits)`
* `RSA Cryptography (1024 bits)`
* `AES Cryptography (128 bits)`

## How does Bold Reports<sup>®</sup> secure network traffic?

The Bold Reports<sup>®</sup> server provides the following network security features.

### Client to Bold Reports<sup>®</sup> server

By default, the Bold Reports<sup>®</sup> server is configured with the HTTP protocol. We recommend changing the protocol to HTTPS by configuring SSL in the Bold Reports<sup>®</sup> server for all communications. When Bold Reports<sup>®</sup> is configured for SSL, all content and communications between clients are encrypted using SSL, and the HTTPS protocol is used for requests and responses.

### Resource access REST API

The Bold Reports<sup>®</sup> server makes internal API calls to access resources in web and mobile apps. The Bold Reports<sup>®</sup> server accepts all the connections that use Transport Layer Security (TLS 1.2/1.3) encryption, but we recommend mandatory use of TLS 1.2 in servers where Bold Reports<sup>®</sup> is installed.

### Bold Reports<sup>®</sup> server to database

The Bold Reports<sup>®</sup> server can connect to the database without SSL, but all the database connections that support SSL offer encrypted data transfer. We recommend enabling the SSL connection to your database when you configure the Bold Reports<sup>®</sup> server.

### Application logging

The Bold Reports<sup>®</sup> server generates log files when a user interacts with the Bold Reports<sup>®</sup> application or when an exception occurs. These include:

1. Debug log
2. Error log

These logs will only include performed events, occurred errors, and other operational logs, and will never collect any confidential information such as user passwords and database details. Our support team may request these logs to investigate customer-reported issues and provide solutions.

## Does Bold Reports<sup>®</sup> use open source components?

Yes. Bold Reports<sup>®</sup> software includes various open source components, which are licensed under the terms of applicable open source license agreements. Our legal team verifies and approves the use of such components in Bold Reports<sup>®</sup> software, and these usages are revisited and reviewed before every release.

## Protecting Data in Bold Reports<sup>®</sup> with Least Privilege Access

Bold Reports<sup>®</sup> follows the Least Privilege Access (LPA) principle to protect customer data during report generation.

### What is Least Privilege Access (LPA)

Least Privilege Access (LPA) is a security principle that grants users, applications, or systems only the minimum permissions necessary to perform their tasks. LPA reduces the risk of unauthorized access, data breaches, and other security incidents by limiting potential damage from compromised accounts or systems.

### How does Bold Reports<sup>®</sup> use LPA?

Bold Reports<sup>®</sup> adheres to the LPA principle to prioritize data security. The platform requests only the permissions essential for report generation, ensuring access is restricted to read-only operations wherever possible. This minimizes risks of unauthorized access, accidental data modification, or breaches, aligning with industry best practices for data security and compliance.

### Key aspects of the Bold Reports<sup>®</sup> LPA model include:

**Restricted Permissions:** Access is confined to read-only operations to prevent unintentional or unauthorized changes to customer data.

**Access Control:** Data access is limited to specific sources and fields based on reporting requirements, reducing exposure to sensitive information.

**Compliance with Security Standards:** The Bold Reports<sup>®</sup> LPA model aligns with established security frameworks and regulations, demonstrating a commitment to data privacy and protection.

By following the LPA principle, Bold Reports<sup>®</sup> provides a secure reporting environment, ensuring customers can confidently use its capabilities without compromising data integrity.

## See also

* [Enterprise license validation](./../licensing/)
* [Disaster recovery guide](./../disaster-recovery/)
* [Reset two-factor authentication](./../utilities/reset-two-factor-authentication/)
