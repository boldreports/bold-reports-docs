---
layout: post
title: Data sources management | Report Server | Syncfusion
description: Explains about data sources management in Report Server. Allows you to add, update, rollback, download and delete shared data sources in the Report Server.
platform: Report-Platform
documentation: ug
---

# Data sources management in Report Server

You can create and store a data source on the Report Server when you have data source that you use often. When you create or upload a data source to Report Server, it is considered as shared data source that can be used by multiple reports.

It is recommended to use shared data sources as much as possible. It is easier to manage, and help to keep reports and the data sources access more secure. The shared data sources always placed in the `Data Sources` page, they are accessible to the user depending on the user’s permission.

This section about data sources management in Report Server. Allows you to add,delete shared data sources in the Report Server. The following image shows the list of options available to manage a datasources.

![Options available to manage data sources in the Report Server](/static/assets/on-premise/images/manage-content/manage-data-sources/managing-data-sources.png)

## Add or create data sources

Data source can be added to Report Server only if the user has `Create All Data Sources` permission.

### Steps to add a data source

1. Click on the `Create Data Source` button from Data Sources listing page.
![Create data source menu option](/static/assets/on-premise/images/manage-content/manage-data-sources/create-data-source-menu-option.png)

   > While adding datasource we can also add new Dataset to the Report Server either by using `Create New Datasource` option or `Use existing Datasource` option.

2. By default, `Create New Datasource` will be chosen. Enter the name and description of the data source, the data source type, connection string and the connection detail to connect the selected data source type. Data source can be created with connections to any one of the following data source types,
    ![Set data source properties](/static/assets/on-premise/images/manage-content/manage-data-sources/add-data-source.png)

    * SQL
    * SQLCE
    * OLEDB
    * ODBC
    * Oracle
    * XML
    * SSAS
    * PostgreSQL
    ![Set data source existing](/static/assets/on-premise/images/manage-content/manage-data-sources/add-data-source-existing.png)

3. Click on `Connect` button, it will add new dataset by connecting with newly created or existing datasource.

4. Enter the name and description of the dataset and click on `Proceed to Designer` option.
![Proceed to designer](/static/assets/on-premise/images/manage-content/manage-data-sources/proceed-to-designer.png).

5. After designing dataset click on the `save` option.

    >`Read Write Delete Download` permission for the `Specific Data Source` will be added for the user who created the data source.

## Share data sources

This section explains on how to share data sources with the other users in the Report Server.

### Steps to share a data source

1. Click the `Actions` button in the Data sources grid context menu and select `Sharing Permissions` option.
![Sharing permission menu option](/static/assets/on-premise/images/manage-content/manage-data-sources/manage-datasource-permission-context-menu.png)

2. Sharing permission dialog will open. By default it will open dialog with `Share To` tab. Select the permission access from the `Select Access` dropdown and select the users or groups to share the data source.
![Select data source access permission](/static/assets/on-premise/images/manage-content/manage-data-sources/select-datasource-permission-dialog.png)

3. After selecting the access and users or groups, click on the `Share` button.
    ![Add permission to a data source](/static/assets/on-premise/images/manage-content/manage-data-sources/add-datasource-permission.png)

    > Only the user who created the data source can share the data source with other Report Server users.

## Update data sources

This section explains how to update the data sources in Bold Reports.

### Steps to update the data source

1. Click the `Actions` in the data sources grid context menu and select `Update` option.
![Update datasource menu option](/static/assets/on-premise/images/manage-content/manage-data-sources/update-datasource-option.png)

2. The name, description, data source type, connection string, and credential details to connect to the specified data source type can be changed by clicking `Update` option in the update data source dialog box.
![Update option](/static/assets/on-premise/images/manage-content/manage-data-sources/update-option.png)

>This option is available on Bold Reports On-Premise Edition from `2.2.28` version.

### Remove data source permission

Click on the `Shared With` tab. The user who created the data source can remove the shared data source permissions using the `Remove` option in the `Actions` column of the each permissions.
![Remove permission of a data source](/static/assets/on-premise/images/manage-content/manage-data-sources/remove-datasource-permission.png)

## Delete data source

Data sources can also be deleted from the Report Server when they are no longer required.

Click the `Actions` button in the data sources grid context menu and select `Delete` to delete the data source.
![Delete a data source](/static/assets/on-premise/images/manage-content/manage-data-sources/delete-data-source.png)

> Data Sources cannot be deleted if a report uses it.

## REST API Reference

The following table illustrates the list of available APIs related to datasources in Bold Reports On-Premise.

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
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_AddDataSource">AddDataSource</a>
        </td>
        <td>
            POST
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/reports/data-sources
        </td>
        <td>
            Adds a new datasource to the server. Datasource details must be passed as input.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_UpdateDataSource">UpdateDataSource</a>
        </td>
        <td>
            PUT
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/reports/data-sources
        </td>
        <td>
            Updates the datasource in the server. Updated datasource details must be passed as input.
        </td>
    </tr>  
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_GetItems">GetDataSources</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/items
        </td>
        <td>
            Returns the list of datasources for current user. ItemType should be Datasource.
        </td>
    </tr>  
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_GetItemLocation">GetDataSourceLocation</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/items/{itemId}/location
        </td>
        <td>
            Returns the item location of the specified datasource. Specific DataSource ID should be passed in path parameter.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/on-premise/rest-api-reference/v1.0/#operation/Items_IsItemNameExists">IsDataSourceNameExists</a>
        </td>
        <td>
            POST
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/items/is-name-exists
        </td>
        <td>
            Returns an item existence whether the given datasource name already exists or not in server. Datasource name and ItemType as DataSource should be passed in request body.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_GetItemDetail">GetDataSourceDetail</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/items/{id}
        </td>
        <td>
            Returns the specified datasource details from the server. DataSource item ID should be passed in path parameter.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_DeleteItem">DeleteDataSource</a>
        </td>
        <td>
            DELETE
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/items/{id}
        </td>
        <td>
            Deletes the specified datasource from the server. DataSource item ID should be passed in path parameter.
        </td>
    </tr>
</table>
