const { readFileSync } = require('fs');
const { resolve } = require('path');

const config = JSON.parse(readFileSync(resolve('./config.json'), 'utf8'));
const packageConfig = JSON.parse(readFileSync(resolve('./package.json'), 'utf8'));

function getToc() {
    return JSON.parse(readFileSync(resolve('./left-toc.json'), 'utf8'));
}

const repoInfos = config.repos;

function getRepoInfo(repoName) {
    return repoInfos[Object.keys(repoInfos).find(repo => repoInfos[repo].name === repoName)];
}

module.exports = {
    baseUrl: `https://${config.publish.bucketName}`,
    config: config,
    getToc: getToc,
    repoName: packageConfig.name,
    apiBaseFolder: 'api-reference',
    repos: repoInfos,
    getRepoInfo: getRepoInfo
};
