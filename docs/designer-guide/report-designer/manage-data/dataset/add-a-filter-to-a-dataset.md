---
title: Add a Filter to a Dataset in RDL Reports | Bold Reports
description: Add a filter equation at the dataset level in the Bold Reports Web Report Designer to filter report data after it is retrieved from the data source.
keywords: filter data, dataset filters, report-designer, ssrs filters, ssrs, reporting
---

# Add a filter to a dataset

A dataset filter in the Bold Reports<sup>®</sup> Web Report Designer filters report data at the dataset level. You add a filter equation to the dataset to keep only the records you need.

## What do I need first?

You need a dataset in the Bold Reports<sup>®</sup> Web Report Designer before you add a filter. Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section to create data in the report designer.

## How do I apply filters at the dataset level?

You apply dataset filters from the `DATA` panel of the Web Report Designer.

1. Select the data in the `DATA` panel to which you want to apply the filter.
   ![Data item menu icon](/static/assets/on-premise/images/report-designer/manage-data/dataset/data-item-menu-icon.png '#width=355px')
2. Click the highlighted icon shown in the previous image to open the filter menu for the selected data.
   ![Dataset filter menu](/static/assets/on-premise/images/report-designer/manage-data/dataset/filter-context-menu.png '#width=355px')
3. Click the `Filter...` option in the context menu. The filter dialog opens, as shown below.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/manage-data/dataset/filters-dialog.png '#width=345px')

### How do I add filters?

The filter dialog in the Web Report Designer works the same way for datasets and report items. Refer to the [Add filters](./../../../compose-report/filter-data/#add-filters) section to create a filter equation.

### How do I set an expression?

You set an expression in a dataset filter equation the same way as in other Web Report Designer filters. Refer to the [Set expression](./../../../compose-report/filter-data/#set-expression) section to set an expression in a filter equation.

### How do I remove a filter?

You remove a dataset filter equation from the same filter dialog in the Web Report Designer. Refer to the [Remove filter](./../../../compose-report/filter-data/#remove-filters) section to delete a filter equation.

## Example

The following Bold Reports<sup>®</sup> example filters the `ProductID` field values at the dataset level:

1. Create a filter equation as shown in the following image, and click `OK`.
   ![Filter equation for product id field](/static/assets/on-premise/images/report-designer/manage-data/dataset/filter-product-id-field.png '#width=355px')
2. Assign the dataset to the `Table` report item. Refer to the [Design a basic table report](./../../../design-rdl-report-in-web-report-designer/) section.
3. Preview the report. The following image displays the records for the `ProductID` value **712** based on the filter equation.
   ![Preview output for dataset filters](/static/assets/on-premise/images/report-designer/manage-data/dataset/dataset-filter-preview.png '#width=410px')

## Frequently asked questions

### When does a dataset filter apply?

A dataset filter in the Bold Reports<sup>®</sup> Web Report Designer filters report data at the dataset level, so every report item that uses the dataset gets the filtered records.

### Where do I open the dataset filter dialog?

Select the data in the `DATA` panel, open its menu, and click the `Filter...` option in the context menu.

## See also

* [Create an embedded dataset](./../create-an-embedded-dataset/)
* [Dataset fields](./../dataset-fields/)
* [Dataset parameters](./../dataset-parameters/)
