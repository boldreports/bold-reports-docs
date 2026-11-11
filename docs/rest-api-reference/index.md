---
layout: post
title: Report Server REST API Versions and Endpoints | Bold Reports
description: Find the Bold Reports Report Server REST API versions v1.0 to v5.0, the API path format, and Try It Now links for managing users, groups, and items.
platform: report-platform
documentation: ug
---

# Bold Reports<sup>®</sup> Report Server REST API

Using the Bold Reports<sup>®</sup> on-premises REST API, you can manage and change resources programmatically via HTTP. The API provides access to the functionality behind the resources in Bold Reports<sup>®</sup>.

> **Important:** Starting with the next release planned for **November 2026**, REST API versions **v1.0 through v4.0** will be deprecated and no longer supported. All existing integrations and API requests must be migrated to **v5.0**, which will be the only supported REST API version going forward. We recommend updating your applications and integrations to use **v5.0** before upgrading to avoid service disruption.

## What can I do with the Report Server REST API?

The Bold Reports<sup>®</sup> REST API lets you create custom applications or script interactions with Bold Reports<sup>®</sup> resources.

## What is the REST API path?

For Bold Reports<sup>®</sup> Enterprise, use the following API path: `https://{Domain}/reporting/api/site/{TenantIdentifier}/{ApiEndpoint}`.

For example, `https://adhoc.boldreports.com/reporting/api/site/demo/token`.

## API Versions

Bold Reports<sup>®</sup> Report Server provides REST API versions v1.0 through v5.0. Each version has an API reference and a Try It Now page.

<table>
<tr>
    <td>
       <span style="font-weight:bold">API References</span>
    </td>
    <td>
        <span style="font-weight:bold">Try It Now</span>
    </td>
    <td>
        <span style="font-weight:bold">Description</span>
     </td>
  </tr>
  <tr>
    <td>
        <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/server-api-reference/" target="_blank">REST API v1.0</a>
    </td>
    <td>
        <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v1.0/try-it-now/" target="_blank">Try It Now v1.0</a>
    </td>
    <td>
        Manage (retrieve, add, update, and delete) groups and users in your Bold Reports<sup>®</sup> site.
    </td>
  </tr>
  <tr>
    <td>
        <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v2.0/server-api-reference/" target="_blank">REST API v2.0</a>
    </td>
    <td>
        <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v2.0/try-it-now/" target="_blank">Try It Now v2.0</a>
    </td>
    <td>
        Manage groups and items in your Bold Reports<sup>®</sup> site.
    </td>
  </tr>
  <tr>
    <td>
        <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v3.0/server-api-reference/" target="_blank">REST API v3.0</a>
    </td>
    <td>
        <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v3.0/try-it-now/" target="_blank">Try It Now v3.0</a>
    </td>
    <td>
        Manage items in your Bold Reports<sup>®</sup> site.
    </td>
  </tr>
  <tr>
    <td>
        <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v4.0/server-api-reference/" target="_blank">REST API v4.0</a>
    </td>
    <td>
        <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v4.0/try-it-now/" target="_blank">Try It Now v4.0</a>
    </td>
    <td>
        Manage items in your Bold Reports<sup>®</sup> site.
    </td>
  </tr>
  <tr>
    <td>
        <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v5.0/server-api-reference/" target="_blank">REST API v5.0</a>
    </td>
    <td>
        <a href="https://help.boldreports.com/enterprise-reporting/rest-api-reference/v5.0/try-it-now/" target="_blank">Try It Now v5.0</a>
    </td>
    <td>
        Manage items, add users to the default group, and update account settings in your Bold Reports<sup>®</sup> site.
    </td>
  </tr>
</table>

## Frequently asked questions

### Which REST API version should I use?

Use **v5.0**. Starting with the next release planned for **November 2026**, v1.0 through v4.0 will be deprecated, and v5.0 will be the only supported REST API version.

### What can REST API v5.0 do?

REST API v5.0 lets you manage items, add users to the default group, and update account settings in your Bold Reports<sup>®</sup> site.

## See also

* [Interact with the REST API](./interact-with-rest-api/)
* [Site Administration REST API reference](./site-administration/)
* [Embed Authentication REST API](./embed-authentication/)
