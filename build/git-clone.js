const gulp = require('gulp');
const git = require('simple-git');
const { mkdir, rm } = require('shelljs');
const chalk = require('chalk');
const highlight = chalk.hex('#4ab576');
const argv = require('yargs').argv;
const { config } = require('./config');

const GITHUB_USER = "SyncfusionBuild", GiteaBuildAutomation_PrivateToken = process.env.GiteaBuildAutomation_PrivateToken;

const branchName = process.env.gitHubTargetBranch || argv.targetBranch || config.branch;

let url = "";

if (GITHUB_USER && GiteaBuildAutomation_PrivateToken)
  url = `https://${GITHUB_USER}:${GiteaBuildAutomation_PrivateToken}@gitea.syncfusion.com/bold-reports/js-api-docs.git`;
else
  url = "https://gitea.syncfusion.com/bold-reports/js-api-docs.git";

gulp.task('git-clone', (done) => {
  rm('-rf', './temp');
  mkdir('-p', './temp');
  console.log(`Cloning ${highlight('js-api-docs')} from ${highlight(branchName)} branch`);
  git().clone(url, 'temp', ['--depth=1', `--branch=${branchName}`], (errorLog) => {
    if (errorLog)
      console.log(errorLog);
    console.log(`Cloned ${highlight('js-api-docs')} from ${highlight(branchName)} branch`);
    done();
  });
});