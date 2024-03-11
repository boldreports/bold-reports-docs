---
title: Get distinct values in parameter dropdown | Bold Reports
description: This section describes how to get distinct values for SSRS parameter when dataset query returns duplicates.
---

# How to get distinct values in parameter dropdown

This section explains how to get distinct values and display in a SSRS parameter dropdown when data set query returns duplicates.

## Steps to configure distinct values for parameters

The data set query might have duplicate records. At report run time, these values will be listed in parameter drop down as it is.

![Duplicate values in ssrs parameter drop down](/static/assets/on-premise/images/report-designer/how-to/distinct-values-parameter/parameters-with-duplicate-values.png '#width=300px')

Bold Reports designer provides an option called `Show unique values` when creating a parameter. User can enable this option to get distinct values in parameter dropdown.

1. [Create a new parameter](./../../report-parameters/add/) or [edit an existing parameter](./../../report-parameters/edit/).
2. In parameters configuration panel, enable the `Show unique values` checkbox.
   ![Enable unique values](/static/assets/on-premise/images/report-designer/how-to/distinct-values-parameter/enable-unique-value.png '#width=350px')
3. Save the parameter.

When the report runs, the unique values will be listed in parameter dropdown.

![Unique values in ssrs parameter drop down](/static/assets/on-premise/images/report-designer/how-to/distinct-values-parameter/parameters-with-unique-values.png '#width=300px')
> The ability to get distinct values from parameter drop down feature was introduced in the BoldReports version 5.2.26. Ensure you have upgraded your report server to this version or later to access this feature.