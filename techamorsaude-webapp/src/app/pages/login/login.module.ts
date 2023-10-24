import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { FieldComponent } from 'src/app/components/field/field.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    LoginComponent,
    CardComponent,
    FieldComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule ,
    FontAwesomeModule
  ]
})
export class LoginModule { }
