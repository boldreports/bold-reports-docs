const gulp = require('gulp');
const Typo = require('typo-js');
const dictionary = new Typo('en_US');
const { join, basename } = require('path');
const { readdirSync, statSync, readFileSync } = require('fs');
const { sync } = require('glob');
const { getIgnoredFiles } = require('./common-files');

let checkedFiles = {
    folders: [],
    files: [],
    upperCase: []
};

let customNames = [];

function getSubFolders(baseFolder, folderList = []) {
    let folders = readdirSync(baseFolder).filter(file => statSync(join(baseFolder, file)).isDirectory());
    folders.forEach(folder => {
        folderList.push(folder);
        getSubFolders(join(baseFolder, folder), folderList);
    });
    return folderList;
}

gulp.task('file-validation', (done) => {
    customNames = readFileSync('./.customnames', 'utf8').split(/\s+/);
    let commonIgnoredFiles = getIgnoredFiles();
    let folderNames = getSubFolders('./docs/');
    let filteredDir = commonIgnoredFiles.folderList.filter(dir => folderNames.indexOf(dir) === -1);
    folderNames = folderNames.concat(filteredDir);
    for (let i = 0; i < folderNames.length; i++) {
        checkFileNames(folderNames[i]);
    }
    const fileNames = sync('./docs/**/*.*', {
        ignore: ['./docs/**/*.json', ...commonIgnoredFiles.fileList]
    });
    for (let k = 0; k < fileNames.length; k++) {
        if (!statSync(fileNames[k]).isDirectory()) checkFileNames(fileNames[k], true);
    }
    printError(done);
});

function checkFileNames(filePath, isFiles) {
    const type = isFiles ? 'files' : 'folders';
    const fileName = isFiles ? basename(filePath).split('.')[0] : filePath;
    const splitted = fileName.split('-');
    let isValid = true;
    let isUpperCase = false;
    for (let j = 0; j < splitted.length; j++) {
        if (!dictionary.check(splitted[j]) && customNames.indexOf(splitted[j]) === -1) {
            isValid = false;
        }
        if (splitted[j].match(new RegExp(/^[A-Z]/)) !== null) {
            isUpperCase = true;
        }
    }
    if (!isValid) {
        checkedFiles.isFailed = true;
        checkedFiles[type].push(filePath);
    }
    if (isUpperCase) {
        checkedFiles.isFailed = true;
        checkedFiles.upperCase.push(filePath);
    }
}

function printError(done) {
    if (!checkedFiles.isFailed) {
        console.log('\n******* All Files Have Valid Names *******\n');
        done();
        return;
    }
    if (checkedFiles.folders.length) {
        console.log('\n******* The Below Folder Names Are Invalid *******\n');
        console.log(checkedFiles.folders.toString().split(',').join('\n'));
    }

    if (checkedFiles.files.length) {
        console.log('\n******* The Below File Names Are Invalid *******\n');
        console.log(checkedFiles.files.toString().split(',').join('\n'));
    }

    if (checkedFiles.upperCase.length) {
        console.log('\n******* The Below File Names  Have The UpperCase letters *******\n');
        console.log(checkedFiles.upperCase.toString().split(',').join('\n'));
    }
    process.exit(1);
}