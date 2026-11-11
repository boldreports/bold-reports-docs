---
layout: post
title: Prerequisites to Deploy Report Server on AWS | Bold Reports
description: Check what you need to deploy Bold Reports Report Server on AWS, including an AWS subscription, an On-Premises Edition license, and a Remote Desktop client.
platform: report-platform
documentation: ug
---

# Prerequisites to use the Bold Reports<sup>®</sup> server on AWS

To use the Bold Reports<sup>®</sup> Report Server on AWS, you need an AWS subscription, a Bold Reports<sup>®</sup> Enterprise Edition license, and Remote Desktop.

## What do I need before deploying Bold Reports<sup>®</sup> on AWS?

You need the following items before you deploy the Bold Reports<sup>®</sup> Report Server on AWS:

1. An AWS subscription with the required privileges.

2. Bold Reports<sup>®</sup> On-Premises Edition. Make sure you have the appropriate license, and download the build by following the [registration and download instructions](../../../deployment/getting-started/#registration-and-download).

3. Microsoft Remote Desktop installed on your computer. You need it to sign in to the Virtual Machine (VM) where the Bold Reports<sup>®</sup> Server is installed. Remote Desktop comes pre-installed on Windows-based operating systems.

## How do I connect from a Mac or Linux computer?

Mac and Linux users connect to the Bold Reports<sup>®</sup> EC2 instance with a separate Remote Desktop client.

> **NOTE:** If you are using a Mac, the Remote Desktop client can be installed from the [Microsoft Remote Desktop client page](https://apps.microsoft.com/detail/9WZDNCRFJ3PS?activetab=pivot%3Aoverviewtab&hl=en-us&gl=US). For Linux users, you can use [rdesktop](http://www.rdesktop.org/) to connect to your EC2 instance running Microsoft Windows.

## Frequently asked questions

### Do I need to install Remote Desktop on Windows?

No. Remote Desktop comes pre-installed on Windows-based operating systems.

### Which Bold Reports<sup>®</sup> edition do I need on AWS?

You need Bold Reports<sup>®</sup> On-Premises Edition with the appropriate license.

## See also

* [Self-deploy a Bold Reports<sup>®</sup> Server on an AWS instance](../self-deploy-bold-reports-server-on-amazon-web-service/)
* [Deploy Bold Reports<sup>®</sup> on Amazon ECS](../ecs-deployment-guides/)
* [Upgrade the Bold Reports<sup>®</sup> VM on AWS](../upgrade-vm-latest-version/)
