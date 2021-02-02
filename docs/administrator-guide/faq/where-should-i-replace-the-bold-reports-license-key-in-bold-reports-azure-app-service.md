---
layout: post
title: Replace your license key in Bold Reports Azure App Service
description: This documentation explains where to replace your Bold Reports license key in Bold Reports Azure App Service
platform: report-platform
documentation: ug
---

# Where should I replace the Bold Reports license key in Bold Reports Azure App Service

By default, the Bold Reports Azure App Service will have an expired license key. You need to replace your Bold Reports license key in the Bold Reports Azure App Service by following these steps:

1. Login into your [Azure Portal](https://portal.azure.com/).
2. Press the Stop option to stop the Bold Reports Azure App Service.
3. Choose the `App Service editor` under the Development tool in the options as follows.
   ![App Service Editor](/static/assets/on-premise/images/faq/app-service-editor.png)
4. Now, the deployed files will be displayed.
5. Navigate to this location `/site/wwwroot/Report Server/Configuration/BoldLicense.txt` and replace your license key.
6. Then, start the Bold Reports Azure App Service.

## See also

[Create Bold Reports Azure App Service using ARM template](./../../create-app-service/)

[Upgrade Bold Reports Azure App Service from v1.x to latest](./../../upgrade/azure/upgrade-v1.x/)

[Upgrade Syncfusion Report Server Azure App Service from v4.x to latest](./../../upgrade/azure/upgrade-v1.x/)