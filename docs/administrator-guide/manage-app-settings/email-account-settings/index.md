---
layout: post
title: Configure Email Accounts in Report Server | Bold Reports
description: Configure email in Bold Reports Report Server with an SMTP, Microsoft Office 365 OAuth, or Amazon SES account, and view email activity logs and templates.
platform: report-platform
documentation: ug
---

# Email account settings in Bold Reports<sup>®</sup> Report Server

The Bold Reports<sup>®</sup> Report Server sends emails through an SMTP, Microsoft Office 365, or Amazon SES account that you configure in the email settings. Choose the account type below to see its configuration steps.

## Which email accounts can I configure in Report Server?

Bold Reports<sup>®</sup> Report Server supports the following email accounts and email tools:

* [SMTP Account](./../email-account-settings/email-settings/)

* [Microsoft Office 365 Account with OAuth authentication](./../email-account-settings/office-365-account/)

* [Amazon SES](./../email-account-settings/amazon-email-service/)

* [Email Activity Logs](./../email-account-settings/email-activity-logs/)

* [Email Templates](./../email-account-settings/email-templates/)

## Which operations need email settings in Report Server?

Bold Reports<sup>®</sup> Report Server requires email settings to perform the following operations:

<table>
<tr>
    <td>Account activation</td>
    <td>Sending user account activation emails.</td>
</tr>
<tr>
    <td>Forgot password</td>
    <td>Provide request links to reset passwords for users who have forgotten them.</td>
</tr>
<tr>
    <td>Reset password</td>
    <td>Sending links to facilitate password resets.</td>
</tr>
<tr>
    <td>Schedule and deliver reports</td>
    <td>Distributing exported reports to scheduled recipients.</td>
</tr>
</table>

## See also

* [Configure SMTP email settings](./../email-account-settings/email-settings/)
* [Configure Microsoft Office 365 email with OAuth](./../email-account-settings/office-365-account/)
* [Customize email templates](./../email-account-settings/email-templates/)
