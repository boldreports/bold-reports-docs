# Bold Reports Enterprise documentation

This repository holds the Bold Reports Enterprise documentation and everything needed to build it into a static website. The pages are written in Markdown, and the site is generated with [Gatsby](https://www.gatsbyjs.com/) and a set of [gulp](https://gulpjs.com/) tasks.

The repository is self-contained. The website template is in `src/`, and the gulp tasks are in `build/`. There is no separate helper package to install.

## Prerequisites

| Tool | Version | Notes |
| --- | --- | --- |
| Node.js | 22 LTS (22.17.1 recommended) | Comes with npm. |
| npm | 10 or later | Node.js includes npm. |
| Git | Any recent version | Needed to clone the repository. |

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
| `npm test` | Runs `gulp ci-test`: Markdown lint, spell check, and file validation. |
| `npx gulp clean` | Deletes the Gatsby cache and the generated pages, for a completely fresh start. |
| `npx gulp build` | Prepares the content only: copies `docs/` to `src/pages` and generates `left-toc.json`. |

### Site URL prefix

The production build is prepared to be served from the `/enterprise-reporting` path. To serve it from a different path, pass the prefix to the build.

```bash
npx gulp production-build --prefix=/docs
```

The default prefix comes from `repos.enterprise.url` in `config.json`.

### Troubleshooting

| Problem | Fix |
| --- | --- |
| `npm install` stops with `ERESOLVE could not resolve` | Make sure the `.npmrc` file in the repository root contains `legacy-peer-deps=true`. |
| The build stops with `Something went wrong installing the "sharp" module` | Run `npm rebuild sharp`, then build again. |

## Folder structure

```text
.
├── docs/                    Documentation pages (Markdown)
│   └── summary.json         Left table of contents: titles, slugs, and file names
├── src/                     Website template
│   ├── components/          Header, table of contents, search, feedback
│   ├── templates/           Page layout
│   └── assets/              Style sheets (css/) and logos and icons (img/)
├── static/
│   ├── images/              Images used by the documentation pages
│   ├── 404.js               404 page
│   ├── favicon.ico
│   └── robots.txt
├── build/                   gulp tasks
│   ├── *.js                 Build, serve, test, table of contents, and other tasks
│   └── lint/                Markdown lint rules used by the test tasks
├── gatsby-config.js         Gatsby plugins
├── gatsby-node.js           Page creation
├── gatsby-browser.js        Browser-side Gatsby hooks
├── .htaccess                Web server rules copied with the site
├── config.json              Site settings: product name, header label, domain, URL prefix
├── docs-structure.yaml      Top-level sections of the site
├── redirects.json           Redirects from old URLs to new URLs
├── .spelling                Word list for the spell check and the file-name check
├── .npmrc                   npm settings needed for the install
├── gulpfile.js              Loads the gulp tasks from build/
└── package.json             npm dependencies and scripts
```

The following items are generated. They are ignored by Git and must not be edited by hand:

| Path | Created by |
| --- | --- |
| `src/pages/`, `left-toc.json` | `gulp build` |
| `.cache/`, `public/` | Gatsby |
| `node_modules/` | `npm install` |

### Add or change a page

1. Add or edit the Markdown file under `docs/`.
2. For a new page, add its title and file name to `docs/summary.json` so that it appears in the left table of contents.
3. Put images under `static/images/` and reference them from the Markdown file with a path that starts with `/static/images/`.
4. Run `npx gulp serve` to preview the change.

## White-label the site

All branding lives in `config.json`, the website template in `src/`, and a few files in `static/`.

| What to change | Where |
| --- | --- |
| Product label next to the logo (`Enterprise`) | `additionalInfo.header` in `config.json` |
| Brand name, header logo, favicon, and social sharing image | See [Replace the brand name, logo, and favicon](#replace-the-brand-name-logo-and-favicon). |
| Colors and fonts | CSS variables in the `:root` blocks of `src/assets/css/style.css`. Header-only styles are in `header.css`. |
| Header content | `src/components/Header.js` |
| Feedback form | `src/components/Feedback.js` |
| Focus menu (Open in ChatGPT, Open in Claude) | `src/components/FocusButton.js` |
| 404 page | `static/404.js` |
| Analytics and tracking | Google Tag Manager ID and cookie domain in `src/components/HeadTag.js` and the tracking script URL in `src/templates/layout.js`. Remove them or replace them with your own. |
| Site domain used by the `gulp sitemap` task | `publish.bucketName` in `config.json` |
| URL path prefix | `repos.enterprise.url` in `config.json`, or the `--prefix` build option |
| Product name inside the pages | `product.name` in `config.json`. See [Change the product name](#change-the-product-name). |

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
| `src/assets/img/boldreports-logo.svg` | Header logo | SVG, 237 x 47 (about 5:1) |

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

Links to `boldreports.com` inside the pages are not changed by this setting.

> **Note:** Keep `"name": "enterprise-docs"` in `package.json`. The build uses this name to find the matching entry under `repos` in `config.json`.

After white-labeling:

1. Run `npx gulp serve` and check the header, favicon, and colors.
2. Run `npm run build` and host the `public/` folder.
