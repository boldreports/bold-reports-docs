---
layout: post
title: Host Bold Reports application as a website in IIS
description: This documentation explains about how to switch the installed Bold Reports Report Server IIS Express application to IIS by using the utility
documentation: ug
---

# How to switch the installed Bold Reports Report Server IIS Express application to IIS

By using the `DeployIIS` utility, you can switch the installed Bold Reports Report Server IIS Express application to IIS and to do that follow these steps:

1. Run the `DeployIIS` application from the following installed location to host the Bold Reports Report Server in IIS.

   `installed_Location\Bold Reports\On-Premise Edition\Utilities\DeployIIS\DeployIIS`
  
2. Type a unused port for the Bold Reports Report Server and click the `Submit` as shown in the following image.

   ![Deploy IIS](/static/assets/on-premise/images/how-to/deployiis.png)

3. It will host the application in IIS and now you can open the Bold Reports Report Server from IIS by clicking the browse.
   ![Bold Reports site in IIS](/static/assets/on-premise/images/how-to/bold-reports-in-iis.png)

4. If Bold Reports Report Server [application](./../../application-startup/) was configured already, then follow these steps to update the new binding in Bold Reports Report Server else ignore the following steps:

   a. Now, navigate to the site settings page of the UMS application using the old IIS Express binding URL and update the new binding information as shown in the following image.

   `http://localhost:{port-no}/ums/administration`
  ![UMS Site Setting](/static/assets/on-premise/images/how-to/ums-site-settings.png)

   > By default, Bold Reports Report Server will be opened with old IIS Express binding URL.

   b. Then, navigate to the site settings of your Report Server application using the old IIS Express binding URL and update the new binding information as shown in the following image.

   `http://localhost:{port-no}/reporting/en-us/site/site1/administration`
  ![Report Server Site Setting](/static/assets/on-premise/images/how-to/report-server-site-settings.png)

   c. Now, Bold Reports Report Server site will be updated with new bindings and you can start Bold Reports Report Server site with new bindings.