---
title: Generate a User Token Using Credentials | Bold Reports
description: Generate a user authentication token for Bold Reports Report Server with the Authentication API by passing the username, password, and grant type in code.
keywords: report-platform
---

# How to generate the authentication token for Bold Reports<sup>®</sup> Report Server using credentials

You can generate the authentication token for a user in Bold Reports<sup>®</sup> Report Server by using the <a href="../../../rest-api-reference/v1.0/server-api-reference/#operation/Authentication" target="_blank">Authentication API</a> with the user's credentials.

## Which parameters do I pass?

The Bold Reports<sup>®</sup> Authentication API takes the following parameters:

   `username` - The user's email address.

   `password` - The user's password.

   `grant_type` - The type of credentials used to authorize the request for an authentication token. The valid value is **password**.

## .NET,.NET Core, and .NET Framework

In .NET, use `HTTPClient` with `ASP.NET Core`, `ASP.NET MVC`, and `ASP.NET Web Forms` applications to call the Bold Reports<sup>®</sup> RESTful APIs. The following code generates the authentication token using the credentials:

```csharp
 public class TokenHelper
    {
        public string GenerateToken()
        {
            System.Net.ServicePointManager.SecurityProtocol |= System.Net.SecurityProtocolType.Tls11 | System.Net.SecurityProtocolType.Tls12;
            string userName = "user@example.com"; //Provide your Email ID
            string password = "demo"; //Provide your Password

            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Clear();

                var content = new FormUrlEncodedContent(new[]
                {
                new KeyValuePair<string, string>("grant_type", "password"),
                new KeyValuePair<string, string>("username", userName),
                new KeyValuePair<string, string>("password", password)
                  });

                var result = client.PostAsync("https://demo.example.com/reporting/api/site/site1/token", content).Result;
                string resultContent = result.Content.ReadAsStringAsync().Result;
                var token = JsonConvert.DeserializeObject<Token>(resultContent);

                return token.token_type + " " + token.access_token;
            }
        }
    }
    public class Token
    {
        public string access_token { get; set; }

        public string token_type { get; set; }

        public string expires_in { get; set; }

        public string userName { get; set; }

        public string serverUrl { get; set; }

        public string password { get; set; }
    }
```

## JavaScript

In JavaScript, use `Ajax` to call the Bold Reports<sup>®</sup> RESTful APIs. The following code generates the authentication token using the credentials:

```js
   <script type="text/javascript">
         $(function () {
               var dataValue = "";
               var apiRequest = new Object();
               apiRequest.password = "demo"; //Provide your Password
               apiRequest.userid = "user@example.com"; // Provide your Email ID
               $.ajax({
                  type: "POST",
                  url: "https://demo.example.com/reporting/api/site/site1/get-user-key",
                  data: apiRequest,
                  success: function (data) {
                     dataValue = data.Token;
                     var token = JSON.parse(dataValue);
                  }
               });
         });
   </script>
```

## NODE JS

In Node.js, use the `Http` module to call the Bold Reports<sup>®</sup> RESTful APIs. The following code generates the authentication token using the credentials:

```js
function token(res, callback, callbackInput) {
  var postData = JSON.stringify({
    userid: 'user@example.com', // Provide your Email ID
    password: 'demo' // Provide your Password
  })

  var options = {
    method: 'POST',
    host: 'demo.example.com',
    port: 443,
    path: '/reporting/api/site/site1/get-user-key',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': postData.length
    }
  };

  var request = gethttp().request(options, function (response) {
    var data = '';

    response.on('data', function (chunk) {
      data += chunk;
    });

    response.on('end', function () {
      var tokenData = JSON.parse(data);
      var tokenObject = JSON.parse(tokenData.Token);
      callbackFunction(res, tokenObject.token_type + ' ' + tokenObject.access_token, callback, callbackInput);
    });
  });

  request.on('error', error => {
    console.error(error)
  })

   request.end();
}
```

## Frequently asked questions

### What value does grant_type take for credentials?

The valid value of `grant_type` for credentials is **password**.

### What does the .NET sample return?

The .NET sample returns the token type followed by the access token, ready to use as an authorization value.

## See Also

* [How to generate the authentication token from Report Server UI](../generate-authentication-token-for-bold-reports-server/)

* [How to generate the authentication token by using Embed Secret Key API](../generate-authentication-token-for-user-by-using-embed-secret-key-api/)
