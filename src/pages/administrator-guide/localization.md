---
layout: post
title: Localization and globalization | Report Server | Syncfusion
description: Describes the step-by-step procedure to localize and globalize the Bold Reports On-Premise into different cultures at runtime.
platform: report-platform
documentation: ug
---

# Localization

Localization is the process of adapting a website into different linguistic and cultural contexts - involving much more than the simple translation of text.

The default language is English “en-US” for Bold Reports On-Premise. Read the following documentation for more details.

## Adding new localizations

Clone your own culture for the [Bold Report Server](https://github.com/boldreports/server-localization) and add it in the application anytime.
![clone-po-file](/static/assets/on-premise/images/localization/clone-po-file.png)

## Adding localizations to the Bold Report On premise

* Copy your own culture **messages.po** file from the location where you are cloned from GitHub
![Copy-Po-File](/static/assets/on-premise/images/localization/copy-po-file.png)

* Create a folder in **C:\Bold Reports\Report Server\locale** with {language code}-{country code} and paste the cloned messages.po file inside the newly created folder.

   For example, if you are translating to Germany, create a folder named de-DE and paste the messages.po like the below.

  **C:\Bold Reports\Report Server\locale\de-DE\messages.po**
![Create New Folder](/static/assets/on-premise/images/localization/create-new-folder.png)

* Then refresh Your Bold Report On Premise source and select the preferred language.
![Select Language](/static/assets/on-premise/images/localization/select-language.png)