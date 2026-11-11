---
layout: post
title: Deploy Report Server with Podman Compose | Bold Reports
description: Deploy Bold Reports On-Premises Edition with podman-compose. Check the hardware and software prerequisites and run Nginx as a reverse proxy container.
platform: report-platform
documentation: ug
---

# Deploying Bold Reports<sup>®</sup> in Podman

You can deploy Bold Reports<sup>®</sup> On-Premises Edition with podman-compose, with Nginx running in a separate container as a reverse proxy. Bold Reports<sup>®</sup> Podman can run on different Linux distributions.

## What do I need to deploy Bold Reports<sup>®</sup> on Podman?

To deploy Bold Reports<sup>®</sup> on Podman with podman-compose, your machine must meet the following hardware and software requirements.

### Hardware requirements

Bold Reports<sup>®</sup> on Podman needs the following hardware to run the Bold Reports<sup>®</sup> solution:

* **Operating System:** Bold Reports<sup>®</sup> Podman can run on different Linux distributions. Verified on the following operating systems:
    * Ubuntu 20.04 LTS
    * Cent OS 7
    * Windows
    * Red Hat Enterprise Linux (RHEL)
    * Alpine Linux
* **CPU:** 4-core.
* **Memory:** 16 GB RAM.
* **Disk Space:** 8 GB or more.

### Software requirements

Bold Reports<sup>®</sup> On-Premises Edition on Podman needs the following software:

* **Database:** Microsoft SQL Server 2012+ | PostgreSQL.
* **Application:** Podman.
* **Web Browser:** Microsoft Edge, Mozilla Firefox, Chrome and Apple Safari.

## How do I install Bold Reports<sup>®</sup> with podman-compose?

You deploy Bold Reports<sup>®</sup> using podman-compose. Nginx runs in a separate container as a reverse proxy to route traffic to the other containers. Follow the podman-compose deployment guide on GitHub to deploy Bold Reports<sup>®</sup>.

[Bold Reports<sup>®</sup> on Podman deployment guide](https://github.com/boldreports/bold-reports-docker/blob/master/docs/multiple-container-podman.md)

## Frequently asked questions

### Which databases does Bold Reports<sup>®</sup> support on Podman?

Bold Reports<sup>®</sup> on Podman supports Microsoft SQL Server 2012+ and PostgreSQL.

### What does Nginx do in the Podman deployment?

In the Bold Reports<sup>®</sup> podman-compose deployment, Nginx runs in a separate container as a reverse proxy that routes traffic to the other containers.

## See also

* [Deploy Bold Reports<sup>®</sup> on Docker](../deploy-on-docker/)
* [Deploy Bold Reports<sup>®</sup> on Kubernetes](../deploy-on-kubernetes/)
* [Deploy Bold Reports<sup>®</sup> on Linux](../deploy-on-linux/)
