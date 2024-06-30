import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxQuillLite } from '../../projects/ngx-quill-lite/src/public-api';

import { AppComponent } from './app.component';
import { Editor1Component } from './editor1/editor1.component';
import { Editor2Component } from './editor2/editor2.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, Editor1Component, Editor2Component],
  imports: [BrowserModule, CommonModule, NgxQuillLite, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
