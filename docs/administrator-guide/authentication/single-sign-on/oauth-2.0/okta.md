---
layout: post
title: Configure Okta Single Sign-On with OAuth 2.0 | Bold Reports
description: Register Bold Reports in Okta and configure OAuth 2.0 settings so Okta users sign in with single sign-on and receive shared and emailed reports.
platform: report-platform
documentation: ug
---

# Single Sign-On (SSO) with Okta authentication in Bold Reports<sup>®</sup>

Bold Reports<sup>®</sup> lets you add users to the application with the Okta provider over OAuth 2.0. After you import them, you can share reports and email exported reports to them.

## How to register the Bold Reports<sup>®</sup> application in Okta

Register the Bold Reports<sup>®</sup> application in Okta to let Okta users sign in with single sign-on.

> **Note:** This configuration needs to be done on Okta website.

## What do I need before I register Bold Reports<sup>®</sup> in Okta?

To register Bold Reports<sup>®</sup> in Okta, you need the following:

* An admin account in Okta.
* Install the Bold Reports<sup>®</sup> application.

## How do I register the Bold Reports<sup>®</sup> application in Okta?

You register Bold Reports<sup>®</sup> in Okta as a Web application. Follow these steps:

1. Log in to the Okta website with an `admin` account.
    ![Login Okta](/static/assets/on-premise/images/authentication/single-sign-on/oauth/okta/okta-login.png)

2. Click `Applications` in the header menu.
    ![Click Application](/static/assets/on-premise/images/authentication/single-sign-on/oauth/okta/okta-application.png)

3. Click the `Add` Application button.
    ![Add Application](/static/assets/on-premise/images/authentication/single-sign-on/oauth/okta/okta-add-application.png)

4. Click `Web` and proceed with `Next`.
    ![Select Web Platform](/static/assets/on-premise/images/authentication/single-sign-on/oauth/okta/okta-platform-web.png)

5. Fill in the following application details on the next page and click `Done`.

    * Name
    * Login Redirect URIs
    * Logout Redirect URIs
    ![Redirect URI](/static/assets/on-premise/images/authentication/single-sign-on/oauth/okta/okta-redirect-uri.png)

6. Make sure the Login redirect URIs match the URI in the settings of your Bold Reports<sup>®</sup> application, as shown in the following screenshot.
    ![Login Redirect URI](/static/assets/on-premise/images/authentication/single-sign-on/oauth/okta/login-redirect-uri.png)

7. On the next page, copy the `Client ID` and `Client Secret` at the bottom of the page. The page also shows the other details you filled in on the previous page.
    ![Okta Client Credential](/static/assets/on-premise/images/authentication/single-sign-on/oauth/okta/okta-client-credential.png)

After successful registration in Okta, save these settings in the Bold Reports<sup>®</sup> settings page to enable this authentication.

## Enable Okta Authentication in Bold Reports<sup>®</sup>

To enable Okta authentication in Bold Reports<sup>®</sup>, configure the OAuth 2.0 settings as shown in the following screenshot.
    ![Configure Bold Reports<sup>®</sup> Okta](/static/assets/on-premise/images/authentication/single-sign-on/oauth/okta/configure-boldreport-okta.png)

## Which fields do I fill in for Okta?

The following table explains the fields you save in Bold Reports<sup>®</sup> to enable Okta for authentication:
<table>
<tr>
    <td>
        Provider Name
    </td>
    <td>
        This represents the name of the authentication provider to be displayed on the login page.
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
        Authorization Endpoint
    </td>
    <td>
        It should be in the format <span style="color:#0c9dd1">${baseUrl}/v1/authorize</span>. For more details, see the <a href="https://developer.okta.com/docs/reference/api/oidc/#authorize">Okta authorize endpoint reference</a>.
    </td>
</tr>
    <tr>
    <td>
        Token Endpoint Method
    </td>
    <td>
        POST
    </td>
</tr>
</tr>
    <tr>
    <td>
        Token Endpoint
    </td>
    <td>
        It should be in the format <span style="color:#0c9dd1">${baseUrl}/v1/token</span>. For more details, see the <a href="https://developer.okta.com/docs/reference/api/oidc/#token">Okta token endpoint reference</a>.
    </td>
</tr>
</tr>
    <tr>
    <td>
        User Information Endpoint Method
    </td>
    <td>
        POST
    </td>
</tr>
</tr>
    <tr>
    <td>
        User Information Endpoint
    </td>
    <td>
        It should be in the format <span style="color:#0c9dd1">${baseUrl}/v1/token</span>. For more details, see the <a href="https://developer.okta.com/docs/reference/api/oidc/#userinfo">Okta userinfo endpoint reference</a>.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Client ID
    </td>
    <td>
        The Client ID you receive after registering the Bold Reports<sup>®</sup> application on the Okta website.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Client Secret
    </td>
    <td>
        The Client Secret you receive after registering the Bold Reports<sup>®</sup> application on the Okta website.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Scopes
    </td>
    <td>
        openid, profile, email
    </td>
</tr>
</tr>
    <tr>
    <td>
        Logout URI
    </td>
    <td>
        It is an endpoint that logs out the third-party provider.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Email
    </td>
    <td>
        This must be the email of an admin account on the Okta website.
    </td>
</tr>
</table>

## Frequently asked questions

### Which Okta application platform do I choose for Bold Reports<sup>®</sup>?

Choose `Web` when you add the Bold Reports<sup>®</sup> application in Okta.

### Where do I find the Okta Client ID and Client Secret?

Okta shows the `Client ID` and `Client Secret` at the bottom of the page after you click `Done` on the application details. Use them in the Bold Reports<sup>®</sup> OAuth 2.0 settings.

## See also

* [Configure OAuth 2.0 single sign-on](./../)
* [OneLogin OAuth 2.0 single sign-on](./../onelogin/)
* [Okta OpenID Connect single sign-on](./../../openid-connect/okta/)
