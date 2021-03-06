import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() form: any;
  @Input() data;
  _form: FormGroup;
  _index: number = 0;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formControlUpdate();
  }

  formControlUpdate() {
    this._form = this._formBuilder.group([]);
    this.form[this._index]['formFields'].forEach(element => {
      this._form.addControl(element.key, new FormControl(element.value, { validators: [] }));
    });
  }

  next() {
    alert(this.form[this._index].action);
    this._index = this._index <= this.form.length ? this._index++ : this._index;
    this.formControlUpdate();
  }
}
