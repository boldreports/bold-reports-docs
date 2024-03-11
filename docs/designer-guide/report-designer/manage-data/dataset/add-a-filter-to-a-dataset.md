---
title: Add a filter to a dataset | Bold Reports | Report Designer
description: Add a filter to a dataset in Bold Report Designer to filter data in a report after retrieving from datasource.
keywords: filter data, dataset filters, report-designer, ssrs filters, ssrs, reporting
---

# Add a filter to a dataset

This section guides you to add a filter at dataset level in Bold Report Designer.

## Create Data

Refer [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section to create a data in report designer.

## Apply filters at dataset level

1. Select a data in the `DATA` panel to which you want to apply filter.
   ![Data item menu icon](/static/assets/on-premise/images/report-designer/manage-data/dataset/data-item-menu-icon.png '#width=355px')
2. Click the above highlighted icon to open the filter menu for the selected data.
   ![Dataset filter menu](/static/assets/on-premise/images/report-designer/manage-data/dataset/filter-context-menu.png '#width=355px')
3. Click on `Filter...` option in the context menu, it will launch the filter dialog like below.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/manage-data/dataset/filters-dialog.png '#width=345px')

### Add filters

Refer [Add filters](./../../../compose-report/filter-data/#add-filters) section to create filter equation.

### Set expression

Refer [Set expression](./../../../compose-report/filter-data/#set-expression) section to set expression in filter equation.

### Remove filter

Refer [Remove filter](./../../../compose-report/filter-data/#remove-filters) section to delete a filter equation.

## Example

We can filter the `ProductID` field values at dataset level like below.

1. Create a filter equation as in the below snap, and click `OK`.
   ![Filter equation for product id field](/static/assets/on-premise/images/report-designer/manage-data/dataset/filter-product-id-field.png '#width=355px')
2. Now, assign the dataset to the `Table` report item. Refer [Design a basic table report](./../../../design-rdl-report-in-web-report-designer/) section.
3. Preview the report. Observe the below snap, it displays the records for `ProductID` value **712** based on the filter equation.
   ![Preview output for dataset filters](/static/assets/on-premise/images/report-designer/manage-data/dataset/dataset-filter-preview.png '#width=410px')