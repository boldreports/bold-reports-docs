---
layout: post
title: Deploy Report Server on Amazon ECS Fargate | Bold Reports
description: Deploy Bold Reports on Amazon ECS as a single container or multi-container setup, using Fargate or EC2 launch types and persistent volumes with Amazon EFS.
platform: report-platform
documentation: ug
---

# Deploy Bold Reports<sup>®</sup> on Amazon ECS

You can host Bold Reports<sup>®</sup> on Amazon ECS by using a single-container deployment or a multi-container deployment. Choose a single-container deployment for simple installations or a multi-container deployment for production environments. Additional guidance covers configuring persistent storage.

1. [Single-Container Deployment](#single-container-deployment)

2. [Multi-Container Deployment](#multi-container-deployment)

## Single-Container Deployment

A single-container deployment runs Bold Reports<sup>®</sup> as one container on an ECS Fargate cluster with an Application Load Balancer. Use the following guide:

* [Deploy Bold Reports<sup>®</sup> on an ECS Fargate Cluster Using an Application Load Balancer](https://support.boldreports.com/kb/article/14105/deploy-bold-reports-on-an-ecs-fargate-cluster-using-an-application-load-balancer)

## Multi-Container Deployment

A multi-container deployment runs Bold Reports<sup>®</sup> using a multi-container architecture on ECS. Use the guide for your launch type:

* [ECS Multi-Container Deployment - Fargate Launch Type](https://support.boldreports.com/kb/article/17418/ecs-multi-container-deployment---fargate-launch-type)

* [ECS Multi-Container Deployment - EC2 Launch Type](https://support.boldreports.com/kb/article/18758/ecs-multi-container-deployment---ec2-launch-type)

## How do I configure a persistent volume on ECS?

Bold Reports<sup>®</sup> on ECS stores application data on persistent storage that you configure with Amazon EFS. Use the following guide:

* [How to Mount a Persistent Volume for App Data in Amazon AWS ECS Service](https://support.boldreports.com/kb/article/14112/how-to-mount-a-persistent-volume-for-app-data-in-amazon-aws-ecs-service)

## Frequently asked questions

### Should I use a single-container or multi-container deployment?

Use a single-container deployment of Bold Reports<sup>®</sup> for simple installations. Use a multi-container deployment for production environments.

### Which ECS launch types does the multi-container deployment support?

The multi-container guides cover the Fargate launch type and the EC2 launch type.

## See also

* [Prerequisites to deploy Bold Reports<sup>®</sup> on AWS](../prerequisites/)
* [Self-deploy a Bold Reports<sup>®</sup> Server on an AWS instance](../self-deploy-bold-reports-server-on-amazon-web-service/)
* [Deploying Bold Reports<sup>®</sup> in AWS](../)
