# Introduction
Bold Reports supports Single Sign-On (SSO) authentication to streamline secure access to its APIs. Users can authenticate either through Microsoft Azure Entra ID tokens or by providing valid credentials

You can create authentication token in the Bold Reports application using the REST API.

If `https://<yourdomain>/reporting/site/<tenant-name>` is your Bold Reports site URL, then API end of this site will be accessed by `https://{yourdomain}/reporting/api/site/{tenant-name}`

**Follow the below steps to get started,**
- [HTTP methods](#section/Getting-Started/HTTP-Methods)
- [Response Status](#section/Getting-Started/Response-Status)
- [Content Header](#section/Getting-Started/Content-Header)
- [Conventions](#section/Getting-Started/Conventions)

# Getting Started
## HTTP Methods
HTTP defines a collection of request methods that can be used to determine the action to be taken. The following HTTP methods are used to manipulate and retrieve data in Bold Reports.

|    Method    |      Description                     |
| ------------ | ------------------------------------ |
| GET          |  Retrieve Data                       |
| POST         |  Create resources and perform actions|
| PUT          |  Update Data                         |
| DELETE       |  Delete Data                         |


## Response Status
Response status codes are used by Bold Reports to indicate whether API calls were successful or unsuccessful. This will assist you in determining the error or message type.

The following table shows the HTTP status codes used in the Bold Reports.

| **Status Code** | **Message**                | **Details**                                                                                                                                                      |
| --------------- | -------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200             | Success                    | This indicates that the processing was completed successfully.                                                                                                   |
| 201             | Success                    | This indicates that the item was successfully created.                                                                                                           |
| 202             | Accepted                   | The request was approved, but it will be processed later.                                                                                                        |
| 204             | Success                    | It indicates that a request was successful, but that the client does not need to navigate away from its current page.                                            |
| 400             | Client or Validation Error | It indicates that the server is unable to process the request due to a client error (for example, invalid request message framing or malicious request routing). |
| 401             | Authentication Failure     | As indicated by this value, the Authorization header is either missing or incorrect.                                                                             |
| 403             | Access Denied              | It indicates that the server has received the request but was denied due to insufficient permission.                                                             |
| 404             | API/Item Not Found         | Either the API URL or the object id we are trying to load is invalid.                                                                                            |
| 405             | Invalid method type        | It indicates invalid method type is passed.                                                                                                                      |
| 500             | Unexpected Server Error    | The error occurred in the application while processing your request. To resolve this issue, please contact us and submit a support ticket.                       |

## Content Header
The Content-Type HTTP header must be set in request headers to make a Post/Put request with JSON. In Bold Reports, the following Content-Types are supported:

 - **Content-Type:** application/json
 - **Content-Type:** application/x-www-form-urlencoded

The Content-Type header in the response headers specifies the type of content returned by the server.

## Conventions
The JSON format is used in Bold Reports for API requests and responses, which can include different data types. The following is a list of data types that are used in Bold Reports for API operations.

| **Type** | **Description** |
| --------- | -----------------|
| String    | String type with Unicode support.     |
| Guid      | 128 bit integer unique identifier.    |
| Long      | Signed 64 bit integral number.        |
| Integer   | Signed 32 bit integral number.        |
| Byte      | Unsigned 8 bit integral number.       |
| Boolean   | True/False type.                      |
| Datetime  | **YYYY-MM-DD THH:MM:SSZ** is the combined date and time format. API's uses the UTC Time-Zone for all Date-time values<br><br>or <br> <br> Should mention the user TimeZone like this **YYYY-MM-DDTHH:MM:SS+00:00**<br><br>**Find the example for IST TimeZone:** <br>2017-05-09T15:04:40.331 +05:30 |
| Date      | **YYYY-MM-DD** is the Date format.    |
| Tuple     | It is a data structure that contains the sequence of elements of different data types. |
| Array     | Sequential collection of elements of the same data type. |