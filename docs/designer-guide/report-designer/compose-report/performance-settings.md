---
title: Configure RDL Report Performance Settings | {{site.productName}}
description: Configure Performance Settings in {{site.productName}} Web Report Designer, including SmartRendering, PageCreation, VirtualEvaluation, AutoGrowText, and FetchLimit.
keywords: ejReportDesigner, reportdesigner, Performance Settings
---

# Configure performance settings in {{site.productNameTM}} Web Report Designer

Performance Settings in {{site.productNameTM}} Web Report Designer apply best practices and optimized ways to render RDL and RDLC reports. These properties let {{site.productNameTM}} render millions of records in seconds. The associated properties are:

* `SmartRendering`
* `PageCreation`
* `VirtualEvaluation`
* `AutoGrowText`
* `FetchLimit`

## How do I open the Performance Settings panel?

You open Performance Settings in Web Report Designer from the **Report Properties** under the `Basic Settings` category.

1. Click the outer grey surface of the report area, and then click the **Properties** icon to open the **Report Properties**.
    ![open-properties](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/open-properties.png '#width=400px')
2. Find the Performance Settings option under the `Basic Settings` category. Click **Edit Settings** to open the **Performance Settings** secondary panel.
    ![report-properies](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/report-properties.png '#width=400px')
3. The **Performance Settings** panel opens.
    ![performance-settings-panel](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/performance-settings-panel.png '#width=400px')

## Smart Rendering

Smart rendering in {{site.productNameTM}} optimizes report rendering. Enabling smart rendering updates the dependent properties as follows:
* `AutoGrowText` is set to `false`.
* `PageCreation` is set to `OnDemand`.
* `VirtualEvaluation` is set to `true`.
* `EnableFetchLimit` is set to `true`, and `FetchLimitCount` becomes visible and is set to `1000`.

> If you modify any of the above values, the `SmartRendering` property is set to `false`. Disabling smart rendering reverts the dependent items to their default states.

The following animation shows how to enable smart rendering.

![Smart rendering](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/enable-smart-rendering.gif '#width=400px')

### Auto Grow Text

The `AutoGrowText` property in {{site.productNameTM}} adjusts the text box height dynamically based on the content. When `AutoGrowText` is set to true, the viewer may take extra time to calculate the height of each text box, depending on the data.

You can enable or disable `AutoGrowText` for a report in the designer. By default, `AutoGrowText` is set to true. Configure `AutoGrowText` and click **Update**.

![auto-grow-text](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/auto-grow-text.png '#width=400px')

### Virtual Evaluation

The `VirtualEvaluation` property in {{site.productNameTM}} reuses tablix cell objects to optimize memory usage. To enable it for a specific report, turn on the `VirtualEvaluation` property in the designer.

By default, `VirtualEvaluation` is set to false. Configure `VirtualEvaluation` and click **Update**.

![virtual-evaluation](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/virtual-evaluation.png '#width=400px')

### Page Creation

The `PageCreation` property controls how pages are processed and created in {{site.productNameTM}}.

Property | Description
--- | ---
`Default` | Creates all pages first, then sends the first page to the client for rendering.
`OnDemand` | Renders the first page immediately; subsequent pages are created as the user navigates.
`Background` | Renders the first page immediately; remaining pages are created in the background, with progress updates.|

To set the `PageCreation` property for a specific report, choose a value from the dropdown in the designer and click **Update**.

![page-creation](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/page-creation.png '#width=400px')

### Fetch Limit

The `FetchLimit` property in {{site.productNameTM}} controls the number of records fetched in a report. To use it, enable `FetchLimit` in the designer and enter the record count you want in the `FetchLimitCount` numeric box.

By default, `FetchLimit` is set to false. When `FetchLimit` is set to true, the `FetchLimitCount` numeric box becomes visible.

![fetch-limit](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/fetch-limit.png '#width=400px')

### How does Smart Rendering behave during report generation?

Smart rendering in {{site.productNameTM}} can freeze the parameter panel while the report is generated.

1. When `SmartRendering` is active in either `OnDemand` or `Background` mode, the parameter panel may freeze during report generation. This happens because the document is being created, and the progress bar is visible at the bottom left of the report.
2. To modify parameters while the report is rendering, click `Cancel` to stop the rendering process. You can then enter new parameters before you run the report again.

### What are the limitations of Smart Rendering?

Smart rendering in {{site.productNameTM}} is available for tablix-based reports only. It has the following limitations:

1. Nested tables are not supported.
2. Multiple tables in a report are not supported.
3. Tablix cells must contain only text; cells with images or charts are not supported.
4. Image-based reports are not supported.
5. Reports with toggle items are not supported.
6. Sub-reports are not supported.
7. Document mapping or bookmark labels are unsupported.
8. Table cell sorting in the viewer is limited.
9. Tablix structures with repeat headers are unsupported.
10. File storage cache settings are not supported.
11. Tablix structures with column groups are unsupported.

## Frequently asked questions

### What happens if I change a property after enabling Smart Rendering?

If you modify any of the dependent values, the `SmartRendering` property is set to `false`.

### What is the default value of FetchLimitCount with Smart Rendering?

Enabling smart rendering sets `EnableFetchLimit` to `true` and sets `FetchLimitCount` to `1000`.

## See also

* [Report properties](./../../compose-report/report-properties/)
* [Properties panel](./../../compose-report/properties-panel/)
* [Page layout](./../../compose-report/page-layout/)
