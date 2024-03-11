---
layout: post
title: Adding Okta users in Bold Reports by Oauth 2.0
description: This documentation explains about how to add Okta users in Bold Reports using the OAuth 2.0 settings
platform: report-platform
documentation: ug
---

# Single Sign-On(SSO) with Okta authentication in Bold Reports

The Bold Reports application supports adding users using the Okta provider. By importing them, you can share reports and email exported reports to them.

## How to register the Bold Reports application in Okta

This section explains how to perform Single Sign-On for users in Okta with the Bold Reports application.

> **Note:** This configuration needs to be done on Okta website.

## Prerequisites

* An admin account in Okta.
* Install the Bold Reports application.

## Steps to register the Bold Reports application

1. Login to the Okta website with an `admin` account.
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

6. The Login redirect URIs must be the URI in the settings of your Bold Reports application, as shown in the following snap.
    ![Login Redirect URI](/static/assets/on-premise/images/authentication/single-sign-on/oauth/okta/login-redirect-uri.png)

7. On the next page, you will get the `Client ID` and `Client Secret` at the bottom of the page, along with the other details you filled out on the previous page.
    ![Okta Client Credential](/static/assets/on-premise/images/authentication/single-sign-on/oauth/okta/okta-client-credential.png)

After successful registration in Okta, save these settings in the Bold Reports settings page to enable this authentication.

## Enable Okta Authentication in Bold Reports

Configure the settings in Bold Reports as in the following snap to enable authentication using Okta.
    ![Configure Bold Reports Okta](/static/assets/on-premise/images/authentication/single-sign-on/oauth/okta/configure-boldreport-okta.png)

The fields to be saved in the Bold Reports to enable Okta for authentication are explained as follows.
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
        It should be in the format <span style="color:#0c9dd1">${baseUrl}/v1/authorize</span>. Please refer <a href="https://developer.okta.com/docs/reference/api/oidc/#authorize">here</a> for more details..
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
        It should be in the format <span style="color:#0c9dd1">${baseUrl}/v1/token</span>. Please refer <a href="https://developer.okta.com/docs/reference/api/oidc/#token">here</a> for more details.
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
        It should be in the format <span style="color:#0c9dd1">${baseUrl}/v1/token</span>. Please refer <a href="https://developer.okta.com/docs/reference/api/oidc/#userinfo">here</a>, for more details.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Client ID
    </td>
    <td>
        The Client ID you receive after registering the Bold Reports application on the Okta website.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Client Secret
    </td>
    <td>
        The Client Secret you receive after registering the Bold Reports application on the Okta website.
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
        Email
    </td>
    <td>
        This must be the email of an admin account on the Okta website.
    </td>
</tr>
</table>