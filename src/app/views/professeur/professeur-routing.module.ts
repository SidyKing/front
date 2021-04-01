import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadRapportComponent } from './upload-rapport/upload-rapport.component';
import { UploadAutorisationComponent } from './upload-autorisation/upload-autorisation.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'professeur'
    },
    children: [
      {
        path: '',
        redirectTo: 'upload-rapport'
      },
      {
        path: 'upload-autorisation',
        component: UploadAutorisationComponent,
        data: {
          title: 'upload-autorisation'
        }
      },
      {
        path: 'upload-rapport',
        component: UploadRapportComponent,
        data: {
          title: 'upload-rapport'
        }
      },
    ]
      
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseurRoutingModule { }
