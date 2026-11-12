import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/focus-mode.css';
import focusOnLight from '../assets/img/focus-mode-on-light.svg';
import focusOffLight from '../assets/img/focus-mode-off-light.svg';
import focusOnDark from '../assets/img/focus-mode-on-dark.svg';
import focusOffDark from '../assets/img/focus-mode-off-dark.svg';

export default function FocusMode() {
	const storageKey = 'site_focus_mode';
	const focusTooltipId = 'focus_tooltip';

	const [isFocusModeEnabled, setIsFocusModeEnabled] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(
		typeof document !== 'undefined' && document.body.classList.contains('dark-mode')
	);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const focusContainerRef = useRef(null);

	const openAIChatWindow = (baseUrl, basePath = '') => {
		const pageUrl = window.location.origin + window.location.pathname;
		const prompt = `Read ${pageUrl} and answer questions about the content.`;
		const url = new URL(baseUrl);
		if (basePath) {
			url.pathname = basePath;
		}
		url.searchParams.set('q', prompt);
		window.open(url.toString(), '_blank', 'noopener,noreferrer');
	};

	const handleMenuAction = (action) => {
		switch (action) {
			case 'open-chatgpt':
				openAIChatWindow('https://chat.openai.com/');
				break;
			case 'open-claude':
				openAIChatWindow('https://claude.ai/', '/new');
				break;
			default:
				return;
		}

		setIsMenuOpen(false);
	};

	const toggleFocusMode = () => {
		try {
			const nextState = !document.body.classList.contains('focus-mode');
			document.body.classList.toggle('focus-mode', nextState);
			setIsFocusModeEnabled(nextState);

			try {
				localStorage.setItem(storageKey, nextState ? '1' : '0');
			} catch {}
		} catch {}
	};

	const toggleMenu = (event) => {
		event?.preventDefault?.();
		event?.stopPropagation?.();
		setIsMenuOpen((current) => !current);
	};

	const showTooltip = (event, id) => {
		const tooltip = document.getElementById(id);
		if (!tooltip) return;

		const offset = 24;
		tooltip.style.left = event.clientX + 'px';
		tooltip.style.top = event.clientY + offset + 'px';
		tooltip.style.transform = 'translateX(-38%)';
		tooltip.style.opacity = '1';
	};

	const hideTooltip = (id) => {
		const tooltip = document.getElementById(id);
		if (tooltip) tooltip.style.opacity = '0';
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (focusContainerRef.current && !focusContainerRef.current.contains(event.target)) {
				setIsMenuOpen(false);
			}
		};

		const handleEscapeKey = (event) => {
			if (event.key === 'Escape') setIsMenuOpen(false);
		};

		document.addEventListener('mousedown', handleOutsideClick);
		document.addEventListener('keydown', handleEscapeKey);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, []);

	useEffect(() => {
		try {
			const storedValue = localStorage.getItem(storageKey);
			const nextState = storedValue === '1';
			setIsFocusModeEnabled(nextState);
			document.body.classList.toggle('focus-mode', nextState);
		} catch {}
	}, []);

	useEffect(() => {
		if (typeof document === 'undefined' || !document.body) return;

		const body = document.body;
		const observer = new MutationObserver(() => {
			setIsDarkTheme(body.classList.contains('dark-mode'));
		});

		observer.observe(body, { attributes: true, attributeFilter: ['class'] });
		setIsDarkTheme(body.classList.contains('dark-mode'));

		return () => observer.disconnect();
	}, []);

	const iconSet = {
		light: { on: focusOnLight, off: focusOffLight },
		dark: { on: focusOnDark, off: focusOffDark },
	};

	const theme = isDarkTheme ? 'dark' : 'light';
	const iconState = isFocusModeEnabled ? 'off' : 'on';
	const iconSrc = iconSet[theme][iconState];

	return (
		<div ref={focusContainerRef} className="focus-container">
			<div
				className={`focus-split-button${isFocusModeEnabled ? ' active' : ''}`}
				style={{ display: 'inline-flex', gap: '0px', alignItems: 'center', position: 'relative' }}
			>
				<button
					className={`focus-mode-btn${isFocusModeEnabled ? ' active' : ''}`}
					aria-pressed={isFocusModeEnabled}
					aria-describedby={focusTooltipId}
					data-tooltip-id={focusTooltipId}
					onClick={toggleFocusMode}
					onMouseMove={(event) => showTooltip(event, focusTooltipId)}
					onMouseLeave={() => hideTooltip(focusTooltipId)}
					style={{ display: 'inline-flex', alignItems: 'center' }}
				>
					<div className="theme-focus-icon"></div>
					<span className="focus-mode-label">Focus</span>
				</button>

				<button
					className={`focus-toggle ${isMenuOpen ? 'focus-arrow-up' : ''}`}
					aria-label="Open focus menu"
					aria-expanded={isMenuOpen}
					onClick={toggleMenu}
					style={{
						border: '1px solid transparent',
						background: 'transparent',
						cursor: 'pointer',
					}}
				/>
			</div>

			{isMenuOpen && (
				<div className="focus-dropdown is-open">
					<button type="button" className="focus-item focus-open-chatgpt" onClick={() => handleMenuAction('open-chatgpt')}>
						<div className="focus-title"><div className='focus-icon'></div>Open in ChatGPT</div>
						<div className="focus-desc">Ask ChatGPT about this page</div>
					</button>

					<button type="button" className="focus-item focus-open-claude" onClick={() => handleMenuAction('open-claude')}>
						<div className="focus-title"><div className='focus-icon'></div>Open in Claude</div>
						<div className="focus-desc">Ask Claude about this page</div>
					</button>
				</div>
			)}

			<div id={focusTooltipId} className="custom-tooltip">
				{isFocusModeEnabled ? 'Exit focus mode' : 'Enter focus mode'}
			</div>
		</div>
	);
}
