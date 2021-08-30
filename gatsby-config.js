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
          "gatsby-remark-reading-time",
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              loadingStrategy: 'lazy',
             },
          },
          "gatsby-remark-responsive-iframe",
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
