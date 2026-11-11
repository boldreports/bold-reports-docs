---
layout: post
title: Deploy Report Server to Cloud with Terraform | Bold Reports
description: Deploy Bold Reports on AKS, EKS, ECS, or GKE with prebuilt Terraform scripts that provision networking, PostgreSQL, storage, and a load balancer for you.
platform: report-platform
documentation: ug
---

# Deploying Bold Reports<sup>®</sup> on Cloud Platforms Using Terraform

You can deploy Bold Reports<sup>®</sup> to cloud container services on Azure, AWS, and Google Cloud with prebuilt Terraform scripts. The scripts provision networking, a PostgreSQL database, storage and a load balancer, then deploy Bold Reports<sup>®</sup> without manual steps.

## What is Terraform?

Terraform is an open-source Infrastructure as Code (IaC) tool from HashiCorp that you can use to deploy Bold Reports<sup>®</sup> on cloud platforms. With Terraform, you define and manage cloud infrastructure in a high-level configuration language called HCL (HashiCorp Configuration Language). You describe the desired state of resources such as servers, storage, and networking. Terraform then provisions and manages them automatically across multiple cloud providers like AWS, Azure, and Google Cloud.

## Why use Terraform to deploy Bold Reports<sup>®</sup>?

Terraform gives Bold Reports<sup>®</sup> deployments the following key advantages:

* **Automation:** Eliminates manual configuration and reduces human error.
* **Consistency:** Ensures identical infrastructure deployments across environments.
* **Repeatability:** Reuse your Terraform scripts for multiple deployments.
* **Version Control:** Track infrastructure changes over time using Git or other tools.

## How do I deploy Bold Reports<sup>®</sup> with Terraform?

You deploy Bold Reports<sup>®</sup> to cloud container services on **Azure**, **AWS**, and **Google Cloud** using the prebuilt Bold Reports<sup>®</sup> Terraform scripts. The scripts support both Kubernetes and ECS-based environments.

## Which components does Terraform provision automatically?

The Bold Reports<sup>®</sup> Terraform scripts automatically provision the following components:

* **Networking:** VPCs, subnets, and related resources.
* **Container Orchestration:**
    * Kubernetes: AKS, EKS, or GKE.
    * ECS: EC2 or Fargate launch types.
* **Database:** PostgreSQL.
* **Cloud Storage:** Used for Bold Reports<sup>®</sup> application data.
* **Load Balancer:** For external access to the application.

Terraform simplifies what would otherwise be a complex, multi-step manual process.

### What does the Terraform script do?

The Bold Reports<sup>®</sup> Terraform script performs the following tasks:

* Provisions all required infrastructure.
* Deploys Bold Reports<sup>®</sup> to the selected environment (for example, Kubernetes or ECS).
* Applies necessary configurations for storage, database, and networking.

### What is the deployment outcome?

After the script runs, Bold Reports<sup>®</sup> is fully deployed and accessible without any manual steps. The environment is production-ready with high availability and scalability.

### Which cloud platforms are supported?

You can deploy Bold Reports<sup>®</sup> using Terraform on the following cloud platforms:

* [Azure Kubernetes Service (AKS)](https://github.com/boldreports/bold-reports-terraform-scripts/blob/master/azure-aks/README.md)
* [Amazon Elastic Kubernetes Service (EKS)](https://github.com/boldreports/bold-reports-terraform-scripts/blob/master/aws-eks/README.md)
* [Amazon Elastic Container Service (ECS)](https://github.com/boldreports/bold-reports-terraform-scripts/blob/master/aws-ecs/README.md)
* [Google Kubernetes Engine (GKE)](https://github.com/boldreports/bold-reports-terraform-scripts/blob/master/gcp-gke/README.md)

Each platform link contains platform-specific deployment instructions and prerequisites.

## Frequently asked questions

### Which database does the Bold Reports<sup>®</sup> Terraform script provision?

The Bold Reports<sup>®</sup> Terraform scripts provision a PostgreSQL database.

### Which ECS launch types are supported?

The Bold Reports<sup>®</sup> Terraform scripts support the EC2 and Fargate launch types for ECS.

## See also

* [Deploy Bold Reports<sup>®</sup> on Kubernetes](../deploy-on-kubernetes/)
* [Deploy Bold Reports<sup>®</sup> on Docker](../deploy-on-docker/)
* [Deploy Bold Reports<sup>®</sup> on AWS](../deploy-on-aws/)
