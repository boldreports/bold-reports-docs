---
title: List Report Server Items with Get Items API | Bold Reports
description: Use the Bold Reports Report Server Get Items API to list categories, reports, datasets, data sources, and schedules, with a sample C Sharp code request.
keywords: report-platform
---

# How to get the list of items from Bold Reports<sup>®</sup> Report Server

You can get the list of items (Category, Reports, Dataset, Data source, and Schedule) from Bold Reports<sup>®</sup> Report Server by using the <a href="../../../rest-api-reference/v1.0/server-api-reference/#operation/Items_GetItems" target="_blank">Get Items API</a>. The API returns the items that match the item type and path you pass.

## Which parameters does the Get Items API need?

The Bold Reports<sup>®</sup> Get Items API reads the following query parameters:

   `itemType` - Pass the item type (Category, Reports, Dataset, Data source, or Schedule).

   `serverPath` - The path of the category.

## How do I authenticate the request?

The Report Server Get Items API needs an authentication token in the authorization header.

>The authentication token must be passed in the authorization header. To obtain the authentication token, use the <a href="../../../rest-api-reference/v1.0/server-api-reference/#tag/Password-Authentication" target="_blank">Authentication API</a> or [Embed Secret Key API](../../../developer-guide/how-to/generate-authentication-token-for-user-by-using-embed-secret-key-api/).

## Which assemblies do I need for the C# sample?

The Bold Reports<sup>®</sup> C# sample uses the following assemblies. Add them to the namespace:

* `System.IO`
* `Newtonsoft.Json`
* `System.Net`
* `System.Collections.Generic`
* `System.Text`
> Refer to the `Newtonsoft.Json` assembly from the [Newtonsoft.Json NuGet package](https://www.nuget.org/packages/Newtonsoft.Json/).

## What does a sample C# request look like?

The following C# code calls the Report Server Get Items API with the item type `Report` and returns the items as a list of `ApiItems` objects:

```csharp
public class ApiItems
{
   public bool CanRead { get; set; }

   public bool CanWrite { get; set; }

   public bool CanDelete { get; set; }

   public bool CanSchedule { get; set; }

   public bool CanDownload { get; set; }

   public bool CanOpen { get; set; }

   public bool CanMove { get; set; }

   public bool CanCopy { get; set; }

   public bool CanClone { get; set; }

   public bool CanCreateItem { get; set; }

   public Guid? CategoryId { get; set; }

   public string CategoryName { get; set; }

   public int ModifiedById { get; set; }

   public string CreatedByDisplayName { get; set; }

   public int CreatedById { get; set; }

   public string ModifiedByFullName { get; set; }

   public string ItemLocation { get; set; }

   public int ItemType { get; set; }

   public Guid Id { get; set; }

   public string CreatedDate { get; set; }

   public string ModifiedDate { get; set; }

   public DateTime ItemModifiedDate { get; set; }

   public DateTime ItemCreatedDate { get; set; }

   public Guid ReportId { get; set; }

   public string ReportName { get; set; }

   public string Name { get; set; }

   public string Description { get; set; }

}

public static List<ApiItems> GetItems()
{
   var BoldReportsURL = "https://demo.example.com"; // Provide your Bold Reports<sup>®</sup> URL
   var itemType = "Report";

   using (var proxy = new CustomWebClient())
   {
     proxy.Headers["Content-type"] = "application/json";
     proxy.Headers["Authorization"] = token.token_type + " " + token.access_token; // token must be passed here
     proxy.Encoding = Encoding.UTF8;

     try
      {
         var rdata = proxy.DownloadString(new Uri(BoldReportsURL + "/reporting/api/site/site1/v1.0/items?itemType=" + itemType));
         var response = JsonConvert.DeserializeObject<List<ApiItems>>(rdata);
         return response;
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

### Which item types can the Get Items API return?

The Bold Reports<sup>®</sup> Get Items API returns Category, Reports, Dataset, Data source, and Schedule items. You choose the type with the `itemType` query parameter.

### Where do I pass the authentication token?

You pass the token in the authorization header of the request. You can get it from the Authentication API or the Embed Secret Key API.

## See also

* [Generate an authentication token with credentials](../../../developer-guide/how-to/generate-authentication-token-for-bold-reports-server-using-credentials/)
* [Generate an authentication token with the Embed Secret Key API](../../../developer-guide/how-to/generate-authentication-token-for-user-by-using-embed-secret-key-api/)
* [Export a report from Report Server](../../../developer-guide/how-to/export-report-from-bold-reports-server/)
