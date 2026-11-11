---
layout: post
title: Upgrade the Report Server VM on AWS EC2 | Bold Reports
description: Upgrade the Bold Reports Report Server VM on AWS to the latest version by connecting through Remote Desktop and running the On-Premises Edition upgrade.
platform: report-platform
documentation: ug
---

# Upgrade the Bold Reports<sup>®</sup> Report Server VM on AWS to the latest version

You can upgrade the Bold Reports<sup>®</sup> Report Server VM on AWS from an older version to the latest Bold Reports<sup>®</sup> On-Premises Edition version.

## How do I upgrade the Bold Reports<sup>®</sup> VM on AWS?

To upgrade the Bold Reports<sup>®</sup> Report Server VM from an older version, follow these steps:

1. Open the downloaded .rdp file and click `Connect` when prompted with the unknown publisher warning. The screenshot shows the unknown publisher warning.

    ![rdp-warning](/static/assets/on-premise/images/installation/deploying-in-aws/rdp-warn.png)

2. Enter the credentials provided when deploying the VM and click `OK`.

    ![self-vm-credentials](/static/assets/on-premise/images/installation/deploying-in-aws/self-vm-credentials.png)

3. After a successful connection, an identity verification window appears. Click **Yes** to accept the certificate problems and connect to the virtual machine.

    ![certificate-warning](/static/assets/on-premise/images/installation/deploying-in-aws/cert-warning.png)

4. After you connect to the virtual machine, follow the steps to [upgrade the Report Server to a newer version](../../upgrade/on-premises/upgrade-bold-reports-to-latest-version/).

## Upgrade Failure Notification

The Bold Reports<sup>®</sup> Report Server shows an upgrade failure notification when a database script execution fails during an application upgrade. The upgrade process continues without interrupting access to existing reports. A notification banner indicates that the upgrade is still in progress and that some administrative actions may be temporarily unavailable until the issue is resolved.

  ![Upgrade in progress notification banner](/static/assets/on-premise/images/installation/upgrade-in-progress-notification-banner.jpeg)

Click `View upgrade details` to view information about the upgrade failure, including the upgrade status, database provider, version details, failed script information, and error message.

  ![Upgrade failure details page](/static/assets/on-premise/images/installation/upgrade-failure-details-page.png)

> **Note:** If this notification banner is displayed, the upgrade process encountered an issue. To resolve the issue, [contact Bold Reports<sup>®</sup> support](https://www.boldreports.com/contact) and share the upgrade-related logs with the support team for further investigation.

### How do I download the upgrade logs?

You download the Bold Reports<sup>®</sup> upgrade-related logs from the UMS:

* Navigate to **UMS** > **Sites**, click the **Help** icon in the upper-right corner, and select **Get Diagnostic Logs**. Select **Include upgrade failure files** and click **Download Diagnostic Logs** to download the upgrade-related logs.
  ![Get Diagnostic Logs option from Help menu](/static/assets/on-premise/images/installation/get-diagnostic-logs-menu-option.png)

## Frequently asked questions

### Can users access reports if the upgrade fails?

Yes. If a database script execution fails, the upgrade process continues without interrupting access to existing reports.

### What information does View upgrade details show?

View upgrade details shows the upgrade status, database provider, version details, failed script information, and error message.

## See also

* [Prerequisites to deploy Bold Reports<sup>®</sup> on AWS](../prerequisites/)
* [Self-deploy a Bold Reports<sup>®</sup> Server on an AWS instance](../self-deploy-bold-reports-server-on-amazon-web-service/)
* [Deploying Bold Reports<sup>®</sup> in AWS](../)
