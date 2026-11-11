const gulp = require('gulp');
const { mkdir, rm } = require('shelljs');
const { readFileSync, writeFileSync } = require('fs');
const { demos } = require('./../config');

const githubSamplePath = './.github-js/src/';
const demosSamplePath = `./static/demos/${demos.javascript}/`;

const reportViewerHash = 'report-viewer';
const reportDesignerHash = 'report-designer';



gulp.task('generate-js-router', (done) => {
  let config = JSON.parse(readFileSync(demosSamplePath + 'samples.json', 'utf8'));
  rm('-rf', `${githubSamplePath}controls`);
  mkdir('-p', [`${githubSamplePath}controls/${reportViewerHash}`, `${githubSamplePath}controls/${reportDesignerHash}`]);
  Object.keys(config).forEach((control) => {
    let reportPath = control === 'ReportViewer' ? reportViewerHash : reportDesignerHash;
    let samples = [];
    config[control].samples.forEach((sample) => {
      let routerPath = sample.sampleName.split(' ').filter(word => word).join('-').toLowerCase();
      samples.push({
        routerPath: routerPath,
        sampleName: sample.sampleName,
        metaData: sample.metaData
      });
      mkdir('-p', `${githubSamplePath}controls/${reportPath}/${routerPath}`);
      const githubSampleDir = `${githubSamplePath}controls/${reportPath}/${routerPath}/`;
      const demosSampleDir = `${demosSamplePath + reportPath}/${sample.subDirectory ? (sample.subDirectory.trim() + '/' + routerPath) : routerPath}/`;
      const jsFilePaths = [
        { demos: `${demosSampleDir}_raw.html`, github: `${githubSampleDir}index.html` },
        { demos: `${demosSampleDir}index.js`, github: `${githubSampleDir}index.js` },
      ];
      jsFilePaths.forEach((path) => {
        writeFileSync(path.github, readFileSync(path.demos, 'utf8'));
      });
    });
    config[control].samples = samples;
  });
  writeFileSync(`${githubSamplePath}common/samples.json`, JSON.stringify(config, null, 4), 'utf8');
  done();
});
