---
title: Binding data to map | Web ReportDesigner | Bold Reports
description: This section describes the steps involved in binding a data to map report item with Bold Report Designer.
---

# Binding data

To display analytical data on the map surface, first we need to link the analytical and shape data. The shape data is the map itself, whereas the analytical data is the data set we created. The analytical data provides meaning to the shape data. To bind analytical and shape data first must create both in the report. For shape data you can choose the build-in shapes provided under **Shapes** property, eg. World Map. Then for analytical data, embed data from external sources or SQL Server using [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) option.
> Here, world countries population data is used for demonstration.

## Match analytical and shape data

To bind analytical and shape data, follow these steps:

1. In the properties panel, under the **Basic Settings** category, choose **World Map** in **Shapes** property and the data set in the **DataSet** property.
![Set shape data and analytical data](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/select-shape-and-dataset.png)
2. Then click on the edit icon for the `Binding Data` property under **Basic Settings**.
![Edit analytical and spatial link](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/edit-icon.png)
3. Now, you will be taken to the **Binding Field Pairs** panel. The binding field pairs panel can be used to link the analytical data and shape data.
![Edit analytical and spatial link](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/binding-field-pairs-panel.png)
4. Click on the **ADD** icon in the top-right corner. **Field Name** is a shape field and the **Binding expression** is an analytical field.
![Add new binding expression](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/add-binding-expression.png)
    * The **Field Name** drop-down will list the available fields in the selected shape data.
    ![Field name](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/field-name-drop-down.png)
    * The **Binding expression** drop-down will list the available fields in the selected data set.
    ![Binding expression](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/binding-expression.png)

    For example, to match the map surface with the country name. Choose **admin** in the **Field Name** drop-down and the choose the **=Fields!Country.Value** expression in **Binding Expression** dropdown. You can also set expressions which evaluates to a field value in **Field Name** and **Binding expression** drop-downs.

    ![Link shape and analytical data](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/link-shape-analytical.png)

    > **admin** field holds the name of the countries in the world.

5. Click on the **Update**.

Repeat the above steps to create multiple binding relationships or edit existing binding relationships.

## Delete binding expressions

To delete the existing binding relation ships, click on the edit icon for the `Binding Data` property under **Basic Settings**. Now, the available binding relationships will be listed in **Binding Field Pairs** panel. Click on the `Delete` icon in the right corner of required binding expression and click on the **Update**.

![Delete binding expression](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/delet-binding-expression.png)