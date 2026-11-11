---
layout: post
title: Install Optional Client Libraries on Linux | Bold Reports
description: Install optional client libraries such as Oracle, PostgreSQL, Snowflake and MySQL, plus PhantomJS, for Bold Reports On-Premises Edition on a Linux server.
platform: report-platform
documentation: ug
---

# Install Optional Libraries for Bold Reports<sup>®</sup> on Linux

Bold Reports<sup>®</sup> On-Premises Edition on Linux uses optional client libraries to connect to database variants and PhantomJS to export data visualization report items during report schedules. You install both after deploying Bold Reports<sup>®</sup> on Linux.

## Client libraries

Bold Reports<sup>®</sup> On-Premises Edition installs the optional client libraries with the `install-optional.libs.sh` script after you accept the client library license.

> **Important:** Bold Reports<sup>®</sup> On-Premises Edition uses client libraries such as Oracle, PostgreSQL, Snowflake, MySQL, GoogleBigQuery and MongoDB to connect with their respective SQL database variants. You need to read and accept the client library license to install client libraries.

1. Go to the client library location: `/var/www/bold-services/clientlibrary/boldreports`.

2. Open the client library consent document, `consent-to-deploy-client-libraries.txt`, in this location. Read the client libraries `LICENSE` details and run the following command to install the client libraries:

    ```sh
    $sudo bash install-optional.libs.sh install-optional-libs {user} postgresql,snowflake,mysql,oracle,googlebigquery,mongodb
    ```

## PhantomJS

Bold Reports<sup>®</sup> needs the PhantomJS executable to export data visualization report items during the report schedule.

> **Important:** PhantomJS is a headless webkit scriptable with JavaScript. It is free or open-source software, and it may contain MIT, BSD, LGPL, GPL, or other similar licenses that contain third-party code. This executable file is necessary to export the data visualization report items during the report schedule.

1. Before installing PhantomJS, install some required packages on your Linux system. You can install all of them with the following command:

    ```sh
    sudo apt-get install build-essential chrpath libssl-dev libxft-dev libfreetype6-dev libfreetype6 libfontconfig1-dev libfontconfig1 -y
    ```

2. Download PhantomJS. You can download a stable version of PhantomJS from its official website. Run the following command to download PhantomJS:

    ```sh
    sudo wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
    ```

3. After the download is complete, extract the downloaded archive file to the desired system location:

    ```sh
    sudo tar xvjf phantomjs-2.1.1-linux-x86_64.tar.bz2 -C /usr/local/share/
    ```

4. Create a symlink of the PhantomJS binary file in the system bin directory:

    ```sh
   sudo ln -s /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/
    ```

5. Verify that PhantomJS is installed on your system with the following command:

    ```sh
   phantomjs --version
    ```

6. You see the following PhantomJS version:

    ```sh
   2.1.1
    ```

> **Note:** PhantomJS needs some dependencies. If your distribution does not contain the dependencies, install them from the <a href="https://phantomjs.org/download.html">PhantomJS Download Page</a>.

## Frequently asked questions

### Which client libraries can I install for Bold Reports<sup>®</sup> on Linux?

Bold Reports<sup>®</sup> On-Premises Edition can install the Oracle, PostgreSQL, Snowflake, MySQL, GoogleBigQuery and MongoDB client libraries.

### Why does Bold Reports<sup>®</sup> need PhantomJS?

Bold Reports<sup>®</sup> needs the PhantomJS executable to export the data visualization report items during the report schedule.

## Next step

* [Application Startup](./../../../application-startup/)
