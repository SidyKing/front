import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-download-memoire',
  templateUrl: './download-memoire.component.html',
})
export class DownloadMemoireComponent implements OnInit {
  allMemoires;
  submitted = false;
  constructor(
    private authService : AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.getMemoire().subscribe(data => {
      this.allMemoires = data;
    });
  }
  onSubmit(idMemoire) {
    this.submitted =true;    
      this.authService.downloadMemoire(idMemoire);
    }
}
