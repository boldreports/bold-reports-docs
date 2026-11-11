---
layout: post
title: Localize Report Server Versions Below 3.1 | Bold Reports
description: Localize Bold Reports On-Premises Edition versions below 3.1 by placing the messages.po file in a culture folder inside the Report Server locale folder.
platform: report-platform
documentation: ug
---

# Localization for Bold Reports<sup>®</sup> Report Server versions below 3.1

To localize Bold Reports<sup>®</sup> On-Premises Edition versions below 3.1, you add the `messages.po` file to a culture folder inside the Report Server locale folder.

## Where is the locale folder?

The Bold Reports<sup>®</sup> Report Server locale folder for versions below 3.1 is at the following path: `{Installed_location}\Bold Reports\Report Server\locale`.

* For example, if you are translating to German, create a folder named **de-DE** and paste the `messages.po` file.
    ![Create New Folder](/static/assets/on-premise/images/localization/create-new-folder.png)

* Then, refresh your Bold Reports<sup>®</sup> site and select the preferred language.
    ![Select Language](/static/assets/on-premise/images/localization/select-language.png)

## See also

* [Localization overview](../)
* [Localization and globalization](../localization/)
* [Report Server settings](../../manage-app-settings/)
