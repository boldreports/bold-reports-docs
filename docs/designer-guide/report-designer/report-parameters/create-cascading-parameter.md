---
title: Create a cascading parameter with Web Report Designer
description: This section describes the steps to create a cascading parameter to handle long list of values in report data on report preview action.
---

# Cascading Parameter

The concept of cascading parameters is a list of values for one parameter depends on the values chosen in another parameter. This type of parameters can be used when a parameter has a long list of values.

## Steps to create cascading parameters

The following section describes the step by step process to create a cascading parameters in Web Report Designer.

### Create the main dataset

Create a new dataset by following the steps provided in [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/#design-query-data) section before proceeding with below steps:
1. In **Name** field, type the name of the dataset. For example, we have provided **SalesbyCategory** as dataset name.
2. Click on the `switcher` in query designer toolbar, to switch to the query mode.
    ![Code switcher icon](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/code-switcher-icon.png)
3. The query must have the following parts:
    * A list of column fields in `SELECT` statement to fetch from any specific table.
    * One query parameter for each cascading parameter.
       For example, we have chosen tables **SalesPerson**, **SalesOrderHeader**, **SalesOrderDetail**, **Product**, **ProductSubcategory**, **ProductCategory** from `AdventureWorks` database to include query parameters @Category and @Subcategory in below query:

       ```js
       SELECT
       PC.Name AS Category,
       PSC.Name AS Subcategory,
       SOH.[OrderDate],
       SOH.SalesOrderNumber,
       SD.OrderQty,
       SD.LineTotal
       FROM [Sales].[SalesPerson] SP
           INNER JOIN [Sales].[SalesOrderHeader] SOH
           ON SP.[SalesPersonID] = SOH.[SalesPersonID]
           INNER JOIN Sales.SalesOrderDetail SD
           ON SD.SalesOrderID = SOH.SalesOrderID
           INNER JOIN Production.Product P
           ON SD.ProductID = P.ProductID
           INNER JOIN Production.ProductSubcategory PSC
           ON P.ProductSubcategoryID = PSC.ProductSubcategoryID
           INNER JOIN Production.ProductCategory PC
           ON PC.ProductCategoryID = PSC.ProductCategoryID
           WHERE (PC.Name = (@Category)
           AND PSC.Name = (@Subcategory))
       ```

        Paste the above query in query editor.
          ![Query of Sales by category dataset](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/sales-by-category-dataset-query.png)

4. Click on the `Run` icon in toolbar, now the **Parameters** dialog opens automatically. Type the desired value for each query parameter in the parameter value column.
   For example,
     * In **@Category** parameter, we have typed `Components` as value.
     * In **@Subcategory** parameter, we have typed `Brakes` as value.

       ![Query parameter dialog](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/sales-by-category-parameters-dialog.png '#width=400px')

5. Click on the `Finish` button. Now, the `SalesbyCategory` dataset will be listed under the `DATA` pane.
Once you save the dataset, an equivalent report parameters will be created under the `PARAMETERS` panel like below.

   ![Report parameter list for sales by category dataset](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/sales-by-category-parameter-list.png '#width=350px')

### Create dataset for independent parameter

1. Create a new dataset by following the steps provided in [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/#design-query-data) section before proceeding with below steps.
2. In **Name** field, type the name of the dataset. For example, we have chosen **CategoryValues** as dataset name.
3. Paste the following query text in the query editor:

   ```js
      SELECT DISTINCT Name AS Category FROM Production.ProductCategory
   ```

   Here column name **Name** and table **ProductCategory** has been represented in above query to create dataset for independent parameter `Category`.
    ![Category values dataset](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/category-values-dataset.png)
4. Click on the `Run` icon in toolbar to see the result.
    ![Category values dataset](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/category-values-dataset-preview-data.png)
5. Click on the `Finish` button. Now, the `CategoryValues` dataset will be listed under the `DATA` pane.

### Set available values for independent parameter

1. Click `Parameter` icon in the configuration panel to open a `PARAMETERS` panel.
    ![Parameter icon](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/parameter-icon.png '#width=250px')
2. Edit the **Category** parameter. In name field, verify that the name is **Category**.
    Refer [Edit Report Parameter](./../../report-parameters/edit/) section.
3. Click `Assign Value >>` to open the `Parameter Assign` dialog.
4. Select `Query Value` option under `Available Value` tab.
5. Select the `CategoryValues` in dataset field, `Category` in value and label field.
    ![Define available values for category parameter](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/category-parameter-query-value.png '#width=400px')
6. Click on the `Ok` button and `Save` the parameter.

### Create dataset for dependent parameter

Next, need to create dataset for dependent parameter and assign values to it. For example, we have chosen `@Subcategory` as dependent parameter.

1. Create a new dataset by following the steps provided in [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/#design-query-data) section before proceeding with below steps.
2. In **Name** field, type the name of the dataset. For example, we have chosen **SubcategoryValues** as dataset name.
3. Switch to the query editor mode and paste the following query text in the query editor:

    ```js
    SELECT DISTINCT PSC.Name AS Subcategory
    FROM Production.ProductSubcategory AS PSC
    INNER JOIN Production.ProductCategory AS PC
    ON PC.ProductCategoryID = PSC.ProductCategoryID
    WHERE PC.Name = (@Category)
    ```

    Here column name **Name** and table **ProductSubCategory** joins with table **ProductCategory** and includes condition with independent parameter `Category` to create dataset for dependent parameter `SubCategory`.
    ![Sub category values dataset](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/sub-category-values-dataset-query.png)
4. Click on the `Run` icon in toolbar, now the **Parameters** dialog opens automatically. For example, In **@Category** parameter, we have typed `Components` as value.
    ![Query parameters dialog](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/query-parameter-dialog-for-category-parameter.png '#width=400px')
5. Click on the `OK` button, the result set will display 14 rows.
    ![Preview data for sub category values dataset ](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/sub-category-values-preview-data.png)
6. Click on the `Finish` button. Now, the `SubcategoryValues` dataset will be listed under the `DATA` pane.

### Set available values for dependent parameter

1. Click on the `Parameter` icon in the configuration panel to open a `Parameter` configuration panel.
2. Edit the **Subcategory** parameter. In name field, verify that the name is **Subcategory**.
3. Click on `Assign Value>>` to open  the `Parameter Assign` dialog.
4. Select `Query Value` option under `Available Value` tab.
5. Select the `SubcategoryValues` in dataset field, `Subcategory` in value and label field.
    ![Define available values for Subcategory parameter](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/subcategory-parameter-query-value.png '#width=400px')
6. Click on the `Ok` button and `Save` the `Subcategory` parameter.

## Filter a table data based on report parameter

1. Design a simple table report and assign the `SalesbyCategory` dataset to the table.
    ![Design table report](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/simple-table-report-design.png)
   > Refer [Design a simple table report](./../../design-rdl-report-in-web-report-designer/#add-table-report-item) section to create a table report in Web Report Designer.
2. Click on the `Preview` button in the report header.
3. Choose `Accessories` in the `Category` parameter drop-down, based on the `Accessories` category the values will be populated in the `SubCategory` drop-down.
    ![Choose value for Category parameter](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/sub-category-parameter-drop-down.png '#width=350px')
4. Choose `Bike Racks` in the `Subcategory` dropdown and click on `View Report` button.
    ![Final report preview](/static/assets/on-premise/images/report-designer/report-parameters/create-cascading-parameter/report-preview-final-view.png '#width=450px')

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/report-parameters/create-cascading-parameter.rdl).