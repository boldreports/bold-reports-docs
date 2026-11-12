---
title: Show Distinct Values in SSRS Parameter List | {{site.productName}}
description: Show distinct values in an RDL report parameter dropdown in {{site.productName}} Web Report Designer with the Show unique values option when a query returns duplicates.
---

# How to get distinct values in parameter dropdown

To get distinct values in a parameter dropdown in {{site.productNameTM}} Report Designer, enable the `Show unique values` option when you create the parameter.

## Why does my parameter dropdown show duplicate values?

A {{site.productNameTM}} parameter dropdown shows duplicates when the dataset query returns duplicate records. At report run time, these values are listed in the parameter dropdown as they are.

![Duplicate values in ssrs parameter drop down](/static/images/report-designer/how-to/distinct-values-parameter/parameters-with-duplicate-values.png '#width=300px')

## Steps to configure distinct values for parameters

{{site.productNameTM}} designer provides an option called `Show unique values` when you create a parameter. Enable this option to get distinct values in the parameter dropdown.

1. [Create a new parameter](./../../report-parameters/add/) or [edit an existing parameter](./../../report-parameters/edit/).
2. In the parameters configuration panel, enable the `Show unique values` checkbox.
   ![Enable unique values](/static/images/report-designer/how-to/distinct-values-parameter/enable-unique-value.png '#width=350px')
3. Save the parameter.

When the report runs, the unique values are listed in the parameter dropdown.

![Unique values in ssrs parameter drop down](/static/images/report-designer/how-to/distinct-values-parameter/parameters-with-unique-values.png '#width=300px')
> The ability to get distinct values from parameter drop down feature was introduced in the {{site.productNameTM}} version 5.2.26. Ensure you have upgraded your report server to this version or later to access this feature.

## Frequently asked questions

### Which {{site.productNameTM}} version supports distinct parameter values?

The feature was introduced in {{site.productNameTM}} version 5.2.26. Upgrade your report server to this version or later to use it.

## See also

* [Add a report parameter](./../../report-parameters/add/)
* [Set all values in multi-value parameters as default](./../../how-to/set-all-values-in-multi-value-parameters-as-default/)
* [Report Designer how-to guides](./../../how-to/)
