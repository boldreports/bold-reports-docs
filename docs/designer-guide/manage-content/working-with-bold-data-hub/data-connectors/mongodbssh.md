---
layout: post
title: Connect MongoDB over SSH to Bold Data Hub | {{site.productName}}
description: Connect a MongoDB database over SSH to Bold Data Hub in {{site.productName}}. Set the SSH and connection properties, create a pipeline, and schedule data refresh.
platform: Report-platform
documentation: ug

---

# Connect MongoDB over SSH with Bold Data Hub

The Bold Data Hub MongoDB SSH connector loads data from a MongoDB database over an SSH connection into {{site.productNameTM}}. [MongoDB](https://www.mongodb.com/) is a NoSQL database that stores JSON-like documents.

## Connection Properties

The MongoDB SSH connector in Bold Data Hub reads the following properties from the `config` section of a YAML file:

  ```yaml
  connectorname: MongoDBSSH
      config:
        connection_url: mongodb://dbuser:passwd@host:port
        database: databasename
        ssh_host: ssh_hostname
        ssh_port: ssh_port
        ssh_user: ssh_username
        ssh_private_key_path: privatekey
      select:
        - tablename
  ```

### Example Configuration

The following Bold Data Hub YAML template shows a complete MongoDB SSH extractor configuration:

```yaml
version: 1.0.1
encrypt_credentials: false
plugins:
  extractors:
    - name: MongoDBSSH
      connectorname: MongoDBSSH
      config:
        connection_url: mongodb://dbuser:passwd@host:port
        database: databasename
        ssh_host: ssh_hostname
        ssh_port: ssh_port
        ssh_user: ssh_username
        ssh_private_key_path: privatekey
      select:
        - tablename
```

### Typical Ways to Configure MongoDB and Their Connection URLs

The Bold Data Hub MongoDB SSH connector works with these typical MongoDB setups. The table lists each connection URL format and whether SSH is needed:

| Name                | Description                                                                           | Connection URL Example                            | SSH Considerations |
| ------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------- |
| Local Installation  | Install on `Windows`, `macOS`, `Linux` using official packages.                      | `mongodb://dbuser:passwd@host.or.ip:27017`        | Not needed if local |
| Docker              | Deploy using the MongoDB Docker image.                                                | `mongodb://dbuser:passwd@docker.host:27017`      | Use SSH to access a remote Docker host |
| MongoDB Atlas       | MongoDB’s managed service on AWS, Azure, and Google Cloud.                           | `mongodb+srv://dbuser:passwd@cluster.mongodb.net` | SSH is not required (TLS used) |
| Managed Cloud       | AWS `DocumentDB`, `Azure Cosmos DB`, and others offer `MongoDB` as a managed database. | `mongodb://dbuser:passwd@managed.cloud:27017`     | Typically accessed via VPC; SSH if required |
| Configuration Tools | Use `Ansible`, `Chef`, or `Puppet` for automated setup and configuration.             | `mongodb://dbuser:passwd@config.tool:27017`      | SSH may be required for remote execution |
| Replica Set         | Set up for high availability with data replication across multiple MongoDB instances. | `mongodb://dbuser:passwd@replica.set:27017`      | SSH needed for secure remote access |
| Sharded Cluster    | Scalable distribution of datasets across multiple MongoDB instances.                  | `mongodb://dbuser:passwd@shard.cluster:27017`     | SSH needed for secure remote access |
| Kubernetes          | Deploy on Kubernetes using Helm charts or operators.                                  | `mongodb://dbuser:passwd@k8s.cluster:27017`      | Use `kubectl port-forward` or SSH to cluster nodes |
| Manual Tarball      | Install directly from the official MongoDB tarball, typically on Linux.               | `mongodb://dbuser:passwd@tarball.host:27017`     | SSH typically required for remote servers |

## How do I connect MongoDB over SSH in Bold Data Hub?

You connect MongoDB over SSH by creating a project in Bold Data Hub and adding the `MongoDBSSH` template to it.

1. Click the `Data Hub` icon on the Navigation Pane.

    ![MongoDBSSH Data Hub- Reports](/static/assets/on-premise/images/manage-content/working-with-etl/clickdatahub.png#max-width=100%)

2. Click `Add Project` and enter a name for the new project.

    ![MongoDBSSH Data Hub- Reports](/static/assets/on-premise/images/manage-content/working-with-etl/addpipeline.png#max-width=100%)

3. Select the newly created project and add the `MongoDBSSH` template.

    ![MongoDBSSH Data Hub- Reports](/static/assets/on-premise/images/manage-content/working-with-etl/mongossh_addtemplate.png#max-width=100%)

4. Update the required details in the template, using the configuration parameters below.
5. Click **Save** and choose the destination to save the pipeline.

    ![MongoDBSSH Data Hub- Reports](/static/assets/on-premise/images/manage-content/working-with-etl/mongossh_yaml.png#max-width=100%)

Creating a pipeline in Bold Data Hub automatically creates a data source in {{site.productNameTM}}. The {{site.productNameTM}} data source is a live data source to the destination database used in Bold Data Hub.

### Configuration Parameters

The MongoDB SSH template in Bold Data Hub uses these parameters:

|Parameters | Description          |
|--------------------------|----------------------------------------------|
| **Name:**                | MongoDBSSH                                      |
| **Connector Name:**      | MongoDBSSH |
| **Connection URL:**      | Specify the connection URL for the MongoDB server in the format `mongodb://dbuser:passwd@host:port`. |
| **Database:**            | Specify the name of the MongoDB database from which data will be extracted. |
| **Select**: | **Tablename(s):** Specify the table name list to load tables from the MongoDB server. |
| **SSH Host:**        | Specify the SSH hostname for connecting to the MongoDB server.                          |
| **SSH Port:**        | Specify the SSH port number.                                                            |
| **SSH User:**        | Specify the SSH username.                                                               |
| **SSH Private Key:** | Specify the path to the SSH private key file for authentication.

**Note:** MongoDBSSH doesn't support Incremental or Full Table Refresh.

## How do I schedule the MongoDB SSH pipeline?

You schedule the MongoDB SSH pipeline in Bold Data Hub from the schedules tab, or you run it on demand.

1. To configure interval-based scheduling, click the schedules tab, select the created pipeline, click the schedule icon, and configure the schedule.

    ![MongoDBSSH - Reports](/static/assets/on-premise/images/manage-content/working-with-etl/schedule_schedules.png#max-width=100%)

    ![MongoDBSSH - Reports](/static/assets/on-premise/images/manage-content/working-with-etl/schedule_scheduledialog.png#max-width=100%)

2. For an on-demand refresh, click the `Run Now` button.

    ![MongoDBSSH - Reports](/static/assets/on-premise/images/manage-content/working-with-etl/schedule_runnow.png#max-width=100%)

3. Check the schedule history with the history option and the logs.

    ![MongoDBSSH - Reports](/static/assets/on-premise/images/manage-content/working-with-etl/schedule_history.png#max-width=100%)

4. Click **Logs** to see whether the run is completed and the data source is created in {{site.productNameTM}}.

    ![MongoDBSSH - Reports](/static/assets/on-premise/images/manage-content/working-with-etl/pipeline_DsCreated.png#max-width=100%)

5. Click the `Edit DataSource` option to view the created tables.

**Note:** `isdatapersist` and `previous_intervalmin` are not applicable in mongodb.

## Frequently asked questions

### Does the MongoDB SSH connector support incremental refresh?

No. The Bold Data Hub MongoDBSSH connector doesn't support Incremental or Full Table Refresh.

### Is SSH required for MongoDB Atlas?

No. SSH is not required for MongoDB Atlas because TLS is used.

## See also

* [Schedule Bold Data Hub jobs](../../schedule/)
* [Work with Bold Data Hub pipelines](../../working-with-pipelines/)
* [Bold Data Hub connectors list](../)
