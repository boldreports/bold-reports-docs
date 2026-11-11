---
title: Report Parameters in Web Report Designer | {{site.productName}}
description: Use report parameters in the {{site.productName}} Report Designer to filter data or link reports, and change parameter values at run time in the Report Viewer.
keywords: reports, ejreports, reportdesigner, report designer, web designer, bold-reports reportdesigner, Overview, web designer
---

# Report parameters in {{site.productNameTM}} Report Designer

**Report parameters** in {{site.productNameTM}} let readers provide inputs at run time, changing how a report presents its data or which rows appear. {{site.productNameTM}} supports creating report parameters manually or based on a dataset query, and using them in expressions to control report data.

The sections below introduce dataset query parameters and cascading parameters. They also link to the detailed steps for adding, editing, deleting, reordering, and creating cascading or multi-value parameters.

## What is a report parameter?

A report parameter in {{site.productNameTM}} is a named value that a user supplies, or that a report reuses internally, when the report renders in the Report Viewer. You can create parameters manually, with a fixed set of prompts and default values. You can also derive them from a dataset query so their available values come directly from your data. Beyond filtering, a parameter's value can appear inside expressions elsewhere in the report, so a single input drives multiple parts of the report's behavior.

### What can I do with report parameters?

With {{site.productNameTM}} report parameters, you can:

* Create parameters manually or generate them automatically from a dataset query.
* Filter or limit a dataset using parameter values supplied at run time.
* Reference a parameter's value inside expressions to control report data.
* Chain parameters together using cascading parameters, so one selection limits the choices for the next.

## What are dataset query parameters?

Dataset query parameters in {{site.productNameTM}} let you create an embedded or a shared dataset with a parameter to filter or limit data. A dataset can contain user-defined parameters for internal calculations or a report parameter to get run-time inputs from users.

## What is a cascading parameter?

A cascading parameter in {{site.productNameTM}} lets one parameter limit the values for the next parameter. You can add cascading parameters to the report. They greatly reduce the number of choices to a manageable number.

## Key features

{{site.productNameTM}} report parameters offer these key features:

* **Manual or data-driven parameters**: Define a parameter manually with fixed prompts and defaults, or derive it from a dataset query so its choices reflect current data.
* **Dataset-level filtering**: Use a parameter to filter or limit the rows a dataset returns, based on the value a user supplies at run time.
* **Expression-driven behavior**: Reference a parameter's value inside report expressions, so a single input can control data, formatting, or visibility elsewhere in the report.
* **Cascading parameter chains**: Link parameters so that selecting a value in one narrows the available choices in the next, reducing a long list to a manageable set.

## What are common use cases for report parameters?

Report authors use {{site.productNameTM}} report parameters for these common cases:

* **Filtering a report by date range or category**: Let a report reader narrow the data shown by choosing a date range, region, or category before the report renders.
* **Letting users choose a report's scope at run time**: Prompt for a value, such as a department or product line, so the same report can serve multiple audiences.
* **Narrowing a long list with country, state, and city parameters**: Chain parameters together so picking a country first limits the state choices, and picking a state limits the city choices.
* **Reusing a parameter value across a report**: Reference the same parameter value in multiple expressions, so one input consistently drives several parts of a report.

## Who should use this guide?

This {{site.productNameTM}} report parameters guide is for:

* Report authors adding interactive filters to reports.
* Developers configuring parameters driven by dataset queries.
* Business users who need to understand how parameter prompts affect report output.

## What do I need before I start?

Before you add report parameters in {{site.productNameTM}}, you need:

* A report with at least one embedded or shared dataset to base parameters on, if you plan to use dataset query parameters.
* A clear idea of which values you want the report to filter or vary by.

## What are the considerations and limitations?

Keep these {{site.productNameTM}} report parameter considerations in mind:

* Parameters based on a dataset query draw their available values directly from that dataset, so changes to the underlying query can change the available parameter choices.
* Cascading parameters depend on the order in which they're defined; reordering parameters can change which values are available to a dependent parameter.
* A parameter used only for internal calculations doesn't need to prompt the user, but it's still defined the same way as a user-facing parameter.

## Frequently asked questions

### Can a report parameter be based on a dataset query?

Yes. A {{site.productNameTM}} dataset can contain parameters whose values come from the query results, in addition to parameters used purely for internal calculations.

### What's the benefit of cascading parameters?

Cascading parameters let one selection limit the values available to the next parameter, reducing a long list of choices to a manageable number.

### Can I use a parameter's value outside of filtering?

Yes. You can reference a parameter's value inside expressions elsewhere in the report to control report data.

### Where do I go to add, edit, or reorder parameters?

The related articles in the See also section cover adding, editing, deleting, and reordering report parameters, and creating cascading or multi-value parameters.

## How do I get help with report parameters?

If a {{site.productNameTM}} report parameter isn't filtering data as expected, check that it's bound to the correct dataset field. You can also read the related articles below for detailed steps on each parameter type.

## See also

* [Add report parameter](./../report-parameters/add/) for the steps to create a new manual or dataset-driven parameter.
* [Edit report parameter](./../report-parameters/edit/) to change an existing parameter's prompt, default value, or data type.
* [Delete report parameter](./../report-parameters/delete/) to remove a parameter that's no longer needed.
* [Reordering parameters](./../report-parameters/reorder-parameters/) to change the order parameters prompt in, which matters for cascading parameters.
* [Cascading parameter](./../report-parameters/create-cascading-parameter/) for the detailed steps behind the cascading example in this page.
* [Multi-value parameter](./../report-parameters/create-multi-value-parameter/) to let a reader select more than one value for a single parameter.
