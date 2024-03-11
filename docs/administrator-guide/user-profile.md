---
layout: post
title: User profile settings | Report Server | Syncfusion
description: Edit and manage user profile options such as view permissions, change password, and edit profile or notification settings.
platform: report-platform
documentation: ug
---

# User Profile

This section describes the options available for users to view and manage their profiles. The options are:

* View profile
* Edit profile
* View permissions
* Change password
* Edit notification settings
* Edit Viewer / Designer preference

## View profile

To view your profile details, click the `Profile` icon in the Report Server left-side panel.
![View user profile details](/static/assets/on-premise/images/user-profile/view-user-profile.png)

## Edit profile

User can edit their profile details in Bold Reports account. Click `Bold Reports Account` in profile page.
![Bold Reports Account](/static/assets/on-premise/images/user-profile/bold-reports-account.png)

You can edit and change the first name, last name, phone number, and profile picture of your account.
![Edit user profile options](/static/assets/on-premise/images/user-profile/edit-user-profile.png)

## Security

In the Security section, update your password and enable 2FA for your account.

## Change password

To change the user password to log in to the Report Server, click **Change Password**.
![Change password button](/static/assets/on-premise/images/user-profile/change-password-button.png)

Set new password, and then click **Save**.
![Change user login password](/static/assets/on-premise/images/user-profile/edit-user-password.png)

## Two Factor Authentication

Please refer to this [link](../manage-tenants/two-factor-authentication/) to learn about the implementation of 2FA in Bold Reports.

### Enable Two Factor Authentication

1. Go to the Two-Factor Authentication tab under the security section.
2. Click on Enable Two-Factor Authentication.
![Two factor authentication tab](/static/assets/on-premise/images/tenant-management/two-factor-authentication-tab.png)

3. After that, using the authenticator application, you can either scan the QR code or manually enter the key shown under the QR code. This will add your user account to the authenticator application.
![Enable two factor authentication](/static/assets/on-premise/images/tenant-management/enable-two-factor-authentication.png)

4. Enter the verification code shown in the authenticator application and click **Activate**.
![2FA authentication configuration code](/static/assets/on-premise/images/tenant-management/two-factor-authentication-configuration-code.png)

5. After enabling it, 10 recovery codes will be generated. Copy the recovery codes and store them in a safe place.
![2FA authentication recovery code](/static/assets/on-premise/images/tenant-management/two-factor-authentication-recovery-code.png)

> **NOTE**: Each recovery code can be used only once. To get new recovery codes, use the `Regenerate Recovery Code` option in your profile.

### Disable Two Factor Authentication

1. To disable 2FA, click on `Remove Two-Factor Authentication`.
![Remove two factor authentication](/static/assets/on-premise/images/tenant-management/2fa-remove-with-code.png)

2. Enter the verification code shown in the authenticator application for the account and click **yes**.
![Two factor authentication remove dialog](/static/assets/on-premise/images/tenant-management/2fa-remove-with-code-dialogbox.png)

## My permissions

You can view your access permission list for each resources like reports, data sources, files, and schedules in the Report Server.
![View user access permissions](/static/assets/on-premise/images/user-profile/view-permission.png)

## Edit notification settings

You can view and edit the following notification settings in the Report Server:

* System notifications
* Mail notifications
* Auto watch for comments of created items.
* Auto watch for comments of accessible items.

![View and edit notification settings](/static/assets/on-premise/images/user-profile/edit-notification-settings.png)

## Edit Viewer / Designer preference

1. Go to user profile page by clicking the Profile icon in the Report Server.  
    ![View user profile details](/static/assets/on-premise/images/user-profile/user-profile.png)

2. Go to Viewer / Designer preference.
    ![Viewer preference](/static/assets/on-premise/images/user-profile/user-preference.png)

3. You can modify the preference of the Viewer / Designer by clicking the `Edit` button as shown in the below images. After the details have been edited, click the `Save` button.
    ![Edit user preference](/static/assets/on-premise/images/user-profile/edit-preference.png)
    ![Switch user preference](/static/assets/on-premise/images/user-profile/switch-viewer.png)
    > The report will be displayed according to the preference you choose in the Viewer / Designer preference.