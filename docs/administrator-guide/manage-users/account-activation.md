---
layout: post
title: User Account Activation | Report Server | Syncfusion
description: Learn how to activate a user or group before importing from a existing database into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Account Activation

Account activation should be configured to activate a user before importing from an existing database. To manage the activation mode, click on **Settings** in the left-side panel of the Report Server and navigate to the `Accounts` tab, as shown in the following image.

![Open Account activation settings](/static/assets/on-premise/images/manage-users-and-groups/account-activation.png)

## Account activation modes

There are two account activation modes available in the Bold Reports Report Server.

## Automatic activation

When user activation is set to `Automatic Activation` mode, user accounts will be activated automatically when added in the Bold Reports Server. However, account activation emails will not be sent.

## Email activation

When user activation is set to `Email Activation` mode in the Bold Reports Server, user accounts will not be activated upon addition, and an account activation email will be sent to the provided email address containing an activation link to activate the user account.

The activation link sent to the user will be valid for only 3 days. If the user does not activate within this timeframe, a new activation link will be sent to the user again from the user edit page. For further details, refer to the [activate users](./../../manage-users/users/manage-users/#activate-users) section.

The account will remain in an inactive status until the user activates it from the activation email.

> **Note:** By default, the setting will be `Automatic`.

![Default Activation Mode](/static/assets/on-premise/images/manage-users-and-groups/default-mode.png)

## User Email

This setting controls whether an email address is required for creating new users or not.

## Email required

When the user email setting is set to `Required` mode, an email address is mandatory for adding users in the Bold Reports server.

> **Note:** When the account activation preference is set to email, an email address is mandatory for activating the account.

## Email not required

When the user email setting is set to `Not required` mode, an email address is not mandatory for adding users in the Bold Reports server.

> **Note:** By default, the setting will be `Required`.

![Email Default Mode](/static/assets/on-premise/images/manage-users-and-groups/email-default-mode.png)