/*!
*  filename: gatsby-config.js
*  version : 2.3.26
*  Copyright © 2001 - 2021 Syncfusion Inc. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
const toc = require('./left-toc.json');
module.exports = {
  pathPrefix: toc.pathPrefix ? toc.pathPrefix : '/',
  plugins: [
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-K73VBT8"
      }
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`String.prototype.startsWith`, `String.prototype.includes`, `Array.prototype.includes`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
        ignore: [`templates/**/`, `**/summary.md`]
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: "bash", cmd: "bash", cs: "csharp", "c#": "csharp", "cshtml": "html" }
            }
          },
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              styleAttributes: true,
              dataAttributes: false
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_target",
              rel: "nofollow"
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers'
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: '#2973b7'
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-client-side-redirect`
  ]
}
