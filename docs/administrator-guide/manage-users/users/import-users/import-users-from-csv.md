---
layout: post
title: Import Users in Bulk from a CSV File | Bold Reports
description: Add many users to Bold Reports On-Premises Edition at once by downloading the CSV template, adding username, email, full name, and password, and importing it.
platform: report-platform
documentation: ug
---

# Import users from a CSV file in Bold Reports<sup>®</sup>

Bold Reports<sup>®</sup> On-Premises Edition lets you add a large number of users at once from a CSV file. Download the CSV template file, add the users to it, and then import the file.

## How do I open the user management page?

You open the Bold Reports<sup>®</sup> user management page by clicking the `User` menu.

![Import from CSV - Navigation](/static/assets/on-premise/images/manage-users-and-groups/users/usermanagement.png)

## Add users from the CSV file

To start a CSV import in Bold Reports<sup>®</sup>, click `Import from csv` in `New User`.

![Import from CSV - Goto Import CSV users page](/static/assets/on-premise/images/manage-users-and-groups/users/goto-import-csv-users.png)

## What are the CSV template requirements?

The first row in the Bold Reports<sup>®</sup> CSV template represents the column heading. Bold Reports<sup>®</sup> assumes that the data starting from the second line in the file represents the user information.

The following columns are mandatory in the downloaded CSV file:

* Username
* Email address (It is mandatory only in the [Email required](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-users/account-activation/#email-required) mode).
* Full Name
* Password (It is mandatory only in the [Automatic activation](https://help.boldreports.com/enterprise-reporting/administrator-guide/manage-users/account-activation/#automatic-activation) mode).

## How do I import users with the CSV template?

Follow these steps to add users to Bold Reports<sup>®</sup> using the CSV template:

1. Download a CSV template.

    ![Import from CSV - Download CSV template](/static/assets/on-premise/images/manage-users-and-groups/users/csv-import.png)

2. Add users in the CSV file.

    ![Import from CSV - Add users into CSV file](/static/assets/on-premise/images/manage-users-and-groups/users/csv-import-add-users.png)

3. Save the CSV file and upload it.

    ![Import from CSV - Upload CSV file](/static/assets/on-premise/images/manage-users-and-groups/users/csv-import-upload.png)

4. Review the user details. Once the file is uploaded, the user details are displayed in the grid, as shown in the image below.

    ![Import from CSV - User detail in grid](/static/assets/on-premise/images/manage-users-and-groups/users/csv-import-grid.png)

5. Import the users. After importing users in Bold Reports<sup>®</sup>, the success message is displayed:

    ![Import from CSV - Success Message](/static/assets/on-premise/images/manage-users-and-groups/users/import-csv-users-confirmation.png)

## Frequently asked questions

### Is the email address always required in the CSV file?

No. The email address is mandatory only in the Bold Reports<sup>®</sup> Email required mode.

### When is the password column required?

The password column is mandatory only in the Bold Reports<sup>®</sup> Automatic activation mode.

## See also

* [Account activation](./../../../account-activation/)
* [Manage users](./../../manage-users/)
* [Import users from a database](./../import-users-from-database/)
