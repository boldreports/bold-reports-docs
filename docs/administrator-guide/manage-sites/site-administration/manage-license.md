---
layout: post
title: Update Your License Online or Offline in UMS | Bold Reports
description: Update your Bold Reports Enterprise license online with the Bold ID account linked to your subscription, or offline with a license file or unlock key.
platform: report-platform
documentation: ug
---

# Manage license in Bold Reports<sup>®</sup>

You can update the license in Bold Reports<sup>®</sup> Enterprise manually from the **Manage License** page in the Bold ID UMS application, either online or with a license file.

## How do I open the Manage License page?

To open the Bold Reports<sup>®</sup> Manage License page, follow these steps:

1. Open your Bold ID UMS application URL and log in with the Site Administrator account.

2. Go to `Settings` -> `Manage License`.

   ![License Update Settings](/static/assets/on-premise/images/tenant-management/site-management/manage-license-page.png)

3. Choose your preferred mode to update the license.

   1. [Update license from online](#update-license-from-online)
   2. [Update license from license file](#update-license-from-license-file)

## Update license from Online

To update the Bold Reports<sup>®</sup> license online, follow these steps:

1. On the Manage License page, click `Edit Subscription`.

   ![License Update Settings](/static/assets/on-premise/images/tenant-management/site-management/edit-subscription.png)

2. Click `Sign in` to change the subscription.

   ![Sign in page](/static/assets/on-premise/images/tenant-management/site-management/sign-in-online.png)

3. In the login pop-up, log in with your Bold ID account linked with your Bold Reports<sup>®</sup> subscription.

   ![License Update Login Popup](/static/assets/on-premise/images/tenant-management/site-management/update-license-login-popup.png)

After you log in successfully, the license is updated in the application.

## Update license from License file

To update the Bold Reports<sup>®</sup> license in firewall-restricted environments, use the offline unlock key to activate the account. Download your offline unlock key from the [Bold Reports<sup>®</sup> account downloads page](https://www.boldreports.com/account/downloads?tab=self-service).

   > To learn how to get your offline license key from the Bold Reports<sup>®</sup> accounts page, see the [KB article on getting your offline license key](https://support.boldreports.com/kb/article/13271/how-do-i-get-my-offline-license-key-from-our-bold-reports-account-page).

Then, follow these steps:

1. Click the `Upload` option to upload your license file.

   ![Upload Offline License](/static/assets/on-premise/images/tenant-management/site-management/upload-offline.png)

2. Select your license file in the dialog.

   ![License Upload Dialog](/static/assets/on-premise/images/tenant-management/site-management/license-upload-dialog.png)

3. After uploading the unlock key, click the **Update License** button to update the license.

   ![Upload License](/static/assets/on-premise/images/tenant-management/site-management/upload-license.png)

### What errors can occur when I upload a license file?

The following table lists Bold Reports<sup>®</sup> license file errors and their solutions.

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Cases</span>
    </td>
     <td>
        <span style="font-weight:bold">Solution</span>
    </td>
 </tr>
 <tr>
 <td> Invalid File Type </td>
 <td> Please ensure that you upload the valid unlock key file (.lic) that was downloaded from <a href ="https://www.boldreports.com/account/downloads?tab=self-service" target="_blank">here</a>. </td>
 </tr>
 <tr>
 <td> Unlock Key Expired </td>
 <td> Your unlock key has expired. Please download the new unlock key file from <a href ="https://www.boldreports.com/account/downloads?tab=self-service" target="_blank">here</a>. </td>
 </tr>
 </table>

## How do I get help with license issues?

If you face any issues with your Bold Reports<sup>®</sup> license, [contact Syncfusion<sup>®</sup> support](https://www.syncfusion.com/support/directtrac/incidents/newincident) for assistance.

> **Note:** For instructions on activating your account during application startup, see [Application startup](./../../../../application-startup/).

## Frequently asked questions

### How do I update the license in a firewall-restricted environment?

Use the offline unlock key. Download it from the Bold Reports<sup>®</sup> account downloads page, upload the license file, and click **Update License**.

### What should I do if my unlock key has expired?

Download the new unlock key file from the Bold Reports<sup>®</sup> account downloads page and upload it.

## See also

* [Application startup](./../../../../application-startup/)
* [Site administration overview](./../)
