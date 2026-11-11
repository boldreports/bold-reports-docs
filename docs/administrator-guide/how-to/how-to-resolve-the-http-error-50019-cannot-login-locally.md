---
title: Fix HTTP Error 500.19 Cannot Log In Locally | Bold Reports
description: Fix HTTP Error 500.19 Cannot log in locally for Bold Reports in IIS by setting Physical Path Credentials to Application user and restarting the site.
platform: report-platform
documentation: ug
---

# How to resolve the HTTP Error 500.19 - Cannot login locally in Bold Reports<sup>®</sup>

You resolve the HTTP Error 500.19 - Cannot login locally by changing the Physical Path Credentials option of the hosted Bold Reports<sup>®</sup> application in IIS Manager.

## How do I fix HTTP Error 500.19 in IIS?

To fix the error, set the Bold Reports<sup>®</sup> site's `Physical Path Credentials` to `Application user (pass-through authentication)` and restart the site.

1. Open Internet Information Services (IIS) Manager by typing **inetmgr** in the Run dialog box (accessible through the Start menu).

    ![Open the IIS](/static/assets/on-premise/images/how-to/open-iis.png)

2. In the navigation pane on the left, go to the `Sites` section and select your **Bold Reports<sup>®</sup>** application.

3. Right-click the **Bold Reports<sup>®</sup>** application and select `Manage Website > Advanced Settings`.

    ![Advance Settings](/static/assets/on-premise/images/how-to/advance-settings.png)

4. Set the `Physical Path Credentials` field to `Application user (pass-through authentication)`.

5. Click `OK` to save the path credential changes, and then click `OK` on the Advanced Settings prompt.

    The following screenshots show the `Physical Path Credentials` field and the credentials dialog.

    ![Click Physical Path](/static/assets/on-premise/images/how-to/click-physical-path.png)
    ![Physical Path Credentials](/static/assets/on-premise/images/how-to/physical-path-credentials.png)

6. Right-click your Bold Reports<sup>®</sup> site and select `Manage Website > Restart` to apply the changes.

    ![Click Restart](/static/assets/on-premise/images/how-to/restart-site.png)

7. Log in to the Bold Reports<sup>®</sup> server.

## Frequently asked questions

### Which Physical Path Credentials value fixes HTTP Error 500.19?

Set `Physical Path Credentials` to `Application user (pass-through authentication)` for the Bold Reports<sup>®</sup> application in IIS.

### Do I need to restart the site after the change?

Yes. Restart the Bold Reports<sup>®</sup> site with `Manage Website > Restart` so the changes take effect.

## See also

* [Change the binding in Bold Reports<sup>®</sup>](./../how-to-change-the-binding-in-the-bold-reports/)
* [Configure SSL for Bold Reports<sup>®</sup> in IIS Manager](./../configure-ssl-for-bold-reports-in-iis-manager/)
* [Check the status and health of Bold Reports<sup>®</sup> services](./../how-to-check-the-status-and-health-for-bold-reports-services/)
