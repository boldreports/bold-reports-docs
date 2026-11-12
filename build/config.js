const { readFileSync } = require('fs');
const { resolve } = require('path');

const config = JSON.parse(readFileSync(resolve('./config.json'), 'utf8'));

function getToc() {
    return JSON.parse(readFileSync(resolve('./left-toc.json'), 'utf8'));
}

// Address where the site is published, without a trailing slash.
// For example https://docs.example.com or https://docs.example.com/reports
const siteLink = (config.siteLink || '').replace(/\/+$/, '');

// Path part of the site link. The production build serves the site from this path.
// '/reports' for https://docs.example.com/reports, and '' when the site is at the root.
function getSitePath() {
    try {
        return new URL(siteLink).pathname.replace(/\/+$/, '');
    } catch (error) {
        return '';
    }
}

module.exports = {
    siteLink: siteLink,
    sitePath: getSitePath(),
    config: config,
    getToc: getToc,
    apiBaseFolder: 'api-reference'
};
