import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BoldReportsModule } from '@boldreports/angular-reporting-components';
import { AppComponent } from './app.component';

// data-visualization
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/common/bold.reports.common.min';
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/common/bold.reports.widgets.min';
//Reports
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/bold.report-viewer.min';
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/bold.report-designer.min';

// code-mirror
import 'codemirror/lib/codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/sql-hint';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/vb/vb';

import * as CodeMirror from 'codemirror';
const codemirror = 'CodeMirror';
window[codemirror] = CodeMirror;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoldReportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
