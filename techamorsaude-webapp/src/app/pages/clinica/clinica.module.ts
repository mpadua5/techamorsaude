import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicaRoutingModule } from './clinica-routing.module';
import { ClinicaComponent } from './clinica.component';


@NgModule({
  declarations: [
    ClinicaComponent
  ],
  imports: [
    CommonModule,
    ClinicaRoutingModule
  ]
})
export class ClinicaModule { }
