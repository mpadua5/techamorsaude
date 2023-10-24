import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CardButton } from 'src/app/Interfaces/ICardButton';
import { IField } from 'src/app/Interfaces/IField';
import { EnumTypeField } from 'src/app/utils/EnumTypeField';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  titleLogin: string = 'Login';
  
  constructor(private router: Router) { }

  handlePrimaryButton: CardButton = {
    title: 'ENTRAR',
    action: () => {
      debugger;
      this.router.navigate(['/clinica'])
    },
  };

  fieldUser: IField = {
    id: 'user',
    label: 'E-mail',
    type: EnumTypeField.EMAIL,
    required: true,
  };

  fieldPassword: IField = {
    id: 'password',
    label: 'Senha',
    type: EnumTypeField.PASSWORD,
  };

}
