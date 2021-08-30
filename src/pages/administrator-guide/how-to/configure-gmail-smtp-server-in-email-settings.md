---
title: Configure Gmail SMTP Server in Email Settings | Bold Reports
description: This documentation explains how to configure the Gmail SMTP Server in Email Settings of Bold Reports On-Premise.
keywords: report-platform
---

# How to configure Gmail SMTP Server in Email Settings

This section explains about how to configure the Gmail SMTP Server in Email Settings of Bold Reports On-Premise.

## Gmail SMTP Server Details

* To send emails from your Gmail SMTP, you must allow `less secure apps access` in your google account.

* Follow below steps to enable less secure apps access.

   1. Login to your google account.
   2. Navigate to this [link](https://myaccount.google.com/lesssecureapps) and enable the access.
   3. The changes will not takes place as immediately. Hence, let we wait for an few minutes to update the settings by google.

* We have to save below Gmail SMTP Server details in the [email settings](./../../manage-app-settings/email-settings/) of Bold Reports On-Premise.

    **SMTP Server** - `smtp.gmail.com`

    **SMTP Port** - `587`

    **Sender Name** - `Bold Reports Server`

    **Sender Email Address** - `Your Gmail Address`

    **Authentication Type** - `Basic Authentication`

    **Username** - `Your Gmail Address`

    **Password** - `Your Gmail Password`

    **Enable SSL** - `True`

    >`Anonymous Authentication` is not supported in the Gmail SMTP Server.