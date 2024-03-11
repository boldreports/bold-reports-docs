---
layout: post
title: OpenID Connect in Bold Reports Enterprise Reporting
description: Describes step-by-step procedure to configure OpenId connect settings, so that the user can login to the Bold Reports application.
platform: report-platform
documentation: ug
---

# Single Sign-On (SSO) with OpenID Connect authentication

The Bold Reports application can be configured with OpenID Connect for Single Sign-On (SSO), so that users can log in directly to the Bold Reports application after authenticating using OpenID Connect.

## Prerequisites

1. An account with an OpenID Connect provider.

2. Register the Bold Reports application with the OpenID Connect provider.

## Steps to configure OpenID Connect in Bold Reports

1. Login to Bold Reports with an admin credential.

2. Click the settings in the Report Server left-side menu.

3. Navigate to the Authentication tab and OpenID Connect, as shown in the following image.

    ![Authentication Settings](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/authentication-settings.png)
    ![OpenID Connect Authentication](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/openid-connect-authentication.png)

4. Provide the following details in the `OpenID Connect` settings of the Bold Reports application:
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

   ![OpenID Connect Authentication](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/openid-connect.png)

The previously mentioned similar steps are applicable to configure OpenID Connect in User Management Server by logging into the URL `{Bold Reports URL}/ums/administration/sso?view=openid-settings` with an admin credential.

Following is a list of few OpenID Connect providers, and that explains how to connect with the Bold Reports application.

* [Auth0](./../openid-connect/auth0/)
* [Okta](./../openid-connect/okta/)
* [OneLogin](./../openid-connect/onelogin/)
* [keycloak](./../openid-connect/keycloak/)

OpenID Connect is provided on both the Bold Reports sites and the User Management Server. It can be managed individually for each site on the settings page by disabling the option, as shown in the following screenshot.

![OpenId Global Authentication Control](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/openid-global-authentication-control.png)

## Set OpenID Connect as Default Authentication

OpenID Connect can be set as the default authentication when [OpenID Connect](#steps-to-configure-openid-connect-in-bold-reports) settings are enabled and saved. Follow the below steps.
1. In the settings page, click the Authentication tab and select General.
2. Enable the option **Enable Default Authentication** and select **OpenID Connect** as the default authentication provider, as shown in the following screenshot.
![OpenId Default Setting](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/openid-default-authentication.png)

### Disabling OpenID Connect Settings

When OpenID Connect is set as the default authentication and you try to disable the [OpenID Connect settings](#steps-to-configure-openid-connect-in-bold-reports), a pop-up will appear below. Proceed by clicking `Yes` to disable the [OpenID Connect default authentication](#set-openid-connect-as-default-authentication).

![OpenId Default Setting Popup](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/openid-default-authentication-popup.png)

### Bypassing OpenID Connect authentication

When [OpenID Connect default authentication](#set-openid-connect-as-default-authentication) is enabled, use the custom login URL below to login as a normal user who is not from OAuth.
>**`{Bold Reports URL}/reporting/site/{tenant-name}/login?use_default_authentication=false`**