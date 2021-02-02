/*!
*  filename: content.js
*  version : 2.3.26
*  Copyright © 2001 - 2021 Syncfusion Inc. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
const { createTab } = require('./tab');

const { getToc } = require('./config.js');


function updateContent(mdcontent, routerPath, frontmatter) {
    const toc = getToc();
    if (isRegisterdFile(routerPath, toc)) {
        mdcontent = processImages(mdcontent, toc);
        return createTab(mdcontent, routerPath);}}



function isRegisterdFile(routerPath, toc) {
    return toc.routerData[routerPath];
}

function processImages(mdcontent, toc) {
    let content = mdcontent;
    const regex = /!\[(.*?)\]\((.*?)\)/g;
    let resultantOutput;
    const urlBasePath = toc.pathPrefix ? toc.pathPrefix + '/' : '/';
    if (mdcontent.indexOf('![') > -1) {
        while ((resultantOutput = regex.exec(mdcontent)) !== null) {
            if (resultantOutput.index === regex.lastIndex) regex.lastIndex++;
            let relativeImgPath = resultantOutput[2];
            if (relativeImgPath && relativeImgPath.indexOf('http') !== 0) {
                content = content.replace(relativeImgPath, (urlBasePath + relativeImgPath.replace('/static/', '')));
            }
        }
    }
    return content;
}

module.exports = {
    updateContent: updateContent,
    
};
