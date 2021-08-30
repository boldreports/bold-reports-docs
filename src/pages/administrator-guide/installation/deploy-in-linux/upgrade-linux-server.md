---
title:  Upgrade Linux Server in the Report Server | Syncfusion
description: Explains about how to upgrade linux server using the commands and then add it in the Bold Reports On-Premise.
keywords : create report, reportserver, web designer
---

# Upgrading Bold Reports Linux package to the Latest Version

This section explains how to upgrade Bold Reports Linux package from any version to the latest version.

1. Register and download the latest Bold Reports Linux package from [here](../../../getting-started/).

2. Download the latest Bold Reports  Linux package by running the following command.

   ```console
   sudo wget {Bold Reports Linux package link}
   ```

3. Extract the zip file.

   ```console
   sudo unzip {Bold Reports Linux package zip file}
   ```

4. Change the directory to `BoldReports_EnterpriseReporting-Linux` by running the following command.

   ```console
   cd BoldReports_EnterpriseReporting-Linux
   ```

5. Execute the following command to deploy Bold Reports in your Linux machine.

   ```console
   sudo bash install-boldreports.sh -i {upgrade} -u {user} -h {host URL}
   ```

     * **i** : Installation type - Specifies either it is a new or upgrade installation.

     * **u** : Specify the user or group that manages the service.

     * **h** : Domain or IP address of the machine with http protocol.

Example for upgrading the installation,

  ```console
  sudo bash install-boldreports.sh -i upgrade -u www-data -h http://linux.example.com
  ```

* Refer to this [link](../install-opt-library/) and install the optional client libraries, after the installation completed.

* Now, you can open the host URL in the browser and use the latest features of Bold Reports.

> NOTE: Bold Reports Linux package backup file will be available in the following location. /var/www/