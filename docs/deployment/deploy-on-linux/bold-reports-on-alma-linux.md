---
layout: post
title: Install Report Server on Alma Linux | Bold Reports
description: Install and deploy Bold Reports Report Server v6.3 or later on Alma Linux. Set up Nginx, zip, GDIPlus and pip packages, then run the Linux package installer.
platform: report-platform
documentation: ug
---

# Bold Reports<sup>®</sup> Installation and Deployment on Alma Linux (v6.3 or later)

You can install Bold Reports<sup>®</sup> Report Server v6.3 or later on Alma Linux by installing a few packages and then running the Bold Reports<sup>®</sup> Linux package installer. The installer can also configure Nginx as the front-end server for you.

## What do I need before installing Bold Reports<sup>®</sup> on Alma Linux?

Bold Reports<sup>®</sup> on Alma Linux needs Nginx, zip, wget, GDIPlus and an OpenSSL configuration path. If you want the ETL application, you also need Python pip and the pip packages listed below.

1. Install `Nginx` by running the following commands:
    ```sh
    sudo dnf update -y
    ```
    ```sh
    sudo dnf install -y nginx
    ```

2. Install `zip` by running the following command:
    ```sh
    sudo dnf install -y zip
    ```

3. Install wget by running the following command:
    ```sh
    sudo dnf install wget
    ```

4. Install the `GDIPlus` package by running the following command:
    ```sh
    sudo dnf install -y libgdiplus
    ```
5. If you want to install the ETL application with Bold Reports<sup>®</sup>, follow the steps below. Otherwise, skip this step and go to step 6.

    * Install `python pip` and the following pip packages by running this command:

        ```sh
        sudo dnf install -y python3-pip
        sudo python3 -m pip install --upgrade pip
        sudo pip3 install duckdb==1.1.2 dlt==0.4.12 pymysql pyodbc pg8000 poetry pandas==2.2.2 numpy==1.26.4 "dlt[parquet]" "dlt[filesystem]"

        ```
        > **Note:** Python 3.9 must be installed on that machine.

6. Add an **openssl** conf path to the environment if it does not exist.
    ```sh
    export OPENSSL_CONF=/etc/ssl/
    ```

### How do I deploy the Bold Reports<sup>®</sup> application on Alma Linux?

You deploy Bold Reports<sup>®</sup> on Alma Linux by downloading the Linux package, extracting it, and running the `install-boldreports.sh` script.

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

### Which Bold Reports<sup>®</sup> versions does this Alma Linux guide cover?

The Alma Linux steps on this page apply to Bold Reports<sup>®</sup> v6.3 or later.

### When should I set the -n option to false?

Set the Bold Reports<sup>®</sup> installer "-n" value to false if existing applications on the Linux machine already use Nginx. Then, configure Nginx manually.

## Next steps

* [Install Optional Libraries](./../../../deployment/deploy-on-linux/install-opt-library/)

* [Application Startup](../../../application-startup/)
