---
layout: post
title: Monitor Report Server with Azure App Insights | Bold Reports
description: Integrate Azure Application Insights with Bold Reports On-Premises to monitor performance, usage, and request telemetry with log queries and live metrics.
platform: report-platform
documentation: ug
---

# Azure Application Insights Integration in Bold Reports<sup>®</sup>

To integrate Azure Application Insights with Bold Reports<sup>®</sup>, create an Application Insights resource and paste its connection string into the reporting configuration.

The integration gives you insights into your report's performance, usage, and other metrics. It helps you optimize your reporting processes and make more informed decisions.

## What do I need before I integrate Application Insights?

To integrate Azure Application Insights with Bold Reports<sup>®</sup>, you need the following:

* An Azure account.

* Install Bold Reports<sup>®</sup> On-Premises Edition and log in with an administrator account.

## How do I set up Azure Application Insights in Bold Reports<sup>®</sup>?

You set up Azure Application Insights for Bold Reports<sup>®</sup> by creating the resource in Azure and adding its connection string to `reporting/config.json`. Follow these steps:

1. Log in to the Azure portal.

2. Click `Create a resource`, search for `Application Insights`, and then click `Create`, as shown in the following images.

    ![Click Resource Group](/static/assets/on-premise/images/how-to/create-resource-option.png)
    ![Search Application Insights](/static/assets/on-premise/images/how-to/search-application-insights.png)
    ![Application Insights ](/static/assets/on-premise/images/how-to/application-insights-click-create.png)

3. Fill in the necessary information and then click `Review + create`.
    ![Application Insights ](/static/assets/on-premise/images/how-to/create-insight.png)
    ![Click Create ](/static/assets/on-premise/images/how-to/click-create.png)

    **Subscription:** This should be associated with the Azure subscription.

    **Resource group:**  Choose `Create new` and enter the name of the new resource group, or select an
    existing resource group.

    **Name:**  Enter a name for the resource.

    **Region:** Select your preferred region.

4. The Application Insights deployment begins. Track the progress of the deployment, as shown in the following image.
    ![Insights Inprogress ](/static/assets/on-premise/images/how-to/insight-inprogress.png)

5. After successful deployment, go to the respective resource.
    ![Go To Resource Group](/static/assets/on-premise/images/how-to/insights-go-to-resource.png)

6. Copy the `Connection String` in the Overview section.
    ![Copy Connection String](/static/assets/on-premise/images/how-to/connection-string.png)

7. Paste the copied connection string into `ApplicationInsightsConnectionString` located at `Settings -> Configuration -> reporting/config.json`, and save the changes, as shown in the following screenshots.
    ![Select Config Json](/static/assets/on-premise/images/how-to/select-config-json.png)
    ![Paste Connection String](/static/assets/on-premise/images/how-to/paste-connection-string.png)

8. [Restart the Bold Reports<sup>®</sup> Enterprise application](./../../faq/how-to-restart-the-bold-reports-enterprise-application/).

Application Insights is now integrated with the Bold Reports<sup>®</sup> On-Premises Edition application. To confirm the integration, view the Live metrics in Application Insights.
    ![Live Metrics](/static/assets/on-premise/images/how-to/live-metrics.png)

Application Insights integrates with Azure Log Analytics, so you can query and analyze Bold Reports<sup>®</sup> log data for deeper insights.

## How do I monitor logs in Application Insights?

You monitor Bold Reports<sup>®</sup> logs from the Application Insights **Search** option. Follow these steps:

1. After successful integration, go to the `Overview` page.
    ![Overview Page](/static/assets/on-premise/images/how-to/overview-page.png)

2. Click `Search` and enter the log content to locate the logs you need.
    ![Click Search](/static/assets/on-premise/images/how-to/click-search.png)
    ![Search Log](/static/assets/on-premise/images/how-to/search-log.png)
    ![Searced Log](/static/assets/on-premise/images/how-to/searched-logs.png)

### How do I query Bold Reports<sup>®</sup> logs in Application Insights?

You query Bold Reports<sup>®</sup> logs from the Application Insights `Logs` menu. Go to the `Logs` menu, then `Run` the query that retrieves the logs you need.
    ![Click Logs](/static/assets/on-premise/images/how-to/click-logs.png)

1. To find the `debug-info logs`, run the query `traces` and click `Run`.

    ```text
    traces
    ```
    ![Click Run](/static/assets/on-premise/images/how-to/click-run.png)
    ![Debug Info Logs](/static/assets/on-premise/images/how-to/debug-info-logs.png)

2. To find the `error logs`, run a query such as `exceptions` and click `Run`. The results appear as shown in the following screenshot.

    ```text
    exceptions
    ```
    ![Debug Info Logs](/static/assets/on-premise/images/how-to/error-logs.png)

3. To find the `debug-info logs` for a specific service, run the following query:

    * web(reporting.web)

        ```text
        traces
        | where customDimensions["loggername"] == "reporting.web"
        ```
        ![Reporting Web](/static/assets/on-premise/images/how-to/reporting-web.png)

    * jobs(reporting.jobs)

        ```text
        traces
        | where customDimensions["loggername"] == "reporting.jobs"
        ```
        ![Reporting Jobs](/static/assets/on-premise/images/how-to/reporting-jobs.png)

    * api(reporting.api)

        ```text
        traces
        | where customDimensions["loggername"] == "reporting.api"
        ```
        ![Reporting API](/static/assets/on-premise/images/how-to/reporting-api.png)

    * viewer(reporting.viewer)

        ```text
        traces
        | where customDimensions["loggername"] == "reporting.viewer"
        ```
        ![Reporting Viewer](/static/assets/on-premise/images/how-to/reporting-viewer.png)

4. To find the `error logs` for a specific service, run the following query:

    * web(reporting.web)
        ```text
        exceptions
        | where customDimensions["loggername"] == "reporting.web"
        ```

    * jobs(reporting.jobs)
        ```text
        exceptions
        | where customDimensions["loggername"] == "reporting.jobs"
        ```

    * api(reporting.api)
        ```text
        exceptions
        | where customDimensions["loggername"] == "reporting.api"
        ```

    * viewer(reporting.viewer)
        ```text
        exceptions
        | where customDimensions["loggername"] == "reporting.viewer"
        ```

5. To filter logs by date and time, run the following query:

    ```text
    traces
    | where timestamp >= datetime(2024-03-21T00:00:00Z) and timestamp <= datetime(2024-03-21T23:59:59Z)
    ```
    > Replace with your specific date and time as needed.

    ![Filter By Date](/static/assets/on-premise/images/how-to/query-date.png)

6. To retrieve logs by `specific contents` within the log, run the following query:

    ```text
    traces
    | search "keyword"
    ```
    > Replace `keyword` with the search content.

    ![Specific Content Logs ](/static/assets/on-premise/images/how-to/specific-content-logs.png)

7. To find a log with two combined queries, use the following example. It targets logs related to the `reporting.web` service after March 21, 2024. It searches for log entries where the `SystemSettings parameter is not null`.

    ```text
    traces
    | where customDimensions["loggername"] == "reporting.web" and timestamp >= datetime(2024-03-21T00:00:00Z)
    | search "SystemSettings is not null"
    ```
    ![Join Query](/static/assets/on-premise/images/how-to/join-query.png)

8. To retrieve all the request calls in the application, run the following query:
    ```text
    requests
    ```
    ![Get All Requests](/static/assets/on-premise/images/how-to/get-all-requests.png)

9. To retrieve frequent requests by URL count, use the following query:
    ```text
    requests
    | summarize RequestCount = count() by url
    | order by RequestCount desc
    ```
    ![URL Count](/static/assets/on-premise/images/how-to/url-count.png)

10. To count the number of requests made to a specific URL endpoint, use the following query:

    ```text
    requests
    | where url == " http://localhost:51778/reporting/site/insights1/reports/d9116932-b3bb-4a8a-92b2-1c7ea7bd7193/Tutorial Sample/Table?showmyreports=1"
    | summarize count() by url
    ```
    ![Request Count](/static/assets/on-premise/images/how-to/request-count.png)

11. To retrieve requests based on the name of a report, use the following query:

    ```text
    requests
    | where url contains "Invoice"
    | summarize count() by url
    ```

    > Replace the name `Invoice` with the report name based on the search.
![Request Based on Report](/static/assets/on-premise/images/how-to/request-based-on-report.png)

### How do I export logs?

You can export Bold Reports<sup>®</sup> logs from Application Insights as a CSV file. Follow these steps:

1. Go to `Application Insights`, then select the `Logs` menu. Run the necessary query to generate the required logs.
    ![Join Query](/static/assets/on-premise/images/how-to/join-query.png)

2. Select the `Export` option for the generated logs and choose CSV.
    ![Export Option](/static/assets/on-premise/images/how-to/export-option.png)

3. After the download, open the CSV file to view the logs locally.

### How do I view live metrics?

You view live Bold Reports<sup>®</sup> request traces on the Application Insights `Live metrics` page.

1. Go to `Application Insights`, then click the `Live metrics` menu.
    ![Export Option](/static/assets/on-premise/images/how-to/live-metrics-menu.png)

2. On the `Live metrics` page, see all the live request traces under the `Sample telemetry` tab.
    ![Sample Telemetry](/static/assets/on-premise/images/how-to/sample-telemetry.png)

### How do I view events?

You view Bold Reports<sup>®</sup> event statistics from the Application Insights `Events` menu.

1. Go to the `Events` menu in Application Insights.
    ![Export Option](/static/assets/on-premise/images/how-to/search-events.png)

2. Click `View More Insights` to load all the event statistics.
    ![View More Insights](/static/assets/on-premise/images/how-to/view-more-insights.png)
    ![Overall Events](/static/assets/on-premise/images/how-to/overall-events.png)

3. Click the request to see the full details of the event.
    ![Click Event Request](/static/assets/on-premise/images/how-to/click-event-request.png)
    ![Events Details](/static/assets/on-premise/images/how-to/view-details.png)

### How do I view successful requests?

You view successful Bold Reports<sup>®</sup> requests on the Application Insights `Performance` page.

1. Go to the `Performance` menu in Application Insights.
    ![Search Performance](/static/assets/on-premise/images/how-to/search-performance.png)

2. Successful requests are available on the Performance page. Click the request to view its detailed traces.
    ![Click Performance](/static/assets/on-premise/images/how-to/click-performance-request.png)

### How do I view failed requests?

You view failed Bold Reports<sup>®</sup> requests on the Application Insights `Failures` page.

* Go to the `Failures` request menu page in Application Insights, where failed requests are available. Click the request to view its detailed traces.

    ![Click Failure](/static/assets/on-premise/images/how-to/click-failure.png)

## Frequently asked questions

### Where do I paste the Application Insights connection string?

Paste it into `ApplicationInsightsConnectionString` at `Settings -> Configuration -> reporting/config.json`, then restart the Bold Reports<sup>®</sup> Enterprise application.

### How do I confirm that Application Insights is integrated with Bold Reports<sup>®</sup>?

View the Live metrics in Application Insights to confirm the integration.

## See also

* [How to restart the Bold Reports<sup>®</sup> application](./../../faq/how-to-restart-the-bold-reports-enterprise-application/)
* [Where can I find the error and debug log files?](./../../faq/where-can-i-find-the-error-and-debug-log-files/)
