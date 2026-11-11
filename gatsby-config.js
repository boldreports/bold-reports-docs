const toc = require('./left-toc.json');

module.exports = {
	pathPrefix: toc.pathPrefix ? toc.pathPrefix : '/',
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
				ignore: [`templates/**/`, `**/summary.md`],
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-code-buttons`,
						options: {
							buttonContainerClass: `copy-icon copy-button-container`,
							buttonClass: `copy-icon copy-button`,
							tooltipText: `Copy`,
							toasterTextClass: `copy-icon copy-toaster-text`,
							toasterText: `Copied!`,
							toasterClass: `copy-icon copy-toaster`,
							align: `right`,
						},
					},
					'gatsby-remark-reading-time',
					{
						resolve: 'gatsby-remark-embed-video',
						options: {
							loadingStrategy: 'lazy',
						},
					},
					'gatsby-remark-responsive-iframe',
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							aliases: { sh: 'bash', cmd: 'bash', cs: 'csharp', 'c#': 'csharp', cshtml: 'html' },
						},
					},
					{
						resolve: `gatsby-remark-image-attributes`,
						options: {
							dataAttributes: false,
						},
					},
					{
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_target',
							rel: 'noopener noreferrer',
						},
					},

					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
					{
						resolve: `gatsby-remark-autolink-headers`,
						options: {
							icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="28"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
							className: `custom-header-link`,
							isIconAfterHeader: true,
							elements: [`h2`, `h3`, `h4`, `h5`, `h6`],
						},
					},
				],
			},
		},
		`gatsby-plugin-catch-links`,
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: '#2973b7',
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-client-side-redirect`,
		`@babel/plugin-transform-classes`,
	],
};
