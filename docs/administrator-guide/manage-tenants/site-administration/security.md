---
layout: post
title: Custom password policy in Bold Reports | Report Server
description: Learn how to customize the password. Using this option, organizations can customize the password policy to match their IT policies.
documentation: ug
---

# Password Policy Configuration

* In Bold Reports v5.4, we have provided the option to customize the password rules for user accounts.
* Using this option, organizations can customize the password policy to match their IT policies.

## Follow these steps to customize the password

1. In the settings page, click the `Security` tab and select `User Account`.

    ![custom password settings](/static/assets/on-premise/images/tenant-management/site-administration/default-custom-password.png)

2. Users can set a maximum length and enable or disable requirements like at least one lowercase letter, an uppercase letter, a number, and a special character, and click the save button to save the changes.

    ![change custom password settings](/static/assets/on-premise/images/tenant-management/site-administration/change-password-requirement.png)

    ![change custom password settings](/static/assets/on-premise/images/tenant-management/site-administration/user-password.png)

    > **Note:** Users can set a minimum of 6 and a maximum of 64 character limits for the length policy.

3. This password policy will work wherever passwords are required on the site. These rules will be applied to the below user password creation places.
    * When adding users
    * When resetting the user password.
    * When activate the user account.