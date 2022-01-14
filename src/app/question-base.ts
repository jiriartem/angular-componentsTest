export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  children: any[];
  maxlength: number;
  minlength: number;


  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    minlength?: number,
    maxlength?: number,

    order?: number,
    controlType?: string,
    children?: any
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.minlength = options.minlength;
    this.maxlength = options.maxlength;

    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.children = options.children || null;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/