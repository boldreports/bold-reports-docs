import React from 'react';
import { Helmet } from "react-helmet";
import { withPrefix } from 'gatsby';
import config from '../../config.json';

// All of these values are set in config.json.
const branding = config.branding || {};
const analytics = config.analytics || {};
const favicon = withPrefix(branding.favicon);
const appIcon = withPrefix(branding.appIcon);
const ogImg = withPrefix(branding.socialImage);
const tagManagerId = analytics.googleTagManagerId || '';
const colorVariables = Object.entries(branding.colors || {}).map(([name, value]) => `${name}: ${value};`).join(' ');

const HeadTag = ({ pageContext = {} }) => {
	const { slug = '', frontmatter = {} } = pageContext;
	const metaRobot = { name: 'robots', content: 'follow' };

	const canonicalHref = (() => {
		const val = frontmatter?.canonical;
		if (!val) return null;
		if (/^https?:\/\//i.test(val)) return val;
		if (typeof window !== 'undefined' && window.location?.origin) {
			const origin = window.location.origin;
			return val.startsWith('/') ? origin + val : origin + '/' + val;
		}
		return val;
	})();

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'en' }}>
				<title>{frontmatter?.title}</title>
				<meta name="description" content={frontmatter?.description} />
				{frontmatter?.keywords && <meta name="keywords" content={frontmatter.keywords} />}
				<meta name={metaRobot.name} content={metaRobot.content} />
				{canonicalHref && <link rel="canonical" href={canonicalHref} />}

				<link rel="icon" href={favicon} />
				<link rel="icon" href={appIcon} sizes="192x192" />
				<link rel="apple-touch-icon" href={appIcon} />
				<meta name="msapplication-TileImage" content={appIcon} />

				<meta property="og:title" content={frontmatter?.title} />
				<meta property="og:description" content={frontmatter?.description} />
				<meta property="og:image" content={ogImg} />
				<meta property="og:image:secure_url" content={ogImg} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:alt" content={`${config.product.name} Documentation`} />
				<meta property="og:type" content="article" />
				<meta property="og:site_name" content={`${config.product.name} Docs`} />
				<meta property="og:locale" content="en_US" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={frontmatter?.title} />
				<meta name="twitter:description" content={frontmatter?.description} />
				<meta name="twitter:image" content={ogImg} />

				{colorVariables && <style>{`:root { ${colorVariables} }`}</style>}

				{tagManagerId && <script>
					{`
            		(function(w, d, s, l, i) {
                	w[l] = w[l] || [];
                	w[l].push({
                    	'gtm.start': new Date().getTime(),
                    	event: 'gtm.js'
                	});
                	var f = d.getElementsByTagName(s)[0],
                    	j = d.createElement(s),
                    	dl = l != 'dataLayer' ? '&l=' + l : '';
                	j.async = true;
                	j.src =
                    	'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                	f.parentNode.insertBefore(j, f);
            	})(window, document, 'script', 'dataLayer', '${tagManagerId}');
        	`}
				</script>}
			</Helmet>
		</>
	);
};

export default HeadTag;
