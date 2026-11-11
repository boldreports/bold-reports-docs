---
layout: post
title: Recommended Azure VM Size for Report Server | Bold Reports
description: Choose the recommended Azure VM series, CPU, memory, and storage to run the Bold Reports Report Server for test, development, and production environments.
platform: bold-reports
documentation: ug
---

# Recommended VM configuration to use Bold Reports<sup>®</sup> server on Microsoft Azure

The recommended VM configuration for the Bold Reports<sup>®</sup> Report Server on Microsoft Azure depends on your environment and traffic level. Selecting the correct VM configuration is crucial for optimal performance with Bold Reports<sup>®</sup>. For a complete list of VM types and sizes, see [Windows Virtual Machine Types](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes).

## VM types for test, development, and production environments

General Purpose Azure VMs suit the Bold Reports<sup>®</sup> Report Server in test and development environments. They also suit production environments that process low to medium levels of traffic data. For details on the sizes of General Purpose virtual machines, see the [General Purpose VM sizes](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes-general) guide.

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Component</span>
    </td>
     <td>
        <span style="font-weight:bold">Azure Virtual Machine</span>
    </td>
 </tr>
 <tr>
 <td> Recommended Series </td>
 <td> B, DCv2, Dv2, DSv2, Dv3, DSv3, Dav4, Dasv4 </td>
 </tr>
 <tr>
 <td> CPU </td>
 <td> 4+ vCPU </td>
 </tr>
 <td> Operating System </td>
 <td> Windows Server OS 2012 R2+ </td>
 </tr>
 <tr>
 <td> Memory </td>
 <td> 16+ GB RAM </td>
 </tr>
  <tr>
 <td> Storage </td>
 <td> 100 GB or larger volume for Bold Reports<sup>®</sup> server storage </td>
 </tr>
 </table>

> **Note:** You can also use the recommended configuration in the table for low-traffic production servers.

The Optimized VM type suits high-traffic and large data processing production environments. For details on Memory Optimized VM sizes, see the [Memory Optimized VM sizes](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes-memory) section.

## Recommended specifications for production environment

For high-traffic production environments, the Bold Reports<sup>®</sup> Report Server needs the following Azure VM specifications:

<table>
 <tr>
    <td>
       <span style="font-weight:bold">Component</span>
    </td>
     <td>
        <span style="font-weight:bold">Azure Virtual Machine</span>
    </td>
 </tr>
 <tr>
 <td> Recommended Series </td>
 <td> Dv2, DSv2, Ev3, Esv3, Eav4, Easv4, Edv4, Edsv4 </td>
 </tr>
 <tr>
 <td> CPU </td>
 <td> 16+ vCPU </td>
 </tr>
 <td> Operating System </td>
 <td> Windows Server OS 2012 R2+ </td>
 </tr>
 <tr>
 <td> Memory </td>
 <td> 64+ GB RAM </td>
 </tr>
  <tr>
 <td> Storage </td>
 <td> 100 GB or larger volume for Bold Reports<sup>®</sup> server storage </td>
 </tr>
 </table>

## Frequently asked questions

### Which Azure VM type should I use for a high-traffic production server?

Use the Optimized VM type for high-traffic and large data processing production environments.

### How much storage does the Bold Reports<sup>®</sup> server need on Azure?

Both recommended configurations list a 100 GB or larger volume for Bold Reports<sup>®</sup> server storage.

## See also

* [Prerequisites to deploy Bold Reports<sup>®</sup> on Azure](../prerequisites/)
* [Self-deploy a Bold Reports<sup>®</sup> Server on Microsoft Azure](../self-deploy-bold-reports-on-azure-vm/)
* [Bold Reports<sup>®</sup> in Microsoft Azure Marketplace](../bold-reports-in-azure-marketplace/)
