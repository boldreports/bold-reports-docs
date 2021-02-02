---
title: User Token API | Bold Reports On-Premise Edition
description: This documentation explains about how to get user token using the API in the Bold Reports On-Premise Edition.
keywords: report-platform
---

# How to generate the access token for Bold Reports Report Server user

You can generate the access token for the user in Bold Reports by using the <a href="../../../rest-api-reference/v1.0/#operation/Authentication" target="_blank">Authentication API</a> For this, pass the following parameters in request body.

   `username` - Email address of the user.

   `password` - Password of the user.

   `grant_type` - This type of credentials are used to authorize the request for an access token. Valid values: **password**.

Here is a sample C# code to illustrate the approach.

Add the following assemblies in namespace

* `System.Collections.Generic`
* `System.Net.Http`
* `Newtonsoft.Json`
> Refer `Newtonsoft.Json` assembly from [nuget package](https://www.nuget.org/packages/Newtonsoft.Json/)

```csharp
public class Token
{
   public string access_token { get; set; }

   public string token_type { get; set; }

   public string expires_in { get; set; }

   public string userName { get; set; }

}

private static string tokenurl = "/reporting/api/site/site1/token";

public static Token GenerateToken(string userName, string password)
  {
     try
      {
         var BoldReportsURL = "https://on-premise-demo.boldreports.com";
         using (var client = new HttpClient())
            {
               client.BaseAddress = new Uri(BoldReportsURL);
               client.DefaultRequestHeaders.Accept.Clear();

               var content = new FormUrlEncodedContent(new[]
                  {
                     new KeyValuePair<string, string>("grant_type", "password"),
                     new KeyValuePair<string, string>("username", userName),
                     new KeyValuePair<string, string>("password", password)
                  });
                  var result = client.PostAsync(tokenurl, content).Result;
                  string resultContent = result.Content.ReadAsStringAsync().Result;

                  return JsonConvert.DeserializeObject<Token>(resultContent);
               }
      }
      catch (Exception)
      {
         //ignored
      }

      return new Token();
   }
````

After token is generated, use the generated token by attaching in the request header(Authorization) for all subsequent API calls to authenticate the requests.