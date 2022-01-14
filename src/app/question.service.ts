import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { GroupQuestion } from './question-group';
import { TextboxQuestion } from './question-textbox';
import { ArrayQuestion } from './question-array';
import { CheckBoxQuestion } from './question-checkbox';
import { RadioBoxQuestion } from './question-radio';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  jsonData: any = [
    {
      "elementType": "group",
      "key": "person_name",
      "children": [
        {
          "elementType": "textbox",
          "class": "col-12 col-md-4 col-sm-12",
          "key": "first_name",
          "label": "First Name",
          "type": "text",
          "value": "",
          "required": true,
          "minlength": 3,
          "maxlength": 20,
          "order": 1
        },
        {
          "elementType": "textbox",
          "class": "col-12 col-md-4 col-sm-12",
          "key": "last_name",
          "label": "Last Name",
          "type": "text",
          "value": "",
          "required": true,
          "order": 2
        }
     ],
    },
    {
      "elementType": "textbox",
      "class": "col-12 col-md-4 col-sm-12",
      "key": "email",
      "label": "Email (Part 2 begins from here with title Personal details)",
      "type": "text",
      "value": "",
      "required": true,
      "minlength": 3,
      "maxlength": 20,
      "order": 3
    },
    {
      "elementType": "textbox",
      "class": "col-12 col-md-4 col-sm-12",
      "key": "mobile",
      "label": "Mobile Number",
      "type": "text",
      "value": "",
      "required": true,
      "order": 4
    },
    {
      "elementType": "textbox",
      "class": "col-12 col-md-4 col-sm-12",
      "key": "age",
      "label": "Age",
      "type": "text",
      "value": "",
      "required": true,
      "order": 4
    },
    {
      "elementType": "textbox",
      "class": "col-12 col-md-4 col-sm-12",
      "key": "Father Name",
      "label": "Father Name (Part 3 begins from here with Family details)",
      "type": "text",
      "value": "",
      "required": true,
      "minlength": 3,
      "maxlength": 20,
      "order": 5
    },
    {
      "elementType": "textbox",
      "class": "col-12 col-md-4 col-sm-12",
      "key": "mother_name",
      "label": "Mother Name",
      "type": "text",
      "value": "",
      "required": true,
      "order": 6
    }

  ];

  getQuestions() {

    let questions: any = [];

    this.jsonData.forEach(element => {
      if (element.elementType === 'textbox') {
        questions.push(new TextboxQuestion(element));
      } else if (element.elementType === 'dropdown') {
        questions.push(new DropdownQuestion(element));
      } else if (element.elementType === 'group'){
        questions.push(new GroupQuestion({
          key: element.key,
          children: this.createGroup(element.children),
          value: element.children.reduce((acc, elem) => {
            return {...acc, [elem.key]: elem.value}
          }, {})
        }));
      }
    });
    console.log(questions);
    return questions.sort((a, b) => a.order - b.order);
  }

  private createGroup(ar: any[]) {
    const outAr: any[] = [];
    ar.forEach(element => {
      if (element.elementType === 'textbox') {
        outAr.push(new TextboxQuestion(element));
      } else if (element.elementType === 'dropdown') {
        outAr.push(new DropdownQuestion(element));
      } else if (element.elementType === 'group') {
        outAr.push(new GroupQuestion({
          key: element.key,
          children: this.createGroup(element.children),
          value: element.children.reduce((acc, elem) => {
            return {...acc, [elem.key]: elem.value}
          }, {})
        }));
      }
    });
    return outAr;
  }

}