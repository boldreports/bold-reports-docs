---
title: Create report in the Report Server | Syncfusion
description: Explains about how to create the Report using the Report Designer and then add it in the Bold Reports On-Premise.
keywords : create report, reportserver, web designer
---

# Create Report

This section explains on how to create report and design a report in the Bold Reports On-Premise.

* If the user has `All Reports` permission, then the user can create reports in any category.
* If the user has `Reports in Category` permission with some chosen categories, then the user can only create reports in those chosen categories.
* Reports must be added in any one category.
* Reports can be designed in the Report Designer and then it can be published into the Report Server.
* Reports created by using the SSRS Report Builder can also be uploaded into the Report Server.

## Steps to create a report

1. Click on the `[+]` icon from the toolbar and click on the `Start from Scratch` option.
![Add button dropdown toggle](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/add-button-report-server.png)
2. Enter the report name in the dialog box and click on
`Add and Design` button.
![Report designer initial view](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/add-and-design-button.png)
    > Report designing in designer will save as draft report.
    >![Draft report](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/draft-report.png)
3. Now, the report designer page opens in a new tab, with a blank report by default.
![Report designer initial view](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/report-designer-initial-view.png)
> `Read Write Delete` permission for that `Specific Report` will be added for the user who created the report.

## Create Data

1. To add a data, open the `Data` panel by clicking on the **Data** icon in the configuration panel.
![Configuration panel](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/data-icon-configuration-panel.png)
2. Click on `EXPLORE SAMPLE DATA` in the data panel.
![Data creation panel](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/open-data-panel.png)
3. From the available data, select `Sales` data and click `Add`.
![Data creation panel](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/available-data-list.png)
4. Now, a new `DataSource` and `DataSet` will be added in the report.
![Data list view](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/data-list-view.png)

## Add a chart report item

The left pane in the design view consists of basic items, data region, data visualization, and sub reports  to design an interactive report.

> Here, the `Chart` report item is used for demonstration.

1. Select any of the `Chart` type in the left pane, then drag and drop it to the design area.
   > Here, `Column` chart is used for demonstration.

   ![Chart report item](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/drag-drop-chart-item.png)
2. The above action will render the `Chart` report item in the design area.
   ![Chart initial view](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/chart-initial-view.png)

### Assign Data

> This step is applicable only for the report items that belongs to `data visualization` and `data region` category.

1. To bind data to a report item placed in the design area, focus on that report item.
   ![Focus chart item](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/focus-report-item.png)
2. Click `Properties` button in the configuration panel, the property pane opens. Now, switch to `DATA` tab.
   ![Chart properties pane](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/chart-properties-pane.png)
3. The `DATA` tab holds data configuration view.
4. The available data in the report will be listed in the drop-down, choose a data in the drop-down list.
![Choose the dataset for chart](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/data-assign-drop-down.png)
5. The numeric columns and numeric expressions are listed under the `Measures` section; other type of columns and dimension expressions are listed under the `Dimensions` section.
   ![Measures and dimensions](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/measures-dimensions-category.png)
6. **Drag and Drop Measure Element**:
   Select and drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Values` section.
   ![Add a Y-value field](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/add-y-values-field.png)
   Now, the report item design will look like below:
   ![Preview after adding y-value field](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/y-value-chart-design-view.png)
7. **Aggregate Options**:
   Click the `Settings` icon (highlighted below) to open the aggregation type drop-down list.
   ![Aggregate settings icon](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/aggregation-settings-icon.png)
   You can set the aggregation type by which you can compute the selected column.
   ![Aggregate menu list](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/aggregation-settings-menu.png)
8. **Drag and Drop Dimension Element**:
   Select and drag the dimension element from the `Dimensions` section to measure against any of the selected numeric column(s) in `Y Value(s)` section, and drop into the `Column(s)` section.  
   ![Add dimension field](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/add-field-to-column-section.png)
   Now, the report item design will look like below:
   ![Preview after adding dimension field](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/column-field-design-preview.png)
9. **Grouping**:
   You can group the added column element with another column, by adding the respective dimension element into Row(s) section.
   ![Achieve grouping by row values](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/add-field-to-rows-section.png)
   Now, the report item design will look like below.
   ![Preview of row value grouping ](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/row-field-design-preview.png)

### Customize the appearance

Navigate to the `PROPERTIES` tab in the properties pane.

![Properties pane](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/chart-properties-tab.png)

This pane holds some general settings and some specific to the report item. Configure the desired settings to the chart for better report design and to improve report readability.

![Chart final design view](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/final-view-chart-design.png)

## Publish report

Once you are done with the report designing, click on the `Publish` option.
![Save menu](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/designer-publish-option.png)

## Preview report

1. To see the report preview, click on the **Preview** button in the center of the report header.
![Preview icon in design view](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/preview-icon.png)
2. Now, the report preview can be visualized like below.
![Chart report preview](/static/assets/on-premise/images/manage-content/manage-reports/create-reports/report-preview-page.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/manage-content/test.rdl).

## See also

[Design a Basic Table Report](./../../../report-designer/design-rdl-report-in-web-report-designer/)

[Create an Embedded DataSource](./../../../report-designer/manage-data/datasource/create-an-embedded-data-source/)

[Create an Embedded DataSet](./../../../report-designer/manage-data/dataset/create-an-embedded-dataset/)

[Link a Shared DataSource into a Report](./../../../report-designer/manage-data/datasource/link-a-shared-data-source/)

[Link a Shared DataSet into a Report](./../../../report-designer/manage-data/dataset/link-a-shared-dataset/)

[Create a Duplicate Copy of DataSource in a Report](./../../../report-designer/manage-data/datasource/duplicate-a-data-source/)

[Create a Duplicate Copy of DataSet in a Report](./../../../report-designer/manage-data/dataset/duplicate-a-dataset/)

[Add a Report Parameter to a Report](./../../../report-designer/report-parameters/add/)

[Embed an Image in a Report](./../../../report-designer/image-manager/add-image/)

## REST API Reference

The following table illustrates the list of available APIs related to Add reports in Bold Reports On-Premise.

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
        <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_AddReport">AddReport</a>
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