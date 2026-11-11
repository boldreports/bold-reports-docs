---
title: Add Bookmarks to Reports in the Designer | {{site.productName}}
description: Add bookmarks in {{site.productName}} Web Report Designer to build internal navigation links or a custom table of contents in SSRS RDL reports, with a worked example.
---

# Add bookmarks in {{site.productNameTM}} Web Report Designer

Bookmark links in {{site.productNameTM}} Web Report Designer let users navigate to different parts of an RDL report. You can add bookmarks to each textbox, image, table or chart, or to the unique group values displayed in a tablix, to direct users to specified locations in the report. The value of the bookmark property can be your own strings or an expression.

Prefer watching over reading? Watch the video on designing an interactive bookmark report:

`youtube: https://www.youtube.com/watch?v=sAuj7xgPfRk`

## How do I configure a bookmark?

You configure a bookmark in Web Report Designer by entering a string or expression in the `Bookmark` property of a report item.

1. Select the text box, image, table, chart, or other report item to which you want to add a bookmark. The respective report item properties are listed in the `Properties` pane.
2. Under the `Miscellaneous` category, enter a string or expression in the `Bookmark` text field. The value acts as the label for this bookmark.
    ![Configure Bookmark](/static/assets/on-premise/images/report-designer/compose-report/book-mark/configure-bookmark.png '#width=350px')

To open the set or reset expression menu in the properties panel, see the [Set Expressions](./../../compose-report/properties-panel/#set-expression) and [Reset Expressions](./../../compose-report/properties-panel/#reset-expression) sections.

![Set Expression](/static/assets/on-premise/images/report-designer/compose-report/book-mark/set-expression.png '#width=300px')

> Note: The bookmark can be any string, but it must be unique in the report. If the bookmark is not unique, a link to the bookmark finds the first matching bookmark.

## How do I link to a bookmark?

You link to a bookmark in Web Report Designer by choosing the `Bookmark` option under the `Link` category of a report item.

1. Select the text box, image, or chart series to which you want to link a bookmark. The respective item properties are listed in the `Properties` pane.
2. Under the `Link` category, choose the `Bookmark` option. An option to link the bookmark is enabled.
    ![Choose Bookmark](/static/assets/on-premise/images/report-designer/compose-report/book-mark/choose-bookmark-option.png '#width=350px')
3. In the bookmark dropdown, type or select a bookmark, or set an expression that evaluates to a bookmark.
    ![Choose value](/static/assets/on-premise/images/report-designer/compose-report/book-mark/choose-value.png '#width=300px')

## How do I design a bookmark report?

The following Web Report Designer example shows how to use the bookmark feature to design an interactive report.

### Create data

The bookmark example uses the following dataset query for dataset creation:

```sql
SELECT [HumanResources].[vEmployee].[EmployeeID],
[HumanResources].[vEmployee].[FirstName],
[HumanResources].[vEmployee].[LastName],
[HumanResources].[vEmployee].[EmailAddress],
[HumanResources].[vEmployee].[City],
[HumanResources].[vEmployee].[CountryRegionName]
FROM [HumanResources].[vEmployee]
```

> To create the dataset with the above query, see the [Create Data](./../../manage-data/dataset/create-an-embedded-dataset/) section. The `AdventuresWorks` database is used here.

### Add bookmark

The bookmark design shows how to configure and link bookmarks in report items. At runtime, clicking an item navigates to the first matching bookmark.

1. Add a textbox to the report and enter the text as `Home Page`. Apply some formatting.
   ![Add textbox](/static/assets/on-premise/images/report-designer/compose-report/book-mark/add-textbox.png)

2. Open the textbox properties. Under the `Miscellaneous` category, enter the `Bookmark` property value as `HomePage`.
   ![Add textbox](/static/assets/on-premise/images/report-designer/compose-report/book-mark/create-label-for-textbox.png '#width=350px')

3. Add a matrix report item and remove the first column.
   ![Add matrix cell](/static/assets/on-premise/images/report-designer/compose-report/book-mark/matrix-cell.png '#width=300px')

4. Assign the `CountryRegionName` field in the first cell.
   ![Add matrix cell](/static/assets/on-premise/images/report-designer/compose-report/book-mark/assign-data-field.png '#width=300px')

5. Select that cell and open the properties panel. Under the `Link` category, choose the `Bookmark` option.

    ![Choose bookmark](/static/assets/on-premise/images/report-designer/compose-report/book-mark/choose-bookmark.png '#width=350px')

6. Set the `=Fields!CountryRegionName.Value` expression in the `Bookmark` field.

    ![Link bookmark in matrix cell](/static/assets/on-premise/images/report-designer/compose-report/book-mark/matrix-expression.png '#width=400px')

7. Add a rectangle and set the `Page Break` as `Start`.

    ![Link bookmark in matrix cell](/static/assets/on-premise/images/report-designer/compose-report/book-mark/page-break-start.png)

8. Insert a table report item. To add a table, see the [Add table](./../../report-items/tablix/design-ssrs-rdl-report-using-table/#add-a-table-to-the-report) section.

    ![Add table](/static/assets/on-premise/images/report-designer/compose-report/book-mark/add-table.png)

9. [Assign dataset fields](./../../report-items/tablix/assign-data-to-tablix-data-region/#assign-dataset-from-properties-panel) and apply formatting as shown in the following image.

    ![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/table-design.png)

10. Open the `CountryRegionName` [group properties](./../../report-items/tablix/grouping-panel/#group-member-properties) and set the page break as `End`.

    ![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/group-page-break.png '#width=350px')

11. Select the `CountryRegionName` group cell and open the properties panel. Under the `Miscellaneous` category, enter the `Bookmark` property value as `=Fields!CountryRegionName.Value`.

    ![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/configure-bookmark-table.png)

12. [Add a column](./../../report-items/tablix/insert-or-delete-a-column-ssrs/#insert-a-column) in the table report item.

    ![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/add-column.png '#width=350px')

    The next steps add an image in a table cell and configure a bookmark for it. Clicking the image navigates to the first page of the report.

13. [Insert an image](./../../report-items/tablix/cell-properties/#insert-item-using-cell-menu) in the first cell of the column.

    ![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/add-image.png '#width=300px')

14. Select the image and open the properties panel. Under the `Link` category, choose the `Bookmark` option.

    ![Choose bookmark](/static/assets/on-premise/images/report-designer/compose-report/book-mark/choose-bookmark.png '#width=350px')

15. Choose the `HomePage` bookmark label in the `Bookmark` option.

    ![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/configure-bookmark-for-image.png '#width=350px')

16. Set the border as `None` for the first column cell.

    ![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/set-border.png '#width=400px')

17. To [repeat header row](./../../report-items/tablix/repeat-headers-on-each-page-in-ssrs/) for each group, enable `Report on New Page` and set `Keep With Group` as `After` for the first static field.

    ![Table design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/repeat-header.png '#width=400px')

## Preview

The Web Report Designer preview shows the bookmark navigation at work. On report preview, the first page of the report looks like the following image.

![Preview First Page](/static/assets/on-premise/images/report-designer/compose-report/book-mark/first-page-preview.png)

Clicking a country name displays the respective group.

![Select group](/static/assets/on-premise/images/report-designer/compose-report/book-mark/select-group.png)

![Preview design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/group-details.png)

Clicking the image navigates to the main page of the report.

![Preview design](/static/assets/on-premise/images/report-designer/compose-report/book-mark/click-image.png '#width=300px')

![Preview First Page](/static/assets/on-premise/images/report-designer/compose-report/book-mark/first-page-preview.png)

> Download the above report design from the [bookmark sample report on GitHub](https://github.com/boldreports/resources/tree/master/docs/report-designer/compose-report/bookmark.rdl)

## Frequently asked questions

### Does a bookmark need to be unique?

Yes. The bookmark can be any string, but it must be unique in the report. If it is not unique, a link to the bookmark finds the first matching bookmark.

### Which report items can link to a bookmark?

In Web Report Designer, you can link a bookmark from a text box, image, or chart series by choosing the `Bookmark` option under the `Link` category.

## See also

* [Document map](./../document-map/)
* [Link data](./../link-data/)
* [Properties panel](./../properties-panel/)
