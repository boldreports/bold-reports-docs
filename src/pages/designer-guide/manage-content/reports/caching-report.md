---
layout: post
title: Caching report option | Syncfusion | Report Server
description: Explains what is caching report option and how the reports are processed for the cache copy in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Caching Report Option

This section explains what is Caching Report Option and how it works in Bold Reports Server.

Report Processing Option determines how the Report Server process the Report. Click the `Actions` button in the Reports grid context menu and click `Processing Options` to process the Report.

![Report Processing Options](/static/assets/on-premise/images/manage-content/manage-reports/report-processing-option.png)

There are two options in Report Processing Options

## Always run this report with the most recent data

Use this option when you want to retrieve report data when the user selects the report. If a cached copy of the report is available, it is returned to the user; otherwise, data retrieval and rendering occurs when a user selects the report.

![Always run this report with the most recent data](/static/assets/on-premise/images/manage-content/manage-reports/do-not-cache-temporary-copies.png)

### Do not cache temporary copies of this report

Select this option to always run the report with the most recent data. Each user who opens the report triggers a query against the data source that contains data used in the report.

### Cache a temporary copy of the report

Select this option to place a temporary copy of the report in a cache when a user first opens the report. Subsequent users who run the report within the caching period receive the cached copy of the report. Caching usually improves performance because the report is returned from the cache instead of being processed again.

## Render this report from a report snapshot

Use this option to retrieve a report that has been stored as a snapshot at a time that you schedule. When you choose this option, you can schedule data processing to occur during off-peak hours. Unlike cached copies that are created when a user opens the report, a snapshot is created and subsequently refreshed on a schedule. Snapshots do not expire; they remain in service until they are replaced by newer versions.

![Render this report from a report snapshot](/static/assets/on-premise/images/manage-content/manage-reports/render-this-report-from-a-report-snapshot.png)