---
layout: post
title: Load Local Files with Bold Data Hub | {{site.productName}}
description: Use the FileSystem reader source in Bold Data Hub to load CSV, Excel, JSON, and YAML files from a local path into {{site.productName}} and schedule the data refresh.
platform: Report-platform
documentation: ug

---

# Load local files with the Bold Data Hub FileSystem connector

The Bold Data Hub FileSystem connector streams files from the local ``filesystem`` into {{site.productNameTM}} by using the reader source.

## Which file types does the FileSystem connector support?

The Bold Data Hub FileSystem reader source supports these file types:

* Csv files
* Excel files
* Json files
* yaml files

## Example Configuration

The following Bold Data Hub YAML template shows a FileSystem extractor configuration:

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: FileSystem
      connectorname: FileSystem
      config:
      properties:
        type: <csv/excel/jsonl>
        filepath: <Paste the copied file path>
        # sheetname is required for excel type
        sheetname:
```

## How do I connect FileSystem, CSV, Excel, JSON, or YAML files in Bold Data Hub?

You connect local files by creating a pipeline in Bold Data Hub, adding a file connector template, and pointing the filePath property to your uploaded file.

1. Click the `Bold Data Hub` icon on the Navigation Pane.

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/Reports_panel.png#max-width=100%)

2. Click `Add Pipeline` and enter a name for the new pipeline.

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/addpipeline.png#max-width=100%)

3. Select the newly created pipeline and choose the Filesystem / CSV / Excel / JSON / YAML connector. Double-click it, or click the **Add Template** option, to add the template.

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/csv_addtemplate.png#max-width=100%)

4. Click the **Upload File** button to upload your Excel or CSV file.

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/uploadfile.png#max-width=100%)

5. Copy the file path and paste it into the filePath property. If it's an Excel file, add the sheet name. Otherwise, remove the sheet name if you use the Filesystem connector.

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/csv_copypath.png#max-width=100%)

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/csv_finaltemplate.png#max-width=100%)

6. Click **Save** and choose the destination to save the pipeline.

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/csv_destination.png#max-width=100%)

7. The pipeline is saved and starts automatically. Click **Logs** to see whether the run is completed and the data source is created in {{site.productNameTM}}.

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/csv_logs.png#max-width=100%)

Creating a pipeline in Bold Data Hub automatically creates a data source in {{site.productNameTM}}. The {{site.productNameTM}} data source is a live data source to the destination database used in Bold Data Hub.

![FileSystem - DataHub](/static/images/manage-content/working-with-etl/pipeline_DsCreated.png#max-width=100%)

## How do I schedule the FileSystem pipeline?

You schedule the FileSystem pipeline in Bold Data Hub from the schedules tab, or you run it on demand.

1. To configure interval-based scheduling, click the schedules tab, select the created pipeline, click the schedule icon, and configure the schedule.

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/schedule_schedules.png#max-width=100%)

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/schedule_scheduledialog.png#max-width=100%)

2. For an on-demand refresh, click the `Run Now` button.

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/schedule_runnow.png#max-width=100%)

3. Check the schedule history with the history option and the logs.

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/schedule_history.png#max-width=100%)

4. Click **Logs** to see whether the run is completed and the data source is created in {{site.productNameTM}}.

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/pipeline_DsCreated.png#max-width=100%)

5. Click the `Edit DataSource` option to view the created tables.

    ![FileSystem - DataHub](/static/images/manage-content/working-with-etl/editdatasource.png#max-width=100%)

## Frequently asked questions

### Is the sheet name required for the FileSystem connector?

The sheet name is required only for the excel type. Remove it for other file types.

### Does the FileSystem pipeline run right after I save it?

Yes. The pipeline is saved and starts automatically. Check **Logs** to confirm the run completed.

## See also

* [CSV connector for Bold Data Hub](../csv/)
* [Excel connector for Bold Data Hub](../excel/)
* [Bold Data Hub connectors list](../)
