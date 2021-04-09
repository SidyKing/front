import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RespFormRoutingModule } from './resp-form-routing.module';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { AjoutRapporteurComponent } from './ajout-rapporteur/ajout-rapporteur.component';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderByPipe } from '../../order-by.pipe';

@NgModule({
  declarations: [ListeEtudiantsComponent, AjoutRapporteurComponent,OrderByPipe],
  imports: [
    CommonModule,
    RespFormRoutingModule,
    Ng2SearchPipeModule, FormsModule
  ]
})
export class RespFormModule { }
