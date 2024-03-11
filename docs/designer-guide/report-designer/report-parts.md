---
title: Exploring Report Parts | Report Designer | Bold Reports
description: This section describes on how to create, publish and reuse Report Part in multiple reports with an use case report in Bold Report Designer
keywords: report parts, report template, report designer, bold reports, ssrs report parts, report components, report part, multiple reports, report items
---

# Report Parts

Report Parts helps users to create and publish report item templates that user may want to reuse across multiple reports. With this functionality, Report items such as tables, charts, maps, indicators, and other report items can be published and reused as report parts in different reports.

To demonstrate the usage of the Report Part feature, we created a new table called `Product_Details_Table` to display the product details.
![Report Part Table](/static/assets/on-premise/images/report-designer/report-parts/product-details-table.png '#width=450px')

Consider this scenario, we need to use the Product Details table in various reports. However, creating this table for each report is a tedious process. To address this case, we are publishing the Product Details table as a report part and reusing it in multiple reports.

## Publishing the Product Details Table as a Report Part

1. Click on the `Publish Report Part` option from the dropdown in top-right corner of the report designer page.
    ![Publish as Report Part](/static/assets/on-premise/images/report-designer/report-parts/publish-as-part.png '#width=250px')
2. This action will open the `Publish Report Part` dialog.
    ![Publish Report Part Dialog](/static/assets/on-premise/images/report-designer/report-parts/publish-report-part-dialog.png '#width=350px')
3. The report items present on the designer surface will be listed in the Report part dropdown.
    ![Report item list in Report Part Dialog](/static/assets/on-premise/images/report-designer/report-parts/report-item-list.png '#width=350px')
4. Select the `Product_Details_Table` report item from the dropdown, name the report part as `Product_Details_Table` in the `Name` field, add description if you want and click the `Publish` button to publish the `Product_Details_Table` report part.
    ![Publish Report Part](/static/assets/on-premise/images/report-designer/report-parts/publish-report-part.png '#width=350px')

> `Note:` The Datasource, Dataset and the Query parameters associated with the widgets alone will be published along with the report part whereas Dataset bind with the scope of the expressions and Report parameters will not be published with the report part.

## Reusing the Published Report Part in other Reports

Create a new report and in that we will use the `Product_Details_Table` report part to demonstrate this feature.

1. Find the `Product_Details_Table` report part under the `Report Parts` tab in the left side of the Designer surface.
    ![Report Part in Report Designer](/static/assets/on-premise/images/report-designer/report-parts/report-part-itempanel.png '#width=250px')
2. Drag and drop the `Product_Details_Table` report part into the Designer surface.
    ![Drag and drop Report Part](/static/assets/on-premise/images/report-designer/report-parts/drag-report-part.png)
3. Dataset and query parameters associated with the `Product_Details_Table` report part gets populated in this report.
    ![Report Part dataset](/static/assets/on-premise/images/report-designer/report-parts/dataset-population.png '#width=350px')
4. By using this `Product_Details_Table` report part, I have created a new report to showcase the Product Details.
    ![Report Part use case report](/static/assets/on-premise/images/report-designer/report-parts/use-case-report.png '#width=400px')

## Refreshing the Report Parts

You are making changes in `Product_Details_Table` report part and have published it. If you want the updated changes to be reflected in the other reports that are using this `Product_Details_Table` report part, right click on the `Product_Details_Table` in your report and it will show you the `refresh` option.
![Refresh Report Part](/static/assets/on-premise/images/report-designer/report-parts/refresh-report-part.png '#width=400px')

Click on the refresh option, the updated changes in the `Product_Details_Table` report part will get reflected in your report.

> Download the above report design from [link](https://github.com/boldreports/resources/blob/master/docs/report-designer/design-report-part-use-case-report.rdl).