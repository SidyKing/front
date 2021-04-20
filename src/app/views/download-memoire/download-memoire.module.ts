import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadMemoireRoutingModule } from './download-memoire-routing.module';
import { DownloadRapportComponent } from './download-rapport/download-rapport.component';
import { DownloadAutorisationComponent } from './download-autorisation/download-autorisation.component';


@NgModule({
  declarations: [DownloadRapportComponent, DownloadAutorisationComponent],
  imports: [
    CommonModule,
    DownloadMemoireRoutingModule
  ]
})
export class DownloadMemoireModule { }
