import React, { useEffect } from 'react';
import '../assets/css/righttoc.css';

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

const stripHeadingHtml = (value = '') => String(value).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const slugifyHeading = (value = '') => {
	return stripHeadingHtml(value)
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
};

const getUniqueHeadingId = (value = '', seen = new Map()) => {
	const baseId = slugifyHeading(value);
	if (!baseId) return '';

	const count = seen.get(baseId) || 0;
	seen.set(baseId, count + 1);

	return count === 0 ? baseId : `${baseId}-${count}`;
};

const getHeadersFromHtml = (html) => {
	if (!html || !isBrowser) return [];

	const temp = document.createElement('div');
	temp.innerHTML = html;

	const headers = [];
	const seenIds = new Map();
	temp.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((el) => {
		const text = (el.textContent || '').trim();
		const cleanId = getUniqueHeadingId(text, seenIds);
		headers.push({
			id: cleanId || stripHeadingHtml(el.id || ''),
			text,
			level: Number((el.tagName || 'H1').replace('H', '')),
		});
	});

	return headers;
};

const extractHeadersFromHtml = (html) => {
	const parsedHeaders = getHeadersFromHtml(html);

	return parsedHeaders
		.filter(({ id, text, level }) => Boolean(id) && Boolean(text) && level >= 2 && level <= 4)
		.map(({ id, text, level }) => ({
			id,
			name: text.charAt(0).toUpperCase() + text.slice(1),
			level,
		}));
};

const buildTocTree = (headers) => {
	if (!headers || headers.length === 0) return [];

	const tree = [];
	const stack = [];

	for (const header of headers) {
		const item = {
			...header,
			children: [],
		};

		while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
			stack.pop();
		}

		if (stack.length === 0) {
			tree.push(item);
		} else {
			stack[stack.length - 1].children.push(item);
		}

		stack.push(item);
	}

	return tree;
};

const initTocBehavior = (toc, nodes) => {
	let suppressUntil = 0;
	const cleanups = [];

	const onClick = (e) => {
		const a = e.target.closest('a');
		if (!a) return;

		const id = (a.getAttribute('href') || '').split('#').pop();
		if (!id) return;

		nodes.forEach((n) => {
			n.classList.remove('active');
			const link = n.querySelector('a');
			if (link) link.classList.remove('active');
		});

		const li = a.closest('.doc-anchor-h2, .doc-anchor-h3, .doc-anchor-h4');
		if (li) {
			li.classList.add('active');
			a.classList.add('active');
			suppressUntil = Date.now() + 400;
			try {
				a.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
			} catch (err) { }
		}
	};

	toc.addEventListener('click', onClick);
	cleanups.push(() => toc.removeEventListener('click', onClick));

	const headings = Array.from(document.querySelectorAll('#md-content h2, #md-content h3, #md-content h4'))
		.filter((h) => h.id)
		.map((h) => ({
			el: h,
			id: h.id,
			level: h.tagName === 'H2' ? 2 : h.tagName === 'H3' ? 3 : 4,
		}));

	const topOffset = 400;

	const onScroll = () => {
		if (suppressUntil && Date.now() < suppressUntil) return;

		let active = null;

		for (let i = 0; i < headings.length; i++) {
			const rect = headings[i].el.getBoundingClientRect();
			if (rect.top <= topOffset && rect.bottom > topOffset) {
				active = headings[i];
				break;
			}
		}

		if (!active) {
			for (let i = headings.length - 1; i >= 0; i--) {
				const rect = headings[i].el.getBoundingClientRect();
				if (rect.top <= topOffset) {
					active = headings[i];
					break;
				}
			}
		}

		if (!active && headings.length) {
			active = headings[0];
		}

		if (!active) return;

		nodes.forEach((n) => {
			n.classList.remove('active');
			const a = n.querySelector('a');
			if (a) a.classList.remove('active');
		});

		const link = Array.from(toc.querySelectorAll('a')).find((a) => (a.getAttribute('href') || '').split('#').pop() === active.id);

		if (!link) return;

		const li = link.closest('.doc-anchor-h2, .doc-anchor-h3, .doc-anchor-h4');
		if (!li) return;

		li.classList.add('active');
		link.classList.add('active');
		try {
			link.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'nearest' });
		} catch (err) { }
	};

	window.addEventListener('scroll', onScroll);
	window.addEventListener('resize', onScroll);

	cleanups.push(() => window.removeEventListener('scroll', onScroll));
	cleanups.push(() => window.removeEventListener('resize', onScroll));

	requestAnimationFrame(onScroll);

	return cleanups;
};

const renderTocItems = (items) => {
	if (!items || items.length === 0) return null;

	return (
		<ul>
			{items.map((item) => {
				if (item.level === 2) {
					return (
						<React.Fragment key={item.id}>
							<li className={`doc-anchor-h${item.level}`}>
								<a href={`#${item.id}`}>{item.name}</a>
							</li>
							{item.children?.length > 0 && renderTocItems(item.children)}
						</React.Fragment>
					);
				}

				if (item.level === 3) {
					return (
						<React.Fragment key={item.id}>
							<li className={`doc-anchor-h${item.level}`}>
								<a href={`#${item.id}`}>{item.name}</a>
							</li>
							{item.children?.length > 0 && renderTocItems(item.children)}
						</React.Fragment>
					);
				}

				return (
					<li key={item.id} className={`doc-anchor-h${item.level}`}>
						<a href={`#${item.id}`}>{item.name}</a>
					</li>
				);
			})}
		</ul>
	);
};

const RightToc = ({ html, enableBehavior }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			const hash = window.location.hash;

			if (hash) {
				const el = document.querySelector(hash);
				if (el) {
					el.scrollIntoView({ behavior: 'auto', block: 'start' });
				}
			}
		}, 10);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!isBrowser) return;

		const setTocHeight = () => {
			const toc = document.getElementById('doc-right-toc');
			if (!toc) return;

			const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 60;
			const height = scrollBottom ? window.innerHeight - 180 : window.innerHeight - 120;
			toc.style.height = `${height}px`;
		};

		setTocHeight();
		window.addEventListener('resize', setTocHeight);
		window.addEventListener('scroll', setTocHeight);

		return () => {
			window.removeEventListener('resize', setTocHeight);
			window.removeEventListener('scroll', setTocHeight);
		};
	}, [enableBehavior, html]);

	useEffect(() => {
		if (!isBrowser || !enableBehavior) return;

		const content = document.getElementById('md-content');
		if (content) {
			content.querySelectorAll('h2, h3, h4').forEach((h) => {
				if (!h.id) {
					h.id = h.textContent
						.toLowerCase()
						.replace(/[^a-z0-9]+/g, '-')
						.replace(/^-+|-+$/g, '');
				}
			});
		}

		const toc = document.getElementById('doc-right-toc');
		if (!toc) return;

		let disposed = false;
		let rafId = null;
		let behaviorCleanups = [];

		const waitForToc = () => {
			if (disposed) return;

			const nodes = toc.querySelectorAll('.doc-anchor-h2, .doc-anchor-h3, .doc-anchor-h4');

			if (!nodes.length) {
				rafId = requestAnimationFrame(waitForToc);
				return;
			}

			behaviorCleanups = initTocBehavior(toc, Array.from(nodes));
		};

		waitForToc();

		return () => {
			disposed = true;

			if (rafId) {
				cancelAnimationFrame(rafId);
			}

			if (behaviorCleanups.length) {
				behaviorCleanups.forEach((fn) => fn && fn());
			}
		};
	}, [enableBehavior, html]);

	if (!html) {
		return null;
	}

	const headers = extractHeadersFromHtml(html);

	if (!headers || headers.length === 0) {
		return null;
	}

	if (headers.length === 1 && headers[0].level === 2) {
		return null;
	}

	const tree = buildTocTree(headers);

	return (
		<div id="right-sidebar-container">
			<aside id="right-sidebar">
				<nav id="doc-right-toc">
					<span className="bd-icon bd-icon-inthispage"></span>
					<span className="bd-title-inthispage">In this page</span>
					<div className="header-lists">{renderTocItems(tree)}</div>
				</nav>
			</aside>
		</div>
	);
};

export default RightToc;
