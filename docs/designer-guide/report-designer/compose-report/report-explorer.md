---
title: Navigate RDL Report Items in Report Explorer | Bold Reports
description: Use Report Explorer in Bold Reports Web Report Designer to browse the RDL report structure as a tree, then search, select, edit, and delete report items.
---

# Report Explorer in Bold Reports<sup>®</sup> Web Report Designer

The **Report Explorer** panel in Bold Reports<sup>®</sup> Web Report Designer shows the report layout in a hierarchical format, so you can move easily between report items. With built-in search, selection indicators, and action options, you can manage and remove report items efficiently.

![Report Explorer panel showing hierarchical report structure](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-explorer-user-interface.png '#width=400px')

Prefer watching over reading? Watch this video for Report Explorer:

`youtube: https://www.youtube.com/watch?v=qV2RjXHPDW8`

## How do I open Report Explorer?

You open the **Report Explorer** in Web Report Designer by clicking the `Report Explorer` icon in the `Data Configuration` panel.
![Report Explorer icon in Data Configuration panel](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-explorer-icon.png '#width=350px')

To close the Report Explorer panel, click the Report Explorer icon again.

## What are the key features of Report Explorer?

Report Explorer in Web Report Designer offers a persistent panel, a hierarchical display, dynamic updates, search, and edit and delete actions for report items.

### Persistent Panel

The Report Explorer panel in Web Report Designer stays open until you close it, so your workflow is not interrupted.
![Docked Report Explorer panel with persistent view](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-explorer-dock-panel.png '#width=600px')

### Hierarchical Display

Report Explorer in Web Report Designer displays a tree view of a report's RDL structure. It organizes elements under sections like Report, Header, Body, and Footer for easy navigation.
![Report Explorer hierarchy view showing sections and items](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-explorer-hierarchy-view.png '#width=400px')

Each report element is identified by its name and type. In the image below, the image icon and the label `(Image)` indicate the type of the report item, and `Logo_Image` is its name.
![Report Explorer item type and name indication](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-element-denotion.png '#width=400px')

### Dynamic Updates

The Report Explorer panel in Web Report Designer updates in real time as you modify the report in the design area.

When you add a new report item, it immediately appears in the Report Explorer hierarchy. It shows its position within sections such as Header, Body, or Footer.
In the image below, a Rectangle and a TextBox report item are added. These items are listed under the Body section in the panel.
![Dynamic updates in Report Explorer when adding items](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-element-add.png '#width=600px')

When you remove a report item from the design surface, it is instantly removed from the Report Explorer. The panel always reflects the current structure of the report.
In the image below, the Rectangle report item is deleted from the design surface and is no longer visible in the panel.
![Dynamic updates in Report Explorer when removing items](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-element-remove.png '#width=600px')

Selecting a report item in the design area automatically highlights the matching item in the Report Explorer. A background color indicates the selection, linking the design surface and the panel.
In the image below, the Textbox report item is selected in the design area, so the background highlight is applied to the Textbox node in the panel.
![Report Explorer item selection highlight](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-element-selection.png '#width=600px')

When you select a child item in the design area, the parent node in the hierarchy automatically expands to reveal it. In the image below, the Rectangle item inside the Tablix is selected, so the Tablix node is expanded in the panel.
![Report explorer item child selection](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-element-child-selection.png '#width=600px')

### Search Functionality

The search feature in the Report Explorer panel helps you quickly find specific report elements. When you search for a report item by name, the results appear in a parent-child hierarchy. You can then see the item's exact position within the report structure.
![Report Explorer search results with parent-child hierarchy](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/search-with-match.png '#width=400px')

If no results are found, a `No matches found` message appears in the Report Explorer panel.
![Report explorer search error message](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/search-with-no-match.png '#width=400px')

### Edit Item Properties

The `Edit option` in Report Explorer gives quick access to the properties of the selected report item. You do not need to locate the item on the design surface manually. The Edit icon appears when you hover over an item in the tree view.
![Report Explorer Edit icon on hover](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-explorer-edit-icon.png '#width=400px')

Clicking the Edit icon displays the item properties in the property panel. You can edit them without extra navigation steps.
![Report Explorer Edit icon action](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-explorer-edit-action.png '#width=400px')

### Delete Item

The `Delete option` in Report Explorer removes a report item from the design surface. The delete option does not apply to Report, Header, Body, and Footer. The Delete icon appears when you hover over an item in the tree view.
![Report Explorer Delete icon on hover](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-explorer-delete-icon.png '#width=600px')

Clicking the Delete icon removes the item from both the design surface and the Report Explorer, keeping them synchronized. The panel always reflects the current structure of the report after deletion.
![Report Explorer Delete icon action](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-explorer-delete-action.png '#width=600px')

## Frequently asked questions

### Can I delete the Header or Body from Report Explorer?

No. The delete option does not apply to Report, Header, Body, and Footer.

### Does Report Explorer close when I click the design surface?

No. The Report Explorer panel stays open until you close it by clicking the Report Explorer icon again.

## See also

* [Property navigator](./../../compose-report/property-navigator/)
* [Properties panel](./../../compose-report/properties-panel/)
* [Report item multi-selection](./../../compose-report/report-item-multi-selection/)
