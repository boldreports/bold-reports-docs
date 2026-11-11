---
title: Configure Data Connector Timeout Settings | Bold Reports
description: Configure the TimeOutInMinutes setting in Bold Reports Report Server to control how long the data connector HTTP client waits for long running API requests.
---

# Configure the data connector timeout in Bold Reports<sup>®</sup> Report Server

To configure the data connector timeout in Bold Reports<sup>®</sup> Report Server, set `TimeOutInMinutes` under `DataOptions` in the reporting config.xml file.

## What does the timeout setting control?

The Bold Reports<sup>®</sup> Report Server timeout setting specifies how long the HTTP client waits for a response after sending an HTTP request. Increasing the timeout value helps avoid request failures when the HTTP request takes longer to respond.

## What are the default and maximum timeout values?

Report Server uses these defaults and limits for the data connector timeout:

* **Minimum default:** 4 minutes
* **Maximum allowed:** 30 minutes
* **Configuration key:** TimeOutInMinutes (under the **DataOptions** section)

## How do I configure the timeout setting?

Set the timeout for Bold Reports<sup>®</sup> Report Server in the reporting config.xml file with these steps:

1. Navigate to **UMS Settings → Configuration → reporting/config.xml**.  
2. Add or update the following XML nodes:

    ```xml
    <DataOptions>
        <TimeOutInMinutes>{Desired time limit in minutes}</TimeOutInMinutes>
    </DataOptions>
    ```

3. Save the file and restart the on‑premises server for the changes to take effect.

    The following screenshot shows the `DataOptions` node with `TimeOutInMinutes` in config.xml.

    ![Dataoptions setting](/static/assets/on-premise/images/report-designer/how-to/configure-timeout-setting/dataoptions_setting.png '#width=450px')

> **Note**: Replace {Desired time limit in minutes} with the required timeout value. If **TimeOutInMinutes** is not configured, the server uses the default (4 minutes).

## What should I check when I use a reverse proxy?

If Bold Reports<sup>®</sup> Server is deployed with a reverse proxy server, make sure the proxy server's timeout values are equal to or greater than the configured **TimeOutInMinutes** value. Otherwise, the proxy server terminates the connection before the HTTP request times out.

## How do I set timeouts in Nginx-based environments?

Nginx has default request timeout values (commonly around 60 to 300 seconds, depending on the directive). Adjust these timeouts for Bold Reports<sup>®</sup> Server based on application requirements to prevent unexpected client or upstream disconnections. The following table lists the Nginx configuration file to edit in each environment:

<table>
    <tr>
        <td> <span style="font-weight:bold"> Environment </span> </td>
        <td> <span style="font-weight:bold"> File </span> </td>
    </tr>
    <tr>
        <td> Linux and Docker single-container </td>
        <td> /etc/nginx/sites-enabled/default </td>
    </tr>
    <tr>
        <td> Docker multiple-container </td>
        <td> default.conf </td>
    </tr>
    <tr>
        <td> Kubernetes (K8S) </td>
        <td> Ingress.yaml </td>
    </tr>
</table>

### Timeout Properties in Linux and Docker environments

In Linux and Docker environments, set the following Nginx timeout properties for Bold Reports<sup>®</sup> Server:

```xml
    proxy_connect_timeout {Desired time limit in seconds};
    proxy_send_timeout {Desired time limit in seconds};
    proxy_read_timeout {Desired time limit in seconds};
    send_timeout {Desired time limit in seconds};
```

![Timeout setting Linux](/static/assets/on-premise/images/report-designer/how-to/configure-timeout-setting/timeout-linux.png '#width=450px')

### Timeout properties in Kubernetes (K8S) environment

In a Kubernetes (K8S) environment, set the following Nginx timeout properties for Bold Reports<sup>®</sup> Server:

```xml
    proxy_connect_timeout {Desired time limit in seconds};
    proxy_send_timeout {Desired time limit in seconds};
    proxy_read_timeout {Desired time limit in seconds};
```

![Timeout setting Kubernetes](/static/assets/on-premise/images/report-designer/how-to/configure-timeout-setting/timeout-k8s.png '#width=450px')

## How do I set timeouts in other reverse proxy servers?

If Bold Reports<sup>®</sup> Server is deployed with a reverse proxy server other than Nginx, configure that proxy server's equivalent timeout properties (connection, send, and read).

## Frequently asked questions

### What timeout does Report Server use if I do not set TimeOutInMinutes?

If **TimeOutInMinutes** is not configured, the server uses the default of 4 minutes.

### What is the maximum timeout I can set?

The maximum allowed value for **TimeOutInMinutes** is 30 minutes.

## See also

* [Data source connector settings](./../../manage-app-settings/connectors-settings/)
* [Check the status and health of Bold Reports<sup>®</sup> services](./../how-to-check-the-status-and-health-for-bold-reports-services/)
