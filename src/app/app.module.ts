import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicGroupComponent }         from './dynamic-group.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule,     HttpModule,
    HttpClientModule ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, DynamicGroupComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/