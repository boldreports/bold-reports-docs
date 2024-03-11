---
title: Managing Users in the Bold Reports On-Premise.
description: Learn how to add, edit, activate, deactivate, manage permissions, assign users to group and delete users in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Manage Users

This section explains how to add, edit, activate, deactivate, and delete users, as well as how to manage permissions and assign users to groups in the Bold Reports Server.

Users can only be added, edited, or deleted by individuals belonging to the `System Administrator` group.

![Manage Users](/static/assets/on-premise/images/manage-users-and-groups/users/manage-users.png)

## Add new users

New users can be added to the Bold Reports Server individually or in bulk using CSV import.

### Add individual users

To add new users to the Bold Reports Server, click on `New User` and then select `Add User` from the User Management page.

The `Add User` dialog will be displayed as shown in the image below.

![Add User](/static/assets/on-premise/images/manage-users-and-groups/users/add-user.png)

Fill out the form with the email address, username, first name and last name, then click on `Add`.

> **NOTE** : An email address is mandatory only in the [Email required](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-users/account-activation/#email-required) mode. Users created with passwords in the Bold Reports application will be recognized as local users.

A new account will be created for the user, and an account activation email will be sent to the email address with an activation link to activate the Bold Reports Server account.

The activation link sent to the user will be valid only for 2 days, and if the user has not activated within those 2 days, a new activation link can be sent to the user from the user edit page. Check the [Activate Users](#activate-users) section for more details.

The account will be in inactive status until the user activates it from the activation email.

## Add individual users with password

To add users with passwords, you have to set the Account Activation Mode to `Automatic` in the `Accounts` settings page.

![Auto Activation](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/account.png)

Next, click `New User`, and then `Add User` from the User Management page.

The `Add User` dialog box will be displayed as shown in the following image.

![Add Password](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/add-user-pwd.png)

The password must meet the following requirements:

It must contains:

* At least 6 characters
* 1 uppercase letter
* 1 lowercase letter
* 1 numeric digit
* 1 special character

## Add existing UMS user

Add the existing UMS user to the site using the `Add User` dialog.

If you enter the email address of a user who is already present in UMS, the remaining fields will be automatically filled and disabled.

Verify the user information and click `Add`.

![Existing User](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/existing-ums-user.png)

To learn how to add a user in UMS, refer to the following [guide](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-tenants/manage-users/).

## Import users from CSV

To automate the process of adding a large number of users to Bold Reports, you can download the CSV template file, add the users to it, and then import the file.

You can navigate to the user management page by clicking the `User` menu as follows:

![User Management](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/user-management.png)

> **NOTE**: The section will explain how to import users from a CSV file, which can be downloaded from the following location in the Bold Reports application. Users created with passwords in the Bold Reports application will be considered local users.

## Add users from the CSV file

In `New User`, click on `Import from csv`.

![Import User](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/import-csv.png)

## CSV file Requirements

The first row in the CSV template represents the column heading. Bold Reports assumes that the data starting from the second line in the file represents the user information.

We consider the following columns as mandatory in the downloaded CSV file.

* Username
* Email address (It is mandatory only in the [Email required](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-users/account-activation/#email-required) mode)
* Full Name
* Password (It is mandatory only in the [Automatic activation](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-users/account-activation/#automatic-activation) mode)

Follow the steps below to add users using the CSV template:

1. Download a CSV template.

    ![CSV User](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/template.png)

2. Add users in the CSV file.

    ![CSV File](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/template-content.png)

3. Save the CSV file and upload it.

    ![CSV Upload](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/template-upload.png)

4. Once the file is uploaded, the user details will be displayed in the grid, as shown in the image below.

    ![CSV Details](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/template-upload-content.png)

5. Click `Import Users` to import users from the CSV file.

    ![CSV Display](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/import-users.png)

6. After importing users in Bold Reports, the success message is displayed as shown below:

    ![CSV Display](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/success-template.png)

## Edit users

User profile details can be edited from the user edit page, as shown in the below image.
    ![Edit User](/static/assets/on-premise/images/manage-users-and-groups/users/user-edit.png)
    ![Edit Profile](/static/assets/on-premise/images/manage-users-and-groups/users/edit-profile.png)
    ![Edit User](/static/assets/on-premise/images/manage-users-and-groups/users/edit-user.png)

Username, first name, last name, and phone number for the user can be edited by the user belonging to the `System Administrator` group.

## Delete users

Users can be deleted from a specific site in Bold Reports when they are no longer needed on the site. Users can be deleted either from the user management page or from the edit user page. Even if a user is removed from the site, they will still be available in the UMS.

### From user management page

Click `Delete User` to remove the user from the user management page.

![Delete user from user management page](/static/assets/on-premise/images/manage-users-and-groups/users/delete-user-1.png)

### From user edit page

Click `Delete User` from the menu, as shown in the image, to delete the user on the user's edit page.

![Delete user from user edit page](/static/assets/on-premise/images/manage-users-and-groups/users/delete-user-2.png)

### Delete multiple users

You can select multiple users from the user management page and then click the **Delete User** button to delete them.

![Delete multiple-user by Admin](/static/assets/on-premise/images/manage-users-and-groups/users/delete-multiple-user.png)

## Deactivate users

Users can be deactivated at any time. Once deactivated, the user cannot log into Bold Reports.
Click `Deactivate User` from the menu, as shown in the image:
    ![Deactivate user account](/static/assets/on-premise/images/manage-users-and-groups/users/deactivate-user.png)

## Activate users

Inactive users can be activated by clicking on the `Active User` button in the user edit page.
    ![Activate user](/static/assets/on-premise/images/manage-users-and-groups/users/activate-user.png)

In case the user's email verification is pending, the activation can be completed by clicking the `Resend Activation Code` button in the user edit page.

This will send an account activation email to the user with an activation link to activate the account. Note that this activation link will be valid only for 2 days.

If the user has not received the activation email within 2 days or missed to activating the account, the `System Administrator` has to resend the activation email to the user.
    ![Activate user account - Resend Activation code](/static/assets/on-premise/images/manage-users-and-groups/users/activate-user-resend.png)

## Change Password

The administrator can change the user’s password from the Tenant management site as follows below,

1. Go to the UMS site by clicking on the profile, as follows:

    ![Manage Sites](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/manage-sites.png)

2. Click on the `Users` option to manage users.
    ![User Sites](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/user-sites.png)

    ![All User](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/user-sites-edit.png)

3. Click on the name of the user to change the password. After entering the new password, click the `Update` button.

    ![User Name](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/user-sites-edit-name.png)

    ![User Pwd](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/user-sites-pwd.png)

## Manage permissions

The `Manage Permissions` page for the user can be accessed from any one of the following pages:

1. Click on the `Manage Permission` icon for the respective users in the users grid on the user management page.

    ![Permission Icon](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/manage-permission-icon-user.png)

2. Click the user’s name on the user listing page to navigate to the user profile page, and then click `Manage Permissions` on the user profile page.

    ![Edit User](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/edit-user.png)

3. The `Manage Permissions` grid displays both permissions directly assigned to the user and those inherited from the assigned groups.

    ![Manage Permission](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/manage-permission-user.png)

4. Click Add Permission to add permissions to the user.

    ![Add Permission](/static/assets/on-premise/images/manage-users-and-groups/users/manage-user/add-permission-user.png)

## Steps to add permissions to users

1. Select the Entity.

2. Select the scope if the access mode is not Create or if the entity is a specific item type.

3. Select the access mode.

4. Click `Add` to add the framed permission to users.

You can also select multiple scopes and entities to assign multiple permissions. Please visit [Manage Permissions](./../../../manage-permissions/) for more information on how to add and manage permissions.

## Assign users to group

* Users can be assigned to one or many groups from the user management page.
    ![Assign group to selected users](/static/assets/on-premise/images/manage-users-and-groups/users/assign-group-to-users.png)

* Users can be assigned to an existing group.

    ![Assign existing group to selected users](/static/assets/on-premise/images/manage-users-and-groups/users/assign-group-to-users-1.png)

* A new group can also be created at this time, and the selected users can be assigned to the new group.

    ![Assign new group to selected users](/static/assets/on-premise/images/manage-users-and-groups/users/assign-group-to-users-2.png)

> **NOTE:** All the users in the group will have the permissions of the assigned group.