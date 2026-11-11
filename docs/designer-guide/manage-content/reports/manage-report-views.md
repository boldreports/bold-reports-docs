---
layout: post
title: Save and Share Report Views in Report Server | Bold Reports
description: Save report parameter values as Report Views in Bold Reports Report Server, then open, update, share, copy links to, and delete them in either viewer.
platform: Report-platform
documentation: ug
---

# Manage report views in Bold Reports<sup>®</sup> Report Server

Report Views are saved parameter information for a report that you can apply to the viewer while viewing the report in Bold Reports<sup>®</sup> Report Server. Only the user who created a view can share, update, and delete it.

You can open, add, update, share, and delete Report Views in Bold Reports<sup>®</sup> On-Premises Edition.

> **Note:** Starting from v6.x, the **Views** option is hidden by default from the Report Server context menu. For more information, see [Breaking changes in the context menu](#breaking-changes-in-the-context-menu).

## Report Views in Old Viewer

The Report Server old viewer lets you add, open, share, copy links to, and delete Report Views from the `Saved Views` panel.

### Add the Report Views

1. Click the parameter icon at the top and select `Save` to add a report view.

    ![View Icon](/static/assets/on-premise/images/manage-content/manage-reports/view-icon.png)

    ![Save View](/static/assets/on-premise/images/manage-content/manage-reports/save-icon.png)

    Enter a name for the new view and click `Save` as shown in the following figure.

    ![Create Report View](/static/assets/on-premise/images/manage-content/manage-reports/add-report-view.png)

    After the view is saved, you can save the same view again with a new name by clicking `Save As`.
    ![Create Report View](/static/assets/on-premise/images/manage-content/manage-reports/save-as-icon.png)

   > A view icon is available for reports that contain parameters.

2. Check the `Saved Views` panel. The view is added, and saved Report Views are displayed there.
   ![View Report views](/static/assets/on-premise/images/manage-content/manage-reports/saved-view.png)

   ![View Report views](/static/assets/on-premise/images/manage-content/manage-reports/view-saved-report-views.png)

### Open the Report Views

1. Open the context menu of the report. Saved Report Views of each report are listed in the context menu of the respective report.

    ![Manage Reports view](/static/assets/on-premise/images/manage-content/manage-reports/open-view.png)

    ![Manage Reports view](/static/assets/on-premise/images/manage-content/manage-reports/report-views-from-server.png)

2. Click the report view.

3. View the saved view, which opens in the viewer.
    ![Manage Reports view](/static/assets/on-premise/images/manage-content/manage-reports/url-view-name.png)

    > The URL includes the name of the saved view.

### Share the Report Views

You can share saved Report Views with other users and groups in the Bold Reports<sup>®</sup> Report Server. You can also share them with anonymous users.

1. To share the report views, click the `share` icon of the respective report view in the `Saved Views` panel.
   ![Share Report View](/static/assets/on-premise/images/manage-content/manage-reports/share-icon.png)

2. Click the `Manage Access` button.
   ![Share Report View popup](/static/assets/on-premise/images/manage-content/manage-reports/share-report-view.png)

3. Select the users or groups to share the report view with.
   ![Add permission to a report view](/static/assets/on-premise/images/manage-content/manage-reports/selecting-user-group.png)

4. After selecting the users or groups, click the `Add` button.
   ![Add button](/static/assets/on-premise/images/manage-content/manage-reports/manage-access-report-view.png)

### Copy the Report Views link

To copy the Report Views link in Report Server, click the `copy` icon of the respective report view in the `Saved Views` panel.

![Delete Report](/static/assets/on-premise/images/manage-content/manage-reports/copy-view.png)

### Delete the Report Views

To delete Report Views in Report Server, click the `Delete` icon of the respective report view in the `Saved Views` panel.

![Delete Report](/static/assets/on-premise/images/manage-content/manage-reports/delete-report-view.png)

## Report Views in new viewer

Bold Reports<sup>®</sup> Report Server supports managing views in the `new Viewer` from version 5.2.26.

### Add the Report Views

1. Click the parameter icon in the right corner and select `Save` to add a report view.

    ![View Icon](/static/assets/on-premise/images/manage-content/manage-reports/ej2-view-icon.png)

    ![Save View](/static/assets/on-premise/images/manage-content/manage-reports/ej2-save-icon.png)

    Enter a name for the new view and click `Save` as shown in the following figure.

    ![Create Report View](/static/assets/on-premise/images/manage-content/manage-reports/ej2-add-report-view.png)

    After the view is saved, you can save the same view again with a new name by clicking `Save As`.
    ![Create Report View](/static/assets/on-premise/images/manage-content/manage-reports/ej2-save-as-icon.png)

   > A view icon is available for reports that contain parameters.

2. Check the `Saved Views` panel. The view is added, and saved Report Views are displayed there.
   ![View Report views](/static/assets/on-premise/images/manage-content/manage-reports/ej2-saved-view.png)

   ![View Report views](/static/assets/on-premise/images/manage-content/manage-reports/ej2-view-saved-report-views.png)

### Open the Report Views

1. Open the context menu of the report. Saved Report Views of each report are listed in the context menu of the respective report.

    ![Manage Reports view](/static/assets/on-premise/images/manage-content/manage-reports/open-view.png)

    ![Manage Reports view](/static/assets/on-premise/images/manage-content/manage-reports/ej2-report-views-from-server.png)

2. Click the report view.

3. View the saved view, which opens in the viewer.
    ![Manage Reports view](/static/assets/on-premise/images/manage-content/manage-reports/ej2-url-view-name.png)

    > The URL includes the name of the saved view.

### Share the Report Views

You can share saved Report Views with other users and groups in the Bold Reports<sup>®</sup> Report Server. You can also share them with anonymous users.

1. To share the report views, click the `share` icon of the respective report view in the `Saved Views` panel.
   ![Share Report View](/static/assets/on-premise/images/manage-content/manage-reports/ej2-share-icon.png)

2. Click the `Manage Access` button.
   ![Share Report View popup](/static/assets/on-premise/images/manage-content/manage-reports/ej2-share-report-view.png)

3. Select the users or groups to share the report view with.
   ![Add permission to a report view](/static/assets/on-premise/images/manage-content/manage-reports/ej2-selecting-user-group.png)

4. After selecting the users or groups, click the `Add` button.
   ![Add button](/static/assets/on-premise/images/manage-content/manage-reports/ej2-manage-access-report-view.png)

### Copy the Report Views link

To copy the Report Views link in the new viewer, click the `copy` icon of the respective report view in the `Saved Views` panel.

![Delete Report](/static/assets/on-premise/images/manage-content/manage-reports/ej2-copy-view.png)

### Delete the Report Views

To delete Report Views in the new viewer, click the `Delete` icon of the respective report view in the `Saved Views` panel.

![Delete Report](/static/assets/on-premise/images/manage-content/manage-reports/ej2-delete-report-view.png)

## Breaking changes in the context menu

Bold Reports<sup>®</sup> Report Server hides the **Views** option in the report listing context menu by default from v6.x.

* Starting from v6.x, the **Views** option is **visible** only on the **Report Preview page**. In the **Report Listing page context menu**, the Views option is set to **hidden** by default.
   ![Delete Report](/static/assets/on-premise/images/manage-content/manage-reports/context-menu.png)

* If you still need the option in the context menu, navigate to `Settings -> Configuration -> reporting/config.xml`, set the `<EnableViewsInReportsMenu>` node to `true`, and then save the changes.<br>`<EnableViewsInReportsMenu>true</EnableViewsInReportsMenu>`
   ![View Node](/static/assets/on-premise/images/manage-content/manage-reports/view-node.png)

* The view option then appears in the context menu.
   ![View Menu](/static/assets/on-premise/images/manage-content/manage-reports/view-menu.png)

## Frequently asked questions

### Who can share, update, or delete a report view?

Only the user who created the report view can share, update, and delete it.

### Can I share a report view with anonymous users?

Yes. Saved Report Views can be shared with other users and groups, and also with anonymous users.

## See also

* [View a report](./../view-report/)
* [Manage multi-tabbed reports](./../manage-multi-tab-reports/)
* [Share a report](./../share-report/)
