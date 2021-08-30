---
layout: post
title: Custom schedule settings | Report Server | Syncfusion
description: Explain about the custom schedule report settings and predefiend variable how schedules in the Bold Reports On-Premise.
platform: report-platform
documentation: ug
---

# Custom schedule report settings

This section explain about custom schedule report settings to customize the `Schedule Template` and about `Predefiend Variable`.

## Mail template customization

* Mail template define the text which is sent via email to the report server user.
* Initially the default template will displayed in the mail template and if the custom password is enable the user can add the password hint in the mail template if necessary
* And also you can customize the email template with your preference.
![Customize Email Template](/static/assets/on-premise/images/manage-schedule/manage-report-schedules/customize-email-template.png)

## Mail template predefined variables

By selecting the variable the scheduled user variable is assigned directly from the server to the mail template
* {Full Name}: Full name of the recipient
* {First Name}: First name of the recipient
* {Last Name}: Last name of the recipient
* {Schedule Name}: Name of the schedule
* {Report Name}: Scheduled report name
* {Report Link}: Link to the scheduled report
* {Export Format}: Export file format which is chosen the schedule
* {Date}: Date represents when the schedule triggered
* {Organization Name}: [Organization name](./../../../administrator-guide/custom-rebranding/#organization-name) is retrieved from the site setting