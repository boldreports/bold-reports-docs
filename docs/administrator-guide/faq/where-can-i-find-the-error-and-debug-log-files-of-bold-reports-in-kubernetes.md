---
layout: post
title: Debug-Error Log files location in Bold Reports Kubernetes
description: This topic explains about where to find the error logs and debug files to identify the issues in the Bold Reports Kubernetes.
platform: report-platform
documentation: ug
---

# Where can I find the error and debug log files in Kubernetes

## Error logs

Error log files are generated when an exception occurs while configuring or interacting with the Bold Reports application.

## Debug logs

Event log files record the complete user interaction details one after the other when users interact with the Bold Reports application.

## Log directories

For any configurations made in the Bold Reports, log files are generated in deployed locations under the various modules.

### Steps to get the log files from Kubernetes using Powershell/Command Prompt

1. Type the below command to get all the pods which are available in the cluster.

   **kubectl -\-kubeconfig=filename.config get pods -n namespace**

   ![Pods](/static/assets/on-premise/images/faq/pods.png)

2. We need to navigate to the application directory for that bash any of the pod.

   **kubectl -\-kubeconfig=filename.config exec -n namespace -it podname -\- bash**

   ![Bash Command](/static/assets/on-premise/images/faq/bash-logs.png)

3. Navigate to the logs directory by using **cd /application/app_data/logs** and list the files using **ls** command.

   ![App Logs](/static/assets/on-premise/images/faq/application-logs.png)

4. You can find the logs folder in app_data location.

5. By running the below commands, we can install the zip and curl command-line tool.

   **apt-get install zip**

   **apt-get install curl**

6. Run the below command to zip the logs folder.

   **zip -r {folder.zip} .**

   ![Zip Command](/static/assets/on-premise/images/faq/kubectl-zipcommand.png)

7. Run the **ls** command, you can find the zip file.

   ![Zip Folder](/static/assets/on-premise/images/faq/kube-zip-folder.png)

8. Upload the zip file through bashupload.com site by using below command.

   **curl bashupload.com  -T {zipped folder Name}**

   ![Curl Command](/static/assets/on-premise/images/faq/kube-curl.png)

9. Copy and browse the link in the browser. Download the zip file and share it to the Bold Reports support team.

    ![URL](/static/assets/on-premise/images/faq/kube-url.png)

>Note: Replace namespace with your namespace.
Replace filename.config with your config file name.
Replace podname with your podname which you need to get logs.

## Basic Commands

| Command          | Used For|
|------------------     |------------------------------------------------------------  |
| cd    |    Change the directory.               |
| pwd        |  Find the full path of current directory.     |
| ls or ls -l        | Used to list the files and folders of the current directory.|
| cat filename       | Open the file in the powershell.|
| nano filename       | Edit the file in the powershell.|