import React, { useMemo } from 'react';
import { Link } from 'gatsby';

const normalizePath = (value = '') => {
	if (!value) return '';
	const path = String(value).split(/[?#]/)[0].trim();
	if (!path) return '';
	if (path === '/') return '/';
	return path.endsWith('/') ? path : `${path}/`;
};

const isExternalLink = (value = '') => /^https?:\/\//i.test(value);

const isHtmlFileType = (item = {}) => item?.fileType === 'html';

const getCurrentPath = (pathName = '') => {
	if (pathName) return normalizePath(pathName);
	if (typeof window !== 'undefined' && window.location?.pathname) {
		return normalizePath(window.location.pathname);
	}
	return '/';
};

const getTitleIndex = (routerData = {}) => {
	const index = {};
	Object.entries(routerData || {}).forEach(([path, entry]) => {
		if (entry?.title && !index[entry.title]) {
			index[entry.title] = normalizePath(path);
		}
	});
	return index;
};

const resolveBreadcrumbTrail = (routerData = {}, currentPath = '') => {
	const normalizedPath = getCurrentPath(currentPath);
	const entry = routerData?.[normalizedPath] || routerData?.[currentPath] || null;
	const titleIndex = getTitleIndex(routerData);

	if (!entry?.breadcrumb?.length) {
		const fallbackTitle = entry?.title || 'Home';
		return [{ title: fallbackTitle, path: normalizedPath || '/' }];
	}

	return entry.breadcrumb.map((item, index) => {
		const isLast = index === entry.breadcrumb.length - 1;
		const title = item?.title || '';
		const resolvedPath = normalizePath(item?.path || titleIndex[title] || (isLast ? normalizedPath : ''));

		return {
			title,
			path: resolvedPath || '',
			isCurrent: isLast,
		};
	});
};

const Breadcrumb = ({ breadCrumb = {}, currentPath = '', onToggleMobileToc, pathPrefix = '' }) => {
	const trail = useMemo(() => resolveBreadcrumbTrail(breadCrumb, currentPath), [breadCrumb, currentPath]);
	const showMobileToggle = typeof onToggleMobileToc === 'function';

	return (
		<div id="breadcrumb-container">
			<nav id="doc-breadcrumb" aria-label="Breadcrumb">
				{showMobileToggle && (
					<button
						type="button"
						className="breadcrumb-toggle"
						aria-label="Open left menu"
						onClick={onToggleMobileToc}
					>
						<span className="bd-icon bd-icon-unorderedlist" />
					</button>
				)}

				<div className="seperator-line" aria-hidden="true" />

				<Link to="/" className="breadcrumb-home" aria-label="Home">
					<span className="bd-icon bd-icon-home-agent" />
					{trail.length === 1 && <span className="breadcrumb-home-title">Home</span>}
				</Link>

				{trail.length > 1 &&
					trail.slice(0, -1).map((item, index) => {
						const isLast = index === trail.length - 1;
						const label = item?.title || '';
						const href = item?.path || '';

						if (!label) return null;

						return (
							<React.Fragment key={`${label}-${href || index}`}>
								<span className="bd-icon bd-icon-chevronright" aria-hidden="true" />
								{!isLast && href && !isExternalLink(href) && !isHtmlFileType(item) ? (
									<Link className={`doc-bread-nav${index === 0 ? ' doc-bread-nav-first' : ''}`} to={href} aria-label={`Navigate to ${label}`}>
										{label}
									</Link>
								) : href && (isExternalLink(href) || isHtmlFileType(item)) ? (
									<a className={`doc-bread-nav${index === 0 ? ' doc-bread-nav-first' : ''}`} href={isHtmlFileType(item) ? `${pathPrefix}${href}` : href} aria-label={`Navigate to ${label}`}>
										{label}
									</a>
								) : (
									<span className={`doc-bread-nav${index === 0 ? ' doc-bread-nav-first' : ''} ${isLast ? 'breadcrumb-subsection' : ''}`} aria-current={isLast ? 'page' : undefined}>
										{label}
									</span>
								)}
							</React.Fragment>
						);
					})}
			</nav>
		</div>
	);
};

export default Breadcrumb;
