---
layout: post
title: Installing Bold Reports Over Bold BI on Linux with Nginx
description: Read this guide to know how to install Bold Reports on top when Bold BI is installed already on Linux with Nginx.
platform: report-platform
documentation: ug
---

# Install Bold Reports<sup>®</sup> when Bold BI<sup>®</sup> already exists

> **Note:** This support is applicable from Bold Reports<sup>®</sup> version 15.1.

> **Note:** Bold BI<sup>®</sup> should be already present in the machine.

1. Register and download the Bold Reports<sup>®</sup> Linux package from [here](./../../../deployment/getting-started/#registration-and-download).

2. Download the Bold Reports<sup>®</sup> Linux package by executing the following command:

    ```console
    sudo wget {Bold Reports Linux package link}
    ```

3. Extract the zip file by executing the following command:

    ```console
    sudo unzip {Bold Reports Linux package zip file}
    ```

4. Change the directory to `BoldReportsServer-Linux` by executing the following command:

    ```console
    cd BoldReportsServer-Linux
    ```

5. Deploy Bold Reports<sup>®</sup> on your Linux machine by executing the following command:

    ```console
    sudo bash install-boldreports.sh -i {new} -u {user} -h {host URL} -n {true}
    ```

     * **i :** Installation type - Specifies it is a new installation.

     * **u :** Specify the user or group that manages the service used for the Bold BI<sup>®</sup> application.

     * **h :** Same Domain or IP address of the machine with http/https protocol used for Bold BI<sup>®</sup> application.

     * **n :** Setting this to “true” will automatically configure Bold Reports<sup>®</sup> with the Nginx front-end server.

    Example for new installation:
    ```console
    sudo bash install-boldreports.sh -i new -u www-data -h http://linux.example.com -n true
    ```

    > Note: Use the same host URL that you used to deploy Bold BI<sup>®</sup>.

6. After executing the above installation command, give `yes` and press `enter`.

7. Bold Reports<sup>®</sup> is now installed on the same machine as Bold BI<sup>®</sup>.

8. Refer to [Application Startup](../../../application-startup/) document to activate the Bold Reports<sup>®</sup> license and create a site for the Bold Reports<sup>®</sup> application.

   > **Note:** If you encounter any issues during site creation, restart all services using the following command:

   ```console
   sudo systemctl restart bold-*
   ```