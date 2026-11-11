const _ = require('lodash');
const Promise = require('bluebird');
const fs = require('fs');
const { execSync } = require('child_process');
const { updateContent } = require('./build/content.js');
const config = require('./config.json');
const path = require('path');

// Redirects from old URLs to new URLs, defined in `redirects.json`.
const redirects = require('./redirects.json');

// Last commit date of every file under docs/, read with a single git call.
// (One `git log` per page made the startup several minutes slower.)
let gitDates = null;
function getGitDate(relativePath) {
	if (!gitDates) {
		gitDates = {};
		try {
			const log = execSync('git -c core.quotepath=false log --format=%x00%cI --name-only -- docs', {
				maxBuffer: 512 * 1024 * 1024,
				stdio: ['ignore', 'pipe', 'ignore'],
			}).toString();
			let date = '';
			log.split(/\r?\n/).forEach((line) => {
				if (line.startsWith('\0')) {
					date = line.slice(1).trim();
				} else if (line.trim() && !gitDates[line.trim()]) {
					// The log is newest first, so the first date seen for a file is its latest.
					gitDates[line.trim()] = date;
				}
			});
		} catch (error) {
			// Not a git checkout: the caller falls back to the file's modified time.
		}
	}
	return gitDates[`docs/${relativePath}`] || '';
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
	if (stage === 'build-javascript') {
		actions.setWebpackConfig({
			devtool: false,
		});
	}
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField, createRedirect } = actions;
	let slug;

	if (node.internal.type === `MarkdownRemark`) {
		const fileNode = getNode(node.parent);
		const parsedFilePath = path.parse(fileNode.relativePath);
		
		// Home page - slug Maping
		if (parsedFilePath.name == config.additionalInfo.homePage.fileName && parsedFilePath.dir == '') {
			slug = '/';
		} else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
			slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
		} else if (parsedFilePath.dir === '') {
			slug = `/${parsedFilePath.name}/`;
		} else {
			slug = `/${parsedFilePath.dir}/`;
		}

		if (node.internal.content) {
			let tocPath = slug; 
			
			// Home page - File Maping
			if (slug === '/' && parsedFilePath.name == config.additionalInfo.homePage.fileName && parsedFilePath.dir == '') {
				tocPath = `/${parsedFilePath.name}/`;
			}

			const updatedContent = updateContent(node.internal.content, tocPath, node.frontmatter, fileNode.relativePath);
			if (updatedContent) {
				node.internal.content = updatedContent;
			}
        }

		let lastUpdated = null;
		try {
			lastUpdated = getGitDate(fileNode.relativePath);
			if (!lastUpdated) throw new Error('Empty git timestamp');
		} catch (e) {
			try {
				const modified = fileNode.modifiedTime ? new Date(fileNode.modifiedTime) : null;
				if (modified && !Number.isNaN(modified.getTime())) {
					lastUpdated = modified.toISOString();
				} else {
					const statPath = fileNode.absolutePath || path.join(process.cwd(), 'docs', fileNode.relativePath);
					lastUpdated = fs.statSync(statPath).mtime.toISOString();
				}
			} catch (statError) {
				console.log('Git/stat error:', e || statError);
			}
		}
		createNodeField({ node, name: 'slug', value: slug });
		createNodeField({ node, name: 'lastUpdated', value: lastUpdated });
	}
};

exports.createPages = ({ graphql, actions }) => {
	const { createPage, createRedirect } = actions;
	redirects.forEach((redirect) => {
        createRedirect({
            ...redirect,
            redirectInBrowser: true,
            isPermanent: true,
        });

    });

	return new Promise((resolve, reject) => {
		const layout = path.resolve('./src/templates/layout.js');
		resolve(
			graphql(`
				{
					allMarkdownRemark {
						edges {
							node {
								html
								id
								frontmatter {
									description
									title
									keywords
									canonical
								}
								fields {
									slug
									lastUpdated
								}
							}
						}
					}
				}
			`).then((result) => {
				if (result.errors) {
					console.log(result.errors);
					reject(result.errors);
				}
				// Create blog posts pages.
				const posts = result.data.allMarkdownRemark.edges;
				_.each(posts, (post, index) => {
					createPage({
						path: post.node.fields.slug,
						component: layout,
						context: {
							html: post.node.html,
							slug: post.node.fields.slug,
							lastUpdated: post.node.fields.lastUpdated,
							frontmatter: post.node.frontmatter
						},
					});
				});
			})
		);
	});
};
