---
title: Connect Google BigQuery Data to RDL Reports | {{site.productName}}
description: Connect the {{site.productName}} Web Report Designer to Google BigQuery with a service account JSON key, inline or uploaded, and feed the data to your RDL reports.
---
# Connect to Google BigQuery data source

{{site.productNameTM}} connects to a Google BigQuery data source through a Google Cloud service account. You use a service account key file to securely access and query data from your Google BigQuery projects. Follow the steps below to create a service account and set up the connection.

## Create a service account

To connect {{site.productNameTM}} to Google BigQuery, first create a service account in the Google Cloud console.

1. Go to the **Create Service Account** page in the Google Cloud console:
   `https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts`

2. Select your project from the dropdown menu or create a new project.
   ![Google cloud project](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/google-select-project.png '#width=410px')

3. Click `Create Service Account`.
   ![Service account](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/google-service-account.png '#width=410px')

4. In the Service account name field, enter a name. The Google Cloud console automatically populates the Service account ID field based on this name. Enter a description for the Service account, for example: Service account for Quickstart. Then, click the **Create and Continue** button.
   ![service account details](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/service-account-details.png '#width=410px')

5. To provide access to your project, grant the following role(s) to your service account: **Project > Owner**. Select a role, then click **Continue**.
   ![project role](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/project-role.png '#width=410px')

   To add more roles, click **Add Another Role** and select additional roles individually.

   > NOTE: The role you assign determines which resources the service account can access in your project. You can revoke or grant additional roles later. In production environments, avoid assigning the Owner, Editor, or Viewer roles. Instead, assign a predefined or custom role based on your needs.

6. Click **Done** to finish creating the service account. Keep the browser window open, because you need it for the next step.
   ![project done](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/google-service-done.png '#width=410px')

### How do I create a service account key?

{{site.productNameTM}} uses a JSON service account key to connect to Google BigQuery. Create the key in the Google Cloud Console.

1. The Google Cloud Console displays the created service account. Click the highlighted icon shown in the following image.

   ![Service Action](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/service-action-icon.png '#width=410px')

2. Select `Manage Keys` from the `Actions` context menu.
   ![Manage keys](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/manage-keys.png '#width=410px')

3. Click **Add key**, and then click **Create new key**.

   ![Add key](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/add-key.png '#width=410px')

4. Click **Create**. A JSON key file downloads to your computer.

   ![json file](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/json-file-download.png '#width=410px')

## How do I create a Google BigQuery data source?

To create a Google BigQuery data source in the {{site.productNameTM}} Web Report Designer, open the **Data** configuration panel and choose the Google BigQuery connection type.

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/data-configuration-panel.png '#width=410px')
2. In the `DATA` configuration panel, click the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/new-data-button.png '#width=355px')
3. In the connection type panel, choose the `Google BigQuery` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/connection-types.png '#width=355px')
4. In the **Name** field, specify the data source name without special characters.
    ![Bigquery datasource properties](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/initial-panel.png '#width=350px')
5. Provide the service account JSON data in one of two ways: in inline mode or by uploading the JSON key file.
    ![Source types](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/types.png '#width=325px')

### How do I provide the service account JSON inline?

To provide the Google BigQuery service account JSON inline in the {{site.productNameTM}} Web Report Designer, paste it into the `Inline` text area.

1. Choose `Inline` from the `Type` drop-down menu and specify valid service account information for the BigQuery project as a JSON object in the `Inline` text area.

   ![service json string](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/service-account-json-string.png '#width=385px')

2. Click `Connect` to open the query design pane. Enter the required query and execute it. The corresponding values appear in a grid for preview.

   ![execute schema](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/execute-schema.png '#width=385px')

3. Click `Finish` to save the data source with a relevant name and continue designing the report.

   ![Dataset List](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/data-list.png '#width=355px')

### How do I upload the JSON key file from disk?

To upload the Google BigQuery JSON key file in the {{site.productNameTM}} Web Report Designer, choose `File` as the type and browse for the file.

1. Choose `File` from the `Type` drop-down menu.
   ![Json file](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/json-file-upload.png '#width=385px')

2. Click the three-dot button to open the upload box. Browse for the JSON file downloaded in [Create Service Account](./#create-a-service-account).
   ![service Json file](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/browse-file.png '#width=385px')

3. Click `Connect` to open the query design pane.
   ![service Json file](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/service-account-json-file.png '#width=385px')

4. Enter the required query and execute it. The corresponding values appear in a grid for preview.
   ![execute schema](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/execute-schema.png '#width=385px')

5. Click `Finish` to save the data source with a relevant name and continue designing the report.
   ![Dataset List](/static/assets/on-premise/images/report-designer/manage-data/google-bigquery-data-source/data-list.png '#width=355px')

## Frequently asked questions

### How does {{site.productNameTM}} authenticate to Google BigQuery?

{{site.productNameTM}} connects through a Google Cloud service account, using a service account JSON key file.

### Which role should I assign to the service account in production?

In production environments, avoid assigning the Owner, Editor, or Viewer roles. Assign a predefined or custom role based on your needs.

## See also

* [Google BigQuery Limitations to Build Query](https://cloud.google.com/bigquery/quotas)
* [Connect to Google Cloud SQL data source](./../../data-connectors/google-cloud-sql-data-source/)
* [Data connectors overview](./../../data-connectors/)
