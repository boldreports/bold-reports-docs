---
layout: post
title: Enable System User Authentication | Bold Reports
description: Enable the System User option in Bold Reports On-Premises Edition to allow anonymous report viewing and REST API access and to generate global access tokens.
platform: report-platform
documentation: ug
---

# System user authentication in Bold Reports<sup>®</sup>

Enable the `System User` option in Bold Reports<sup>®</sup> to streamline authentication and enhance accessibility. The option allows anonymous users to view reports and access REST APIs, and it generates global access tokens for secure and efficient system-wide authentication.

![System-User](/static/assets/on-premise/images/manage-users-and-groups/system-user.png)

## What happens when I enable the System User option?

Enabling the Bold Reports<sup>®</sup> `System User` option grants a dedicated user account with elevated privileges across the entire application. When the option is enabled:

* The System User is automatically added to the Users page for each site.
![Users-Page](/static/assets/on-premise/images/manage-users-and-groups/system-user-users-page.png)

* As a member of the System Administration group, the user gains full access to all features and modules within the application.
![Groups-Page](/static/assets/on-premise/images/manage-users-and-groups/system-user-groups-page.png)

* The feature simplifies authentication for system-level operations by allowing:
    * Anonymous access for viewing reports and consuming REST APIs.
    * Generation of global access tokens for secure, system-wide authentication.

## When should I use the System User?

The Bold Reports<sup>®</sup> System User suits administrative tasks that need central control.

>Note: Ideal for scenarios where centralized control and unrestricted access are required for administrative tasks.

## Frequently asked questions

### Which group does the System User belong to?

The Bold Reports<sup>®</sup> System User is a member of the System Administration group and gains full access to all features and modules within the application.

### Where does the System User appear?

The System User is automatically added to the Users page for each site.

## See also

* [Manage users](./../manage-users/)
* [User roles](./../../../user-role/)
* [Manage permissions](./../../../manage-permissions/)
