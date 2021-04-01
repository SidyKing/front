import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesseurRoutingModule } from './professeur-routing.module';
import { UploadAutorisationComponent } from './upload-autorisation/upload-autorisation.component';
import { UploadRapportComponent } from './upload-rapport/upload-rapport.component';


@NgModule({
  declarations: [UploadAutorisationComponent, UploadRapportComponent],
  imports: [
    CommonModule,
    ProfesseurRoutingModule
  ]
})
export class ProfesseurModule { }
