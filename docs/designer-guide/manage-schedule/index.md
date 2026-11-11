---
layout: post
title: Schedule Report Delivery in Report Server | Bold Reports
description: Schedule reports in Bold Reports Report Server to email them to users automatically, with recurring, data-driven, and custom per-schedule report settings.
platform: report-platform
documentation: ug
---

# Manage report schedules in Bold Reports<sup>®</sup> Report Server

**Scheduling** in Bold Reports<sup>®</sup> automates sending reports to users via email at specific times, so recipients receive up-to-date reports without needing to open the Report Server manually. Users with the necessary permissions can create, edit, or delete schedules on the Bold Reports<sup>®</sup> Report Server.

The following sections introduce schedules and link to the detailed pages for managing them.

## What is a schedule?

A schedule in the Bold Reports<sup>®</sup> Report Server defines when and how often a report is generated and delivered by email, along with any data-driven variations in its recipients or parameters. Once created, a schedule runs automatically on the Report Server without further manual action, until a user with the necessary permission edits or deletes it.

### What can I do with scheduling?

Scheduling in the Report Server lets you automate report delivery in the following ways:

* Send a report to one or more recipients automatically at a specific time.
* Repeat delivery on a recurring basis using schedule settings.
* Vary recipients or parameter values per run using a data-driven schedule.
* Customize schedule-specific report settings independently of the report's regular settings.

## What are the key features of report scheduling?

Report scheduling in the Bold Reports<sup>®</sup> Report Server offers the following key features:

* **Automated email delivery**: Send a report to its recipients by email at a specific time, without requiring anyone to open the Report Server.
* **Recurring schedule settings**: Configure a schedule to repeat on a recurring basis, so reports keep arriving without being recreated each time.
* **Data-driven schedules**: Vary a schedule's recipients or parameter values per run, based on an underlying dataset.
* **Custom per-schedule report settings**: Apply report settings that take effect only when the report runs on a schedule, separate from its regular on-demand settings.

## What are common use cases for scheduling?

Teams use Report Server schedules for the following common use cases:

* **Delivering a daily or weekly summary report**: Schedule a recurring report so stakeholders receive an up-to-date summary automatically each day or week.
* **Sending personalized reports to different recipients**: Use a data-driven schedule to send each recipient a report filtered or parameterized for their own data.
* **Automating month-end or quarter-end reporting**: Set up a recurring schedule aligned to a reporting period, so period-end reports go out without manual intervention.
* **Reducing manual report distribution work**: Replace manual exporting and emailing of reports with an automated schedule that delivers them consistently.

## Who should use this guide?

The Report Server scheduling guide is intended for:

* Administrators and report authors setting up automated report delivery.
* Business users who need to receive reports on a recurring basis without logging in.
* Anyone configuring data-driven or custom schedule settings.

## What do I need before I create a schedule?

Before you create a schedule in the Report Server, make sure you have:

* Permission to create, edit, or delete schedules on the Report Server.
* A published report and a valid list of recipient email addresses.

## What are the considerations and limitations?

Report Server schedules have the following considerations and limitations:

* Only users with the necessary permissions can create, edit, or delete schedules.
* A data-driven schedule depends on an underlying dataset to supply varying recipients or parameter values.
* Custom schedule report settings apply only to the schedule they're configured on, not to the report's regular on-demand settings.

## FAQ

### Who can create or edit a schedule?

Only users with the necessary permissions on the Bold Reports<sup>®</sup> Report Server can create, edit, or delete schedules.

### Can a schedule send different reports or parameters to different recipients?

Yes. A data-driven schedule in the Report Server varies recipients or parameter values based on an underlying dataset.

### Can I customize report settings just for a schedule?

Yes. See Custom Schedule Report Settings, linked below, for configuring settings that apply only when the report runs on a schedule.

### Where do I configure how often a schedule runs?

See Schedule Settings, linked below, for configuring recurrence and delivery timing.

## How do I get help with scheduled reports?

If a scheduled report from the Report Server isn't arriving as expected, verify the schedule's recipients and recurrence settings. You can also see the related sections below for data-driven and custom schedule configuration.

You can learn more about schedules in the following sections:

* [Manage Report Schedules](./../manage-schedule/manage-reports-schedule/) for the step-by-step process of creating, editing, and deleting a schedule.

* [Data Driven Schedule](./../manage-schedule/data-driven-schedule/) to vary recipients or parameter values per run, based on an underlying dataset.

* [Schedule Settings](./../manage-schedule/schedule-report-settings/) to configure how often a schedule runs and when delivery happens.

* [Custom Schedule Report Settings](./../manage-schedule/custom-schedule-report-settings/) to apply report settings that take effect only when the report runs on a schedule.
