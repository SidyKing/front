import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { UploadMemoireComponent } from './upload-memoire/upload-memoire.component';


@NgModule({
  declarations: [UploadMemoireComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
