---
layout: post
title: OpenID Connect settings | Report Server | Syncfusion
description: Describes step-by-step procedure to configure OpenId connect settings, so that the user can login to the BoldReport application.
platform: report-platform
documentation: ug
---

# OpenID Connect support in BoldReports

OpenID Connect for Single sign-On (SSO) in BoldReports application, so that the user can login to BoldReports application after authenticating using the OpenID Connect

## Prerequisites

1. An account with an OpenID Connect provider.

2. Register the BoldReports application in the OpenID Connect provider.

## Steps to configure OpenID Connect in BoldReports

1. To configure the OpenID Connect connection details, click the settings option in the Report Server left-side panel.

2. Navigate to the Authentication tab and OpenID Connect as shown in the following image
![Active Directory Settings](/static/assets/on-premise/images/settings/authentication-settings.png)

3. Provide the following details in the OpenID Connect settings of BoldReports application.
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
        Authority
    </td>
    <td>
        It is the instance created for the user in the provider.
    </td>
</tr>
<tr>
    <td>
        Client ID
    </td>
    <td>
        It is an unique identifier provided to each of the applications while registering in the providers.
    </td>
</tr>
<tr>
    <td>
        Client Secret
    </td>
    <td>
        It is a secret key that is used to authorize the applications.
    </td>
</tr>
<tr>
    <td>
        Identifier
    </td>
    <td>
        It is the property name that holds the email address of the user in the deserialized ID token.
    </td>
</tr>
</table>

![Active Directory Settings](/static/assets/on-premise/images/settings/openid-connect-authentication.png)