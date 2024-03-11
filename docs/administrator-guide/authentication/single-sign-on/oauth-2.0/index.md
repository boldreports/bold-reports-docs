---
layout: post
title: OAuth 2.0 in Bold Reports Enterprise Reporting
description: Describes step-by-step procedure to configure OAuth 2.0 Authentication so that the user can login to the Bold Reports application
platform: report-platform
documentation: ug
---

# Single Sign-On(SSO) with OAuth 2.0 authentication in Bold Reports

The Bold Reports application can be configured to support OAuth 2.0 for Single Sign-On(SSO), allowing users to log in directly to the Bold Reports application after authenticating using OAuth 2.0.

## Prerequisites

1. An account with an OAuth 2.0 provider is required.

2. Register the Bold Reports application with the OAuth 2.0 provider.

## Steps to configure OAuth 2.0 in Bold Reports

1. Log in to Bold Reports with the admin credentials and click on the `Settings` option in the Report Server left-side panel.

2. Navigate to the Authentication tab and select OAuth 2.0 as shown in the following image
    ![Authentication](/static/assets/on-premise/images/authentication/single-sign-on/oauth/authentication-settings.png)

   ![Oauth Authentication](/static/assets/on-premise/images/authentication/single-sign-on/oauth/oauth-authentication.png)

3. Provide the following details in the OAuth 2.0 settings of the Bold Reports application.
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
        This is the endpoint in the provider used to authorize the user.
    </td>
</tr>
    <tr>
    <td>
        Token Endpoint Method
    </td>
    <td>
        It represents the request type to access the token endpoint.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Token Endpoint
    </td>
    <td>
        It is the endpoint in the provider responsible for generating the token.
    </td>
</tr>
</tr>
    <tr>
    <td>
        User Information Endpoint Method
    </td>
    <td>
        It is the endpoint in the provider used to retrieve the user details.
    </td>
</tr>
</tr>
    <tr>
    <td>
        User Information Endpoint
    </td>
    <td>
        It represents the request type used to access the user information endpoint.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Client ID
    </td>
    <td>
        It is a unique identifier provided to each application during registration with the providers.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Client Secret
    </td>
    <td>
        It is a secret key used to authorize the applications.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Scopes
    </td>
    <td>
        It is a comma-separated list of identifiers that specifies the access privileges being requested from the provider.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Email
    </td>
    <td>
        This shoul be the email address of an admin account of the provider.
    </td>
</tr>
</table>

   ![Oauth Authentication](/static/assets/on-premise/images/authentication/single-sign-on/oauth/oauth-authentication.png)
    ![Oauth-User-data](/static/assets/on-premise/images/authentication/single-sign-on/oauth/oauth-user-data.png)

The previously mentioned similar steps are applicable to configure OAuth 2.0 in the User Management Server by logging into the URL `{Bold Reports URL}/ums/administration/authentication` with admin credential.

Here is a list of several OAuth 2.0 providers, along with explanations of how to connect them to the Bold Reports application.

* [Amazon Cognito](./../oauth-2.0/amazon-cognito/)
* [Auth0](./../oauth-2.0/auth0/)
* [Okta](./../oauth-2.0/okta/)
* [OneLogin](./../oauth-2.0/onelogin/)

OAuth 2.0 functionality is available in both Bold Reports sites and the User Management Server. It can be managed for each site individually on the settings page by disabling the option, as illustrated in the following screenshot.
![Oauth Group Setting](/static/assets/on-premise/images/authentication/single-sign-on/oauth/enableoauth.png)

## Set OAuth 2.0 as Default Authentication

OAuth 2.0 can be set as the default authentication method when [OAuth 2.0](#steps-to-configure-oauth-20-in-bold-reports) settings is enabled and saved. Follow the below steps.
1. On the settings page, click on the Authentication tab and select General.
2. Enable the option **Enable Default Authentication** and select **OAuth 2.0** as the default authentication provider, as shown in the following screenshot.
    ![Oauth Default Setting](/static/assets/on-premise/images/authentication/single-sign-on/oauth/oauth-default-authentication.png)

### Disabling OAuth 2.0 Settings

When OAuth 2.0 is set as default authentication and try to disable the [OAuth 2.0 settings](#steps-to-configure-oauth-20-in-bold-reports) will display below pop-up. Proceeding by clicking `Yes` will disable the [OAuth 2.0 default authentication](#set-oauth-20-as-default-authentication).

![Oauth Default Setting Popup](/static/assets/on-premise/images/authentication/single-sign-on/oauth/oauth-default-authentication-popup.png)

### Bypassing OAuth 2.0 Authentication

Use the following custom login URL to log in as a normal user who is not using OAuth, when [OAuth 2.0 default authentication](#set-oauth-20-as-default-authentication) is enabled.
>**`{Bold Reports URL}/reporting/site/{tenant-name}/login?use_default_authentication=false`**