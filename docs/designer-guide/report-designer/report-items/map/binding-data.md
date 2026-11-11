---
title: Bind Analytical Data to a Map in RDL Reports | Bold Reports
description: Bind analytical data to map shape data in the Bold Reports Web Report Designer by matching fields in Binding Field Pairs so your data displays on the map.
---

# Bind data to a map in Bold Reports<sup>®</sup> Web Report Designer

To display analytical data on the map surface in the Bold Reports<sup>®</sup> Web Report Designer, you first link the analytical data and the shape data. The shape data is the map itself, and the analytical data is the dataset you created. The analytical data gives meaning to the shape data.

## What do I need before binding data?

Before you bind data to a map in the Bold Reports<sup>®</sup> Web Report Designer, create both the shape data and the analytical data in the report. For shape data, choose one of the built-in shapes under the **Shapes** property, for example World Map. For analytical data, embed data from external sources or SQL Server by using the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) option.
> The example on this page uses world countries population data.

## How do I match analytical and shape data?

You match analytical and shape data in the Bold Reports<sup>®</sup> Web Report Designer through the **Binding Field Pairs** panel. Follow these steps:

1. In the properties panel, under the **Basic Settings** category, choose **World Map** in the **Shapes** property and the dataset in the **DataSet** property.
   ![Set shape data and analytical data](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/select-shape-and-dataset.png '#width=385px')
2. Click the edit icon for the `Binding Data` property under **Basic Settings**.
   ![Edit analytical and spatial link](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/edit-icon.png '#width=385px')
3. Use the **Binding Field Pairs** panel that opens to link the analytical data and shape data.
   ![Edit analytical and spatial link](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/binding-field-pairs-panel.png '#width=385px')
4. Click the **ADD** icon in the top-right corner. **Field Name** is a shape field, and **Binding expression** is an analytical field.
   ![Add new binding expression](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/add-binding-expression.png '#width=385px')
    * The **Field Name** dropdown lists the available fields in the selected shape data.
       ![Field name](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/field-name-drop-down.png '#width=385px')
    * The **Binding expression** dropdown lists the available fields in the selected dataset.
       ![Binding expression](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/binding-expression.png '#width=385px')

      For example, to match the map surface with the country name, choose **admin** in the **Field Name** dropdown and choose the **=Fields!Country.Value** expression in the **Binding Expression** dropdown. You can also set expressions that evaluate to a field value in the **Field Name** and **Binding expression** dropdowns.

      ![Link shape and analytical data](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/link-shape-analytical.png '#width=385px')

      > The **admin** field holds the names of the countries in the world.

5. Click **Update**.

Repeat these steps to create multiple binding relationships or to edit existing binding relationships.

## How do I delete binding expressions?

To delete an existing binding relationship in the Bold Reports<sup>®</sup> map report item, follow these steps:

1. Click the edit icon for the `Binding Data` property under **Basic Settings**. The **Binding Field Pairs** panel lists the available binding relationships.
2. Click the `Delete` icon in the right corner of the binding expression you want to remove.
3. Click **Update**.

![Delete binding expression](/static/assets/on-premise/images/report-designer/report-items/map/binding-data/delet-binding-expression.png '#width=385px')

## Frequently asked questions

### What is the difference between shape data and analytical data?

The shape data is the map itself, and the analytical data is the dataset you created. The analytical data gives meaning to the shape data.

### Can I create more than one binding relationship?

Yes. Repeat the binding steps to create multiple binding relationships or to edit existing ones.

## See also

* [Map report item](./../../../report-items/map/)
* [Map legend](./../../../report-items/map/legend/)
* [Marker color rule](./../../../report-items/map/marker-color-rule/)
