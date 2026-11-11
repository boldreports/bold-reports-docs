import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/focus-mode.css';
import focusOnLight from '../assets/img/focus-mode-on-light.svg';
import focusOffLight from '../assets/img/focus-mode-off-light.svg';
import focusOnDark from '../assets/img/focus-mode-on-dark.svg';
import focusOffDark from '../assets/img/focus-mode-off-dark.svg';
import config from '../../config.json';

export default function FocusMode() {
	const storageKey = 'site_focus_mode';
	const focusTooltipId = 'focus_tooltip';

	const [isFocusModeEnabled, setIsFocusModeEnabled] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(
		typeof document !== 'undefined' && document.body.classList.contains('dark-mode')
	);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const focusContainerRef = useRef(null);

	const openHelpBot = () => window.open('https://helpbot.boldreports.com', '_blank');
	const openFeedbackPage = () => window.open('https://www.boldreports.com/feedback', '_blank');

	const downloadPdfZip = () => {
		const pdfUrl = config.pdfPath;

		try {
			const link = document.createElement('a');
			link.href = pdfUrl;
			link.download = pdfUrl.split('/').pop();
			document.body.appendChild(link);
			link.click();
			link.remove();
		} catch {
			window.open(pdfUrl, '_blank');
		}
	};

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

	let isMcpDocsCopying = false;

	const copyText = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch {
			return false;
		}
	};

	const copyMcpDocsUrl = async () => {
		if (isMcpDocsCopying) return;
		isMcpDocsCopying = true;

		const mcpDocsUrl = "https://mcp.boldreports.com/docs";
		const isCopied = await copyText(mcpDocsUrl);

		const titleEl = document.querySelector(".focus-mcp-url-copy .focus-title");
		const descEl = document.querySelector(".focus-mcp-url-copy .focus-desc");

		if (isCopied && titleEl && descEl) {
			// Get the text content (last child text node) while preserving the icon element
			const getTitleText = () => {
				const textNode = titleEl.childNodes[titleEl.childNodes.length - 1];
				return textNode ? textNode.textContent : '';
			};
			const originalTitle = getTitleText();
			const originalDesc = descEl.textContent;

			// Only update the text node, not the entire element content
			const titleTextNode = titleEl.childNodes[titleEl.childNodes.length - 1];
			if (titleTextNode) titleTextNode.textContent = "Copied!";
			descEl.textContent = "MCP URL copied to Clipboard";

			setTimeout(() => {
				if (titleTextNode) titleTextNode.textContent = originalTitle;
				descEl.textContent = originalDesc;
				isMcpDocsCopying = false;
			}, 5000);
		} else {
			isMcpDocsCopying = false;
		}
	};

	const handleMenuAction = (action) => {
		switch (action) {
			case 'helpbot':
				openHelpBot();
				break;
			case 'suggest-feature':
				openFeedbackPage();
				break;
			case 'download-pdf':
				downloadPdfZip();
				break;
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
					<button type="button" className="focus-item focus-helpbot" onClick={() => handleMenuAction('helpbot')}>
						<div className="focus-title"><div className='focus-icon'></div>Ask HelpBot</div>
						<div className="focus-desc">Ask HelpBot about this page</div>
					</button>

					<div className="focus-divider" />

					<button
						type="button"
						className="focus-item focus-suggest-feature"
						onClick={() => handleMenuAction('suggest-feature')}
					>
						<div className="focus-title"><div className='focus-icon'></div>Suggest a Feature</div>
						<div className="focus-desc">Suggest a Feature</div>
					</button>

					<button type="button" className="focus-item focus-download-pdf" onClick={() => handleMenuAction('download-pdf')}>
						<div className="focus-title"><div className='focus-icon'></div>PDF</div>
						<div className="focus-desc">Download PDF</div>
					</button>

					<div className="focus-divider" />

					<button type="button" className="focus-item focus-mcp-url-copy" onClick={() => copyMcpDocsUrl()}>
						<div className="focus-title"><div className='focus-icon'></div>Connect with MCP</div>
						<span className="mcp-arrow" aria-hidden="true">
							<span className="mcp-tooltip" role="tooltip">
								<a href="/mcp-server/" target="_blank">Learn more MCP</a>
							</span>
						</span>
						<div className="focus-desc">Copy MCP Server URL</div>
					</button>

					<div className="focus-divider" />

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
