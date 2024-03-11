---
layout: post
title: Bold Reports Azure App deployment using the ARM Template
description: This topic describes how to deploy the Bold Reports Azure App Service in the Microsoft Azure using the ARM template.
platform: report-platform
documentation: ug
---

# Create a Bold Reports Azure App Service using the ARM template

To deploy the Bold Reports Azure web app using the ARM template, follow these steps:

> **Note:** In Bold Reports, Azure App Service exclusively supports Blob storage.

1. Log in to the [Azure portal](https://portal.azure.com/).

2. Click **Create a resource** from the top menu.
   ![New in Azure portal](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/new-template.png)

3. Search `Template deployment` in the marketplace and select it.
   ![Search Template deployment option](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/search-template.png)

4. Click **Create**.
   ![Create Template deployment](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/create-template.png)

5. Now, choose **Build your own template in the editor** within the Custom Deployment window.
   ![Build your own template in the editor option](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/build-your-own-template.png)

6. [Click here](https://raw.githubusercontent.com/boldreports/bold-reports-azure/master/armtemplates/v5.4.30/BoldReportsAppServiceTemplate.json)  to download the ARM template file.

7. Copy all the contents in the template file and replace them in the Edit template window, and then click **Save**.
   ![Edit the template and replace the template](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/edit-template.png)

8. Fill in the details as instructed in the following to complete the deployment steps.
    * **Subscription**: select the Azure subscription that you have. For more information about subscriptions, visit this [link](https://blogs.msdn.microsoft.com/arunrakwal/2012/04/09/create-windows-azure-subscription/).

    * **Resource group**: This is a logical group in Azure to group your resources like web apps, storage accounts, networks, etc. Learn more about resource groups from [here](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview#resource-groups).

    * **Location**: Choose the location to deploy the app. The **East US** is our recommended location.

    * **Web App name**: This is the name of the Report Server that you want to use in the URL. Since it will be the URL, it must be globally unique. If the chosen name is already in use, the deployment process will fail, and you will need to restart with another unique name.

    * **Storage account name**: This field is mandatory for Blob storage and must be unique, similar to the Web App name. You can learn more about storage accounts [here](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview).

    * **Storage account type**: This field is mandatory for Blob storage. Learn more about storage account types [here](https://learn.microsoft.com/en-us/azure/storage/blobs/object-replication-overview).

      > **Note:** The Web App name and Storage account name should be in lowercase only.

9. Click `Create` to initiate the deployment of the Bold Reports On-Premise Web App.
   ![Fill app service details](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/custom-template-details-form.png)

   ![Fill app service details](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/custom-template-details-form2.png)

   Now, the deployment of the Bold Reports Multi-tenant App Service (Web App) is getting started.

   > **Note:** The deployment process is expected to take around 15 minutes to complete.

   The App Service plan for the Bold Reports On-Premise Web App is automatically created, defaulting to `Basic – B1`. Learn more about App Service plans [here](https://docs.microsoft.com/en-us/azure/app-service/azure-web-sites-web-hosting-plans-in-depth-overview). Please note that Bold Reports On-Premise does not support free or shared App Service plans.

   Bold Reports On-Premise is compatible with basic, standard, and premium App Service plans in Azure. The recommended minimum App Service plan for optimal application performance is the basic plan.

   For improved performance, consider scaling up the App Service plan from basic to standard or premium. Refer to the following documentation links to learn how to scale up and scale out the App Service plan.

   [Scale up an app in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/manage-scale-up)

   [Scale out an app in Azure App Service](https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-get-started)

## Configure a new Bold Reports

Configure the Bold Reports multi-tenant Azure App Service by following these steps:

1. Select the `Login to activate account`.
   ![Proceed to Setup](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/proceed-to-setup-button.png)

2. Provide the [user details](../../../application-startup/#new-user---system-administrator) designating this user as an admin for Bold Reports, and then click `Next`.
   ![Admin Details](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/admin-details.png)

   > If you wish to migrate your Syncfusion Report Server Azure app service(`v4.x`) data or Bold Reports Azure app service version(`v1.x`) data to Bold Reports Multi-tenant Azure App Service, please note that while configuring the admin details, you must use the admin email ID associated with Syncfusion Reports Server or Bold Reports Server (Single Tenant).
3. Provide your [Database details](../../../application-startup/#database-configuration) which are essential for maintaining your reports, users, and their access permissions, and then click `Next`.
   ![Report Server Database Configuration](/static/assets/on-premise/images/installation-and-deployment/azure-deployment/app-service-using-arm-template/report-server-database-configuration.png)

4. After the configuration is complete, you will be able to navigate to sites or the reports page upon successful login.