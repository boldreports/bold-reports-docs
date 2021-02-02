---
title: SSRS Background image property | Web Report Designer
description: This section describes about SSRS background image property and how to set it in report sections with Bold Report Designer
keywords: ejReportDesigner, reportdesigner, background image, ssrs, embedded image, database image
---

# Background image

Background image property allows you to show an image in the background of a report sections such as the page header, page footer, or report body. The source for background image can be a URL of an image on the report server, an image from a dataset field, or an embedded image.

Open the properties of report sections(page header, page footer, or report body) to which you want to add a background image. The background image properties are listed under `Background Image` category in properties panel.

![Background image property](/static/assets/on-premise/images/report-designer/compose-report/background-image/background-image-property.png)

## Source

**External** - An image that can be accessed via a URL.

![Background image source external](/static/assets/on-premise/images/report-designer/compose-report/background-image/source-external.png)

**Embedded** - An image that is part of the report definition.

![Background image source embedded](/static/assets/on-premise/images/report-designer/compose-report/background-image/source-embedded.png)

**Database** - An image stored in a database, which is accessed through a dataset.

![Background image source database](/static/assets/on-premise/images/report-designer/compose-report/background-image/source-database.png)

## Value

If `External` provide the image URL.

![External value as image](/static/assets/on-premise/images/report-designer/compose-report/background-image/external-value.png)

If `Embedded` set the embedded image name.

![Embedded value as image](/static/assets/on-premise/images/report-designer/compose-report/background-image/embedded-value.png)

If `Database` choose the dataset field that contains the image.

![Database value as image](/static/assets/on-premise/images/report-designer/compose-report/background-image/database-value.png)

## MIME Type

Set the `MIME Type` property to get images from the database to work. If the `Source` property is set to `External` or `Embedded`, the value of MIME type is ignored.

![MIME property](/static/assets/on-premise/images/report-designer/compose-report/background-image/mime-type-property.png)

## Background repeat

![Background repeat](/static/assets/on-premise/images/report-designer/compose-report/background-image/background-repeat.png)

**Repeat**: Repeats the image in both horizontal and vertical direction.

**RepeatX**: Repeats the image in horizontal direction.

**RepeatY**: Repeats the image in vertical direction.

**Clip**: Image appears once, anchored in top left corner.

**Fit**: Fits the image in container.

## Add company logo as the background to a report

Open the `Body` properties in properties pane.

![Body properties](/static/assets/on-premise/images/report-designer/compose-report/background-image/body-properties.png)

[Embed the required image](./../../image-manager/add-image/) in the report.
Set the `Source` type as `Embedded` and choose the embedded image in `Value` field. Then set the background repeat as required.

![Set Bacground for report body](/static/assets/on-premise/images/report-designer/compose-report/background-image/set-bg-image-in-body.png)

> Similarly, you can set background image in report header, footer and overall report.

This is how the background image appears in Design mode:

![Background image design](/static/assets/on-premise/images/report-designer/compose-report/background-image/design-mode.png)

This is how the background image appears in Preview mode:

![Background image preview](/static/assets/on-premise/images/report-designer/compose-report/background-image/preview-mode.png)