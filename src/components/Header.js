import React from 'react';
import { Link } from 'gatsby';
import HeaderSearch from './HeaderSearch';
import config from '../../config.json';
import '../assets/css/tabs.css';
import '../assets/css/focus.css';
import '../assets/css/header.css';

const Header = () => {
	return (
		<>
			<header id="header-container">
				<div>
					<div id="header-left-side">
						<a href="/" className="header-home-link">
							<div className="header-logo"></div>
						</a>
						<span className="header-docs-text">
							<Link to="/">{config.additionalInfo.header}</Link>
						</span>
					</div>

					<div id="header-middle-side">
						<HeaderSearch />
					</div>

					{/* Kept empty so the logo and search keep their original positions */}
					<div id="header-right-side" aria-hidden="true"></div>
				</div>
			</header>
		</>
	);
};

export default Header;
