---
layout: post
title: Schedule report settings | Report Server | Syncfusion
description: Explains about schedule report settings to enable file compression option to compress the exporting reports in schedule.
platform: report-platform
documentation: ug
---

# Schedule report settings

This section explains how to use schedule report settings to compress the exported reports as a zip file by using the `Enable File Compression` option.

> This is an optional setting, and you can export the uncompressed report by simply unchecking the `Enable File Compression` option.

## Enable file compression

1. Click on the `Settings` option in the Report Server left-side panel and navigate to the `Reports` tab.

2. Switch to the `Schedule` tab as shown in the following image:
    ![Schedule report settings tab in Report Server](/static/assets/on-premise/images/manage-schedule/schedule-settings/schedule-report-settings-tab.png)

3. Check the `Enable File Compression` option and click on the `Save` button to save the settings.

4. Exported reports can be made more secure with password protection by enabling the `Enable Password Protection` option. The `Default Password` option is selected by default.

    > For the default password, the password will be generated as a combination of the first and last four characters of the email.

5. You can customize the password protection rules for exporting reports by choosing the `Custom Password` option. However, the username or first name is mandatory in the password condition.
    ![Custom password compression settings](/static/assets/on-premise/images/manage-schedule/schedule-settings/custom-password-for-compression.png)

6. For instance, let's consider a sample user with the following details:

    First Name : John<br/>
    Last Name : Michael<br/>
    Email: johnmichael@gmail.com<br/>

7. With this sample user, the possible password combination and its unlock password have been explained below.
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
                The First four characters of the Email <br/> + <br/>
                The Last four characters of the First Name
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
                Last four characters of Last Name <br/> + <br/>
            </td>
            <td>
                johnhael
            </td>
        </tr>
    </table>

## Save as file

1. Click on the `Settings` option in the Report Server left-side panel and navigate to the `Reports` tab.

2. Switch to the `Schedule` tab as shown in the following image:
    ![Schedule report settings tab in Report Server](/static/assets/on-premise/images/manage-schedule/schedule-settings/schedule-report-settings-tab.png)

3. We need to save the export path value for exporting reports to the mentioned location. By default, the directory root path will be **C:\BoldServices\app_data\reporting\Jobs**.
    ![Default Export path Settings](/static/assets/on-premise/images/manage-schedule/schedule-settings/schedule-report-settings-export-default.png)

4. You can edit the default directory root path value, which is provided on the "Export path" option, and click on the `Save` button to save the changes.
    ![Required Export path Settings](/static/assets/on-premise/images/manage-schedule/schedule-settings/schedule-report-settings-export-required.png)