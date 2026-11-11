---
layout: post
title: Find Error and Debug Log Files in Docker | Bold Reports
description: Find the error and debug log files of Bold Reports in Docker, open the logs directory from the command line, then zip and share the logs for troubleshooting.
platform: report-platform
documentation: ug
---

# Where can I find the error and debug log files of Bold Reports<sup>®</sup> in Docker?

Bold Reports<sup>®</sup> in Docker writes its log files under the Docker volumes in `/var/lib/docker/volumes`, in the `_data/logs` folder of the Bold services volume.

## What are error logs?

Bold Reports<sup>®</sup> generates error log files when an exception occurs while configuring or interacting with the Bold Reports<sup>®</sup> application.

## What are debug logs?

Bold Reports<sup>®</sup> event log files record the complete user interaction details one after the other when users interact with the Bold Reports<sup>®</sup> application.

## Where are the log directories?

For any configurations made in Bold Reports<sup>®</sup>, log files are generated in deployed locations under the various modules.

### How do I get the log files from Docker using Command Prompt or PowerShell?

You find, zip, and upload the Bold Reports<sup>®</sup> Docker logs from the command line. Follow these steps:

1. In the root directory, type the following command:

   **cd /var/lib/docker/volumes**

2. Run the **ls** command.

3. To go to the logs directory, type the following command:

   **cd {foldername}\_boldservices\_data/_data/logs**

   ![Logs](/static/assets/on-premise/images/faq/docker-folder.png)

   ![Logs Directory](/static/assets/on-premise/images/faq/docker-logs.png)

   >Note: {foldername} is the folder which contains docker-compose.yml and docker.conf files.

4. Run the **ls** command.

5. Find the logs folder in the _data location.

   ![Directory](/static/assets/on-premise/images/faq/logs-folder-docker.png)

6. Run the following commands to install the zip and curl command-line tools:

   **apt-get install zip**

   **apt-get install curl**

7. Run the following command to zip the logs folder:

   **zip -r {folder.zip} .**

   ![Zip Command](/static/assets/on-premise/images/faq/zip-command.png)

8. Run the **ls** command to find the zip file.

   ![Zip Folder](/static/assets/on-premise/images/faq/zipped-folder.png)

9. Upload the zip file through the bashupload.com site with the following command:

   **curl bashupload.com  -T {zipped folder Name}**

   ![Crl Command](/static/assets/on-premise/images/faq/curl-docker.png)

10. Copy and browse the link in the browser. Download the zip file and share it with the Bold Reports<sup>®</sup> support team.

    ![URL](/static/assets/on-premise/images/faq/zip-url.png)

## Basic Commands

The following basic commands help you move through the Bold Reports<sup>®</sup> log directories:

| Command          | Used For|
|------------------     |------------------------------------------------------------  |
| cd    |    Change the directory.               |
| pwd        |  Find the full path of current directory.     |
| ls or ls -l        | Used to list the files and folders of the current directory.|
| cat filename       | Open the file in the powershell.|
| nano filename       | Edit the file in the powershell.|

## Frequently asked questions

### What is {foldername} in the Docker logs path?

{foldername} is the folder that contains the docker-compose.yml and docker.conf files.

### How do I share Docker logs with Bold Reports<sup>®</sup> support?

Zip the logs folder, upload it with curl to bashupload.com, then download the zip file from the link and share it with the Bold Reports<sup>®</sup> support team.

## See also

* [Where can I find the error and debug log files?](./../where-can-i-find-the-error-and-debug-log-files/)
* [Error and debug log files in Kubernetes](./../where-can-i-find-the-error-and-debug-log-files-of-bold-reports-in-kubernetes/)
* [How to restart the Bold Reports<sup>®</sup> application](./../how-to-restart-the-bold-reports-enterprise-application/)
