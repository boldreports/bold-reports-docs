const tileRegex = /{:tiles}([\s\S]*?){:endtiles}/g;
const singleTileRegex = /{:tile}([\s\S]*?){:endtile}/g;
let messagePrinted = false;
let missingInfoMessagePrinted = false;

function createTiles(mdcontent, currentFile) {
    const tiles = mdcontent.match(tileRegex);
    //Maximum number of tiles to show
    const maxTilesToShow = 3;
    let missingInfo=false;
    if (tiles) {
        for (let i = 0; i < tiles.length; i++) {
            const tileContent = tiles[i].replace('{:tiles}', '').replace('{:endtiles}', '').trim();
            const singleTileMatches = tileContent.match(singleTileRegex);
            if (singleTileMatches) {
                if (singleTileMatches.length > maxTilesToShow) {
                    if (!messagePrinted) {
                        console.log(`\n******* The below file(s) has more than ${maxTilesToShow} tiles. Maximum tile count is ${maxTilesToShow}, so displaying the first ${maxTilesToShow} tiles  *******\n`);
                        messagePrinted = true;
                    }
                    console.log(`./docs/${currentFile}\n`);
                }
                const tilesHtml = singleTileMatches
                    .slice(0, maxTilesToShow)
                    .map((singleTileContent) => {
                        const titleMatch = singleTileContent.match(/title="([^"]+)"/);
                        const imageMatch = singleTileContent.match(/image="([^"]+)"/);
                        const linkMatch = singleTileContent.match(/link="([^"]+)"/);
                        if (titleMatch && imageMatch && linkMatch) {
                            const title = titleMatch[1];
                            const image = imageMatch[1];
                            const link = linkMatch[1];
                            return `
                                <a href="${link}" target="_blank" rel="noopener noreferrer" class="tile">
                                    <img src="${image}" alt="${title}" class="tileImage">
                                    <div class="tileTitleContainer">
                                        <p class="tileTitle">${title}</p>
                                    </div>
                                </a>`;
                        } else if(!missingInfo) {
                            missingInfo=true;
                            if (!missingInfoMessagePrinted) {
                                missingInfoMessagePrinted = true;
                                console.log(`\n******* The below file(s) has invalid title, image or link *******\n`);
                            }
                            console.log(`./docs/${currentFile}\n`);
                        }
                        return ''; 
                    })
                    .join('');
                mdcontent = mdcontent.replace(tiles[i], `<div id="tileContainer">${tilesHtml}</div>`);
            }}}
    return mdcontent;
}

module.exports = {
    createTiles,
};