// Product name used across the documentation content.
// Set it once in config.json ("product"); the tokens below are replaced at build time:
//   {{site.productName}}    -> product.name
//   {{site.productNameTM}}  -> product.name + product.trademark
const { config } = require('./config.js');

const product = config.product || {};
const productName = product.name || '';
const productNameTM = productName + (product.trademark || '');

function replaceProductName(content) {
    return content
        .replace(/{{site.productNameTM}}/g, () => productNameTM)
        .replace(/{{site.productName}}/g, () => productName);
}

// For text that is already JSON-encoded (for example the generated left-toc.json).
// The table of contents is shown as plain text, so the trademark markup is left out there.
function replaceProductNameInJson(json) {
    const encoded = JSON.stringify(productName).slice(1, -1);
    return json.replace(/{{site.productName(TM)?}}/g, () => encoded);
}

module.exports = { replaceProductName, replaceProductNameInJson };
