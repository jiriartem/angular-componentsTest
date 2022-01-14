import { QuestionBase } from './question-base';

export class RadioBoxQuestion extends QuestionBase<string> {
    controlType = 'radio';
    options: { key: string, value:any }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}