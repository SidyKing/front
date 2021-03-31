import { NgModule } from '@angular/core';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { UploadMemoireComponent } from './upload-memoire/upload-memoire.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* CE QUI MANQUAIT
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
*/

@NgModule({
  declarations: [UploadMemoireComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
