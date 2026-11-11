---
layout: post
title: Auto Deploy Report Server on Linux Silently | Bold Reports
description: Deploy Bold Reports on Linux automatically without manual license activation or browser startup, and customize deployment settings with variables.
platform: report-platform
documentation: ug
---

# Auto Deployment of Bold Reports<sup>®</sup> on Linux

You can deploy Bold Reports<sup>®</sup> on Linux without manually activating the license or configuring startup from the browser. Auto deployment also lets you customize deployment settings using environment variables.

## What do I need before auto deploying Bold Reports<sup>®</sup> on Linux?

Bold Reports<sup>®</sup> auto deployment on Linux needs the following packages on Ubuntu or CentOS before you run the installer.

<table style="width:100%; table-layout: fixed;">
  <thead>
    <tr>
      <th style="width:90px; text-align:center;">Steps</th>
      <th>Ubuntu</th>
      <th>CentOS</th>
    </tr>
  </thead>
    <tbody>
        <tr>
        <td style="width:90px; text-align:center;">1</td>
        <td>
            Install <a href="https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-3.1&amp;tabs=linux-ubuntu#install-nginx">
            <strong>Nginx</strong>
            </a>
            <br/><br/>
            <strong>sudo apt-get update</strong><br/><br/>
            <strong>sudo apt-get install nginx</strong>
        </td>
        <td>
            Install <a href="https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8">
            <strong>Nginx</strong>
            </a>
        </td>
        </tr>
        <tr>
        <td style="width:90px; text-align:center;">2</td>
        <td>
            Install zip
            <br/><br/>
            <strong>sudo apt-get install zip</strong>
        </td>
        <td>
            Install zip
            <br/><br/>
            <strong>sudo yum install zip</strong>
        </td>
        </tr>
        <tr>
        <td style="width:90px; text-align:center;">3</td>
        <td>
            Install <b>GDIPlus</b> package using the following command:
            <br/><br/>
            <strong>sudo apt-get install libgdiplus</strong>
        </td>
        <td>
            Install <b>GDIPlus</b> package using the following command:
            <br/><br/>
            <strong>sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm</strong><br/>
            <strong>sudo yum install epel-release</strong><br/>
            <strong>sudo yum install libgdiplus</strong>
        </td>
        </tr>
        <tr>
        <td style="width:90px; text-align:center;">4</td>
        <td>
            Install the <b>Python3</b> for ETL service by running the following command:
            <br/><br/>
            <b>Ubuntu Version:22.04 :</b> sudo apt-get install -y python3
            <br/><br/>
            <b>Ubuntu Version:20.04 :</b> sudo apt update && sudo apt install wget software-properties-common && sudo add-apt-repository ppa:deadsnakes/ppa && sudo apt update && sudo apt install python3.9
        </td>
        <td>
            Install the <b>Python3</b> for ETL service by running the following command:
            <br/><br/>
            <strong>sudo dnf groupinstall 'development tools' && sudo dnf install wget openssl-devel bzip2-devel libffi-devel && sudo curl https://www.python.org/ftp/python/3.9.2/Python-3.9.2.tgz -O && sudo tar -xvf Python-3.9.2.tgz && cd Python-3.9.2 && sudo ./configure --enable-optimizations && sudo make install</strong>
        </td>
        </tr>
        <tr>
        <td style="width:90px; text-align:center;">5</td>
        <td>
            Install <b>python pip</b> by running the following command:
            <br/><br/>
            <strong>sudo apt-get install python3-pip</strong>
        </td>
        <td>
            Install <b>python pip</b> by running the following command:
            <br/><br/>
            <strong>sudo yum -y install python3-pip</strong>
        </td>
        </tr>
        <tr>
        <td style="width:90px; text-align:center;">6</td>
        <td>
            Install pip dependency package for ETL service by running the following command:
            <br/><br/>
            <strong>sudo pip install duckdb===1.1.2 dlt===0.5.4 pymysql pyodbc pg8000 poetry pandas===2.2.2 "dlt[parquet]" "dlt[filesystem]"</strong>
        </td>
        <td>
            Install pip dependency package for ETL service by running the following command:
            <br/><br/>
            <strong>python3.9 -m pip install duckdb===1.1.2 dlt===0.5.4 pymysql pyodbc pg8000 poetry pandas===2.2.2 "dlt[parquet]" "dlt[filesystem]"</strong>
        </td>
        </tr>
        <tr>
        <td style="width:90px; text-align:center;">7</td>
        <td>
            Add an openssl conf path in the environment, if does not exist.
            <br/><br/>
            <strong>export OPENSSL_CONF=/etc/ssl/</strong>
        </td>
        <td>
            Add an openssl conf path in the environment, if does not exist.
            <br/><br/>
            <strong>export OPENSSL_CONF=/etc/ssl/</strong>
        </td>
        </tr>
    </tbody>
</table>

## How do I auto deploy the Bold Reports<sup>®</sup> application?

You auto deploy Bold Reports<sup>®</sup> by downloading the Linux package and running the `install-boldreports.sh` script with the startup variables. Follow these steps:

1. Register and download the Bold Reports<sup>®</sup> Linux package from the [registration and download section](./../../../deployment/getting-started/#registration-and-download).

2. Download the Bold Reports<sup>®</sup> Linux package by running the following command:
    ```console
    sudo wget {Bold Reports Linux package link}
    ```
3. Extract the zip file by running the following command:
    ```console
    sudo unzip {Bold Reports Linux package zip file}
    ```
4. Change the directory to `BoldReports_EnterpriseReporting-Linux` by running the following command:
    ```console
    cd BoldReports_EnterpriseReporting-Linux
    ```
5. Run the following command to deploy Bold Reports<sup>®</sup> on your Linux machine:
     ```console
        sudo bash install-boldreports.sh -i {new} -u {user} -h {host URL} -n {true} --ssl-cert {ssl certificate path} --ssl-key {ssl key path} -databasetype {databasetype} -databasehost {Database server name} -databaseport {database port} -maintaindb {default database} -databaseuser {database username} -databasepwd {database password} -databasename {database name} -email {email address} -emailpwd {Password}
    ```

## Environment Variable and It’s Usage

Bold Reports<sup>®</sup> auto deployment uses the following variables to configure the startup application on the backend. The **Required** column shows which variables you must provide.

<table style="width:100%; table-layout: fixed;">
  <thead>
    <tr>
      <th style="width:250px">Name</th>
      <th style="width:140px">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td style="width:250px">i</td>
        <td style="width:140px">Yes</td>
        <td>
            Installation type - Specify it as new.
        </td>
    </tr>
    <tr>
        <td style="width:250px">u</td>
        <td style="width:140px">Yes</td>
        <td>Specify the user or group that manages the service. Make sure this user exists on your Linux server.</td>
    </tr>
    <tr>
        <td style="width:250px">h</td>
        <td style="width:140px">Yes</td>
        <td>Domain or IP address of the machine with HTTP protocol.</td>
    </tr>
    <tr>
        <td style="width:250px">n</td>
        <td style="width:140px">Yes</td>
        <td>Setting this to <strong>true</strong> will automatically configure Bold Reports<sup>®</sup> with Nginx front-end server.</td>
    </tr>
    <tr>
        <td style="width:250px">ssl-cert</td>
        <td style="width:140px">Yes</td>
        <td>Specify the path in which the SSL certificate is present.</td>
    </tr>
    <tr>
        <td style="width:250px">ssl-key</td>
        <td style="width:140px">Yes</td>
        <td>Specify the path in which the SSL key is present.</td>
    </tr>
    <tr>
        <td style="width:250px">license</td>
        <td style="width:140px">No</td>
        <td>License key of Bold Reports<sup>®</sup></td>
    </tr>
    <tr>
        <td style="width:250px">databasetype</td>
        <td style="width:140px">Yes</td>
        <td>
        Type of database server to be used for configuring the Bold Reports<sup>®</sup>.<br/>
        The following DB types are accepted:<br/>
        1. mssql – Microsoft SQL Server/Azure SQL Database<br/>
        2. postgresql – PostgreSQL Server<br/>
        3. mysql – MySQL<br/>
        4. Oracle
        </td>
    </tr>
    <tr>
        <td style="width:250px">databasehost</td>
        <td style="width:140px">Yes</td>
        <td>Name of the Database Server</td>
    </tr>
    <tr>
        <td style="width:250px">databaseport</td>
        <td style="width:140px">No</td>
        <td>
        The system will use the following default port numbers based on the database server type. PostgrSQL – 5432<br/>
        MySQL -3306<br/>
        Please specify the port number for your database server if it is configured on a different port.<br/>
        For MS SQL Server, this parameter is not necessary.
        </td>
    </tr>
    <tr>
        <td style="width:250px">maintaindb</td>
        <td style="width:140px">No</td>
        <td>
        For PostgreSQL DB Servers, this is an optional parameter.<br/>
        The system will use the database name postgres by default.<br/>
        If your database server uses a different default database, please provide it here.
        </td>
    </tr>
    <tr>
        <td style="width:250px">databaseuser</td>
        <td style="width:140px">Yes</td>
        <td>Username for the database server
        <br/><br/>
        Ensure that the specified database user has the necessary permissions to create and manage databases during installation.
        </td>
    </tr>
    <tr>
        <td style="width:250px">databasepwd</td>
        <td style="width:140px">Yes</td>
        <td>The database user's password</td>
    </tr>
    <tr>
        <td style="width:250px">databasename</td>
        <td style="width:140px">No</td>
        <td>
        If the database name is not specified, the system will create a new database called bold services.<br/>
        If you specify a database name, it should already exist on the server.
        </td>
    </tr>
    <tr>
        <td style="width:250px">email</td>
        <td style="width:140px">Yes</td>
        <td>It should be a valid email.</td>
    </tr>
    <tr>
        <td style="width:250px">emailpwd</td>
        <td style="width:140px">Yes</td>
        <td>Password used to create the default Bold Reports<sup>®</sup> administrator account during auto-deployment.<br/><br/>This password is used to log in to the Bold Reports<sup>®</sup> application and is not an email account password.</td>
    </tr>
    <tr>
        <td style="width:250px">usesiteidentifier</td>
        <td style="width:140px">No</td>
        <td>The variable is optional, and the default value is TRUE. By default, all sites in Bold Reports<sup>®</sup> require a site identifier, which differentiates sites on the same domain. That is https://example.com/reports/site/ You can ignore the site identifier by setting the value as FALSE. If the site identifier is disabled, each site requires a unique domain.</td>
    </tr>
    <tr>
        <td style="width:250px">mainlogo loginlogo emaillogo favicon footerlogo</td>
        <td style="width:140px">No</td>
        <td>
        If you want to upload the custom image as a logo of the site, you can use these variables. If this environment variable is not present, Bold Reports<sup>®</sup> will use its default logo.<br/><br/>
        Type : URL<br/><br/>
        https://cdn.boldreports.com/website/images/logo/bold-reports-logo.svg<br/><br/>
        Format : png, svg, jpg, jpeg<br/><br/>
        Note: Enter the image URL for all the variables. If the value is given to any of the variables, you must consider other variables also a required field.
        </td>
    </tr>
    <tr>
        <td style="width:250px">sitename</td>
        <td style="width:140px">No</td>
        <td>If you want to customize the site name, enter the site name as a value. The default site name is <strong>Bold Reports<sup>®</sup> Enterprise Reports</strong></td>
    </tr>
    <tr>
        <td style="width:250px">siteidentifier</td>
        <td style="width:140px">No</td>
        <td>If you want to customize the identifier name, enter the identifier name as a value. The default identifier name is site1</td>
    </tr>
    <tr>
        <td style="width:250px">optionallibs</td>
        <td style="width:140px">No</td>
        <td>To install the client libraries, provide the values as a comma-separated string. The client libraries used in Bold Reports<sup>®</sup> are "Oracle, PostgreSQL, Snowflake, MySQL, GoogleBigQuery and MongoDB". You need to add the names only for the libraries, which you are consenting to use with Bold Reports<sup>®</sup> application.</td>
    </tr>
  </tbody>
</table>

### Example for silent installation:

The following command shows a Bold Reports<sup>®</sup> silent installation with a PostgreSQL database and SSL configuration:

```console
sudo bash install-boldreports.sh -i new -u root -h http://linux.example.com -n true --ssl-cert /etc/ssl/domain.crt --ssl-key /etc/ssl/domain.key -databasetype postgresql -databasehost localhost -maintaindb defaultdb -databaseuser doadmin -databasepwd boldreports@123 -databasename testing -databaseport 25060 -email admin@boldreports.com -emailpwd Admin@123
```

## Frequently asked questions

### Is the emailpwd variable my email account password?

No. The Bold Reports<sup>®</sup> `emailpwd` variable is the password used to create the default administrator account during auto-deployment, and it is not an email account password.

### What happens if I do not specify a database name?

If you do not specify `databasename`, Bold Reports<sup>®</sup> creates a new database called bold services. If you specify a database name, it should already exist on the server.

## See also

* [Bold Reports<sup>®</sup> on Ubuntu](./../bold-report-ubuntu/)
* [Linux prerequisites for Bold Reports<sup>®</sup>](./../prerequisites/)
* [Install optional libraries on Linux](./../install-opt-library/)
