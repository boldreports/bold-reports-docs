---
title: Create a Document Map | Report Designer | Bold Reports
description: Learn how to configure a document map to provide a set of navigational links to report items in a rendered report with Bold Report Designer
---

# Document Map

A document map is a navigational feature that displays a separate side pane with set of navigational links in hierarchical structure when you view a report. A user can click the content in the list, to navigate to the report page that displays that item.

![Document Map](/static/assets/on-premise/images/report-designer/compose-report/document-map/preview.png)

To add links to the document map, configure the `DocumentMap` property under `Miscellaneous` category of the report item properties. You can also set the document map property for a table or matrix group.

![Document Map property](/static/assets/on-premise/images/report-designer/compose-report/document-map/document-map.png '#width=350px')

You can configure a static text or an expression which evaluates to the text that you want to display as a value for document map property.

![Static text or expression](/static/assets/on-premise/images/report-designer/compose-report/document-map/expression.png '#width=350px')

## Configure Document Map

For example, the below report design has a tablix report item with three parent groups.

![Tablix report](/static/assets/on-premise/images/report-designer/compose-report/document-map/sample-design.png '#width=400px')

The report preview looks like below,

![Tablix report](/static/assets/on-premise/images/report-designer/compose-report/document-map/report-preview.png '#width=400px')

Follow the below steps to list the category, subcategory and model in document map hierarchical structure. On clicking which the user can be directly taken to the clicked category or subcategory or model in preview. To achieve this, select the tablix and open grouping panel.

![Select tablix](/static/assets/on-premise/images/report-designer/compose-report/document-map/select-tablix.png '#width=400px')

Click on the `Category` group to show respective group properties.

![Select a group](/static/assets/on-premise/images/report-designer/compose-report/document-map/select-group.png)

Under `Miscellaneous` category, assign the `=Fields!Category.Value` as expression in `Document Map` property.

![Assign expression](/static/assets/on-premise/images/report-designer/compose-report/document-map/assign-expression.png '#width=350px')

Similarly, assign `=Fields!Subcategory.Value` and `=Fields!Model.Value` as value for SubCategory and Model groups respectively.

When we preview the report we can see the Product Category Label under the Document Map as shown in image, we can navigate through the tablix using this content list.

![Document Map Preview](/static/assets/on-premise/images/report-designer/compose-report/document-map/document-map-preview.png)

In this way we can create document Map to navigate through the report.

Click the `Show/Hide` Document Map button on the report viewer toolbar to toggle the display.

![Show or hide document](/static/assets/on-premise/images/report-designer/compose-report/document-map/toggle-document-map.png '#width=400px')

## Rendering Behaviour

The document map is expected for use in the Report Viewer. The document map rendering behaviour varies for each rendering formats and few rendering formats do not support document maps.

* In Excel export, document maps are exported as a hierarchy of links in a named worksheets. Other sections of the report are exported as a separate worksheets in the same workbook. Each worksheets are linked with the document map.

* In Word export, document maps are exported as the table of contents.

* In PDF export, the document maps are expressed through PDF bookmarks.

* Power point, XML, and CSV export format ignores the document map settings.

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/compose-report/document-map.rdl).