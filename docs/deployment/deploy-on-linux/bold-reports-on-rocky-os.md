---
layout: post
title: Install Report Server on Rocky Linux | Bold Reports
description: Install and deploy Bold Reports Report Server v7.1 or later on Rocky Linux. Install Nginx, zip, GDIPlus, libicu, Python and pip, then run the Linux installer.
platform: report-platform
documentation: ug
---

# Bold Reports<sup>®</sup> Installation and Deployment on Rocky Linux (v7.1 or later)

You can install Bold Reports<sup>®</sup> Report Server v7.1 or later on Rocky Linux by installing the required packages and running the Bold Reports<sup>®</sup> Linux package installer. The installer can also configure Nginx as the front-end server for you.

## What do I need before installing Bold Reports<sup>®</sup> on Rocky Linux?

Bold Reports<sup>®</sup> on Rocky Linux needs Nginx, zip, GDIPlus, libicu, Python 3.9 or later, the ETL pip packages and an OpenSSL configuration path.

1. Install `Nginx` by running the following commands:

    ```sh
    sudo dnf update -y
    ```
    ```sh
    sudo dnf install epel-release -y
    ```
    ```sh
    sudo dnf install nginx -y
    ```

2. Install `zip` by running the following command:
    ```sh
    sudo dnf install zip -y
    ```

3. Install the `GDIPlus` package by running the following command:
    ```sh
    sudo dnf install libgdiplus -y
    ```
4. Install the libicu package by running the following command:
    ```sh
    sudo dnf install libicu
    ```

5. Install Python 3.9 or later by executing the following command:
    ```sh
    sudo dnf install python3 -y
    ```
    ```sh
    sudo dnf install python39 -y
    ```
6. Install the required pip dependency packages for the ETL service by running the following commands:
    ```sh
    sudo dnf install python3-pip -y
    ```
    ```sh
    sudo python3 -m pip install --upgrade pip
    ```

7. Add an **openssl** conf path to the environment if it does not exist.
    ```sh
    export OPENSSL_CONF=/etc/ssl/
    ```

### How do I deploy the Bold Reports<sup>®</sup> application on Rocky Linux?

You deploy Bold Reports<sup>®</sup> on Rocky Linux by downloading the Linux package, extracting it, and running the `install-boldreports.sh` script.

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

### Which Python version does Bold Reports<sup>®</sup> need on Rocky Linux?

Bold Reports<sup>®</sup> on Rocky Linux needs Python 3.9 or later.

### When should I set the -n option to false?

Set the Bold Reports<sup>®</sup> installer "-n" value to false if existing applications on the Linux machine use Nginx. Then, configure Nginx manually.

## Next steps

* [Install Optional Libraries](./../../../deployment/deploy-on-linux/install-opt-library/)

* [Application Startup](../../../application-startup/)
