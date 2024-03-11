---
layout: post
title: Adding Okta users in Bold Reports by OpenID connect
description: This documentation explains about how to add Okta user in Bold Reports using the OpenID connect settings
platform: report-platform
documentation: ug
---

# Single Sign-On (SSO) with Okta authentication in Bold Reports

Bold Reports application supports adding users using the Okta provider. By importing them, you can share the reports and email exported reports with them.

## How to register the Bold Reports application in Okta

This section explains how to set up Single Sign-On for users in Okta with the Bold Reports application.

> **Note:** This configuration needs to be done on the Okta website.

## Prerequisites

* An admin account in Okta.
* Install the Bold Reports application.

## Steps to register the Bold Reports application

1. Login to the Okta website with an `admin` account.
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

6. The login redirect URIs must be the URI in the settings of your Bold Reports application, as in the following snap.
    ![Login Redirect URI](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/okta/login-redirect-uri.png)

7. On the next page, you will get the `Client ID` and `Client Secret` at the bottom of the page, along with the other details you filled out on the previous page.
    ![Okta Client Credential](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/okta/okta-client-credential.png)

After successful registration in Okta, save these settings in the Bold Reports settings page to enable this authentication.

## Enable Okta support for authentication in Bold Reports

Configure the settings in Bold Reports as shown in the following screenshot to enable the authentication using Okta.
    ![Configure Bold Report OpenID Okta](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/okta/configure-boldreport-openid-Okta.png)

The fields to be saved in the Bold Reports to enable Okta for authentication are explained as follows:
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
        The Client ID you receive after registering the Bold Reports application on the Okta website.
    </td>
</tr>
<tr>
    <td>
        Client Secret
    </td>
    <td>
        The Client Secret you receive after registering the Bold Reports application on the Okta website.
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
</table>
