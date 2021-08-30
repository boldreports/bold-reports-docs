---
layout: post
title: Manage reports schedules | Report Server | Syncfusion
description: Learn how to add, edit, delete schedules, manage report schedules and also enable or disable schedules in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Manage report schedules

Reporting Server provides report-specific schedules to help you control processing and distribution of reports. All schedules specify a type of recurrence: monthly, weekly, or daily.

This section explains on how to add, edit, delete schedules, manage report schedules and also on how to run the schedules on demand and enable or disable schedules in the Bold Reports On-Premise.

Schedules page displays the schedules that are accessible by the user depending on the user’s permission will be shown in the schedules page.

![Manage Schedules](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/manage-schedules.png)

## Add schedule

Schedules can be created only if the user has `Create All Schedules` permission. Schedules can be created in two ways,

1. Add schedule from `+` button in the left side menu.
2. Add schedule from context menu of the respective reports.
3. Add schedule from schedule listing page.

### Add schedule from Create button menu

* Click on the `+` button in the left side menu and choose `Schedule` under `Create` to add a Schedule.
![Create Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/create-schedule1.png)

### Add schedule from context menu of the respective reports

* Click the `Actions` button in the reports grid context menu and select `Schedule` to schedule the corresponding report.
![Create Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/create-schedule.png)

* Once dialog was opened, the category and report values are selected by default,
![Create Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/category-report-preselect.png)

> Categories or Reports can be changed from schedule dialog box itself.

### Add schedule from schedule listing page

* Click `Schedules` from left side panel of the Report Server and click `Create Schedule` button.
![Create Schedule from schedule page](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/add-schedule-from-schedule-page.png)

* Select the required category from `Category` dropdown. After selecting the category, corresponding reports under that selected category will be displayed in the `report` dropdown,
![Create Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/select-category.png)

* Select the required report from the dropdown.
![Create Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/select-report.png)

* Select the export name from the dropdown of Schedule Name,Report Name,Timestamp.
![Create Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/select-export-name.png)

## Configure Report parameters

* Parameters available for the report will be shown in scheduler dialog.
![Set Parameter](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/set-parameter.png)

* Select the parameter values to schedule and export the reports with this filter.
![Available Parameter](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/available-parameters.png)

> To modify the parameter values, you should enable the `Set parameters` option in the schedule dialog box.

## Configure Recurrence Intervals

* Select the recurrence type, recurrence, start and end dates in the `Add Schedule' dialog box.
* Reports can be scheduled hourly, daily, weekly, monthly and yearly
* Application time zone will be shown below the date picker. Start time of the schedule will be converted to client time zone and shown in the right side for user’s convenience.
![Add Schedule 1](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/add-schedule-1.png)

## Compress file to export

* You can compress the exporting reports as a zip file by selecting the **Enable File Compression** option in the schedule dialog box. This is not mandatory and you can decompress it at any time by simply unchecking that option.
![File Compression](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/file-compression.png)

* You can secure the exporting reports with password protection by enabling the **Enable Password Protection** option in the schedule dialog box. By default, the **Default Password** option is selected.

> For default password, the password will be generated in the combination of first four characters of username and last four characters of email.

* You can customize the password protection rules for exporting reports by choosing the **Custom Password** option.
* But, the username or first name is mandatory in the password condition.
![Custom Password](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/custom-password.png)

  For instance, you have a sample user with details below:

  First Name : John<br/>
  Last Name :<br/>
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
        MichJohn
    </td>
</tr>
    <tr>
    <td>
        First four characters of First Name <br/> + <br/>
        First four characters of Last Name
    </td>
    <td>
        John
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

* Mail template define the text which is sent via email to the report server user.
* Initially the default template will displayed in the mail template and if the custom password is enable the user can add the password hint in the mail template if necessary
* And also you can customize the email template with your preference.
![Customize Email Template](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/customize-email-template.png)

### Mail template predefined variables

By selecting the variable the scheduled user variable is assigned directly from the server to the mail template
* {Full Name}: Full name of the recipient
* {First Name}: First name of the recipient
* {Last Name}: Last name of the recipient
* {Schedule Name}: Name of the schedule
* {Report Name}: Scheduled report name
* {Report Link}: Link to the scheduled report
* {Export Format}: Export file format which is chosen the schedule
* {Date}:Date means when the schedule triggered
* {Organization Name}: [Organization name](./../../../administrator-guide/custom-rebranding/#organization-name) is retrieved from the site setting

## Configure the export types

* Reports can be exported in PDF, Word, Excel, HTML, PPT, CSV and XML formats

### Email attachment

* Exported reports can be sent to individual users or groups by checking **Email attachment** option.

* Also the exported reports can be sent to external recipients by providing the `Email Id` and you can add multiple external recipients at a time, separate an email by a comma(,). For example [recipient1@gmail.com,recipients2@gmail.com].

![Email Attachment Checkbox](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/email-attachment-checkbox.png)

> **Note:** Email attachment is selected as default.

### Save as file

* We can also save exported reports into any location by checking **Save as file** option.
![Save As Checkbox](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/save-as-checkbox.png)

* To save the exported report, **Export Path** and **Max reports count** has to be filled.

  **Export Path** - Location to save the exported report. By default, the folder path will be **\Export** and the default root path location will be **C:\BoldServices\app_data\reporting\Jobs**.
       * You need a required folder path, simply edit the default folder path location and set the required path location in the Export path.
       * You need a required root path, it must be updated in [Shedule Report Setting](./../../../designer-guide/manage-schedule/schedule-report-settings/#save-as-file) Export path.

   **Max reports count** - Maximum exported reports count to be save in that location.

   **Overwrite the Existing file** - when you enable this option, it will overwrite the existing file which is present on the exported folder location.

   **Notify Recipients** - When you enable this option, it will notify the recipients.

* For saving the exported file on network location, we have to provide path in UNC format as like below,`\\172.34.203.23\test\Export`

    **Root directory path**: `\\172.34.203.23\test`

    **Relative path**: `\Export`

    * Root directory path can be provided on [Shedule Report Settings](./../../../designer-guide/manage-schedule/schedule-report-settings/#save-as-file) while relative path can be provided on creating the schedules.

    * If the folder test not exist, test folder will be created automatically while running the schedules.

    > **Write** permission for that required root directory path folder.

* When clicking the **Schedule**, the report will be scheduled in the selected recurrence.

    > **Read Write Delete** permission for that **Specific Schedule** will be added for the user who created the schedule.

## Edit schedule

Category, report, name, recurrence type, recurrence, start and end dates, export format and the recipients can be changed in the **Edit Schedule** dialog box.

## Run now

Schedules can be made to run on demand by using this **Run Now** option in the schedule grid context menu. Report will be exported in the format specified and sent to the recipients.

![Run now schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/run-now-schedule.png)

## Enable or disable schedule

Schedules can be disabled at any time which will ignore any next occurrences. When enabled it will get the next occurrence and run accordingly.

![Enable Disable Schedule](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/enable-disable-schedule.png)

## Delete schedules

Schedules can be deleted from the Report Server when it is no longer required.

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
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_AddSchedule">AddSchedule</a>
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
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_UpdateSchedule">UpdateSchedule</a>
        </td>
        <td>
            PUT
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/reports/schedule/{scheduleid}
        </td>
        <td>
            Updates schedule. Should provide Schedule ID in path parameter and schedule details as input.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_RunScheduleReport">RunScheduleReport</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/schedules/{scheduleId}/run
        </td>
        <td>
            Runs scheduled report. Should provide Schedule ID in path parameter.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_GetScheduleItemDetail">GetScheduleItemDetail</a>
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
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_GetScheduleItems">GetScheduleItems</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/reports/schedule/items
        </td>
        <td>
            Returns list of scheduled items.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_GetItems">GetSchedules</a>
        </td>
        <td>
            GET
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/items
        </td>
        <td>
            Returns the list of schedules for current user. ItemType should be Schedule.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_IsItemNameExists">IsScheduleNameExists</a>
        </td>
        <td>
            POST
        </td>
        <td>
            /api/site/{tenant-name}/v1.0/items/is-name-exists
        </td>
        <td>
            Returns an item existence whether the given schedule name already exists or not in server. Schedule name and ItemType as Schedule should be passed in request body.
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_GetItemDetail">GetScheduleDetail</a>
        </td>
        <td>
            GET
        </td>
        <td>
           /api/site/{tenant-name}/v1.0/items/{id}
        </td>
        <td>
            Returns the specified schedule details from the server. Schedule item ID should be passed in path parameter.
        </td>
    </tr>  
    <tr>
        <td>
            <a href="https://help.boldreports.com/developer-guide/rest-api/v1.0/#operation/Items_DeleteItem">DeleteSchedule</a>
        </td>
        <td>
            DELETE
        </td>
        <td>
           /api/site/{tenant-name}/v1.0/items/{id}
        </td>
        <td>
            Deletes the specified schedule from the server. Schedule item ID should be passed in path parameter.
        </td>
    </tr>
</table>