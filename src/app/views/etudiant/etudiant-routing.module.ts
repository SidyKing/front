import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant.component';
import { UploadMemoireComponent } from './upload-memoire/upload-memoire.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'etudiant'
    },
    children: [
      {
        path: '',
        redirectTo: 'etudiant'
      },
      {
        path: 'etudiant',
        component: EtudiantComponent,
        data: {
          title: 'etudiant'
        }
      },
      {
        path: 'upload-memoire',
        component: UploadMemoireComponent,
        data: {
          title: 'upload-memoire'
        }
      },
    ]
      
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
