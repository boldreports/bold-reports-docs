---
layout: post
title: Default Authentication Option in UMS | Bold Reports
description: Learn default authentication functionality and how to configure the default authentication in User Management Server to enable or disable it.
platform: report-platform
documentation: ug
---

# Default Authentication option in User Management Server

This topic explains how to enable or disable default authentication in User Management Server.

This feature allows you to configure any third-party identity provider as your default authentication provider. Once default authentication is configured, the Bold Reports application will automatically redirect to the corresponding authentication provider's login page instead of Bold Reports's login page.

You must configure any provider and enable one of the following identity providers to configure default authentication. Otherwise, you will encounter the following options.

![No configuration](/static/assets/on-premise/images/tenant-management/site-management/authentication/no-configuration.png)

You can select any of the following provider as the default authentication provider:

[OAuth 2.0 Support](./../oauth-2.0-support/)

[OpenID Support](./../openid-settings/)

[JWT SSO](./../json-web-token/)

## Enable Default Authentication

When you enable the default authentication with any provider and then try to log in to the Bold Reports application, it will automatically redirect to that provider.

In settings page, click `Authentication` tab and select `General`.

Check the `Enable Default Authentication` option and select any provider in default authentication.

![Disable default authentication](/static/assets/on-premise/images/tenant-management/site-management/authentication/enable-default-authentication.png)

## Disable Default Authentication

When you disable the default authentication, then it directs you to the normal login page.

Unchecking the **Enable Default Authentication** option and then clicking Save will disable the [OpenID Connect default authentication](./../openid-settings/#set-openid-connect-as-default-authentication).

![Disable default authentication](/static/assets/on-premise/images/tenant-management/site-management/authentication/disable-default-authentication.png)

> **NOTE:** If you want to skip default authentication after setting it, then use '`use_default_authentication=false`' in the login URL. (ex: `https://testdomain.com/login?use_default_authentication=false`).
