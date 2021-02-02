---
title: Page Layout | Web Report Designer | Bold Reports
description: Bold Report Designer Page rendering layouts, that allows to render and print reports into variety of file formats such as Word, Excel, PDF, PowerPoint, HTML, and CSV
keywords: boldReportDesigner,reportdesigner, responsive, layout
---

# Page layout

In web Report Designer, page layout area is categorized as `Header`, `Body`, and `Footer` and it is called as `Design Surface`. You can place report items in the design surface to achieve the desired report design. On report preview and export actions, the report will be generated based on the formatting, page breaks and keep together properties applied to the report items in the design surface.

## Rendering layouts

You can export a report to another file formats, such as `Word`, `Excel`, `PDF`, `PowerPoint`, `HTML` or `CSV` using the in-built Bold Report Viewer. Each file format exports reports based on the following three type of layouts.

* Soft page-break layout
* Hard page-break layout
* Data layout

Each layout follows set of predefined rules for report item positioning and determines how much data fits on each page. Thereby, converts data and report items to a readable format.

**Soft page-break layout** - The report exporting formats such as `Word`, `Excel` and `HTML` follows soft page-break layout. It maintains the report layout and formatting.

> To determine how a report will appear in a soft page-break rendering layout, use `Preview` option. The in-built Bold Report Viewer will display report as it would in a HTML, Word, or Excel format.

**Hard page-break layout** - The report exporting format such as `PDF` follows hard page-break layout. It maintains the report layout and formatting.
Reports exported using PDF will have a consistent page size and well suitable for printing purpose.

> To determine how a report will appear in a hard page-break rendering layout, use `Print` preview. The report appears as it would in a `PDF` format.

**Data layout** - The report exporting format such as `CSV` follows data layout. It clears all layout and formatting from the report and display only the data. The exported file can be used to import the raw report data into another file type.

## Pagination

Number of pages within a report and how report items are arranged on these pages is termed as pagination. Pagination varies based on the rendering layout used to view and export the report. Reports exported by using the data and soft page page-break layouts are typically not affected by pagination. But, hard page-break have the most impact on report layout and physical page size.

To control pagination, specify the page-related properties which are provided in [Report Properties](./../../compose-report/report-properties/). Each rendering layout supports page properties in different manner, therefore same report will paginate differently depending on the rendering layout used.* `Hard page-break` rendering layout is page-oriented format. Therefore, you can set page properties to control the page breaks in reports when viewed in PDF.

* `Soft page-break` rendering layout is not oriented to physical pages. If the report contains interactive features that causes a report to expand horizontally or vertically, you cannot control the page breaks in reports with `Word`, `Excel` and `HTML` formats. Pagination is applied to reports only in vertical direction. Page margins are not applied.

* `Data` rendering layout do not support pagination. Page-related properties which are specified in the report will be ignored when you view a report in `CSV` format.

## Paper size

The [paper size](./../../compose-report/report-properties/#paper-size) that you specify for the report in the Report Properties will define the pagination for the report while rendering and printing report in the print layout.* Reports exported using hard page break rendering layout inserts page break both horizontally and vertically based on the paper size.
  > Page break is inserted in horizontal direction when the report body grows outside of the page in right side direction and in vertical direction when the report body grows outside of the page in bottom direction.

* Reports exported using soft page break rendering layout inserts page breaks horizontally based on the paper size.
  > If specified page size(report width) is lesser than the width of report body, including margins and if rendering layout is `Hard page-break` the resulting report may flow horizontally across multiple pages.

## Margin

[Margins](./../../compose-report/report-properties/#margin) are applied from the edge of the physical page dimensions inward to the specified margin setting. The report item will be clipped if it extends into the margin area, so that the overlapping area is not rendered. The margin will be set to zero, if the specified margin sizes causes the horizontal or vertical width of the page to equal zero. Margins are applied only when you render and print reports in hard page break rendering layout.

## Avoid the extra blank pages in print and print preview

The extra blank page is created when the width of report is greater the page width. So, to avoid the extra blank pages set the report body width lesser than or equal to the page width.

```html
Body Width <= Page Width - (Left Margin + Right Margin)
```

The area of the physical page that remains after the space is allocated for margins, column spacing, and page header and footer is called the usable page area. Margins are applied only when you render the report in the print layout and print reports. The following image indicates the margin and usable page area of a physical page.

![Page layout](/static/assets/on-premise/images/report-designer/page-layout.png)

The following formula is used to calculate the usable area of the report rendering:

### Horizontal usable area

```html
X = Page.Width - (Left Margin + Right Margin + Column Spacing)
```

### Vertical usable area

```html
Y = Page.Height - (Top Margin + Bottom Margin + Header Height + Footer Height)
```

For example, consider the report width is 21 cm, the left margin of the report is 0.5 cm, and the right margin of the report is 0.5 cm. To avoid an extra printed page in the exported PDF file, the following formula is used:

```html
width of body (20) + left margin (0.5) + right margin (0.5) <= report width (21)
```

If the width of body is 20 or lesser, it will be rendered without extra pages. When it uses greater than 20, it will add extra pages.