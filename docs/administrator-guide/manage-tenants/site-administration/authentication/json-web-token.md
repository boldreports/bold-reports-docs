---
layout: post
title: Single Sign-On with Custom JSON Web Token | Bold Reports
description: Learn how to configure the settings and authenticate users with SSO using custom JSON Web Token with Bold Reports application.
platform: report-platform
documentation: ug
---

# How to set up JWT for SSO authentication in Bold Reports

This section explains how to perform Single Sign-On (SSO) for users with the Custom JSON Web Token (JWT) in Bold Reports application.

## Steps to configure JWT in Bold Reports

1. Login with this URL `{Bold Reports URL}/ums/administration` using the admin credential.

2. Click `Authentication` and then `JWT`.

   ![JWT Configuration](/static/assets/on-premise/images/tenant-management/site-management/authentication/jwt-configuration.png)

3. Enable the JWT settings.

4. Provide the following details in the `JWT` settings.

    <table>

    <tr>
    <td>Name</td>
    <td>It represents the name of the JWT provider to be displayed in the login page.</td>
    </tr>

    <tr>
    <td>Provider Logo</td>
    <td>It represents the logo of the JWT provider to be displayed in the login page.</td>
    </tr>

    <tr>
    <td>Remote Login URL</td>
    <td>It is the endpoint of the JWT provider to send the authorization request from Bold Reports application.</td>
    </tr>

    <tr>
    <td>Remote Logout URL</td>
    <td>It is the endpoint of the JWT provider to send the logout request once user logged out in the Bold Reports application.</td>
    </tr>

    </table>

5. After the values are saved, the application will generate a `Signing Key`. This signing key has to be used for signing JSON Web Tokens from your application.  

6. The `Signing Key` will copy, view, and reset using the following options:

    ![Copy](/static/assets/on-premise/images/tenant-management/site-management/authentication/jwt-signingkey-options.png)

## How JWT works with Bold Reports

1. Once configured the JWT settings, go to the Bold Reports login page and click the JWT login option, it will redirects to configured application login URL.
    ![JWT Login](/static/assets/on-premise/images/tenant-management/site-management/authentication/jwt-login-option.png)

2. After that, the application will generate the JSON Web Token for user and it is redirected back to Bold Reports call back URL `{Bold Reports URL}/sso/jwt/callback?jwt={token}&site_identifier={site identifier}&redirect_to={redirecturl}` with the encoded JWT in a query string.

3. Bold Reports application will validate the JWT and deserialize the user information from the token.

4. From the user information, Bold Reports application will check, if the user email has access in Bold Reports application already. If the user is already available in Bold Reports, it will authenticate the user.

5. If the user is not available in Bold Reports server, it will add the user and authenticate to access Bold Reports application.

## JWT Callback URL

  JWT callback URL will validate the JWT response from configured application.

  After a user successful logs into your configured application, you can redirect them to the following specific URL.

 `{Bold Reports URL}/sso/jwt/callback?jwt={token}&site_identifier={site identifier}&redirect_to={redirecturl}`

  <table>
    <tr>
    <th>Parameter</th>
    <th>Required</th>
    <th>Comments</th>
  </tr>

   <tr>
   <td>jwt</td>
   <td>Yes</td>
   <td>JSON Web Token will be passed in this parameter. It will contain the JWT Payload</td>
   </tr>

   <tr>
   <td>site_identifier</td>
   <td>No</td>
   <td>This parameter will be used to grant site access for the JWT user.

   If the JWT login accessed from the tenant, Bold Reports login URL will redirect to your application with tenant site identifier in URL query string. You can use this identifier in JWT response URL.

   Example Url`{Remote login URL}?site_identifier={site identifier}`

   > **NOTE:** Should pass one site identifier. More than one identifier not allowed.
   </td>
   </tr>

   <tr>
   <td>redirect_to</td>
   <td>No</td>
   <td>If this parameter is included in the JWT response, then the user will be redirected to that page, after the login process completed.</td>
   </tr>
   </table>

## Create JSON Web Token

To create the JWT, use `HMAC-SHA256` as signing algorithm.  

### What parameters can be passed in the payload of JWT

JWT should contain the following claims:

   <table>
   <tr>
    <th>Parameter</th>
    <th>Parameter Name</th>
    <th>Value Type</th>
    <th>Required</th>
    <th>Comments</th>
   </tr>

   <tr>
    <td>User Id</td>
   <td>sub</td>
   <td>string</td>
   <td>Yes</td>
   <td>Unique identifier of the user.</td>
   </tr>

   <tr>
   <td>Email</td>
   <td>emailaddress</td>
   <td>string</td>
   <td>Yes</td>
   <td>Email address of the user.</td>
   </tr>

   <tr>
   <td>First Name</td>
   <td>first_name</td>
   <td>string</td>
   <td>Yes</td>
   <td>First name of the user.</td>
   </tr>

   <tr>
   <td>Last Name</td>
   <td>last_name</td>
   <td>string</td>
   <td>No</td>
   <td>Surname of the user.</td>
   </tr>

   <tr>
   <td>Phone</td>
   <td>phone</td>
   <td>string</td>
   <td>No</td>
   <td>Phone number of the user.</td>
   </tr>
   </table>

### JSON Web Token sample

Please refer to the following sample for how to generate the JWT.

```c#
private string GenerateJSONWebToken(UserModel userInfo)
{
    var signingKey = "signingkey";// Signing key value will copy from JWT Settings page
    var securityKey = new SymmetricSecurityKey(signingKey);
    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature, SecurityAlgorithms.Sha256Digest);

    var claims = new[] {
        new Claim("sub", "420c5d51-1754-4a9b-b4b5-d5bfebb21b0f")
        new Claim("email", "john.doe@example.com"),
        new Claim("first_name", "Makila"),
        new Claim("last_name", "S"),
        new Claim("phone", "1234567890")
            };

    var token = new JwtSecurityToken(claims: claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

    return new JwtSecurityTokenHandler().WriteToken(token);
}
```
