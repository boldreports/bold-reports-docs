# Documentation site

This repository holds the product documentation and everything needed to build it into a static website. The pages are written in Markdown, and the site is generated with [Gatsby](https://www.gatsbyjs.com/) and a set of [gulp](https://gulpjs.com/) tasks.

The repository is self-contained. The website template is in `src/`, and the gulp tasks are in `build/`. There is no separate helper package to install.

The site can be white-labeled: the product name, logo, and favicon are each set in one place. See [White-label the site](#white-label-the-site).

## Contents

* [Prerequisites](#prerequisites)
* [Run the project](#run-the-project)
* [Folder structure](#folder-structure)
* [Write documentation pages](#write-documentation-pages)
* [White-label the site](#white-label-the-site)

## Prerequisites

| Tool | Version | Notes |
| --- | --- | --- |
| Node.js | 22 LTS (22.17.1 recommended) | Comes with npm. |
| npm | 10 or later | Node.js includes npm. |
| Git | Any recent version | Needed to clone the repository. The build also reads the last commit date of each page from Git. |

You also need internet access to `registry.npmjs.org` for the first install. All commands below are run from the repository root.

## Run the project

1. Install the dependencies.

    ```bash
    npm install
    ```

2. Start the site locally with live reload.

    ```bash
    npx gulp serve
    ```

    Open `http://localhost:8000` in a browser. Changes to the template in `src/` and to the Markdown files in `docs/` show up in the browser within a few seconds of saving; no restart is needed. Restart the command only after you change `docs/summary.json`, `docs-structure.yaml`, or `config.json`.

    The first start takes several minutes. Later starts reuse the Gatsby cache in `.cache/`. To start from a clean state, run `npx gulp clean` first.

3. Create the production build.

    ```bash
    npm run build
    ```

    The static site is written to the `public/` folder. Host the contents of `public/` on any static web server.

### Commands

| Command | What it does |
| --- | --- |
| `npm install` | Installs the dependencies. |
| `npx gulp serve` | Builds the table of contents and starts the Gatsby development server. |
| `npm run build` | Runs `gulp production-build` and writes the static site to `public/`. |
| `npm test` | Runs all content checks. See [Run the tests](#run-the-tests). |
| `npx gulp clean` | Deletes the Gatsby cache and the generated pages, for a completely fresh start. |
| `npx gulp build` | Prepares the content only: clears the cache, copies `docs/` to `src/pages`, and generates `left-toc.json`. |
| `npx gulp sitemap` | Generates `sitemap.xml` for the site domain set in `config.json`. Run it after `npx gulp build`. |

### Run the tests

```bash
npm test
```

The command runs these checks in order and stops at the first one that fails:

| Check | What it verifies |
| --- | --- |
| Page list | Every page in `docs/summary.json` has a Markdown file, and every Markdown file is listed. |
| Spelling | All Markdown files in `docs/` and this README. |
| Images | Image width syntax and alt text. |
| File names | File and folder names under `docs/` use lowercase dictionary words separated by hyphens. |
| Search engine optimization | Title and description length, one top-level heading per page, and no unused images in `static/images/`. |
| Links | Links between pages point to pages that exist. |
| Markdown lint | Markdown formatting rules in `build/lint/.markdownlint.json`. |
| Code blocks | No code block starts with an empty line. |

If the spelling or file name check reports a correct technical term, add the term on its own line to the `.spelling` file.

### Site URL prefix

The production build is prepared to be served from the `/enterprise-reporting` path. To serve it from a different path, pass the prefix to the build.

```bash
npx gulp production-build --prefix=/docs
```

The default prefix comes from `repos.enterprise.url` in `config.json`. The development server always serves the site from the root path.

### Troubleshooting

| Problem | Fix |
| --- | --- |
| `npm install` stops with `ERESOLVE could not resolve` | Make sure the `.npmrc` file in the repository root contains `legacy-peer-deps=true`. |
| The build stops with `Something went wrong installing the "sharp" module` | Run `npm rebuild sharp`, then build again. |
| The development server stops with `EBUSY: resource busy or locked` | Many files were moved or deleted while the server was running. Start `npx gulp serve` again. |
| Page titles or icons disappear after you edit a file in `src/` | Stop the development server and start `npx gulp serve` again. |
| A new page does not appear in the left table of contents | Add the page to `docs/summary.json`, then restart `npx gulp serve`. |

## Folder structure

```text
.
├── docs/                        Documentation pages
│   ├── summary.json             Left table of contents: titles, slugs, and file names
│   └── designer-guide/          Markdown pages, in folders that match the page URLs
├── src/                         Website template
│   ├── components/              Header, table of contents, search, feedback, page navigation
│   ├── templates/               Page layout
│   └── assets/
│       ├── css/                 Style sheets
│       └── img/                 Logo, favicons, and icons
├── static/                      Files copied to the site as they are
│   ├── images/                  Images used by the documentation pages
│   ├── 404.js                   404 page
│   ├── favicon.ico
│   └── robots.txt
├── build/                       gulp tasks
│   ├── *.js                     One file for each group of tasks
│   └── lint/                    Markdown lint rules used by the test tasks
├── gatsby-config.js             Gatsby plugins
├── gatsby-node.js               Page creation and redirects
├── gatsby-browser.js            Browser-side Gatsby hooks
├── config.json                  Site settings: product name, header label, domain, URL prefix
├── docs-structure.yaml          Top-level sections of the site
├── redirects.json               Redirects from old URLs to new URLs
├── .spelling                    Word list for the spell check and the file-name check
├── .npmrc                       npm settings needed for the install
├── .htaccess                    Apache web server rules; copy it to the web root when you host the site
├── .github/                     Pull request templates
├── Jenkinsfile                  Continuous integration pipeline (optional)
├── pipeline.cmd                 Git settings used by the pipeline (optional)
├── gulpfile.js                  Loads the gulp tasks from build/
└── package.json                 npm dependencies and scripts
```

The following items are generated. They are ignored by Git and must not be edited by hand:

| Path | Created by |
| --- | --- |
| `src/pages/`, `left-toc.json` | `gulp serve` and `gulp build` |
| `.cache/`, `public/` | Gatsby |
| `node_modules/`, `package-lock.json` | `npm install` |
| `cireports/` | `npm test` |
| `sitemap.xml` | `gulp sitemap` |

### gulp task files

| File in `build/` | Purpose |
| --- | --- |
| `build.js` | `clean`, `copy`, `sync-pages`, `toc`, `build`, and `postinstall` tasks. |
| `serve.js` | `serve` task: starts the development server and watches `docs/`. |
| `production.js` | `production-build` task. |
| `toc.js` | Generates `left-toc.json` from `docs-structure.yaml` and `docs/summary.json`. |
| `product-name.js`, `site-variables.js` | Replace the product name placeholders. |
| `content.js`, `tab.js`, `tile.js`, `release-note.js` | Prepare the page content for Gatsby. |
| `test.js` | `test` task, spell check, Markdown lint, and image checks. |
| `file-validation.js`, `seo.js`, `url-validation.js`, `prism-validation.js` | The other checks that `npm test` runs. |
| `sitemap.js` | `sitemap` task. |
| `config.js` | Reads `config.json` and `package.json` for the other tasks. |

## Write documentation pages

### Add or change a page

1. Add or edit the Markdown file under `docs/`. Use lowercase words separated by hyphens for file and folder names.
2. For a new page, add its title and file name to `docs/summary.json` so that it appears in the left table of contents.
3. Put images under `static/images/` and reference them from the Markdown file with a path that starts with `/static/images/`. Give every image alt text.
4. Run `npx gulp serve` to preview the change.
5. Run `npm test` before you commit.

### Page header

Every page starts with a header block like this:

```text
---
layout: post
title: Manage Report Categories in Report Server | {{site.productName}}
description: Create, open, update, pin, and delete report categories in {{site.productName}} Report Server, and manage share permissions so the right users can access each one.
platform: report-platform
documentation: ug
---
```

| Field | Rule |
| --- | --- |
| `title` | Required. 46 to 60 characters, counted after the product name placeholder is replaced. |
| `description` | Required. At least 100 characters; keep it under 160. |

Use one top-level heading (`#`) per page, and do not repeat the `title` text in it.

Use the product name placeholders instead of typing the product name. See [Change the product name](#change-the-product-name).

## White-label the site

All branding lives in `config.json`, the website template in `src/`, and a few files in `static/`.

| What to change | Where |
| --- | --- |
| Brand name, header logo, favicon, and social sharing image | See [Replace the brand name, logo, and favicon](#replace-the-brand-name-logo-and-favicon). |
| Product name inside the pages | `product.name` in `config.json`. See [Change the product name](#change-the-product-name). |
| Product label next to the logo (`Enterprise`) | `additionalInfo.header` in `config.json` |
| Colors and fonts | CSS variables in the `:root` blocks of `src/assets/css/style.css`. Header-only styles are in `header.css`. |
| Header content | `src/components/Header.js` |
| Feedback form, including its privacy policy link | `src/components/Feedback.js` |
| Focus menu (Open in ChatGPT, Open in Claude) | `src/components/FocusButton.js` |
| 404 page, including its links to demos and other documentation sites | `static/404.js` |
| Analytics and tracking | Google Tag Manager ID and cookie domain in `src/components/HeadTag.js`. Remove them or replace them with your own. |
| Site domain used by the `gulp sitemap` task | `publish.bucketName` in `config.json` |
| URL path prefix | `repos.enterprise.url` in `config.json`, or the `--prefix` build option |

### Replace the brand name, logo, and favicon

Follow these three steps to rebrand the site. Keep the file names and image sizes shown below, so that no code needs to change.

#### 1. Brand name

Open `config.json` and change `product.name`. Set `product.trademark` to `""` if your name has no trademark symbol.

```json
"product": {
    "name": "Contoso Reports",
    "trademark": ""
}
```

This one setting changes the name in every documentation page, the table of contents, the social sharing tags, and the 404 page title. See [Change the product name](#change-the-product-name) for how it works.

The label shown next to the logo (`Enterprise`) is separate. Change it with `additionalInfo.header` in `config.json`.

#### 2. Logo

Replace this file with your own logo. Keep the same file name.

| File | Used for | Size |
| --- | --- | --- |
| `src/assets/img/logo.svg` | Header logo | SVG, 237 x 47 (about 5:1) |

The logo is displayed at 170 x 36 pixels and is scaled to fit, so a logo with a different shape still works but may look smaller. To change the displayed size, edit `width` and `height` of `.header-logo` in `src/assets/css/style.css`. Narrow screens use the smaller widths set for `.header-logo` at the end of `src/assets/css/header.css`.

#### 3. Favicon

Replace these five files with your own icon. Keep the same file names and sizes.

| File | Size | Used for |
| --- | --- | --- |
| `static/favicon.ico` | ICO with 16 x 16 and 32 x 32 | Default browser icon and the 404 page |
| `src/assets/img/favicon-32x32.png` | 32 x 32 PNG | Browser tab |
| `src/assets/img/favicon-192x192.png` | 192 x 192 PNG | Android and high-resolution tabs |
| `src/assets/img/favicon-180x180.png` | 180 x 180 PNG | Apple touch icon |
| `src/assets/img/favicon-270x270.png` | 270 x 270 PNG | Windows tile |

Optionally, replace `src/assets/img/og-img.png` (1200 x 630 PNG). This is the preview image shown when a page link is shared.

#### Check the result

1. Restart `npx gulp serve`. A restart is needed because `config.json` changed.
2. Open `http://localhost:8000` and check the logo, the browser tab icon, and the product name on a page.
3. If the old icon still shows, clear the browser cache or open the site in a private window. Browsers keep favicons for a long time.

### Change the product name

The product name is not typed into the documentation pages. The Markdown files in `docs/` and the titles in `docs/summary.json` use placeholders, and the build replaces them with the values from the `product` setting in `config.json`.

```json
"product": {
    "name": "Bold Reports",
    "trademark": "<sup>®</sup>"
}
```

| Placeholder | Replaced with | Use it for |
| --- | --- | --- |
| `{{site.productName}}` | `product.name` | Page titles, descriptions, keywords, image alt text, and table of contents titles. |
| `{{site.productNameTM}}` | `product.name` followed by `product.trademark` | Headings and body text where the trademark symbol is shown. |

To white-label the content, change `product.name`. If your product name has no trademark symbol, set `product.trademark` to an empty string (`""`). Then restart `npx gulp serve` or run `npm run build`; no Markdown file needs to be edited.

When you write new pages, use the placeholders instead of typing the product name.

The setting does not change these items. Review them by hand when you rebrand:

* Links to other websites inside the pages.
* Names of other products that the pages mention.
* Text that appears inside the screenshots in `static/images/`.

> **Note:** Keep `"name": "enterprise-docs"` in `package.json`. The build uses this name to find the matching entry under `repos` in `config.json`.

### After white-labeling

1. Run `npx gulp serve` and check the header, favicon, colors, and a few pages.
2. Run `npm test`.
3. Run `npm run build` and host the `public/` folder.
