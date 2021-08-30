---
layout: post
title: Managing-Users-and-activation in BoldReportsOnPremise
description: Administrator can add, edit, activate, deactivate, manage-permissions, assign users to group and delete users in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Manage Users

This section explains on how to add, edit, activate, deactivate, delete users and also on how to manage the permissions and assign users to groups in the Bold Reports Server.

Users can only be added/edited/deleted by the users, belonging to the `System Administrator` group.

![Manage Users](/static/assets/on-premise/images/manage-users-and-groups/users/manage-users.png)

## Add new users

New users can be added to the Bold Reports Server individually or in bulk using CSV import

### Add individual users

To add new users to the Bold Reports Server, click on `New User` and then `Create User` from the User Management page.

The `Add User` dialog will be shown as like in the image below.

![Add User](/static/assets/on-premise/images/manage-users-and-groups/users/add-user.png)

Fill the form with Email address, First name and Last name and click on `Add`.

New account will be created for the user and an account activation email will be sent to the email address with activation link to activate the Bold Reports Server account.

The activation link sent to the user will be valid only for 2 days and if the user have not activated within the 2 days, a new activation link can be sent to the user from the user edit page. Check [Activate Users](#activate-users) section for more details.

The account will be in inactive status till the user activates the account from the activation email.

## Edit users

User profile details can be edited from the users edit page as shown in the below image.

![Edit User](/static/assets/on-premise/images/manage-users-and-groups/users/edit-user.png)

First Name, Last Name, Phone number and the login password for the user can be edited by the user belonging to the 'System Administrator' group.

## Delete users

Users can be deleted from the Bold Reports On-Premise when the user no longer requires the access. Users can be deleted from the user management page or from the edit page.

### From user management page

![Delete user from user management page](/static/assets/on-premise/images/manage-users-and-groups/users/delete-user-1.png)

### From user edit page

![Delete user from user edit page](/static/assets/on-premise/images/manage-users-and-groups/users/delete-user-2.png)

## Deactivate users

Users can be deactivated at any time. Once deactivated, the user cannot log into the Bold Reports On-Premise.
To deactivate a user, select inactive from the status dropdown in the user edit page.

![Deactivate user account](/static/assets/on-premise/images/manage-users-and-groups/users/deactivate-user.png)

## Activate users

Inactive users can be activated by clicking on the `Resend Activation Code` button in the user edit page.

This will send an account activation email to the user with an activation link to activate the account and again this activation link will be valid only for 2 days.

If the user has not received the activation email within 2 days or missed to activate the account, the `System Administrator` has to resend the activation email to the user.

![Activate user account - Resend Activation code](/static/assets/on-premise/images/manage-users-and-groups/users/activate-user-resend.png)

## Manage permissions

Check the [Manage Permissions](./../../../administrator-guide/manage-permissions/) section to learn how to manage permissions to an user.

## Assign users to group

Users can be assigned to one or many groups from the user management page.

![Assign group to selected users](/static/assets/on-premise/images/manage-users-and-groups/users/assign-group-to-users.png)

Users can be assigned to an existing group.

![Assign existing group to selected users](/static/assets/on-premise/images/manage-users-and-groups/users/assign-group-to-users-1.png)

A new group can also be created at this time and the selected users can be assigned to the new group.

![Assign new group to selected users](/static/assets/on-premise/images/manage-users-and-groups/users/assign-group-to-users-2.png)

> All the users in the group will have the permissions of assigned group.