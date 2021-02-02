---
layout: post
title: Custom rebranding supports in the Bold Reports On-Premise.
description: Describes the step-by-step procedure for custom rebranding in the Bold Reports On-Premise for any organizations.
platform: Report-Platform
documentation: ug
---

# Custom rebranding

You can rebrand the Report Server by changing the organization name, site URL, login screen logo, welcome text, header logo, favorite icon, email logo, favicon, time zone, and date time format.
To rebrand the Report Server, click the Settings option in the Report Server left panel and navigate to the **Site** tab as shown in following image.
![Site Settings option](/static/assets/on-premise/images/custom-rebranding/site-settings.png)

## Organization name

Organization name is the name displayed on the title bar of the browser. To modify the browser title, you can change the `Organization name` field of the Report Server.

## Site URL

Modify the `Site URL` field to change the Report Server URL in the Server Settings page and to get this change reflected, you should configure the same in the IIS. Refer to this [link](./../installation-and-deployment/#how-to-change-the-binding-in-the-bold-reports-enterprise-reporting) to add binding in IIS and change site URL.

## Login screen

You can change the following items in the login screen.

* For the login page logo, the preferred image size is `200x40` pixels. By default, the BoldReports logo is displayed.
* In welcome note, the maximum characters allowed is 70. Default welcome text is "Welcome to Bold Reports On-Premise".

## Header

You can change the header logo image, and the preferred image size is `40x40` pixels. The Report Server will have BoldReports logo as default main screen logo.

## Favicon

You can change favicon, and the preferred image size is `40x40` pixels. By default, the Report Server will have BoldReports favicon.

## Email

You can change email logo, and the preferred image size is `40x40` pixels. By default, the Report Server will have BoldReports email logo.

## Display

### Time zone

By default, the Report Server sets the time zone of the system where it is installed. You can change the time zone for the Report Server based on the requirement.

### Date format

Report Server will have `MM/dd/yyyy` as the default date format. You can modify the date format based on your culture.

### Time format

You can change the time format of the Report Server, and the default time format is 12 hour.

### Powered by Syncfusion

Allows you to show or hide `Powered by Syncfusion` in the footer of the Report Server. By default, this will be shown.

### Copyright information

Allows you to show or hide `Copyright Information` in the footer of the Report Server. By default, this will be shown.