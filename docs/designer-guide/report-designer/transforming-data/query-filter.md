---
title: Simple steps to filter query data using web report designer
description: This section describes about how to limit or filter dataset fields of specfic table using Bold Report Designer
keywords: ejReportDesigner,reportdesigner, filters, opertors, queryfilter
---

# Query Filters

Query Filters are used to filter out specific data in a database. The data can be filtered by adding and deleting a filters.

![open-filter-dialog](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/query-filters-dialog.png '#width=450px')

## Add filters

1. To add a filter, Click on the **Add** icon.

   ![add-field-filters](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/add-filter.png '#width=450px')

2. Dataset fields are listed in the first drop-down list, choose the necessary field from the drop-down list.

   ![add-expression](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/choose-fields.png '#width=200px')

3. **Operator** types are listed in the second drop-down list.

   ![operators-in- filters](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/operators.png '#width=200px')

4. In the **Value**, enter the value to be filtered in the dataset fields.

    ![pass-value-in- filters](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/pass-value.png '#width=450px')

5. Click on **Include as parameter** checkbox, will include the query parameters.

    ![include-paramter](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/include-paramter.png '#width=450px')

6. Click on **Add** icon again to add the second row. You can see a dropdown on the top of the second row

    ![and-condition-filter](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/and-condition.png '#width=450px')

7. Choose **AND** or **OR** condition from the dropdown and with that you can filter out data based on the query condition

    ![and-or-dropdown](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/and-or-dropdown.png '#width=450px')

8. To add multiple filters, follow steps 1 - 5.

    ![add-with-multiple-filter](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/multiple-filters.png '#width=450px')

9. Click **OK** and select **Execute** icon as shown below to view the filtered data based on the condition in the data preview.

    ![datapreview](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/filtered-data.png)

10. When save the dataset, the query parameter will automatically included in report parameter as shown below.

    ![report-parameter](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/query-report-parameter.png '#width=350px')

## Remove Filters

Click **Delete** icon in the right corner to remove the respective filters.

![delete-filter](/static/assets/on-premise/images/report-designer/transforming-data/query-filter/delete-a-filter.png)
