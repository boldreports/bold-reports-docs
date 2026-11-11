import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'gatsby';
import '../assets/css/mobile-lefttoc.css';

const normalizePath = (value = '') => {
	if (!value) return '';
	const path = String(value).split(/[?#]/)[0].trim();
	if (!path) return '';
	if (path === '/') return '/';
	return path.endsWith('/') ? path : `${path}/`;
};

const hasNestedChildren = (items = []) => {
	return (items || []).some((item) => Array.isArray(item?.items) && item.items.length > 0);
};

const hasActiveDescendant = (items = [], currentPath = '') => {
	const target = normalizePath(currentPath);

	for (const item of items || []) {
		if (normalizePath(item?.path) === target) return true;
		if (item?.items?.length && hasActiveDescendant(item.items, currentPath)) return true;
	}

	return false;
};

const findFirstExpandableKey = (items = [], parentKey = '') => {
	for (let index = 0; index < (items || []).length; index += 1) {
		const item = items[index];
		const itemKey = parentKey ? `${parentKey}.${index}` : `${index}`;
		const hasChildren = Array.isArray(item?.items) && item.items.length > 0;
		const isSection = item?.type === 'section';

		if (hasChildren && !isSection) {
			return itemKey;
		}

		if (hasChildren) {
			const nestedKey = findFirstExpandableKey(item.items, itemKey);
			if (nestedKey) {
				return nestedKey;
			}
		}
	}

	return '';
};

const filterTree = (items = [], term = '') => {
	if (!term) return items;

	const search = term.toLowerCase();

	return (items || [])
		.map((item) => {
			if (!item) return null;

			const match = String(item?.title || '').toLowerCase().includes(search);

			if (Array.isArray(item.items) && item.items.length > 0) {
				const filteredChildren = filterTree(item.items, term);

				if (match || filteredChildren.length > 0) {
					return {
						...item,
						items: filteredChildren,
					};
				}
			}

			return match ? item : null;
		})
		.filter(Boolean);
};

const MobileTocItem = ({
	item,
	currentPath,
	level = 0,
	onNavigate,
	searchTerm = '',
	pathPrefix = '',
	anyActiveInTab = false,
	itemKey = '',
	autoExpandKey = '',
}) => {
	const shouldAutoOpen = Boolean(!anyActiveInTab && autoExpandKey && itemKey === autoExpandKey);

	const getInitialOpen = () => {
		if (normalizePath(item?.path) === normalizePath(currentPath) || (Array.isArray(item?.items) && item.items.length > 0 && hasActiveDescendant(item.items, currentPath))) {
			return true;
		}

		if (searchTerm && Array.isArray(item?.items) && item.items.length > 0) {
			return true;
		}

		if (shouldAutoOpen) {
			return true;
		}

		return false;
	};

	const [open, setOpen] = useState(getInitialOpen);
	const hasChildren = Array.isArray(item?.items) && item.items.length > 0;
	const isSection = item?.type === 'section';
	const isLink = item?.type === 'page' && item?.path;
	const isHtmlLink = isLink && item?.fileType === 'html';
	const isActive = normalizePath(item?.path) === normalizePath(currentPath);
	const childIsActive = hasChildren && hasActiveDescendant(item.items, currentPath);

	useEffect(() => {
		if (isActive || childIsActive || (searchTerm && hasChildren)) {
			setOpen(true);
			return;
		}

		if (shouldAutoOpen) {
			setOpen(true);
			return;
		}

		if (level === 0) {
			setOpen(false);
		}
	}, [isActive, childIsActive, hasChildren, searchTerm, level, shouldAutoOpen]);

	const toggle = (e) => {
		if (!hasChildren || isSection) return;
		e.preventDefault();
		e.stopPropagation();
		setOpen((prev) => !prev);
	};

	return (
		<div className={`toc-item level-${level} ${isActive ? 'active-item' : ''}`}>
			<div
				className={`toc-title ${hasChildren ? 'sub-main-title' : 'sub-title'} ${isActive ? 'active-link' : ''}`}
				onClick={toggle}
				style={{
					cursor: hasChildren && !isSection ? 'pointer' : 'default',
				}}
			>
				{hasChildren && !isSection && (
					<span
						className={`arrow ${open ? 'bd-icon-expandable' : 'bd-icon-collapsible'}`}
						aria-hidden="true"
					/>
				)}

				{isLink ? (
					isHtmlLink ? (
						<a href={`${pathPrefix}${item.path}`} target="_blank" >
							{item.title}
						</a>
					) : (
						<Link
							to={item.path}
							onClick={(e) => {
								e.stopPropagation();
								onNavigate?.();
							}}
							activeClassName="active-link"
						>
							{item.title}
						</Link>
					)
				) : (
					<span className={isSection ? 'section-title' : ''}>{item?.title}</span>
				)}
			</div>

			{hasChildren && (open || isSection) && (
				<div className={`${level === 0 ? 'toc-main-children' : 'toc-children'}${level === 0 && item?.type !== 'section' && hasChildren ? ' has-border' : ''}`}>
					{item.items.map((child, index) => (
						<MobileTocItem
							key={child.path || child.title}
							item={child}
							currentPath={currentPath}
							level={level + 1}
							onNavigate={onNavigate}
							searchTerm={searchTerm}
							pathPrefix={pathPrefix}
							anyActiveInTab={anyActiveInTab}
							itemKey={itemKey ? `${itemKey}.${index}` : `${index}`}
							autoExpandKey={autoExpandKey}
						/>
					))}
				</div>
			)}
		</div>
	);
};

const MobileLeftToc = ({ open, tabs = [], activeTab, onTabChange, leftTocData = {}, currentPath, onClose, pathPrefix = '' }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const dropdownRef = useRef(null);

	const getTabs = useMemo(() => {
		if (!leftTocData) return [];

		if (Array.isArray(tabs) && tabs.length > 0) {
			return tabs.map((tabName) => ({
				tabName,
				items: leftTocData?.[tabName]?.items || [],
			}));
		}

		if (typeof leftTocData === 'object' && !Array.isArray(leftTocData)) {
			return Object.entries(leftTocData).map(([tabName, tabData]) => ({
				tabName,
				items: tabData.items || [],
			}));
		}

		return [];
	}, [leftTocData, tabs]);

	const currentItems = useMemo(() => {
		if (!activeTab) return [];
		return leftTocData?.[activeTab]?.items || [];
	}, [leftTocData, activeTab]);

	const anyActiveInTab = useMemo(() => hasActiveDescendant(currentItems, currentPath), [currentItems, currentPath]);

	const visibleItems = useMemo(() => filterTree(currentItems, searchTerm), [currentItems, searchTerm]);
	const autoExpandKey = useMemo(() => (searchTerm ? '' : findFirstExpandableKey(visibleItems)), [visibleItems, searchTerm]);
	const showNoResults = Boolean(searchTerm.trim()) && visibleItems.length === 0;

	useEffect(() => {
		if (!open) {
			setDropdownOpen(false);
		}
	}, [open]);

	useEffect(() => {
		if (!dropdownOpen) return undefined;

		const handleOutsideClick = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setDropdownOpen(false);
			}
		};

		document.addEventListener('mousedown', handleOutsideClick);
		document.addEventListener('touchstart', handleOutsideClick);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
			document.removeEventListener('touchstart', handleOutsideClick);
		};
	}, [dropdownOpen]);

	useEffect(() => {
		setSearchTerm('');
	}, [activeTab]);

	useEffect(() => {
		if (typeof document === 'undefined') return undefined;
		document.body.classList.toggle('mobile-toc-open', Boolean(open));

		return () => {
			document.body.classList.remove('mobile-toc-open');
		};
	}, [open]);

	if (!open) return null;

	const handleTabSelect = (tab) => {
		if (typeof onTabChange === 'function') {
			onTabChange(tab);
		}
		setSearchTerm('');
		setDropdownOpen(false);
	};

	return (
		<>
			<div className="mobile-lefttoc-backdrop open" onClick={onClose} role="button" tabIndex={0} aria-label="Close menu" />
			<button type="button" className="mobile-lefttoc-backdrop-close" aria-label="Close menu" onClick={onClose}>
				×
			</button>
			<aside className="mobile-lefttoc open" aria-label="Mobile navigation menu">
				<div className="mobile-lefttoc-header">
					<div className="mobile-lefttoc-brandrow">
						<div className="mobile-lefttoc-brand-actions" />
					</div>

					<div ref={dropdownRef} className={`mobile-lefttoc-dropdown-wrapper ${dropdownOpen ? 'open' : ''}`}>
						<button
							type="button"
							className="mobile-lefttoc-dropdown-trigger"
							onClick={() => setDropdownOpen((prev) => !prev)}
							aria-expanded={dropdownOpen}
							aria-label="Open documentation sections"
						>
							{activeTab || 'Docs'}
						</button>

						{dropdownOpen && (
							<ul className="mobile-lefttoc-dropdown-menu" role="listbox" aria-label="Documentation sections">
								{getTabs.map((tab) => (
									<li
										key={tab.tabName}
										className={`mobile-lefttoc-dropdown-item ${tab.tabName === activeTab ? 'active' : ''}`}
										onClick={() => handleTabSelect(tab.tabName)}
										role="option"
										aria-selected={tab.tabName === activeTab}
									>
										<span>{tab.tabName}</span>
									</li>
								))}
							</ul>
						)}
					</div>

					<div className="mobile-lefttoc-search">
					  <span className="bd-icon bd-icon-search left-toc-search-icon" aria-hidden="true" />
						<input
							type="search"
							id="auto-complete"
							placeholder="Filter by title"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							aria-label="Search table of contents"
						/>
						{searchTerm && (
							<button type="button" className="search-clear-btn" onClick={() => setSearchTerm('')} aria-label="Clear search">
								×
							</button>
						)}
					</div>
				</div>

				<nav id="left-sidebar" className="sidebar mobile-left-sidebar" aria-label="Left table of contents">
					<div className="toc-tab-group">
						<div className="toc-tab-items">
							{visibleItems.map((item, index) => (
								<MobileTocItem
									key={item.path || item.title || index}
									item={item}
									currentPath={currentPath}
									onNavigate={onClose}
									searchTerm={searchTerm}
									pathPrefix={pathPrefix}
									anyActiveInTab={anyActiveInTab}
									itemKey={`${index}`}
									autoExpandKey={autoExpandKey}
								/>
							))}
							{showNoResults && (
								<div className="mobile-no-results">
									No results found for <strong>"{searchTerm.trim()}"</strong>
								</div>
							)}
						</div>
					</div>
				</nav>
			</aside>
		</>
	);
};

export default MobileLeftToc;
