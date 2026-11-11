import React, { useMemo, useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'gatsby';
import navigationData from '../../left-toc.json';

function buildSearchIndex() {
	const entries = Array.isArray(navigationData.pagesData) ? navigationData.pagesData : [];
	const seen = new Set();

	return entries
		.filter((item) => item && item.title && item.path)
		.map((item) => ({
			title: item.title,
			path: item.path,
			fileType: item.fileType,
			breadcrumb: item.breadcrumb || [],
			searchText: `${item.title} ${item.path}`.toLowerCase(),
		}))
		.filter((item) => {
			if (seen.has(item.path)) return false;
			seen.add(item.path);
			return true;
		});
}

const headerSearchIndex = buildSearchIndex();

const HeaderSearch = () => {
	const searchContainerRef = useRef(null);
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const filteredSearchResults = useMemo(() => {
		const trimmedQuery = searchQuery.trim().toLowerCase();
		if (!trimmedQuery) return [];
		return headerSearchIndex.filter((item) => item.searchText.includes(trimmedQuery)).slice(0, 10);
	}, [searchQuery]);

	useEffect(() => {
		setSearchResults(searchQuery.trim() ? filteredSearchResults : []);
	}, [filteredSearchResults, searchQuery]);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			const container = searchContainerRef.current;
			if (container && !container.contains(e.target)) {
				setSearchResults([]);
			}
		};

		const handleEscapeKey = (e) => {
			if (e.key === 'Escape') {
				setSearchQuery('');
				setSearchResults([]);
			}
		};

		window.addEventListener('click', handleOutsideClick);
		window.addEventListener('keydown', handleEscapeKey);

		return () => {
			window.removeEventListener('click', handleOutsideClick);
			window.removeEventListener('keydown', handleEscapeKey);
		};
	}, []);

	const handleSearchInputChange = useCallback((e) => {
		setSearchQuery(e.target.value);
	}, []);

	const clearSearch = useCallback(() => {
		setSearchQuery('');
		setSearchResults([]);
		if (typeof window !== 'undefined') {
			window.requestAnimationFrame(() => {
				const input = searchContainerRef.current?.querySelector('input[type="search"]');
				if (input) input.focus();
			});
		}
	}, []);

	return (
		<div className="search-box" ref={searchContainerRef}>
			<span className="bd-icon bd-icon-search search-icon" />
			<input
				type="search"
				placeholder="Search..."
				value={searchQuery}
				onChange={handleSearchInputChange}
				aria-label="Search documentation"
			/>
			{searchQuery && (
				<button type="button" className="search-clear-btn" aria-label="Clear search" onClick={clearSearch}>
					×
				</button>
			)}
			{(searchResults.length > 0 || searchQuery.trim() !== '') ? (
				<ul className="left-toc-search-suggestions header-search-suggestions">
					{searchResults.length > 0 ? (
						searchResults.map((result) => (
							<li key={result.path}>
								{result.fileType === 'html' ? (
									<a
										className="search-suggestion-btn"
										href={`${navigationData.pathPrefix || ''}${result.path}`}
										target="_blank"
									>
										{Boolean(result.breadcrumb.length) && (
											<span className="search-suggestion-breadcrumb">
												{result.breadcrumb.map((node, idx) => (
													<React.Fragment key={idx}>
														{idx > 0 && <span className="bd-icon bd-icon-chevronright" aria-hidden="true" />}
														<span>{node.title}</span>
													</React.Fragment>
												))}
											</span>
										)}
										{result.title}
									</a>
								) : (
									<Link
										className="search-suggestion-btn"
										to={result.path}
										onClick={() => {
											setSearchQuery('');
											setSearchResults([]);
										}}
									>
										{Boolean(result.breadcrumb.length) && (
											<span className="search-suggestion-breadcrumb">
												{result.breadcrumb.map((node, idx) => (
													<React.Fragment key={idx}>
														{idx > 0 && <span className="bd-icon bd-icon-chevronright" aria-hidden="true" />}
														<span>{node.title}</span>
													</React.Fragment>
												))}
											</span>
										)}
										{result.title}
									</Link>
								)}
							</li>
						))
					) : (
						<li className="no-results">No results</li>
					)}
				</ul>
			) : null}
		</div>
	);
};

export default HeaderSearch;
