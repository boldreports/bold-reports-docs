---
layout: post
title: Configure OneLogin OpenID Connect SSO | Bold Reports
description: Register Bold Reports in OneLogin and configure OpenID Connect settings so OneLogin users sign in with single sign-on and receive shared reports.
platform: report-platform
documentation: ug
---

# Single Sign-On (SSO) with OneLogin authentication in Bold Reports<sup>®</sup>

Bold Reports<sup>®</sup> lets you add users to the application with the OneLogin provider over OpenID Connect. After you import them, you can share reports and email exported reports with them.

## How to register the Bold Reports<sup>®</sup> application in OneLogin

Register the Bold Reports<sup>®</sup> application in OneLogin to set up single sign-on for OneLogin users.

> **Note:** This configuration has to be done on the OneLogin website.

## What do I need before I register Bold Reports<sup>®</sup> in OneLogin?

To register Bold Reports<sup>®</sup> in OneLogin for OpenID Connect, you need the following:

* An admin account in OneLogin.
* Install the Bold Reports<sup>®</sup> application.

## How do I register the Bold Reports<sup>®</sup> application in OneLogin?

You register Bold Reports<sup>®</sup> in OneLogin as an OpenID Connect app. Follow these steps:

1. Log in to the OneLogin website with the `admin` account.

2. Click `Applications` in the header menu.
    ![Click OneLogin Application](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/click-onelogin-appliclication.png)

3. Click the `Add App` button.
    ![Add App in OneLogin](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/add-app-onelogin.png)

4. Type `OpenID Connect`, or `oidc`, in the search box and click the result.
    ![Search OpenID Connect](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/search-openid-connect.png)

5. Type the application name and click `Add App`.

6. Save the application name in the `Display Name`.
    ![Save Application](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/onelogin-save-application.png)

7. Click the Configuration tab and save the `Redirect URI's` and `Login URL`.
    ![Save Redirect URI](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/onelogin-save-redirect-uri.png)

8. Find the redirect URI and Login URL under the OpenID Connect settings of your Bold Reports<sup>®</sup> application, as shown in the following screenshot.
    ![Lodin Redirect URI](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/login-redirect-uri.png)

9. Click the `SSO tab` to find the `Client ID` and `Client Secret`, and use them in the Bold Reports<sup>®</sup> application.
    ![Client Secret](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/onelogin-client-secret.png)

After successful registration in OneLogin, save these settings in the Bold Reports<sup>®</sup> settings page to enable this authentication.

## Enable OneLogin support for authentication in Bold Reports<sup>®</sup>

To enable OneLogin authentication in Bold Reports<sup>®</sup>, configure the OpenID Connect settings as shown in the following screenshot.
    ![Configure Bold Reports<sup>®</sup> Openid OneLogin](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/configure-boldreport-openid-onelogin.png)

## Which fields do I fill in for OneLogin?

The following table lists the fields you save in Bold Reports<sup>®</sup> to enable OneLogin for authentication:
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
        It must be in the form of <span style="color:#0c9dd1">https://subdomain.onelogin.com/oidc</span>. The sub domain represents the OneLogin instance.
    </td>
</tr>
<tr>
    <td>
        Client ID
    </td>
    <td>
        The Client ID you receive after registering the Bold Reports<sup>®</sup> application on the OneLogin website.
    </td>
</tr>
<tr>
    <td>
        Client Secret
    </td>
    <td>
        The Client Secret you receive after registering the Bold Reports<sup>®</sup> application on the OneLogin website.
    </td>
</tr>
<tr>
    <td>
        Identifier
    </td>
    <td>
        preferred_username
    </td>
</tr>
<tr>
    <td>
        Logout Endpoint
    </td>
    <td>
        It is an endpoint that logs out the third-party provider.
    </td>
</tr>
</table>

## Frequently asked questions

### What is the Authority value for OneLogin in Bold Reports<sup>®</sup>?

The Authority must be in the form `https://subdomain.onelogin.com/oidc`, where the sub domain represents the OneLogin instance.

### Which Identifier do I use for OneLogin in Bold Reports<sup>®</sup>?

Use `preferred_username` as the Identifier in the Bold Reports<sup>®</sup> OpenID Connect settings for OneLogin.

## See also

* [Configure OpenID Connect single sign-on](./../)
* [Keycloak OpenID Connect single sign-on](./../keycloak/)
* [OneLogin OAuth 2.0 single sign-on](./../../oauth-2.0/onelogin/)
