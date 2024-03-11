---
title: Add group Header and Footer in tablix data region
description: This section describes the steps to Add group Header and Footer in tablix data region with Bold Report Designer.
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
---

# Add Group Header and Footer

1. Drag and drop `Table` report item from item panel into the design area and assign dataset to the tablix data region.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/select-tablix-data-region-in-design-area-to-header.png '#width=355px')
2. Click on the table surface to enable the `Grouping Panel` in the design view.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/enable-grouping-panel.png '#width=385px')
3. Go to `Row Groups` pane in grouping panel and open the context menu on the `Details` group field.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/open-context-menu-in-details-group.png '#width=385px')
4. From the context menu, click on `Parent Group...` option under `Add Group` category.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/click-on-parent-group-option.png '#width=385px')
5. Once you click on the `Parent Group` option, a `Tablix Group` dialog will be opened to configure the grouping.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/tablix-group-dialog.png '#width=385px')

    * **Group By**: Based on the dataset assigned to the tablix region, dataset fields will be listed in this drop-down or else click on the square icon to create an expression.
    * **Add Group Header**: Enable this option to add a header to this group
    * **Add Group Footer**: Enable this option to add a footer to this group
6. Choose dataset field in the `Group by` drop-down list.
7. Select `Add header` to add header row to the group and select `Add footer` to add footer row to the group. Click on the `OK` button.
    * **Add header** - Adds a static row above the group.
    * **Add footer** - Adds a static row below the group.

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/enable-header-and-footer-in-group-dialog.png '#width=385px')

Now, a static row will be added above and below of the group in the tablix data region.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/header-and-footer-output.png '#width=355px')

On report preview, the header and footer will be added for each group as shown below.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/header-and-footer-preview.png '#width=425px')

## Format header and footer

You can display data, label content or total in the group header and footer of the tablix data region.

### Merge header cells

1. Select the header cells and right-click in the cell. Then, click on `Merge Cells` option.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/merge-header-cells.png '#width=385px')
2. Now, set data or label content and format the header cell as required.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/merge-header-cells-output.png '#width=385px')

### Merge footer cells

1. Select the first two footer cells and right-click in the cell. Then, click on `Merge Cells` option.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/merge-footer-cell.png '#width=385px')
2. Now, set data or label content and format the footer cell as required.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/merge-footer-cell-output.png '#width=385px')

### Edit footer cell content

1. Edit the footer cell which is merged in the previous step and set the expression `= "Total yearly sales of " & Fields!ProdCat.Value` using expression builder and set the font weight property as `Bold` in the properties panel.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/set-expression-in-footer.png '#width=385px')
2. Set `=Sum(Fields!Sales.Value)` expression in the last cell, to calculate summary of sales field and set the font weight property as `Bold` in the properties panel.
   ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/assign-summary-field.png '#width=385px')

### Edit header cell content

Edit the header cell and set the `= "Sales Report of " & Fields!ProdCat.Value & " Category"` expression using expression builder and set the font weight property as `Bold` in the properties panel.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/set-expression-in-header.png '#width=385px')

### Report preview

On report preview, the header and footer will be added for each group as shown below.

![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix-add-header-and-footer/header-and-footer-with-value.png '#width=425px')

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/add-group-header-and-footer-in-tablix-data-region.rdl).