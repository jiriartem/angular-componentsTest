import { QuestionBase } from './question-base';

export class CheckBoxQuestion extends QuestionBase<string> {
  controlType = 'checkbox';
  type: boolean;

  constructor(options: {} = {}) {
    super(options);
  }
}
