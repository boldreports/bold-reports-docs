---
layout: post
title: Adding OneLogin users in Bold Reports by OpenID Connect
description: This documentation explains about how to add OneLogin user in Bold Reports using the OpenId Connect settings
platform: report-platform
documentation: ug
---

# Single Sign-On (SSO) with OneLogin authentication

Users can be added to the Bold Reports application using the OneLogin provider. By importing them, you can share the reports and email exported reports with them.

## How to register the Bold Reports application in OneLogin

This section explains how to set up Single Sign-On for users in OneLogin with the Bold Reports application.

> **Note:** This configuration has to be done on the OneLogin website.

## Prerequisites

* An admin account in OneLogin.
* Install the Bold Reports application.

## Steps to register the Bold Reports application

1. Login to the OneLogin website with the `admin` account.

2. Click on `Applications` in the header menu.
    ![Click OneLogin Application](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/click-onelogin-appliclication.png)

3. Click on the `Add App` button.
    ![Add App in OneLogin](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/add-app-onelogin.png)

4. Type the word `OpenID Connect`, or `oidc`, in the search box and click on the result.
    ![Search OpenID Connect](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/search-openid-connect.png)

5. Type the application name and click `Add App`.

6. Save the application name in the `Display Name`.
    ![Save Application](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/onelogin-save-application.png)

7. Click the Configuration tab and save the `Redirect URI's` and `Login URL`.
    ![Save Redirect URI](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/onelogin-save-redirect-uri.png)

8. The redirect URI and Login URL are found under the OpenID Connect settings of your Bold Reports application, as shown in the following screenshot.
    ![Lodin Redirect URI](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/login-redirect-uri.png)

9. Click the `SSO tab`; you will find the `Client ID` and `Client Secret`, which you can use in the Bold Reports application.
    ![Client Secret](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/onelogin-client-secret.png)

After successful registration in OneLogin, save these settings in the Bold Reports settings page to enable this authentication.

## Enable OneLogin support for authentication in Bold Reports

Configure the settings in Bold Reports to enable the authentication using OneLogin,following the snapshot below .
    ![Configure Bold Reports Openid OneLogin](/static/assets/on-premise/images/authentication/single-sign-on/openid-connect/onelogin/configure-boldreport-openid-onelogin.png)

Below are the fields that need to be saved in Bold Reports to enable OneLogin for authentication.
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
        The Client ID you receive after registering the Bold Reports application on the OneLogin website.
    </td>
</tr>
<tr>
    <td>
        Client Secret
    </td>
    <td>
        The Client Secret you receive after registering the Bold Reports application on the OneLogin website.
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
