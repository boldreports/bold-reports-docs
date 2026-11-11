---
title: How to Export a Report from Report Server | Bold Reports
description: Export a report from Bold Reports Report Server to PDF, Excel, Word, HTML, PPT, CSV, or XML with the Export Report API, using a sample C Sharp request.
keywords: report-platform
---

# How to export the report from Bold Reports<sup>®</sup> Report Server

You can export a report from Bold Reports<sup>®</sup> Report Server into any format (Excel, PDF, HTML, PPT, CSV, XML, and Word) using the <a href="../../../rest-api-reference/v1.0/server-api-reference/#operation/Items_ExportReport" target="_blank">Export Report API</a>.

## What do I need before I export a report?

To export a report with the Report Server Export Report API, you need read access to the report and an authentication token.

>The user must have `Read` permission for the reports.

>The authentication token must be passed in the authorization header. To obtain the authentication token, use the <a href="../../../rest-api-reference/v1.0/server-api-reference/#operation/Authentication" target="_blank">Authentication API</a>

## Which parameters go in the request body?

The Report Server Export Report API takes the following parameters in the request body.

   `Report Id` - The ID of the report.

   `Server Path` - The relative URL of the report.

   `Export Type` - The desired export format (PDF, Excel, HTML, PPT, CSV, XML, or Word).

## How do I call the Export Report API from C#?

The following sample C# code calls the Report Server Export Report API and saves the result as a PDF file.

Add the following assemblies to the namespace:

* `System.Runtime.Serialization.Json`
* `System.IO`
* `Newtonsoft.Json`
* `System.Net`
* `System.Collections.Generic`
* `System.Text`
> Reference the `Newtonsoft.Json` assembly from the [Newtonsoft.Json NuGet package](https://www.nuget.org/packages/Newtonsoft.Json/).

```csharp
public class ApiExportReport
{

   public Guid ReportId { get; set; }

   public string ServerPath { get; set; }

   public string ExportType { get; set; }
}

public class ItemResponse
{
   public bool Status { get; set; }

   public byte[] FileContent { get; set; }

   public string StatusMessage { get; set; }

   public string ApiStatus { get; set; }

}

public static ItemResponse ExportReport()
{
   var BoldReportsURL = "https://demo.example.com"; // Provide your Bold Reports<sup>®</sup> URL
   var itemId = Guid.Parse("b401dfc7-91f8-42a6-9f30-0b3e1323a5cc"); // Provide your Report ID
   var exporttypeId = "PDF";
   var itemRequest = new ApiExportReport
      {
       ReportId = itemId,
       ExportType = exporttypeId
      };
      using (var proxy = new CustomWebClient())
      {
         var ser = new DataContractJsonSerializer(typeof(ApiExportReport));
         var mem = new MemoryStream();
         ser.WriteObject(mem, itemRequest);
         proxy.Headers["Content-type"] = "application/json";
         proxy.Headers["Authorization"] = token.token_type + " " + token.access_token; // token must be passed here
         proxy.Encoding = Encoding.UTF8;
         var data = Encoding.UTF8.GetString(mem.ToArray(), 0, (int)mem.Length);
         try
         {
           var rdata = proxy.UploadString(new Uri(BoldReportsURL + "/reporting/api/site/site1/v1.0/reports/export"), "POST", data);
            var result = JsonConvert.DeserializeObject<ItemResponse>(rdata);
            File.WriteAllBytes("D://Test.pdf", result.FileContent);
            return result;
         }
         catch (WebException ex)
         {
            if (ex.Response is HttpWebResponse)
               {
                  var resp = new StreamReader(ex.Response.GetResponseStream()).ReadToEnd();
                  dynamic obj = JsonConvert.DeserializeObject(resp);
                  Console.WriteLine(obj);
               }
         }
         return null;
      }
}

class CustomWebClient : WebClient
{
   protected override WebRequest GetWebRequest(Uri uri)
   {
      var request = base.GetWebRequest(uri);
      request.Timeout = 4 * 60 * 1000; //Increase time out
      if (request is HttpWebRequest)
      {
      (request as HttpWebRequest).KeepAlive = false;
      }
      return request;
   }
}
```

## Frequently asked questions

### Which formats can I export a report to?

The Report Server Export Report API exports to Excel, PDF, HTML, PPT, CSV, XML, and Word.

### What permission do I need to export a report?

You must have `Read` permission for the report, and you pass an authentication token in the authorization header.

## See also

* [Export a report using the API in Postman](./../export-the-report-using-api/)
* [Export a report with filter parameters using the API](./../export-the-report-with-filter-parameter-using-api/)
* [Generate an authentication token using credentials](./../generate-authentication-token-for-bold-reports-server-using-credentials/)
