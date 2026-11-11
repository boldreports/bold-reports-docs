---
title: Link a Shared Dataset in Web Report Designer | Bold Reports
description: Link a shared dataset published on Bold Reports Report Server to your RDL reports in the Web Report Designer so you can manage the data feed in one place.
---

# Link a shared dataset

A shared dataset that you create in Bold Reports<sup>®</sup> Report Server can be linked with reports in the Web Report Designer. You link it from the `Data` panel so several reports use the same data feed.

## How do I link a shared dataset?

You link a shared dataset in the Bold Reports<sup>®</sup> Web Report Designer with the following steps:

1. Click the `Data` icon in the configuration panel to launch the `Data` configuration.

   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/dataset/data-icon-configuration-panel.png '#width=245px')

2. Click the `SHARED DATA` button in the `Data` panel.

   ![Click on shared data button](/static/assets/on-premise/images/report-designer/manage-data/dataset/shared-data-button.png '#width=385px')

3. Review the new dataset wizard, which opens after you click `SHARED DATA`, as shown below.

   ![Click on new dataset button](/static/assets/on-premise/images/report-designer/manage-data/dataset/new-dataset-button.png '#width=385px')

4. In the **Name** field, specify the dataset name without special characters.

5. In the **Shared DataSet** field, select an existing shared dataset in the server from the drop-down list.
      ![Shared data fields panel](/static/assets/on-premise/images/report-designer/manage-data/dataset/shared-data-fields.png '#width=355px')
6. Click the `Save` button. The new shared dataset is added to the report, as shown below.

   ![Data list view](/static/assets/on-premise/images/report-designer/manage-data/dataset/data-list-view.png '#width=385px')

   > Note: You can link multiple shared dataset into the report.

## Frequently asked questions

### Can I link more than one shared dataset to a report?

Yes. The Bold Reports<sup>®</sup> Web Report Designer lets you link multiple shared datasets into the report.

### Where do shared datasets come from?

Shared datasets are created in Bold Reports<sup>®</sup> Report Server. The **Shared DataSet** drop-down lists the existing shared datasets in the server.

## See also

* [Modify a shared dataset](./../modify-shared-dataset/)
* [Create an embedded dataset](./../create-an-embedded-dataset/)
* [Dataset parameters](./../dataset-parameters/)
