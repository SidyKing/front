import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadAutorisationComponent } from './download-autorisation/download-autorisation.component';
import { DownloadMemoireComponent } from './download-memoire.component';
import { DownloadRapportComponent } from './download-rapport/download-rapport.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'download Memoire'
    },
    children: [
      {
        path: '',
        redirectTo: 'download-memoire'
      },
      {
        path: 'download-memoire',
        component: DownloadMemoireComponent,
        data: {
          title: 'download Memoire'
        }
      },
      {
        path: 'download-rapport',
        component: DownloadRapportComponent,
        data: {
          title: 'download Rapport'
        }
      },
      {
        path: 'download-autorisation',
        component: DownloadAutorisationComponent,
        data: {
          title: 'download Autorisation'
        }
      },
    ]
      
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadMemoireRoutingModule { }
