---
title: Simple steps on image reportitem using web report designer.
description: Design ssrs rdl report using image report item, to add an image in a report using web report designer.
keywords: ejReportDesigner, reportdesigner, image, reportitem, border
---

# Image

Image reportitem is used to display images in a report and it can be loaded from external link, data fields and embedded images in report.  Images can be of the BMP, GIF, JPG, PNG, or X-PNG type.

## Add a image to the report

1. The image reportitem is listed in the item panel under the `Basic Items` category.
![image listed in itempanel](/static/assets/on-premise/images/report-designer/report-items/image/image-reportitem-itempanel.png)

2. Drag and drop the image reportitem into the design area from the item panel.
![Drag and drop image reportitem into design area](/static/assets/on-premise/images/report-designer/report-items/image/image-reportitem-designarea.png)

3. Once you drop the image item into design area, respective item properties will be listed the properties panel.
![image item with properties view](/static/assets/on-premise/images/report-designer/report-items/image/image-properties.png)

## Image properties

### Basic Settings

`Basic Settings` contains `Source` and `Value` properties. `Source` includes **Embedded**, **External**, **Database** image type as shown below.

![image reportitem basic setting](/static/assets/on-premise/images/report-designer/report-items/image/basic-properties.png)

* **External**

    External image source can be used to display the dynamic image in the report, by specifying a URL to the image or set an [Expression](./../../compose-report/link-data/#set-expression) that evaluates to the URL. To add an external image in a report, specify a valid URL in the value property text field.    ![image reportitem external type](/static/assets/on-premise/images/report-designer/report-items/image/image-external-type.png)

* **Embedded**

    Embedded option is used to display the embedded image that are available in the report. To embed an image in a report, refer [Image Manager](./../../image-manager/add-image/#add-an-embedded-image) section.
    ![image reportitem basic setting](/static/assets/on-premise/images/report-designer/report-items/image/image-basic-settings.png)

* **Database**

    Database option can be used to display images from image data stored in a database. `Value` and `MIME Type` properties are listed under `Database` option.

    * **Value**

        The available dataset fields in the report will be listed in the value field drop-down. Choose a dataset field that is bounds to a database field that contains an image or set an [Expression](./../../compose-report/link-data/#set-expression) that evaluates to the image value.        ![image reportitem value](/static/assets/on-premise/images/report-designer/report-items/image/image-database-value.png)

    * **MIME Type**

        MIME property can be used to specify the type of image. Supported MIME types are listed in the MIME property drop-down list. Choose the MIME type as per your image type.

        ![image reportitem mime type](/static/assets/on-premise/images/report-designer/report-items/image/image-mime-type.png)

### Link

Linking is used to create interactive report using **Hyperlink** and **Report Linking** action. Refer [Linking](./../../compose-report/link-data/) section to know more about linking. Select the `Enable  Link` checkbox, to enable the sub properties.![show-link-action](/static/assets/on-premise/images/report-designer/report-items/image/enable-link-action.png)

### Appearance

`Appearance` is used to improvise the style of an image layout. Border style, color, width properties are listed under the `Appearance` category.
![subreport appearance](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-appearence.png)

#### Border

Border properties are used to add or customize the border around an image report item to visually separate items in the report design. To set border properties to the image report item using properties panel refer [Border Properties](./../../compose-report/common-properties/#border-properties) section.

### Size

Sizing property allow us to format the size of the images displayed in the design area. It includes four options to adjust the image display, choose the required size in the `Sizing` drop-down list.

* AutoSize
* Fit
* FitProportional
* Clip

![Image reportitem sizing](/static/assets/on-premise/images/report-designer/report-items/image/image-sizing.png)

#### AutoSize

AutoSize option will display the original size of an image in the design area.

#### Fit to Size

Fit option allows to fit the image inside the image reportitem.

#### Fit Proportional

FitProportional is used to fit the image inside the image reportitem while maintaining certain aspect ratio.

#### Clip

Clip option is used to display an image from the top left corner of the picture in the image reportitem. If the image is larger than the image reportitem, only a portion of the image is displayed.

### Position

Position property is used to set the width, height, left and top position of the image item in the report design. To handle these properties using properties panel refer [Position](./../../compose-report/common-properties/#position) section.![subreport item position](/static/assets/on-premise/images/report-designer/report-items/subreport/subreport-norows-position.png)

### Visibility

Visibility property is used to conditionally show or hide the image report item on report preview or export action. To set visibility of image item using properties panel refer [Visibility](./../../compose-report/common-properties/#visibility) section.

### Miscellaneous

<span style="font-weight:bold">Custom attributes</span>

This property can be used to set the values for image report item custom properties. To assign values for custom properties using properties panel refer [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.

#### Document Map

A document map is a navigational feature that displays a separate side pane with set of navigational links in hierarchical structure when you view a report. A user can click the content in the list, to navigate to the report page that displays that item. Refer [Document Map](./../../compose-report/document-map/) section to configure document map in the report design.

You can set the static or dynamic text as value for document map property. To set and reset dynamic text, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

<span style="font-weight:bold">Bookmark</span>

Bookmark links allows the users to navigate to different parts of a SSRS report. You can add bookmarks to each textbox, image, table or chart or to the unique group values displayed in a tablix which can direct the users to specified locations in the report. The value of bookmark property can be your own strings or an expression. Refer [Bookmark](./../../compose-report/bookmark/) section to configure bookmark in the report design.

<span style="font-weight:bold">Tooltip</span>

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for image report item using properties panel refer [Tooltip](./../../compose-report/common-properties/#tooltip) section.