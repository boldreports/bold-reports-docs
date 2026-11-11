---
layout: post
title: Connect OpenAPI 3.x Sources to Bold Data Hub | {{site.productName}}
description: Connect OpenAPI 3.x documents to Bold Data Hub in {{site.productName}}. Review supported features, set the YAML URL or path, create a pipeline, and schedule refresh.
platform: Report-platform
documentation: ug

---

# Connect OpenAPI with Bold Data Hub

The Bold Data Hub ``OpenAPI`` connector fetches data from ``OpenAPI`` ``3.x`` documents and loads it into {{site.productNameTM}}.

## Which OpenAPI features are supported?

The Bold Data Hub OpenAPI connector supports the following OpenAPI features:

1. All HTTP methods are supported.
2. JSON and form bodies, path and query parameters are accepted.
3. File uploads can be done with `multipart/form-data` bodies.
4. Supported data types include float, string, int, date, datetime, `string enums`, and custom schemas or lists containing any of those.
5. Responses can be in html/text or application/json format containing any of the mentioned types.
6. Basic or Bearer Authentication is not supported.

## Connection Properties

The OpenAPI connector in Bold Data Hub reads the following properties from the `config` section of a YAML file:

```yaml
        ymlURL:
        ymlPath:
```

### Example Configuration

The following Bold Data Hub YAML template shows a complete OpenAPI extractor configuration:

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: OpenAPI
      connectorname: OpenAPI
      config:
        ymlURL:
        ymlPath:
      select:
        - tablename
```

## How do I connect OpenAPI in Bold Data Hub?

You connect an OpenAPI document by creating a pipeline in Bold Data Hub and adding the `OpenAPI` template to it.

1. Click the `Data Hub` icon on the Navigation Pane.

    ![OpenAPI- Reports](/static/assets/on-premise/images/manage-content/working-with-etl/clickdatahub.png#max-width=100%)

2. Click `Add Pipeline` and enter a name for the new pipeline.

    ![OpenAPI - Reports](/static/assets/on-premise/images/manage-content/working-with-etl/addpipeline.png#max-width=100%)

3. Select the newly created pipeline and add the `OpenAPI` template.

    ![OpenAPI - Reports](/static/assets/on-premise/images/manage-content/working-with-etl/openapitemplate.png#max-width=100%)

4. Update the URL and path in the template.
5. Click **Save** and choose the destination to save the pipeline.

    ![JSON Data Hub - Reports](/static/assets/on-premise/images/manage-content/working-with-etl/csv_destination.png#max-width=100%)

## How do I schedule the OpenAPI pipeline?

You schedule the OpenAPI pipeline in Bold Data Hub from the schedules tab, or you run it on demand.

1. To configure interval-based scheduling, click the schedules tab, select the created pipeline, click the schedule icon, and configure the schedule.

    ![OpenAPI - Reports](/static/assets/on-premise/images/manage-content/working-with-etl/schedule_schedules.png#max-width=100%)

    ![OpenAPI - Reports](/static/assets/on-premise/images/manage-content/working-with-etl/schedule_scheduledialog.png#max-width=100%)

2. For an on-demand refresh, click the `Run Now` button.

    ![OpenAPI - Reports](/static/assets/on-premise/images/manage-content/working-with-etl/schedule_runnow.png#max-width=100%)

3. Check the schedule history with the history option and the logs.

    ![OpenAPI - Reports](/static/assets/on-premise/images/manage-content/working-with-etl/schedule_history.png#max-width=100%)

4. Click **Logs** to see whether the run is completed and the data source is created in {{site.productNameTM}}.

    ![OpenAPI - Reports](/static/assets/on-premise/images/manage-content/working-with-etl/pipeline_DsCreated.png#max-width=100%)

5. Click the `Edit DataSource` option to view the created tables.

## Frequently asked questions

### Does the OpenAPI connector support Basic or Bearer authentication?

No. Basic or Bearer Authentication is not supported by the Bold Data Hub OpenAPI connector.

### Which OpenAPI versions can Bold Data Hub read?

The Bold Data Hub OpenAPI connector fetches data from OpenAPI 3.x documents.

## See also

* [Schedule Bold Data Hub jobs](../../schedule/)
* [Work with Bold Data Hub pipelines](../../working-with-pipelines/)
* [Bold Data Hub connectors list](../)
