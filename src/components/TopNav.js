import React, { useState } from 'react';
import '../assets/css/top-nav.css';

const TopNav = ({ tabs = [], activeTab, onTabChange }) => {
	const [internalActiveTab, setInternalActiveTab] = useState(tabs[0] || '');
	const resolvedActiveTab = activeTab || internalActiveTab;
	const activeIndex = tabs.indexOf(resolvedActiveTab);

	const handleTabClick = (index) => {
		const nextTab = tabs[index];
		setInternalActiveTab(nextTab);
		if (onTabChange) {
			onTabChange(nextTab, index);
		}
	};

	return (
		<div className="top-nav-container" role="tablist" aria-label="Documentation sections">
			{tabs.map((tab, index) => (
				<button
					key={index}
					className={`top-nav-btn ${index === activeIndex ? 'active' : ''}`}
					type="button"
					aria-pressed={index === activeIndex}
					onClick={() => handleTabClick(index)}
				>
					{tab}
				</button>
			))}
		</div>
	);
};

export default TopNav;