---
title: Configure IP Allowlisting in Report Server | Bold Reports
description: Enable IP allowlisting in the Bold Reports Report Server to allow access only from specified IPv4 or IPv6 addresses, and add, edit, or delete allowlist rules.
---

# Configure IP allowlisting in Bold Reports<sup>®</sup> Report Server

IP allowlisting enables administrators to enforce IP-based access restrictions for the Bold Reports<sup>®</sup> application. You configure the specific IP addresses from which clients can access the application. This improves security by ensuring that only trusted and authorized users have access.

> **Warning:** Before enabling this feature, make sure to add the current user’s IP address, then save the changes.

## How does IP allowlisting work?

When IP allowlisting is enabled in Bold Reports<sup>®</sup>, it allows site access only to the listed IP addresses and restricts access for non-allowlisted IP addresses.

By default, IP allowlisting is disabled, and no restrictions are applied for rendering pages in the Bold Reports<sup>®</sup> application. The following image shows the default setting.
![Default IP Whitelisting](/static/assets/on-premise/images/settings/default-ip-whitelisting.png)

## How do I enable IP allowlisting?

Enabling IP allowlisting in Bold Reports<sup>®</sup> restricts application access to only those IP addresses that are explicitly authorized. The following image shows the option enabled.
![Enable IP Whitelisting](/static/assets/on-premise/images/settings/enable-ip-whitelisting.png)

## How do I add an IP address?

To add an IP address to the Bold Reports<sup>®</sup> allowlist, click the **Add IP Address** button to open the **Add Rule** dialog. In the dialog, specify the rule details.

![Add IP Address](/static/assets/on-premise/images/settings/add-ip-address.png)
![Add Rule](/static/assets/on-premise/images/settings/add-rule.png)

**Rule Name:** Specify a valid rule name.<br>
**IP Type:** Select the IP type, either IPv4 or IPv6.<br>
**IP Address:** Specify a valid IP address based on the chosen IP type.<br>
**Add Rule:** After providing all required details, click the Add Rule button. The values will then be displayed in the grid.

![Click Add Rule](/static/assets/on-premise/images/settings/click-add-rule.png)
![Display Value](/static/assets/on-premise/images/settings/display-value-in-grid.png)

> **Note:** If the current user’s IP address is not listed in the grid, add it to the rule. The current user’s IP address will be displayed on the message banner.

![Message Banner](/static/assets/on-premise/images/settings/message-banner.png)

After you enter all the valid requirements for IP allowlisting, click **Save** to apply these configurations to the application.

![Save Item](/static/assets/on-premise/images/settings/save-item.png)

> **Note:** When you activate this feature, note that IP allowlisting will not take effect immediately. To ensure uninterrupted access, specify the IP addresses that need to be allowlisted and save the changes to apply these configurations. This proactive step helps prevent unintentional access restrictions and ensures smooth implementation of your security settings.

## How do I edit a rule?

To edit an existing IP allowlisting rule in Bold Reports<sup>®</sup>, click the **Edit** icon in the grid. The **Edit Rules** dialog opens.

![Click Edit Icon](/static/assets/on-premise/images/settings/click-edit-icon.png)

Update the rule details as needed in the Edit Rule dialog. After you make your edits, save the changes.

![Edit Rule](/static/assets/on-premise/images/settings/edit-rule.png)

## How do I delete a rule?

To remove a rule from the Bold Reports<sup>®</sup> allowlist, click the **Delete** icon. After the rule is deleted, save the changes.

> **Important:** If the user deletes the current user’s IP address, the changes will not be saved when attempting to save the settings.

![Click Delete](/static/assets/on-premise/images/settings/click-delete.png)

## What happens when a blocked IP address tries to access the application?

If an unauthorized IP address tries to access the Bold Reports<sup>®</sup> application, it shows an **Access Denied** page. The page indicates that the IP address is not permitted to view or interact with the application.

![Access Denied](/static/assets/on-premise/images/settings/access-denied.png)

## Frequently asked questions

### Is IP allowlisting enabled by default?

No. IP allowlisting is disabled by default, and no restrictions are applied for rendering pages in the Bold Reports<sup>®</sup> application.

### Which IP address types can I allowlist?

You can allowlist IPv4 or IPv6 addresses. Select the IP type in the **Add Rule** dialog.

### Can I delete my own IP address from the allowlist?

No. If you delete the current user’s IP address, the changes are not saved when you try to save the settings.

## See also

* [Report Server settings overview](./../)
* [Configure JWT authentication settings](./../json-web-token-settings/)
