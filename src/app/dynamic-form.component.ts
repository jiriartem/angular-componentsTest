import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  formControl: FormControl;
  payLoad = '';

  service : any = "Some Url"

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    const innerForm: FormGroup = this.qcs.toFormGroup(this.questions);
    this.form = new FormGroup({main: innerForm});
    console.log("Value", this.form.value);
    console.log("Form", this.form, innerForm);
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/