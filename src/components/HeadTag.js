import React from 'react';
import { Helmet } from "react-helmet";
import favicon32 from '../assets/img/favicon-32x32.png';
import favicon192 from '../assets/img/favicon-192x192.png';
import favicon180 from '../assets/img/favicon-180x180.png';
import favicon270 from '../assets/img/favicon-270x270.png';
import ogImg from '../assets/img/og-img.png';
import config from '../../config.json';

//UUID Passing to GTM - Starts Here
export const visitorUidScript = `
function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

function setCookie(name, value, expiryDays = 30) {
    if (!value) return;

    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + expiryDays * 24 * 60 * 60 * 1000);

    const cookieString = name + "=" + encodeURIComponent(value) + "; path=/; domain=.boldreports.com; expires=" + expiryDate.toUTCString();
    document.cookie = cookieString;
}

function generateVisitorUid() {
    const now = new Date();
    const jan = new Date(now.getFullYear(), 0, 1);
    const jul = new Date(now.getFullYear(), 6, 1);

    const estOffset = (Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()) <= now.getTimezoneOffset() ? -4 : -5) * 3600000;
    const loadTimeOffset = now.getTimezoneOffset() * 60000;
    const timestamp = now.getTime() + loadTimeOffset + estOffset;
    const random = Math.floor(Math.random() * 1000) + 1;

    return "" + random + timestamp;
}

function getVisitorUid() {
    const cookieUuid = getCookie("_uid");

    if (cookieUuid) return cookieUuid;

    const newUuid = generateVisitorUid();
    setCookie('_uid', newUuid, 365);

    return newUuid;
}

const visitorUid = getVisitorUid() || "";

if (visitorUid) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.unshift({
        'event': 'visitor_uid_loaded',
        'visitor_uid': visitorUid
    });
}
`;

//UUID Passing to GTM - ends here

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

				<link rel="icon" href={favicon32} sizes="32x32" />
				<link rel="icon" href={favicon192} sizes="192x192" />
				<link rel="apple-touch-icon" href={favicon180} />
				<meta name="msapplication-TileImage" content={favicon270} />

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

				<script>{visitorUidScript}</script>
				<script>
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
            	})(window, document, 'script', 'dataLayer', 'GTM-K73VBT8');
        	`}
				</script>
			</Helmet>
		</>
	);
};

export default HeadTag;
