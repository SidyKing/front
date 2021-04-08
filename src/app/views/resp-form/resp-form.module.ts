import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RespFormRoutingModule } from './resp-form-routing.module';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';


@NgModule({
  declarations: [ListeEtudiantsComponent],
  imports: [
    CommonModule,
    RespFormRoutingModule
  ]
})
export class RespFormModule { }
