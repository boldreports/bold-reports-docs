---
layout: post
title: Configure Auth0 Single Sign-On with OAuth 2.0 | Bold Reports
description: Register Bold Reports in Auth0 and configure OAuth 2.0 settings so Auth0 users sign in with single sign-on and receive shared and emailed reports.
platform: report-platform
documentation: ug
---

# Single Sign-On (SSO) with Auth0 authentication in Bold Reports<sup>®</sup>

Bold Reports<sup>®</sup> lets you add users to the application with the Auth0 provider over OAuth 2.0. After you import them, you can share reports and email exported reports with them.

## How to register the Bold Reports<sup>®</sup> application in Auth0

Register the Bold Reports<sup>®</sup> application in Auth0 to let Auth0 users sign in with single sign-on.

> **Note:** This configuration has to be done on the Auth0 website.

## What do I need before I register Bold Reports<sup>®</sup> in Auth0?

To register Bold Reports<sup>®</sup> in Auth0, you need the following:

* An admin account in Auth0.
* Install the Bold Reports<sup>®</sup> application.

## How do I register the Bold Reports<sup>®</sup> application in Auth0?

You register Bold Reports<sup>®</sup> in Auth0 as a Regular Web Application. Follow these steps:

1. Log in to the Auth0 website with an `admin` account.
    ![Auth0 Login Admin Account](/static/assets/on-premise/images/authentication/single-sign-on/oauth/auth0/auth0-login-admin-account.png)

2. Click `Applications` in the left menu, and then click the `CREATE APPLICATION` button.
    ![Auth0 create Application](/static/assets/on-premise/images/authentication/single-sign-on/oauth/auth0/auth0-create-application.png)

3. Click `Regular Web Applications` and proceed to the next step.
    ![Select Regular Web Application](/static/assets/on-premise/images/authentication/single-sign-on/oauth/auth0/select-regular-web-application.png)

4. Auth0 registers the application and opens the application details page. Use the `Client ID` and `Client Secret` in the Bold Reports<sup>®</sup> application.
    ![auth0 ClientId and Client Secret](/static/assets/on-premise/images/authentication/single-sign-on/oauth/auth0/auth0-clientid-client-secret.png)

5. Scroll down and save the `Allowed Callback URLs`.
    ![Auth0 Save Callback URL](/static/assets/on-premise/images/authentication/single-sign-on/oauth/auth0/auth0-save-callback-url.png)

6. Make sure this URL matches the redirect URI in the settings of your Bold Reports<sup>®</sup> application, as shown in the following screenshot.
    ![Lodin Redirect URI](/static/assets/on-premise/images/authentication/single-sign-on/oauth/auth0/login-redirect-uri.png)

7. Fill in the details and save the changes.

After successful registration in Auth0, save these settings in the Bold Reports<sup>®</sup> settings page to enable this authentication.

## Enable Auth0 authentication in Bold Reports<sup>®</sup>

To enable Auth0 authentication in Bold Reports<sup>®</sup>, configure the OAuth 2.0 settings as shown in the following screenshot.
    ![Configure Bold Report Auth0](/static/assets/on-premise/images/authentication/single-sign-on/oauth/auth0/configure-boldreport-auth0.png)

## Which fields do I fill in for Auth0?

The following table explains the fields you save in Bold Reports<sup>®</sup> to enable Auth0 for authentication:

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
        Authorization Endpoint
    </td>
    <td>
        It should be in the format <span style="color:#0c9dd1">https://YOUR_DOMAIN/authorize</span>. For more details, see the <a href="https://auth0.com/docs/flows/guides/auth-code/add-login-auth-code#authorize-the-user">Auth0 authorize the user guide</a>.
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
        It should be in the format <span style="color:#0c9dd1">https://YOUR_DOMAIN/oauth/token</span>. For more details, see the <a href="https://auth0.com/docs/flows/guides/auth-code/add-login-auth-code#request-tokens">Auth0 request tokens guide</a>.
    </td>
</tr>
</tr>
    <tr>
    <td>
        User Information Endpoint Method
    </td>
    <td>
        GET
    </td>
</tr>
</tr>
    <tr>
    <td>
        User Information Endpoint
    </td>
    <td>
        It should be in the format <span style="color:#0c9dd1">https://YOUR_DOMAIN/userinfo </span>. For more details, see the <a href="https://auth0.com/docs/api/authentication?http#get-user-info">Auth0 get user info reference</a>.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Client ID
    </td>
    <td>
        The Client ID is obtained after registering the Bold Reports<sup>®</sup> application on the Auth0 website.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Client Secret
    </td>
    <td>
        The Client Secret is obtained after registering the Bold Reports<sup>®</sup> application on the Auth0 website.
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
        This must be the email of an admin account on the Auth0 website.
    </td>
</tr>
</table>

## Frequently asked questions

### Which Auth0 application type do I choose for Bold Reports<sup>®</sup>?

Choose `Regular Web Applications` when you create the Bold Reports<sup>®</sup> application in Auth0.

### Which scopes does Auth0 need in Bold Reports<sup>®</sup>?

Use the scopes `openid, profile, email` in the Bold Reports<sup>®</sup> OAuth 2.0 settings for Auth0.

## See also

* [Configure OAuth 2.0 single sign-on](./../)
* [Amazon Cognito OAuth 2.0 single sign-on](./../amazon-cognito/)
* [Auth0 OpenID Connect single sign-on](./../../openid-connect/auth0/)
