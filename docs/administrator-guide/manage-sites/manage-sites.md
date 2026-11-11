---
layout: post
title: Suspend, Edit, and Delete Sites in UMS | Bold Reports
description: Learn how to suspend, activate, and edit sites, view site details, and grant or revoke user access to sites in the Bold Reports User Management Server.
platform: report-platform
documentation: ug
---

# Manage sites in Bold Reports<sup>®</sup> User Management Server

In the Bold Reports<sup>®</sup> User Management Server (UMS), you can suspend, activate, and edit sites, view site details, and grant or revoke site access.

## How do I suspend a site?

You suspend a site in the Bold Reports<sup>®</sup> UMS by clicking the `Suspend` option in the Action Menu.

![Suspend Site](/static/assets/on-premise/images/tenant-management/suspend-site.png)

> **Warning :** If the site is suspended, users will not be able to access it.

## How do I activate a suspended site?

You activate a suspended site in the Bold Reports<sup>®</sup> UMS by clicking the `Activate` option.

![Activate Site](/static/assets/on-premise/images/tenant-management/activate-site.png)

## How do I edit a site?

You can update the following site information in the Bold Reports<sup>®</sup> UMS with the `Edit` Site option:

* Site Name
* Site Domain
* Site Identifier
* Database User Credential

To edit the site, follow these steps:

1. Click the `Edit` option in the menu.

   ![Edit Site Button](/static/assets/on-premise/images/tenant-management/edit-site-button.png)

2. In the Edit Site dialog that opens, enter the site name, site domain, and site identifier. Click the `Next` button to update the database user credentials.

   ![Edit Site](/static/assets/on-premise/images/tenant-management/edit-site.png)

3. Enter your database credentials and click the `update` button to update the site details.

![Edit Database](/static/assets/on-premise/images/tenant-management/edit-database.png)

## How do I delete a site?

You delete a site and its database in the Bold Reports<sup>®</sup> UMS by clicking the `Delete` option.

![Delete Site](/static/assets/on-premise/images/tenant-management/delete-site.png)

> **NOTE:** The database will not be deleted if there are any other tables present other than the Bold Reports<sup>®</sup> tables.

## How do I view site information?

To view site information in the Bold Reports<sup>®</sup> UMS, click the site name.

![Site Name](/static/assets/on-premise/images/tenant-management/site-name.png)

### General

The General section of the site information displays the basic information about the site, including:

* Site Name
* Site URL
* Client Id
* Client Secret

![General Info](/static/assets/on-premise/images/tenant-management/general-site-info.png)

### Site Users

The Site Users section of the site information shows the list of users who have access to the site.

![Site Users](/static/assets/on-premise/images/tenant-management/site-users.png)

#### Grant Access

You grant users access to a Bold Reports<sup>®</sup> site by clicking the `Grant Access` button for the site.

![Grant Access Option](/static/assets/on-premise/images/tenant-management/grant-access-button.png)

Then, select the users from the list and grant access to the site.

![Grant Access](/static/assets/on-premise/images/tenant-management/grant-access.png)

#### Revoke Access

You remove a single user's access to a Bold Reports<sup>®</sup> site by clicking `Revoke Access`.

![Revoke Single User](/static/assets/on-premise/images/tenant-management/revoke-single-user.png)

You can remove access for multiple users by clicking the `Revoke Access` button.

![Revoke Multiple Users](/static/assets/on-premise/images/tenant-management/revoke-multiple-users.png)

#### Add User

To grant a new user access to the Bold Reports<sup>®</sup> site, click the `Add User` button.

![Add User Button](/static/assets/on-premise/images/tenant-management/add-user-button.png)

To add the user, see [Add User](./../manage-users/#add-individual-users).

The user is added and granted access to the site.

### Custom Attribute

To configure custom attributes for a Bold Reports<sup>®</sup> site, see the [Configure Custom Attribute Guide](../../../designer-guide/report-designer/manage-data/dataset/configure-custom-attribute/).

## Switch Master Site

The Bold Reports<sup>®</sup> site created during the initial deployment is designated as the master site, but you have the option to switch it. Follow these steps:

1. Click the **create site** button, then enable the **Master Site** option during site creation and proceed by selecting  **Yes** to designate the site as the master site.
    ![Create Site](/static/assets/on-premise/images/tenant-management/create-site2.png)
    ![Switch Master Site](/static/assets/on-premise/images/tenant-management/switch-master-site.png)

2. Click **Next** to proceed further.
    ![Switch Master Site](/static/assets/on-premise/images/tenant-management/next-site.png)

3. Select the Database, Storage type, and Administrator. For more information, see the [Create Site Documentation](./../../manage-sites/create-site/).

4. After the site is created, the new site takes on the role of the master, and the existing site moves into the role of the slave.

    ![New master site](/static/assets/on-premise/images/tenant-management/newly-created-master-site.png)

    > **Note:** To designate a site as the master, click the master site option in its context menu.
    > ![Switch Master Site](/static/assets/on-premise/images/tenant-management/master-menu-option.png)

## Frequently asked questions

### Can users access a suspended site?

No. If the site is suspended, users will not be able to access it.

### Is the database always deleted with the site?

No. The database will not be deleted if there are any other tables present other than the Bold Reports<sup>®</sup> tables.

## See also

* [Create a new site](./../../manage-sites/create-site/)
* [Manage admin access](./../../manage-sites/manage-admin-access/)
* [Manage users](./../manage-users/)
