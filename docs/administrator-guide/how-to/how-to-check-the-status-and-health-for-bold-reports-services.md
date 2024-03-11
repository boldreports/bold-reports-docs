---
layout: post
title: To perform Status and Health Check in Bold Reports Services.
description: This documentation explains regarding the status check and the health check of the bold reports services.
keywords: report-platform
documentation: ug
---

# A Guide to Effective Status Verification and Health Check  

Status check and health check are two common practices in the field of software development to ensure the proper functioning and reliability of a system or application. While they serve similar purposes, there are some differences in their implementation and scope.  

## How to perform status check for all services

A status check is a lightweight process that verifies the availability and responsiveness of a application. It typically involves sending a simple request to the services and checking for a valid response. The main goal of a status check is to determine whether all services are up and running or having any down services.

`https://{Domain_name}/status`

When you enter the provided URL in a web browser, you will be directed to a page designed to give you an overview of the Current status of the reports services.

![Status Check](/static/assets/on-premise/images/how-to/status-check.png)

## How to perform health check for individual service

Health checks are more comprehensive than status checks and aim to assess the overall health and functionality of a application. They go beyond basic availability and probe various components to ensure they are operating correctly. By accessing the specific URLs provided in the below table, you can assess the health and operational status of each service.

<table>
  <tr>
    <th>Services</th>
    <th>Main Application</th>
    <th>Sub Application</th>
  </tr>
  <tr>
    <td>Identity Provider Web</td>
    <td>https://{Domain_name}/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/health-check</td>
  </tr>
  <tr>
    <td>Identity Provider API</td>
    <td>https://{Domain_name}/api/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/api/health-check</td>
  </tr>
  <tr>
    <td>Tenant Management Web</td>
    <td>https://{Domain_name}/ums/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/ums/health-check</td>
  </tr>
   <tr>
    <td>Windows Authentication</td>
    <td>https://{Domain_name}/windowsauthentication/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/windowsauthentication/health-check</td>
  </tr>
  <tr>
    <td>Reporting Web</td>
    <td>https://{Domain_name}/reporting/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/reporting/health-check</td>
  </tr>
   <tr>
    <td>Reporting API</td>
    <td>https://{Domain_name}/reporting/api/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/reporting/api/health-check</td>
  </tr>
  <tr>
    <td>Reporting Jobs</td>
    <td>https://{Domain_name}/reporting/jobs/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/reporting/jobs/health-check</td>
  </tr>
  <tr>
    <td>Report Designer Service</td>
    <td>https://{Domain_name}/reporting/reportservice/health-check</td>
    <td>https://{Domain_name}/{Sub_application_name}/reporting/reportservice/health-check</td>
 </tr> </table>

 **Main Application**: The application (Bold Reports Server) which is deployed primarily when we installed is called the main application. It provides the core functionality delivering the primary features and services that users expect.

 **Sub-Application**: The application (Bold Reports Server) is deployed within another application is referred here as sub-application. Refer to the following [link](../deploy-boldreports-server-as-subapplication-in-windows-environment/) to learn how to deploy Bold Reports Server as a sub application.