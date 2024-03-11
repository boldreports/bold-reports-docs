---
layout: post
title: Localization and globalization | Report Server | Syncfusion
description: Describes the step-by-step procedure to localize and globalize the Bold Reports On-Premise into different cultures at runtime.
platform: report-platform
documentation: ug
---

# Localization

Localization is the process of adapting a website into different linguistic and cultural contexts - involving much more than the simple translation of the text.

The default language is English “en-US” for Bold Reports On-Premise. Read the following documentation for more details.

## Adding new localizations

Clone your own culture for the [Bold Report Server](https://github.com/boldreports/server-localization) and add it to the application anytime.

![clone-po-file](/static/assets/on-premise/images/localization/clone-po-file.png)

## Adding localizations to the Bold Report On-premise

Copy your own culture **messages.po** file from the location where you have cloned from GitHub
![Copy-Po-File](/static/assets/on-premise/images/localization/copy-po-file.png)

Create a folder in the locale folder  with {language code}-{country code} and paste the cloned messages.po file inside the newly created folder.

| Installation Type | Folder Path |
| ----------------- | ----------- |
| Windows | Navigate to below installer folder: <br> {Installed_location}\BoldServices\reporting\web\locale</br> |
| Docker | Bash into the reports-web container. <br> Inside the container, go to the below location:</br> "/application/reporting/web/locale" |

### Windows

For example, if you are translating to Germany, create a folder named de-DE and paste the messages.po like the below.

![Create New Folder](/static/assets/on-premise/images/localization/version-create-new-folder.png)

Then refresh your Bold Report On-Premise source and select the preferred language.

![Select Language](/static/assets/on-premise/images/localization/version-select-language.png)

### Docker

![Create Docker](/static/assets/on-premise/images/localization/docker-create-new-folder.png)

## Localization for applications below v3.1

### Folder path

Locale folder path: `{Installed_location}\Bold Reports\Report Server\locale`

For example, if you are translating to Germany, create a folder named de-DE and paste the messages.po like the below.

![Create New Folder](/static/assets/on-premise/images/localization/create-new-folder.png)

Then refresh your Bold Report On-Premise source and select the preferred language.

![Select Language](/static/assets/on-premise/images/localization/select-language.png)