const gulp = require('gulp');
const { test, rm, exec, cd } = require('shelljs');
const runSequence = require('gulp4-run-sequence');
const argv = require('yargs').argv;
const { baseUrl } = require('./config.js');

const url = argv.url || baseUrl; 
const subject = argv.subject ? argv.subject : '-';
const sourceUpdatedOn = argv.sourceUpdatedOn ? argv.sourceUpdatedOn : '-';
const sourceRevision = argv.sourceRevision ? argv.sourceRevision : '-';
const nugetSource = argv.nugetSource ? argv.nugetSource : '-';
const isReleaseBranch = (RegExp(/^((release\/|hotfix\/))/g).test(process.env.gitHubTargetBranch)) ? "Release/Hotfix" : "Development";

const repoURL = `https://github.com/data-science/bold-reports-docs-utilities` // Needs to check this whether data-science gruop also moved into gitHub
const branch = `development`;
const clonePath = `docs-utilities`;

gulp.task('clone-utils', (done) => {
    if (test('-d', clonePath))
        rm('-rf', clonePath)
       
    console.log(`cloning... ${repoURL} of branch ${branch} into ${clonePath}`);
    if (exec(`git clone --quiet ${repoURL} -b ${branch}  "${clonePath}"`, { async: false }).code !== 0) {
        console.log(`!!!... ${repoURL} of branch ${clonePath} not cloned successfully ...!!!`);
        process.exit(1);
    }
    done();
})

gulp.task('run-docs-sample-test', (done) => {
    cd(clonePath);
    exec(`npm install && gulp test --url="${url}" --subject="${subject}" --branchName="${isReleaseBranch}" --sourceUpdatedOn="${sourceUpdatedOn}" --sourceRevision="${sourceRevision}" --nugetSource="${nugetSource}"`);
    done();
});

gulp.task('docs-sample-test', (done) =>{
    runSequence('build', 'clone-utils', 'url-generation', 'run-docs-sample-test', done);
});