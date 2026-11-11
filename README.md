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
│   ├── lint/                Lint rules used by the test tasks
│   ├── pdf/, templates/     Resources used by the PDF and sample tasks
│   └── github/              Sample publishing tasks (not used by this site)
├── gatsby-config.js         Gatsby plugins
├── gatsby-node.js           Page creation
├── gatsby-browser.js        Browser-side Gatsby hooks
├── .htaccess                Web server rules copied with the site
├── config.json              Site settings: header label, version, links, domain, URL prefix
├── docs-structure.yaml      Top-level sections of the site
├── redirects.json           Redirects from old URLs to new URLs
├── common-files.json        Pages shared from other repositories (empty here)
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
| Links to trial, demo, feedback, blog, and support | `additionalInfo.url` in `config.json` |
| Header logo | Replace `src/assets/img/boldreports-logo.svg` (light theme) and `boldreports-logo-dark.svg` (dark theme). The size is set by `.header-logo` in `src/assets/css/style.css`. |
| Favicon | Replace `src/assets/img/favicon-32x32.png`, `favicon-180x180.png`, `favicon-192x192.png`, `favicon-270x270.png`, and `static/favicon.ico`. |
| Social sharing image and site name | Replace `src/assets/img/og-img.png`, and edit the `og:` values in `src/components/HeadTag.js`. |
| Colors and fonts | CSS variables in the `:root` blocks of `src/assets/css/style.css`. Header-only styles are in `header.css`, footer styles in `footer.css`. |
| Header content | `src/components/Header.js` |
| Footer copyright and legal links | `src/components/Footer.js` |
| Feedback form and help links | `src/components/Feedback.js` and `src/components/FocusButton.js` |
| 404 page | `static/404.js` |
| Analytics and tracking | Google Tag Manager ID and cookie domain in `src/components/HeadTag.js`, the tracking script URL in `src/templates/layout.js`, and `static/js/sitevisitor-tracking.js`. Remove them or replace them with your own. |
| Site domain used in canonical URLs | `publish.bucketName` in `config.json` |
| URL path prefix | `repos.enterprise.url` in `config.json`, or the `--prefix` build option |
| Product name inside the pages | Search and replace in the Markdown files under `docs/` |

> **Note:** Keep `"name": "enterprise-docs"` in `package.json`. The build uses this name to find the matching entry under `repos` in `config.json`.

After white-labeling:

1. Run `npx gulp serve` and check the header, footer, favicon, and colors in both light and dark themes.
2. Run `npm run build` and host the `public/` folder.
