---
layout: post
title: Schedule report settings | Report Server | Syncfusion
description: Explains about schedule report settings to enable file compression option to compress the exporting reports in schedule.
platform: report-platform
documentation: ug
---

# Schedule report settings

This section explain about schedule report settings to compress the exporting reports as a zip file by using the `Enable File Compression` option.

> This is optional setting and you can export the uncompressed report by simply unchecking `Enable File Compression` option.

## Enable file compression

1. Click on the `Settings` option in Report Server left-side panel and navigate to `Reports` tab.
2. Switch to `Schedule` tab as in following image
 ![Schedule report settings tab in Report Server](/static/assets/on-premise/images/manage-schedule/schedule-settings/schedule-report-settings-tab.png)

3. Check the `Enable File Compression` option and click on the `Save` button to save the settings.
4. You can secure the exporting reports with password protection by enabling the `Enable Password Protection` option. By default, the `Default Password` option is selected.
    > For default password, the password will be generated in the combination of first and last four characters of email.

5. You can customize the password protection rules for exporting reports by choosing the `Custom Password` option. But, the username or first name is mandatory in the password condition.
![Custom password compression settings](/static/assets/on-premise/images/manage-schedule/schedule-settings/custom-password-for-compression.png)

6. For instance, you have a sample user with details below:
    First Name : John
    Last Name :
    Email: johnmichael@gmail.com

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
            Last four characters of Last Name <br/> + <br/>
        </td>
        <td>
            johnhael
        </td>
    </tr>
</table>
