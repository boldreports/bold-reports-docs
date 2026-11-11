const { readFileSync } = require('fs');
const { resolve, join } = require('path');

const config = JSON.parse(readFileSync(resolve('./config.json'), 'utf8'));
const packageConfig = JSON.parse(readFileSync(resolve('./package.json'), 'utf8'));
const commonFiles = JSON.parse(readFileSync(resolve('./common-files.json'), 'utf8'));

function getToc() {
    return JSON.parse(readFileSync(resolve('./left-toc.json'), 'utf8'));
}

const repoInfos = config.repos;

function getRepoInfo(repoName) {
    return repoInfos[Object.keys(repoInfos).find(repo => repoInfos[repo].name === repoName)];
}

module.exports = {
    rootPath: './build/',
    baseUrl: `https://${config.publish.bucketName}`,
    releaseVersion: config.siteVersion,
    config: config,
    getToc: getToc,
    repoName: packageConfig.name,
    commonFiles: commonFiles,
    apiBaseFolder: 'api-reference',
    demos: {
        javascript: 'javascript-reporting',
        angular: 'angular-reporting'
    },
    repos: repoInfos,
    largerSizeCommonFileRepo: config.largerSizeCommonFileRepo,
    getRepoInfo: getRepoInfo,
    copyrightPaths: []
};
