---
title: Configure Gmail SMTP Server in Email Settings | Bold Reports
description: Configure the Gmail SMTP server in Email Settings of Bold Reports On-Premises Edition with smtp.gmail.com on port 587 so Report Server sends email from Gmail.
keywords: report-platform
---

# How to configure Gmail SMTP Server in Email Settings

To use Gmail as the SMTP server in Bold Reports<sup>®</sup> On-Premises Edition, allow less secure apps access in Google, then save the Gmail SMTP details in Email Settings.

## What do I need to do in my Google account first?

To send emails from your Gmail SMTP with Bold Reports<sup>®</sup>, you must allow `less secure apps access` in your Google account.

Follow these steps to enable less secure apps access:

1. Log in to your Google account.
2. Go to the [Google less secure apps settings page](https://myaccount.google.com/lesssecureapps) and enable the access.
3. Wait a few minutes. The changes do not take place immediately, because Google takes a few minutes to update the settings.

## Which Gmail SMTP Server details do I enter?

Save the following Gmail SMTP Server details in the [email settings](./../../manage-app-settings/email-account-settings/email-settings/) of Bold Reports<sup>®</sup> On-Premises Edition:

**SMTP Server** - `smtp.gmail.com`

**SMTP Port** - `587`

**Sender Name** - `Bold Reports Server`

**Sender Email Address** - `Your Gmail Address`

**Authentication Type** - `Basic Authentication`

**Username** - `Your Gmail Address`

**Password** - `Your Gmail Password`

**Enable SSL** - `True`

>`Anonymous Authentication` is not supported in the Gmail SMTP Server.

## Frequently asked questions

### Which port does the Gmail SMTP Server use in Bold Reports<sup>®</sup>?

Use SMTP Port `587` with SMTP Server `smtp.gmail.com` and set **Enable SSL** to `True`.

### Can I use Anonymous Authentication with Gmail?

No. `Anonymous Authentication` is not supported in the Gmail SMTP Server. Use `Basic Authentication` with your Gmail address and password.

## See also

* [Email settings](./../../manage-app-settings/email-account-settings/email-settings/)
* [Office 365 account settings](./../../manage-app-settings/email-account-settings/office-365-account/)
* [Amazon email service settings](./../../manage-app-settings/email-account-settings/amazon-email-service/)
