---
layout: post
title: Configure Okta SSO with OpenID Connect | Bold Reports
description: Register Bold Reports in Okta and configure OpenID Connect settings so Okta users sign in with single sign-on and receive shared and emailed reports.
platform: report-platform
documentation: ug
---

# Single Sign-On (SSO) with Okta authentication in Bold Reports<sup>®</sup>

Bold Reports<sup>®</sup> lets you add users to the application with the Okta provider over OpenID Connect. After you import them, you can share reports and email exported reports with them.

## How to register the Bold Reports<sup>®</sup> application in Okta

Register the Bold Reports<sup>®</sup> application in Okta to set up single sign-on for Okta users.

> **Note:** This configuration needs to be done on the Okta website.

## What do I need before I register Bold Reports<sup>®</sup> in Okta?

To register Bold Reports<sup>®</sup> in Okta for OpenID Connect, you need the following:

* An admin account in Okta.
* Install the Bold Reports<sup>®</sup> application.

## How do I register the Bold Reports<sup>®</sup> application in Okta?

You register Bold Reports<sup>®</sup> in Okta as a Web application. Follow these steps:

1. Log in to the Okta website with an `admin` account.
    ![Login Okta](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/okta/okta-login.png)

2. Click `Applications` in the header menu.
    ![Click Application](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/okta/okta-application.png)

3. Click the `Add Application` button.
    ![Add Application](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/okta/okta-add-application.png)

4. Click `Web` and proceed with `Next`.
    ![Select Web Platform](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/okta/okta-platform-web.png)

5. Fill in the following application details on the next page, then click `Done`.

    * Name
    * Login Redirect URIs
    * Logout Redirect URIs
    ![Redirect URI](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/okta/okta-redirect-uri.png)

6. Make sure the login redirect URIs match the URI in the settings of your Bold Reports<sup>®</sup> application, as shown in the following screenshot.
    ![Login Redirect URI](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/okta/login-redirect-uri.png)

7. On the next page, copy the `Client ID` and `Client Secret` at the bottom of the page. The page also shows the other details you filled in on the previous page.
    ![Okta Client Credential](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/okta/okta-client-credential.png)

After successful registration in Okta, save these settings in the Bold Reports<sup>®</sup> settings page to enable this authentication.

## Enable Okta support for authentication in Bold Reports<sup>®</sup>

To enable Okta authentication in Bold Reports<sup>®</sup>, configure the OpenID Connect settings as shown in the following screenshot.
    ![Configure Bold Report OpenID Okta](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/okta/configure-boldreport-openid-Okta.png)

## Which fields do I fill in for Okta?

The following table explains the fields you save in Bold Reports<sup>®</sup> to enable Okta for authentication:
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
        The format is <span style="color:#0c9dd1">https://instancename.okta.com</span>. It must be the URL of your Okta instance.
    </td>
</tr>
<tr>
    <td>
        Client ID
    </td>
    <td>
        The Client ID you receive after registering the Bold Reports<sup>®</sup> application on the Okta website.
    </td>
</tr>
<tr>
    <td>
        Client Secret
    </td>
    <td>
        The Client Secret you receive after registering the Bold Reports<sup>®</sup> application on the Okta website.
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

### What is the Authority value for Okta in Bold Reports<sup>®</sup>?

The Authority is the URL of your Okta instance, in the format `https://instancename.okta.com`.

### Which Identifier do I use for Okta in Bold Reports<sup>®</sup>?

Use `preferred_username` as the Identifier in the Bold Reports<sup>®</sup> OpenID Connect settings for Okta.

## See also

* [Configure OpenID Connect single sign-on](./../)
* [Auth0 OpenID Connect single sign-on](./../auth0/)
* [Okta OAuth 2.0 single sign-on](./../../oauth-2.0/okta/)
