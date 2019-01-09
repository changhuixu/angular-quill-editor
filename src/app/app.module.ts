import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxQuillLite } from 'projects/ngx-quill-lite/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxQuillLite
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
