---
title: Set a Background Image in Web Report Designer | {{site.productName}}
description: Set a background image for the page header, footer, body, or a rectangle in {{site.productName}} Web Report Designer from a URL, dataset field, or embedded image.
keywords: ejReportDesigner, reportdesigner, background image, ssrs, embedded image, database image
---

# Set a background image in {{site.productNameTM}} Web Report Designer

In {{site.productNameTM}} Web Report Designer, the Background image property shows an image behind the page header, page footer, report body, or a report item such as a rectangle. The source for background image can be a URL of an image on the {{site.productNameTM}} Report Server, an image from a dataset field, or an embedded image.

Prefer watching over reading? Watch the video on setting a background image for a report:

`youtube: https://www.youtube.com/watch?v=lH-JJ-KLCIA`

## Where are the background image properties?

The Web Report Designer lists the background image properties under the `Background Image` category in the properties panel. Open the properties of the report section (page header, page footer, or report body) to which you want to add a background image.

![Background image property](/static/assets/on-premise/images/report-designer/compose-report/background-image/background-image-property.png '#width=350px')

## Source

The Web Report Designer `Source` property sets where the background image comes from. You can choose one of the following sources:

**External** - An image that can be accessed via a URL.

![Background image source external](/static/assets/on-premise/images/report-designer/compose-report/background-image/source-external.png '#width=350px')

**Embedded** - An image that is part of the report definition.

![Background image source embedded](/static/assets/on-premise/images/report-designer/compose-report/background-image/source-embedded.png '#width=350px')

**Database** - An image stored in a database, which is accessed through a dataset.

![Background image source database](/static/assets/on-premise/images/report-designer/compose-report/background-image/source-database.png '#width=350px')

## Value

The Web Report Designer `Value` property depends on the selected `Source`.

If `External`, provide the image URL.

![External value as image](/static/assets/on-premise/images/report-designer/compose-report/background-image/external-value.png  '#width=350px')

If `Embedded`, set the embedded image name.

![Embedded value as image](/static/assets/on-premise/images/report-designer/compose-report/background-image/embedded-value.png '#width=350px')

If `Database`, choose the dataset field that contains the image.

![Database value as image](/static/assets/on-premise/images/report-designer/compose-report/background-image/database-value.png '#width=350px')

## MIME Type

The Web Report Designer `MIME Type` property must be set for images from the database to work. If the `Source` property is set to `External` or `Embedded`, the value of MIME type is ignored.

![MIME property](/static/assets/on-premise/images/report-designer/compose-report/background-image/mime-type-property.png '#width=350px')

## Background repeat

The Web Report Designer background repeat property controls how the image fills the container. The options are listed below the image.

![Background repeat](/static/assets/on-premise/images/report-designer/compose-report/background-image/background-repeat.png '#width=350px')

**Repeat**: Repeats the image in both horizontal and vertical direction.

**RepeatX**: Repeats the image in horizontal direction.

**RepeatY**: Repeats the image in vertical direction.

**Clip**: Image appears once, anchored in top left corner.

**Fit**: Fits the image in container.

## How do I add a company logo as the background to a report?

You add a company logo as a report background in Web Report Designer by embedding the image and setting it on the report body.

1. Open the `Body` properties in properties pane.

    ![Body properties](/static/assets/on-premise/images/report-designer/compose-report/background-image/body-properties.png '#width=350px')

2. [Embed the required image](./../../image-manager/add-image/) in the report.
3. Set the `Source` type as `Embedded` and choose the embedded image in the `Value` field.
4. Set the background repeat as required.

    ![Set Bacground for report body](/static/assets/on-premise/images/report-designer/compose-report/background-image/set-bg-image-in-body.png '#width=350px')

> Similarly, you can set background image in report header, footer and overall report.

The following image shows how the background image appears in Design mode:

![Background image design](/static/assets/on-premise/images/report-designer/compose-report/background-image/design-mode.png '#width=350px')

The following image shows how the background image appears in Preview mode:

![Background image preview](/static/assets/on-premise/images/report-designer/compose-report/background-image/preview-mode.png '#width=350px')

## Frequently asked questions

### Which image sources can I use for a background image?

Web Report Designer supports three sources: External (an image URL), Embedded (an image that is part of the report definition), and Database (an image accessed through a dataset).

### When is the MIME Type property used?

The MIME Type property is required for images from the database. If the `Source` property is `External` or `Embedded`, the MIME type value is ignored.

## See also

* [Add an image to the report](./../../image-manager/add-image/)
* [Header, body, and footer properties](./../header-body-and-footer-properties/)
* [Report properties](./../report-properties/)
