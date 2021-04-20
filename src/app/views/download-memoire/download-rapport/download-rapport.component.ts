import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-download-rapport',
  templateUrl: './download-rapport.component.html',
})
export class DownloadRapportComponent implements OnInit {
  allRapports;
  submitted = false;
  constructor(
    private authService : AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.getRapport().subscribe(data => {
      this.allRapports = data;
    });
  }
  onSubmit(idRapport) {
    this.submitted =true;    
      this.authService.downloadRapport(idRapport);
    }
}

