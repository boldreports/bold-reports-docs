---
layout: post
title: Log files location in Bold Reports Azure App Service
description: This topic explains about where to find the error logs and debug files to identify the issues in the Bold Reports Azure App Service.
platform: report-platform
documentation: ug
---

# Where can i find the error and debug log files of Bold Reports Azure App Service

## Error logs

Error log files are generated when an exception occurs while configuring or interacting with the Bold Reports application.

## Debug logs

Event log files record the complete user interaction details one after the other when users interact with the Bold Reports application.

## Log directories

For any configurations made in the Bold Reports, log files are generated in deployed locations under the various modules listed in the following table based on the nature of the error or event.

> By default, the Bold Reports Azure App Service will be deployed in `/site/wwwroot/` location.

| Application           | Log Location|
|------------------     |------------------------------------------------------------  |
| Identity Provider     | **`{Deployed Location}`**\IDP\App_Data\Logs                   |
| Report Server         | **`{Deployed Location}`**\Report Server\App_Data\Logs         |

### Steps to get the log files from Bold Reports Azure App service

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
9. You can find the logs of Report Server and IDP application from the following location as shown in the table.
   | Application Log location| Log location  image                                                |
   |------------------     |------------------------------------------------------------|
   | `/site/wwwroot/IDP/App_Data/Logs`|![Report Server Logs Location](/static/assets/on-premise/images/how-to/idp-logs.png)|
   |`/site/wwwroot/Report Server/App_Data/Logs`|![IDP Logs Location](/static/assets/on-premise/images/how-to/report-server-logs.png)|