const { createTab } = require('./tab');
const { createTiles } = require('./tile.js');
const { updateReleaseNotes } = require('./release-note');
const { getToc } = require('./config.js');
const releaseNotes = 'Release Notes';

function updateContent(mdcontent, routerPath, frontmatter, currentFile) {
    const toc = getToc();
    if (isRegisterdFile(routerPath, toc)) {
        mdcontent = processImages(mdcontent, toc);
        if (isReleaseNotes(routerPath, toc)) {
            return updateReleaseNotes(mdcontent, frontmatter);
        } else {
            mdcontent = createTab(mdcontent, routerPath);
            mdcontent = createTiles(mdcontent, currentFile);
            return mdcontent;
        }
    }
}

function isReleaseNotes(routerPath, toc) {
    if (!toc)
        toc = getToc();
    if (isRegisterdFile(routerPath, toc)) {
        const routerData = toc.routerData[routerPath];
        return routerData.title === releaseNotes;
    } else {
        return undefined;
    }
}

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
    isReleaseNotes: isReleaseNotes
};
