import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormArray, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-dynamic-group',
  templateUrl: './dynamic-group.component.html',
  providers: [
    QuestionControlService,
    {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => DynamicGroupComponent),
    }
  ]
})
export class DynamicGroupComponent implements OnInit, ControlValueAccessor {

  @Input() questions: QuestionBase<any>[] = [];
  @Input()
  set form (form: FormGroup) {
    this._form = form;
    this._form.valueChanges.subscribe(val => {
      this.onValueChanges(val);
    });
  }
  get form(): FormGroup {
    return this._form;
  }
  _form: FormGroup;
  @Input() key: string;
  payLoad = '';
  value: any = null;
  onChange: (val) => void;
  onTouched: (val) => void;

  service : any = "Some Url"

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    // this.form = this.qcs.toFormGroup(this.questions);
  }

  writeValue(val: any, dispatch: boolean = false, callback: boolean = true): void {
		this.form.setValue(val);
	}

  registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	onValueChanges(val: any): void {
		if (this.onChange) {
			this.onChange(val);
		}
	}

}
