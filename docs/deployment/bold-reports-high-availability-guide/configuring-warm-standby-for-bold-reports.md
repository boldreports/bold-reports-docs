---
layout: post
title: Configure a Warm Standby Report Server | Bold Reports
description: Set up a warm standby secondary server for Bold Reports Report Server to keep reports available and fail over when the primary server goes down.
documentation: ug
---

# Configuring Warm Standby for Bold Reports<sup>®</sup>

A warm standby setup for Bold Reports<sup>®</sup> keeps a secondary server ready to take over if the primary server fails. It provides high availability and business continuity for report access and generation.

The following sections cover the steps and considerations for setting up a Warm Standby environment for Bold Reports<sup>®</sup>.

## Purpose:

A Bold Reports<sup>®</sup> warm standby provides a reliable backup solution that minimizes downtime and ensures report access and generation during primary server outages.

## What is Warm Standby?

A Warm Standby is a backup server that remains operational and up to date with the primary server but does not actively handle requests unless a fail over occurs.

## How is a warm standby architecture set up?

A Bold Reports<sup>®</sup> warm standby architecture has a primary server, a secondary server, and a fail over mechanism.

* Primary Server: Actively handles all report generation and user requests.
* Secondary Server (Warm Standby): Receives regular synchronization updates from the primary server and remains ready to take over.
* Fail over mechanism: Can be manual or automated depending on the infrastructure setup.

## How do I set up a warm standby?

Set up a Bold Reports<sup>®</sup> warm standby by completing the following five steps in order.

### 1. Install Bold Reports<sup>®</sup> on the Secondary Server

Install Bold Reports<sup>®</sup> on the secondary server so it matches the primary server.

* Ensure the same version of Bold Reports<sup>®</sup> is installed on both the primary and secondary servers.
* Configure the secondary server with identical settings and dependencies.

### 2. Configure Data Synchronization

Keep the Bold Reports<sup>®</sup> secondary server up to date by synchronizing the following components:

* Report definitions
* User data and permissions
* Configuration files
* Database backups (if applicable)

### 3. Monitor Server Health

Monitor the Bold Reports<sup>®</sup> primary server so you know when a fail over is needed.

* Implement monitoring tools to track the primary server status.
* Configure alerts for failures or performance degradation.

### 4. Fail over Process

A Bold Reports<sup>®</sup> fail over can be manual or automated.

* Manual fail over: The administrator promotes the standby server by redirecting traffic and updating DNS or load balancer settings.
* Automated fail over: Use orchestration tools or scripts to detect failure and switch roles automatically.

### 5. Post Fail over Actions

After a Bold Reports<sup>®</sup> fail over, restore the primary server.

* Investigate and resolve the issue on the primary server.
* Resynchronize data and optionally revert roles once the primary server is restored.

## What are the best practices for a warm standby?

Follow these practices to keep a Bold Reports<sup>®</sup> warm standby reliable.

* Regularly test the fail over process.
* Keep both servers patched and updated.
* Document all configurations and changes.
* Use secure channels for data synchronization.

## Conclusion:

Implementing a warm standby setup for Bold Reports<sup>®</sup> enhances system resilience and ensures minimal disruption during server failures. With proper configuration and monitoring, organizations can maintain high availability and data integrity.

## Frequently asked questions

### Does the warm standby server handle requests?

No. The warm standby server stays up to date with the primary server but does not actively handle requests unless a fail over occurs.

### Do both servers need the same Bold Reports<sup>®</sup> version?

Yes. Install the same version of Bold Reports<sup>®</sup> on both the primary and secondary servers, with identical settings and dependencies.

## See also

* [High Availability in Bold Reports<sup>®</sup>](./../)
* [Scaling Bold Reports<sup>®</sup> using Multiple Replica Sets](./../scaling-multiple-replica-sets/)
* [High Availability in Windows using Shared Folder](./../set-up-a-high-availability-environment-in-windows-using-shared-folder-for-bold-reports/)
