---
title: Create an RDL Report in Report Server | Bold Reports
description: Create an RDL report from scratch in Bold Reports Report Server with the Web Report Designer, connect data, add a chart, and publish or preview the report.
keywords : create report, reportserver, web designer
---

# Create a report in Bold Reports<sup>®</sup> Report Server

> **Note:** Starting from v6.1, the Bold Reports<sup>®</sup> Report Server uses the `new designer` as the default interface for creating or editing reports. The appearance of `old designer` has been `deprecated`. For more information related to this change, see [Breaking changes from v6.x](#breaking-changes-from-v6x).

**Creating a report** designs a new report from scratch in Bold Reports<sup>®</sup> On-Premises Edition using the Web Report Designer, and then publishes it to the Report Server. Use this option when you don't already have a designed RDL file to upload and need to build a report against your own data from the ground up.

The following steps show how to create a report, connect it to data, and add a chart report item. They also cover publishing, previewing the result, and the REST API reference for adding reports programmatically.

## What is report creation?

Report creation is the process of designing an RDL report entirely within Bold Reports<sup>®</sup>. You connect to a dataset, add report items such as tables and charts, bind data to them, and configure their appearance. Then, you publish the finished report to the Report Server. Uploading brings in an already-designed RDL file. Creating a report starts from a blank canvas in the Web Report Designer. The resulting report is placed into a category that determines who can access it.

* If the user has `All Reports` permission, then the user can create reports in any category.
* If the user has `Reports in Category` permission for some chosen categories, then the user can only create reports in those chosen categories.
* Reports must be added in any one category.
* Reports can be designed in the Web Report Designer and then published to the Report Server.
* Reports created by using the SSRS Report Builder can also be uploaded to the Report Server.

### What can I do with report creation?

With Bold Reports<sup>®</sup> report creation, you can:

* Design a report from scratch using the Web Report Designer's drag-and-drop items and data panels.
* Connect a report to sample data or your own dataset while designing it.
* Add and configure report items such as tables and charts, and bind them to data.
* Preview and publish the finished report directly to the Report Server.

## Who should use this guide?

Intended readers of this guide include:

* Report authors designing new reports from scratch.
* Developers connecting reports to SQL or other data sources.
* Administrators reviewing category and permission requirements for report creation.

## What do I need first?

Before you create a report in Bold Reports<sup>®</sup> Report Server, make sure you have:

* `All Reports` permission, or `Reports in Category` permission for the category you want to create the report in.
* A data source or dataset to connect the report to, or use the built-in sample data.

## Steps to create a report

You start a new report in Bold Reports<sup>®</sup> Report Server from the `[+]` icon in the toolbar.

1. Click the `[+]` icon in the toolbar and click the `Start from Scratch` option.
   ![Add button dropdown toggle](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/add-button-report-server.png)

2. Enter the report name in the dialog box, then click the `Add and Design` button.
   ![Report designer initial view](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/add-and-design-button.png)
   > The report is automatically saved as a draft if you do not publish it, and you can view unpublished reports on the Drafts listing page.
   > ![Draft report](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/draft-report.png)

3. Work in the Web Report Designer page, which opens in a new tab with a blank report by default.
   ![Report designer initial view](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/report-designer-initial-view.png)
   > * Click the `Try the new designer` toggle button to experiment with the new designer.
   > ![New Report designer initial view](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/report-new-designer-initial-view.png)
   > * The `Read Write Delete` permissions for that `Specific Report` are added for the user who created it.

## How do I add data to the report?

You add data to a report in the Web Report Designer from the `Data` panel.

1. Open the `Data` panel by clicking the **Data** icon in the configuration panel.
   ![Configuration panel](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/data-icon-configuration-panel.png)

2. Click `EXPLORE SAMPLE DATA` in the data panel.
   ![Data creation panel](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/open-data-panel.png)

3. From the available data, select `Sales` data and click `Add`.
   ![Data creation panel](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/available-data-list.png)

4. Check the report. A new `DataSource` and `DataSet` are added in the report.
   ![Data list view](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/data-list-view.png)

## How do I add a chart report item?

In the Web Report Designer design view, the left pane contains basic items, data regions, data visualizations, and sub reports for creating an interactive report.

> The following steps use the `Chart` report item for demonstration purposes.

1. Select any `Chart` type in the left pane, then drag and drop it into the design area.
   > The following example uses a `Column` chart for demonstration purposes.

   ![Chart report item](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/drag-drop-chart-item.png)
2. Check the design area. The `Chart` report item renders there.
   ![Chart initial view](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/chart-initial-view.png)

### Assign Data

The Web Report Designer binds data to a report item through the `DATA` tab of the properties pane.

> The Assign Data step applies only to report items in the `data visualization` and `data region` categories.

1. Focus the report item placed in the design area to bind data to it.
   ![Focus chart item](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/focus-report-item.png)

2. Click the `Properties` button in the configuration panel to open the property pane. Then, switch to the `DATA` tab.
   ![Chart properties pane](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/chart-properties-pane.png)

3. Use the `DATA` tab, which holds the data configuration view.

4. Choose data from the drop-down list, which lists the available data in the report.
   ![Choose the dataset for chart](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/data-assign-drop-down.png)

5. Review the fields. Numeric columns and numeric expressions are listed under the `Measures` section, while other types of columns and dimension expressions are listed under the `Dimensions` section.
   ![Measures and dimensions](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/measures-dimensions-category.png)

6. **Drag and Drop Measure Element:**
   Select and drag the numeric column (measure element) or the numeric expression column from the `Measures` section and drop it into the `Y Values` section.
   ![Add a Y-value field](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/add-y-values-field.png)
   The report item design then appears as follows:
   ![Preview after adding y-value field](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/y-value-chart-design-view.png)

7. **Aggregate Options:**
   Click the `Settings` icon (highlighted in the following image) to open the drop-down list for aggregation types.
   ![Aggregate settings icon](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/aggregation-settings-icon.png)
   You can set the aggregation type used to compute the selected column.
   ![Aggregate menu list](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/aggregation-settings-menu.png)

8. **Drag and Drop Dimension Element:**
   Select and drag the dimension element from the `Dimensions` section to measure against any of the selected numeric column(s) in `Y Value(s)` section, and drop it into the `Column(s)` section.
   ![Add dimension field](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/add-field-to-column-section.png)
   The report item design then appears as follows:
   ![Preview after adding dimension field](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/column-field-design-preview.png)

9. **Grouping:**
   You can group the added column element with another column by adding the respective dimension element into the Row(s) section.
   ![Achieve grouping by row values](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/add-field-to-rows-section.png)
   The report item design then appears as follows:
   ![Preview of row value grouping ](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/row-field-design-preview.png)

### Customize the appearance

You customize a report item's appearance in the `PROPERTIES` tab of the Web Report Designer properties pane.

![Properties pane](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/chart-properties-tab.png)

The `PROPERTIES` tab contains both general settings and settings specific to the report item. Configure the desired settings for the chart to enhance report design and improve report readability.

![Chart final design view](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/final-view-chart-design.png)

## How do I publish the report?

After you finish designing the report, publish it to the Report Server using the **Publish** dialog. For step-by-step instructions, see [Publish Report](../../../report-designer/publish-report/).

## How do I preview the report?

You preview a report in the Web Report Designer with the **Preview** button.

1. Click the **Preview** button in the center of the report header.
   ![Preview icon in design view](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/preview-icon.png)

2. View the report preview, which appears as follows:
   ![Chart report preview](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/report-preview-page.png)

   > You can [download the sample report design](https://github.com/boldreports/resources/blob/master/docs/manage-content/reports/create-report.rdl).

## Breaking changes from v6.x

Bold Reports<sup>®</sup> Report Server opens the new designer by default from v6.1, and the old designer look is deprecated.

* From v6.1, when you create a new report or edit an existing one, the designer is displayed by default using the `new designer`. The `old designer` look has been `deprecated`.
   ![delete-report-part](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/new-designer-look.png)

* If you still prefer the old designer look, navigate to `Settings -> Configuration -> reporting/config.xml`, set `IsOldViewerDesigner` node to **true**, and then save the changes.<br>`<IsOldViewerDesigner>true</IsOldViewerDesigner>`

   ![Config File](/static/assets/on-premise/images/manage-content/manage-reports/config-file.png)
   ![Config File](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/switch-old-designer.png)

* The Web Report Designer then looks as follows:
   ![Config File](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/old-designer.png)

* If you previously saved your designer preference on the user profile page, that saved preference is no longer considered, and the related options are no longer available.

## What are the key features?

Bold Reports<sup>®</sup> report creation offers the following key features:

* **New designer experience**: From v6.1 onwards, you create and edit reports in the new Report Designer by default. During a transition period, you can switch back to the old designer look through server configuration.
* **Sample and built-in data connections**: Explore built-in sample data to prototype quickly, or connect to your own data source and dataset while designing the report.
* **Interactive report items**: Add report items such as tables and charts, bind them to measures and dimensions, and configure grouping, aggregation, and appearance settings.
* **Instant preview**: Preview the report at any point during design to see how it will render before publishing it to the Report Server.

## What are common use cases?

Bold Reports<sup>®</sup> report creation supports the following common use cases:

* **Building a new report from business data**: Design a report from scratch against a SQL or other data source when no existing RDL file already covers the requirement.
* **Prototyping with sample data**: Use the built-in sample data to explore report items and layout options before connecting to production data.
* **Creating interactive charts and visualizations**: Add chart report items, assign measures and dimensions, and configure aggregation and grouping to present data visually.
* **Bringing in reports designed with the SSRS Report Builder**: Design or adapt reports using familiar SSRS Report Builder concepts, then upload or publish them to the Report Server.

## What are the limits?

Report creation in Bold Reports<sup>®</sup> Report Server has the following considerations and limitations:

* From v6.1, the new designer is used by default for creating and editing reports; the old designer look is deprecated (see Breaking changes from v6.x above).
* A report must be saved into a category; an unpublished report is stored as a draft on the Drafts listing page until it's published.
* The `Read, Write, Delete` permission for the specific report is granted only to the user who created it.

## Frequently asked questions

### What happens if I don't publish a new report right away?

The report is automatically saved as a draft, and you can view unpublished reports on the Drafts listing page.

### Can I still use the old designer after upgrading to v6.1?

Yes, temporarily. Set the `IsOldViewerDesigner` node to `true` in `reporting/config.xml`, though the old designer look is deprecated. See Breaking changes from v6.x above.

### Can I upload a report created with the SSRS Report Builder instead of designing one from scratch?

Yes. Reports created using the SSRS Report Builder can also be uploaded to the Report Server. See [Upload Reports](../upload-reports/).

### Who can create reports in a specific category?

Only users with `All Reports` permission (any category) or `Reports in Category` permission for that specific category.

## How do I get help?

If you run into permission errors, or the Web Report Designer doesn't open as expected, check your category permissions with your administrator. You can also see the following links for data source setup and report parameter configuration.

## See also

* [Design a Basic Table Report](./../../../report-designer/design-rdl-report-in-web-report-designer/) for a walkthrough focused on tables instead of charts.
* [Create an Embedded DataSource](./../../../report-designer/manage-data/datasource/create-an-embedded-data-source/) if you'd rather keep a data source private to one report instead of sharing it.
* [Create an Embedded DataSet](./../../../report-designer/manage-data/dataset/create-an-embedded-dataset/) to build a dataset that belongs to this report alone.
* [Link a Shared DataSource into a Report](./../../../report-designer/manage-data/datasource/link-a-shared-data-source/) to reuse a data source that's already stored on the Report Server.
* [Link a Shared DataSet into a Report](./../../../report-designer/manage-data/dataset/link-a-shared-dataset/) to reuse a dataset that's already stored on the Report Server.
* [Create a Duplicate Copy of DataSource in a Report](./../../../report-designer/manage-data/datasource/duplicate-a-data-source/) to base a new data source on one that already exists.
* [Create a Duplicate Copy of DataSet in a Report](./../../../report-designer/manage-data/dataset/duplicate-a-dataset/) to base a new dataset on one that already exists.
* [Add a Report Parameter to a Report](./../../../report-designer/report-parameters/add/) to let readers filter or customize the report at run time.
* [Embed an Image in a Report](./../../../report-designer/image-manager/add-image/) to add a logo or other static image to the report design.

## REST API Reference

The following table lists the available APIs related to adding reports in Bold Reports<sup>®</sup> On-Premises Edition.

<table>
  <tr>
    <th>
      Action
    </th>
    <th>
      HTTP Method
    </th>
    <th>
      Endpoint
    </th>
    <th>
      Description
    </th>
    </tr>
    <tr>
      <td>
        <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/server-api-reference/#operation/Items_AddReport" target="_blank">AddReport</a>
      </td>
      <td>
        POST
      </td>
      <td>
        /api/site/{tenant-name}/v1.0/reports
      </td>
      <td>
        Add report to the server. Report details must be passed as input.
    </td>
  </tr>
</table>
