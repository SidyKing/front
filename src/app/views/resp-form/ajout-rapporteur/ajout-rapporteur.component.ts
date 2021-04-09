import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-ajout-rapporteur',
  templateUrl: './ajout-rapporteur.component.html'
})
export class AjoutRapporteurComponent implements OnInit {
  allProfesseurs;
  adminForm : FormGroup;
  submitted = false;
  returnUrl : string;
  message = '';
  hide = true;
  constructor( 
    private formBulder : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private authService : AuthService,
  ) { 
   

  }
  ngOnInit(): void {
    
    this.authService.listeProfesseur().subscribe(data => {
      this.allProfesseurs = data;
      
    }) ;
    }

}
