---
layout: post
title: Restarting Bold Reports Enterprise in the On-Premise Edition
description: Within this section, instructions are provided for restarting the Bold Reports Enterprise application in the On-Premise Edition
platform: report-platform
documentation: ug
keywords: boldreports
canonical: ''
---
# Restart Application

Please refer to your hosting environment’s documentation for how to restart the Bold Reports Enterprise application.

* [Windows](#windows)
* [Linux](#linux)
* [Kubernetes](#kubernetes)
* [Docker](#docker)
* [Azure App Service](#azure-app-service)

## Windows

1. Open the IIS Manager and use the site’s dropdown to find the Bold Reports Enterprise app.

    ![iis-site](/static/assets/on-premise/images/faq/iis-site.png)

2. In Manage Website in the IIS Manager, you can restart the application.

    ![iis-manager-restart](/static/assets/on-premise/images/faq/iis-manager-restart.png)

    > **Note**: If the Bold Reports Enterprise and Bold BI Embedded apps are installed with a common login, the site name will be `BoldAppsEnterpriseEdition`.

## Linux

1. Please run the following command to restart all the Bold Reports services.

   ```sh
   sudo systemctl restart bold-*
   ```

2. Please run the following command to restart the specific service in Bold Reports.

   ```sh
   sudo systemctl restart bold-id-web.service - IDP Web service
   ```

   ```sh
   sudo systemctl restart bold-id-api.service - IDP API service
   ```

   ```sh
   sudo systemctl restart bold-ums-web.service - UMS Web service
   ```

   ```sh
   sudo systemctl restart bold-reports-web.service - Reports Web service
   ```

   ```sh
   sudo systemctl restart bold-reports-api.service - Reports API service
   ```

   ```sh
   sudo systemctl restart bold-reports-jobs.service - Reports Web job service
   ```

   ```sh
   sudo systemctl restart bold-reports-service.service - Reports service
   ```

   ```sh
   sudo systemctl restart bold-reports-viewer.service - Reports Viewer service
   ```

## Kubernetes

1. Please run the following command to restart all the Bold Reports services.

   ```sh
   kubectl rollout restart deploy -n {namespace}
   ```

2. Please run the following command to restart the specific service in Bold Reports.

   ```sh
   kubectl rollout restart deployment/id-web-deployment -n {namespace} - IDP Web service
   ```

   ```sh
   kubectl rollout restart deployment/id-api-deployment -n {namespace} - IDP API service
   ```

   ```sh
   kubectl rollout restart deployment/id-ums-deployment -n {namespace} - UMS Web service
   ```

   ```sh
   kubectl rollout restart deployment/reports-web-deployment -n {namespace} - Reports Web service
   ```

   ```sh
   kubectl rollout restart deployment/reports-api-deployment -n {namespace} - Reports API service
   ```

   ```sh
   kubectl rollout restart deployment/reports-jobs-deployment -n {namespace} - Reports Web job service
   ```

   ```sh
   kubectl rollout restart deployment/reports-reportservice-deployment -n {namespace} - Reports service
   ```

   ```sh
   kubectl rollout restart deployment/reports-viewer-deployment -n {namespace} - Reports Viewer service
   ```

## Docker

1. Please run the following command to restart all the Bold Reports services.

   ```sh
   docker restart {container name}
   ```

## Azure App Service

1. Go to the Azure Portal home page and choose App Services.

    ![azure-home-page](/static/assets/on-premise/images/faq/azure-app-home-page.png)

2. Select the hosted Bold Reports Enterprise application and use `Restart` like in the following.

    ![azure-app-restart](/static/assets/on-premise/images/faq/Azure-app-restart.png)