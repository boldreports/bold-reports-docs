---
layout: post
title: Install Report Server on Red Hat Linux (RHEL) | Bold Reports
description: Install and deploy Bold Reports Report Server v6.1 or later on Red Hat Enterprise Linux (RHEL). Set up Nginx, GDIPlus, pv and SELinux, then run the installer.
platform: report-platform
documentation: ug
---

# Bold Reports<sup>®</sup> Installation and Deployment on RHEL (v6.1 or later)

You can install Bold Reports<sup>®</sup> Report Server v6.1 or later on Red Hat Enterprise Linux (RHEL) by installing the required packages, setting SELinux to permissive mode, and running the Bold Reports<sup>®</sup> Linux package installer.

## What do I need before installing Bold Reports<sup>®</sup> on RHEL?

Bold Reports<sup>®</sup> on RHEL needs Nginx, zip, wget, GDIPlus, the pv tool, an OpenSSL configuration path and SELinux in permissive mode. The ETL application also needs Python pip packages.

1. Install [Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8).

2. Install `zip` by running the following command:
    ```sh
    sudo dnf install zip
    ```

3. Install `wget` by running the following command:
    ```sh
    sudo dnf install wget
    ```

4. Install the `GDIPlus` package by running the following commands:
    ```sh
    sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
    sudo yum install epel-release
    sudo yum install libgdiplus
    ```
5. If you want to install the ETL application with Bold Reports<sup>®</sup>, follow the steps below. Otherwise, skip this step and go to step 6.

    * Install `python pip` and the following pip packages by running this command:

        ```sh
        sudo yum -y install python3-pip && python3.9 -m pip install duckdb===1.1.2 dlt===0.5.4 pymysql pyodbc pg8000 poetry pandas===2.2.2 "dlt[parquet]" "dlt[filesystem]
        ```
        > **Note:** Python 3.9 must be installed on that machine.

6. Install the `pv` tool by running the following command:
    ```sh
    sudo dnf install pv
    ```
7. Add an **openssl** conf path to the environment if it does not exist.
    ```sh
    export OPENSSL_CONF=/etc/ssl/
    ```
8. Change the SELinux mode from targeted to permissive.
    ```sh
    sudo setenforce 0
    ```

### How do I deploy the Bold Reports<sup>®</sup> application on RHEL?

You deploy Bold Reports<sup>®</sup> on RHEL by downloading the Linux package, extracting it, and running the `install-boldreports.sh` script.

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

5. Run the following command to deploy Bold Reports<sup>®</sup> on your machine.

    **Command Syntax:**

    ```console
    sudo bash install-boldreports.sh -i {new} -u {user} -h {host URL} -n {true or false}
    ```
    **Example command:**

    ```console
    sudo bash install-boldreports.sh -i new -u root -h http://linux.example.com -n true
    ```

     * **i:** Installation type. Specifies whether it is a new or upgrade installation.  

     * **u:** The user or group that manages the service. Make sure this user exists on your Linux server.

     * **h:** Domain or IP address of the machine with HTTP protocol.

     * **n:** Set this to `true` to configure Bold Reports<sup>®</sup> with the Nginx front-end server automatically.

    > **IMPORTANT:** If any existing applications on the Linux machine use Nginx, set the "-n" value to false and [configure Nginx manually](./../../../deployment/deploy-on-linux/bold-reports-on-centos/#manually-configure-nginx).

    Example for a new installation:

    ```console
        sudo bash install-boldreports.sh -i new -u www-data -h http://linux.example.com -n true
    ```

## Frequently asked questions

### Do I need to change the SELinux mode on RHEL?

Yes. Before you deploy Bold Reports<sup>®</sup> on RHEL, change the SELinux mode from targeted to permissive with `sudo setenforce 0`.

### Is the ETL application required?

No. The Bold Reports<sup>®</sup> ETL application is optional on RHEL. If you do not want it, skip the pip package step and go to step 6.

## Next steps

* [Install Optional Libraries](./../../../deployment/deploy-on-linux/install-opt-library/)

* [Application Startup](../../../application-startup/)
