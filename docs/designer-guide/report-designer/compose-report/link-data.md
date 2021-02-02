---
title: Simple steps for linking actions using web report designer
description: This section describes about SSRS linking and how to define linking actions, drill through using Bold Report Designer
keywords: ejReportDesigner, reportdesigner, linking, drillthrough, parameters
---

# Linking

Linking can be used to create an interactive report using **Hyperlink** and **Report Linking** action. This property is listed under `Link` category in properties panel.

   ![show-link-action](/static/assets/on-premise/images/report-designer/compose-report/link-data/enable-link-action.png)

## Report Linking

Report Linking allows to access the main report from the server and retains the original report definition.

### Report Path
  
   1. Choose `Report` option in the `Link To` dropdown, now the fields required to configure report path will be enabled under the link property.

      ![link-fields](/static/assets/on-premise/images/report-designer/compose-report/link-data/enable-report-action.png)

   2. Click on the browse button in **Report** option as shown below.

      ![link-fields](/static/assets/on-premise/images/report-designer/compose-report/link-data/link-reportfields.png)

   3. Open any folder in the browse dialog.

      ![browse-from-dialog](/static/assets/on-premise/images/report-designer/compose-report/link-data/browse-report-dialog.png)

   4. Select any report that are shown in the browse dialog and click **OK**.

      ![select report from folder](/static/assets/on-premise/images/report-designer/compose-report/link-data/select-report.png)

   5. Selected report path is linked in the **Report** option as shown below.

      ![selected report path](/static/assets/on-premise/images/report-designer/compose-report/link-data/report-path.png)

#### Set Parameters

To specify parameters for **Report Linking**, follow the below steps.

   1. Click on the `Set Parameters` button, `Parameters` dialog will be open as shown below.

      ![show-parameter-dialog](/static/assets/on-premise/images/report-designer/compose-report/link-data/enable-link-parameter-dialog.png)

   2. The main report parameter names are available in the drop-down list, if the report is linked with the main report. To add **New** parameter, click on the **Add** icon.

      ![Add-row-in-link-parameter-dialog](/static/assets/on-premise/images/report-designer/compose-report/link-data/add-row-in-link-parameter.png)

   3. In the **Parameter Name**, enter the name of the report parameter.

   4. In the **Value**, enter the parameter value.

      ![shown-expression](/static/assets/on-premise/images/report-designer/compose-report/link-data/expression-icon.png)

   5. Click on the **OK** button to save the parameters.

#### Set Expression

Follow steps 1 - 4, to add parameters.

1. To edit/create an expression, click on the square icon and select `Expression`.

     ![menu-in-expression](/static/assets/on-premise/images/report-designer/compose-report/link-data/expression-menu.png)

2. `Expression` dialog will be open as shown below, Refer [Expression](./../../compose-report/expressions/) section for better understanding with the following sections.    ![shown-expression-dialog](/static/assets/on-premise/images/report-designer/compose-report/link-data/expression-dialog.png)

3. The icon will be indicated in `Black color`, if the expression is applied to the parameter.

   ![set-expression](/static/assets/on-premise/images/report-designer/compose-report/link-data/set-an-expression.png)

#### Reset Expression

1. To reset an expression, click on the square icon and select `Reset`.
![Select reset option](/static/assets/on-premise/images/report-designer/compose-report/link-data/select-reset-option.png)

2. The icon will be indicated in `White color`, after reset action.
![After reset expression](/static/assets/on-premise/images/report-designer/compose-report/link-data/after-reset.png)

#### Remove Parameters

Click `Delete` icon to remove the parameters.

![parameter-delete-action](/static/assets/on-premise/images/report-designer/compose-report/link-data/delete-parameter.png)

## Hyperlink

Hyperlink is used to link to a webpages in a report. Follow the below steps to add a hyperlink.

### Add a hyperlink

1. Select **URL** option in the `Link To` property dropdown, now the fields required to specify external URL will be enabled under the link property.

   ![enable-url-in-link](/static/assets/on-premise/images/report-designer/compose-report/link-data/enable-link-url.png)

2. In **URL** option, enter URL or set an [Expression](./../../compose-report/link-data/#set-expression) that evaluates to the URL as shown below.   ![provide-the-url](/static/assets/on-premise/images/report-designer/compose-report/link-data/enable-link-url-save.png)

3. To view the link, click **Preview** and click on the report item, it will navigate to the given **URL** link.
