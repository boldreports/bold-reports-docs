---
layout: post
title: Custom Attribute Feature | Report Server | Syncfusion
description: Explains about custom attribute in Report Server. Discover the custom attributes as dynamic code parameters in user queries, enabling personalized rendering of Reports in the Report Server.
platform: Report-Platform
documentation: ug
---

# Configuring Custom Attribute

Custom attribute is a piece of code that acts like a parameter, which is replaced anywhere in the query varied by the users. The attribute name is replaced by the code, which is saved for each user that makes the reports to get rendered based on it.

## Custom attribute hierarchy

Custom attribute can be defined in three levels:

  1. User level

  2. Group level

  3. Site level

The user level attribute has high priority than the other levels. The group and site level attribute can be override in the user level. Also, the site level attribute can be override by the group level attribute.

## User level attribute

This attribute can be set by the site admin for a user in the user management profile page. You can view the attributes inherited from the group and site level in the user’s attribute listing.

![User Level Add Custom Attribute Button](/static/assets/on-premise/images/report-designer/manage-data/configure-custom-attribute/custom-attribute-add-button-user-level.png)

## Group level attribute

This attribute can be set by the site admin for a group in the group profile page. You can view the attributes inherited from the site level in the group’s attribute listing.

![Group Level Add Custom Attribute Button](/static/assets/on-premise/images/report-designer/manage-data/configure-custom-attribute/custom-attribute-add-button-group-level.png)

## Site level attribute

This attribute can be set by the UMS admin for a site in the site details page.

![Site Level Add Custom Attribute Button](/static/assets/on-premise/images/report-designer/manage-data/configure-custom-attribute/custom-attribute-add-button-tenant-level.png)

## Adding custom attribute

Attributes are name-value pairs that are associated with users, groups, and the sites (tenants).

![Custom Attribute Window](/static/assets/on-premise/images/report-designer/manage-data/configure-custom-attribute/adding-custom-attribute.png '#width=385px')

Name – Name of the attribute.

Value – Value of the attribute.

Description – Explaining the purpose for this attribute.

Encrypt – Store it as encrypted one in database and the value will be shown as dots in the grid.

## Applying custom attribute for different users

Let us consider for the user **Adam** has the custom attribute value is configured as **Resource_Name IN (‘Oil’,‘Injection’)** with the attribute name as **Resources**.

![Use custom attribute for user Adam](/static/assets/on-premise/images/report-designer/manage-data/configure-custom-attribute/custom-attribute-user-Adam.png '#width=385px')

For the user **Christ** , has the custom attribute value is configured as **Resource_Name IN (‘Oil & Gas’,‘Salt Water Disposal’)** with the attribute name as **Resources**.

![Use custom attribute for user Christ](/static/assets/on-premise/images/report-designer/manage-data/configure-custom-attribute/custom-attribute-user-Christ.png '#width=385px')

## Uses of custom attribute

The custom attribute can be used in the following areas:

  1. Custom Query.
  2. Web Connection window.

## 1. Custom Query

The custom attribute can be used in custom query by manually providing the required custom attribute name in code view using syntax.

Syntax: `${{:AttributeName}}`

![Use custom attribute in code view](/static/assets/on-premise/images/report-designer/manage-data/configure-custom-attribute/custom-attribute-in-code-view.png)

Here, created a simple report for **Adam**, the data is retrieved based on the condition for the column `Resource_Name` as given in the custom attribute **Resources**.

![Sample Report for user Adam](/static/assets/on-premise/images/report-designer/manage-data/configure-custom-attribute/custom-attribute-sample-report-Adam.png)

For **Christ**, the data is retrieved based on the condition for the column `Resource_Name` as given in the custom attribute **Resources**.

![Sample Report for user Christ](/static/assets/on-premise/images/report-designer/manage-data/configure-custom-attribute/custom-attribute-sample-report-Christ.png)

## 2. Web Connection window

The custom attribute can be used in web connection window in the following sections:

  1. URL.
  2. Header(s).
  3. Parameter(s).
  4. Raw.
  5. User Name.
  6. Password.

Use the following syntax for the custom attribute.

Syntax: `${{:AttributeName}}`

![Use custom attribute in web connection](/static/assets/on-premise/images/report-designer/manage-data/configure-custom-attribute/set-custom-attribute.png '#width=355px')

![Use custom attribute in web connection](/static/assets/on-premise/images/report-designer/manage-data/configure-custom-attribute/web-connection-custom-attribute.png '#width=355px')

When simple report is created here, data is retrieved based on the condition for column `country`.

![Use custom attribute in report](/static/assets/on-premise/images/report-designer/manage-data/configure-custom-attribute/report-custom-attribute.png '#width=355px')