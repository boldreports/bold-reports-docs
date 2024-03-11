---
layout: post
title: OAuth2.0 Authentication | Report Server | Syncfusion
description: Describes step-by-step procedure to configure OAuth2.0 Authentication so that the user can login to the BoldReport application
platform: report-platform
documentation: ug
---

# OAuth 2.0 Support in Bold Reports

The Bold Reports application can be configured to support OAuth 2.0 for Single Sign-On (SSO), enabling users to log in directly to the Bold Reports application after authenticating using OAuth 2.0.

## Prerequisites

1. An account with an OAuth 2.0 provider.

2. Register the Bold Reports application with the OAuth 2.0 provider.

## Steps to configure OAuth 2.0 in BoldReports

1. To configure the OAuth 2.0 connection details, click the **Settings** option in the left-side panel of the Report Server.

2. Navigate to the `Authentication` tab and `OAuth 2.0` as shown in the following image
    ![Authentication](/static/assets/on-premise/images/settings/authentication-settings.png)
    ![Active Directory Settings](/static/assets/on-premise/images/settings/oauth-authentication.png)

3. Provide the following details in the OAuth 2.0 settings of BoldReports application.

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

> **Note:** Please refer to the [OAuth 2.0 authentication](./../../authentication/single-sign-on/oauth-2.0/) documentation for more information.
