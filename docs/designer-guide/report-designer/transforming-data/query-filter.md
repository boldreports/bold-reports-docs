---
title: Filter Dataset Query Data with Query Filters | Bold Reports
description: Add and delete query filters in the Bold Reports Web Report Designer query designer to limit dataset fields of a table to the specific data your report needs.
keywords: ejReportDesigner,reportdesigner, filters, opertors, queryfilter
---

# Query filters in the Web Report Designer

In the Bold Reports<sup>®</sup> Web Report Designer, query filters limit a dataset to the specific data you need from a database. You filter the data by adding and deleting filters.

The following image shows the query filters dialog.

![open-filter-dialog](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/query-filters-dialog.png '#width=450px')

Prefer watching over reading? Watch this video on adding query filters to a dataset:

`youtube: https://www.youtube.com/watch?v=vyjkswrL56g`

## How do I add query filters?

You add query filters in the Web Report Designer query filters dialog. Follow these steps:

1. Click the **Add** icon to add a filter.

   ![add-field-filters](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/add-filter.png '#width=450px')

2. The first drop-down list shows the dataset fields. Choose the field you need.

   ![add-expression](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/choose-fields.png '#width=200px')

3. The second drop-down list shows the **Operator** types. Choose an operator.

   ![operators-in- filters](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/operators.png '#width=200px')

4. In **Value**, enter the value to filter in the dataset fields.

    ![pass-value-in- filters](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/pass-value.png '#width=450px')

5. Select the **Include as parameter** checkbox to include the query parameters.

    ![include-paramter](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/include-paramter.png '#width=450px')

6. Click the **Add** icon again to add a second row. A drop-down appears at the top of the second row.

    ![and-condition-filter](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/and-condition.png '#width=450px')

7. Choose the **AND** or **OR** condition from the drop-down to filter data based on the query condition.

    ![and-or-dropdown](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/and-or-dropdown.png '#width=450px')

8. To add multiple filters, follow steps 1 to 5.

    ![add-with-multiple-filter](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/multiple-filters.png '#width=450px')

9. Click **OK** and select the **Execute** icon to view the filtered data in the data preview.

    ![datapreview](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/filtered-data.png)

10. When you save the dataset, the query parameter is automatically included as a report parameter.

    ![report-parameter](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/query-report-parameter.png '#width=350px')

## How do I remove query filters?

To remove a query filter in the Web Report Designer, click the **Delete** icon in the right corner of that filter.

![delete-filter](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/delete-a-filter.png)

## Frequently asked questions

### How do I combine several query filters?

Add a second filter row and choose the **AND** or **OR** condition from the drop-down at the top of that row.

### Does a query filter create a report parameter?

Yes, if you select **Include as parameter**. When you save the dataset, the query parameter is automatically included as a report parameter.

## See also

* [Define query parameters](./../../transforming-data/define-query-parameters/)
* [Join tables](./../../transforming-data/join-table/)
* [Configure expression columns](./../../transforming-data/configure-expression-columns/)
