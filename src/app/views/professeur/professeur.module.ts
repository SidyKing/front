import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfesseurRoutingModule } from './professeur-routing.module';
import { UploadAutorisationComponent } from './upload-autorisation/upload-autorisation.component';
import { UploadRapportComponent } from './upload-rapport/upload-rapport.component';


@NgModule({
  declarations: [UploadAutorisationComponent, UploadRapportComponent],
  imports: [
    CommonModule,
    ProfesseurRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfesseurModule { }
