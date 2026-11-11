const fs = require("fs");
const yaml = require("js-yaml");
const { sync } = require("glob");
const { config, sitePath } = require('./config.js');
const argv = require('yargs').argv;
const { replaceProductNameInJson } = require('./product-name.js');

const STRUCTURE_FILE = "./docs-structure.yaml";
const DOC_JSON_PATTERN = "./docs/**/summary.json";
const outputJsonPath = `./left-toc.json`;

// ==================================================
// 1) Build structure tree from structure.yml
// ==================================================
const structureYaml = fs.readFileSync(STRUCTURE_FILE, "utf8");
const structureData = yaml.load(structureYaml);

function buildStructureTabs(data) {
	const tabs = {};

	for (const tabName in data) {
		tabs[tabName] = {
			type: "tab",
			title: tabName,
			items: buildStructureItems(data[tabName])
		};
	}

	return tabs;
}

function buildStructureItems(nodes) {
	const items = [];

	if (!Array.isArray(nodes)) return items;

	for (const node of nodes) {
		if (typeof node === "string") {
			items.push({ route: node });
			continue;
		}

		if (node && typeof node === "object") {
			for (const sectionTitle in node) {
				items.push({
					type: "section",
					title: sectionTitle,
					items: buildStructureItems(node[sectionTitle])
				});
			}
		}
	}

	return items;
}

const structureTabs = buildStructureTabs(structureData);

// ==================================================
// 2) Merge and normalize route metadata from docs JSON
// ==================================================
const docJsonFiles = sync(DOC_JSON_PATTERN);

function slugify(text) {
	return String(text)
		.replace(/[^a-zA-Z0-9\s-.?=]/g, "")
		.trim()
		.replace(/\s+/g, "-");
}

function stripMarkdownExtension(value) {
	if (typeof value !== "string") return value;

	return value.replace(/\.md$/i, "");
}

function normalizeRouteObject(input, slugTrail = []) {
	if (typeof input !== "object" || input === null) return input;

	const normalized = {};

	if (slugTrail.length > 0) {
		normalized._slug = slugTrail[slugTrail.length - 1];
	}

	for (const key in input) {
		const value = input[key];

		if (value && typeof value === "object" && !Array.isArray(value)) {
			const nextSlug =
				value && typeof value === "object" && value._slug
					? slugify(value._slug)
					: slugify(key);

			normalized[key] = normalizeRouteObject(value, [...slugTrail, nextSlug]);
			continue;
		}

		const cleanedValue = stripMarkdownExtension(value);

		if (key === "_slug") {
			normalized._slug = typeof cleanedValue === "string" ? slugify(cleanedValue) : cleanedValue;
			continue;
		}

		if (typeof cleanedValue === "string") {
			if (cleanedValue.startsWith("/") || /^https?:\/\//i.test(cleanedValue)) {
				normalized[key] = cleanedValue;
			} else {
				const segment = cleanedValue.includes("/") ? cleanedValue : slugify(cleanedValue);
				const prefix = slugTrail.length ? `/${slugTrail.join("/")}` : "";
				normalized[key] = `${prefix}/${segment}/`;
			}
		} else {
			normalized[key] = cleanedValue;
		}
	}

	return normalized;
}

function mergeJsonFiles(filePaths) {
	const merged = {};

	for (const filePath of filePaths) {
		try {
			const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

			for (const key in jsonData) {
				if (merged[key]) {
					console.warn(`⚠️ Duplicate key "${key}" in ${filePath} (overwriting)`);
				}

				merged[key] = jsonData[key];
			}
		} catch (error) {
			console.error(`❌ Error reading: ${filePath}`);
			console.error(error.message);
		}
	}

	return merged;
}

const routeData = normalizeRouteObject(mergeJsonFiles(docJsonFiles));

// ==================================================
// 3) Build toc.json from structure + routes
// ==================================================
function normalizePath(...segments) {
	const path =
		"/" +
		segments
			.filter(Boolean)
			.join("/")
			.split("/")
			.filter(Boolean)
			.join("/");

	return path.endsWith("/") ? path : `${path}/`;
}

function parsePath(value) {
	const isHtml = typeof value === "string" && value.includes("?html=true");

	const cleanValue = isHtml
		? value.replace("?html=true", "")
		: value;

	return {
		path: normalizePath(cleanValue),
		fileType: isHtml ? "html" : "md"
	};
}

function buildRouteIndex(routes) {
	const index = {};

	for (const key in routes) {
		if (key === "_slug") continue;

		const value = routes[key];

		index[key] = typeof value === "string"
			? value
			: {
				_slug: value._slug ? `/${value._slug}` : "",
				children: value
			};
	}

	return index;
}

const routeIndex = buildRouteIndex(routeData);

function resolveRoutePath(title, parentSlug = "") {
	const routeEntry = routeIndex[title];

	if (typeof routeEntry === "string") {
		return normalizePath(routeEntry);
	}

	if (routeEntry && routeEntry._slug) {
		return normalizePath(routeEntry._slug);
	}

	return normalizePath(parentSlug, title.toLowerCase().replace(/\s+/g, "-"));
}

function buildChildItems(routeObject, parentSlug = "") {
	const children = [];

	for (const key in routeObject) {
		if (key === "_slug") continue;

		const value = routeObject[key];

		if (typeof value === "string") {
			const parsed = parsePath(value);

			children.push({
				type: "page",
				title: key,
				path: parsed.path,
				fileType: parsed.fileType
			});
			continue;
		}

		if (value && typeof value === "object") {
			const childSlug = value._slug ? normalizePath(parentSlug, value._slug) : parentSlug;

			const parsed = parsePath(childSlug);

			const sectionNode = {
				type: "page",
				title: key,
				path: parsed.path,
				fileType: parsed.fileType
			};

			const nestedChildren = buildChildItems(value, childSlug);

			if (nestedChildren.length) {
				sectionNode.items = nestedChildren;
			}

			children.push(sectionNode);
		}
	}

	return children;
}

function buildTocItems(structureItems, parentSlug = "") {
	const items = [];

	for (const item of structureItems) {
		if (item.type === "section") {
			items.push({
				type: "section",
				title: item.title,
				items: buildTocItems(item.items || [], parentSlug)
			});
			continue;
		}

		const routePath = resolveRoutePath(item.route, parentSlug);
		const parsed = parsePath(routePath);

		const path = parsed.path;

		const pageNode = {
			type: "page",
			title: item.route,
			path: path,
			fileType: parsed.fileType
		};

		const routeEntry = routeIndex[item.route];

		if (routeEntry && typeof routeEntry === "object") {
			const childSource = routeEntry.children || routeEntry;
			const nestedChildren = buildChildItems(childSource, path);

			if (nestedChildren.length) {
				pageNode.items = nestedChildren;
			}
		}

		items.push(pageNode);
	}

	return items;
}

const tocData = {};

for (const tabKey in structureTabs) {
	const tab = structureTabs[tabKey];

	tocData[tabKey] = {
		type: "tab",
		title: tab.title,
		items: buildTocItems(tab.items || [], "")
	};
}

// ==================================================
// 4) Build navigation + SEARCH INDEX
// ==================================================

// 🔥 Flatten with proper parents + tab
function flattenTocItems(items, ancestors = [], flattened = [], tabName = "") {
	for (const item of items || []) {
		if (!item) continue;

		const currentNode = {
			title: item.title,
			path: item.path,
			fileType: item.fileType
		};

		// ❌ Skip sections (not searchable)
		if (item.type === "section") {
			flattenTocItems(item.items || [], ancestors, flattened, tabName);
			continue;
		}

		// ✅ Add searchable item
		flattened.push({
			title: item.title,
			path: item.path,
			fileType: item.fileType,
			tab: tabName,
			breadcrumb: ancestors
		});

		// ✅ Traverse children
		if (item.items?.length) {
			flattenTocItems(
				item.items,
				[...ancestors, currentNode],
				flattened,
				tabName
			);
		}
	}

	return flattened;
}

// 🔥 Flatten all tabs
function flattenTabs(tocObject) {
	const flattened = [];

	for (const tabKey of Object.keys(tocObject)) {
		const tabItems = tocObject[tabKey].items || [];

		flattenTocItems(tabItems, [], flattened, tabKey);
	}

	return flattened;
}

// 🔥 Build navigation (unchanged logic)
function buildNavigation(flattenedItems) {
	const navigation = {};

	for (let index = 0; index < flattenedItems.length; index++) {
		const currentItem = flattenedItems[index];

		navigation[currentItem.path] = {
			title: currentItem.title,
			breadcrumb: [
				...currentItem.breadcrumb.map((a) => ({ title: a.title, path: a.path, fileType: a.fileType })),
				{
					title: currentItem.title,
					path: currentItem.path,
					fileType: currentItem.fileType
				}
			],
			prev:
				index > 0
					? {
						title: flattenedItems[index - 1].title,
						path: flattenedItems[index - 1].path,
						fileType: flattenedItems[index - 1].fileType
					}
					: null,
			next:
				index < flattenedItems.length - 1
					? {
						title: flattenedItems[index + 1].title,
						path: flattenedItems[index + 1].path,
						fileType: flattenedItems[index + 1].fileType
					}
					: null
		};
	}

	return navigation;
}

// 🔥 Generate flattened list once
const flattenedItems = flattenTabs(tocData);

// 🔥 Navigation
const routerData = buildNavigation(flattenedItems);

// 🔥 ✅ SEARCH INDEX (NEW)
const pageData = flattenedItems.map((item) => ({
	title: item.title,
	path: item.path,
	fileType: item.fileType,
	breadcrumb: (item.breadcrumb || []).map((node) => ({
		title: node.title,
		path: node.path,
		fileType: node.fileType
	}))
}));

const tabData = Object.keys(tocData);

// ==================================================
// 6) Write combined output to single JSON file
// ==================================================
function generateToc() {
	const combinedOutput = {
		tabData: tabData,
		leftTocData: tocData,
		routerData: routerData,
		pagesData: pageData,
		pathPrefix: global.isProduction ? (argv.prefix || sitePath) : '',
		additionalInfo: config.additionalInfo
	};

	fs.writeFileSync(outputJsonPath, replaceProductNameInJson(JSON.stringify(combinedOutput, null, 2)));
}

function removeMisc(fname) {
	return removeQueryString(fname.replace('.md', '').trim());
}

function removeQueryString(keyValue) {
	return keyValue.split('?')[0];
}

module.exports = {
	generateToc: generateToc,
	removeMisc: removeMisc
};

if (require.main === module) {
	generateToc();
}