---
layout: post
title: Import users from CSV in the BoldReportsOn-Premise
description: Describes the step-by-step procedure to import large number of users from the CSV file into the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Import users from CSV

You can add large number of users to Bold Report On-Premise by importing users from a CSV file. To automate the process of adding large number of users, download the CSV template file and add the users to it, then import the file.

You can navigate to user management page by clicking `User Management` drop down under the `Admin` menu as below.

![Import from CSV - Navigation](/static/assets/on-premise/images/manage-users-and-groups/users/usermanagement.png)

## Add users from CSV file

In Bold Reports On-Premise, click `Import from csv`.

![Import from CSV - Goto Import CSV users page](/static/assets/on-premise/images/manage-users-and-groups/users/goto-import-csv-users.png)

## CSV template requirements

The first row in the CSV template represents the column heading. Bold Reports On-Premise assumes that the data from the second line in the file represents the user.

We have the following columns are considered as mandatory in the downloaded CSV file.

* Email address
* Full Name

Follow the below steps to add users using the CSV template

1. Download CSV template.

    ![Import from CSV - Download CSV template](/static/assets/on-premise/images/manage-users-and-groups/users/csv-import.png)

2. Add users in the CSV file.

    ![Import from CSV - Add users into CSV file](/static/assets/on-premise/images/manage-users-and-groups/users/csv-import-add-users.png)

3. Save the CSV file and upload it.

    ![Import from CSV - Upload CSV file](/static/assets/on-premise/images/manage-users-and-groups/users/csv-import-upload.png)

4. Once the file is uploaded the user details will be shown in the grid as like in the below image.

    ![Import from CSV - User detail in grid](/static/assets/on-premise/images/manage-users-and-groups/users/csv-import-grid.png)

5. After uploaded the users in Bold Reports On-Premise the results are displayed as below.

    ![Import from CSV - Success Message](/static/assets/on-premise/images/manage-users-and-groups/users/import-csv-users-confirmation.png)