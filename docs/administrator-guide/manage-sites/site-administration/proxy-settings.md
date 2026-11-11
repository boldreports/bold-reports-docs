---
layout: post
title: Configure Reverse Proxy Settings in UMS | Bold Reports
description: Configure the site or proxy URL in the Bold Reports User Management Server to route traffic through a reverse proxy and manage SSL certificate validation.
platform: report-platform
documentation: ug
---

# Configure reverse proxy settings in Bold Reports<sup>®</sup>

You can configure proxy settings in the Bold Reports<sup>®</sup> application to route traffic through a specified proxy server.

## What is a Reverse Proxy?

A **reverse proxy** is a server that sits between client devices and your backend application servers, such as Bold Reports<sup>®</sup>. It receives incoming requests from clients and forwards them to the appropriate internal server. After the internal server responds, the reverse proxy sends the response back to the client.

## How do I configure the proxy URL?

To configure the proxy URL in Bold Reports<sup>®</sup>, set the protocol and the domain:

* Choose either `http` or `https` for the protocol based on your certificate configuration.
* In the **Site or Proxy URL** field, enter your desired domain (e.g., **example.com** or **localhost:55981**).

   ![License Update Settings](/static/assets/on-premise/images/tenant-management/site-management/proxy-settings-ui.png)

## Which proxy options are available?

The Bold Reports<sup>®</sup> proxy settings include the following options.

### Update the URL of the sites

* Enable this checkbox to automatically update the URL for all Bold Reports<sup>®</sup> sites that are deployed using the same domain.

   ![Update URL](/static/assets/on-premise/images/tenant-management/site-management/update-url.png)

### Ignore SSL Certificate Validation

* If your environment does not have a valid SSL certificate, you can check **Ignore the SSL certificate validation errors** in Bold Reports<sup>®</sup>.
* This option helps in development or internal environments without a trusted certificate authority.

   ![Ignore SSL](/static/assets/on-premise/images/tenant-management/site-management/ignore-ssl.png)

#### Notes

* Use **https** only if a valid SSL certificate is configured.
* After the proxy settings are updated, you need to **restart IIS** for the changes to take effect.

> To set up Bold Reports<sup>®</sup> to work securely through an Nginx reverse proxy, follow the step-by-step guide. It explains how to deploy Bold Reports<sup>®</sup> on different platforms and connect it through a Linux-based reverse proxy. See the [KB article on deploying Bold Reports<sup>®</sup> with a reverse proxy](https://support.boldreports.com/kb/article/20447/bold-reports-deployment-using-reverse-proxy-setup).

## Frequently asked questions

### Do I need to restart anything after changing proxy settings?

Yes. After the proxy settings are updated, you need to **restart IIS** for the changes to take effect.

### When should I ignore SSL certificate validation?

Ignore SSL certificate validation only if your environment does not have a valid SSL certificate, such as development or internal environments without a trusted certificate authority.

## See also

* [Known domain configuration](./../configuration/)
* [Email settings](./../email-settings/)
* [Site administration overview](./../)
