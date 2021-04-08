import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { RespFormComponent } from './resp-form.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'resp-form'
    },
    children: [
      {
        path: '',
        redirectTo: 'resp-form'
      },
      {
        path: 'resp-form',
        component: RespFormComponent,
        data: {
          title: 'resp-form'
        },
      },
      {
        path: 'liste-etudiants',
        component: ListeEtudiantsComponent,
        data: {
          title: 'liste-etudiants'
        },
      }
     
    ]
      
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RespFormRoutingModule { }
