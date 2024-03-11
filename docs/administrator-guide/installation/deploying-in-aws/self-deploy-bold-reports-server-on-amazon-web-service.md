---
layout: post
title: VM configuration for deploying Bold Reports on AWS
description: Discover the essential configurations required for optimal performance when deploying Bold Reports on AWS
platform: report-platform
documentation: ug
---

# Self-deploy a Bold Reports Server on Amazon Web Service.

Install and run the Bold Reports server on an AWS EC2 instance by following these steps.

## Set up an AWS EC2 instance

* Sign into the [AWS portal](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Feu-north-1.console.aws.amazon.com%2Fec2%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26region%3Deu-north-1%26state%3DhashArgsFromTB_eu-north-1_227745a042a5e383&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fec2-tb&forceMobileApp=0&code_challenge=bULTZavHsGGJf1vmK_xILJyEIHizAy4aPkzK2HJkpoA&code_challenge_method=SHA-256).

* From the EC2 console dashboard, choose `Launch instance` from the options that appear.

    ![create-aws-vm](/static/assets/on-premise/images/installation/deploying-in-aws/create-aws-vm.png)

* Enter a descriptive `Name` and tags for your instance.
    ![giving-name](/static/assets/on-premise/images/installation/deploying-in-aws/giving-name.png)

* Choose `Windows` under Application and OS Images (Amazon Machine Image).

    ![choosing-os](/static/assets/on-premise/images/installation/deploying-in-aws/os-choosing.png)

* From the Instance type list, select the hardware configuration for your instance. You can find the minimum required hardware configuration [here](../../../getting-started/#hardware-requirements).

    ![choosing-vm-type](/static/assets/on-premise/images/installation/deploying-in-aws/vm-type-choosing.png)

* Under the `Key Pair (login)` section, you can either create a new RSA key pair or select an existing one.

    ![create-new-pair](/static/assets/on-premise/images/installation/deploying-in-aws/create-new-key-pair.png)
    ![new-key-pair](/static/assets/on-premise/images/installation/deploying-in-aws/new-key-pair.png)

* Next to Network settings, select Edit. For the Security group name, you will notice that the wizard has created and chosen a security group for you. You can either use this security group or choose the one you created during the setup process.

* Keep the default selections for the other configuration settings for your instance.

    ![other-settings](/static/assets/on-premise/images/installation/deploying-in-aws/other-settigs.png)

* Review the summary of your instance configuration and then click `Launch instance`.

    ![click-launch](/static/assets/on-premise/images/installation/deploying-in-aws/click-launch.png)

* A confirmation page will inform you that your instance is launching. To close the confirmation page and return to the console, select `View all instances`.

    ![launch-confirmation](/static/assets/on-premise/images/installation/deploying-in-aws/launch-confiramation.png)

    ![all-instance](/static/assets/on-premise/images/installation/deploying-in-aws/all-instance.png)

* On the Instances List page, you can view the status of instance creation. It takes a few moments for an instance to be created. When you launch an instance, its initial state is pending. After the instance starts, its state changes to running, and it receives a public DNS name. If the Public IPv4 DNS column is hidden, click on the settings icon in the top-right corner, enable Public IPv4 DNS, and click on Confirm.

    ![launch status](/static/assets/on-premise/images/installation/deploying-in-aws/launch-status.png)

* It may take a few minutes for the instance to be ready for you to connect to it. Please ensure that your instance has passed its status check in the Status check column.

    ![launch-success](/static/assets/on-premise/images/installation/deploying-in-aws/launch-success.png)

## Connect to the EC2 instance

* Navigate to the newly created EC2 instance from the AWS console.
    ![instance-panel](/static/assets/on-premise/images/installation/deploying-in-aws/instance-panel.png)

* In the `Connect` instance section, navigate to the RDP client tab and select “Get Password”.
    ![connect](/static/assets/on-premise/images/installation/deploying-in-aws/connect.png)

    ![get password](/static/assets/on-premise/images/installation/deploying-in-aws/get-password.png)

* Upload the RSA (.pem) key pair that was downloaded during instance creation and click on `Decrypt Password`.

    ![upload-pem](/static/assets/on-premise/images/installation/deploying-in-aws/upload-pem.png)

* Now download the Remote Desktop File (RDP) and copy the admin password.

    ![get password link](/static/assets/on-premise/images/installation/deploying-in-aws/get-password-link.png)

* Open the .rdp file and click `Connect` when prompted with the unknown publisher warning. It will then ask for a password. Enter the password that you copied from the AWS EC2 console.

    ![get-warning](/static/assets/on-premise/images/installation/deploying-in-aws/get-warning.png)

* On a successful connection, the identity verification window will be displayed. Click `Yes` to accept the certificate problems and connect to the virtual machine.

    ![self-vm-connect-verification](/static/assets/on-premise/images/installation/deploying-in-aws/self-vm-connect-verification.png)

### Installing and running the Bold Reports Server

This section provides instructions on how to install and run the Bold Reports server on a virtual machine (VM).

* Install the Bold Reports server on the created virtual machine (VM) in the AWS portal using the help [link](../../../installation/windows-installer/installation-and-deployment/).

* Launch your application either by default or through your desktop shortcut menu item. For example, `start Bold Reports in IIS`.

    ![application-startup](/static/assets/on-premise/images/installation/deploying-in-aws/application-startup-login.png)

* Follow the steps provided in the link to initiate the [application startup](../../../application-startup/).