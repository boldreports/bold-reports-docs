---
layout: post
title: Install Report Server on CentOS Linux | Bold Reports
description: Install and deploy Bold Reports Report Server v6.1 or later on CentOS. Install Nginx and GDIPlus, run the Linux installer, then set up Nginx and SSL manually.
platform: report-platform
documentation: ug
---

# Bold Reports<sup>®</sup> Installation and Deployment on CentOS (v6.1 or later)

You can install Bold Reports<sup>®</sup> Report Server v6.1 or later on CentOS by installing the required packages and running the Bold Reports<sup>®</sup> Linux package installer. You can also configure Nginx as a reverse proxy manually and secure the site with an SSL certificate.

## What do I need before installing Bold Reports<sup>®</sup> on CentOS?

Bold Reports<sup>®</sup> on CentOS needs Nginx, the GDIPlus package and an OpenSSL configuration path. The ETL application also needs Python 3.9 and pip packages.

1. Install [Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-8).
2. Install the `GDIPlus` package by running the following commands:

    ```sh
    sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
    sudo yum install epel-release
    sudo yum install libgdiplus
    ```  

3. If you want to install the ETL application with Bold Reports<sup>®</sup>, follow these steps. Otherwise, skip this step and go to step 4.
    * Check for and install `Python 3.9` by executing the following command:

        ```sh
        sudo dnf groupinstall 'development tools' && sudo dnf install wget openssl-devel bzip2-devel libffi-devel && sudo curl https://www.python.org/ftp/python/3.9.2/Python-3.9.2.tgz -O && sudo tar -xvf Python-3.9.2.tgz && cd Python-3.9.2 && sudo ./configure --enable-optimizations && sudo make install
        ```
    * Install `python pip` and the following pip packages by running the following command:

        ```sh
        sudo yum -y install python3-pip && python3.9 -m pip install duckdb===1.1.2 dlt===0.5.4 pymysql pyodbc pg8000 poetry pandas===2.2.2 "dlt[parquet]" "dlt[filesystem]"
        ```
4. Add the `openssl conf` path to the environment if it does not exist.
    ```sh
    export OPENSSL_CONF=/etc/ssl/
    ```

### How do I configure the Bold Reports<sup>®</sup> application on CentOS?

You configure Bold Reports<sup>®</sup> on CentOS by downloading the Linux package, extracting it, and running the `install-boldreports.sh` script.

1. Register and download the Bold Reports<sup>®</sup> Linux package from the [registration and download section](./../../../deployment/getting-started/#registration-and-download).

2. Download the Bold Reports<sup>®</sup> Linux package by running the following command:
    ```console
    sudo wget {Bold Reports Linux package link}
    ```
3. Extract the zip file by running the following command:
    ```console
    sudo unzip {Bold Reports Linux package zip file}
    ```
4. Change the directory to `BoldReports_EnterpriseReporting-Linux` by running the following command:
    ```console
    cd BoldReports_EnterpriseReporting-Linux
    ```
5. Run the following command to deploy Bold Reports<sup>®</sup> on your Linux machine:
    ```console
     sudo bash install-boldreports.sh -i {new} -u {user} -h {host URL} -n {true or false}
     ```

     * **i:** Installation type. Specifies whether it is a new or upgrade installation.

     * **u:** The user or group that manages the service. Make sure this user exists on your Linux server.

     * **h:** Domain or IP address of the machine with HTTP protocol.

     * **n:** Set this to `true` to configure Bold Reports<sup>®</sup> with the Nginx front-end server automatically.

    > **IMPORTANT:** If existing applications on that Linux machine use Nginx, set the "-n" value to false and [configure Nginx manually](./../../../deployment/deploy-on-linux/bold-report-ubuntu/#manually-configure-nginx).

    Example for a new installation:

    ```console
        sudo bash install-boldreports.sh -i new -u www-data -h http://linux.example.com -n true
    ```

After the Bold Reports<sup>®</sup> installation is complete, open the host URL in the browser and continue with the application startup.

### Manually configure Nginx

You configure Nginx manually as a reverse proxy that forwards requests to the Bold Reports<sup>®</sup> app. Modify `/etc/nginx/nginx.conf`: open it in a text editor and add the following code:

```cmd
       #server {
       #listen 80;
       #server_name example.com;
       #return 301 https://example.com$request_uri;
       #}

         server {
       listen        80 default_server;

       #server_name   example.com;

       #listen 443 ssl;
       #ssl on;
       #ssl_certificate /path/to/certificate/file/domain.crt;
       #ssl_certificate_key /path/to/key/file/domain.key;

       proxy_read_timeout 300;
       proxy_connect_timeout 300;
       proxy_send_timeout 300;
       send_timeout 300;
       client_max_body_size 200M;

       location / {
      root /var/www/bold-services/application/idp/web/wwwroot;
        proxy_pass http://localhost:6500/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection keep-alive;
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        fastcgi_buffers 16 16k;
        fastcgi_buffer_size 32k;
    }
    location /api {
        proxy_pass         http://localhost:6501/api;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /ums {
        root               /var/www/bold-services/application/idp/ums/wwwroot;
        proxy_pass         http://localhost:6502/ums;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /ums/signalr/progresshub {
        proxy_pass         http://localhost:6502/ums/signalr/progresshub;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /reporting {
    root /var/www/bold-services/application/reporting/web/wwwroot;
        proxy_pass         http://localhost:6550/reporting;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /reporting/messageHub {
        proxy_pass         http://localhost:6550/reporting/messageHub;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /reporting/api {
        proxy_pass         http://localhost:6551/reporting/api;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /reporting/jobs {
        proxy_pass         http://localhost:6552/reporting/jobs;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /reporting/reportservice {
        root               /var/www/bold-services/application/reporting/reportservice;
        proxy_pass         http://localhost:6553;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /reporting/viewer {
        proxy_pass         http://localhost:6554/reporting/viewer;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /etlservice/ {
        root               /var/www/bold-services/application/etl/etlservice/wwwroot;
        proxy_pass         http://localhost:6509/;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
    location /etlservice/_framework/blazor.server.js {
        root               /var/www/bold-services/application/etl/etlservice/wwwroot;
        proxy_pass         http://localhost:6509/_framework/blazor.server.js;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
   }
}
```

After you set up the Nginx configuration, run `sudo nginx -t` to verify the syntax of the configuration files. If the configuration file test is successful, run `sudo nginx -s reload` to force Nginx to pick up the changes.

## Configure SSL

You can configure the Bold Reports<sup>®</sup> site with your SSL certificate if you have one for your domain. Follow these steps, or skip them if you do not need SSL:

1. Navigate to `/etc/nginx/conf.d`. Open the `boldreports-nginx-config.conf` file in a text editor.

2. Uncomment the following marked lines in the Nginx config file. The screenshot shows the SSL lines to uncomment.

    ![Ssl Config](/static/assets/on-premise/images/installation/ssl-config.png)

3. Comment out the following marked line in the Nginx config file. The screenshot shows the line to comment out.

    ![Config Mark](/static/assets/on-premise/images/installation/ssl-config-mark.png)

4. Replace `example.com` with your domain name.
5. Define the path of the SSL certificate: `ssl_certificate /etc/ssl/domain.crt`.
6. Specify the directory where the SSL certificate key is located: `ssl_certificate_key /etc/ssl/domain.key`.
7. Save the file and run `sudo nginx -t` to verify the syntax of the configuration file. If the configuration file test is successful, run `sudo nginx -s reload` to force Nginx to pick up the changes.

>**NOTE**: If you configure the application with SSL, update the URLs in the product.json with `HTTPS`. The file is located in `/var/www/bold-services/application/app_data/configuration`.

## Frequently asked questions

### How do I check my Nginx configuration for Bold Reports<sup>®</sup>?

Run `sudo nginx -t` to verify the syntax of the Nginx configuration for Bold Reports<sup>®</sup>. If the test is successful, run `sudo nginx -s reload`.

### What must I update after enabling SSL?

After you configure Bold Reports<sup>®</sup> with SSL, update the URLs in the product.json with `HTTPS`. The file is in `/var/www/bold-services/application/app_data/configuration`.

## Next steps

* [Install Optional Libraries](./../../../deployment/deploy-on-linux/install-opt-library/)

* [Application Startup](../../../application-startup/)
