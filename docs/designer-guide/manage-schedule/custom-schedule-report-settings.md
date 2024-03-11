---
layout: post
title: Custom schedule settings | Report Server | Syncfusion
description: Explain about the custom schedule report settings and predefiend variable how schedules in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Custom schedule report settings

This section explains the custom schedule report settings to customize the `Schedule Template` and the `Predefined Variables`.

## Mail template customization

* The mail template defines the text that is sent via email to the Report Server user.

* Initially, the default template will be displayed in the mail template. If the custom password is enabled, the user can add a password hint to the mail template if necessary.

* And you can also customize the email template to your preference.
    ![Customize Email Template](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/customize-email-template.png)

## Mail template predefined variables

By selecting the variable, the scheduled user variable is directly assigned from the server to the mail template.
* {Full Name}: Full name of the recipient
* {First Name}: First name of the recipient
* {Last Name}: Last name of the recipient
* {Schedule Name}: Name of the schedule
* {Report Name}: Scheduled report name
* {Report Link}: Link to the scheduled report
* {Export Format}: The export file format that is chosen for the schedule
* {Date}: The date represents when the schedule was triggered
* {Organization Name}: The [Organization name](./../../../administrator-guide/custom-rebranding/#organization-name) is retrieved from the site settings