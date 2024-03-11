---
title: Apply patches to Bold Reports for common login issue
description: This documentation explains about how to apply the patches to Bold Reports for common login breaking issue
platform: report-platform
documentation: ug
---

# How to apply the common login patches to Bold Reports Enterprise Reporting

When you upgrading or installing the Bold BI application version 4.1 with Bold Reports causes breaking in common login.

The Bold Reports team provides solutions to the issue in the form of patch, which contain assemblies and files and this topic explains how to apply these patches to the Bold Reports Enterprise Reporting.

Download your patch from the below table with the respective version which you have installed.

<table>
<tr>
<th>
Version
</th>
<th>
Download Patch
</th>
</tr>
<tr>
<td>
2.4.10
</td>
<td>

Download [here](https://www.syncfusion.com/downloads/support/directtrac/general/ze/Bold_Report_Server_Patch1751976179)

</td>
</tr>
<tr>
<td>
2.4.19
</td>
<td>

Download [here](https://www.syncfusion.com/downloads/support/directtrac/general/ze/Bold_Report_Server_Patch2046299657)

</td>
</tr>
</table>

> Please contact our support team for the patches of other Bold reports version.

Before applying the patches you have to take the copy of `bin` folders and `web.config` files from below locations.

<table>
<tr>
<th>
Folders / Files to take backup
</th>
<th>
Bold Reports Location
</th>
</tr>
<tr>
<td>

`bin`

`Web.config`

</td>
<td>

`C:\Bold Reports\Report Server\`

</td>
</tr>
<tr>
<td>

`bin`

`Web.config`

</td>
<td>

`C:\Bold Reports\Report Server\api\`

</td>
</tr>
<tr>
<td>

`bin`

`Web.config`

</td>
<td>

`C:\Bold Reports\Report Server\jobs\`

</td>
</tr>
<tr>
<td>

`Web.config`

</td>
<td>

`C:\Bold Reports\Report Server\reportservice\`

</td>
</tr>
</table>

Follow the below steps for applying patches and relevant changes.

1. Once downloaded the patch, extract the zip file and copy the `Report Server` folder and then replace it into the respective Report Server location `C:\Bold Reports\` as follows. By default, Bold Reports will be deployed in `C:\Bold Reports` location.
  ![Report Server Location](/static/assets/on-premise/images/how-to/report-server-location-in-bold-reports-common-login.png)

2. Now, go to your backup location and edit any one of the `web.config` file and copy the entire machine key node.
  ![Report Server Machine Key](/static/assets/on-premise/images/how-to/apply-machine-key-for-resolving-common-login-issue.png)

3. Replace the copied machine key node in the below `web.config` files.

    * `C:\Bold Reports\Report Server\web.config`

    * `C:\Bold Reports\Report Server\api\web.config`

    * `C:\Bold Reports\Report Server\jobs\web.config`

    * `C:\Bold Reports\Report Server\reportservice\web.config`

4. Navigate to `C:\BoldServices\app_data\configuration\` and edit the Config.xml file then copy the value of DRM node, and paste the value in the DRM of following Config.xml files `C:\Bold Reports\Report Server\App_Data\Configuration\Config.xml` and `C:\Bold Reports\Report Server\Configuration\Config.xml`
![Report Server DRM Key](/static/assets/on-premise/images/how-to/drm-key-copy-paste-common-login.png)

5. Then start the Bold Reports application by using the desktop shortcut IIS/IIS Express.
