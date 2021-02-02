---
layout: post
title: OAuth2.0 Authentication | Report Server | Syncfusion
description: Describes step-by-step procedure to configure OAuth2.0 Authentication so that the user can login to the BoldReport application
platform: report-platform
documentation: ug
---

# OAuth 2.0 Support in Boldreports

OAuth 2.0 for Single sign-On (SSO) in BoldReports application, so that the user can login to BoldReports application after authenticating using the OAuth 2.0

## Prerequisites

1. An account with an OAuth 2.0 provider.

2. Register the BoldReports application in the OAuth 2.0 provider.

## Steps to configure OAuth 2.0 in BoldReports

1. To configure the OAuth 2.0 connection details, click the settings option in the Report Server left-side panel.

2. Navigate to the Authentication tab and OAuth 2.0 as shown in the following image
![Authentication](/static/assets/on-premise/images/settings/authentication-settings.png)

3. Provide the following details in the OAuth 2.0 settings of BoldReports application.
<table>
<tr>
    <td>
        Provider Name
    </td>
    <td>
        It represents the name of the authentication provider to be displayed in the login page.
    </td>
</tr>
<tr>
    <td>
        Provider Logo
    </td>
    <td>
        It represents the logo of the authentication provider to be displayed in the login page.
    </td>
</tr>
<tr>
    <td>
        Authorization Endpoint
    </td>
    <td>
        It is the endpoint in the provider to authorize the user.
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
        It is the endpoint in the provider that generates the token.
    </td>
</tr>
</tr>
    <tr>
    <td>
        User Information Endpoint Method
    </td>
    <td>
        It is the endpoint in the provider used to get the user details.
    </td>
</tr>
</tr>
    <tr>
    <td>
        User Information Endpoint
    </td>
    <td>
        It represents the request type to access the user information endpoint.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Client ID
    </td>
    <td>
        It is an unique identifier provided to each of the applications while registering in the providers.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Client Secret
    </td>
    <td>
        It is a secret key that is used to authorize the applications.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Scopes
    </td>
    <td>
        It is comma separated lists of identifiers that specifies the access privileges that are being requested from the provider.
    </td>
</tr>
</tr>
    <tr>
    <td>
        Email
    </td>
    <td>
        This must be the email of an admin account of the providers.
    </td>
</tr>
</table>

![Active Directory Settings](/static/assets/on-premise/images/settings/oauth-authentication.png)
