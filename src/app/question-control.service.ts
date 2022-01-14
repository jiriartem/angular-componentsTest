import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      if (question.controlType=="array") {
         group[question.key]=new FormArray([]);
      } else if(question.controlType === "group") {
        console.log(question.value);
        group[question.key] = this.toFormGroup(question.children);
      }
      else {
        let validators:any[]=[];
        if (question.required && question.controlType!='checkbox')
            validators.push(Validators.required);
            
        group[question.key] = new FormControl(question.value || '',validators);
      }
    });
    return new FormGroup(group);
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/