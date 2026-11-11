---
layout: post
title: View and Manage Your User Profile | Bold Reports
description: View and edit your Bold Reports user profile, change or reset your password, enable two-factor authentication, view permissions, and set notifications.
platform: report-platform
documentation: ug
---

# Manage your user profile in Bold Reports<sup>®</sup>

On the Bold Reports<sup>®</sup> user profile page, you can view and manage your profile, security, permissions, access tokens, and notification settings. The options are:

* Profile details
* Security
* My permissions
* Personal Access Token
* Edit notification settings
* Forgot password

## Profile details

The Bold Reports<sup>®</sup> profile details section lets you view the profile, edit the profile details, and change the password.

### How do I view my profile?

To view your profile details, click the Profile icon located in the top-right corner of the Bold Reports<sup>®</sup> Report Server menu bar.
![View user profile details](/static/assets/on-premise/images/user-profile/view-user-profile.png)

### How do I edit my profile?

You edit your profile details in your Bold Reports<sup>®</sup> account. Follow these steps:

1. Click `Bold Reports Account` on the profile page.
    ![Bold Reports<sup>®</sup> Account](/static/assets/on-premise/images/user-profile/bold-reports-account.png)

2. Edit the Username, First name, Last name, Phone number, and Profile picture of your account.
    ![Edit user profile options](/static/assets/on-premise/images/user-profile/edit-user-profile.png)

#### Upload Profile Picture

You can update or delete your Bold Reports<sup>®</sup> profile picture from your profile.

* To update your profile picture, click the pencil icon on your profile, upload the image, and click save.
    ![Edit user profile](/static/assets/on-premise/images/user-profile/edit-picture.png)
    ![Save profile picture](/static/assets/on-premise/images/user-profile/save-picture.png)

* To delete your profile picture, click the delete icon on your profile and proceed with `Yes`.
    ![Delete Profile](/static/assets/on-premise/images/user-profile/delete-profile.png)

#### Account Preference

In the Bold Reports<sup>®</sup> account preference, set the language preference for your profile.
    ![Account Preference](/static/assets/on-premise/images/user-profile/account-preference.png)

## Security

In the Bold Reports<sup>®</sup> Security section, you update your password and enable 2FA for your account.

### How do I change my password?

You change your Report Server login password from the Bold Reports<sup>®</sup> Security section. Follow these steps:

1. Click **Change Password**.
    ![Change password button](/static/assets/on-premise/images/user-profile/change-password-button.png)

2. Set a new password, and then click **Save**.
    ![Change user login password](/static/assets/on-premise/images/user-profile/edit-user-password.png)

## Two Factor Authentication

Bold Reports<sup>®</sup> two-factor authentication (2FA) adds a verification code to your login. To learn about the implementation of 2FA in Bold Reports<sup>®</sup>, see the [Two-Factor Authentication Guide](../manage-sites/two-factor-authentication/).

### How do I enable two-factor authentication?

You enable 2FA for your Bold Reports<sup>®</sup> account from the Two-Factor Authentication tab. Follow these steps:

1. Go to the Two-Factor Authentication tab under the security section.
2. Click Enable Two-Factor Authentication.
    ![Two factor authentication tab](/static/assets/on-premise/images/tenant-management/two-factor-authentication-tab.png)

3. In the authenticator application, scan the QR code or manually enter the key shown under the QR code. The authenticator application adds your user account.
    ![Enable two factor authentication](/static/assets/on-premise/images/tenant-management/enable-two-factor-authentication.png)

4. Enter the verification code shown in the authenticator application and click **Activate**.
    ![2FA authentication configuration code](/static/assets/on-premise/images/tenant-management/two-factor-authentication-configuration-code.png)

5. Copy the recovery codes and store them in a safe place. After you enable 2FA, 10 recovery codes are generated.
    ![2FA authentication recovery code](/static/assets/on-premise/images/tenant-management/two-factor-authentication-recovery-code.png)

> **NOTE**: Each recovery code can be used only once. To get new recovery codes, use the `Regenerate Recovery Code` option in your profile.

### How do I disable two-factor authentication?

You disable 2FA for your Bold Reports<sup>®</sup> account from the same tab. Follow these steps:

1. Click `Remove Two-Factor Authentication`.
    ![Remove two factor authentication](/static/assets/on-premise/images/tenant-management/2fa-remove-with-code.png)

2. Enter the verification code shown in the authenticator application for the account and click **yes**.
    ![Two factor authentication remove dialog](/static/assets/on-premise/images/tenant-management/2fa-remove-with-code-dialogbox.png)

## My permissions

The Bold Reports<sup>®</sup> My permissions section shows your access permission list for each resource, such as reports, data sources, files, and schedules, in the Report Server.
![View user access permissions](/static/assets/on-premise/images/user-profile/view-permission.png)

## Personal Access Token

A Bold Reports<sup>®</sup> authentication token can be used in API requests or other interactions with the Report Server to authenticate and authorize access to its resources. For more information on how to generate an authentication token, see the [Generate Authentication Token Guide](../../developer-guide/how-to/generate-authentication-token-for-bold-reports-server/).

## Edit notification settings

In the Bold Reports<sup>®</sup> Report Server, you can configure your own notification preferences and view or edit the following notification settings:

* System notifications
* Mail notifications
* Auto watch for comments of created items
* Auto watch for comments of accessible items

    ![View and edit notification settings](/static/assets/on-premise/images/user-profile/edit-notification-settings.png)

### Which notifications can I configure?

The Bold Reports<sup>®</sup> Report Server provides the following notifications:

1. **System notifications**

    * System notifications appear near the user's profile picture, as shown in the following image.
        ![Check notification](/static/assets/on-premise/images/user-profile/check-notification.png)

    * Users can navigate to the particular comment by clicking the report name in the notification section. To configure the user notification settings, users can navigate to the profile page by clicking settings.

        ![Click notification](/static/assets/on-premise/images/user-profile/click-notification.png)

2. **Mail notifications**

    Enabling the mail notifications option notifies users through email for comments, permissions, schedules, views, user(s) and group(s) (manual and schedule) synchronization, and user account activation.

3. **Auto watch comments of created items**

    Enabling the option sends notifications for comments on all the items created by users.

4. **Auto watch comments of accessible items**

    Enabling the option sends notifications for comments on all the items that are accessed by users.

5. **Report schedule notification**

    Enabling or disabling the report schedule button lets you restrict the email notifications for scheduled reports.

6. **User schedule notification**

    Enabling or disabling the user schedule button lets you restrict the email notifications for admin users.

7. **Specific watch**

    Apart from the auto-watch of newly created and accessible item settings, users can also watch an item specifically.
    ![Specific Watch](/static/assets/on-premise/images/user-profile/specific-watch.png)
> You can toggle between a watch and unwatch for a report comment at any time.

### Inherit from global settings

To use the same settings as the Bold Reports<sup>®</sup> site notification settings, enable the **Inherit from global settings** option.
    ![Inherit Global settings](/static/assets/on-premise/images/user-profile/global-settings.png)

## Forgot Password

If you have forgotten your Bold Reports<sup>®</sup> password, you can reset it by following these steps:

1. Click the **Cannot access your account?** option on the login page.
    ![Login Page](/static/assets/on-premise/images/user-profile/login-page.png)

2. Enter your email to receive the reset password link.
3. Click `Send recovery link`.
    ![Send Recovery Link](/static/assets/on-premise/images/user-profile/send-recovery-link.png)

4. Check your inbox. You will receive an email to reset the password.
    ![Reset-Password-link](/static/assets/on-premise/images/user-profile/reset-link.png)

5. Click the link in the email you received, and reset the password.
    ![Reset-Password-Page](/static/assets/on-premise/images/user-profile/reset-password-page.png)

## Frequently asked questions

### How many recovery codes does Bold Reports<sup>®</sup> generate for 2FA?

Bold Reports<sup>®</sup> generates 10 recovery codes after you enable 2FA. Each recovery code can be used only once.

### How do I reset a forgotten password?

Click **Cannot access your account?** on the Bold Reports<sup>®</sup> login page, enter your email, and click `Send recovery link`. Then, reset the password from the link in the email.

## See also

* [Two-factor authentication](../manage-sites/two-factor-authentication/)
* [Manage users](../manage-users/users/manage-users/)
* [Manage permissions](../manage-permissions/)
