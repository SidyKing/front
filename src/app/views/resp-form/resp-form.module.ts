import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RespFormRoutingModule } from './resp-form-routing.module';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { AjoutRapporteurComponent } from './ajout-rapporteur/ajout-rapporteur.component';


@NgModule({
  declarations: [ListeEtudiantsComponent, AjoutRapporteurComponent],
  imports: [
    CommonModule,
    RespFormRoutingModule
  ]
})
export class RespFormModule { }
