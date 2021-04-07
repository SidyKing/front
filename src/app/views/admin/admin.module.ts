import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AjoutRapporteurComponent } from './ajout-rapporteur/ajout-rapporteur.component';


@NgModule({
  declarations: [AjoutRapporteurComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
