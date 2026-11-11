const gulp = require('gulp');
const { readFileSync } = require('fs');
const { sync } = require('glob');

gulp.task('validate-trademark-symbol', function (done) {
    const failedFiles = [];
    const fullPath = sync('./docs/**/*.md*');
    for (const filePath of fullPath) {
        validateTrademarksInFile(filePath, failedFiles);
    }
    if (failedFiles.length > 0) {
        console.error('\n******* Validation failed: Please ensure that all occurrences of "Bold Reports" and "Syncfusion" are followed by the ® symbol. *******\n');
        console.table(failedFiles);
        process.exit(1);
    } else {
        console.log('\n******* Trademark validation succeeded for all files. *******\n');
        done();
    }
});

const validateTrademarksInFile = (filePath, failedFiles) => {
    const pattern = (trademark) => new RegExp(`\\b${trademark}\\b(?!<sup>®</sup>|[./\\\\)'\’])`, 'g'); // Special characters used in words like 'Bold Reports' and 'Syncfusion' will be ignored during validation.
    const trademarks = ['Bold Reports', 'Syncfusion'];
    const trademarksRegex = trademarks.map(pattern);
    const fileContent = readFileSync(filePath, 'utf8');
    const cleanedContent = fileContent.split('---').slice(2).join('---').replace(/`[^`]*`/g, '').trim();
    const failedMatchesCount = trademarksRegex.reduce((count, regex) => {
        const matches = cleanedContent.match(regex);
        return count + (matches ? matches.length : 0);
    }, 0);
    if (failedMatchesCount > 0) { failedFiles.push({ 'File Path': filePath, 'Total Occurrences': failedMatchesCount });}
};