---
layout: post
title: How to create master detail report using subreport
description: This documentation explains how to create master detail report using sub-report in Bold Reports Designer
platform: embedded-reporting-tools
documentation: ug
---

# How to create master detail report using subreport in Report Designer

This documentation explains the step-by-step procedure to create master-detail report that displays the detail records from a sub-report.

## Create and customize the detail report

1. As a first step, open the Bold Report Designer.
   ![Bold reports designer](/static/assets/on-premise/images/report-designer/how-to/master-detail-report-subreport/bold-reports-designer.png '#width=400px')

2. To add parameters to the detail report, click `Parameters`. Then, click `New parameter` in the parameter panel.

3. Now, the following wizard will be displayed.
   ![Parameter wizard](/static/assets/on-premise/images/report-designer/how-to/master-detail-report-subreport/parameter-wizard.png '#width=350px')

4. Specify the parameter name as `ProdSubCat`, the prompt as `ProdSubCat` and set visibility to `hidden`.

5. Then, click `Save`.

6. Similarly, do the same to add the parameter `ProdModel`.
   ![Subreport add parameters](/static/assets/on-premise/images/report-designer/how-to/master-detail-report-subreport/subreport-addparameter.gif)

7. Connect to the data source using this documentation [link](./../../manage-data/datasource/).

8. Connect to the dataset using this documentation [link](./../../manage-data/dataset/).

9. The `ProductCatalog` dataset is created using the following query.
   ![ProductCatalog dataset](/static/assets/on-premise/images/report-designer/how-to/master-detail-report-subreport/datasource-connection.gif)

    ```csharp
      SELECT top 60 PS.Name AS ProdSubCat, PM.Name AS ProdModel, PC.Name AS ProdCat, PD.Description, PP.LargePhoto,P.Name AS ProdName,P.ProductNumber, P.Color, P.Size, P.Weight, P.StandardCost,P.Style,P.Class, P.ListPrice
      FROM  Production.Product P INNER JOIN
      Production.ProductSubcategory PS INNER JOIN
      Production.ProductCategory PC ON PS.ProductCategoryID = PC.ProductCategoryID ON P.ProductSubcategoryID = PS.ProductSubcategoryID INNER JOIN
      Production.ProductProductPhoto PPP ON P.ProductID = PPP.ProductID INNER JOIN
      Production.ProductPhoto PP ON PPP.ProductPhotoID = PP.ProductPhotoID LEFT OUTER JOIN
      Production.ProductDescription PD INNER JOIN
      Production.ProductModel PM INNER JOIN
      Production.ProductModelProductDescriptionCulture PMPDCL ON PM.ProductModelID = PMPDCL.ProductModelID ON
      PD.ProductDescriptionID = PMPDCL.ProductDescriptionID ON P.ProductModelID = PM.ProductModelID
    WHERE (PMPDCL.CultureID = 'en') and PS.Name = @ProdSubCat and PM.Name = @ProdModel
    ```

10. Drag the table report item and configure the field as shown in the following image.
    ![Initial design](/static/assets/on-premise/images/report-designer/how-to/master-detail-report-subreport/initial-detail-report-design.png)

You can download the created Detail report from here,
[Sample report.](https://www.syncfusion.com/downloads/support/directtrac/general/ze/Detail-report1732874929.zip)

## Create a master report

1. Open the Bold Report Designer.
   ![Bold reports designer](/static/assets/on-premise/images/report-designer/how-to/master-detail-report-subreport/bold-reports-designer.png '#width=450px')

2. Connect to the data source using this documentation [link](./../../manage-data/datasource/).

3. Connect to the dataset using this documentation [link](./../../manage-data/dataset/).

4. The `ProductCatalog` dataset is created using the following query.
   ![ProductCatalog dataset](/static/assets/on-premise/images/report-designer/how-to/master-detail-report-subreport/datasource-connection.gif)

    ```csharp
      SELECT top 60 PS.Name AS ProdSubCat, PM.Name AS ProdModel, PC.Name AS ProdCat, PD.Description, PP.LargePhoto,P.Name AS ProdName,P.ProductNumber, P.Color, P.Size, P.Weight, P.StandardCost,P.Style,P.Class, P.ListPrice
      FROM  Production.Product P INNER JOIN
      Production.ProductSubcategory PS INNER JOIN
      Production.ProductCategory PC ON PS.ProductCategoryID = PC.ProductCategoryID ON P.ProductSubcategoryID = PS.ProductSubcategoryID INNER JOIN
      Production.ProductProductPhoto PPP ON P.ProductID = PPP.ProductID INNER JOIN
      Production.ProductPhoto PP ON PPP.ProductPhotoID = PP.ProductPhotoID LEFT OUTER JOIN
      Production.ProductDescription PD INNER JOIN
      Production.ProductModel PM INNER JOIN
      Production.ProductModelProductDescriptionCulture PMPDCL ON PM.ProductModelID = PMPDCL.ProductModelID ON
      PD.ProductDescriptionID = PMPDCL.ProductDescriptionID ON P.ProductModelID = PM.ProductModelID
    WHERE (PMPDCL.CultureID = 'en')
    ```

5. Drag the table report item and configure the fields. Then, add groups in the tablix to display the data using this documentation [link](./../../report-items/tablix/add-or-delete-a-details-group-ssrs/).

6. The initial design of the report is displayed as shown in the following image.
   ![Initial master detail report design](/static/assets/on-premise/images/report-designer/how-to/master-detail-report-subreport/initial-master-report-design.png)

You can download the previously created master report from here.
[Sample master report.](https://www.syncfusion.com/downloads/support/directtrac/general/ze/Master-report804288141.zip)

## Link the subreport to the master report

The following steps explain how to link sub-report (`product category detail records`) to a master report.

1. Right-click on the last row (`Description`) and select `Insert Row`, then click the `Inside Group-Below option`.

2. In the newly added row, select all the cells using `Ctrl Key + Mouse left click` combination.

3. After selection, right-click any selected cell, and then click `Merge Cells`.

4. Right click on newly added row and select Insert, then click Subreport.
   ![Add subreport in master](/static/assets/on-premise/images/report-designer/how-to/master-detail-report-subreport/add-subreport-in-master.gif)

5. Select the sub-report item in the design surface and open the `properties panel`.

6. Under the Basic Settings, copy the sub-report path and paste it in the Report field.
   ![Add subreport in master](/static/assets/on-premise/images/report-designer/how-to/master-detail-report-subreport/link-subreport-path.gif)

7. Then Click `Set Parameters`, followed by the `Add` button.

8. Specify the Parameter Name to `ProdSubCat` and value to `=Fields!ProdSubCat.Value`.

9. Similarly, do the same for parameter `ProdModel` and value as `=Fields!ProdModel.Value`.
   ![Add parameter in master report](/static/assets/on-premise/images/report-designer/how-to/master-detail-report-subreport/add-parameter-in-master.gif)

10. Click on the Preview at the top-right corner of the Report Designer toolbar to see the output result.
    ![Output](/static/assets/on-premise/images/report-designer/how-to/master-detail-report-subreport/outputvideo.gif)