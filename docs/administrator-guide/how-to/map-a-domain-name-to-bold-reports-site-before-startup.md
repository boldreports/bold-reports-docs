---
title: Map a domain name to the Bold Reports site before startup
description: This documentation explains how to map a domain name to the Bold Reports site before application startup on Bold Reports Enterprise Reporting.
keywords: report-platform, reporting
---

# How to map a domain name for Bold Report Enterprise Reporting before startup

Before configuring the Bold Reports On-Premise Edition, you must change the Bold Reports URL in `Config.xml` file of Bold Reports On-Premise Edition.

The following steps to change the Bold Reports URL:

1. Go to the deployed location and update the new binding values in following configuration files.

   >By default, Bold Reports will be deployed on C:\BoldServices.

   * Update the **`InternalAppUrls`** value in config file in below location  
**`{Deployed Location}`**\app_data\configuration\config.xml  
![IDP Config File](/static/assets/on-premise/images/getting-started/boldservice-config.png)
2. Restart the site in IIS and browse the site. Configure the Bold Reports On-Premise Edition startup by referring this [link](../../application-startup/).
