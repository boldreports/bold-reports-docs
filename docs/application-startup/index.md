---
layout: post
title: Application Startup and License Activation | Bold Reports
description: Start up Bold Reports On-Premises Edition by creating the admin account, configuring the database and storage, and activating your license or a 30-day trial.
platform: report-platform
documentation: ug
---

# Application startup for Bold Reports<sup>®</sup> Enterprise

Bold Reports<sup>®</sup> application startup lets you activate your account and start the Bold Reports<sup>®</sup> Enterprise Application. You can activate your account either by using your login credentials or by an offline unlock key.

> **NOTE**: If you have already installed Bold Reports<sup>®</sup> on your machine, go to [Activate Bold Reports<sup>®</sup> license](./../application-startup/#activate-bold-reports-license) to activate your Bold Reports<sup>®</sup> account.

## Application Startup for Bold Reports<sup>®</sup> Enterprise

The Bold Reports<sup>®</sup> application startup screen helps you configure storage options and set up the admin account.

The application startup holds the storage options configuration for the following applications:
1. Bold Reports<sup>®</sup> Sites: Manages user identities and sites.
2. Bold Reports<sup>®</sup> Server: Manages reports, data sources, dataset, schedules and the user permissions.

## New User - System Administrator

During Bold Reports<sup>®</sup> startup, you create a new user to access the Bold Reports<sup>®</sup> sites and reports with the details shown in the following image.

![Admin User Registration](/static/assets/on-premise/images/getting-started/application-startup-admin.png)

When you create the new user account, a new group called `System Administrator` is also created.

By default, the `System Administrator` group has permission to do the following:

* Create Reports.
* Create Data Sources.
* Create Dataset.
* Create Schedules.
* Create Users.
* Create Groups.
* Manage Permissions for users and groups.

The new user account is assigned to the `System Administrator` group by default.

## Database Configuration

Bold Reports<sup>®</sup> database configuration starts with choosing a database mode, followed by the connection details.

### Which database mode should I choose?

Before configuring the database, determine the mode for managing tenant data in Bold Reports<sup>®</sup>. Your selection impacts how tenant data is stored, secured, and maintained.

![Bold Reports<sup>®</sup> Server](/static/assets/on-premise/images/getting-started/database-selection.png)

#### Shared Database Mode

In the Bold Reports<sup>®</sup> Shared Database mode, all tenants share a single database, with data logically separated using unique identifiers. The mode optimizes resource utilization, reduces infrastructure costs, and simplifies maintenance while maintaining data segregation. It is well suited for scalability and efficient management.
**Supported Databases:** PostgreSQL, MSSQL.

![Bold Reports<sup>®</sup> Server](/static/assets/on-premise/images/getting-started/shared-database.png)

#### Separate Database Mode

In the Bold Reports<sup>®</sup> Separate Database mode, each tenant has a dedicated database, ensuring complete physical data separation. The mode provides enhanced security, independent management, and optimized performance for each tenant. However, it requires greater infrastructure investment and ongoing maintenance.

**Supported Databases:** MSSQL, PostgreSQL, MySQL, Oracle.

![Bold Reports<sup>®</sup> Server](/static/assets/on-premise/images/getting-started/separate-database.png)

Once you select the preferred database mode, click Next to proceed to the database configuration step, where you enter the required connection details.

The database configuration lets you configure single or individual databases for Bold ID and Bold Reports<sup>®</sup>.

`Bold ID` database stores the sites, users, and their site access information.

`Bold Reports` database stores the reports, users, and their resource access permissions. You can use any one of the following databases to configure the Bold Reports<sup>®</sup> Server.

## Storage Options

Bold Reports<sup>®</sup> Server supports the following databases:

* Microsoft SQL server / Azure SQL
* PostgreSQL
* MySQL
* Oracle

You can connect to the SQL Server instance with the following options:

* Create new database.
* Use an existing database.

  ![SQL Server Site](/static/assets/on-premise/images/getting-started/application-startup-site-registration.jpeg)

### How do I create a new database?

To create a new database for the Bold Reports<sup>®</sup> Server, follow the guide for your database server:

[Database Configuration for Bold Reports<sup>®</sup> Server in SQL Server](./sql-configuration/#sql-server-database-configuration-for-bold-reports-server-sites)

[Database Configuration for Bold Reports<sup>®</sup> Server in PostgreSQL](./postgresql-configuration/#postgresql-database-configuration-for-bold-reports-server-sites)

[Database Configuration for Bold Reports<sup>®</sup> Server in MySQL](./mysql-configuration/#mysql-database-configuration-for-bold-reports-server-sites)

[Database Configuration for Bold Reports<sup>®</sup> Server in Oracle](./oracle-configuration/#oracle-database-configuration-for-bold-reports-server-sites)

> **Note:** When creating a new site during installation, database users need specific permissions. Make sure the users are granted the necessary [database permissions](./../administrator-guide/faq/what-are-the-database-permissions-required-to-set-up-bold-reports/).

### How do I use an existing database?

You can use an existing database to store the Bold Reports<sup>®</sup> user identities and report details.

> The credentials that is given to connect to database Server instance must have permissions to:
> * Create Database
> * Create Table
> * Insert
> * Update Table
> * Alter Table
> * Select
> * Drop Table
> * Drop Database

You can select a simple or advanced mode for configuration.

#### Simple mode

Bold Reports<sup>®</sup> Simple mode configures a single database for Bold ID and Bold Reports<sup>®</sup>.

The configuration stores the user identities, site details, reports, users, and their access permissions in a single database.

The sites will be deployed to the local file system by default in **Simple mode**.

![Simple Mode](/static/assets/on-premise/images/getting-started/simple-mode-site-registration.jpeg)

#### Advanced mode

Bold Reports<sup>®</sup> Advanced mode configures individual databases for Bold ID and Bold Reports<sup>®</sup>. You can choose between the local file system and Azure Blob Storage for Bold ID and Bold Reports<sup>®</sup>.

`Bold ID` database stores user identities and site details.

`Bold Reports` database stores reports, users, and their access permissions.

![Advanced Mode](/static/assets/on-premise/images/getting-started/advanced-mode-site-registration.jpeg)

## Storage Configuration

In Bold Reports<sup>®</sup> advanced mode, you select the storage option from the `Storage Type` dropdown and provide the required credentials in the respective fields. The storage holds the resources in Bold ID and Bold Reports<sup>®</sup>.

![Storage Configuration](/static/assets/on-premise/images/getting-started/advanced-mode-storage-configuration.png)

![Storage Configuration List](/static/assets/on-premise/images/getting-started/advanced-mode-storage-configuration-list.png)

> By default, storage type is File Storage.

### Azure Blob Storage

To use Azure Blob Storage with Bold Reports<sup>®</sup>, select Blob Storage and provide the Azure Blob credentials in the required fields. For detailed configuration steps, see the <a href="https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal">Azure Blob Storage Quickstart Guide</a>.

![Azure Blob Storage](/static/assets/on-premise/images/getting-started/azure-blob-storage.png)

### Amazon S3

To use Amazon S3 with Bold Reports<sup>®</sup>, enter the AWS Access Key, Secret Key, Bucket Name, Root Folder Name, and Region details. For setup details, see [creating an Amazon S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html).

![Amazon S3 Storage](/static/assets/on-premise/images/getting-started/amazon-s3-configuration.png)

![Bold Reports<sup>®</sup> Server](/static/assets/on-premise/images/getting-started/starting-bold-reports-server.png)

## Activate the account using login credentials

You can sign in to Bold Reports<sup>®</sup> with your registered email address to activate your subscription.

![Activate the account page](/static/assets/on-premise/images/getting-started/application-startup-login.png)

### Select Login option

From the Bold Reports<sup>®</sup> login window, choose your account type and proceed to login.

* Bold Reports<sup>®</sup> Login Credentials
* Azure AD

![Application startup login form](/static/assets/on-premise/images/getting-started/login-option.png)

### Select license

If you have multiple Bold Reports<sup>®</sup> licenses, a license selection screen appears. Select the corresponding license to proceed with application startup. Otherwise, you are automatically redirected to the application startup screen.

![Select Portal License](/static/assets/on-premise/images/getting-started/check-license-option.png)

## Trial Mode Activation

Bold Reports<sup>®</sup> offers a 30-day free trial if you do not have an online or offline license.

![Trial Mode Activation](/static/assets/on-premise/images/getting-started/trail-mode-activation.png)

You can use the 30-day free trial to explore and evaluate the application's features. Once the 30-day trial period ends, the application displays a warning icon. Clicking the icon shows a message indicating that the trial period has expired.

![Warning Icon](/static/assets/on-premise/images/getting-started/warning-icon.png)
![Warning Message](/static/assets/on-premise/images/getting-started/warning-message.png)

### Possible errors cases and their solution

The following table lists common Bold Reports<sup>®</sup> unlock key errors and their solutions.

| Cases      | Solution                                            |
|-------------------  |-----------------------------------------------------------  |
| Invalid File Type | Please ensure to upload the valid unlock key file (lic) downloaded from the <a href="https://www.boldreports.com/account/downloads?tab=self-service">Bold Reports<sup>®</sup> download page</a>. |
|  unlock key Expired    | Your unlock key date was expired. Please download the new unlock key file from the <a href="https://www.boldreports.com/account/downloads?tab=self-service">Bold Reports<sup>®</sup> download page</a>. |

> **NOTE:** If you are facing any other issues, contact us from <a href="https://www.boldreports.com/contact">our contact page</a>.

## Create Account Without Trial

If you do not have an account for Bold Reports<sup>®</sup>, you can request a new trial from the <a href="https://www.boldreports.com/pricing">Bold Reports<sup>®</sup> pricing page</a>.

![Activate the account with No Trail option](/static/assets/on-premise/images/getting-started/application-startup-sign-up.png)

Once the process is completed, you can:

* Manage sites: manage permissions for the sites you have created.
* Go to Reports: create, edit, and update the reports, and so on.

![Launch Bold Reports<sup>®</sup> Reports](/static/assets/on-premise/images/getting-started/launch-application.png)

## What does the Report Server database store?

Bold Reports<sup>®</sup> Report Server stores the following information only to the server database:

* Information of reports.
* Information of shared data sources.
* Information of shared datasets.
* Categories.
* Schedules definitions.
* Permissions settings associated for report, data source, data set, categories, and schedules.
* Report Server configurations.

> The reports, dataset, and data source, which are added to the Bold Reports<sup>®</sup> Report Server will be maintained in some location based on storage type you have chosen while configuring the Bold Reports<sup>®</sup> Server application. For more information, see the <a href="./../../administrator-guide/faq/where-does-the-data-resides-in-bold-reports/">FAQ on where data resides in Bold Reports<sup>®</sup></a>.

## Activate Bold Reports<sup>®</sup> license

You can activate your Bold Reports<sup>®</sup> license either by using your login credentials or by an offline unlock key. Follow these steps to open the license page:

1. Open the Manage License Page - `{domain}/ums/administration/license-settings`.
2. Choose the Enterprise Reporting tab.

![Enterprise Reporting tab](/static/assets/on-premise/images/getting-started/manage-license-page-reports-tab.png)

### Activate Bold Reports<sup>®</sup> license using the login credential

You can sign in to Bold Reports<sup>®</sup> with your registered email address to activate your subscription.

![Account activate using login](/static/assets/on-premise/images/getting-started/activate-boldreports-account.png)

If you have multiple Bold Reports<sup>®</sup> licenses, a license selection screen appears. Select the corresponding license to activate Bold Reports<sup>®</sup>. Otherwise, your Bold Reports<sup>®</sup> license is automatically activated.

![Choose Bold Reports<sup>®</sup> License](/static/assets/on-premise/images/getting-started/check-license-option.png)

### Upload unlock key

You can activate the Bold Reports<sup>®</sup> license by uploading an offline unlock key.

> **NOTE:** Offline unlock key available for selected customers only. [Contact Bold Reports<sup>®</sup>](https://www.boldreports.com/contact) to get access to the offline unlock key.

![Unlock Key option](/static/assets/on-premise/images/getting-started/upload-unlock-key-option.png)

Once the unlock key is uploaded, click the `Upload License` button to activate the Bold Reports<sup>®</sup> License.

![Updated Bold Reports<sup>®</sup> License](/static/assets/on-premise/images/getting-started/update-license-key.png)

### Create site

To create a new Bold Reports<sup>®</sup> site, see the [Create Site](./../administrator-guide/manage-sites/create-site/) document.

## Frequently asked questions

### Which databases support the Shared Database mode?

Bold Reports<sup>®</sup> supports the Shared Database mode for PostgreSQL and MSSQL. The Separate Database mode supports MSSQL, PostgreSQL, MySQL, and Oracle.

### How long is the Bold Reports<sup>®</sup> free trial?

Bold Reports<sup>®</sup> offers a 30-day free trial. After it ends, the application displays a warning icon with a trial expired message.

### What is the default storage type?

By default, the Bold Reports<sup>®</sup> storage type is File Storage.

## See Also

* [**Create another site in multi-site application**](./../administrator-guide/manage-sites/create-site/)
* [SQL Server database configuration](./sql-configuration/)
* [Single database for all sites](./../administrator-guide/manage-sites/v7.1-or-later/single-database-for-all-sites/)
