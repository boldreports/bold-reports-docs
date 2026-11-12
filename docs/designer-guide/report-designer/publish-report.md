---
title: Publish RDL Reports from Web Report Designer | {{site.productName}}
description: Publish an RDL report from the {{site.productName}} Web Report Designer to a category or subcategory on the on-premises Report Server, and download the report.
---

# Publish a report from {{site.productNameTM}} Web Report Designer

You publish a report from the {{site.productNameTM}} Web Report Designer by clicking **Publish** and choosing a destination category on the on-premises Report Server.

## How do I publish a report to an on-premises enterprise server?

You publish a report to the {{site.productNameTM}} on-premises Report Server from the **Publish** dialog of the Web Report Designer.

1. Click the **Publish** button in the top-right corner of the Web Report Designer, or open the **Publish** dropdown and select **Publish As**.
   ![Publish menu in web designer](/static/images/report-designer/save-report/save-menu.png '#width=350px')
2. In the Publish dialog, click the **Browse** icon in the File Location box to choose the destination category.
   ![Browse icon](/static/images/report-designer/save-report/file-chooser.png)
3. In the Browse dialog, select an existing [category](#publish-a-report-to-a-category) or [subcategory](#publish-a-report-to-a-subcategory) to organize the report.
   ![Browse dialog](/static/images/report-designer/save-report/parent-category-publish-action.png)
4. Optionally, publish the report to a [new category](#create-a-new-category) or [subcategory](#create-a-new-subcategory) from the Browse dialog.
   ![Create category](/static/images/report-designer/save-report/new-parent-category.png)

### Publish a report to a category

You publish a report to a Report Server category by selecting the category in the Browse dialog.

1. In the Browse dialog, **single-click** the category where you want to publish the report, and then click **Select**.
   ![Browse dialog select](/static/images/report-designer/save-report/parent-category-publish-action.png)
2. Check the File Location box in the Publish dialog, which shows the selected path.
   ![Update path](/static/images/report-designer/save-report/parent-path.png)
3. Click Publish to save the report to the selected category.

### Publish a report to a subcategory

You publish a report to a Report Server subcategory by expanding its parent category in the Browse dialog.

1. In the Browse dialog, **double-click** the parent category to expand it.
   ![Browse dialog expand](/static/images/report-designer/save-report/parent-category-publish-action.png)
2. Review the subcategories of the selected category, which are now displayed.
   ![Browse dialog open](/static/images/report-designer/save-report/sub-category.png)
3. Choose the required subcategory and click **Select**.
   ![Subcategory select](/static/images/report-designer/save-report/sub-category-selection.png)
4. Check the Publish dialog, which shows the selected subcategory path.
   ![Update path](/static/images/report-designer/save-report/sub-category-path.png)
5. Click Publish to save the report to the selected subcategory.

### What happens if a report with the same name exists?

If a report with the same name already exists at the target location, the Web Report Designer shows a confirmation message asking whether to replace it.
![Replace report alert](/static/images/report-designer/save-report/replace-existing-report-alert.png)

Click `Yes` to replace the existing report, or click `No` to change the report name in the **Name** field.

> If you are editing a report stored on the server, clicking `Publish` replaces the existing report.

## Create categories from the Publish dialog

The Browse dialog of the {{site.productNameTM}} Web Report Designer lets you create categories or subcategories directly while you publish a report.

### Create a new category

You create a new Report Server category with the **New Category** option in the Browse dialog.

1. In the Browse dialog, click **New Category** to open the New Category dialog.
   ![New parent category](/static/images/report-designer/save-report/new-parent-category.png)
2. Enter the required details and click **Save**.
   ![Parent category dialog](/static/images/report-designer/save-report/parent-category-creation.png)
3. Check the Browse dialog. The category list refreshes and the new category appears.
   ![Parent category success](/static/images/report-designer/save-report/parent-category-creation-success.png)

### Create a new subcategory

You create a new Report Server subcategory by expanding a parent category and using the **New Category** option.

1. In the Browse dialog, **double-click** the parent category to expand it.
   ![Double-click to expand](/static/images/report-designer/save-report/double-click.png)
2. Click **New Category** to open the New Category dialog.
   ![Subcategory dialog](/static/images/report-designer/save-report/sub-category-creation.png)
3. Enter the required details and click **Save**.
   ![Subcategory dialog](/static/images/report-designer/save-report/sub-category-dialog.png)
4. Check the Browse dialog. The subcategory list refreshes and the new subcategory appears.
   ![Subcategory success](/static/images/report-designer/save-report/sub-category-creation-success.png)

> {{site.productNameTM}} supports up to three levels of subcategories.

## How do I refresh the category list?

The Refresh button in the {{site.productNameTM}} Browse dialog reloads the category list from the server.
![Refresh](/static/images/report-designer/save-report/refresh.png)

## How do I search for a category?

The Search box in the {{site.productNameTM}} Browse dialog finds a specific category when you type a keyword. The list is filtered instantly to help you locate the category.
![Search](/static/images/report-designer/save-report/search.png)

## How do I download the report?

You download a published report from the {{site.productNameTM}} on-premises server home page. Click `Actions` in the report's grid context menu and select `Download Report` to download the report in `.rdl` format.

![Download report](/static/images/report-designer/save-report/download-report.png)

## Frequently asked questions

### How many subcategory levels can I create?

{{site.productNameTM}} supports up to three levels of subcategories.

### What happens when I publish a report I opened from the server?

If you are editing a report stored on the server, clicking `Publish` replaces the existing report.

## See also

* [Open a report](./../open-report/)
* [Preview a report](./../preview-report/)
* [Design an RDL report in the Web Report Designer](./../design-rdl-report-in-web-report-designer/)
