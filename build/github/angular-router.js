const gulp = require('gulp');
const { mkdir, rm } = require('shelljs');
const { readFileSync, writeFileSync } = require('fs');
const { demos } = require('./../config');
const runSequence=require('gulp4-run-sequence');
const githubSamplePath = './.github-angular/src/app/';
const demosSamplePath = `./static/demos/${demos.angular}/`;

const reportViewerHash = 'report-viewer';
const reportDesignerHash = 'report-designer';

let importTemplate = `import { {{component}} } from '{{path}}';`;
let routerTemplate = `{ path: '{{path}}', component: {{component}} }`;
let importStatements = [`import { BrowserModule } from '@angular/platform-browser';`,
  `import { Type, ModuleWithProviders, NgModule } from '@angular/core';`,
  `import { BoldReportsModule } from '@boldreports/angular-reporting-components';`,
  `import { Routes, RouterModule } from '@angular/router';`
];
let moduleTemplate = `@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    BoldReportsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
})

export class AppRouterModule { }
`
let components = [];
let routes = [];


gulp.task('pre-generation', (done) => {
  let config = JSON.parse(readFileSync(demosSamplePath + 'samples.json', 'utf8'));
  rm('-rf', `${githubSamplePath}components`);
  mkdir('-p', [`${githubSamplePath}components/${reportViewerHash}`, `${githubSamplePath}components/${reportDesignerHash}`]);
  Object.keys(config).forEach((control) => {
    let reportPath = control === 'ReportViewer' ? reportViewerHash : reportDesignerHash;
    let samples = [];
    config[control].samples.forEach((sample) => {
      let routerPath = sample.sampleName.split(' ').filter(word => word).join('-').toLowerCase();
      let className = (control + sample.sampleName).split(' ').filter(word => word).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Component';
      samples.push({
        routerPath: routerPath,
        className: className,
        sampleName: sample.sampleName,
        metaData: sample.metaData
      });
      mkdir('-p', `${githubSamplePath}components/${reportPath}/${routerPath}`);
      const githubSampleDir = `${githubSamplePath}components/${reportPath}/${routerPath}/`;
      const demosSampleDir = `${demosSamplePath + reportPath}/${sample.subDirectory ? (sample.subDirectory.trim() + '/' + routerPath) : routerPath}/`;
      const angularFilePaths = [
        { demos: `${demosSampleDir}app.component.html`, github: `${githubSampleDir + routerPath}.component.html` },
        { demos: `${demosSampleDir}app.component.ts`, github: `${githubSampleDir + routerPath}.component.ts` },
        { demos: `${demosSampleDir}app.component.css`, github: `${githubSampleDir + routerPath}.component.css` }
      ];
      angularFilePaths.forEach((path) => {
        writeFileSync(path.github, readFileSync(path.demos, 'utf8')
          .replace(/AppComponent/g, className)
          .replace(/app.component/g, `${routerPath}.component`), 'utf8');
      });
    });
    config[control].samples = samples;
  });
  writeFileSync(`${githubSamplePath}common/samples.json`, JSON.stringify(config, null, 4), 'utf8');
  done();
});

gulp.task('generate-angular-router',  (done) => {
  runSequence('pre-generation',()=>{
  const config = JSON.parse(readFileSync(`${githubSamplePath}common/samples.json`, 'utf8'));
  let redirectPath;
  Object.keys(config).forEach((control) => {
    let prependHash = control === 'ReportViewer' ? reportViewerHash : reportDesignerHash;
    config[control].samples.forEach((sample) => {
      if (!redirectPath)
        redirectPath = `${prependHash}/${sample.routerPath}`;
      routes.push(routerTemplate.replace('{{path}}', `${prependHash}/${sample.routerPath}`).replace('{{component}}', sample.className));
      importStatements.push(importTemplate.replace('{{component}}', sample.className).replace('{{path}}', `../components/${prependHash}/${sample.routerPath}/${sample.routerPath}.component`));
      components.push(sample.className);
    });
  });

  routes.unshift(`{ path: '', redirectTo: '${redirectPath}', pathMatch: 'full' }`);
  routes.push(`{ path: '**', redirectTo: '${redirectPath}' }`);

  let importContent = importStatements.join('\n');
  let componentContent = `const components: any[] | Type<any> | ModuleWithProviders<{}> = [
  ${components.join(',\n  ')}
];`;
  let routerContent = `const routes: Routes = [
  ${routes.join(',\n\  ')}
];`;
  let Content = importContent + '\n\r' + componentContent + '\n\r' + routerContent + '\n\r' + moduleTemplate;
  writeFileSync(`${githubSamplePath}common/app-routing.module.ts`, Content, 'utf8');
  done();
});
});