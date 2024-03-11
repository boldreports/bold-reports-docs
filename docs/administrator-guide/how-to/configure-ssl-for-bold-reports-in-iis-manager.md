---
layout: post
title: SSL Configuration in windows IIS Manager| Bold Reports
description: This documentation explains how to configure the SSL for Bold Reports application in windows IIS Manager.
keywords: report-platform
documentation: ug
---

# Configure SSL for Bold Reports in IIS Manager

Follow the below steps to configure SSL for Bold Reports application in IIS Manager.

## Import SSL Certificates

1. Open IIS Manager. Click **Server Certificates**.

    ![Server Certificates](/static/assets/on-premise/images/how-to/server-certificates.png)

2. In Actions panel on the right, select **import**.

   ![Import](/static/assets/on-premise/images/how-to/import.png)

3. In the **Import Certificate** dialog box, click on browse option and select the .pfx file and Provide the required **Password**.

   ![Certificate File](/static/assets/on-premise/images/how-to/certificate-file.png)

4. Click **OK**. The SSL Certificate will be imported to the server.

   ![Server Certificate List](/static/assets/on-premise/images/how-to/server-certificates-list.png)

## Sites Binding

1. Once Bold Reports Enterprise Reporting application is installed, Open IIS Manager.

2. In IIS Manager, Select **BoldReports_EnterpriseReporting**. In Actions panel on the right, Select **Bindings**.

   ![IIS Express](/static/assets/on-premise/images/how-to/IIS-Express.png)

3. In the **Site Bindings** dialog box, click **Add** button.

   ![Site Binding](/static/assets/on-premise/images/how-to/Site-binding.png)

4. In the **Add Site Binding** dialog box, click on **Type** dropdown option and select **https**. Select **All Unassigned** as default in IP address.

   ![Type https](/static/assets/on-premise/images/how-to/type-https.png)

5. In **Host Name**, provide the **sub-domain name** with the **Domain name** for which the certificate is issued to.
   ![Host Name](/static/assets/on-premise/images/how-to/host-name.png)
   >**Note**: **sub-domain name** is your choice.

6. In **SSL Certificate** dropdown option, select the certificate which you require.

   ![Select SSL Certificate](/static/assets/on-premise/images/how-to/select-ssl-certificate.png)

7. Click **OK**.

8. Restart the application. Your Bold Reports Enterprise Reporting application in windows is configured with SSL Certificate.

   ![Restart](/static/assets/on-premise/images/how-to/restart.png)

9. Browse the application.

   ![Browse application](/static/assets/on-premise/images/how-to/browse-https.png)

> Please refer this [Link](../../installation/windows-installer/installation-and-deployment/#how-to-change-the-binding-in-the-bold-reports-enterprise-reporting) to change the binding information in Bold Reports Enterprise Reporting Application.