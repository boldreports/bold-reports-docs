---
layout: post
title: User Account Activation | Report Server | Syncfusion
description: Learn how to activate a user or group before importing from a existing database into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Account Activation

Account Activation should be configured to activate a user or group before importing from an existing database. To manage the activation mode, click **Settings** in the Report Server left-side panel and navigate to the User tab as shown in following image.
![Open Account activation settings](/static/assets/on-premise/images/manage-users-and-groups/account-activation.png)

There are two account activation modes available in the Report Server.

## Automatic activation

When users select `Automatic Activation` mode, user accounts will be activated automatically while adding users to the Report Server. But, account activation mails will not be sent.

## Email activation

When users select `Email Activation` mode, user accounts will not be activated while adding users to the Report Server and an account activation email will be sent to the email address with activation link to activate the user management account.

The activation link sent to the user will be valid for only 3 days. If the user did not activate within 3 days, a new activation link will be sent again to the user from the user edit page. Refer to the activate users section for more details.

The account will be in inactive status until the user activates the account from the activation email.