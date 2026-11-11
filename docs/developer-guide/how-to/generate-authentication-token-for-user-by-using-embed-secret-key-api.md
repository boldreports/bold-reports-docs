---
title: Generate a User Token with Embed Secret Key | Bold Reports
description: Generate a user authentication token for Bold Reports Report Server with the Embed Secret Key API by signing the nonce, timestamp, and email with HMACSHA256.
keywords: report-platform
---

# How to generate the authentication token by using the Embed Secret Key API

You can generate the authentication token for a user in Bold Reports<sup>®</sup> Report Server by using the Embed Secret Key API. The request is signed with the embed secret key from the Report Server Embed settings.

## Which parameters go in the request body?

The Bold Reports<sup>®</sup> Embed Secret Key API takes the following parameters in the request body:

   `username` - The user's email address.

   `grant_type` - The type of credentials used to authorize the request for an authentication token. The valid value is **embed_secret**.

   `embed_nonce` - A random string value that restricts attackers from hacking. For example, **5ff24040-cd74-42cf-a168-57f8cb7dafed**.

   `timestamp` - The current time as a UNIX timestamp. For example: **1583934776**.

   `embed_signature` - By using the `username`, `embed_nonce`, `timestamp` and the `embed secret key`(which can be generated from Bold Reports<sup>®</sup> Report server Embed settings), the `embed_signature` value can be generated using the `HMACSHA256` algorithm.

## What do I need for the C# sample?

The Bold Reports<sup>®</sup> C# sample below shows the approach. Add the following assemblies to the namespace:

* `System.Collections.Generic`
* `System.Net.Http`
* `Newtonsoft.Json`
* `System.Security.Cryptography`
* `System.Net`

> Reference the `Newtonsoft.Json` assembly from the [Newtonsoft.Json NuGet package](https://www.nuget.org/packages/Newtonsoft.Json/).

## .NET,.NET Core, and .NET Framework

The following .NET code signs the embed message with the embed secret key and requests a Bold Reports<sup>®</sup> token:

```csharp
public class Token
{
    public string access_token { get; set; }

    public string token_type { get; set; }

    public string expires_in { get; set; }

    public string email { get; set; }

    public string error { get; set; }

    public string error_description { get; set; }

}

private static string tokenurl = "/reporting/api/site/site1/token";
private static string boldReportsUrl = "https://demo.example.com"; // Provide your Bold Reports<sup>®</sup> URL
private static string username = "user@example.com"; // Provide your Email ID
private static string nonce = Guid.NewGuid().ToString();
private static string timeStamp = DateTimeToUnixTimeStamp(DateTime.UtcNow).ToString();
private static string secretCode = "lettffAEI0FtKDGdrDekEv7WUbHwOwO"; // Provide your embed secret key value from the Bold Reports<sup>®</sup> Report Server Embed Settings.

public static void Main(string[] args)
{
    ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12; // This is required while running the Bold Reports<sup>®</sup> from Azure App Service
    GetToken();
}

public static Token GetToken()
{
    var client = new HttpClient();
    client.BaseAddress = new Uri(boldReportsUrl);
    client.DefaultRequestHeaders.Accept.Clear();
    client.DefaultRequestHeaders.ConnectionClose = true;
    string embedMessage = "embed_nonce=" + nonce + "&user_email=" + username + "&timestamp=" + timeStamp;
    string signature = SignURL(embedMessage.ToLower(), secretCode);

    var content = new FormUrlEncodedContent(new[]
    {
       new KeyValuePair<string, string>("grant_type", "embed_secret"),
       new KeyValuePair<string, string>("username", username),
       new KeyValuePair<string, string>("embed_nonce", nonce),
       new KeyValuePair<string, string>("embed_signature", signature),
       new KeyValuePair<string, string>("timestamp", timeStamp)
    });

    var result = client.PostAsync(tokenurl, content).Result;

    string resultContent = result.Content.ReadAsStringAsync().Result;

    if (JsonConvert.DeserializeObject<Token>(resultContent)?.error == "authorization_failed")
    {
        Console.WriteLine("authorization_failed: " + JsonConvert.DeserializeObject<Token>(resultContent)?.error_description);
        Console.ReadLine();
        Environment.Exit(-1);
    }

    return JsonConvert.DeserializeObject<Token>(resultContent);
}

public static double DateTimeToUnixTimeStamp(DateTime dateTime)
{
    DateTime unixStart = new DateTime(1970, 1, 1, 0, 0, 0, 0, System.DateTimeKind.Utc);
    long unixTimeStampInTicks = (dateTime.ToUniversalTime() - unixStart).Ticks;
    return unixTimeStampInTicks / TimeSpan.TicksPerSecond;
}

public static string SignURL(string embedMessage, string secretcode)
{
    var encoding = new UTF8Encoding();
    var keyBytes = encoding.GetBytes(secretcode);
    var messageBytes = encoding.GetBytes(embedMessage);
    using (var hmacsha1 = new HMACSHA256(keyBytes))
        {
            var hashMessage = hmacsha1.ComputeHash(messageBytes);
            return Convert.ToBase64String(hashMessage);
        }
}

```

## NODE JS

The following Node.js code signs the embed message with the embed secret key and requests a Bold Reports<sup>®</sup> embed token:

```JavaScript
// ESM style (add "type": "module" to package.json or use .mjs extension)
import crypto from 'crypto';
import fetch from 'node-fetch'; // npm install node-fetch@2 (for Node < 18) or use native fetch in Node 18+

// ────────────────────────────────────────────────
// Configuration: Bold Reports Server
const BOLD_REPORTS_URL   = 'https://demo.example.com';           // Your Bold Reports server URL
const SITE_IDENTIFIER    = 'site1';                             // Multi-tenant site name
const USER_EMAIL         = 'user@example.com';                  // Must exist in Bold Reports
const EMBED_SECRET_KEY   = 'lettffAEI0FtKDGdrDekEv7WUbHwOwO';   // From Embed Settings → Embed Secret Key
// ────────────────────────────────────────────────

function getUnixTimestampSeconds() {
  return Math.floor(Date.now() / 1000).toString();
}

function generateNonce() {
  return crypto.randomUUID?.() ?? crypto.randomBytes(16).toString('hex');
}

function createEmbedSignature(message, secret) {
  const hmac = crypto.createHmac('sha256', Buffer.from(secret, 'utf8'));
  hmac.update(message, 'utf8');
  return hmac.digest('base64');
}

async function generateEmbedToken() {
  const nonce     = generateNonce();
  const timestamp = getUnixTimestampSeconds();

  // Construct message exactly as per Bold Reports docs
  const embedMessage = `embed_nonce=${nonce}&user_email=${USER_EMAIL}&timestamp=${timestamp}`;

  const signature = createEmbedSignature(embedMessage, EMBED_SECRET_KEY);

  const tokenEndpoint = `${BOLD_REPORTS_URL}/reporting/api/site/${SITE_IDENTIFIER}/token`;

  const body = new URLSearchParams({
    grant_type:      'embed_secret',
    username:        USER_EMAIL,
    embed_nonce:     nonce,
    embed_signature: signature,
    timestamp,
  });

  try {
    const response = await fetch(tokenEndpoint, {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    body.toString(),
      // Optional: timeout after 10s
      signal:  AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Token request failed: HTTP ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    if (data.error === 'authorization_failed') {
      throw new Error(`Authorization failed: ${data.error_description || 'Unknown reason'}`);
    }

    if (!data.access_token) {
      throw new Error('No access_token returned in response');
    }

    console.log('Embed Token generated successfully:');
    console.log(JSON.stringify(data, null, 2));



    return data.access_token;
  } catch (err) {
    console.error('Failed to generate embed token:');
    console.error(err.message);
    if (err.cause) console.error('Cause:', err.cause);
    process.exitCode = 1;
  }
}


generateEmbedToken();

```

## How do I use the generated token?

After Bold Reports<sup>®</sup> Report Server generates the token, attach it to the request header (Authorization) for all subsequent API calls to authenticate the requests.

## Frequently asked questions

### What value does grant_type take for the Embed Secret Key API?

The valid value of `grant_type` is **embed_secret**.

### Where do I get the embed secret key?

You generate the embed secret key from the Bold Reports<sup>®</sup> Report Server Embed settings.

## See Also

* [How to generate the authentication from Report server UI](../generate-authentication-token-for-bold-reports-server/)

* [How to generate the authentication token for Bold Reports<sup>®</sup> Report Server using credentials?](../generate-authentication-token-for-bold-reports-server-using-credentials/)
