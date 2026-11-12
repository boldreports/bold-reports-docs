let releaseTemplates = {
    headerTemplate: `<h1 class="doc-release-header">{{:titleText}}</h1>
    <div class="doc-header-pallet-wrapper"><div class="doc-head-pallets doc-version">v{{:version}}</div><div class="doc-head-pallets doc-date">{{:date}}</div></div>\n`,
    bugFixTemplate: `<div class="doc-badge-wrapper doc-bug-fixes">
    <div class="doc-badge-coll"><span class="doc-badge-icons doc-icons icon-bug_fixes"></span>BUG FIXES</div>
    <div class="doc-support-skew"></div></div>`,
    featureTemplate: `<div class="doc-badge-wrapper doc-new-features">
    <div class="doc-badge-coll"><span class="doc-badge-icons doc-icons icon-features"></span>NEW FEATURES</div>
    <div class="doc-support-skew"></div></div>`,
    breakingChangesTemplate: `<div class="doc-badge-wrapper doc-breaking-changes">
    <div class="doc-badge-coll"><span class="doc-badge-icons doc-icons icon-breaking_changes"></span>Breaking Changes</div>
    <div class="doc-support-skew"></div></div>`,
    upgradeTemplate: `<div class="doc-badge-wrapper doc-upgrade">
    <div class="doc-badge-coll"><span class="doc-badge-icons doc-icons icon-upgrade"></span>Upgrade</div>
    <div class="doc-support-skew"></div></div>`
};

function updateReleaseNotes(mdcontent, frontmatter) {
    let headerContent = releaseTemplates.headerTemplate
        .replace(/{{:titleText}}/, mdcontent.match((/#.*/))[0].replace(/# /, ''))
        .replace(/{{:version}}/, frontmatter['version'])
        .replace(/{{:date}}/, frontmatter['date']);

    content = mdcontent
        .replace((/#.*/), headerContent)
        .replace(/#(.*) Bug Fixes/g, releaseTemplates.bugFixTemplate)
        .replace(/#(.*) New Features/g, releaseTemplates.featureTemplate)
        .replace(/#(.*) Breaking Changes/g, releaseTemplates.breakingChangesTemplate)
        .replace(/#(.*) Upgrade/g, releaseTemplates.upgradeTemplate);
    return content;
}

module.exports = {
    updateReleaseNotes: updateReleaseNotes
};