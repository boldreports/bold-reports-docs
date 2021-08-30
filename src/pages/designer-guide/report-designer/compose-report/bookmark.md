---
title: Bookmark SSRS | Web Report Designer | Bold Reports
description: Learn how to add bookmarks to a report to provide a customized internal navigation links or to provide customized table of contents in Bold Reports Designer.
---

# Bookmark

Bookmark links allows the users to navigate to different parts of the RDL report. You can add bookmarks to each textbox, image, table or chart or to the unique group values displayed in a tablix which can direct the users to specified locations in the report. The value of bookmark property can be your own strings or an expression.

## Configure bookmark

1. Select the text box, image, table, chart, or other report item to which you want to add a bookmark. The respective report item properties will be listed in the `Properties` pane.
2. Under `Miscellaneous` category, enter a string or expression in `Bookmark` text field. It will act as the label for this bookmark.
![Configure Bookmark](/static/assets/on-premise/images/report-designer/compose-report/book-mark/configure-bookmark.png)

Refer [Set Expressions](./../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../compose-report/properties-panel/#reset-expression) section to open set/reset expression menu in properties panel.

![Set Expression](/static/assets/on-premise/images/report-designer/compose-report/book-mark/set-expression.png)

> Note: The bookmark can be any string, but it must be unique in the report. If the bookmark is not unique, a link to the bookmark finds the first matching bookmark.

## Link bookmark

1. Select the text box, image, or chart series to which you want to link a bookmark. The respective item properties will be listed in the `Properties` pane.
2. Under `Link` category, choose `Bookmark` option. An option to link the bookmark will be enabled.
![Choose Bookmark](/static/assets/on-premise/images/report-designer/compose-report/book-mark/choose-bookmark-option.png)
3. In the bookmark dropdown, type or select a bookmark or set an expression that evaluates to a bookmark.
![Choose value](/static/assets/on-premise/images/report-designer/compose-report/book-mark/choose-value.png)

## Designing bookmark report

The following example will show how to use a bookmark feature to design an interactive report.

### Create data

In this designing section, the following dataset query is used for dataset creation.

```sql
SELECT [HumanResources].[vEmployee].[EmployeeID],
[HumanResources].[vEmployee].[FirstName],
[HumanResources].[vEmployee].[LastName],
[HumanResources].[vEmployee].[EmailAddress],
[HumanResources].[vEmployee].[City],
[HumanResources].[vEmployee].[CountryRegionName]
FROM [HumanResources].[vEmployee]
```

> Refer [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/#create-an-embedded-dataset) section and create dataset using the above query. `AdventuresWorks` database is used here.

### Add bookmark

This design will teach you how to configure and link the book marks in report items. At runtime, clicking on the items will navigate to the first matching bookmarks.

Add a textbox to the report and enter the text as `Home Page`. Apply some formatting.
![Add textbox](/static/assets/on-premise/images/report-designer/compose-report/book-mark/add-textbox.png)

Open the textbox properties. Under `Miscellaneous` category, enter the `Bookmark` property value as `HomePage`.
![Add textbox](/static/assets/on-premise/images/report-designer/compose-report/book-mark/create-label-for-textbox.png)

Add a matrix report item and remove the first column.
![Add matrix cell](/static/assets/on-premise/images/report-designer/compose-report/book-mark/matrix-cell.png)

Assign `CountryRegionName` field in the first cell.
![Add matrix cell](/static/assets/on-premise/images/report-designer/compose-report/book-mark/assign-data-field.png)

Select that cell and open properties panel. Under `Link` category, choose `Bookmark` option.

![Choose bookmark](/static/assets/on-premise/images/report-designer/compose-report/book-mark/choose-bookmark.png)

Set the `=Fields!CountryRegionName.Value` expression in `Bookmark` field.

![Link bookmark in matrix cell](/static/assets/on-premise/images/report-designer/compose-report/book-mark/matrix-expression.png)

Add a rectangle and set the `Page Break` as `Start`.

![Link bookmark in matrix cell](/static/assets/on-premise/images/report-designer/compose-report/book-mark/page-break-start.png)

Then insert a table report item. Refer [Add table](./../../report-items/tablix/design-ssrs-rdl-report-using-table/#add-a-table-to-the-report) section to add table.

![Add table](/static/assets/on-premise/images/report-designer/compose-report/book-mark/add-table.png)

[Assign dataset fields](./../../report-items/tablix/assign-data-to-tablix-data-region/#assign-data-from-properties-panel) and apply formatting as shown in below image.

![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/table-design.png)

Open `CountryRegionName` [group properties](./../../report-items/tablix/grouping-panel/#group-member-properties) and set the page break as `End`.

![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/group-page-break.png)

Select the `CountryRegionName` group cell and open properties panel. Under `Miscellaneous` category, enter the `Bookmark` property value as `=Fields!CountryRegionName.Value`.

![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/configure-bookmark-table.png)

[Add a column](./../../report-items/tablix/insert-or-delete-a-column-ssrs/#insert-a-column) in table report item.

![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/add-column.png)

Now, we are going to add an image in table cell and configure book mark to it. When clicking on the image, it will navigate to the first page of the report.

[Insert an image](./../../report-items/tablix/cell-properties/#insert-item-using-cell-menu) in first cell of the column.

![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/add-image.png)

Select the image and open properties panel. Under `Link` category, choose `Bookmark` option.

![Choose bookmark](/static/assets/on-premise/images/report-designer/compose-report/book-mark/choose-bookmark.png)

Choose the `HomePage` bookmark label in `Bookmark` option.

![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/configure-bookmark-for-image.png)

Set the border as `None` for the first column cell.

![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/set-border.png)

To [repeat header row](./../../report-items/tablix/repeat-headers-on-each-page-in-ssrs/) for each group, enable `Report on New Page` and set `Keep With Group` as `After` for first static field.

![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/repeat-header.png)

## Preview

On report preview, first page of the report looks like below,

![Preview First Page](/static/assets/on-premise/images/report-designer/compose-report/book-mark/first-page-preview.png)

Clicking on a country name will display respective group.

![Select group](/static/assets/on-premise/images/report-designer/compose-report/book-mark/select-group.png)

![Preview design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/group-details.png)

Clicking on the image will navigate to the main page of the report.

![Preview design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/click-image.png)

![Preview First Page](/static/assets/on-premise/images/report-designer/compose-report/book-mark/first-page-preview.png)

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/compose-report/bookmark.rdl)