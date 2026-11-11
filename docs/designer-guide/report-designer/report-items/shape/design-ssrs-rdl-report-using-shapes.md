---
title: Design an SSRS RDL Flowchart Using Shapes | Bold Reports
description: Design an SSRS RDL report with Shape report items in Bold Reports Web Report Designer to build a manufacturing workflow flowchart with shapes, arrows, and text.
keywords: ejReportDesigner, reportdesigner, shape, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting, custom item
---

# Design an SSRS RDL report using shapes in Bold Reports<sup>®</sup>

You can design the `Manufacturing Workflow for Tablet PC` report as a flowchart by using shape report items in the Bold Reports<sup>®</sup> Web Report Designer. Follow the steps in each section below.

## How do I add text to a shape?

You add text to a shape in the Bold Reports<sup>®</sup> Web Report Designer by placing a textbox on top of the shape report item. Follow these steps:

1. Drag and drop a shape report item from the item panel to the design area.
   ![Drag and drop shape report item into design area](/static/assets/on-premise/images/report-designer/report-items/shape/circle-shape.png '#width=200px')
2. A circle shape appears initially. Adjust the size of the circle to form an ellipse.
   ![Change the shape type](/static/assets/on-premise/images/report-designer/report-items/shape/ellipse-shape.png '#width=200px').
3. Configure the required properties for the shape report item.
   ![Configure the properties for shape report item](/static/assets/on-premise/images/report-designer/report-items/shape/ellipse-properties.png '#width=350px').
4. Drag and drop the textbox report item from the design panel onto the top of the shape report item.
    ![Drag and drop textbox report item into shape report item](/static/assets/on-premise/images/report-designer/report-items/shape/ellipse-textbox.png '#width=200px')

    > Note: Shape report items are not container elements, meaning they do not contain or nest any other items. Each shape and textbox are considered a separate element in the report design.

5. Resize the textbox as needed, configure the necessary properties, and insert text into the textbox.
   ![Configure the properties for textbox report item](/static/assets/on-premise/images/report-designer/report-items/shape/ellipse-flow.png '#width=200px')

## How do I add an arrow shape to connect shapes?

You connect shapes in the Bold Reports<sup>®</sup> Web Report Designer with a shape report item set to an arrow type. Follow these steps:

1. From the item panel, drag and drop a shape report item below the previous shape.
   ![Drag and drop shape report item into design area](/static/assets/on-premise/images/report-designer/report-items/shape/ellipse-arrow.png '#width=200px')
2. Change the shape type to `Down Arrow`.
   ![Change the shape type](/static/assets/on-premise/images/report-designer/report-items/shape/arrow-shape.png '#width=400px').
3. Adjust the shape report item size as needed, and configure the required properties to modify the arrow shape.
   ![Configure the properties for shape report item](/static/assets/on-premise/images/report-designer/report-items/shape/arrow-flow.png '#width=300px').

## How do I add a rectangle shape for decision points?

You add a decision point in the Bold Reports<sup>®</sup> Web Report Designer with a shape report item set to the `Rectangle` type. Follow these steps:

1. From the item panel, drag and drop a shape report item below the arrow shape.
   ![Drag and drop shape report item into design area](/static/assets/on-premise/images/report-designer/report-items/shape/arrow-rectangle.png '#width=200px')
2. Change the shape type to `Rectangle`.
   ![Change the shape type](/static/assets/on-premise/images/report-designer/report-items/shape/rectangle-shape.png '#width=200').
3. Adjust the size of the shape report item as needed and configure the necessary properties.
   ![Configure the properties for shape report item](/static/assets/on-premise/images/report-designer/report-items/shape/rectangle-properties.png '#width=455px').
4. Drag and drop the textbox report item from the design panel into the shape report item. Resize the textbox as needed.
   ![Drag and drop textbox report item into shape report item](/static/assets/on-premise/images/report-designer/report-items/shape/rectangle-textbox.png '#width=200px')
5. Configure the necessary properties in the textbox, and add the text in the textbox.
   ![Configure the properties for textbox report item](/static/assets/on-premise/images/report-designer/report-items/shape/rectangle-flow.png '#width=200px')

## How do I add a curved arrow shape between shapes?

You build a curved connection in the Bold Reports<sup>®</sup> Web Report Designer by combining a line report item with an arrow shape. Follow these steps:

1. From the item panel, drag and drop a line report item below the previous shape.
   ![Drag and drop line report item into design area](/static/assets/on-premise/images/report-designer/report-items/shape/shape-line.png '#width=350px')
2. To display a straight line, set the line report item's width to 0.
   ![Configure the properties for line report item](/static/assets/on-premise/images/report-designer/report-items/shape/line.png '#width=350px')
3. Drag and drop the shape report item near the line report item.
   ![Drag and drop shape report item into design area](/static/assets/on-premise/images/report-designer/report-items/shape/line-ellipse.png '#width=350px')
4. Change the shape type to `Left Arrow`.
   ![Change shape type](/static/assets/on-premise/images/report-designer/report-items/shape/line-arrow.png '#width=355px')
5. Adjust the shape report item size as needed, and configure the required properties to modify the arrow shape.
   ![Configure properties for Arrow shape](/static/assets/on-premise/images/report-designer/report-items/shape/arrow-properties.png '#width=355px').

## How do I add a report header?

You add a report title in the Bold Reports<sup>®</sup> Web Report Designer by enabling the report header. Follow these steps:

1. Enable the report `Header` to add a title to the report.
   ![Enable header tag](/static/assets/on-premise/images/report-designer/report-items/shape/enable-report-header.png '#width=355px')
   > See [Show or hide header and footer](./../../../compose-report/show-or-hide-header-footer-in-report/) to add or remove the header or footer in the report.
2. Add a rectangle report item in the report header area and a textbox within the rectangle.
   ![Add report items in header area](/static/assets/on-premise/images/report-designer/report-items/shape/add-report-items-in-header-area.png '#width=410px')
3. Set the report title text in the textbox. Customize the appearance of the title using the textbox and rectangle properties in the properties panel as required.
   ![Report title text](/static/assets/on-premise/images/report-designer/report-items/shape/report-title-text.png '#width=410px')

## Final design

The final design of the `Manufacturing Workflow for Tablet PC with SIM and Touch Functionality Options` report in the Bold Reports<sup>®</sup> Web Report Designer looks like the following image.

![Manufacturing Workflow for Tablet PC report design](/static/assets/on-premise/images/report-designer/report-items/shape/final-design.png '#width=350px')

## Report preview

During the report preview in Bold Reports<sup>®</sup>, the `Manufacturing Workflow for Tablet PC with SIM and Touch Functionality Options` report is displayed as shown in the following image.

![Manufacturing Workflow for Tablet PC report preview](/static/assets/on-premise/images/report-designer/report-items/shape/report-preview.png '#width=370px')

> Download the [Manufacturing Workflow for Tablet PC report design (RDL)](https://github.com/boldreports/resources/tree/master/docs/report-designer/shape/Manufacturing-Workflow-for-Tablet-PC-with-SIM-and-Touch-Functionality-Options.rdl)

## Frequently asked questions

### Can a shape report item contain a textbox?

No. Shape report items are not container elements. Each shape and textbox is a separate element in the report design.

### How do I display a straight line next to an arrow shape?

Set the line report item's width to 0 to display a straight line.

## See also

* [Shape report item](./../../../report-items/shape/)
* [Shape types](./../../../report-items/shape/shape-types/)
* [Shape use case examples](./../../../report-items/shape/use-case-examples/)
