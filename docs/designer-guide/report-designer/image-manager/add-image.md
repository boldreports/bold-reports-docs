---
title: Add an Embedded Image to an RDL Report | Bold Reports
description: Add an embedded image to an RDL report with the Image Manager in Bold Reports Web Report Designer, so the image is always available to that report.
keywords: ejReportDesigner, reportdesigner, image, manager, Descending
---

# Add an embedded image with the Bold Reports<sup>®</sup> Image Manager

The Image Manager in Bold Reports<sup>®</sup> Web Report Designer adds an embedded image to the report, and that image is always available to the report. The embedded images in a report are listed in the `Image Manager` panel.

## Add an embedded image

You add an embedded image in Web Report Designer from the **Add Image** button in the `IMAGE MANAGER` panel.

1. Click the **Image Manager** icon in the configuration panel.
   ![hover-imagemanager](/static/assets/on-premise/images/report-designer/imagemanager/imagemanager-icon.png '#width=250px')
2. Click the **Add Image** button in the `IMAGE MANAGER` panel.
   ![imagemanager-panel](/static/assets/on-premise/images/report-designer/imagemanager/imagemanager-panel.png '#width=350px')
3. Select an image and click the `Open` button.
   ![upload-dialog](/static/assets/on-premise/images/report-designer/imagemanager/add-image-dialog.png '#width=400px')
   > Note: Images can be of the BMP, GIF, JPG, PNG, X-PNG or SVG type.
4. The image is embedded in the report and listed under the **IMAGE MANAGER** panel.
   ![upload-single-image](/static/assets/on-premise/images/report-designer/imagemanager/upload-image-in-imagemanager.png '#width=350px')
   > Note: Only one image can be imported at a time. To add more images, repeat steps 2 to 4.

   ![upload-multiple-image](/static/assets/on-premise/images/report-designer/imagemanager/images-in-list-view.png '#width=350px')

## How do I design a report using an embedded image?

You add an embedded image to the design area in Web Report Designer from the **IMAGE MANAGER** panel.

1. Hover the mouse over the image in the **IMAGE MANAGER** panel.
   ![hover-image](/static/assets/on-premise/images/report-designer/imagemanager/hover-an-image.png '#width=300px')
2. Click the `plus` icon. The image item is added to the design area.
   ![add-to-designer-surface](/static/assets/on-premise/images/report-designer/imagemanager/add-image-to-designArea.png '#width=300px')
3. The following image shows a simple report designed with an embedded image.
    ![add-image-to-header-footer](/static/assets/on-premise/images/report-designer/imagemanager/image-in-header-footer.png '#width=400px')

> Download the above report design from the [image manager sample report on GitHub](https://github.com/boldreports/resources/tree/master/docs/report-designer/image-manager/add-image.rdl).

## Frequently asked questions

### Which image types can I embed?

Images can be of the BMP, GIF, JPG, PNG, X-PNG, or SVG type.

### Can I import several images at once?

No. Only one image can be imported at a time. Repeat the add steps to add more images.

## See also

* [Delete an embedded image](./../../image-manager/delete-image/)
* [Image manager](./../../image-manager/)
* [Background image](./../../compose-report/background-image/)
