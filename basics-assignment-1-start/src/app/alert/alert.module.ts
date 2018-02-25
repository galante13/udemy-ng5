import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlertSuccessComponent } from './success/alert-success.component';
import { AlertWarningComponent } from './warning/alert-warning.component';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [
    AlertComponent,
    AlertSuccessComponent,
    AlertWarningComponent
  ],
  exports: [
    AlertSuccessComponent,
    AlertWarningComponent
  ],
  providers: [],
  bootstrap: [],
  imports: [BrowserModule]
})
export class AlertModule { }
