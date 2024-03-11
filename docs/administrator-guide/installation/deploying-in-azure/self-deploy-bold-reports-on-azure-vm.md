---
layout: post
title: VM configuration for deploying Azure in Bold Reports
description: Discover the required configurations for deploying the Bold Reports application in Azure Service, ensuring seamless integration and optimal performance within your Azure environment
platform: bold-reports
documentation: ug
---

# Self-deploy a Bold Reports Server on Microsoft Azure

To install and run the Bold Reports server on a Microsoft Azure virtual machine, follow these steps in a concise manner.

## Set up a Microsoft Azure VM

* Sign into the [Azure Portal](https://portal.azure.com/#home).

* Click on `Create a resource`.

  ![create-resource-group](/static/assets/on-premise/images/installation/deploying-in-azure/create-resource-group.png)

* Select the `Compute` option under the `Categories` section.

  ![compute-category](/static/assets/on-premise/images/installation/deploying-in-azure/vm-compute.png)

* Search for `Windows Server` and select it.

  ![windows-server](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-windows-server.png)

* Choose the Windows Server software plan that meets our [system requirements](../../../getting-started/#hardware-requirements) and click `Create`.

  ![compute-category](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-windows-server-select.png)

* Provide the necessary administrative information for the new VM on the `Basics` blade.

  ![self-vm-basic](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-basic1.png)

  ![self-vm-basic](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-basic2.png)

    **Subscription:** This VM should be associated with the Azure subscription.

    **Resource group:** Choose `Create new` and enter the name of the new resource group to host the VM’s resources.

    **Virtual Machine Name:** Enter a name for your VM (maximum of 15 characters).

    **Region:** Choose your preferred region for your VM.

    **Username:** Enter your username, which you will use to log in to the VM using the Remote Desktop Protocol (RDP).

    **Password:** Enter your password, as you will need it to log in to the VM using RDP.

* Under the `Disks` blade, choose the VM OS disk type (**SSD** is recommended).

  ![self-vm-disk](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-disk.png)

    **VM disk type:** Choose SSD or HDD as your convenience (SSD is recommended for better performance).

    **Size:** Choose the VM size that meets our [system requirements](../../../getting-started/#hardware-requirements). For example, choose the D2s_V3 size, and then click Select.

* Under the `Networking` blade, select `Advanced` in `NIC network security group` and click on `Create new` in the **Configure network security group** option to add an inbound security rule. This rule will allow specific types of internet traffic to reach your VM.

  ![self-vm-networking](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-networking.png)

  ![self-vm-add-inbound-rule](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-add-inbound-rule.png)

* Choose `HTTP` from the `Service` drop-down list on the `Add inbound security rule` blade.

* In the `Priority` box, assign a numerical priority to the rule, such as 100. Rules with lower numbers are processed first. For instance, a rule with a priority of 100 will be processed before a rule with a priority of 110.

* In the Name box, type a name for the inbound rule, and then click OK.

* Repeat the steps to create an inbound security rule for the HTTPS service with a priority of 101.

* When finished, the Create network security group dialog should have three rules allowing RDP, HTTP, and HTTPS access. Click OK.

* Review your settings and click Create.

  ![vm-review](/static/assets/on-premise/images/installation/deploying-in-azure/inbound-review.png)

  ![create-vm](/static/assets/on-premise/images/installation/deploying-in-azure/create-vm.png)

  ![vm-self-deployment](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-deployment.png)

## How to Connect the VM Through the Remote Desktop Connection

Follow the below steps to connect to the virtual machine.

* Click `Connect` on the virtual machine overview window to download a Remote Desktop Protocol (`.rdp`) file from the Azure portal.

  ![vm-self-connect](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-connect.png)

  ![vm-self-connect](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-connect2.png)

* Open the .rdp file and click Connect to proceed, despite the warning from an unknown publisher.

  ![vm-self-connect-unknown-publisher](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-connect-unknown-publisher.png)

* Enter the credentials that you provided when creating the VM, as shown below, and click OK.

  ![vm-self-credentials](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-credentials.png)

* After a successful connection, the identity verification window will be displayed, as shown below. Click `Yes`to accept the certificate problems and connect to the virtual machine.

  ![vm-self-connect-verification](/static/assets/on-premise/images/installation/deploying-in-azure/self-vm-connect-verification.png)

### Installation and running of the Bold Reports Server

This section provides instructions on how to install and run the Bold Reports server on a virtual machine (VM).

* Install the Bold Reports server on the created virtual machine (VM) in the Azure portal using the [help link](../../../installation/windows-installer/installation-and-deployment/).

* Launch your application either by default or through your desktop shortcut menu item. For example, start Bold Reports in IIS.

  ![application-start-up](/static/assets/on-premise/images/installation/deploying-in-azure/application-startup-login.png)

* Follow the steps in the link to do the [application startup](../../../application-startup/).