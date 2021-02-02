---
layout: post
title: Setup Bold Reports in staging and production environment
description: Describes how to set up Bold Reports On-Premise Edition in staging and move to production environment.
platform: report-platform
documentation: ug
---

# How to setup the staging and production environment for Bold Reports On-Premise Edition

This section explains how to set up Bold Reports On-Premise Edition in staging and production environment.

## Prepare a staging environment

* Install Bold Reports On-Premise build by following the [Installation link](./../../installation-and-deployment/).

* After the installation completed, configure the Bold Reports On-Premise Edition by following the [application startup link](./../../application-startup/).
   > Configure the Bold Reports with `Microsoft SQL Server` credentials and that should be accessible for other machines.
   >`PostgreSQL` database support is provided on Bold Reports latest version `2.2.23`.

* Start the Bold Reports On-Premise Edition and test all the features in Bold Reports On-Premise.

## Staging to production

### Copy resources

Bold Reports application resources will be available in `C:\Bold Reports` location. We have to copy all the resources except `Utilities` folder to production server or the location will be used for production in same server.

### Create a Bold Reports Site

 IDP application should be added as main site for Bold Reports and it is used to authenticate the users in Bold Reports.

* Go to the IIS, right click the `Sites` and click `Add Website`.
  ![Add Website](/static/assets/on-premise/images/how-to/add-website.png)

* Fill the following details for adding IDP application.

   **Site Name** - Provide the name of the site for production server.

   **Physical path** - IDP folder is need to be provided.

   Example: Extracted location on production machine is `D:\Bold Reports`, then refer the IDP folder path `D:\Bold Reports\IDP`.

   **Bindings** - Provide the same bindings `http` or `https`, which was configured on staging machine.
   Example: In staging machine, if you have bindings as `http` and port number `80`, include same bindings on the production machine site.
    ![Fill Details in Add Website](/static/assets/on-premise/images/how-to/fill-detatils-in-add-website.png)

### Add a reporting application

* Reporting application is a report server application and it should added as sub-application for IDP application.

* Right click the added site to add reporting application.
    ![reporting](/static/assets/on-premise/images/how-to/reporting.png)

* Fill the following details for adding reporting application.

    **Alias** - Provide the Alias as `reporting`.

    **Physical path** - Refer the Report Server folder path from the extracted location on production machine.

    Example: Extracted location on production machine is `D:\Bold Reports`, then refer the Report Server folder path `D:\Bold Reports\Report Server`.

### API application for Bold Reports IDP

* Right click the added site and click `Add Application`.

* Fill the following details as shown in figure and click `ok`, application will be added to the site.
![IDP-API](/static/assets/on-premise/images/how-to/idp-api.png)

   **Alias** - Provide the Alias as `api`.

   **Physical path** - Refer the IDP API folder path from the extracted location on production machine.
    Example: Extracted location on production machine is `D:\Bold Reports`, then refer the IDP API folder path `D:\Bold Reports\IDP\API`.

### UMS application for Bold Reports IDP

* UMS application is an user management application for Bold Reports and it should added as sub-application for IDP application.

* Right click the site and click `Add Application`.

* Fill the following details as shown in figure and click `ok`, application will be added to the site.
![IDP-UMS](/static/assets/on-premise/images/how-to/idp-ums.png)

   **Alias** - Provide the Alias as `ums`.

   **Physical path** - Refer the IDP UMS folder path from the extracted location on production machine.

   Example: Extracted location on production machine is `D:\Bold Reports`, then refer the IDP UMS folder folder path `D:\Bold Reports\IDP\UMS`.

### Windows Authentication application for Bold Reports IDP

* Windows Authentication application is used to authenticate windows directory users in Bold Reports and it should added as sub-application for IDP application.

* Right click the site and click `Add Application`.
* Fill the following details as shown in figure and click `ok`, application will be added to the site.
![IDP Windowsauthentication](/static/assets/on-premise/images/how-to/idp-windowsauthentication.png)
   **Alias** - Provide the Alias as `ums`.

   **Physical path** - Refer the IDP Windows Authentication folder path from the extracted location on production machine.

   Example: Extracted location on production machine is `D:\Bold Reports`, then refer the IDP Windows Authentication folder path `D:\Bold Reports\IDP\WindowsAuthentication`.

### API application for reporting application

* Right click the `reporting` application and click `Add Application`.

* Fill the following details as shown in figure and click `ok`, application will be added to the site.
![Report Server API](/static/assets/on-premise/images/how-to/reporting-api.png)
   **Alias** - Provide the Alias as `api`.

   **Physical path** - Refer the Report Server API folder path from the extracted location on production machine.

   Example: Extracted location on production machine is `D:\Bold Reports`, then refer the Report Server API folder path `D:\Bold Reports\Report Server\API`.

### Jobs application for reporting application

Jobs application is necessary to sent schedule mails to the users and it should be added as sub-application for reporting application.

* Right click the `reporting` application and click `Add Application`.

* Fill the following details as shown in figure and click `ok`, application will be added to the site.
![Report Server Jobs](/static/assets/on-premise/images/how-to/reporting-jobs.png)

   **Alias** - Provide the Alias as `jobs`.

   **Physical path** - Refer the Report Server Jobs folder path from the extracted location on production machine.

   Example: Extracted location on production machine is `D:\Bold Reports`, then refer the Report Server Jobs folder path `D:\Bold Reports\Report Server\Jobs`.

### Report Service application for reporting application

Report Service application is necessary for rendering or designing the report in web designer and it should be added as sub-application for reporting application.

* Right click the `reporting` application and click `Add Application`.

* Fill the following details as shown in figure and click `ok`, application will be added to the site.
![Report Service](/static/assets/on-premise/images/how-to/reporting-reportservice.png)
   **Alias** - Provide the Alias as `report service`.

   **Physical path** - Refer the Report Server Report Service folder path from the extracted location on production machine.

   Example: Extracted location on production machine is `D:\Bold Reports`, then refer the Report Server Report Service folder path `D:\Bold Reports\Report Server\Report Service`.

>After completing all steps, browse the hosted Bold Reports site.
>You can map a new domain for Bold Reports by referring the following [link](./../../installation-and-deployment/#how-to-change-the-binding-in-the-bold-reports-enterprise-reporting)