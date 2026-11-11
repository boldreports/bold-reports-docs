---
layout: post
title: Configure SSL for Docker Compose Deployments | Bold Reports
description: Configure SSL for Bold Reports Docker Compose deployments by adding .key and .crt certificates to Nginx in single container and multi container setups.
platform: report-platform
documentation: ug
---

# How to configure SSL for Bold Reports<sup>®</sup> application on Docker

You configure SSL for a Bold Reports<sup>®</sup> Docker Compose deployment by adding your `.key` and `.crt` certificate files to Nginx and restarting the container. The steps differ for single container and multi container deployments.

* [Single container deployment](#single-container-deployment)
* [Multi container deployment](#multi-container-deployment)

## Single container deployment

Bold Reports<sup>®</sup> single container deployments use an `nginx` volume to hold the SSL certificate. Follow these steps:

1. In the docker-compose yaml file, add the following line under volume in the `boldreports` service:

   ~~~ bash
   - nginx_data:/etc/nginx/sites-available
   ~~~

   The following screenshot shows the nginx volume in the docker-compose.yml file.

   ![docker-compose.yml](/static/assets/on-premise/images/installation/deploy-in-docker/nginx-volume.png)

2. Add the following block for `nginx` in volume and allocate a directory in your host machine to store the shared folders for applications’ usage. Replace the directory path with `<host_path_nginx_data>` in the docker-compose.yml file and bring up a container.

   ~~~sh
   nginx_data:
     driver: local
     driver_opts:
       type: 'none'
       o: 'bind'
       device: '<host_path_nginx_data>'
   ~~~

    For example, <br><b>Windows:</b> `device: 'D:/boldreports/nginx_data'` and `device: 'D:/boldreports/nginx_data'` <br><b>Linux:</b> `device: '/var/boldreports/nginx_data'` and `device: '/var/boldreports/nginx_data'`

3. Copy the SSL certificate in `.key` and `.crt` format and paste it inside the `nginx` mount folder.

4. Refer to the following SSL termination document for SSL changes in the `nginx` file.

   <https://github.com/bold-reports/bold-reports-docker/blob/master/docs/ssl-termination.md>
5. Restart the Bold Reports<sup>®</sup> container using the following command:

   ~~~sh
   docker restart <container-name or container ID>
   ~~~

## Multi container deployment

Bold Reports<sup>®</sup> multi container deployments take the SSL certificate path in the docker-compose yaml file and use a separate Nginx container. Follow these steps:

1. Add an SSL certificate path with the `.key` and `.crt` file in the docker-compose yaml file.

   The following screenshot shows the certificate paths in the docker-compose.yml file.

   ![docker-compose.yml](/static/assets/on-premise/images/installation/deploy-in-docker/nginx-certificate.png)

2. Refer to the following SSL termination document for SSL changes in the `nginx` file.

   <https://github.com/bold-reports/bold-reports-docker/blob/master/docs/ssl-termination.md>
3. Restart the Nginx container using the following command:

   ~~~sh
   docker restart <container-name or container ID>
   ~~~

## Frequently asked questions

### Which certificate files does Bold Reports<sup>®</sup> need for SSL on Docker?

Bold Reports<sup>®</sup> needs the SSL certificate in `.key` and `.crt` format.

### Which container do I restart after adding SSL?

For a Bold Reports<sup>®</sup> single container deployment, restart the Bold Reports<sup>®</sup> container. For a multi container deployment, restart the Nginx container.

## See also

* [Deploy Bold Reports<sup>®</sup> on Docker single container](./../bold-reports-on-single-container/)
* [Deploy Bold Reports<sup>®</sup> on Docker multiple containers](./../bold-reports-on-multi-container/)
* [Upgrade Bold Reports<sup>®</sup> on Docker](./../upgrade-to-latest-version/)
