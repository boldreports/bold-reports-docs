---
layout: post
title: Deploy Report Server on Kubernetes Clusters | Bold Reports
description: Check the Kubernetes system requirements and deploy Bold Reports Enterprise Edition on EKS, GKE, AKS, ACK, or an on-premises Kubernetes cluster with Helm.
platform: report-platform
documentation: ug
---

# Deploying Bold Reports<sup>®</sup> in Kubernetes

You can deploy Bold Reports<sup>®</sup> on a Kubernetes cluster on either cloud or on-premises infrastructure. Check the system requirements on this page, then follow the deployment guide.

## What are the Kubernetes system requirements?

Bold Reports<sup>®</sup> on Kubernetes needs the following cluster, tools, nodes, storage, browser, and database:

* **Kubernetes Cluster: Kubernetes Version – 1.29+**
    * Amazon Elastic Kubernetes Service (EKS) | Google Kubernetes Engine (GKE) | Microsoft Azure Kubernetes Service (AKS) | Alibaba Cloud Kubernetes (ACK) | On-Premises Cluster.

* **CLI:**
    * Kubectl (installation required).
    * AWS CLI | Azure CLI | Google Cloud CLI | Oracle CLI | Alibaba Cloud CLI.

* **Load Balancer:** NLB(Nginx | Istio) | ALB.
* **Package Manager:** Helm.
* **Node Type & Configuration:**
    * OS – Ubuntu.
    * Minimum Node Count – 2.
    * Node Configuration: 4-Core and 16 GB.
    * Node Disk - 20 GB.
* **File Storage:**
    * 10 GB or more of storage for the Bold Reports<sup>®</sup> server, with support for ReadWriteMany access mode.
    * AWS File Share | Azure File Share (NFS) | GCP File Store | Alibaba File System | Oracle File Storage.

* **Web Browser:** Microsoft Edge | Mozilla Firefox | Chrome | Apple Safari.
* **Database:** PostgreSQL 13.0+ | Microsoft SQL Server 2016+ | MySQL 8.0+ | Oracle Database 19c+.

### How do I install Bold Reports<sup>®</sup> on Kubernetes?

Bold Reports<sup>®</sup> can be deployed on a Kubernetes cluster. You can create the Kubernetes cluster on either cloud or on-premises infrastructure. After you create the cluster, use the following guide to deploy Bold Reports<sup>®</sup> on Kubernetes in a specific cloud or on-premises environment.

[Bold Reports<sup>®</sup> on Kubernetes](https://github.com/boldreports/bold-reports-kubernetes/tree/master)

## Frequently asked questions

### Which Kubernetes version does Bold Reports<sup>®</sup> need?

Bold Reports<sup>®</sup> needs Kubernetes version 1.29 or later.

### What file storage does Bold Reports<sup>®</sup> need on Kubernetes?

Bold Reports<sup>®</sup> needs 10 GB or more of storage for the server, with support for ReadWriteMany access mode.

## See also

* [Deploy Bold Reports<sup>®</sup> on Docker](./../deploy-on-docker/)
* [Deploy Bold Reports<sup>®</sup> on Google Cloud Platform](./../deploy-on-google-cloud-platform/)
* [Deploy Bold Reports<sup>®</sup> on Linux](./../deploy-on-linux/)
