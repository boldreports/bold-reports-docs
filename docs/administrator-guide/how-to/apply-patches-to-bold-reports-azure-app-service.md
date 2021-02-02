---
title: Apply patches to Bold Reports Azure Multi-tenant App Service
description: This documentation explains how to apply the support team provided patches to Bold Reports Multi-tenant Azure App Service.
keywords: report-platform
---

# How to apply the patches to Bold Reports Multi-tenant Azure App Service

The support team provides solutions to reported issues in the form of patch files and this topic explains about how to apply these patch files to the Bold Reports Multi-tenant Azure App Service.

Steps to apply patches in Bold Reports Multi-tenant Azure App Service.
1. Log in to the [Azure portal](https://portal.azure.com/).
2. Select the Bold Reports Azure App Service.
3. Stop the Bold Reports Azure App Service, and then click the Get publish profile.
4. Save the `<App service name>`, PublishSettings file and open it. The file contains three `<publishProfile>` sections for Web Deploy, FTP, and ReadOnly-FTP.
5. From the FTP `<publishProfile>` section, copy the following values:

    `publishUrl`

    `userName`

    `userPWD`
    ![publishProfile](/static/assets/on-premise/images/how-to/publish-profile.png)
6. Download and install the FileZilla client application.
7. After installing the application, set the values obtained from the PublishSettings file accordingly:

    **Host**: Give the `publishUrl` value.

    **Username**: Give the `userName` value.

    **Password**: Give the `userPWD` value.
8. After entering these values as shown in the following image, click `Quickconnect`.
   ![Connect With Filezilla](/static/assets/on-premise/images/how-to/connecting-values-in-file-zilla.png)
9. Download and extract the files provided in the support incident.
10. Move the folders to the hosted location of the Report Server `/site/wwwroot/Report Server/` as follows.
  ![Report Server Location](/static/assets/on-premise/images/how-to/report-server-location.png)
     >If the patch was provided for IDP, then move the folders to the hosted location of the IDP `/site/wwwroot/IDP/`.
     >![IDP Location](/static/assets/on-premise/images/how-to/idp-location.png)
11. Start the Bold Reports Azure App Service.