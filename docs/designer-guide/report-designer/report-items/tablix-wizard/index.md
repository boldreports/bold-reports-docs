---
title: Build Tables and Matrices with Tablix Wizard | {{site.productName}}
description: Use the tablix wizard in {{site.productName}} Web Report Designer to build table and matrix data regions, define row and column groups, and search or select fields.
---

# Tablix Wizard in {{site.productNameTM}} Web Report Designer

The tablix wizard in the {{site.productNameTM}} Web Report Designer helps you design reports that display data in a tabular or matrix format. It provides options to define row and column groups for organizing data hierarchically.

## How do I use the tablix wizard?

You use the {{site.productNameTM}} tablix wizard by dropping it into the design area, choosing a dataset, and dragging fields into its sections.

1. Find the tablix wizard in the item panel under the `Data Regions` category.
   ![Tablix Wizard listed in item panel](/static/images/report-designer/report-items/tablix-wizard/item-panel-view.png '#width=195px')

2. Drag and drop the tablix wizard report item into the design area from the item panel.
   ![Drag and drop tablix report item into design area](/static/images/report-designer/report-items/tablix-wizard/drag-and-drop.png '#width=385px')

3. Review the Tablix Wizard, which is rendered with the following sections:
   ![Drag and drop tablix wizard into design area](/static/images/report-designer/report-items/tablix-wizard/initial-tablix-wizard.png '#width=485px')
      * `Data` - The available dataset in the report is listed in the Dataset drop-down.

      * `Fields` - This list box displays the fields available from the dataset selected in the drop-down list.

      * `Values` -  You can drag and drop fields into the `Values` section to specify which data to analyze or summarize in the Tablix view.

      * `Columns` - You can add fields to the `Columns` section to display data in a hierarchical column view in the Tablix design.

      * `Rows` - You can add fields to the `Rows` section to display data in a hierarchical row view in the Tablix design.

4. Drag and drop the required fields into the `Values` section to create a flat table design.
   ![Drag and drop fields into values](/static/images/report-designer/report-items/tablix-wizard/tablix-flat-design.png '#width=485px')

5. Click the `OK` button. The table design renders on the design surface.
   ![Table simple design](/static/images/report-designer/report-items/tablix-wizard/rendered-table.png '#width=700px')

## How do I manage fields in the tablix wizard?

The {{site.productNameTM}} tablix wizard lets you search fields, select several fields at once, and clear all fields from a section.

### How do I search for a field?

The **Fields** pane in the tablix wizard provides a search capability that helps you locate fields within the selected dataset. As you enter text in the search box, the field list is dynamically filtered to display matching results.
   ![Search field](/static/images/report-designer/report-items/tablix-wizard/field-search.png '#width=300px')

### How do I select multiple fields?

The Tablix Wizard supports selecting multiple fields simultaneously, enabling efficient assignment of fields to the values, rows and columns sections. By default, fields can be selected individually. To enable multi-select mode:

1. Click **Select** in the **Fields** pane.
   ![Select](/static/images/report-designer/report-items/tablix-wizard/select.png '#width=300px')
2. Check that the **Select All** checkbox becomes available, allowing multiple fields to be selected.
   ![Select all](/static/images/report-designer/report-items/tablix-wizard/Select-all.png '#width=300px')
3. Select the required fields using their corresponding checkboxes.
4. To select all available fields, select the **Select All** checkbox.
5. Drag the selected fields to the required section: Values, Columns or Rows.
   ![Multi Select](/static/images/report-designer/report-items/tablix-wizard/multi-select-field.png '#width=485px')

### How do I clear all fields from a section?

The **Values**, **Columns**, and **Rows** sections of the tablix wizard provide a **Clear** option to remove all assigned fields from a section.

**To clear fields from a section:**

1. Click **Clear** in the required section.
   ![Clear button](/static/images/report-designer/report-items/tablix-wizard/clear-button.png '#width=300px')
2. In the confirmation dialog, click **Yes** to remove all fields from the selected section.
3. Click **No** to retain the existing field assignments and close the dialog.
   ![Clear dilaog](/static/images/report-designer/report-items/tablix-wizard/clear-dialog.png '#width=435px')

----

## What happens if the report has no datasets?

If the report has no datasets, the {{site.productNameTM}} Tablix Wizard interface displays the message shown in the following image.
![Tabli Wizard No data](/static/images/report-designer/report-items/tablix-wizard/tablix-nodata-msg.png '#width=500px')

## Frequently asked questions

### Can the tablix wizard create a flat table?

Yes. Drag and drop the required fields into the `Values` section only, then click `OK` to render a flat table design.

### Can I undo a Clear action?

The confirmation dialog lets you click **No** to retain the existing field assignments and close the dialog.

## See also

* [Design an SSRS matrix report using the tablix wizard](./../../report-items/tablix-wizard/design-report-using-the-tablix-wizard/)
* [Tablix cell properties](./../../report-items/tablix/cell-properties/)
