import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-download-autorisation',
  templateUrl: './download-autorisation.component.html',
})
export class DownloadAutorisationComponent implements OnInit {
  allAutorisations;
  submitted = false;
  constructor(
    private authService : AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.getAutorisation().subscribe(data => {
      this.allAutorisations = data;
    });
  }
  onSubmit(idAutorisation) {
    this.submitted =true;    
      this.authService.downloadAutorisation(idAutorisation);
    }
}

