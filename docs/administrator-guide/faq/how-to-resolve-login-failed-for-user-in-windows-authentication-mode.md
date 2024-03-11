---
layout: post
title:  Login failure in windows authentication in Bold Reports.
description: This documentation explains how to resolve the login failure in windows authentication in Bold Reports Report Server.
platform: report-platform
documentation: ug
---

# Login failed for the user in Windows authentication mode

When connecting to the SQL Server Windows authentication mode in Bold Reports, it will throw the following error:

![login-failed](/static/assets/on-premise/images/faq/login-failed.png)

## Why this issue occurred

`DOMAIN\MACHINENAME$` is not added in IIS/IIS Express to access SQL Server in Windows Authentication mode.

* DOMAIN - refers to your Active Directory domain
* MACHINENAME - refers to the name of the server where IIS is running

## How do I resolve this

* To resolve this issue, you need to add **DOMAIN\MACHINENAME$** as a valid login in SQL Server with the necessary permissions.
* This login should be mapped to the database you want to access and should be assigned a role that has the necessary permissions.

> **Note:** When you're dealing with a `remote server` (where IIS and SQL Server are on different machines), you need to use **DOMAIN\MACHINENAME$**. If IIS and SQL Server are on the `same machine`, you can use **NT Authority\System**.

### The steps for adding `NT AUTHORITY\SYSTEM` as a valid login to access SQL Server in Windows Authentication mode in IIS or IIS EXPRESS

In Microsoft SQL Server Management Studio, do the following on the server:

1. Right-click on “Login” and select `New Login` to add the respective login to SQL Server.

    ![new-login](/static/assets/on-premise/images/faq/add-new-login.png)

2. Click on the “Search” button, then select `Advanced -> Find Now -> System` in the newly opened windows.

    ![login-search](/static/assets/on-premise/images/faq/login-search.png)

    ![login-advanced-option](/static/assets/on-premise/images/faq/login-advanced-option.png)

    ![authority-system-add](/static/assets/on-premise/images/faq/authority-system-add.png)

3. Then click “OK” to add the login **NT AUTHORITY\SYSTEM**. Once it has been added, we could access Windows authentication mode in Bold Reports.