---
layout: post
title: Public Report and Deployment Settings | Bold Reports
description: Use Report Server report settings in Bold Reports to allow public reports, show sample data in the Web Report Designer, and publish deployment reports to sites.
platform: report-platform
documentation: ug
---

# Report settings in Bold Reports<sup>®</sup> Report Server

Report settings in the Bold Reports<sup>®</sup> Report Server let administrators control public reports, sample data in the Web Report Designer, and deployment reports for site deployments.

## Mark Reports as Public - Allow/Restrict Switch

In the Bold Reports<sup>®</sup> Report Server, administrators can allow or restrict marking reports as public from the Reports settings page. Administrators control whether users can designate reports as public by enabling the **Mark reports as public** option.

## What happens when public reports are allowed or restricted?

When the administrator allows public reports in Bold Reports<sup>®</sup> Report Server, users can mark reports as public, and other users can view these public reports. When the administrator restricts it, users cannot mark reports as public, and those reports are not visible to other users.

## How is public report access controlled by default?

The **Mark report as public** option in Bold Reports<sup>®</sup> Report Server is disabled by default on the Reports settings page.
    ![Click on reportsettings icon](/static/assets/on-premise/images/settings/report-settings.png)

* When the option is disabled and an administrator chooses the `Make Public` option from the context menu of a report, the following message appears:

    ![Click on makepublic icon](/static/assets/on-premise/images/settings/makepublic-admin.png)

* When the option is disabled and a user chooses the `Make Public` option from the context menu of a report, the following message appears:

    ![Click on makepublic icon](/static/assets/on-premise/images/settings/makepublic-user.png)

### How do I enable the Mark reports as public option?

To make reports accessible to anonymous users in Bold Reports<sup>®</sup> Report Server, follow these steps:

1. Enable the `Mark reports as public` option and save the changes in the reports settings page.
    ![Click on report-settings-on icon](/static/assets/on-premise/images/settings/report-settings-on.png)

2. Click the `Make Public` option from the context menu of the report.
    ![Click on makepublic-context icon](/static/assets/on-premise/images/settings/makepublic-context.png)

3. Click `Make Public` in the confirmation dialog box. The report is marked as public and is displayed on the Public page.
    ![Click on makepublic icon](/static/assets/on-premise/images/settings/makepublic.png)
    ![Public page](/static/assets/on-premise/images/settings/public-page.png)

### How do I disable the Mark reports as public option?

To restrict public reports in Bold Reports<sup>®</sup> Report Server, follow this step:

1. Disable the `Mark reports as public` option and save the changes in the reports settings page.

    ![Click on makepublic icon](/static/assets/on-premise/images/settings/disable-public-option.png)

After you restrict the `Mark reports as public` option, the **Public Reports** tab shows a message:

* If the administrator clicks the **Public Reports** tab, the following message is displayed:
    ![Click on publicreport icon](/static/assets/on-premise/images/settings/publicreport-admin.png)

* If the end user clicks the **Public Reports** tab, the following message is shown:
    ![Click on publicreport icon](/static/assets/on-premise/images/settings/publicreport-user.png)

> **Note:** Learn more about Public Reports in the <a href="./../../../designer-guide/manage-content/reports/public-report/">Public Reports Guide</a>.

## Web Report Designer

The **Show Sample Data** option in Bold Reports<sup>®</sup> report settings controls whether the Web Report Designer can import sample reports.

* The **Show Sample Data** option is enabled by default in the report settings.
    ![Show Sample Report Data Option](/static/assets/on-premise/images/settings/show-sample-report-data-option.png)

* When enabled, the Import Sample Data option is visible in the Web Report Designer, so you can import sample reports directly on the designer page.
    ![Import Sample Data](/static/assets/on-premise/images/settings/import-sample-data.png)

* Disable this option and save the changes to hide the Import Sample Data option in the Web Report Designer. You then cannot import the sample reports directly on the designer page.
    ![Disable Sample Data](/static/assets/on-premise/images/settings/disable-sample-data.png)
    ![Disable Sample Data in designer page](/static/assets/on-premise/images/settings/disable-import-sample-designer-page.png)

## Deployment Reports:

Deployment reports in Bold Reports<sup>®</sup> Report Server publish reports from the master site to site deployments.

### How do I publish reports to site deployments?

Deployment Reports let you create and manage reports centrally in the master site and automatically publish them to all associated site deployments.

#### How do I add a deployment report?

To add a report for deployment in Report Server, follow these steps:

1. Click **Add Report** in the Deployment Reports section.
    ![Deployment Report Page](/static/assets/on-premise/images/settings/deployment-report-page.png)

2. The Add Deployment Report dialog appears.

3. Enter the required details and click **Add**.
    ![Add Deployment Report](/static/assets/on-premise/images/settings/add-deployment-report.png)

After the report is added, it appears in the Deployment Grid, and a confirmation message is displayed: **The report has been added successfully for deployment**.
    ![Confirmation message](/static/assets/on-premise/images/settings/confirmation-message.png)

#### What happens when a new site is created?

When a new site is created in Report Server, any reports already present in the Deployment Grid are automatically published to the newly deployed site.
    ![Publihsed-new-site](/static/assets/on-premise/images/settings/publihed-new-site.png)

## Frequently asked questions

### Is the Mark reports as public option enabled by default?

No. The **Mark report as public** option is disabled by default on the Reports settings page.

### Do existing deployment reports reach new sites?

Yes. When a new site is created, any reports already in the Deployment Grid are automatically published to the newly deployed site.

## See also

* [Report Server settings overview](./../)
* [Create a site](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-sites/create-site/)
* [Configure email account settings](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-app-settings/email-account-settings/)
