import React, { useMemo } from 'react';
import { Link } from 'gatsby';

const normalizePath = (value = '') => {
	if (!value) return '/';
	const pathname = String(value).split(/[?#]/)[0].trim();
	if (!pathname || pathname === '/') return '/';
	return pathname.endsWith('/') ? pathname : `${pathname}/`;
};

const getCurrentPath = (currentPath = '') => {
	if (currentPath) return normalizePath(currentPath);
	if (typeof window !== 'undefined' && window.location?.pathname) {
		return normalizePath(window.location.pathname);
	}
	return '/';
};

const resolveNavigationEntry = (navigation = {}, currentPath = '') => {
	const normalizedPath = getCurrentPath(currentPath);
	if (!navigation || typeof navigation !== 'object') {
		return null;
	}

	return navigation[normalizedPath] || navigation[currentPath] || null;
};

const NavigationButtons = ({ navigation = {}, currentPath = '', pathPrefix = '' }) => {
	const { prev, next } = useMemo(() => {
		const entry = resolveNavigationEntry(navigation, currentPath);
		return {
			prev: entry?.prev || null,
			next: entry?.next || null,
		};
	}, [navigation, currentPath]);

	if (!prev && !next) return null;

	const renderButton = (type, item) => {
		if (!item?.path || !item?.title) return null;
		const isExternal = /^https?:\/\//i.test(item.path);
		const content = (
			<>
				<div className={`doc-icons ${type === 'prev' ? 'icon-prev_icon nav-prev-icon previous-icon' : 'icon-next_icon nav-next-icon next-icon'}`} aria-hidden="true">
					<span className={`bd-icon ${type === 'prev' ? 'bd-icon-backarrow' : 'bd-icon-front-arrow'} font-20`} />
				</div>
				<div className={type === 'prev' ? 'nav-prev-text' : 'nav-next-text'}>
					<div className="nav-label">{type === 'prev' ? 'Previous' : 'Next'}</div>
					<div className="nav-title">{item.title}</div>
				</div>
			</>
		);

		return type === 'prev' ? (
			<div id="prev-button">
				{(isExternal || item.fileType === 'html') ? (
					<a id="prev-link" href={item.fileType === 'html' ? `${pathPrefix}${item.path}` : item.path} target={item.fileType === 'html' ? '_blank' : (item.target || '_self')} aria-label={`Previous: ${item.title}`}>
						{content}
					</a>
				) : (
					<Link id="prev-link" to={item.path} aria-label={`Previous: ${item.title}`}>
						{content}
					</Link>
				)}
			</div>
		) : (
			<div id="next-button">
				{(isExternal || item.fileType === 'html') ? (
					<a id="next-link" href={item.fileType === 'html' ? `${pathPrefix}${item.path}` : item.path} target={item.fileType === 'html' ? '_blank' : (item.target || '_self')} aria-label={`Next: ${item.title}`}>
						{content}
					</a>
				) : (
					<Link id="next-link" to={item.path} aria-label={`Next: ${item.title}`}>
						{content}
					</Link>
				)}
			</div>
		);
	};

	return (
		<nav id="nav-buttons" aria-label="Document navigation">
			{prev && renderButton('prev', prev)}
			{next && renderButton('next', next)}
		</nav>
	);
};

export default NavigationButtons;
