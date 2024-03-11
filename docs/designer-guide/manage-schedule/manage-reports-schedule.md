---
layout: post
title: Manage reports schedules | Report Server | Syncfusion
description: Learn how to add, edit, delete schedules, manage report schedules and also enable or disable schedules in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Manage report schedules

The Reporting Server provides report-specific schedules to assist you in managing the processing and distribution of reports. All schedules specify a type of recurrence, which can be monthly, weekly, or daily.

This section explains how to add, edit, delete, and manage report schedules, as well as how to run the schedules on demand and enable or disable schedules in Bold Reports On-Premise.

The schedules page displays the schedules that are accessible to the user based on their permissions.

![Manage Schedules](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/manage-schedules.png)

## Add schedule

Schedules can be created only if the user has `Create All Schedules` permission. Schedules can be created in three ways:

1. Add a schedule from the `+` symbol in the left side menu.
2. Add a schedule from the context menu of the respective reports.
3. Add a schedule from the schedule listing page.

### Add a schedule from the Create button menu

* Click on the `+` symbol in the left side menu and choose `Schedule` to create a new schedule.
    ![Create Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/create-schedule1.png)

### Add a schedule from the context menu of the respective reports

* Click the `Actions` button in the reports grid context menu and select `Schedule` to schedule the corresponding report.
    ![Create Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/create-schedule.png)

* Once the dialog box opens, the category and report values are preselected by default,
    ![Create Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/category-report-preselect.png)

    > Categories or Reports can be changed from the schedule dialog box itself.

### Add a schedule from the schedule listing page

* Click `Schedules` in the left side panel of the Report Server, and then click the `Create Schedule` button.
    ![Create Schedule from schedule page](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/add-schedule-from-schedule-page.png)

* Select the required category from the `Category` dropdown. After selecting the category, corresponding reports under that selected category will be displayed in the `Report` dropdown,
    ![Create Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/select-category.png)

* Select the required report from the dropdown.
    ![Create Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/select-report.png)

* Select the export name from the dropdown options, including Schedule Name,Report Name, and Timestamp.
    ![Create Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/select-export-name.png)

## Configure Report Parameters

* The parameters available for the report will be shown in the scheduler dialog.
    ![Set Parameter](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/set-parameter.png)

* Select the parameter values to schedule and export the reports with this filter.
    ![Available Parameter](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/available-parameters.png)

    > To modify the parameter values, you should enable the `Set Parameters` option in the schedule dialog box.

## Configure Recurrence Intervals

* Select the recurrence type, recurrence, start date and end date in the `Add Schedule' dialog box.

* Reports can be scheduled hourly, daily, weekly, monthly, and yearly.

* The application's time zone will be displayed below the date picker. The start time of the schedule will be converted to the client's time zone and displayed on the right side for the user’s convenience.
    ![Add Schedule 1](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/add-schedule-1.png)

## Compress files to export

* You can compress the exported reports into a zip file by selecting the **Enable File Compression** option in the schedule dialog box. This is not mandatory, and you can decompress it at any time by simply unchecking that option.
    ![File Compression](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/file-compression.png)

* Exported reports can be made more secure with password protection by enabling the **Enable Password Protection** option in the schedule dialog box. The **Default Password** option is selected by default.

    > For the default password, the password will be generated as a combination of the first and last four characters of the email.

* You can customise the password protection rules for exporting reports by choosing the **Custom Password** option.
* However, the username or first name is mandatory in the password condition.
    ![Custom Password](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/custom-password.png)

For instance, let's consider a sample user with the following details:

First Name : John<br/>
Last Name : Michael<br/>
Email: johnmichael@gmail.com<br/>

With this sample user, the possible password combination and its unlock password have been explained below.

<table>
<tr>
    <th>
        Password Rule
    </th>
    <th>
        Unlock Password
    </th>
</tr>
<tr>
    <td>
        First four characters of Email <br/> + <br/>
        Last four characters of First Name
    </td>
    <td>
        johnJohn
    </td>
</tr>
    <tr>
    <td>
        First four characters of First Name <br/> + <br/>
        First four characters of Last Name
    </td>
    <td>
        JohnMich
    </td>
</tr>
    <tr>
    <td>
        First four characters of Email <br/> + <br/>
        Last four characters of Last Name
    </td>
    <td>
        johnhael
    </td>
</tr>
</table>

## Customize Mail template

* The mail template defines the text that is sent via email to the Report Server user.

* Initially, the default template will be displayed in the mail template. If the custom password is enabled, the user can add a password hint to the mail template if necessary.

* And you can also customize the email template to your preference.
    ![Customize Email Template](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/customize-email-template.png)

### Mail template predefined variables

By selecting the variable the scheduled user variable is directly assigned from the server to the mail template.
* {Full Name}: Full name of the recipient
* {First Name}: First name of the recipient
* {Last Name}: Last name of the recipient
* {Schedule Name}: Name of the schedule
* {Report Name}: Scheduled report name
* {Report Link}: Link to the scheduled report
* {Export Format}: The export file format that is chosen for the schedul
* {Date}:The date means when the schedule was triggered
* {Organization Name}: The [Organization name](./../../../administrator-guide/custom-rebranding/#organization-name) is retrieved from the site settings

## Configure the export types

* Reports can be exported in PDF, Word, Excel, HTML, PPT, CSV, and XML formats.

### Email attachment

* Exported reports can be sent to individual users or groups by selecting the **Email attachment** option.

* Additionally, the exported reports can be sent to external recipients by providing the `Email Id`, and you can add multiple external recipients at once Separating the emails with a comma(,). For example [recipient1@gmail.com,recipients2@gmail.com].
    ![Email Attachment Checkbox](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/email-attachment-checkbox.png)

    > **Note:** Email attachment is selected by default..

### Save as file

* Exported reports can also be saved to any location by selecting the **Save as file** option.
    ![Save As Checkbox](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/save-as-checkbox.png)

* To save the exported report, **Export Path** and **Max reports count** have to be filled.

    **Export Path** - Location to save the exported report. By default, the folder path will be **\Export**, and the default root path location will be **C:\BoldServices\app_data\reporting\Jobs**.

    * Edit the default folder path location to specify the required folder path in the Export path.

    * You must specify the required root path, which can be updated in the [Shedule Report Setting](./../../../designer-guide/manage-schedule/schedule-report-settings/#save-as-file) export path.

   **Max reports count** - Specify the maximum number of exported reports to be saved at this location.

   **Overwrite the Existing file** - Enabling this option will overwrite existing files in the export folder.

   **Notify Recipients** - Enabling this option will send notifications to the recipients.

* To save the exported file at a network location, you must provide the path in UNC format as shown below,`\\172.34.203.23\test\Export`

    **Root directory path**: `\\172.34.203.23\test`

    **Relative path**: `\Export`

    * The root directory path can be specified in [Shedule Report Settings](./../../../designer-guide/manage-schedule/schedule-report-settings/#save-as-file), while the relative path can be specified when creating the schedules.

    * If the test folder does not exist, a test folder will be created automatically while running the schedules.

      > **Write** permission for that required root directory path folder.

* When clicking the **Schedule**, the report will be scheduled for the selected recurrence.
    > **Read, Write, Delete** permissions for that **Specific Schedule** will be added for the user who created the schedule.

## Edit schedule

Category, report, name, recurrence type, recurrence, start and end dates, export format, and the recipients can be changed in the **Edit Schedule** dialog box.

## Run now

Schedules can be made to run on demand by using this **Run Now** option in the schedule grid context menu. The Report will be exported in the format specified and sent to the recipients.
    ![Run now schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/run-now-schedule.png)

## Enable or disable schedule

Schedules can be disabled at any time, which will ignore any future occurrences. When enabled, it will get the next occurrence and run accordingly.
    ![Enable Disable Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/enable-disable-schedule.png)

## Delete schedules

Schedules can be deleted from the Report Server when they are no longer required.

Click the **Actions** button in the schedules grid context menu and select **Delete** to delete the schedule.
    ![Delete schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/delete-schedule.png)

## REST API reference

The following table illustrates the list of available APIs related to schedules in Bold Reports On-Premise.

<table>
    <tr>
        <th>
            Action
        </th>
        <th>
            HTTP Method
        </th>
        <th>
            Endpoint
        </th>
        <th>
            Description
        </th>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/cloud-reporting/rest-api-reference/v1.0/#operation/Items_AddSchedule">AddSchedule</a>
        </td>
        <td>
            POST
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/reports/schedule
        </td>
        <td>
            Adds schedule to the server. Schedule details should be passed as input.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/cloud-reporting/rest-api-reference/v1.0/#operation/Items_UpdateSchedule">UpdateSchedule</a>
        </td>
        <td>
            PUT
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/reports/schedule/{scheduleid}
        </td>
        <td>
            Updates schedule. Should provide Schedule ID in the path parameter and schedule details as input.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/cloud-reporting/rest-api-reference/v1.0/#operation/Items_RunScheduleReport">RunScheduleReport</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/schedules/{scheduleId}/run
        </td>
        <td>
            Runs a scheduled report. Should provide a Schedule ID in path parameter.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/cloud-reporting/rest-api-reference/v1.0/#operation/Items_GetScheduleItemDetail">GetScheduleItemDetail</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/reports/schedule/{scheduleId}
        </td>
        <td>
            Returns the respective schedule details. Should pass Schedule ID in path parameter.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/cloud-reporting/rest-api-reference/v1.0/#operation/Items_GetScheduleItems">GetScheduleItems</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/reports/schedule/items
        </td>
        <td>
            Returns the list of scheduled items.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/cloud-reporting/rest-api-reference/v1.0/#operation/Items_GetItems">GetSchedules</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/items
        </td>
        <td>
            Returns the list of schedules for the current user. ItemType should be Schedule.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/cloud-reporting/rest-api-reference/v1.0/#operation/Items_IsItemNameExists">IsScheduleNameExists</a>
        </td>
        <td>
            POST
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/items/is-name-exists
        </td>
        <td>
            Returns an item's existence, whether the given schedule name already exists or not on the server. Schedule name and ItemType as Schedule should be passed in the request body.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/cloud-reporting/rest-api-reference/v1.0/#operation/Items_GetItemDetail">GetScheduleDetail</a>
        </td>
        <td>
            GET
        </td>
        <td>
           /api/site/{tenant-name}/v1.0/items/{id}
        </td>
        <td>
            Returns the specified schedule details from the server. Schedule item ID should be passed as a path parameter.
        </td>
    </tr>  
    <tr>
        <td>
            <a href="https://help.boldreports.com/cloud-reporting/rest-api-reference/v1.0/#operation/Items_DeleteItem">DeleteSchedule</a>
        </td>
        <td>
            DELETE
        </td>
        <td>
           /api/site/{tenant-name}/v1.0/items/{id}
        </td>
        <td>
            Deletes the specified schedule from the server. Schedule item ID should be passed as a path parameter.
        </td>
    </tr>
</table>