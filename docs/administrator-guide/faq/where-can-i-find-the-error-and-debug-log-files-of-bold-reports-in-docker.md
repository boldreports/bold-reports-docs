---
layout: post
title: Debug and Error Log files location in Bold Reports Docker
description: This topic explains about where to find the error logs and debug files to identify the issues in the Bold Reports Docker.
platform: report-platform
documentation: ug
---

# Where can I find the error and debug log files in Docker

## Error logs

Error log files are generated when an exception occurs while configuring or interacting with the Bold Reports application.

## Debug logs

Event log files record the complete user interaction details one after the other when users interact with the Bold Reports application.

## Log directories

For any configurations made in the Bold Reports, log files are generated in deployed locations under the various modules.

### Steps to get the log files from Docker using Command Prompt/Powershell

1. In the root directory type the below command.

   **cd /var/lib/docker/volumes**

2. Run the **ls** command.

3. To navigate to the logs directory, Type the below command.

   **cd {foldername}\_boldservices\_data/_data/logs**

   ![Logs](/static/assets/on-premise/images/faq/docker-folder.png)

   ![Logs Directory](/static/assets/on-premise/images/faq/docker-logs.png)

   >Note: {foldername} is the folder which contains docker-compose.yml and docker.conf files.

4. Run the **ls** command.

5. You can find the logs folder in _data location.

   ![Directory](/static/assets/on-premise/images/faq/logs-folder-docker.png)

6. By running the below commands, we can install the zip and curl command-line tool.

   **apt-get install zip**

   **apt-get install curl**

7. Run the below command to zip the logs folder.

   **zip -r {folder.zip} .**

   ![Zip Command](/static/assets/on-premise/images/faq/zip-command.png)

8. Run the **ls** command, you can find the zip file.

   ![Zip Folder](/static/assets/on-premise/images/faq/zipped-folder.png)

9. Upload the zip file through bashupload.com site by using below command.

   **curl bashupload.com  -T {zipped folder Name}**

   ![Crl Command](/static/assets/on-premise/images/faq/curl-docker.png)

10. Copy and browse the link in the browser. Download the zip file and share it to the Bold Reports support team.

    ![URL](/static/assets/on-premise/images/faq/zip-url.png)

## Basic Commands

| Command          | Used For|
|------------------     |------------------------------------------------------------  |
| cd    |    Change the directory.               |
| pwd        |  Find the full path of current directory.     |
| ls or ls -l        | Used to list the files and folders of the current directory.|
| cat filename       | Open the file in the powershell.|
| nano filename       | Edit the file in the powershell.|