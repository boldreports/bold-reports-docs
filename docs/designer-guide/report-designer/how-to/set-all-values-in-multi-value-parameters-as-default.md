---
layout: post
title: Select all the available values in parameter list as default
description: This section briefly describes about how to select all the values in the parameter list as default in a report
platform: report-platform
documentation: ug
---

# How to select all the available values in the parameter list as default in the report

Refer [Create Parameter](./../../report-parameters/add/#create-parameter) section for better understanding with the following steps.

![Create new parameter](/static/assets/on-premise/images/report-designer/how-to/set-all-values-in-multi-value-parameters-as-default/new-parameter.png '#width=400px')

Click on `Assign Value >>` to open parameter assign dialog.

![Parameter assign values dialog](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/parameter-assign-values-dialog.png '#width=400px')

By default, the parameter dialog will be launched with `Available Value` tab. Refer [Available Values](./../../report-parameters/define-available-values-for-parameter/#query-values) section and choose the required dataset values in the dropdown's.

![Available Value](/static/assets/on-premise/images/report-designer/how-to/set-all-values-in-multi-value-parameters-as-default/available-values.png '#width=400px')

Next, switch over to `Default Value` tab, which has below options.

![Default value option](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-value-option.png '#width=400px')

Select **Query Value** option under **Default Value** tab.

![Default tab query value](/static/assets/on-premise/images/report-designer/report-parameters/add-report-parameter/default-tab-query-value.png '#width=400px')

Choose the dataset and the value field. The selection of the dataset and the value field should be same as the **Available Value** data set and value field query value.

![default value](/static/assets/on-premise/images/report-designer/how-to/set-all-values-in-multi-value-parameters-as-default/set-default-values.png)

Now, save the parameter and preview the report. By default, the report renders with all available values in the parameter list.

![output image](/static/assets/on-premise/images/report-designer/how-to/set-all-values-in-multi-value-parameters-as-default/parameter-default-values-output.png '#width=600px')