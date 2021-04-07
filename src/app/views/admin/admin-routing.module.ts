import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AjoutRapporteurComponent } from './ajout-rapporteur/ajout-rapporteur.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'admin'
    },
    children: [
      {
        path: '',
        redirectTo: 'admin'
      },
      {
        path: 'admin',
        component: AdminComponent,
        data: {
          title: 'admin'
        }
      },
      {
        path: 'ajout-rapporteur',
        component: AjoutRapporteurComponent,
        data: {
          title: 'ajout-rapporteur'
        }
      },
    ]
      
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
