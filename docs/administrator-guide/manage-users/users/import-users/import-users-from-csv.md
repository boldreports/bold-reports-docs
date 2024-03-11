---
layout: post
title: Import users from CSV in the BoldReportsOn-Premise
description: Describes the step-by-step procedure to import large number of users from the CSV file into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Import users from CSV

To automate the process of adding a large number of users to Bold Report On-Premise, download the CSV template file, add the users to it, and then import the file.

You can navigate to the user management page by clicking the `User` menu, as shown below.

![Import from CSV - Navigation](/static/assets/on-premise/images/manage-users-and-groups/users/usermanagement.png)

## Add users from the CSV file

In `New User`, click on `Import from csv`.

![Import from CSV - Goto Import CSV users page](/static/assets/on-premise/images/manage-users-and-groups/users/goto-import-csv-users.png)

## CSV template requirements

The first row in the CSV template represents the column heading. Bold Reports assumes that the data starting from the second line in the file represents the user information.

We consider the following columns as mandatory in the downloaded CSV file.

* Username
* Email address (It is mandatory only in the [Email required](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-users/account-activation/#email-required) mode).
* Full Name
* Password (It is mandatory only in the [Automatic activation](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-users/account-activation/#automatic-activation) mode).

Follow the below steps to add users using the CSV template

1. Download a CSV template.

    ![Import from CSV - Download CSV template](/static/assets/on-premise/images/manage-users-and-groups/users/csv-import.png)

2. Add users in the CSV file.

    ![Import from CSV - Add users into CSV file](/static/assets/on-premise/images/manage-users-and-groups/users/csv-import-add-users.png)

3. Save the CSV file and upload it.

    ![Import from CSV - Upload CSV file](/static/assets/on-premise/images/manage-users-and-groups/users/csv-import-upload.png)

4. Once the file is uploaded, the user details will be displayed in the grid, as shown in the image below.

    ![Import from CSV - User detail in grid](/static/assets/on-premise/images/manage-users-and-groups/users/csv-import-grid.png)

5. After importing users in Bold Reports, the success message is displayed as shown below:

    ![Import from CSV - Success Message](/static/assets/on-premise/images/manage-users-and-groups/users/import-csv-users-confirmation.png)