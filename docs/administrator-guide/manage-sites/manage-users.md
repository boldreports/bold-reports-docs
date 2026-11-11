---
title: Add, Edit, and Delete Users in UMS | Bold Reports
description: Add, import, edit, activate, and delete users, reset passwords, manage 2FA, and grant site access in the Bold Reports User Management Server (UMS).
platform: report-platform
documentation: ug
---

# Manage users in Bold Reports<sup>®</sup> User Management Server

In the Bold Reports<sup>®</sup> User Management Server (UMS), administrators can add, update, activate, and delete users.

Only users with UMS admin access can add, edit, or delete users.

## How do I add new users?

You add new users to the Bold Reports<sup>®</sup> UMS individually or in bulk by using CSV import.

### Add individual users

To add a new user in the Bold Reports<sup>®</sup> UMS, click `New User` and then `Add User` from the User Management page.

The following images show the `Add User` dialog and the success prompt.

![Add User Dialog Proceed](/static/assets/on-premise/images/tenant-management/add-user-dialog-proceed.png)

![Add User Dialog](/static/assets/on-premise/images/tenant-management/add-user-dialog-save.png)

![Add User Dialog](/static/assets/on-premise/images/tenant-management/add-user-success-prompt.png)

> **NOTE:**  
> * If the account activation mode is set to Automatic, new users will be activated automatically.
> * If the activation type is set to Email, users will receive an email to activate their account. Activation will occur after verifying the email. By default, the Account Activation Mode is set to Automatic.
> * For more details, see the [Account settings](./../site-administration/account-settings/) page.

| Automatic activation                   | Email activation          |
| -------------             | ------------- |
| Fill out the form with a Username, Email address, First name, Last name and Password, then click `Add`.  | Fill out the form with a Username, Email address, First name and Last name and then click on `Add`.        |
| See the [password requirements](#password-requirement) section. | To activate the user, please check the [Activate Users](#activate-users) section for more details. |

### How do I import users from a CSV file?

You can import users into the Bold Reports<sup>®</sup> UMS from a CSV file, which you download from the designated location in UMS.

To automate the process of adding a large number of users to UMS, you can download the CSV template file, add the users to it, and then import the file.

#### Add users from CSV file

In the Bold Reports<sup>®</sup> UMS, click `Import from csv` to begin importing the CSV file.

![Import from CSV - Goto Import CSV users page](/static/assets/on-premise/images/tenant-management/goto-import-csv-users.png)

### CSV file Requirements

The first row in the Bold Reports<sup>®</sup> UMS CSV template should contain the column headings. UMS assumes that the data from the second line in the file represents the user information, and the following columns are mandatory in the downloaded CSV file:

**Automatic Activation**|**Email Activation**
:-----:|:-----:
Username|Full Name
Full Name|Email
Password|-

To add users with the CSV template, follow these steps:

1. Download the CSV template.

    ![Import from CSV - Download CSV template](/static/assets/on-premise/images/tenant-management/download-csv-template.png)

2. Add users to the CSV file, save the file, and then upload it.

    ![Import from CSV - Add users into CSV file](/static/assets/on-premise/images/tenant-management/csv-import-add-users.png)

3. After you upload the file, the user details are displayed in the grid, as shown in the following images. Click **Import Users** to add the users.

    ![Upload CSV file](/static/assets/on-premise/images/tenant-management/click-upload.png)

    ![Import from CSV - User detail in grid](/static/assets/on-premise/images/tenant-management/csv-import-proceed.png)

4. After the users are uploaded in UMS, the results are displayed as shown in the following image.

    ![Import from CSV - Success Message](/static/assets/on-premise/images/tenant-management/csv-import-success-prompt.png)

### Password Requirement

A Bold Reports<sup>®</sup> UMS user password must meet the following requirements:

It must contain:

* At least 6 characters,
* 1 uppercase letter,
* 1 lowercase letter,
* 1 numeric digit,
* 1 special character.

![Password Requirement](/static/assets/on-premise/images/tenant-management/user-add-dialog-password-validation.png)

## Activate users

After you add a user in the Bold Reports<sup>®</sup> UMS, a new account is created, and an account activation email is sent to the email address provided, containing an activation link to activate the Bold Reports<sup>®</sup> account.

The activation link sent to the user will be valid only for 2 days. If the user does not activate within this period, a new activation link can be sent to the user from the user edit page.

The account will remain inactive until the user activates it from the activation email.

## How do I edit a user?

You edit user profile details in the Bold Reports<sup>®</sup> UMS on the user edit page, as shown in the following images.

![Click UMS Profile](/static/assets/on-premise/images/tenant-management/click-ums-profile.png)

![Click Edit Profile](/static/assets/on-premise/images/tenant-management/edit-user-proceed.png)

The Username, First name, Last name, Phone number, and Profile picture of the user can be edited.

![Edit User Profile](/static/assets/on-premise/images/tenant-management/edit-user.png)

## How do I change a user's password?

In the Bold Reports<sup>®</sup> UMS, administrators can reset or create a password for users who forget their password or want a new one. See the [password requirements](#password-requirement) section.

The password change functionality is available for the following types of users:

* **Local Users:** Users created and managed within Bold Reports<sup>®</sup>.
* **Windows Active Directory (AD) Users:** Users imported from a configured Windows AD domain.

### How do local users change their password?

Bold Reports<sup>®</sup> local users can change their password directly from the **User Profile** section in the application.

### How do Windows AD users change their password?

Starting from **version 12.1.5**, **Bold Reports<sup>®</sup>** also supports changing the password for **Windows AD users** within the application.

* AD users can now **set or update their password** using the same interface used by local users.
* Once a new password is created or updated, it can be used to log in to the Bold Reports<sup>®</sup> application directly.

> **Note:** The newly created password for a Windows AD user is used **only within the Bold Reports<sup>®</sup> application** and does **not update the password in the actual Active Directory domain**.

![Change Password](/static/assets/on-premise/images/tenant-management/change-password.png)

## How do I manage two-factor authentication for a user?

Bold Reports<sup>®</sup> users can enable [2FA](./../../user-profile/#two-factor-authentication) for their accounts. If a user loses their recovery code or authenticator application, the admin can disable 2FA or generate a new set of codes for them. Use the Two-Factor Authentication tab in the security section.

### How do I regenerate a recovery code for a user?

To regenerate the recovery code for a user in the Bold Reports<sup>®</sup> UMS, go to the Two Factor Authentication tab in the user details and click `Regenerate Recovery Code`.

![Generate Two Factor Authentication Code](/static/assets/on-premise/images/tenant-management/generate-recovery-code.png)

Click `Yes` to generate a recovery code. Copy the newly generated code and share it with the user.

![Generate Recovery Code](/static/assets/on-premise/images/tenant-management/recovery-code-generated.png)

### How do I disable two-factor authentication for a user?

To disable Two-Factor Authentication for a user in the Bold Reports<sup>®</sup> UMS, click the **Remove Two-Factor Authentication** option, then confirm by selecting `Yes`.

![Remove Two Factor Authentication](/static/assets/on-premise/images/tenant-management/remove-two-factor.png)

## How do I delete users?

You delete users from the Bold Reports<sup>®</sup> UMS when they no longer require access. The `System Administrator` can delete users from the user management page.

![Delete user by Admin](/static/assets/on-premise/images/tenant-management/delete-user.png)

> **Note:**  Once a user is deleted by the System Administrator, their access will be revoked from the sites they belong to.

## How do I grant users access to multiple sites?

In the Bold Reports<sup>®</sup> UMS, you select single or multiple users in user management to provide access to multiple sites.

![Grant User Access](/static/assets/on-premise/images/tenant-management/grant-user-access-proceed.png)

Select the sites to which you need to provide access to the selected users, and then click the `Grant Access` button to proceed.

![Grant Access Select Sites](/static/assets/on-premise/images/tenant-management/grant-access-select-site.png)

> **NOTE:**  If the selected user already has access to that site, the process will be skipped.

After the process is completed, you can view a detailed report on it and download the report in CSV format.

![Grant Access Select Sites](/static/assets/on-premise/images/tenant-management/grant-access-report.png)

To revoke access to the site, follow the steps in [Revoke access](./../manage-sites/#revoke-access).

## Frequently asked questions

### How long is the account activation link valid?

The activation link sent to the user is valid only for 2 days. After that, you can send a new activation link from the user edit page.

### Does changing a Windows AD user's password update Active Directory?

No. The new password is used only within the Bold Reports<sup>®</sup> application and does not update the password in the actual Active Directory domain.

## See also

* [Account settings](./../site-administration/account-settings/)
* [Manage sites](./../manage-sites/)
* [Manage admin access](./../manage-admin-access/)
