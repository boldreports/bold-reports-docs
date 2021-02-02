/*!
*  filename: toc.js
*  version : 2.3.26
*  Copyright © 2001 - 2021 Syncfusion Inc. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
const { writeFileSync, readFileSync } = require('fs');
const { sync } = require('glob');
const { platformOrder, config, getRepoInfo, repoName } = require('./config.js');
const argv = require('yargs').argv;

let tree, paths, searchData, accData, routerData, indexPageMapper;
const isHtml = 'html';

function generateToc() {
    let Files = sync('./docs/**/summary.json');
    let fileContent = {};
    indexPageMapper = {};
    Files.forEach((content) => {
        let jsonObj = JSON.parse(readFileSync(content, 'utf8'));
        let keys = Object.keys(jsonObj);
        let pathName = content.split('/')[content.split('/').length - 2];
        if (pathName !== 'docs' && keys.length === 1) {
            indexPageMapper[keys[0]] = pathName;
        }
        fileContent = Object.assign(jsonObj, fileContent);
    });
    let allTreeData = getTreeData(fileContent, indexPageMapper);
    let stringified = JSON.stringify(allTreeData, null, 4);
    writeFileSync('./left-toc.json', stringified, 'utf8');
};

function getTreeData(data, indexPageMapper) {
    let keys = Object.keys(data);
    let filteredKeys = keys.filter(key => {
        if (platformOrder.indexOf(key) === -1) {
            return 1;
        }
    });
    let filteredPlatform = platformOrder.filter(key => {
        if (keys.indexOf(key) !== -1) {
            return 1;
        }
    });
    keys = filteredKeys.concat(filteredPlatform);
    treeData = {};
    childTree = {};
    tree = [];
    paths = [];
    searchData = [];
    accData = [];
    routerData = {};
    keys.unshift(config.additionalInfo.homePage.name);
    data[config.additionalInfo.homePage.name] = '/';

    for (let i = 0; i < keys.length; i++) {
        let isCommon = typeof data[keys[i]] === 'string' ? true : false;
        if (isCommon) {
            accData.push({ header: `<div class='acc-path' data='${data[keys[i]] == '/' ? `/` : `/${removeMisc(data[keys[i]])}/`}'>${keys[i]}</div>` });
            paths.push(data[keys[i]] == '/' ? '/' : `/${removeMisc(data[keys[i]])}/`)
            routerData[data[keys[i]] == '/' ? '/' : `/${removeMisc(data[keys[i]])}/`] = { title: [keys[i]], isCommonSrc: true, isIndexPage: false, isDemo: Boolean(getQueryValue(isHtml, data[keys[i]])) };
            setPreviousPath(paths, data[keys[i]] == '/' ? '/' : `/${removeMisc(data[keys[i]])}/`)
            setNextPath(paths, data[keys[i]] == '/' ? '/' : `/${removeMisc(data[keys[i]])}/`)
            searchData.push({ title: keys[i], id: data[keys[i]] == '/' ? '/' : `/${removeMisc(data[keys[i]])}/`, component: '' });
        } else {
            if (!indexPageMapper[keys[i]])
                indexPageMapper[keys[i]] = keys[i].trim().split(' ').join('-').toLowerCase();
            routerData[`/${indexPageMapper[keys[i]]}/`] = { title: [keys[i]], isCommonSrc: false, isIndexPage: true, platform: keys[i], isDemo: Boolean(getQueryValue(isHtml, indexPageMapper[keys[i]])) };
            let previousPathIndex = paths.length - 1;
            routerData[`/${indexPageMapper[keys[i]]}/`]['prevPath'] = paths[previousPathIndex];
            generateTreeData(data[keys[i]], undefined, keys[i]);
            routerData[`/${indexPageMapper[keys[i]]}/`]['nextPath'] = paths[previousPathIndex + 1]
            accData.push({
                header: `<div class='acc-path' data='/${indexPageMapper[keys[i]]}/'>${keys[i]}</div>`,
                data: keys[i],
                content: `<div id='${keys[i]}' class='toc-tree'></div>`
            })
            treeData[keys[i]] = tree;
            tree = [];
        }
    }
    return {
        homePath: paths[0],
        accData: accData,
        treeData: treeData,
        routerData: routerData,
        indexPageMapper: indexPageMapper,
        searchData: searchData,
        pathPrefix: global.isProduction ? (argv.prefix || '/' + getRepoInfo(repoName).url) : '',
        siteVersion: argv.siteVersion ? argv.siteVersion : config.siteVersion,
        umsVersion: argv.umsVersion ? argv.umsVersion : config.umsVersion,
        reportserviceurl: argv.reportserviceurl ? argv.reportserviceurl : config.reportserviceurl,
        githubserviceloc: argv.githubserviceloc ? argv.githubserviceloc : config.githubserviceloc,
        repoBaseUrl: getRepoInfo(repoName).url,
        cx: getRepoInfo(repoName).cx,
        additionalInfo: config.additionalInfo
    };
}

function generateTreeData(data, parentIns, firstLevelKey) {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        let keyValue = data[keys[i]];
        if (keyValue instanceof Object) {
            let obj = generateTreeObj(keys[i]);
            let formattedName = obj.name.trim().split(' ').join('-').toLowerCase()
            obj['routerPath'] = parentIns ? `${parentIns.routerPath}/${formattedName}` : formattedName;
            let routerPath = `${indexPageMapper[firstLevelKey]}/${obj['routerPath']}`;
            obj.id = `/${routerPath}/`;
            routerData[`/${routerPath}/`] = { title: [firstLevelKey, keys[i]], isCommonSrc: false, isIndexPage: true, platform: firstLevelKey };
            let previousPathIndex = paths.length - 1;
            routerData[`/${routerPath}/`]['prevPath'] = paths[previousPathIndex];
            if (parentIns) {
                if (parentIns['child']) {
                    parentIns['child'].push(obj);
                } else {
                    parentIns['child'] = [obj];
                }
            } else {
                tree.push(obj);
            }
            generateTreeData(keyValue, obj, firstLevelKey);
            routerData[`/${routerPath}/`]['nextPath'] = paths[previousPathIndex + 1];
        } else {
            let obj = generateTreeObj(keys[i]);
            let formattedName = removeMisc(keyValue);
            obj['routerPath'] = parentIns ? `${parentIns.routerPath}/${formattedName}` : formattedName;
            let routerPath = `${indexPageMapper[firstLevelKey]}/${obj['routerPath']}`;
            obj.id = `/${routerPath}/`;
            paths.push(`/${routerPath}/`);
            routerData[`/${routerPath}/`] = { title: [firstLevelKey, keys[i]], isCommonSrc: false, isIndexPage: false, platform: firstLevelKey, isDemo: Boolean(getQueryValue(isHtml, keyValue)) };
            setPreviousPath(paths, `/${routerPath}/`)
            setNextPath(paths, `/${routerPath}/`)
            searchData.push({ title: keys[i], id: `/${routerPath}/`, component: firstLevelKey });
            if (parentIns) {
                if (parentIns['child']) {
                    parentIns['child'].push(obj);
                } else {
                    parentIns['child'] = [obj];
                }
            } else {
                tree.push(obj);
            }
        }
    }
}

function getQueryValue(queryName, keyValue) {
    const queryNameRegex = new RegExp('[\\?&]' + queryName + '=([^&#]*)').exec(keyValue);
    return queryNameRegex ? queryNameRegex[1] : undefined;
};

function removeQueryString(keyValue) {
    return keyValue.split('?')[0];
}

function setPreviousPath(paths, curPath) {
    if (paths[paths.length - 2]) {
        routerData[curPath]['prevPath'] = paths[paths.length - 2];
    }
}

function setNextPath(paths, nextpath) {
    if (paths[paths.length - 2]) {
        routerData[paths[paths.length - 2]]['nextPath'] = nextpath;
    }
}

function generateTreeObj(name) {
    return {
        name: name,
        tooltip: name
    };
}

function removeMisc(fname) {
    return removeQueryString(fname.replace('.md', '').trim());
}

module.exports = {
    generateToc: generateToc,
    removeMisc: removeMisc
};
