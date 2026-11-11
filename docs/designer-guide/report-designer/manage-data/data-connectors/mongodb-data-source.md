---
title: Connect a MongoDB Data Source to RDL Reports | Bold Reports
description: Connect the Bold Reports Web Report Designer to MongoDB with SCRAM, X.509, or SSL and query data with runCommand syntax to build your RDL reports.
---
# Connect to MongoDB data source

To connect Bold Reports<sup>®</sup> to MongoDB, open the **Data** configuration panel in the Web Report Designer and create a MongoDB data source. You then query the data in code mode with MongoDB `runCommand` syntax.

## How do I create a MongoDB data source?

To create a MongoDB data source in the Bold Reports<sup>®</sup> Web Report Designer, open the **Data** configuration panel and choose the MongoDB connection type.

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/data-configuration-panel.png '#width=410px')
2. In the `DATA` configuration panel, click the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/new-data-button.png '#width=355px')
3. In the connection type panel, choose the `MongoDB` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/connection-types.png '#width=355px')

### How do I configure the basic options?

When you create a new data source in the Web Report Designer, the `NEW DATASOURCE` panel shows the basic options.

1. Specify the data source name without special characters in the **Name** field.
2. In the [Connection string scheme](./../../../manage-data/data-connectors/mongodb-data-source/#connection-string-scheme) field, choose **mongodb** or **mongodb+srv**.
3. In the **Host** field, specify one or more host and port combinations.

   For single host: host1:27017.

   For multiple hosts (e.g., for replica set or sharded cluster): host1:27017,host2:27018.
4. In the **Options** field, provide any valid connection string options separated by &.

   Example: tls=true&retryWrites=true&replicaSet=mySet&readPreference=primary.
5. In the [Authentication Type](./../../../manage-data/data-connectors/mongodb-data-source/#authentication-types) field, choose **None** or **SCRAM** or **X.509** authentication.
6. Choose an existing valid database, e.g. sample_mflix.
   ![Basic Option](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/basic-options.png '#width=355px')
7. Click `Connect` to open the query design pane. Enter the required query and execute it. The corresponding values appear in a grid for preview.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/execute-schema.png '#width=600px')
   > Only query mode is supported for MongoDB data source.
8. Click `Finish` to save the data source with a relevant name and continue designing the report.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/data-list.png '#width=355px')

#### Connection string scheme

The Bold Reports<sup>®</sup> MongoDB connector lets you set the connection string scheme to either **mongodb** or **mongodb+srv**.

To connect using the standard connection format, choose **mongodb** under **Connection string scheme**.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/scheme-mongodb.png '#width=355px')

To connect to a cloud-hosted MongoDB (such as Atlas) using DNS-based host discovery without specifying ports, choose **mongodb+srv** under **Connection string scheme**.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/scheme-mongodbsrv.png '#width=355px')

#### Authentication types

The Bold Reports<sup>®</sup> MongoDB connector supports the **None**, **SCRAM**, and **X.509** authentication types.

If your MongoDB server does not require authentication, choose **None** under **Authentication Type**.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/authentication-none.png '#width=355px')

If your MongoDB server requires a username, password, and authentication database, choose **SCRAM** as the **Authentication Type** and enter the username, password, and authentication database for the server specified in the *Server Name* field.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/authentication-scram.png '#width=355px')

For **SCRAM** authentication, the authSource parameter is configured through the Authentication Database field in the UI. Do not duplicate it in the `Options` field.

If your MongoDB server uses SSL encryption with client certificates, choose **X.509** under **Authentication Type** and provide the Client Certificate File and Client Certificate Password for the server specified in the *Server Name* field.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/authentication-x509.png '#width=355px')

Enable `Allow Self-Signed Certificates` if the MongoDB server is configured to accept self signed certificates.

#### How do I connect to MongoDB through SSL?

Bold Reports<sup>®</sup> connects to MongoDB data sources securely using an SSL/TLS connection. The SSL/TLS connection ensures encrypted communication between the client and the MongoDB server, providing a secure method to access remote databases over untrusted networks.

![Enable-SSL](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/enable-ssl-mongodb.png '#width=385px')

**Client Certificate**: The SSL certificate used for client authentication when connecting to the MongoDB server.

**Client Certificate Password**: The password associated with the client certificate, if it is encrypted.

#### What should I consider for MongoDB connections?

Keep the following technical considerations in mind when you connect Bold Reports<sup>®</sup> to MongoDB:

1. MongoDB integration in Bold Reports<sup>®</sup> uses the `runCommand` method, allowing interaction with one database context per connection. Query execution is always scoped to the selected database.
2. When using SSL or X.509 authentication, MongoDB often provides the client certificate in .pem format. Since the .NET driver does not support .pem files directly, you must convert it to .pfx format. A password is required during this conversion and must be provided in the Client Certificate Password field along with the .pfx file in the UI.
3. The Options field must only be used to specify additional connection parameters that are not available through the UI. Do not duplicate or override values already configured through dedicated UI fields.
4. In cases where SSL/TLS is required without using a client certificate (e.g., when connecting with username and password over SSL), you may enable `tls=true` directly in the Options field.

#### Which sample queries can I use?

The MongoDB data source in Bold Reports<sup>®</sup> Designer supports Code Mode for querying data. Internally, the connector uses the MongoDB `runCommand` to execute queries on the connected database. The following sample queries retrieve data:

* Retrieve all documents from a collection:

   ```json
   {
      find:"products"
   }
   ```

* Filter documents with condition:

   ```json
   {
      find:"products",
      filter:{productId: "PRD123"}
   }
   ```

* Sorting data:

   ```json
   {
      find:"products",
      sort:{price: -1}
   }
   ```

* Filter documents with multiple conditions:

   ```json
   {
      find: "products",
      filter: {
         "orderDetails.date": { $gt: ISODate("2022-01-09")},
         "orderDetails.status": { $in: ["Shipped", "Processing"] },
         $and:[
            {"payment.totalAmount": { $not: { $gt: 1000 } }},
            {"payment.totalAmount": { $type: "double" }}
         ]
      }
   }
   ```

* Filter documents using parameter:

   ```json
   {
      find: "orders",
      filter: {
         "payment.method": @paymentType,
         "payment.totalAmount": { $gte: @amount },
         "orderDetails.date": { $gte: @greater}
      }
   }
   ```

* Filter documents using multi value parameter:

   ```json
   {
      find: "orders",
      filter: {
         orderId: { $in: [@param] }
      }
   }
   ```

* Lookup (Join) between collections:

   ```json
   {
      aggregate: "orders",
      pipeline: [
                  {
                     $lookup: {
                           from: "customer",
                           localField: "customerId",
                           foreignField: "Id",
                           as: "customerDetails"
                     }
                  }
      ],
      cursor: {}
   }
   ```

* Unwind array fields:

   ```json
   {
      aggregate: "orders",
      pipeline: [
         { $unwind: "$items" }
      ],
      cursor: {}
   }
   ```

* Flatten a nested object:

   ```json
   {
      aggregate: "orders",
      pipeline: [
         {
            $project: {
            customerId: "$customer.customerId",
            name: "$customer.name",
            email: "$customer.email",
            phone:"$customer.contact.phone",
            street:"$customer.contact.address.street",
            city:"$customer.contact.address.city",
            state:"$customer.contact.address.state",
            postalCode:"$customer.contact.address.postalCode",
            country:"$customer.contact.address.country",
            }
         }
      ],
      cursor: {}
   }
   ```

> Bold Reports<sup>®</sup> uses MongoDB's runCommand syntax internally to execute queries. This means you can write your queries in the same format supported by MongoDB's runCommand. For more advanced query scenarios, you can search online for MongoDB runCommand examples or refer to the official MongoDB documentation. These examples will help you construct queries compatible with Bold Reports<sup>®</sup>' MongoDB connector.

## Frequently asked questions

### Does the MongoDB data source support design view?

No. Only query mode is supported for the MongoDB data source.

### Which authentication types does the MongoDB connector support?

The MongoDB connector supports **None**, **SCRAM**, and **X.509** authentication.

### Can I use a .pem client certificate with MongoDB?

The .NET driver does not support .pem files directly. Convert the certificate to .pfx format and provide its password in the Client Certificate Password field.

## See also

* [Data connectors overview](./../../data-connectors/)
* [Connect to JSON data source](./../../data-connectors/json-data-source/)
* [Connect to MySQL data source](./../../data-connectors/mysql-data-source/)
