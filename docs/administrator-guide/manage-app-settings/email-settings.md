---
layout: post
title: Email delivery settings | Report Server | Syncfusion
description: Describes step-by-step procedure to configure email delivery settings to send emails from the Bold Reports On-Premise using SMTP.
platform: report-platform
documentation: ug
---

# Email Settings

This section explains how to configure the email settings in the Bold Reports Server to send emails using an [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) account, including the configuration of SMTP details.

SMTP Email Settings are required to perform the following operations:

* `Account activation:` Sending user account activation emails.
* `Forgot password:` Provide request links to reset passwords for users who have forgotten them.
* `Reset password:` Sending links to facilitate password resets.
* `Schedule and deliver reports:` Distributing exported reports to scheduled recipients.

The Bold Reports Server requires the following SMTP details to send emails.

<table>
 <tr>
 <td> SMTP Server </td>
 <td> The SMTP server specifies the public IP address or provider that delivers the emails to the end user's mail box. </td>
 </tr>
 <tr>
 <td> SMTP Port </td>
 <td> The port number of the SMTP server may vary depending on the SMTP server and the connection type (SSL/TLS).</td>
 </tr>
 <td> Sender Name </td>
 <td> The name displayed on the email as the <b>From name.</b> </td>
 </tr>
 <tr>
 <td> Sender Email Address </td>
 <td> The email address displayed as the <b>From email address</b> in the recipient's email. </td>
 </tr>
  <tr>
 <td> Authentication type </td>
 <td> We support two types of authentication:</br></br> 1.<b>Basic Authentication:</b> This default authentication type requires a username and password.</br>2.<b>Anonymous Authentication:</b> You can choose this option if you have disabled authentication on your SMTP server. </td>
 </tr>
  <tr>
 <td> Username </td>
 <td> A valid username for the sender's email account is required for sending emails.</td>
 </tr>
   <tr>
 <td> Password </td>
 <td> The password of the sender's email account.</td>
 </tr>
   <tr>
 <td> Enable SSL </td>
 <td> If SSL is enabled, it will be used to connect with your SMTP server; otherwise, the connection will be made using TLS.</td>
 </tr>
 </table>

## Steps to configure SMTP account settings in Bold Reports:

* Click the **Settings** option in the left-side panel of the Report Server and navigate to the `Email` tab, as shown in the following image.

    ![Email settings page](/static/assets/on-premise/images/settings/email-settings.png)

* Fill in the respective fields with the SMTP Server, SMTP port, Sender Name, Sender Email Address, Authentication Type, Username, and Password.

* After entering the email settings connection details, save the settings.

    ![Email settings page](/static/assets/on-premise/images/settings/email-settings2.png)