---
layout: post
title: Configure a Password Policy in Report Server | Bold Reports
description: Customize password rules in Bold Reports Report Server, such as length and required lowercase, uppercase, number, and special characters, to match IT policy.
documentation: ug
---

# Configure a custom password policy in Bold Reports<sup>®</sup>

Bold Reports<sup>®</sup> lets you customize the password rules for user accounts so the password policy matches your organization's IT policies. The option is available from Bold Reports<sup>®</sup> v5.4.

## What can I customize in the password policy?

The Bold Reports<sup>®</sup> password policy lets you set the password length and turn character requirements on or off. You can require at least one lowercase letter, one uppercase letter, one number, and one special character.

## How do I customize the password policy?

Follow these steps to customize the password policy in Bold Reports<sup>®</sup>:

1. On the settings page, click the `Security` tab and select `User Account`.

    ![custom password settings](/static/assets/on-premise/images/tenant-management/site-administration/default-custom-password.png)

2. Set a maximum length, and enable or disable requirements such as at least one lowercase letter, an uppercase letter, a number, and a special character.

3. Click the save button to save the changes.

    The following screenshots show the password requirement settings and how the rules appear when a user enters a password.

    ![change custom password settings](/static/assets/on-premise/images/tenant-management/site-administration/change-password-requirement.png)

    ![change custom password settings](/static/assets/on-premise/images/tenant-management/site-administration/user-password.png)

    > **Note:** Users can set a minimum of 6 and a maximum of 64 characters for the length policy.

## Where does the password policy apply?

The Bold Reports<sup>®</sup> password policy works wherever passwords are required on the site. The rules apply in the following places where a user password is created:

* When adding users.
* When resetting a user's password.
* When activating a user account.

## Frequently asked questions

### What password length can I set in Bold Reports<sup>®</sup>?

The Bold Reports<sup>®</sup> length policy accepts a minimum of 6 and a maximum of 64 characters.

### Which Bold Reports<sup>®</sup> version added the custom password policy?

The option to customize password rules for user accounts was provided in Bold Reports<sup>®</sup> v5.4.

## See also

* [Account settings](../account-settings/)
* [Two-factor authentication](../../two-factor-authentication/)
* [Manage users](../../../manage-users/users/manage-users/)
