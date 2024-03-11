---
layout: post
title: Data sources management | Report Server | Syncfusion
description: Explains about data sources management in Report Server. Allows you to add, update, rollback, download and delete shared data sources in the Report Server.
platform: Report-Platform
documentation: ug
---

# Data sources management in Report Server

You can create and store a data source on the Report Server when you have a data source that you use often. When you create a data source on the Report Server, it is considered a shared data source that can be used by multiple reports.

It is recommended to use shared data sources as much as possible. It is easier to manage and helps keep reports and access to data sources more secure. The shared data sources are always placed on the `Data Sources` page and they are accessible to the user depending on the user’s permission.

This section is about data source management in Report Server. Allows you to add, update, share and delete shared data sources on the Report Server. The following image shows the list of options available to manage a data sources.

![Options available to manage data sources in the Report Server](/static/assets/on-premise/images/manage-content/manage-data-sources/managing-data-sources.png)

## Add or create data sources

Data source can be added to Report Server only if the user has `Create All Data Sources` permission.

### Steps to add a data source

1. Click on the `Create Data Source` button from Data Sources listing page.
    ![Create data source menu option](/static/assets/on-premise/images/manage-content/manage-data-sources/create-data-source-menu-option.png)

   > While adding datasource we can also add new Dataset to the Report Server either by using `Create New Datasource` option or `Use existing Datasource` option.

#### Create New Datasource

1. Click on `Create New Datasource` option, it will show enabled connectors like below image.
    ![Set data connectors type](/static/assets/on-premise/images/manage-content/manage-data-sources/connectors-type.png)

2. Choose the data source. Enter the name, description and the other required details of the data source and click on the **Save and Create DataSet** option.
    ![Set data source properties](/static/assets/on-premise/images/manage-content/manage-data-sources/add-new-data-source.png)

3. Enter the name and description of the dataset and click on `Proceed to Query Designer` option.
    ![Proceed to designer](/static/assets/on-premise/images/manage-content/manage-data-sources/proceed-to-designer.png).

4. After designing dataset click on the `save` option.

    >`Read Write Delete` permission for the `Specific Data Source` will be added for the user who created the data source.

    > **Note**: Security Content
    > ![password encryption](/static/assets/on-premise/images/manage-content/manage-data-sources/password-encryption.png)
    > * A password will be encrypted and saved in the database.
    > * When the `save password` option is not enabled, the credentials will not be stored in the database, and the system will prompt for the username and password on every occasion.
    > * When the `Save Password` option is enabled, the password is encrypted, and the credentials are stored in the database, preventing the system from prompting for the username and password on every occasion.

#### Use existing Datasource

1. Click on `Use existing Datasource` option, it will show all existing data sources.

2. Select the existing data source, click on `Connect` button to create new dataset.
   ![Set Use existing Datasource](/static/assets/on-premise/images/manage-content/manage-data-sources/add-data-source-existing.png)

3. Enter the name and description of the dataset and click on `Proceed to Query Designer` option.
   ![Proceed to designer](/static/assets/on-premise/images/manage-content/manage-data-sources/proceed-to-designer.png).

4. After designing dataset click on the `save` option.
    >`Read Write Delete` permission for the `Specific Data Source` will be added for the user who created the data source.

## Edit Datasource as XML

This XML editor provides a user-friendly interface for you to make necessary modifications to the datasource in the Report Server. This means you can make necessary changes to the datasource without downloading it and using a separate text editor.

1. Click the `Actions` button in the datasource grid context menu and select `Edit As XML` to edit a datasource.
    ![Edit datasource in XML](/static/assets/on-premise/images/manage-content/manage-data-sources/edit-datasource-xml.png)

2. The respective datasource will be opened in a new tab as XML, allowing you to make modifications, and you can save the edited datasource by publishing it from the XML editor.
    ![Edit datasource XML View](/static/assets/on-premise/images/manage-content/manage-data-sources/edit-datasource-xml-view.png)

## Share data sources

This section explains on how to share data sources with the other users in the Report Server.

### Steps to share a data source

1. Click the `Actions` button in the Data sources grid context menu and select `Sharing Permissions` option.
   ![Sharing permission menu option](/static/assets/on-premise/images/manage-content/manage-data-sources/manage-datasource-permission-context-menu.png)

2. Click the `Manage Access` button.
   ![Select data source access permission](/static/assets/on-premise/images/manage-content/manage-data-sources/select-datasource-permission-dialog.png)

3. Select the permission access and the users or groups to share the datasource.
   ![Add permission to a data source](/static/assets/on-premise/images/manage-content/manage-data-sources/add-datasource-permission.png)

4. After selecting the access and users or groups, click on the `Add` button.
   ![Add button](/static/assets/on-premise/images/manage-content/manage-data-sources/add-access-datasource-permission.png)
   > Only the user who have share permission can share the data source with other Report Server users.

### Remove data source Permission

The user who will have specific permission can remove the shared report permissions using the `Remove` icon in the `Actions` column of the each permissions.
![Add Permission](/static/assets/on-premise/images/manage-content/manage-data-sources/remove-datasource-permission.png)

## Update data sources

This section explains how to update the data sources in Bold Reports.

### Steps to update the data source

1. Click the `Actions` in the data sources grid context menu and select `Update` option.
   ![Update datasource menu option](/static/assets/on-premise/images/manage-content/manage-data-sources/update-datasource-option.png)

2. The name, description and the other required details can be changed by clicking `Update` option in the update data source dialog box.
   ![Update option](/static/assets/on-premise/images/manage-content/manage-data-sources/update-option.png)
   > This option is available on Bold Reports On-Premise Edition from `2.2.28` version.

## Delete data source

Data sources can also be deleted from the Report Server when they are no longer required.

Click the `Actions` button in the data sources grid context menu and select `Delete` to delete the data source.
![Delete a data source](/static/assets/on-premise/images/manage-content/manage-data-sources/delete-data-source.png)

> Data Sources cannot be deleted if a report or dataset uses it.

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
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_AddDataSource">AddDataSource</a>
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
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_UpdateDataSource">UpdateDataSource</a>
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
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_GetItems">GetDataSources</a>
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
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_GetItemLocation">GetDataSourceLocation</a>
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
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_IsItemNameExists">IsDataSourceNameExists</a>
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
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_GetItemDetail">GetDataSourceDetail</a>
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
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_DeleteItem">DeleteDataSource</a>
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
