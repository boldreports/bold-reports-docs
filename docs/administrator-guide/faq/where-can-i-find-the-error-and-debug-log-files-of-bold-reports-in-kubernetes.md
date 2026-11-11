---
layout: post
title: Find Error and Debug Log Files in Kubernetes | Bold Reports
description: Find the error and debug log files of Bold Reports in Kubernetes, open the pod logs folder with kubectl, then zip and share the logs folder for troubleshooting.
platform: report-platform
documentation: ug
---

# Where can I find the error and debug log files of Bold Reports<sup>®</sup> in Kubernetes?

Bold Reports<sup>®</sup> in Kubernetes writes its log files inside each pod, in the `/application/app_data/logs` directory.

## What are error logs?

Bold Reports<sup>®</sup> generates error log files when an exception occurs while configuring or interacting with the Bold Reports<sup>®</sup> application.

## What are debug logs?

Bold Reports<sup>®</sup> event log files record the complete user interaction details one after the other when users interact with the Bold Reports<sup>®</sup> application.

## Where are the log directories?

For any configurations made in Bold Reports<sup>®</sup>, log files are generated in deployed locations under the various modules.

### How do I get the log files from Kubernetes using PowerShell or Command Prompt?

You find, zip, and upload the Bold Reports<sup>®</sup> Kubernetes logs with `kubectl`. Follow these steps:

1. Type the following command to get all the pods available in the cluster:

   **kubectl -\-kubeconfig=filename.config get pods -n namespace**

   ![Pods](/static/assets/on-premise/images/faq/pods.png)

2. To go to the application directory, open a bash shell in any of the pods.

   **kubectl -\-kubeconfig=filename.config exec -n namespace -it podname -\- bash**

   ![Bash Command](/static/assets/on-premise/images/faq/bash-logs.png)

3. Go to the logs directory with **cd /application/app_data/logs** and list the files with the **ls** command.

   ![App Logs](/static/assets/on-premise/images/faq/application-logs.png)

4. Find the logs folder in the app_data location.

5. Run the following commands to install the zip and curl command-line tools:

   **apt-get install zip**

   **apt-get install curl**

6. Run the following command to zip the logs folder:

   **zip -r {folder.zip} .**

   ![Zip Command](/static/assets/on-premise/images/faq/kubectl-zipcommand.png)

7. Run the **ls** command to find the zip file.

   ![Zip Folder](/static/assets/on-premise/images/faq/kube-zip-folder.png)

8. Upload the zip file through the bashupload.com site with the following command:

   **curl bashupload.com  -T {zipped folder Name}**

   ![Curl Command](/static/assets/on-premise/images/faq/kube-curl.png)

9. Copy and browse the link in the browser. Download the zip file and share it with the Bold Reports<sup>®</sup> support team.

    ![URL](/static/assets/on-premise/images/faq/kube-url.png)

>Note: Replace namespace with your namespace.
Replace filename.config with your config file name.
Replace podname with the name of the pod you need logs from.

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

### Where are the Bold Reports<sup>®</sup> logs inside a Kubernetes pod?

The logs are in the `/application/app_data/logs` directory of the pod.

### How do I share Kubernetes logs with Bold Reports<sup>®</sup> support?

Zip the logs folder, upload it with curl to bashupload.com, then download the zip file from the link and share it with the Bold Reports<sup>®</sup> support team.

## See also

* [Where can I find the error and debug log files?](./../where-can-i-find-the-error-and-debug-log-files/)
* [Error and debug log files in Docker](./../where-can-i-find-the-error-and-debug-log-files-of-bold-reports-in-docker/)
* [Does Bold Reports<sup>®</sup> support scaling?](./../does-bold-reports-support-scaling/)
