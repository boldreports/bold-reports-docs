---
layout: post
title: Create Report Parts in Report Server | {{site.productName}}
description: Create, publish, edit, version, restore, and delete report parts in {{site.productName}} Report Server, and find unpublished report parts in the Drafts section.
platform: Report-platform
documentation: ug
---

# Create report parts in {{site.productNameTM}} Report Server

You can create `Report Parts` directly from the {{site.productNameTM}} Report Server and manage published Report Parts with the available options.

## How do I create and manage a report part?

You create a report part in Report Server from the `+` menu, design it in the Web Report Designer, and then publish it.

1. Click the `+` icon in the left menu and then select `Create Report Part`.
    ![Click Plus Icon](/static/assets/on-premise/images/manage-content/report-parts/click-plus-icon.png)
    ![Click Create Report Part](/static/assets/on-premise/images/manage-content/report-parts/click-create-report-part.png)

2. Enter the report part name and then click the `Add and Design` button.
    ![Click Add Design Button](/static/assets/on-premise/images/manage-content/report-parts/click-add-design.png)

3. Design and customize report items such as tables, charts, maps, indicators, and other elements in the Web Report Designer page that opens.

4. After you complete the design of your report elements, click the `Publish` option.
    ![Click Publish Icon](/static/assets/on-premise/images/manage-content/report-parts/click-publish.png)
    ![Click Publish](/static/assets/on-premise/images/manage-content/report-parts/click-publish2.png)

5. View published report parts under the `Report Parts` section.
    ![report-part-listing-page](/static/assets/on-premise/images/manage-content/report-parts/report-part.png)

6. Choose the `Edit` icon to edit the report part.
    ![edit-report-part](/static/assets/on-premise/images/manage-content/report-parts/edit-report-part.png)

7. To view the Report Part Info, click `Info` in the menu.
    ![Edit Report Part](/static/assets/on-premise/images/manage-content/report-parts/report-part-info.png)

    Report Part Info provides information about the Report Part id, Report Part Type, Created by, Created on, Last modified by, Last modified on, and Linked Reports.

    ![Open Report Part Info](/static/assets/on-premise/images/manage-content/report-parts/open-report-part-info.png)

8. To view the version history, click `Version History` in the menu.
    ![Report Part Version History](/static/assets/on-premise/images/manage-content/report-parts/report-part-version-history.png)

    The Version History dialog displays all available versions of the selected report part along with the version details.
    The latest version includes only the `Edit` option, while previous versions provide both `Edit` and `Restore` options.

    ![Report Part Version List](/static/assets/on-premise/images/manage-content/report-parts/report-part-version-list.png)

    To restore a previous version, click `Restore` from the corresponding version menu.

    ![Restore Report Part Version](/static/assets/on-premise/images/manage-content/report-parts/restore-report-part-version.png)

    The File Logs tab displays the history of changes made to the report part. The Report Server records details such as the event, user, and date for each modification.

    ![Report Part File Logs](/static/assets/on-premise/images/manage-content/report-parts/report-part-file-logs.png)

9. Choose the delete option to delete the report part.
    ![delete-report-part](/static/assets/on-premise/images/manage-content/report-parts/report-part-delete.png)

   > **Note:** To learn more, see [Report Parts in the Web Report Designer](../../report-designer/report-parts/).

## Where are draft report parts saved?

Report Server keeps unpublished report parts under the `Report Parts` category in the `Drafts` section.

![delete-report-part](/static/assets/on-premise/images/manage-content/report-parts/draft-report-parts.png)

## Frequently asked questions

### Can I restore an earlier version of a report part?

Yes. Previous versions provide both `Edit` and `Restore` options, and you click `Restore` from the corresponding version menu.

### What does Report Part Info show?

Report Part Info shows the Report Part id, Report Part Type, Created by, Created on, Last modified by, Last modified on, and Linked Reports.

## See also

* [Report Parts in the Web Report Designer](../../report-designer/report-parts/)
* [Manage datasets](./../dataset-management/)
* [Manage reports](./../reports/)
