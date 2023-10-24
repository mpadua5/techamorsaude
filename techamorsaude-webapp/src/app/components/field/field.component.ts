import { Component, Input } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import {
  IconDefinition,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { IField } from 'src/app/Interfaces/IField';
import { EnumTypeField } from 'src/app/utils/EnumTypeField';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent {
  @Input() fieldValues: IField = { id: '', label: '', required: false };
  buttonShowPassword: boolean = false;
  iconButtonShowPassword: IconDefinition = faEye;
  fieldFormControl: FormControl = new FormControl();
  validations: ValidatorFn[] = [];

  ngOnInit(): void {
    this.buttonShowPassword = this.fieldValues.type == EnumTypeField.PASSWORD;

    this.defineValidators();
  }

  defineValidators(): void {
    const { required, type } = this.fieldValues;
    if (required) this.validations.push(Validators.required);
    if (type == EnumTypeField.EMAIL) this.validations.push(Validators.email);

    this.fieldFormControl = new FormControl('', this.validations);
  }

  showPassword(): void {
    this.iconButtonShowPassword = faEyeSlash;
    this.fieldValues.type = EnumTypeField.TEXT;
  }

  hidePassword(): void {
    this.iconButtonShowPassword = faEye;
    this.fieldValues.type = EnumTypeField.PASSWORD;
  }
}
