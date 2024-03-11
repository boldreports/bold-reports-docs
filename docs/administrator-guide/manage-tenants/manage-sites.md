---
layout: post
title: Manage sites in UMS of Enterprise Reporting | Bold Reports
description: Learn here how to manage the site information, how to grant and revoke access to the site users and more in Enterprise Bold Reports. 
platform: report-platform
documentation: ug
---

# Manage sites

This section briefly explains how to manage the sites and information about the site.

## Suspend Site

You can suspend the site by clicking the `Suspend` option in Action Menu.

![Suspend Site](/static/assets/on-premise/images/tenant-management/suspend-site.png)

> **Warning :** If the site is suspended, users cannot access the site.

## Activate Site

You can activate the suspended site by clicking the `Activate` option.

![Activate Site](/static/assets/on-premise/images/tenant-management/activate-site.png)

## Edit Site

We can able to update the following information for the site using the `Edit` Site option.

* Site Name
* Site Domain
* Site Identifier
* Database User Credential

You can edit the site by clicking the `Edit` option in the menu.

![Edit Site Button](/static/assets/on-premise/images/tenant-management/edit-site-button.png)

After clicking the `Edit` option, Edit Site dialog will open. Enter the site name, site domain, and site identifier in the below step and click `Next` button to update the database user credential.

![Edit Site](/static/assets/on-premise/images/tenant-management/edit-site.png)

After entering your database credential, click `Update` button to update the site details.

![Edit Database](/static/assets/on-premise/images/tenant-management/edit-database.png)

## Delete Site

You can delete the site and it's database by clicking the `Delete` option.

![Delete Site](/static/assets/on-premise/images/tenant-management/delete-site.png)

> **NOTE:** Database will not be deleted if there are any other tables present other than the Bold Reports tables.

## Site Information

By clicking the site name, you can see the site information.

![Site Name](/static/assets/on-premise/images/tenant-management/site-name.png)

### General

This section displays the basic information about the site.

* Site Name
* Site Url
* Client id
* Client secret

![General Info](/static/assets/on-premise/images/tenant-management/general-site-info.png)

### Site Users

This section shows the users list which have access to the site.

![Site Users](/static/assets/on-premise/images/tenant-management/site-users.png)

#### Grant Access

You can grant access to the users by clicking `Grant Access` button for this site.

![Grant Access Option](/static/assets/on-premise/images/tenant-management/grant-access-button.png)

After clicking the button, select the users from the list and grant access to the site.

![Grant Access](/static/assets/on-premise/images/tenant-management/grant-access.png)

#### Revoke Access

You can remove access for single user by clicking this link `Revoke Access`.

![Revoke Single User](/static/assets/on-premise/images/tenant-management/revoke-single-user.png)

You can remove access for multiple users by clicking the `Revoke Access` button.

![Revoke Multiple Users](/static/assets/on-premise/images/tenant-management/revoke-multiple-users.png)

#### Add User

To grant access to new user, click the `Add User` button.

![Add User Button](/static/assets/on-premise/images/tenant-management/add-user-button.png)

You can add the user by referring [Add User](./../manage-users/#add-individual-users)

The user will be added and have access to the site.

## Switch Master Site

The site created during the initial deployment is designated as the master site but you have the option to switch it. Please refer below for guidance.

* Click the **create site** button, then enable the **Master Site** option during site creation and proceed by selecting  **Yes** to designate the site as the master site.
    ![Create Site](/static/assets/on-premise/images/tenant-management/create-site2.png)
    ![Switch Master Site](/static/assets/on-premise/images/tenant-management/switch-master-site.png)

* Click **Next** to proceed further.
    ![Switch Master Site](/static/assets/on-premise/images/tenant-management/next-site.png)

* Next, please select the Database, Storage type, and Administrator. For more information, please refer to the documentation provided [here](./../../manage-tenants/create-site/).

* After the site's creation, the newly established site took on the role of the master, while the existing site transitioned into the role of the slave.

    ![New master site](/static/assets/on-premise/images/tenant-management/newly-created-master-site.png)

    > **Note:** Clicking on the master site in the context menu allows you to designate it as the master.
    > ![Switch Master Site](/static/assets/on-premise/images/tenant-management/master-menu-option.png)