---
title: Create an Embedded Data Source in RDL Reports | {{site.productName}}
description: Create an embedded data source in the {{site.productName}} Web Report Designer to connect a report to SQL Server and other data, then bind the data to report items.
keywords: create data, add datasource, report-designer, connect to data, embedded data sources, ssrs, reporting
---

# Create an embedded data source

An embedded data source in the {{site.productNameTM}} Web Report Designer is a data connection that only the report in which it is embedded can use. You add it from the **Data** configuration panel.

## How do I add a new data source?

You add a new embedded data source from the `DATASOURCE` panel of the {{site.productNameTM}} Web Report Designer. To bind data to a report item, you need a minimum of one data source. Create a data source with these steps:

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/images/report-designer/manage-data/datasource/data-icon-configuration-panel.png '#width=235px')
2. In the `Data` panel, click `DATASOURCE` in the top-left corner.
   ![Data panel switcher icon](/static/images/report-designer/manage-data/datasource/data-panel-switcher-icon.png '#width=395px')
3. In the `DATASOURCE` configuration panel, click the `NEW DATASOURCE` button.
   ![New data source panel](/static/images/report-designer/manage-data/datasource/new-data-source-panel.PNG '#width=385px')
4. In the connection type panel, choose the data source type that you want to connect.
   > Here, `SQL` connection type is used for demonstration.

   ![Connection types panel](/static/images/report-designer/manage-data/datasource/connection-types-panel.png '#width=395px')
5. In the new connection panel, set the following fields:
    * In the **Name** field, specify the data source name without special characters.
    * In the **Server Name** field, select an existing server in the local network from the drop-down list, or specify a remote server name like `myserver.domain.com`.
    * In the **Authentication Type** field, choose **Windows** or **SQL Server** authentication.
    * If you chose **SQL Server** authentication, specify the **username** and **password** of the server.
    * In the **Database** field, choose or enter an existing valid database, for example, AdventureWorks.
      ![New connection panel](/static/images/report-designer/manage-data/datasource/save-new-data-source.png '#width=395px')
6. Click the `Save` button. The new embedded data source is added to the data source list pane, as shown below.
   ![Data source list view](/static/images/report-designer/manage-data/datasource/data-source-list-view.png '#width=385px')
7. Use the data source. The embedded data source is now created in the report and ready for you to create or use data.

## Frequently asked questions

### Can other reports use an embedded data source?

No. In the {{site.productNameTM}} Web Report Designer, an embedded data source can only be used by the report in which it is embedded.

### How many data sources does a report need?

A report needs a minimum of one data source to bind data to a report item.

## See also

* [Link a shared data source](https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/manage-data/datasource/link-a-shared-data-source/)
* [Modify an embedded data source](./../modify-an-embedded-data-source/)
* [Create an embedded dataset](./../../dataset/create-an-embedded-dataset/)
