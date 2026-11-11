---
layout: post
title: Install Report Server on Debian Linux | Bold Reports
description: Install and deploy Bold Reports Report Server v7.1 or later on Debian Linux. Install Nginx, zip, GDIPlus, Python and pip packages, then run the Linux installer.
platform: report-platform
documentation: ug
---

# Bold Reports<sup>®</sup> Installation and Deployment on Debian Linux for v7.1 and later

You can install Bold Reports<sup>®</sup> Report Server v7.1 or later on Debian Linux by installing the required packages and running the Bold Reports<sup>®</sup> Linux package installer. After installation, you open the host URL in a browser to finish the application startup.

## What do I need before installing Bold Reports<sup>®</sup> on Debian Linux?

Bold Reports<sup>®</sup> on Debian Linux needs a sudo-enabled user account, Nginx, zip, GDIPlus, Python 3.9 or later, the ETL pip packages and an OpenSSL configuration path.

1. Access to a Linux server with a standard user account and sudo privileges.
2. Install `Nginx` by running the following commands:

    ```sh
    sudo apt-get update
    ```  
    ```sh
    sudo apt-get install nginx
    ```

3. Install `zip` by running the following command:
    ```sh
    sudo apt-get install zip
    ```
4. Install the `GDIPlus` package by running the following command:
    ```sh
    sudo apt-get install libgdiplus
    ```
5. Install `python 3.9 or later` by running the following commands:

    ```sh
    sudo apt-get install -y python3
    ```
    ```sh
    sudo apt update && sudo apt install wget software-properties-common && sudo add-apt-repository ppa:deadsnakes/ppa && sudo apt update && sudo apt install python3.9
    ```
6. Install the pip dependency packages for the ETL service by running the following command:
    ```sh
    sudo apt-get install python3-pip && sudo python3 -m pip install --upgrade pip && sudo pip install duckdb===1.1.2 dlt===0.4.12 pymysql pyodbc pg8000 poetry pandas===2.2.2 numpy===1.26.4 "dlt[parquet]" "dlt[filesystem]"
    ```
7. Add an `openssl conf` path in the environment if it does not exist.
    ```sh
    export OPENSSL_CONF=/etc/ssl/
    ```

### How do I configure the Bold Reports<sup>®</sup> application on Debian Linux?

You configure Bold Reports<sup>®</sup> on Debian Linux by downloading the Linux package, extracting it, and running the `install-boldreports.sh` script.

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
     sudo bash install-boldreports.sh -i {new} -u {user} -h {host URL} -n {true or false}
     ```

     * **i:** Installation type. Specifies whether it is a new or upgrade installation.

     * **u:** The user or group that manages the service.

     * **h:** Domain or IP address of the machine with HTTP protocol.

     * **n:** Set this to `true` to configure Bold Reports<sup>®</sup> with the Nginx front-end server automatically.

    > **IMPORTANT:** If existing applications on that Linux machine use Nginx, set the "-n" value to false and [configure Nginx manually](./../../../deployment/deploy-on-linux/bold-report-ubuntu/#manually-configure-nginx).

    Example for a new installation:

    ```console
        sudo bash install-boldreports.sh -i new -u www-data -h http://linux.example.com -n true
    ```

### What do I do after the installation completes?

After the Bold Reports<sup>®</sup> installation is complete, open the host URL in the browser and continue the application startup.

## Frequently asked questions

### Which Python version does Bold Reports<sup>®</sup> need on Debian Linux?

Bold Reports<sup>®</sup> on Debian Linux needs Python 3.9 or later. The ETL service also needs the pip dependency packages listed in the prerequisites.

### When should I set the -n option to false?

Set the Bold Reports<sup>®</sup> installer "-n" value to false if existing applications on the Linux machine use Nginx. Then, configure Nginx manually.

## Next steps

* [Install Optional Libraries](./../../../deployment/deploy-on-linux/install-opt-library/)

* [Application Startup](../../../application-startup/)
