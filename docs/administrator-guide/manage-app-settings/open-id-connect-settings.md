---
layout: post
title: OpenID Connect settings | Report Server | Syncfusion
description: Describes step-by-step procedure to configure OpenId connect settings, so that the user can login to the BoldReport application.
platform: report-platform
documentation: ug
---

# OpenID Connect support in BoldReports

The Bold Reports application can be configured to support OpenID Connect for Single Sign-On (SSO), allowing users to log in directly to the Bold Reports application after authenticating using OpenID Connect.

## Prerequisites

1. An account with an OpenID Connect provider.

2. Register the Bold Reports application in the OpenID Connect provider.

## Steps to configure OpenID Connect in BoldReports

1. Click the **Settings** option in the left-side panel of the Report Server.

2. Navigate to the `Authentication` tab and `OpenID Connect` as shown in the following image
    ![Active Directory Settings](/static/assets/on-premise/images/settings/authentication-settings.png)

    ![Active Directory Settings](/static/assets/on-premise/images/settings/openid-connect-authentication.png)

3. Provide the following details in the OpenID Connect settings of BoldReports application.
<table>
<tr>
    <td>
        Provider Name
    </td>
    <td>
        It represents the name of the authentication provider to be displayed on the login page.
    </td>
</tr>
<tr>
    <td>
        Provider Logo
    </td>
    <td>
        It represents the logo of the authentication provider to be displayed on the login page.
    </td>
</tr>
<tr>
    <td>
        Authority
    </td>
    <td>
        It is the instance created within the provider for the user.
    </td>
</tr>
<tr>
    <td>
        Client ID
    </td>
    <td>
        It is a unique identifier provided to each of the applications while registering with the providers.
    </td>
</tr>
<tr>
    <td>
        Client Secret
    </td>
    <td>
        It is a secret key used to authorize the applications.
    </td>
</tr>
<tr>
    <td>
        Identifier
    </td>
    <td>
        It is the property name that stores the email address of the user in the deserialized ID token.
    </td>
</tr>
</table>

> **Note:** Please refer to the [OpenID Connect authentication](./../../authentication/single-sign-on/openid-connect/) documentation for more information.