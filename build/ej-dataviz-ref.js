const gulp = require('gulp');
const { readFileSync } = require('fs');
const { sync } = require('glob');
var prevName = '';

gulp.task('ej-dataviz-ref', (done) => {
    const fileNames = sync('./docs/**/*.md*');
    for (let i = 0; i < fileNames.length; i++) {
        var content = readFileSync(fileNames[i], 'utf8');
        var reg = [/ej.map.min/g, /ej.lineargauge.min/g, /ej.circulargauge.min/g];
        for (var j = 0; j < reg.length; j++) {
            logContent(reg[j], fileNames[i], content)
        }
    }
    done();
});

function logContent(reg, fileName, content) {
    var regexMatchArray = [];
    var resultArray = [];
    var jsonResult = {};
    while ((result = reg.exec(content)) !== null) {
        regexMatchArray.push(result);
    }

    regexMatchArray.forEach(el => {
        jsonResult[el] = (jsonResult[el] || 0) + 1;
    })

    for (var k = 0; k < Object.keys(jsonResult).length; k++) {
        if (prevName !== fileName) {
            console.log(`\n****** ${fileName} ******`);
        }
        Object.values(jsonResult)[k] > 1 ? resultArray.push(`${Object.keys(jsonResult)[k]} is available ${Object.values(jsonResult)[k]} times`) : resultArray.push(`${Object.keys(jsonResult)[k]} is available ${Object.values(jsonResult)[k]} time`);
        prevName = fileName;
    }

    if (resultArray.length > 0) {
        console.log(resultArray.toString());
    }
}

module.exports.logContent = logContent;