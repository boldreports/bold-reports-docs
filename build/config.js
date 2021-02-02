/*!
*  filename: config.js
*  version : 2.3.26
*  Copyright © 2001 - 2021 Syncfusion Inc. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
const { readFileSync } = require('fs');
const { resolve, join } = require('path');

const repoConfig = JSON.parse(readFileSync(resolve('./config.json'), 'utf8'));
const docConfig = JSON.parse(readFileSync(join(__dirname, './', 'config.json'), 'utf8'));
const config = { ...docConfig, ...repoConfig };
const platform = { "platformOrder": [] };
const packageConfig = JSON.parse(readFileSync(resolve('./package.json'), 'utf8'));


function getToc() {
    return JSON.parse(readFileSync(resolve('./left-toc.json'), 'utf8'));
}

const repoInfos = config.repos;

function getRepoInfo(repoName) {
    return repoInfos[Object.keys(repoInfos).find(repo => repoInfos[repo].name === repoName)];
}

module.exports = {
    rootPath: './build/src/',
    
    platformOrder: platform.platformOrder,
    releaseVersion: config.siteVersion,
    config: config,
    getToc: getToc,
    repoName: packageConfig.name,
    
    
    
    repos: repoInfos,
    getRepoInfo: getRepoInfo
};