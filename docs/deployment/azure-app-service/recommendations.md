---
layout: post
title: Recommended Azure App Service Configuration | Bold Reports
description: Choose the recommended Azure App Service plan, CPU, memory, and storage for running Bold Reports in test, development, and production environments.
platform: bold-reports
documentation: ug
---

# Recommended Azure App service configuration to use Bold Reports<sup>®</sup> on the Microsoft Azure App service

The recommended Azure App Service configuration for Bold Reports<sup>®</sup> depends on whether you run a test, development, or production environment. For a complete list of Azure App Service plans, see the [Windows Azure App service plan](https://azure.microsoft.com/en-in/pricing/details/app-service/windows) pricing page.

Choose the correct Azure App Service configuration to get a better experience with Bold Reports<sup>®</sup>.

## Which Azure App Service plan should I use for each environment?

Bold Reports<sup>®</sup> can run on the basic service plan in a test or development environment. You can also use the same basic service plan for production if your app receives only low or medium-level traffic.

## What are the recommended specifications for test and development environments?

Bold Reports<sup>®</sup> test and development environments use the B3 App Service plan with the following specifications.

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Component</span>
    </td>
     <td>
        <span style="font-weight:bold">Azure App Service</span>
    </td>
 </tr>
 <tr>
 <td> App Service Plan </td>
 <td> B3 </td>
 </tr>
 <tr>
 <td> CPU </td>
 <td> 4+ vCPU </td>
 </tr>
 <td> Memory </td>
 <td> 7+ GB RAM </td>
 </tr>
 <tr>
 <td> Storage </td>
 <td> 10 GB or larger volume for Bold Reports<sup>®</sup> server storage </td>
 </tr>
 </table>

 > **NOTE:**  You can also use this recommended Azure App Service configuration for low-traffic production servers.

Use the Premium service plan in a high-traffic, large-data processing production environment. For more information about the Premium service plan, see [App service plans](https://azure.microsoft.com/en-in/pricing/details/app-service/windows/).

## What are the recommended specifications for the production environment?

Bold Reports<sup>®</sup> production environments use the P3v2 App Service plan with the following specifications.

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Component</span>
    </td>
     <td>
        <span style="font-weight:bold">Azure App Service</span>
    </td>
 </tr>
 <tr>
 <td> App Service Plan </td>
 <td> P3v2 </td>
 </tr>
 <tr>
 <td> CPU </td>
 <td> 4+ vCPU </td>
 </tr>
 <tr>
 <td> Memory </td>
 <td> 14+ GB RAM </td>
 </tr>
 <tr>
 <td> Storage </td>
 <td> 50 GB or larger volume for Bold Reports<sup>®</sup> server storage </td>
 </tr>
 </table>

## Frequently asked questions

### Can I use the B3 plan for production?

Yes. You can use the B3 configuration for low-traffic production servers. Use the Premium service plan for high-traffic, large-data processing production environments.

### How much storage does Bold Reports<sup>®</sup> need in production?

The recommended production configuration uses a 50 GB or larger volume for Bold Reports<sup>®</sup> server storage.

## See also

* [Prerequisites](./../prerequisites/)
* [Deploy Bold Reports<sup>®</sup> Azure web app using the ARM template](./../using-arm-template/)
* [Upgrade](./../upgrade/)
