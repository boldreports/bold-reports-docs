---
layout: post
title: Azure Prerequisites for Report Server | Bold Reports
description: Check what you need to deploy Bold Reports Report Server on Microsoft Azure, such as an Azure subscription, an On-Premises Edition license, and Remote Desktop.
platform: bold-reports
documentation: ug
---

# Prerequisites for Deploying Bold Reports<sup>®</sup> Server on Microsoft Azure

To deploy the Bold Reports<sup>®</sup> server on Microsoft Azure, you need an Azure subscription, a Bold Reports<sup>®</sup> On-Premises Edition license, and Microsoft Remote Desktop.

## What do I need before deploying Bold Reports<sup>®</sup> on Azure?

You need the following items before you deploy the Bold Reports<sup>®</sup> server on Microsoft Azure:

1. A Microsoft Azure subscription. If you don't have one yet, you can use the free trial offered on the [Microsoft Azure website](https://azure.microsoft.com/en-us/free/).

2. Bold Reports<sup>®</sup> On-Premises Edition. Make sure you have the appropriate license, and download the build by following the [registration and download instructions](../../getting-started/#registration-and-download).

3. Microsoft Remote Desktop installed on your computer. You need it to sign in to the Virtual Machine (VM) where the Bold Reports<sup>®</sup> Server is installed. Remote Desktop comes pre-installed on Windows-based operating systems.

## How do I connect from a Mac or Linux computer?

Mac and Linux users connect to the Bold Reports<sup>®</sup> Azure VM with a separate Remote Desktop client.

> **Note:**  If you are using a Mac, the Remote Desktop client can be installed from the [Microsoft Store](https://apps.microsoft.com/detail/9WZDNCRFJ3PS?activetab=pivot%3Aoverviewtab&hl=en-us&gl=US). For Linux users, [rdesktop](http://www.rdesktop.org/) can be used to connect to your Azure VM running Microsoft Windows. Additional information on connecting and logging in to an Azure virtual machine running Windows can be found in the [Microsoft Azure guide to connect to a Windows VM with RDP](https://learn.microsoft.com/en-us/azure/virtual-machines/windows/connect-rdp).

## Frequently asked questions

### What if I do not have an Azure subscription?

You can use the free trial offered on the Microsoft Azure website.

### Do I need to install Remote Desktop on Windows?

No. Remote Desktop comes pre-installed on Windows-based operating systems.

## See also

* [Recommended Azure VM configuration](../vm-configuration/)
* [Self-deploy a Bold Reports<sup>®</sup> Server on Microsoft Azure](../self-deploy-bold-reports-on-azure-vm/)
* [Bold Reports<sup>®</sup> in Microsoft Azure Marketplace](../bold-reports-in-azure-marketplace/)
