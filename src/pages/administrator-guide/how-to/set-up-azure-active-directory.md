---
layout: post
title: Set up SSO using Azure AD | Report Server | Syncfusion
description: Learn how to set up Azure Active Directory to perform Single Sign-On in Bold Reports On-Premise Edition.
platform: Report-Platform
documentation: ug
---

# How to Set up Azure Active Directory to perform authentication using Single Sign-On for Bold Reports On-Premise

This section explains on how to perform Single Sign-On for users in Azure Active Directory on Bold Reports On-Premise.

## Steps to set up Azure Active Directory for Bold Reports On-Premise

### Prerequisites

* An Azure account with Active Directory support.
* Install Bold Reports On-Premise and Login with Administrator account.

### Setup Azure Active Directory application

Log on to the Azure portal to create an `Azure Active Directory`.

1. Click `Create a resource` and search `Azure Active Directory` as follows.
    ![Create a resource](/static/assets/on-premise/images/how-to/create-resource-option.png)
    ![Create Directory 1](/static/assets/on-premise/images/how-to/create-resource.png)

2. Click `Create` in the following screenshot.
    ![Create Directory 1](/static/assets/on-premise/images/how-to/ad-create.png)

3. In the dialog box, enter the `Name`, `Domain Name`, and choose the `Country or Region`, and then click `Create`.
    ![Create Directory 2](/static/assets/on-premise/images/how-to/ad-create1-1.png)

4. The application will be added to the directory and you can view the details of the application in the `App registrations`.

Go to the Azure Active Directory. In the directory, you should add two applications in which one acts as a Web API for authenticate the Bold Reports On-Premise, and an other application that acts as native client application for authenticate Bold Reports On-Premise mobile app.

#### Steps to register Bold Reports On-Premise application in Azure Active Directory

1. Enter into the created directory and click `Azure Active Directory`, and then select `App registrations`.

2. Now, click `New application registration` to add a new application.
    ![Create Application 1](/static/assets/on-premise/images/how-to/add-application-1.png)

3. Enter the name of the application and choose the following options.
    ![Register](/static/assets/on-premise/images/how-to/register-option.png)

   * Accounts in any organizational directory (Any Azure AD directory - Multitenant) as `Supported account types`.
   * Web under the `Redirect URI(optional)` section and enter the Redirect URI. And then click `Register`.

   The application will be added to the directory and you can view the details of the application in the `App registrations`.

4. Select `Branding` in the left side menu and enter the `Home page URL` and click `Save`.
    ![Branding](/static/assets/on-premise/images/how-to/branding.png)

5. Select `Authentication` in the left side menu and save the `Logout URL`, `Implicit grant` and `Supported account types` as highlighted in the following screenshot.
    ![Authentication](/static/assets/on-premise/images/how-to/authentication.png)

6. Select `Certificates & secrets` to add client secret by clicking the `New client secret` as in the following screenshot.

    ![Certificates and secrets](/static/assets/on-premise/images/how-to/certificates-and-secrets.png)

    * Provide description and choose the expires option. Click on `Add` button.
     ![Client secret Durations](/static/assets/on-premise/images/how-to/client-secret-duration.png)

    >Save the client secret value generated.

7. Go to `API permissions`, click `Add a permission` and then click on `Microsoft Graph`.
    ![Microsoft Graph](/static/assets/on-premise/images/how-to/microsoft-graph.png)

   <table>
     <tr>
     <th><b>Application Permissions</b></th>
     <th></th>
     </tr>
     <tr>
     <td> Directory <td>Read directory data</td></td>
     </tr>
     <tr>
     <th><b>Delegated Permissions</b></th>
     <th></th>
     </tr>
     <tr>
     <td> 1. Directory <td>Read directory data, Access directory as the signed in user</td></td>
     </tr>
     <tr>
     <td>2. Group <td>Read all groups</td></td>
     </tr>
     <tr>
     <td>3. User <td>Read and write access to user profile</td></td>
     </tr>
      <tr>
     <td>4. Profile <td>View user's basic profile</td></td>
     </tr>
     </table>

    Select the above listed permissions and click on `Update permissions` button.
    ![Update Permissions](/static/assets/on-premise/images/how-to/update-permissions.png)

8. Go to `API permissions`, click `Add a permission` and then click on `Azure Active Directory Graph` as shown below.
    ![Azure Active Directory Graph](/static/assets/on-premise/images/how-to/azure-active-directory-graph.png)

    <table>
    <tr>
     <th>Application Permissions</th>
     <th></th>
     </tr>
     <tr>
     <td>Directory <td>Read directory data</td></td>
     </tr>
     <tr>
     <th><b>Delegated Permissions</b></th>
     <th></th>
     </tr>
     <tr>
     <td> 1. Directory <td>Read directory data, Access directory as the signed in user</td></td>
     </tr>
     <tr>
     <td>2. User <td>Sign in and read user profile</td></td>
     </tr>
    </table>

    Select the above listed permissions and click on `Add permissions` button.

    ![Add Permissions](/static/assets/on-premise/images/how-to/add-permissions.png)

9. After adding the permissions, click `Grant admin consent` to grant the admin consent for these permission.
    ![Grant Admin Consent](/static/assets/on-premise/images/how-to/grant-admin-consent.png)

10. Select `Expose an API` in the left side menu and click on `set` from Application ID URI.
    ![App Id URI](/static/assets/on-premise/images/how-to/set.png)

    Enter `App ID URI` and click on `Save` button
    ![App Id URI](/static/assets/on-premise/images/how-to/app-id-uri-save.png)

    >The `Application ID URI` must be in the format `http://{directory domain name}/{application id}`

11. Select `Expose an API` in the left side menu and click on `Add a scope` button.
    ![App a scope option](/static/assets/on-premise/images/how-to/add-a-scope-option.png)

    Enter `Scope name`, choose `Admins and users` on consent and enter `Admin consent display name`, `Admin consent description`, `User consent display name`, `User consent description`. Choose the state as `Enabled`. Click on `Add scope` button.
    ![App a scope](/static/assets/on-premise/images/how-to/add-a-scope-button.png)

>The `Redirect URI` and `Home page URL` should be the URL of the Bold Reports On-Premise application.

#### Steps to register Bold Reports On-Premise mobile application in Azure Active Directory

1. Enter into the respective directory. Click `App registrations` in the left side menu and then click `New registration` to add a new application.
   ![Add Application](/static/assets/on-premise/images/how-to/add-application-1.png)

2. Enter the name of the application and choose the following options,
   ![Register](/static/assets/on-premise/images/how-to/register-option-mob.png)

    * Accounts in any organizational directory (Any Azure AD directory - Multitenant) as `Supported account types`.
    * Public client/native(mobile & desktop) under the `Redirect URI(optional)` section and enter the Redirect URI. And then click `Register`.

    The application will be added to the directory and you can view the details of the application in the `App registrations`.

3. Select `Branding` in the left side menu and enter the `Home page URL` and click `Save`.
    ![Branding](/static/assets/on-premise/images/how-to/branding.png)

4. Select `Expose an API` in the left side menu and click on `set` from Application ID URI.
![App Id URI](/static/assets/on-premise/images/how-to/set.png)

    Enter `App ID URI` and click on `Save` button
   ![App Id URI](/static/assets/on-premise/images/how-to/app-id-uri-save.png)

    >The `Application ID URI` must be in the format `http://{directory domain name}/{application id}`

>The `Home page URL` should be the URL of the Bold Reports On-Premise application.

### Configure the Azure Active directory details in Bold Reports On-Premise to perform Single Sign-On

* Configure the following fields in the Bold Reports On-Premise to perform Single Sign-On in Bold Reports On-Premise.

   **Application Id**: Go to the registered application and click the `Overview`, and then copy the `Application Id` and paste it.
    ![Application ID](/static/assets/on-premise/images/how-to/client-id.png)

   **Application Id URI**: Go to the registered application and click the `Overview`, and then copy the `Application Id URI` and paste it.
   ![Application ID URI](/static/assets/on-premise/images/how-to/app-id.png)

   **Tenant Name**: It is the default domain name of your Active Directory. Go to the created `Azure Active Directory` and copy the domain name.
    ![Tenant name](/static/assets/on-premise/images/how-to/tenant-name.png)

   **Mobile App Client ID**: Go to the registered application for Bold Reports On-Premise mobile application. Copy the `Application Id` and paste it.
    ![Mob app client ID](/static/assets/on-premise/images/how-to/mob-app-client-id.png)

### Configure the Azure Active directory details in Bold Reports On-Premise to import users and groups

* Configure the following fields in Bold Reports On-Premise settings to import Azure AD users and groups.

   **Tenant Name**: It is the default domain name of your Active Directory. Go to the created `Azure Active Directory` and copy the domain name.
     ![Tenant name](/static/assets/on-premise/images/how-to/tenant-name.png)

   **Client ID**: It is the Client Id of the Bold Reports On-Premise application in your Azure Active Directory. Go to the registered application and then copy the `Application Id` in the `Overview` and paste it here.
     ![Client ID](/static/assets/on-premise/images/how-to/client-id.png)

    **Client secret code**: It is the secure key of the Bold Reports On-Premise application you created in your Azure Active Directory. Go to the `Certificates & secrets` and search for the Keys you saved for the application and then choose the `Value`.
     ![Client-Secret](/static/assets/on-premise/images/how-to/client-secret-value.png)

After the settings are configured in Bold Reports On-Premise, the Azure user can be imported into the Bold Reports On-Premise. Refer to the following link to [Import Azure Active Directory Users](./../../manage-users/users/import-users/import-azure-active-directory-users/) and [Import Azure Active Directory Groups](./../../manage-users/groups/import-groups/import-azure-active-directory-groups/).