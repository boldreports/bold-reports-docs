---
layout: post
title: Manage Users and Groups in the Report Server | Bold Reports
description: Manage users and groups in the Bold Reports Report Server to control access to reports, datasets, data sources, and schedules with permission-based access.
platform: report-platform
documentation: ug
---

# Manage users and groups in Bold Reports<sup>®</sup> Report Server

**Managing users and groups** in Bold Reports<sup>®</sup> On-Premises Edition controls who can access reports, datasets, data sources, and schedules on the Report Server. Administrators can also organize related users together for easier permission management.

The following sections introduce users and groups and link to the detailed guides for managing each.

## What is a user or a group?

A User is an individual who has access to Bold Reports<sup>®</sup> Report Server reports, datasets, data sources, and schedules based on permission.

A Group is a collection of users who have access to Bold Reports<sup>®</sup> Report Server reports, datasets, data sources, schedules based on permission. Grouping related users together lets an administrator grant or change permissions for many users at once, instead of updating each user individually.

### What can I do with user and group management?

With user and group management in the Bold Reports<sup>®</sup> Report Server, you can:

* Create individual user accounts with access scoped by permission.
* Organize related users into groups for easier, bulk permission management.
* Grant or restrict access to reports, datasets, data sources, and schedules per user or group.
* Manage users and groups independently, using the sections linked below.

## What are the key features?

The Bold Reports<sup>®</sup> Report Server provides the following user and group management features:

* **Individual user accounts**: Create and manage a dedicated account for each person who needs access to the Report Server.
* **Group-based permission management**: Collect related users into a group so permission changes apply to all of them at once.
* **Resource-scoped access**: Control access to specific reports, datasets, data sources, and schedules, rather than granting blanket access.
* **Centralized administration**: Manage all users and groups from a single administrative area of the Report Server.

## What are common use cases?

Administrators use Bold Reports<sup>®</sup> Report Server user and group management in the following scenarios:

* **Onboarding a new team member**: Create a user account for a new team member and add them to the group that matches their role.
* **Managing access for a department or project team**: Group users by department or project so their access to relevant reports and data sources can be managed together.
* **Restricting access to sensitive reports or data sources**: Scope specific users or groups to only the resources they need, keeping sensitive content restricted.
* **Simplifying permission updates across many users**: Update a group's permissions once instead of editing the same permission on every individual user.

## Who should use this guide?

The Bold Reports<sup>®</sup> user and group management guide is intended for:

* Administrators managing user and group accounts.
* IT teams provisioning access for new employees or teams.
* Anyone responsible for reviewing who can access specific reports or data sources.

## What do I need first?

Before you manage users and groups in the Bold Reports<sup>®</sup> Report Server, make sure you have:

* Administrator access to the Bold Reports<sup>®</sup> Report Server's user and group management pages.
* A clear list of which reports, datasets, data sources, or schedules each user or group should access.

## What are the considerations and limitations?

Access in the Bold Reports<sup>®</sup> Report Server depends on both account membership and permissions:

* A user's or group's actual access also depends on the permissions granted to them. See [Manage Permissions](./../manage-permissions/) for how permissions are assigned.
* Changes made to a group's permissions apply to every user who belongs to that group.

## FAQ

### What's the difference between a user and a group?

A user is an individual account, while a group is a collection of users who share the same permission-based access, making bulk permission management easier.

### Do I need to assign permissions separately from creating a user or group?

Yes. Creating a user or group establishes the account or collection; access is then granted separately through permissions.

### Can a user belong to more than one group?

See the Users and Groups sections linked below for the specific steps on managing group membership.

## How do I get help with users and groups?

If a user or group isn't seeing the access you expect in the Bold Reports<sup>®</sup> Report Server, review their assigned permissions. You can also see the Users and Groups sections below for account-specific configuration.

You can learn more details about users and groups in the following sections:

* [Users](./../manage-users/users/) to create, update, or remove an individual user account.

* [Groups](./../manage-users/groups/) to create a group and manage which users belong to it.

* [Manage Permissions](./../manage-permissions/) to grant or restrict what a user or group can actually access, once the account exists.

## See also

* [Account activation](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-users/account-activation/)
* [User roles](./../user-role/)
* [User profile](./../user-profile/)
