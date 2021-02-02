---
layout: post
title: Email delivery settings | Report Server | Syncfusion
description: Describes step-by-step procedure to configure email delivery settings to send emails from the Bold Reports On-Premise using SMTP.
platform: report-platform
documentation: ug
---

# Email Settings

The Report Server includes an email delivery settings to perform the following operations:
* `Account activation`: Sends user account activation email.
* `Forgot password`: Sends request links to reset the password when users forget the password.
* `Reset password`: Sends links to reset the password.
* `Schedule and deliver reports`: Sends the exported report to the scheduled recipients.

The email delivery works with the [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) mail server technology.

> The Report Server email delivery extension is not configured by default.

To configure the email settings, click the setting option in the Report Server left-side panel and navigate to the Email tab as shown in the following image.
![Email settings page](/static/assets/on-premise/images/settings/email-settings.png)

The following SMTP details are required to send email from the Report Server:

* SMTP server: Specifies the remote SMTP server or forwarder.
* SMTP port: Configures for port 25.
* Sender name: Sets the value that appears in the From: line of an email message.
* Sender email: Sets the value of the sender email.
* Authentication type: Specifies the connection of the Report Server connects with the remote SMTP Server.
* Password: Specifies the password to connect to the SMTP Server.
* SSL: Specifies whether the `SmtpClient` uses Secure Sockets Layer (SSL) to encrypt the connection.