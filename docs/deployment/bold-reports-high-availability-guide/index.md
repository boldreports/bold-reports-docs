---
layout: post
title: High Availability Options for Report Server | Bold Reports
description: Configure high availability for Bold Reports Report Server with a Windows shared folder, multiple Kubernetes replica sets, or a warm standby server.
platform: bold-reports
documentation: ug
---

# High Availability in Bold Reports<sup>®</sup>

High Availability (HA) in Bold Reports<sup>®</sup> ensures continuous service availability by eliminating single points of failure. It enables your reporting server to remain accessible even during server outages or failures.

Bold Reports<sup>®</sup> supports multiple High Availability deployment models based on infrastructure requirements and scalability needs.

## Supported High Availability Configurations:

Bold Reports<sup>®</sup> supports the following High Availability deployment models:

* [High Availability in Windows using Shared Folder](./set-up-a-high-availability-environment-in-windows-using-shared-folder-for-bold-reports/)
* [Scaling Bold Reports<sup>®</sup> using Multiple Replica Sets](./scaling-multiple-replica-sets/)
* [Configuring Warm Standby for Bold Reports<sup>®</sup>](./configuring-warm-standby-for-bold-reports/)

## What should I plan for in a high availability architecture?

Each Bold Reports<sup>®</sup> HA configuration requires proper load balancer configuration, database redundancy, and storage planning. See the respective setup guide for detailed steps and architecture diagrams.

## See also

* [Deploy on Kubernetes](./../deploy-on-kubernetes/)
* [Deploy on Docker](./../deploy-on-docker/)
