---
layout: post
title:  Import users once for all sites in Bold Report Server
description: This documentation explains about the import users once for all sites in Bold Reports Report Server.
platform: report-platform
documentation: ug
---

# Will the OpenID user have access to site2? When, if the user is imported from OpenID connect under site1

If the user is imported from OpenID connect on site1, then the user doesn't have access to site2. But, it would be possible, if the admin grants access to the site2 for the imported user in UMS.

To learn more about Grant Access, you can refer [here](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-tenants/manage-sites/#grant-access).

The following image shows the grant access permission to the new user.

![Grant Access](/static/assets/on-premise/images/faq/grant-access.png)

Once the admin grants access in UMS, the user can access the site2 with limited reporting permission in Report Server. We can also provide additional permission to the user by using manage permission. The following image shows how to manage permission to add to the user.

![Manage Permission](/static/assets/on-premise/images/faq/manage-permission.png)

To learn more about Manage Permissions, you can refer [here](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-permissions/).

On the other hand, it is not required for the admin to grant access to site2. When the same Open ID settings are configured on site2, the user will automatically be imported and logged into site2.