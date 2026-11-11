---
title: Add Group Header and Footer in a Tablix | {{site.productName}}
description: Add a group header and footer to a tablix data region in {{site.productName}} Web Report Designer with the grouping panel, then merge and edit header and footer cells.
keywords: ejReportDesigner, reportdesigner, table, reportitem, {{site.productName}}, documentation, help, ej, user guide, demo, samples, {{site.productName}}, bold reporting
---

# Add a group header and footer to a tablix in {{site.productNameTM}}

You add a group header and footer to a tablix data region in the {{site.productNameTM}} Web Report Designer from the `Row Groups` pane of the grouping panel. The header adds a static row above each group and the footer adds a static row below it.

## How do I add a group header and footer?

You add a header and footer in the Web Report Designer by creating a parent group with the **Add Group Header** and **Add Group Footer** options enabled.

1. Drag and drop the `Table` report item from the item panel into the design area and assign a dataset to the tablix data region.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/select-tablix-data-region-in-design-area-to-header.png '#width=355px')
2. Click the table surface to enable the `Grouping Panel` in the design view.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/enable-grouping-panel.png '#width=385px')
3. Go to the `Row Groups` pane in the grouping panel and open the context menu on the `Details` group field.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/open-context-menu-in-details-group.png '#width=385px')
4. From the context menu, click the `Parent Group...` option under the `Add Group` category.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/click-on-parent-group-option.png '#width=385px')
5. Configure the grouping in the `Tablix Group` dialog that opens after you click the `Parent Group` option.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/tablix-group-dialog.png '#width=385px')

    * **Group By**: Lists the dataset fields based on the dataset assigned to the tablix region. You can also click the square icon to create an expression.
    * **Add Group Header**: Enable this option to add a header to this group.
    * **Add Group Footer**: Enable this option to add a footer to this group.
6. Choose a dataset field in the `Group by` drop-down list.
7. Select `Add header` to add a header row to the group and select `Add footer` to add a footer row to the group. Click the `OK` button.
    * **Add header** - Adds a static row above the group.
    * **Add footer** - Adds a static row below the group.

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/enable-header-and-footer-in-group-dialog.png '#width=385px')

A static row is now added above and below the group in the tablix data region.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/header-and-footer-output.png '#width=355px')

On report preview, the header and footer are added for each group.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/header-and-footer-preview.png '#width=425px')

## How do I format the header and footer?

You can display data, label content or a total in the group header and footer of a tablix data region in the {{site.productNameTM}} Web Report Designer. The steps below merge cells and set expressions.

### How do I merge header cells?

You merge header cells in the Web Report Designer from the cell context menu.

1. Select the header cells and right-click in the cell. Then, click the `Merge Cells` option.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/merge-header-cells.png '#width=385px')
2. Set data or label content and format the header cell as required.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/merge-header-cells-output.png '#width=385px')

### How do I merge footer cells?

You merge footer cells in the Web Report Designer from the cell context menu.

1. Select the first two footer cells and right-click in the cell. Then, click the `Merge Cells` option.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/merge-footer-cell.png '#width=385px')
2. Set data or label content and format the footer cell as required.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/merge-footer-cell-output.png '#width=385px')

### How do I edit the footer cell content?

You edit footer cells in the Web Report Designer by setting expressions in the expression builder.

1. Edit the footer cell merged in the previous step and set the expression `= "Total yearly sales of " & Fields!ProdCat.Value` using the expression builder. Set the font weight property as `Bold` in the properties panel.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/set-expression-in-footer.png '#width=385px')
2. Set the `=Sum(Fields!Sales.Value)` expression in the last cell to calculate the summary of the sales field, and set the font weight property as `Bold` in the properties panel.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/assign-summary-field.png '#width=385px')

### How do I edit the header cell content?

You edit the header cell in the Web Report Designer by setting the `= "Sales Report of " & Fields!ProdCat.Value & " Category"` expression using the expression builder. Then, set the font weight property as `Bold` in the properties panel.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/set-expression-in-header.png '#width=385px')

### What does the report preview show?

The {{site.productNameTM}} report preview adds the header and footer for each group.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/header-and-footer-with-value.png '#width=425px')

> Download the [group header and footer report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/add-group-header-and-footer-in-tablix-data-region.rdl).

## Frequently asked questions

### Where does the group header row appear?

The **Add header** option adds a static row above the group, and the **Add footer** option adds a static row below the group.

### What can I show in the group header and footer?

You can display data, label content or a total in the group header and footer of the tablix data region.

## See also

* [Grouping panel in a tablix](./../../../report-items/tablix/grouping-panel/)
* [Add grouping and totals in a tablix](./../../../report-items/tablix/add-grouping-and-totals-in-tablix-design/)
* [Merge cells in a tablix data region](./../../../report-items/tablix/merge-cells-in-tablix-data-region/)
