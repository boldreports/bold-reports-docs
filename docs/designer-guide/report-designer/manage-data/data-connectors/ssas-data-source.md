---
title: Connect SSAS Data Source to RDL Reports | {{site.productName}}
description: Connect the {{site.productName}} Web Report Designer to Microsoft SQL Server Analysis Services (SSAS) and query OLAP cubes with MDX or DAX for your RDL reports.
---

# Connect to Microsoft SQL Server Analysis Services(SSAS) data source

The SSAS data source in the {{site.productNameTM}} Web Report Designer connects your reports to a Microsoft SQL Server Analysis Services (SSAS) database.

## How do I create a Microsoft SQL Server Analysis Services (SSAS) data source?

You create an SSAS data source from the **Data** panel of the {{site.productNameTM}} Web Report Designer. Follow these steps:

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=415px')
2. In the `DATA` configuration panel, click the `NEW DATA` button.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=350px')
3. In the connection type panel, choose the `Microsoft SQL Analysis Services` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/connection-types.png '#width=350px')

## How do I set the connection properties?

After you click the data source, the Web Report Designer opens the `NEW DATASOURCE` configuration panel. Set the SSAS connection properties as follows:

1. Specify the data source name without special characters in the **Name** field.
   ![Web datasource properties](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/ssas-properties.png '#width=350px')
2. In the **Server Name** field, select an existing server in the local network from the drop-down list, or specify a remote server name like `myserver.domain.com`.
3. In the [Authentication Type](./../../../manage-data/data-connectors/ssas-data-source/#authentication-types-for-basic-connection) field, choose **Windows** or **SQL Server** authentication.
4. Choose or enter an existing valid database, for example, AdventureWorks.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/basic-options.png '#width=350px')

5. Click `Connect` to open the query design pane.
6. Enter the required query and execute it. The grid shows the corresponding values for preview.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/execute-schema.png '#width=415px')

   > Only query mode is supported for Microsoft SQL Server Analysis Services data source.

7. Click `Finish` to save the data source with a relevant name and continue designing the report.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/data-list.png '#width=355px')

### Authentication types for basic connection

The basic SSAS connection in {{site.productNameTM}} supports two authentication types: **Windows** or **SQL server**.

If your data source supports authentication directly through **Windows Credentials** (Integrated Security), choose **Windows** under **Authentication Type**.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/basic-authentication.png '#width=385px')

If your data source requires a username and password to authenticate, choose **SQL server** under **Authentication Type**. Then, input the username and password for the server named in the *Server Name* field.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/server-authentication.png '#width=350px')

Enable the Save password option to embed the credentials within the report when saving it in {{site.productNameTM}} Report Server.

> On report download action, the credentials will be not be saved with report data.

## How do I create an SSAS data source with advanced options?

The advanced options of the SSAS data source in the Web Report Designer let you build your own connection string. To use them, click `Advanced Options` in the `New Data` panel.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/advanced-options.png '#width=350px')

1. Set the connection string and authentication type as required, and click `Connect`.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/advanced-connection.png '#width=350px')

2. Enter the required query and execute it. The grid shows the corresponding values for preview.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/execute-schema.png '#width=600px')

   > Only query mode is supported for Microsoft SQL Server Analysis Services data source.

3. Click `Finish` to save the data source with a relevant name and continue designing the report.

   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/data-list.png '#width=350px')

> Click `Basic Options` to switch back to the basic connection settings.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/switch-basic-options.png '#width=350px')

### Authentication types for advanced connection

The advanced SSAS connection supports Windows integrated security, SQL Server credentials, prompted credentials, or no credentials.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/advanced-authentication.png '#width=355px')

**Windows** - If your data source supports authentication directly through Windows credentials (Integrated Security), choose **Windows** under **Authentication Type**.

**SQL Server** - You must supply a user name and password to access the Microsoft SQL Server Analysis Services (SSAS) database. The credentials might be for a database login. The credentials are passed to the data source for authentication.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/advanced-sql-server.png '#width=355px')

Enable the Save password option to embed the credentials within the report when saving it in Report Server.

> On report download action, the credentials will be not be saved with report data.

**Prompt** - When you configure a data source connection to use prompted credentials, each user who accesses the report must enter a user name and password on preview to retrieve the data.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/prompt.png '#width=355px')

**None** - Choose the authentication type `None` when the connection string already provides the authentication details or any other arguments required to connect with the data source.

### How do I query OLAP cube data?

The query language you use for OLAP cube data through SSAS in {{site.productNameTM}} depends on the cube type:

* **Multidimensional Cube :** Use [MDX (Multidimensional Expressions)](https://learn.microsoft.com/en-us/analysis-services/multidimensional-models/mdx/querying-multidimensional-data-with-mdx?view=asallproducts-allversions) queries.

  ![Query example](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/mdx-query-example.png '#width=415px')

* **Tabular Cube :** Use [DAX (Data Analysis Expressions)](https://learn.microsoft.com/en-us/analysis-services/tabular-models/understanding-dax-in-tabular-models-ssas-tabular?view=asallproducts-allversions) queries.

  ![Query example](/static/assets/on-premise/images/report-designer/manage-data/ssas-data-source/dax-query-example.png '#width=415px')

When you use DAX with SSAS Tabular models in the {{site.productNameTM}} Designer, consider the following points:

* You can use **existing measures** defined in the SSAS model without any issues, but **creating new measures** directly in the {{site.productNameTM}} Designer's query builder is **not supported**.

* **Additive measures** (for example, SUM, COUNT) can be used across related dimensions and are suitable for designing charts, tables, and similar report elements.

* **Semi-additive measures** can also be applied over dimensions and used effectively in table report items.

* **Non-additive measures** can be queried and used in report items such as text boxes.

> Note: Always ensure that the dimension you use has a valid relationship with the table containing the measure to avoid data inconsistencies.

## Frequently asked questions

### Does the SSAS data source support a query designer mode?

No. Only query mode is supported for the Microsoft SQL Server Analysis Services data source in {{site.productNameTM}}.

### Should I use MDX or DAX for SSAS?

Use MDX queries for a multidimensional cube and DAX queries for a tabular cube.

### Can I create new measures in the {{site.productNameTM}} Designer query builder?

No. You can use existing measures defined in the SSAS model, but creating new measures in the {{site.productNameTM}} Designer's query builder is not supported.

## See also

* [Connect to a Microsoft SQL Server data source](./../sql-data-source/)
* [Connect to an XML data source](./../xml-data-source/)
* [Create an embedded data source](./../../datasource/create-an-embedded-data-source/)
