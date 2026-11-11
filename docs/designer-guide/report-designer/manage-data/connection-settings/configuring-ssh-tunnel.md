---
title: Configure an SSH Tunnel for Data Connectors | {{site.productName}}
description: Configure an SSH tunnel with password or public key authentication in the {{site.productName}} Designer to securely connect data connectors to remote databases.
---

# Configuring SSH Tunnel for Data Connectors

{{site.productNameTM}} Designer lets you connect data connectors to remote databases through an encrypted SSH tunnel. You can configure the tunnel with password or public key authentication.

## What is SSH?

**SSH (Secure Shell)** is a network protocol that encrypts connections, so {{site.productNameTM}} can securely access remote databases through an SSH tunnel.

{{site.productNameTM}} supports various [supported data connectors for SSH tunneling](./../../../manage-data/connection-settings/configuring-ssh-tunnel/#supported-data-connectors) to connect the remote databases through an SSH tunnel.

Both the basic and advance panels support SSH configuration to establish a secure connection to your remote database.

## How do I configure an SSH tunnel?

To configure an SSH tunnel in the {{site.productNameTM}} Designer, fill in the following SSH fields in the data source panel.

**SSH Server Name**: Specify the address of the SSH server (IP address or hostname).

**SSH Port**: Specify the port number used for SSH connection (default is 22, but this may vary).

**SSH Username**: Specify the username for SSH authentication.

**SSH Authentication Type**: You can set authentication type, either as **Password** or **Public key**.

The following image shows the **SSH Authentication Type** selection dropdown.

![SSH Authentication Type selection dropdown](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/ssh-authentication-type.png '#width=355px')

### How do I use password authentication?

If you use password authentication in the {{site.productNameTM}} Designer, select **Password** as the **SSH Authentication Type**. Then, specify the secure password associated with the SSH username.

![Enable-SSH](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/ssh-password.png '#width=385px')

**SSH Password**: Specify the secure password for the SSH username (keep this confidential).

### How do I use public key authentication?

If you use public key authentication in the {{site.productNameTM}} Designer, select **Public key** as the **SSH Authentication Type**. Upload your encrypted private key file and provide the associated passphrase.

![Enable-SSH](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/ssh-public-key.png '#width=385px')

**SSH Private Key**: Upload your encrypted private key file for authentication (keep this confidential).

**SSH Passphrase**: Specify the passphrase required to decrypt your private key.

> SSH Tunneling is not applicable in the {{site.productNameTM}} cloud version.

## What are the technical requirements for SSH tunneling?

{{site.productNameTM}} SSH tunneling connections have the following private key requirements:

1. Only encrypted private key file in **.pem** format is allowed for SSH public key authentication.

2. Ensure your private key is encrypted with a passphrase before uploading it.

3. SSH supports .pem private keys in the following formats: RSA, DSA, ECDSA (256/384/521), and ED25519.

## How do I keep SSH connections secure?

To keep {{site.productNameTM}} SSH tunnel connections secure, follow these practices:

1. Always keep your SSH credentials (username, password, private key, and passphrase) secure and accessible only to authorized users.

2. Use strong, complex SSH password and passphrase for private key encryption.

3. Limit SSH access to only required users, and restrict allowed IP address ranges at the SSH server whenever possible.

> Refer to the `Public Key Authentication` section in the [SSH.NET NuGet package](https://www.nuget.org/packages/SSH.NET/) for more details.

## How do I troubleshoot SSH tunnel errors?

Use the following checks when an SSH tunnel in the {{site.productNameTM}} Designer fails.

**Private key upload failure:**

* Double-check the private key file is in **.pem** format.

**Authentication errors:**

* Verify your SSH server name, username and authentication type.

* For password authentication, check for typos.

* For public key authentication:

    * Ensure the private key file content starts with "-----BEGIN".

    * Make sure the private key is encrypted with the proper passphrase.

    * Verify your SSH passphrase.

**Cannot establish SSH tunnel (connection refused or timed out):**

* Double-check the SSH credentials. Make sure the server allows SSH connection from your network.

* Ensure any firewalls or network policies permit outgoing SSH connection from the {{site.productNameTM}} Designer.

## Supported Data Connectors

The following {{site.productNameTM}} data connectors support SSH tunneling connections:

* [Microsoft SQL](./../../data-connectors/sql-data-source/)
* [PostgreSQL](./../../data-connectors/postgresql-data-source/)
* [MySQL](./../../data-connectors/mysql-data-source/)
* [MemSQL](./../../data-connectors/memsql-data-source/)
* [MariaDB](./../../data-connectors/mariadb-data-source/)
* [CDATA](./../../data-connectors/cdata-data-source/)
* [Amazon Aurora](./../../data-connectors/amazon-aurora-data-source/)
* [Google cloud SQL (MySQL and PostgreSQL)](./../../data-connectors/google-cloud-sql-data-source/)
* [Amazon RDS (Microsoft SQL, MySQL, MariaDB and PostgreSQL)](./../../data-connectors/amazon-rds-data-source/)

## Frequently asked questions

### Which SSH authentication types does {{site.productNameTM}} support?

{{site.productNameTM}} Designer supports **Password** and **Public key** as the **SSH Authentication Type**.

### Which private key format is required for SSH public key authentication?

Only an encrypted private key file in **.pem** format is allowed. Supported formats are RSA, DSA, ECDSA (256/384/521), and ED25519.

### Can I use SSH tunneling in the {{site.productNameTM}} cloud version?

No. SSH Tunneling is not applicable in the {{site.productNameTM}} cloud version.

## See also

* [Connection settings overview](./../../connection-settings/)
* [Data connectors overview](./../../data-connectors/)
* [Connect PostgreSQL data source](./../../data-connectors/postgresql-data-source/)
