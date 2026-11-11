---
layout: post
title: Install Report Server on openSUSE 15 | Bold Reports
description: Install and deploy Bold Reports Report Server v7.1 or later on openSUSE 15.3 or later. Set up Nginx, Chromium dependencies, Python and run the Linux installer.
platform: report-platform
documentation: ug
---

# Bold Reports<sup>®</sup> Installation and Deployment on OpenSUSE 15 (v7.1 or Later)

You can install Bold Reports<sup>®</sup> Report Server v7.1 or later on OpenSUSE 15.3 or later by preparing a virtual machine, installing the required packages, and running the Bold Reports<sup>®</sup> Linux package installer. Follow the steps below to set up the environment.

## Step 1: Create and Connect to the Virtual Machine

Bold Reports<sup>®</sup> on OpenSUSE needs a virtual machine running OpenSUSE 15.3 or higher.

* Set up an OpenSUSE 15.3 or higher virtual machine (VM) and establish a connection.

## Step 2: Install Required Packages

Bold Reports<sup>®</sup> on OpenSUSE needs Nginx, the Chromium dependency packages, zip, Python with pip, and an OpenSSL configuration path.

### How do I install Nginx on OpenSUSE?

Nginx is the front-end web server for Bold Reports<sup>®</sup>. Run the following commands one by one to install and configure Nginx:

```sh
sudo zypper refresh
```

```sh
sudo zypper addrepo https://nginx.org/packages/sles/15 nginx
```

```sh
sudo rpm --import https://nginx.org/keys/nginx_signing.key
```

```sh
sudo rpm -qa gpg-pubkey
```

```sh
sudo zypper refresh
```

```sh
sudo zypper install nginx
```

```sh
sudo systemctl start nginx
```

```sh
sudo systemctl enable nginx
```

### How do I install the Chromium dependency packages?

Bold Reports<sup>®</sup> needs the Chromium dependency packages on OpenSUSE. Run the following commands to install them:

```sh
sudo zypper ar http://download.opensuse.org/distribution/leap/15.6/repo/oss/ openSUSE-15.6-OSS
```

```sh
sudo zypper ar http://download.opensuse.org/distribution/leap/15.6/repo/non-oss/ openSUSE-15.6-Non-OSS
```

```sh
sudo zypper refresh
```

```sh
sudo zypper install systemd  btrfsprogs squashfs-tools memstrack procps-ng rng-tools iscsi ntfs-3g mozilla-nss xdg-utils gconf2 gtk3 libXScrnSaver libXcomposite1 libXcursor1 libXdamage1 libXfixes3 libXi6 libXrandr2 libXrender1 libasound2 libc6 libcairo libcairo2 liberation-fonts libgbm1 libgdk_pixbuf-2_0-0 libindicator3-7 libnspr4 lsb-release pango xvfb
```

### How do I install Python on OpenSUSE?

Bold Reports<sup>®</sup> needs zip, Python 3 and pip on OpenSUSE. Run the following commands to install Python and the necessary dependencies:

```sh
sudo zypper install zip
```

```sh
sudo zypper install python3
```

```sh
sudo zypper install python3-pip
```

```sh
sudo python3 -m pip install --upgrade pip
```

### How do I set the OpenSSL configuration path?

Bold Reports<sup>®</sup> needs the OpenSSL configuration path set in the environment. If it does not exist, add the following:

```sh
export OPENSSL_CONF=/etc/ssl/
```

### How do I deploy the Bold Reports<sup>®</sup> application on OpenSUSE?

You deploy Bold Reports<sup>®</sup> on OpenSUSE by downloading the Linux package, extracting it, and running the `install-boldreports.sh` script.

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

### Which OpenSUSE versions does Bold Reports<sup>®</sup> support?

The Bold Reports<sup>®</sup> v7.1 or later steps on this page apply to OpenSUSE 15.3 or higher.

### When should I set the -n option to false?

Set the Bold Reports<sup>®</sup> installer "-n" value to false if existing applications on the Linux machine use Nginx. Then, configure Nginx manually.

## Next steps

* [Install Optional Libraries](./../../../deployment/deploy-on-linux/install-opt-library/)

* [Application Startup](../../../application-startup/)
