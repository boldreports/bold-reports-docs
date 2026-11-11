---
layout: post
title: Upgrade Center for Kubernetes Deployments | Bold Reports
description: Use Upgrade Center to check for updates, validate the environment, upgrade Bold Reports on Kubernetes from the application, and roll back if needed.
platform: report-platform
documentation: ug
---

# Upgrade Center in Bold Reports<sup>®</sup>

Upgrade Center is an in-application upgrade experience for Bold Reports<sup>®</sup> deployments. Administrators can upgrade Bold Reports<sup>®</sup> from within the application instead of updating the deployment manually.

## What is Upgrade Center?

Upgrade Center helps administrators check for available product updates, review the target version, validate the environment, back up affected database tables, apply Kubernetes deployment image updates, monitor upgrade progress, and roll back when recovery is required.

Upgrade Center reduces manual upgrade steps and provides a single place to track the full upgrade operation. From the Upgrade Center UI, administrators can review:

* Stage-wise progress
* Validation results
* Complete operation logs
* Playwright HTML reports
* Cleanup status
* Upgrade history

## Which deployments support Upgrade Center?

Upgrade Center is currently supported for Kubernetes deployments only. To enable and use Upgrade Center, follow this guide:

* [Upgrade Center on Kubernetes](./upgrade-center-on-kubernetes/)

## Frequently asked questions

### Can I use Upgrade Center on Windows or Linux deployments?

No. Upgrade Center currently supports only Kubernetes deployments of Bold Reports<sup>®</sup>.

### Can I roll back an upgrade made with Upgrade Center?

Yes. Upgrade Center supports manual rollback and starts automatic rollback when an upgrade fails after changes are applied. For details, see [Upgrade Center on Kubernetes](./upgrade-center-on-kubernetes/).

## See also

* [Deploy Bold Reports<sup>®</sup> on Kubernetes](./../deploy-on-kubernetes/)
* [Upgrade Bold Reports<sup>®</sup> On-Premises Edition to the latest version](./../upgrade/on-premises/upgrade-bold-reports-to-latest-version/)
