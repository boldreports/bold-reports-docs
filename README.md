# Bold Reports Enterprise documentation

This repository holds the Bold Reports Enterprise documentation and everything needed to build it into a static website. The pages are written in Markdown, and the site is generated with [Gatsby](https://www.gatsbyjs.com/) and a set of [gulp](https://gulpjs.com/) tasks.

The repository is self-contained. The website template is in `src/`, and the gulp tasks are in `build/`. There is no separate helper package to install.

## Prerequisites

| Tool | Version | Notes |
| --- | --- | --- |
| Node.js | 22.x LTS (22.17.1 recommended) | Comes with npm. |
| npm | 10 or later | Installed with Node.js. |
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

    Open `http://localhost:8000` in a browser. Changes to the template in `src/` reload automatically. Changes to the Markdown files in `docs/` need a restart of this command, because the pages are copied into `src/pages` when the command starts.

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
│   ├── components/          Header, footer, table of contents, search, feedback
│   ├── templates/           Page layout
│   └── assets/              Style sheets (css/) and logos and icons (img/)
├── static/
│   ├── assets/              Images used by the documentation pages
│   ├── js/                  Scripts served as-is
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
├── .spelling, .customnames  Word lists for the spell check
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
3. Put images under `static/assets/` and reference them from the Markdown file.
4. Run `npx gulp serve` to preview the change.

## White-label the site

All branding lives in `config.json`, the website template in `src/`, and a few files in `static/`.

| What to change | Where |
| --- | --- |
| Product label next to the logo (`Enterprise`) | `additionalInfo.header` in `config.json` |
| Header logo | Replace `src/assets/img/boldreports-logo.svg` (light theme) and `boldreports-logo-dark.svg` (dark theme). The size is set by `.header-logo` in `src/assets/css/style.css`. |
| Favicon | Replace `src/assets/img/favicon-32x32.png`, `favicon-180x180.png`, `favicon-192x192.png`, `favicon-270x270.png`, and `static/favicon.ico`. |
| Social sharing image and site name | Replace `src/assets/img/og-img.png`, and edit the `og:` values in `src/components/HeadTag.js`. |
| Colors and fonts | CSS variables in the `:root` blocks of `src/assets/css/style.css`. Header-only styles are in `header.css`, footer styles in `footer.css`. |
| Header content | `src/components/Header.js` |
| Feedback form | `src/components/Feedback.js` |
| Focus menu (Open in ChatGPT, Open in Claude) | `src/components/FocusButton.js` |
| 404 page | `static/404.js` |
| Analytics and tracking | Google Tag Manager ID and cookie domain in `src/components/HeadTag.js`, the tracking script URL in `src/templates/layout.js`, and `static/js/sitevisitor-tracking.js`. Remove them or replace them with your own. |
| Site domain used by the `gulp sitemap` task | `publish.bucketName` in `config.json` |
| URL path prefix | `repos.enterprise.url` in `config.json`, or the `--prefix` build option |
| Product name inside the pages | `product.name` in `config.json`. See [Change the product name](#change-the-product-name). |

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

1. Run `npx gulp serve` and check the header, footer, favicon, and colors in both light and dark themes.
2. Run `npm run build` and host the `public/` folder.
