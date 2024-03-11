---
layout: post
title: Dataset management | Report Server | Syncfusion
description: Explains about dataset management in Report Server. Allows you to create, add, update, rollback, download and delete data sets in the Report Server.
platform: report-platform
documentation: ug
---

# Dataset management in Report Server

You can create and store datasets on a Report Server that can be used by multiple reports. When you create or upload a dataset to the Report Server, it is considered a shared dataset and is always placed on the `Dataset` page. A shared dataset must be based on a shared data source. Datasets are accessible to users depending on their permissions. This section explains about dataset management in the Report Server. Allows you to create, edit, update, sharing permissions and delete datasets in Bold Reports On-Premise. The following image shows the list of options available to manage dataset.

![Options available to manage data sets](/static/assets/on-premise/images/manage-content/manage-data-sets/managing-datasets.png)

## Create dataset

Dataset can be created only if the user has `Create All Datasets` permission.

### Steps to create a dataset

We can create dataset by following ways.
1. Add dataset from `+` icon.
2. Add dataset from Dataset listing page.

#### Add dataset from `+` icon

* Click on the `+` button in the left side menu and choose `Create Dataset` to add a dataset.
    ![Create a dataset menu option](/static/assets/on-premise/images/manage-content/manage-data-sets/create-dataset-option.png)

#### Add dataset from Dataset listing page

* Click `Dataset` from left side panel of the Report Server and click `Create my first Dataset` button there is no dataset in listing page or else click  `Create Dataset` button.
   ![Create a dataset menu option listing](/static/assets/on-premise/images/manage-content/manage-data-sets/create-dataset-option-listing.png)

* To create dataset, we have use datasource either newly created or else existing datasource. Refer this link for [creating dataset](./../data-sources-management/#add-or-create-data-sources)

    > `Read Write Delete` permission for that `Specific Dataset` will be added for the user who created the dataset.

## Add or upload dataset

1. Click on the `+` button in the left side menu and choose `Upload Dataset` and select `Dataset` to add a dataset.
    ![Upload DataSet](/static/assets/on-premise/images/manage-content/manage-data-sets/upload-dataset-option.png)

2. Enter the name and description of the dataset.

3. Click `Browse` and select the `.rsd` file to upload.
    ![Auto-Filled Dataset Name](/static/assets/on-premise/images/manage-content/manage-data-sets/upload-dataset-name.png)

    > If the name field is left blank, the system will auto-populate it with the name of the uploaded `.rsd` file.

4. Select the `DataSource`. In the select data source dialog, you can either select a data source that is already available in the Report Server or create a new data source at that time itself.
    ![Select a data source for the uploaded dataset](/static/assets/on-premise/images/manage-content/manage-data-sets/upload-dataset-dialog.png)

5. Click on the `Save` option, the dataset will be uploaded into the Bold Reports On-Premise and displayed in the list as shown below,
    ![Added datasets list view](/static/assets/on-premise/images/manage-content/manage-data-sets/uploaded-datasets-list.png)

    > `Read Write Delete` permission for that `Specific Dataset` will be added for the user who created the dataset.

## Create report with dataset

Click the `Actions` button in the dataset grid context menu and select `Create Reports` to create a new report with a dataset.
    ![Create new report with dataset](/static/assets/on-premise/images/manage-content/manage-data-sets/create-new-report-with-dataset.png)

## Edit dataset

Click the `Actions` button in the dataset grid context menu and select `Edit Dataset` to edit a dataset.
    ![Edit dataset properties](/static/assets/on-premise/images/manage-content/manage-data-sets/edit-dataset.png)

## Edit dataset as XML

This XML editor provides a user-friendly interface for you to make necessary modifications to the dataset in the Report Server. This means you can make necessary changes to the dataset without downloading it and using a separate text editor.

1. Click the `Actions` button in the dataset grid context menu and select `Edit As XML` to edit a dataset.
    ![Edit dataset in XML](/static/assets/on-premise/images/manage-content/manage-data-sets/edit-dataset-xml.png)

2. The respective dataset will be opened in a new tab as XML, allowing you to make modifications, and you can save the edited dataset by publishing it from the XML editor.
    ![Edit dataset XML View](/static/assets/on-premise/images/manage-content/manage-data-sets/edit-dataset-xml-view.png)

## Share dataset

This section explains on how to share dataset with the other users in the Report Server.

### Steps to share a dataset

1. Click the `Actions` button in the dataset grid context menu and select `Sharing Permissions` option.
    ![Manage dataset permission option](/static/assets/on-premise/images/manage-content/manage-data-sets/manage-dataset-permissions.png)

2. Click the `Manage Access` button.
    ![Set permissions to share a dataset](/static/assets/on-premise/images/manage-content/manage-data-sets/manage-dataset-permission-dialog.png)

3. Select the permission access and the users or groups to share the dataset.
    ![Add permission to dataset](/static/assets/on-premise/images/manage-content/manage-data-sets/add-dataset-permission.png)

4. After selecting the access and users or groups, click on the `Add` button.
    ![Add button](/static/assets/on-premise/images/manage-content/manage-data-sets/add-access-dataset-permission.png)
    > Only the user who have share permission can share the dataset with other Report Server users.

### Remove dataset permission

The user who will have specific permission can remove the shared dataset permissions using the `Remove` option in the `Actions` column of the each permissions.
![Remove Permission](/static/assets/on-premise/images/manage-content/manage-data-sets/remove-dataset-permission.png)

## Version history

Versions and file logs for each dataset are maintained in the Report Server for every changes in the Dataset. Click the `Actions` button in the grid context menu and click `Version History` option.
![Version History Option](/static/assets/on-premise/images/manage-content/manage-data-sets/versions-history-option.png)

### Versions

For each change in the `.rsd` file, a new version will be created. All versions can be individually opened.
![Versions](/static/assets/on-premise/images/manage-content/manage-data-sets/versions.png)

### File logs

For each change in the dataset including changes in the event, user and date.
![File logs](/static/assets/on-premise/images/manage-content/manage-data-sets/file-logs.png)

## Update dataset

1. Click the `Actions` button in the dataset grid context menu and select `Update Dataset` to update the Dataset.
    ![Update DataSet](/static/assets/on-premise/images/manage-content/manage-data-sets/update-dataset-option.png)

2. Enter the name and description of the dataset.

3. Click `Browse` and select the `.rsd` file to upload.

4. Select the `DataSource`. In the select data source dialog, you can either select a data source that is already available in the Report Server or create a new data source at that time itself.
    ![Select a data source for the uploaded dataset](/static/assets/on-premise/images/manage-content/manage-data-sets/update-dataset-dialog.png)

5. Click on the `Update` option, the dataset will be uploaded into the Bold Reports On-Premise and displayed in the list as shown below,
    ![Added datasets list view](/static/assets/on-premise/images/manage-content/manage-data-sets/uploaded-datasets-list.png)

## Delete dataset

Datasets can also be deleted from the Report Server when they are no longer required.

Click the `Actions` button in the dataset grid context menu and select `Delete` to delete the Dataset.
![Delete Dataset](/static/assets/on-premise/images/manage-content/manage-data-sets/delete-datasets.png)

> Dataset cannot be deleted if any report uses it.

## REST API Reference

The following table illustrates the list of available APIs related to datasets in Bold Reports On-Premise.

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
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_AddDataSet">AddDataset</a>
        </td>
        <td>
            POST
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/reports/datasets
        </td>
        <td>
            Adds a new dataset to the server. Dataset details must be passed as input.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_UpdateDataSet">UpdateDataset</a>
        </td>
        <td>
            PUT
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/reports/datasets
        </td>
        <td>
            Updates the dataset in the server. Updated dataset details must be passed as input.
        </td>
    </tr>  
        <tr>
        <td>
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_GetItems">GetDataSets</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/items
        </td>
        <td>
            Returns the list of datasets for current user. ItemType should be Dataset.
        </td>
    </tr>
        <tr>
        <td>
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_GetItemLocation">GetDataSetLocation</a>
        </td>
        <td>
            GET
        </td>
        <td>
           /api/site/{tenant-name}/v1.0/items/{itemId}/location
        </td>
        <td>
            Returns the item location of the specified dataset. Specific DataSet ID should be passed in path parameter.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_IsItemNameExists">IsDataSetNameExists</a>
        </td>
        <td>
            POST
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/items/is-name-exists
        </td>
        <td>
            Returns an item existence whether the given dataset name already exists or not in server. Dataset name and ItemType as DataSet should be passed in request body.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_GetItemDetail">GetDataSetDetail</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/items/{id}
        </td>
        <td>
            Returns the specified dataset details from the server. DataSet item ID should be passed in path parameter.
        </td>
    </tr>
        <tr>
        <td>
            <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/#operation/Items_DeleteItem">DeleteDataSet</a>
        </td>
        <td>
            DELETE
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/items/{id}
        </td>
        <td>
            Deletes the specified dataset from the server. DataSet item ID should be passed in path parameter.
        </td>
    </tr>
</table>
