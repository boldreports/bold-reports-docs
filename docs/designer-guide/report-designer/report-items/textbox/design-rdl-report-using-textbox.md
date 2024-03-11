---
title: Design RDL report using textbox | Web Report Designer
description: Design RDL report using textbox report item, to visually separate a region of the report or to combine Images, Text Boxes, Charts etc in one place.
keywords: ejReportDesigner, reportdesigner, textbox, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Design RDL report using textbox

This section describes the steps to design RDL report using textbox.

## Add textbox to the report

You can add textbox report item in header, footer and body area of the report.

1. Refer [Add a textbox to the report](./../../../report-items/textbox/) section and add a textbox in the report header, body and footer section.
2. In the below snap, the textbox is added in report header to display a title text, report body to display static fields, and in report footer to display a label for signature field in the report.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/enter-text-in-footer-textbox.png)

## Display dynamic text using expression

You can display dynamic values in the textbox using parameters and dataset fields. To achieve this requirement expressions are used. In the below steps, the report parameter is assigned in the textbox to display the dynamic value.

1. Refer [Create Parameter](./../../../report-parameters/add/#create-parameter) section and create a new report parameter
2. Refer [Add a textbox to the report](./../../../report-items/textbox/) section and add a textbox in the report.
3. Focus in the textbox and right click in the text area. The textbox context menu will appear as shown below.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/expression-menu.png '#width=250px')
4. Select the `Expression` option in the menu list. Now, expression editor opens as shown below.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/expression-editor.png '#width=410px')
5. You can choose/specify the required expression in the text area. Here, a `InvoiceID` parameter appended with `#` symbol is assigned as expression.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/set-parameter-value-as-expression.png '#width=410px')
   > To learn more about handling expressions in report designer refer [Expressions](./../../../compose-report/expressions/) section.
6. The specified expression is displayed as `<<Exp>>` in the text area at respective cursor position.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/expression-created.png)
7. Now, when you hover over expression tag, the actual expression is displayed in a tooltip.
   ![Expression tooltip](/static/assets/on-premise/images/report-designer/report-items/textbox/expression-tooltip.png)

## Edit the expression

1. To edit the created expression in the textbox, select the specific `<<Exp>>` tag.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/select-expression-tag.png '#width=245px')
2. Right click on the respective tag to open the context menu.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/open-textbox-context-menu.png)
3. Select the `Expression` option in the menu list. Now, expression editor opens as shown below.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/set-parameter-value-as-expression.png)
4. Now, modify the expression as required and click on the `OK` button.

## Associate a textbox with dataset

Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section to create dataset in Web Report Designer.

### Drag and drop dataset field

1. Open the `DATA` panel and expand the required dataset fields
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/dataset-list-view.png '#width=385px')
2. Drag and drop the required dataset field into the design area,
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/drag-and-drop-dataset-field.png)
3. Now, the new textbox will be added in the design area like below,
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/drag-and-drop-dataset-field-ouput.png)

### Assign the field using expression editor

You can also associate the dataset field in textbox using the expression editor. Refer [Dataset Fields in Expression](./../../../compose-report/expressions/using-dataset-fields/) section.

## Associate a textbox with parameter

Refer [Create Parameter](./../../../report-parameters/add/#create-parameter) section to create report parameter in Web Report Designer.

### Drag and drop parameter field

1. Open the `PARAMETERS` panel, the available parameters in the report will be listed in the panel.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/parameter-list-view.png '#width=355px')
2. Drag and drop the required parameter into the design area,
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/drag-and-drop-parameter.png '#width=425px')
3. Now, the new textbox will be added in the design area like below,
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/drag-and-drop-parameter-ouput.png '#width=425px')

### Assign the parameter using expression editor

You can also associate parameter in textbox using the expression editor. Refer [Dataset Fields in Expression](./../../../compose-report/expressions/using-report-parameters/) section.

## Configure and Format textbox content

You can configure the textbox in below ways:

* Focus the overall textbox element to configure properties for whole textbox content.
* Select the specific text to configure properties for selected text.

### Position and Sizing

To improve the report readability and design, you can set position and sizing properties for the textbox.

![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/position-and-sizing.png)

Report design view after sizing the textboxes,

![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/position-and-sizing-output.png '#width=425px')

### Style textbox content

#### Over all textbox

Select the textbox and open the properties panel. Under the `Basic Settings` and `Appearance` category set the font and alignment properties for the textbox.

![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/style-over-all-textbox.png)

#### Selected text

Select specific text in the textbox and open the properties panel. Now, the `Selected Text` properties will be displayed in the properties panel.

![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/style-selected-text.png)

Under the `Basic Settings` and `Paragraph Settings` category set the font and alignment properties for the selected text.

![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/style-selected-text-output.png)

### Format value in textbox

You can apply format for overall textbox value or to a selected text in a textbox.

#### Format overall textbox

1. Select a textbox in the design area. In the below image, the textbox contains `UnitPrice` dataset field is selected.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/format-dataset-field.png)
2. In the properties pane, to set the format click on the below highlighted button under the `Basic Settings` category.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/format-dataset-field-button.png '#width=385px')
3. Now, the format dialog will open. Refer [Format Data](./../../../compose-report/format-data/) section to set different formats to the data. Here, the `Currency` format is applied to the `Unit Price` dataset field.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/set-format-to-overall-textbox.png '#width=385px')
4. Once you set format, the format will be shown in the properties panel like below,
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/format-value-in-text-area.png '#width=385px')
5. On report preview, the `Unit Price` field value will be displayed like below.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/format-report-preview.png '#width=385px')

#### Format selected text

1. Select a specific text in the textbox.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/apply-format-for-selected-text.png '#width=255px')
2. In the properties pane, to set the format click on the below highlighted button under the `Basic Settings` category.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/selected-text-format-button.png '#width=355px')
3. Now, the format dialog will open. Refer [Format Data](./../../../compose-report/format-data/) section to set different formats to the data. Here, the `Currency` format is applied to the `Unit Price` dataset field.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/set-format-to-overall-textbox.png '#width=355px')
4. Once you set format, the format will be shown in the properties panel like below,
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/format-value-in-text-area.png '#width=355px')
5. On report preview, the `Unit Price` field value will be displayed like below.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/selected-text-format-preview.png '#width=355px')

## Report linking

You can link a report in the textbox, when you click on a specific text it will display the respective report in the report viewer.

### Over all textbox

1. Select a textbox in the design area.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/select-a-textbox-to-link-report.png '#width=245px')
2. In the properties view, enable the `Enable Link` option under `Link` category.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/enable-link-over-all-textbox.png '#width=355px')
3. Refer [Report Linking](./../../../compose-report/link-data/#report-linking) section and set the report path in the textbox.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/set-report-path.png '#width=355px')
4. On report preview, when you click anywhere within the specific textbox will display the `SalesOrderDetail` report in the report viewer.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/report-linking-overall-textbox-preview.png '#width=355px')
5. Once you click on the textbox, the target report will be displayed like below.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/report-linking-overall-textbox-output.png)

### Selected text

1. Select a specific text in the textbox.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/report-linking-selected-text.png '#width=255px')
2. In the properties view, enable the `Enable Link` option under `Link` category.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/report-linking-selected-text-enable-link.png '#width=355px')
3. Refer [Report Linking](./../../../compose-report/link-data/#report-linking) section and set the report path in the textbox.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/set-report-path.png '#width=355px')
4. On report preview, when you click on the `here` text in the respective textbox will display the `SalesOrderDetail` report in the report viewer.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/report-linking-selected-text-preview.png)
5. Once you click on the textbox, the target report will be displayed like below.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/report-linking-overall-textbox-output.png)

## Add hyperlink

You can define the events to take place when users click on the text box or certain area displayed on a report.

### Over all textbox

1. Select a textbox in the design area.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/add-hyper-link-select-textbox.png '#width=285px')
2. In the properties view, enable the `Enable Link` option under `Link` category.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/enable-link-over-all-textbox.png '#width=355px')
3. Refer [Hyperlink](./../../../compose-report/link-data/#hyperlink) section and set the URL in the textbox.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/set-report-url.png '#width=355px')
4. On report preview, when you click anywhere within the specific textbox will display the `SalesOrderDetail` report in the report viewer on the new tab in browser.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/hyperlink-report-preview.png)

### Selected text

1. Select a specific text in the textbox.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/report-linking-selected-text.png '#width=285px')
2. In the properties view, enable the `Enable Link` option under `Link` category.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/report-linking-selected-text-enable-link.png '#width=355px')
3. Refer [Hyperlink](./../../../compose-report/link-data/#hyperlink) section and set the URL in the textbox.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/set-report-url.png '#width=355px')
4. On report preview, when you click on the `here` text in the respective textbox will display the `SalesOrderDetail` report in the report viewer on the new tab in browser.
   ![Design report using textbox](/static/assets/on-premise/images/report-designer/report-items/textbox/hyperlink-report-preview.png)